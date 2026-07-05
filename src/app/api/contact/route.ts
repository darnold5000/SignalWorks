import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.projectType || !body.message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
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
          error: `Email service is not configured. Please contact us directly at ${contactEmail}.`,
          mailto: `mailto:${contactEmail}?subject=Project Inquiry from ${encodeURIComponent(body.name)}`,
        },
        { status: 503 },
      );
    }

    const resend = new Resend(resendApiKey);

    const htmlContent = `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
      <p><strong>Project Type:</strong> ${body.projectType}</p>
      ${body.budget ? `<p><strong>Budget:</strong> ${body.budget}</p>` : ""}
      ${body.timeline ? `<p><strong>Timeline:</strong> ${body.timeline}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${body.message.replace(/\n/g, "<br>")}</p>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: body.email,
      subject: `New inquiry: ${body.projectType} — ${body.name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
