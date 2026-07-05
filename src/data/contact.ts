export const buildOptions = [
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

export const contactNextSteps = [
  "I'll review your inquiry personally.",
  "I'll reach out using your preferred contact method.",
  "Most responses are within one business day.",
  "If we're a good fit, we'll schedule a short discovery call.",
] as const;

export const contactSuccessMessage =
  "Thanks! Your project inquiry has been received. I'll personally review it and get back to you within one business day using your preferred contact method.";
