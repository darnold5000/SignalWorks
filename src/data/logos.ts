export type ClientLogo = {
  name: string;
  shortName?: string;
  href?: string;
  /** TODO: Add logo image to public/logos/ when client permission is granted */
  logoSrc?: string;
};

export const clientLogos: ClientLogo[] = [
  { name: "Cornerstone Hoops", shortName: "Cornerstone", href: "/work/youth-basketball" },
  { name: "DAWG Youth Training", shortName: "DAWG", href: "/work/athletic-training" },
  { name: "Willow & Mane", shortName: "Willow & Mane", href: "/work/luxury-salon" },
  { name: "Oak Tree Golf Course", shortName: "Oak Tree", href: "/work/golf-course" },
  { name: "D-BAT", shortName: "D-BAT", href: "/work/batting-academy" },
  { name: "Zero Limits Baseball", shortName: "Zero Limits", href: "/work/baseball-facility" },
];
