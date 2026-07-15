export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  href?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Families can finally understand the program before they register — the site makes the next step obvious.",
    author: "Cornerstone Hoops",
    role: "Youth Sports",
    href: "/work/youth-basketball",
  },
  {
    quote:
      "Parents noticed immediately how much easier it became to find sessions and book training.",
    author: "DAWGZ Youth Training",
    role: "Athletic Training",
    href: "/work/athletic-training",
  },
];
