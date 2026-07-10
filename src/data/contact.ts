export const buildOptions = [
  "Personal Brand",
  "Launch Website",
  "Business Website",
  "Custom Software",
  "AI & Automation",
  "Not sure yet",
] as const;

export const engagementOptions = [
  "Growth Partnership",
  "Ownership Project",
  "Not sure yet",
] as const;

export const preferredContactOptions = [
  "Email",
  "Phone Call",
  "Text Message",
] as const;

export const launchTimeframeOptions = [
  "ASAP",
  "Within 30 days",
  "1–3 months",
  "Just exploring",
] as const;

export type PreferredContact = (typeof preferredContactOptions)[number];

export const contactFormIntro =
  "Most projects start with a short conversation—not a proposal. We'll talk through your goals, recommend the right website or software solution, and explain the best pricing option for your business. No pressure, no obligation.";

export const contactNextSteps = [
  "I'll personally review your project.",
  "I'll contact you using your preferred method.",
  "You'll typically hear back within one business day.",
  "If we're a good fit, we'll schedule a short discovery call.",
] as const;

export const contactFormReassurance =
  "No obligation. No sales pressure. Just a conversation about your project.";

export const contactSuccessMessage =
  "Thanks! Your project inquiry has been received. I'll personally review it and get back to you within one business day using your preferred contact method.";
