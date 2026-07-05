import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { PreferredContact } from "@/data/contact";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  preferredContact: PreferredContact;
  buildType: string;
  engagementModel: string;
  timeline?: string;
  message: string;
};

function requiresPhone(method: PreferredContact) {
  return method === "Phone Call" || method === "Text Message";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (
      !body.name ||
      !body.email ||
      !body.preferredContact ||
      !body.buildType ||
      !body.engagementModel ||
      !body.message
    ) {
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

    if (requiresPhone(body.preferredContact) && !body.phone?.trim()) {
      return NextResponse.json(
        { error: "Please enter a phone number for call or text follow-up." },
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
      <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
      ${body.phone ? `<p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>` : ""}
      ${body.company ? `<p><strong>Company:</strong> ${escapeHtml(body.company)}</p>` : ""}
      <p><strong>Preferred Contact:</strong> ${escapeHtml(body.preferredContact)}</p>
      <p><strong>Looking to Build:</strong> ${escapeHtml(body.buildType)}</p>
      <p><strong>How to Get Started:</strong> ${escapeHtml(body.engagementModel)}</p>
      ${body.timeline ? `<p><strong>Desired Launch Timeframe:</strong> ${escapeHtml(body.timeline)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(body.message).replace(/\n/g, "<br>")}</p>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: body.email,
      subject: `New inquiry: ${body.buildType} — ${body.name}`,
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
