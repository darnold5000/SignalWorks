import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getProposalBySlug } from "@/data/proposals";
import { escapeHtml, isValidEmail } from "@/lib/proposals/email";

type QuestionPayload = {
  slug: string;
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuestionPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();
    const slug = body.slug?.trim();

    if (!slug || !name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const proposal = getProposalBySlug(slug);
    if (!proposal) {
      return NextResponse.json(
        { error: "Proposal not found." },
        { status: 404 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Signal Works <hello@hiresignalworks.com>";
    const contactEmail =
      process.env.CONTACT_EMAIL || "hello@hiresignalworks.com";

    if (!resendApiKey) {
      return NextResponse.json(
        {
          error: `Email service is not configured. Please contact us at ${contactEmail}.`,
        },
        { status: 503 },
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Proposal question: ${proposal.proposalNumber} — ${name}`,
      html: `
        <h2>Proposal Question</h2>
        <p><strong>Proposal:</strong> ${escapeHtml(proposal.proposalNumber)} — ${escapeHtml(proposal.hero.title)}</p>
        <p><strong>Client:</strong> ${escapeHtml(proposal.clientName)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Question:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Proposal question error:", error);
    return NextResponse.json(
      { error: "Failed to send question. Please try again." },
      { status: 500 },
    );
  }
}
