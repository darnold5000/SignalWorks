import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getProposalBySlug } from "@/data/proposals";
import { escapeHtml, isValidEmail } from "@/lib/proposals/email";
import {
  createServiceClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";

type AcceptPayload = {
  slug: string;
  name: string;
  title: string;
  email: string;
  note?: string;
  approved?: boolean;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AcceptPayload;
    const name = body.name?.trim();
    const title = body.title?.trim();
    const email = body.email?.trim();
    const note = body.note?.trim() || null;
    const slug = body.slug?.trim();

    if (!slug || !name || !title || !email || !body.approved) {
      return NextResponse.json(
        { error: "Please complete all required fields and confirm approval." },
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

    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        {
          error:
            "Acceptance storage is not configured. Please contact Signal Works directly.",
        },
        { status: 503 },
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

    const acceptedAt = new Date().toISOString();
    const supabase = createServiceClient();

    const { error: dbError } = await supabase
      .from("sw_proposal_acceptances")
      .insert({
        proposal_slug: proposal.slug,
        proposal_number: proposal.proposalNumber,
        proposal_version: proposal.version,
        name,
        title,
        email,
        note,
        approved: true,
        accepted_at: acceptedAt,
      });

    if (dbError) {
      console.error("Proposal acceptance DB error:", dbError);
      return NextResponse.json(
        { error: "Unable to record acceptance. Please try again." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const internalHtml = `
      <h2>Proposal Accepted</h2>
      <p><strong>Proposal:</strong> ${escapeHtml(proposal.proposalNumber)} — ${escapeHtml(proposal.hero.title)}</p>
      <p><strong>Client:</strong> ${escapeHtml(proposal.clientName)}</p>
      <p><strong>Version:</strong> ${proposal.version}</p>
      <p><strong>Accepted at:</strong> ${escapeHtml(acceptedAt)}</p>
      <hr />
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Title:</strong> ${escapeHtml(title)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${note ? `<p><strong>Note:</strong></p><p>${escapeHtml(note).replace(/\n/g, "<br>")}</p>` : ""}
    `;

    const clientHtml = `
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thank you for accepting the <strong>${escapeHtml(proposal.hero.title)}</strong> (${escapeHtml(proposal.proposalNumber)}).</p>
      <p>We've recorded your approval and will follow up shortly with next steps for production deployment and the Guided Launch Program.</p>
      <p>If you have any questions in the meantime, reply to this email or reach us at ${escapeHtml(contactEmail)}.</p>
      <p>— Signal Works</p>
    `;

    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        replyTo: email,
        subject: `Proposal accepted: ${proposal.proposalNumber} — ${proposal.clientName}`,
        html: internalHtml,
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: `Confirmation: ${proposal.proposalNumber} accepted`,
        html: clientHtml,
      }),
    ]);

    return NextResponse.json({ success: true, acceptedAt });
  } catch (error) {
    console.error("Proposal accept error:", error);
    return NextResponse.json(
      { error: "Failed to process acceptance. Please try again." },
      { status: 500 },
    );
  }
}
