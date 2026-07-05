"use client";

import { useState } from "react";
import {
  buildOptions,
  contactFormReassurance,
  contactSuccessMessage,
  engagementOptions,
  launchTimeframeOptions,
  preferredContactOptions,
  type PreferredContact,
} from "@/data/contact";
import { siteConfig } from "@/lib/site";
import { Button } from "./Button";
import { FormSelect } from "./FormSelect";
import { cn } from "@/lib/utils";

function requiresPhone(method: PreferredContact) {
  return method === "Phone Call" || method === "Text Message";
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [preferredContact, setPreferredContact] = useState<PreferredContact>("Email");

  const phoneRequired = requiresPhone(preferredContact);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    if (requiresPhone(data.preferredContact as PreferredContact) && !data.phone?.trim()) {
      setStatus("error");
      setFeedback("Please enter a phone number so we can reach you by call or text.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong");
      }

      setStatus("success");
      setFeedback(contactSuccessMessage);
      setPreferredContact("Email");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : `Unable to send message. Please email ${siteConfig.email} directly.`,
      );
    }
  }

  const labelClasses = "mb-1.5 block text-sm text-foreground";
  const inputClasses =
    "w-full rounded-sm border border-neutral-300 bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/80 focus:border-neutral-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={inputClasses}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClasses}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className={inputClasses}
          autoComplete="organization"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            {phoneRequired ? "Phone *" : "Phone"}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required={phoneRequired}
            className={inputClasses}
            autoComplete="tel"
            placeholder={phoneRequired ? undefined : "Optional"}
          />
        </div>
      </div>

      <fieldset className="min-w-0">
        <legend className={cn(labelClasses, "mb-2.5")}>
          How would you like me to contact you? *
        </legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {preferredContactOptions.map((option) => {
            const selected = preferredContact === option;
            const inputId = `preferred-contact-${option.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <label
                key={option}
                htmlFor={inputId}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-sm border px-3 py-2.5 text-sm transition-all",
                  "focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2",
                  selected
                    ? "border-neutral-400 bg-neutral-100 font-semibold text-foreground shadow-sm"
                    : "border-neutral-300 bg-background font-normal text-muted hover:border-neutral-400 hover:bg-neutral-50",
                )}
              >
                <input
                  id={inputId}
                  type="radio"
                  name="preferredContact"
                  value={option}
                  required
                  checked={selected}
                  onChange={() => setPreferredContact(option)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                    selected ? "bg-foreground" : "bg-transparent",
                  )}
                  aria-hidden="true"
                />
                <span className="leading-snug">{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="buildType" className={labelClasses}>
            What are you looking to build? *
          </label>
          <FormSelect id="buildType" name="buildType" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {buildOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </FormSelect>
        </div>
        <div>
          <label htmlFor="engagementModel" className={labelClasses}>
            How would you like to get started? *
          </label>
          <FormSelect id="engagementModel" name="engagementModel" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {engagementOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </FormSelect>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className={labelClasses}>
          Desired launch timeframe
        </label>
        <FormSelect id="timeline" name="timeline" defaultValue="">
          <option value="">Select a timeframe</option>
          {launchTimeframeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </FormSelect>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell me about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClasses, "resize-y")}
          placeholder="Tell me about your business, what you're hoping to accomplish, and any features you already know you need."
        />
      </div>

      {feedback && (
        <p
          className={cn(
            "text-sm leading-relaxed",
            status === "success" ? "text-foreground" : "text-red-600",
          )}
          role="status"
        >
          {feedback}
        </p>
      )}

      <div>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Start My Project"}
        </Button>
        <p className="mt-3 text-sm text-muted">{contactFormReassurance}</p>
      </div>
    </form>
  );
}
