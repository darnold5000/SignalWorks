export type ClientLogo = {
  name: string;
  shortName?: string;
  href?: string;
  /** TODO: Add logo image to public/logos/ when client permission is granted */
  logoSrc?: string;
};

export const clientLogos: ClientLogo[] = [
  { name: "Cornerstone Hoops", shortName: "Cornerstone", href: "/work/youth-basketball" },
  { name: "DAWGZ Youth Training", shortName: "DAWGZ", href: "/work/athletic-training" },
  { name: "Willow & Mane", shortName: "Willow & Mane", href: "/work/luxury-salon" },
  { name: "Batter Up", shortName: "Batter Up", href: "/work/batting-academy" },
  { name: "Hair by Maya", shortName: "Hair by Maya", href: "/work/personal-stylist" },
  { name: "Maren Cole", shortName: "Maren Cole", href: "/work/creator-platform" },
  { name: "Pine Tree Golf Course", shortName: "Pine Tree", href: "/work/golf-course" },
  { name: "NorthBridge Wealth", shortName: "NorthBridge", href: "/work/wealth-management" },
  { name: "Zero Limits Baseball", shortName: "Zero Limits", href: "/work/baseball-facility" },
];
