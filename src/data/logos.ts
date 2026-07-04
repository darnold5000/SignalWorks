export type ClientLogo = {
  name: string;
  shortName?: string;
  href?: string;
  /** TODO: Add logo image to public/logos/ when client permission is granted */
  logoSrc?: string;
};

export const clientLogos: ClientLogo[] = [
  { name: "Market Street Wealth Management", shortName: "Market Street", href: "/work/market-street" },
  { name: "Zero Limits Baseball", shortName: "Zero Limits", href: "/work/zero-limits" },
  { name: "Dugout Intel", href: "/work/dugout-intel" },
  { name: "Gym Meet Tracker", shortName: "Gym Scores", href: "/work/gymnastics-meet-tracker" },
  { name: "Cheer Meet Tracker", shortName: "Cheer Tracker", href: "/work/cheer-meet-tracker" },
  { name: "OnDeck Reps", href: "/work/ondeck-reps" },
];
