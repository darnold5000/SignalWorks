"use client";

import { useState } from "react";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site";

const projectTypes = [
  "Business website",
  "Website redesign",
  "Custom web app",
  "AI automation",
  "SEO/AEO",
  "Ongoing support",
  "Not sure yet",
];

const budgetRanges = [
  "Under $3,000",
  "$3,000–$6,500",
  "$6,500–$12,000",
  "$12,000+",
  "Monthly support only",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

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
      setMessage("Thank you! Your message has been sent. I'll get back to you soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
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
      <div className="grid gap-6 sm:grid-cols-2">
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
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium">
            Project type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className={inputClasses}
            defaultValue=""
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium">
            Budget range
          </label>
          <select id="budget" name="budget" className={inputClasses} defaultValue="">
            <option value="">Select a range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="mb-2 block text-sm font-medium">
          Timeline
        </label>
        <input
          id="timeline"
          name="timeline"
          type="text"
          placeholder="e.g. 4–6 weeks, flexible, ASAP"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClasses}
          placeholder="Tell me about your project, goals, and any relevant details."
        />
      </div>

      {message && (
        <p
          className={`text-sm ${status === "success" ? "text-foreground" : "text-red-600"}`}
          role="status"
        >
          {message}
        </p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
