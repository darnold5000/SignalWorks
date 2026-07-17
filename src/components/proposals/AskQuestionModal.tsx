"use client";

import { useEffect, useId, useState } from "react";
import type { Proposal } from "@/data/proposals/types";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

type AskQuestionModalProps = {
  proposal: Proposal;
  open: boolean;
  onClose: () => void;
};

export function AskQuestionModal({
  proposal,
  open,
  onClose,
}: AskQuestionModalProps) {
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

    try {
      const response = await fetch("/api/proposals/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: proposal.slug,
          name: String(formData.get("name") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          message: String(formData.get("message") ?? "").trim(),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send question.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send question. Please try again.",
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
            <h2 id={titleId} className="font-display text-3xl tracking-tight">
              Message sent
            </h2>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Thanks — Signal Works will reply shortly regarding{" "}
              {proposal.proposalNumber}.
            </p>
            <div className="mt-8">
              <Button type="button" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8">
            <h2 id={titleId} className="font-display text-3xl tracking-tight">
              Ask a question
            </h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Questions about {proposal.hero.title} go directly to Signal Works.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="question-name" className={labelClasses}>
                  Name *
                </label>
                <input
                  id="question-name"
                  name="name"
                  required
                  className={inputClasses}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="question-email" className={labelClasses}>
                  Email *
                </label>
                <input
                  id="question-email"
                  name="email"
                  type="email"
                  required
                  className={inputClasses}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="question-message" className={labelClasses}>
                  Question *
                </label>
                <textarea
                  id="question-message"
                  name="message"
                  required
                  rows={5}
                  className={cn(inputClasses, "resize-y")}
                />
              </div>
            </div>

            {feedback && (
              <p className="mt-4 text-sm text-red-700" role="alert">
                {feedback}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send question"}
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
