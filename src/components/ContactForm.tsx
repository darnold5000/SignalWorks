"use client";

import { useState } from "react";
import {
  buildOptions,
  contactSuccessMessage,
  engagementOptions,
  launchTimeframeOptions,
  preferredContactOptions,
  type PreferredContact,
} from "@/data/contact";
import { siteConfig } from "@/lib/site";
import { Button } from "./Button";
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

  const inputClasses =
    "w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
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
        <label htmlFor="company" className="mb-2 block text-sm font-medium">
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

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
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
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone{phoneRequired ? " *" : ""}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required={phoneRequired}
            className={inputClasses}
            autoComplete="tel"
            placeholder={phoneRequired ? "Required for call or text" : "Optional"}
          />
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 block text-sm font-medium">
          How would you like me to contact you? *
        </legend>
        <div className="space-y-2">
          {preferredContactOptions.map((option) => (
            <label
              key={option}
              className={cn(
                "flex cursor-pointer items-center gap-3 border border-border px-4 py-3 text-sm transition-colors",
                preferredContact === option && "border-foreground",
              )}
            >
              <input
                type="radio"
                name="preferredContact"
                value={option}
                required
                checked={preferredContact === option}
                onChange={() => setPreferredContact(option)}
                className="h-4 w-4 accent-foreground"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="buildType" className="mb-2 block text-sm font-medium">
            What are you looking to build? *
          </label>
          <select
            id="buildType"
            name="buildType"
            required
            className={inputClasses}
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            {buildOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="engagementModel" className="mb-2 block text-sm font-medium">
            How would you like to get started? *
          </label>
          <select
            id="engagementModel"
            name="engagementModel"
            required
            className={inputClasses}
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            {engagementOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="mb-2 block text-sm font-medium">
          Desired launch timeframe
        </label>
        <select id="timeline" name="timeline" className={inputClasses} defaultValue="">
          <option value="">Select a timeframe</option>
          {launchTimeframeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Tell me about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClasses}
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

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
