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
    tag: "Sports Tech",
  },
  {
    title: "Dugout Intel",
    description:
      "AI-powered scouting that turns GameChanger screenshots into structured opponent reports.",
    tag: "AI",
  },
  {
    title: "AI Scouting Reports",
    description:
      "Vision AI workflows that extract player stats from screenshots and generate game-ready scouting data.",
    tag: "Automation",
  },
  {
    title: "Cheer Meet Tracker",
    description:
      "Competition management for cheer events — divisions, schedules, and performance data in one platform.",
    tag: "Sports Tech",
  },
  {
    title: "OnDeck Reps",
    description:
      "Marketplace concept connecting youth baseball players who need live reps with available teammates.",
    tag: "Marketplace",
  },
];
