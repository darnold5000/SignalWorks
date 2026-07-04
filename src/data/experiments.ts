export type Experiment = {
  title: string;
  description: string;
  href?: string;
  tag?: string;
};

export const recentExperiments: Experiment[] = [
  {
    title: "Gym Meet Tracker",
    description:
      "Live meet tracking for gymnastics — schedules, scores, and rankings parents can follow in real time.",
    href: "/work/gymnastics-meet-tracker",
    tag: "Sports Tech",
  },
  {
    title: "Dugout Intel",
    description:
      "AI-powered scouting that turns GameChanger screenshots into structured opponent reports.",
    href: "/work/dugout-intel",
    tag: "AI",
  },
  {
    title: "AI Scouting Reports",
    description:
      "Vision AI workflows that extract player stats from screenshots and generate game-ready scouting data.",
    href: "/work/dugout-intel",
    tag: "Automation",
  },
  {
    title: "Cheer Meet Tracker",
    description:
      "Competition management for cheer events — divisions, schedules, and performance data in one platform.",
    href: "/work/cheer-meet-tracker",
    tag: "Sports Tech",
  },
  {
    title: "OnDeck Reps",
    description:
      "Marketplace concept connecting youth baseball players who need live reps with available teammates.",
    href: "/work/ondeck-reps",
    tag: "Marketplace",
  },
];
