"use client";

import { useEffect, useId, useState } from "react";
import type { Proposal } from "@/data/proposals/types";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

type AcceptProposalModalProps = {
  proposal: Proposal;
  open: boolean;
  onClose: () => void;
};

export function AcceptProposalModal({
  proposal,
  open,
  onClose,
}: AcceptProposalModalProps) {
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setFeedback("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const approved = formData.get("approved") === "on";

    if (!approved) {
      setStatus("error");
      setFeedback("Please confirm that you approve this proposal.");
      return;
    }

    try {
      const response = await fetch("/api/proposals/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: proposal.slug,
          name: String(formData.get("name") ?? "").trim(),
          title: String(formData.get("title") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          note: String(formData.get("note") ?? "").trim() || undefined,
          approved: true,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to accept proposal.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to accept proposal. Please try again.",
      );
    }
  }

  const labelClasses = "mb-1.5 block text-sm text-foreground";
  const inputClasses =
    "w-full rounded-sm border border-neutral-300 bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/80 focus:border-neutral-500";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-4 sm:items-center"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto border border-border bg-background shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        {status === "success" ? (
          <div className="p-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              Confirmed
            </p>
            <h2 id={titleId} className="mt-3 font-display text-3xl tracking-tight">
              Proposal accepted
            </h2>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Thank you. We&apos;ve recorded your approval of{" "}
              {proposal.proposalNumber} and sent confirmation emails to you and
              Signal Works. We&apos;ll follow up shortly with next steps for
              production deployment.
            </p>
            <div className="mt-8">
              <Button type="button" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              {proposal.proposalNumber}
            </p>
            <h2 id={titleId} className="mt-3 font-display text-3xl tracking-tight">
              Accept proposal
            </h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Confirm approval on behalf of {proposal.clientName}. Final service
              terms will be documented in the Signal Works service agreement.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="accept-name" className={labelClasses}>
                  Name *
                </label>
                <input
                  id="accept-name"
                  name="name"
                  required
                  className={inputClasses}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="accept-title" className={labelClasses}>
                  Title *
                </label>
                <input
                  id="accept-title"
                  name="title"
                  required
                  className={inputClasses}
                  autoComplete="organization-title"
                />
              </div>
              <div>
                <label htmlFor="accept-email" className={labelClasses}>
                  Email *
                </label>
                <input
                  id="accept-email"
                  name="email"
                  type="email"
                  required
                  className={inputClasses}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="accept-note" className={labelClasses}>
                  Optional note
                </label>
                <textarea
                  id="accept-note"
                  name="note"
                  rows={3}
                  className={cn(inputClasses, "resize-y")}
                />
              </div>
              <label className="flex items-start gap-3 text-sm leading-relaxed">
                <input
                  type="checkbox"
                  name="approved"
                  required
                  className="mt-1 h-4 w-4 rounded-sm border-neutral-300"
                />
                <span>
                  I have reviewed and approve this proposal on behalf of{" "}
                  {proposal.clientName}.
                </span>
              </label>
            </div>

            {feedback && (
              <p className="mt-4 text-sm text-red-700" role="alert">
                {feedback}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Submitting…" : "Confirm acceptance"}
              </Button>
              <Button type="button" variant="secondary" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
