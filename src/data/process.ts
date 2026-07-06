export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Conversation",
    description:
      "We learn about your business, your customers, and what you need from your website. Plain language — no jargon, no pressure.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We plan your pages, photos, and content — and share it with you for feedback before anything goes live.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We create your website, set up contact forms, maps, booking, and anything else your business needs.",
  },
  {
    number: "04",
    title: "Launch & grow",
    description:
      "We go live, handle hosting and updates, and keep improving your site as your business grows.",
  },
];
