export type GalleryItem = {
  src: string;
  label: string;
  alt: string;
};

export type FeatureItem = {
  name: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  transformation: string;
  before: string;
  whatWeBuilt: string;
  challenge: string;
  solution: string;
  impact: string;
  features: string[];
  featureDetails: FeatureItem[];
  growthFeatures: string[];
  image: string;
  mobileImage?: string;
  gallery: GalleryItem[];
  demoUrl: string;
  featured: boolean;
};

/** Shared growth capability catalog referenced by project.growthFeatures */
export const growthCapabilityCatalog: Record<
  string,
  { title: string; description: string }
> = {
  "online-scheduling": {
    title: "Online scheduling",
    description:
      "Let customers book appointments, classes, or tee times without phone tag.",
  },
  "recurring-payments": {
    title: "Recurring payments",
    description:
      "Collect memberships and packages on a predictable schedule.",
  },
  "membership-management": {
    title: "Membership management",
    description:
      "Track plans, renewals, and member status in one place.",
  },
  "customer-portals": {
    title: "Customer portals",
    description:
      "Give clients a private login for bookings, documents, and history.",
  },
  "parent-dashboards": {
    title: "Parent dashboards",
    description:
      "Parents manage athletes, schedules, and forms without back-and-forth.",
  },
  "staff-management": {
    title: "Staff management",
    description:
      "Coordinate instructors, stylists, or coaches with clearer internal tools.",
  },
  "digital-forms": {
    title: "Digital forms and waivers",
    description:
      "Collect signatures and intake details before the first visit.",
  },
  "email-text-automation": {
    title: "Email and text automation",
    description:
      "Send confirmations, reminders, and follow-ups automatically.",
  },
  "custom-admin-tools": {
    title: "Custom admin tools",
    description:
      "Build workflows around how your team already operates.",
  },
  "multi-location": {
    title: "Multi-location support",
    description:
      "Extend the experience as you add facilities, chairs, or markets.",
  },
};

export const projects: Project[] = [
  {
    slug: "youth-basketball",
    name: "Cornerstone Hoops",
    category: "Youth Sports",
    tagline:
      "A complete home for programs, schedules, registration, and parent information.",
    summary:
      "A high-energy youth basketball website designed to help families understand the program and register more easily.",
    transformation:
      "Turned a basic registration experience into a complete destination for programs, schedules, and parent information.",
    before:
      "Families were sent directly to a third-party signup page with limited information about the program.",
    whatWeBuilt:
      "A complete website with training options, schedules, coaching information, FAQs, and clear registration paths.",
    challenge:
      "The previous online experience depended primarily on a basic third-party registration page, leaving new families with limited information about the program.",
    solution:
      "Created a full website with program details, schedules, coaching information, frequently asked questions, and clear registration paths.",
    impact:
      "Families can learn about the program and decide whether it is a good fit before reaching the registration process.",
    features: [
      "Program pages",
      "Training schedules",
      "Registration links",
      "Parent FAQs",
      "Mobile-first design",
    ],
    featureDetails: [
      {
        name: "Clear program paths",
        description:
          "Visitors can quickly understand training options and who each session is for.",
      },
      {
        name: "Integrated scheduling",
        description:
          "Families move from interest to available sessions with fewer unnecessary steps.",
      },
      {
        name: "Coach credibility",
        description:
          "Parents see who leads the program before they commit.",
      },
      {
        name: "Mobile-first experience",
        description:
          "Every major action remains easy to complete from a phone.",
      },
    ],
    growthFeatures: [
      "online-scheduling",
      "parent-dashboards",
      "digital-forms",
      "email-text-automation",
      "recurring-payments",
    ],
    image: "/images/work/cornerstone-hoops/desktop.webp",
    mobileImage: "/images/work/cornerstone-hoops/mobile.webp",
    gallery: [
      {
        src: "/images/work/cornerstone-hoops/desktop.webp",
        label: "Homepage",
        alt: "Cornerstone Hoops homepage desktop screenshot",
      },
      {
        src: "/images/work/cornerstone-hoops/programs.webp",
        label: "Programs and Services",
        alt: "Cornerstone Hoops training programs section",
      },
      {
        src: "/images/work/cornerstone-hoops/schedule.webp",
        label: "Scheduling Experience",
        alt: "Cornerstone Hoops schedule and registration page",
      },
      {
        src: "/images/work/cornerstone-hoops/mobile.webp",
        label: "Mobile Experience",
        alt: "Cornerstone Hoops mobile homepage screenshot",
      },
    ],
    demoUrl: "https://basketball.hiresignalworks.com",
    featured: true,
  },
  {
    slug: "athletic-training",
    name: "DAWG Youth Training",
    category: "Athletic Training",
    tagline:
      "A booking-ready training site that makes sessions, coaches, and next steps obvious.",
    summary:
      "A modern athletic training website built to help parents find sessions, understand the program, and book with confidence.",
    transformation:
      "Replaced a fragmented signup flow with a clear training destination and online booking path.",
    before:
      "Parents relied on scattered posts and third-party signup links with little program context.",
    whatWeBuilt:
      "A full training website with session discovery, coaching details, FAQs, and online scheduling.",
    challenge:
      "Families needed more than a signup link — they needed to understand training options, schedules, and expectations before booking.",
    solution:
      "Built a complete marketing and scheduling experience with clear session information, coach context, and a direct booking path.",
    impact:
      "Parents can evaluate fit, pick a session, and complete the next step without chasing details across messages and forms.",
    features: [
      "Session discovery",
      "Online booking",
      "Coach profiles",
      "Parent FAQs",
      "Mobile booking",
    ],
    featureDetails: [
      {
        name: "Session discovery",
        description:
          "Available training options are easy to scan by age, focus, and timing.",
      },
      {
        name: "Integrated scheduling",
        description:
          "Customers can move from interest to booking with fewer handoffs.",
      },
      {
        name: "Parent-ready content",
        description:
          "Expectations, location details, and FAQs reduce pre-booking questions.",
      },
      {
        name: "Mobile-first booking",
        description:
          "Busy parents can reserve a spot from their phone in minutes.",
      },
    ],
    growthFeatures: [
      "online-scheduling",
      "recurring-payments",
      "parent-dashboards",
      "digital-forms",
      "email-text-automation",
      "custom-admin-tools",
    ],
    image: "/images/work/dawg-training/desktop.webp",
    mobileImage: "/images/work/dawg-training/mobile.webp",
    gallery: [
      {
        src: "/images/work/dawg-training/desktop.webp",
        label: "Homepage",
        alt: "DAWG Youth Training homepage desktop screenshot",
      },
      {
        src: "/images/work/dawg-training/programs.webp",
        label: "Programs and Services",
        alt: "DAWG Youth Training programs section",
      },
      {
        src: "/images/work/dawg-training/schedule.webp",
        label: "Scheduling Experience",
        alt: "DAWG Youth Training scheduling experience",
      },
      {
        src: "/images/work/dawg-training/mobile.webp",
        label: "Mobile Experience",
        alt: "DAWG Youth Training mobile homepage screenshot",
      },
    ],
    demoUrl: "https://training.hiresignalworks.com",
    featured: true,
  },
  {
    slug: "luxury-salon",
    name: "Willow & Mane",
    category: "Health and Beauty",
    tagline:
      "A refined salon experience that showcases services, stylists, and booking paths.",
    summary:
      "A luxury salon website designed to communicate atmosphere, service quality, and an easy next step for new guests.",
    transformation:
      "Elevated a basic booking presence into a branded destination for services, stylists, and new-guest onboarding.",
    before:
      "Prospective guests had limited ways to understand the salon, stylists, or which service path to choose.",
    whatWeBuilt:
      "A polished website with service menus, stylist profiles, bridal options, and clear booking entry points.",
    challenge:
      "Salon businesses often lose potential clients when the website cannot communicate quality, atmosphere, or how to book the right stylist.",
    solution:
      "Designed a calm, editorial site that presents services, stylists, studio atmosphere, and booking paths with clarity.",
    impact:
      "New guests can explore the salon experience and choose a stylist or service before they commit to an appointment.",
    features: [
      "Service menus",
      "Stylist profiles",
      "Booking links",
      "New guest forms",
      "Bridal packages",
    ],
    featureDetails: [
      {
        name: "Clear service paths",
        description:
          "Visitors can quickly understand and compare available services.",
      },
      {
        name: "Stylist discovery",
        description:
          "Guests choose a stylist based on specialty, style, and availability cues.",
      },
      {
        name: "New guest onboarding",
        description:
          "Intake and first-visit details reduce friction before the appointment.",
      },
      {
        name: "Brand atmosphere",
        description:
          "Photography and layout communicate the quality of the in-person experience.",
      },
    ],
    growthFeatures: [
      "online-scheduling",
      "customer-portals",
      "staff-management",
      "email-text-automation",
      "recurring-payments",
      "multi-location",
    ],
    image: "/images/work/willow-mane/desktop.webp",
    mobileImage: "/images/work/willow-mane/mobile.webp",
    gallery: [
      {
        src: "/images/work/willow-mane/desktop.webp",
        label: "Homepage",
        alt: "Willow & Mane salon homepage desktop screenshot",
      },
      {
        src: "/images/work/willow-mane/services.webp",
        label: "Programs and Services",
        alt: "Willow & Mane salon services page",
      },
      {
        src: "/images/work/willow-mane/stylists.webp",
        label: "Contact Experience",
        alt: "Willow & Mane stylist profiles and booking paths",
      },
      {
        src: "/images/work/willow-mane/mobile.webp",
        label: "Mobile Experience",
        alt: "Willow & Mane mobile homepage screenshot",
      },
    ],
    demoUrl: "https://salon.hiresignalworks.com",
    featured: true,
  },
  {
    slug: "golf-course",
    name: "Oak Tree Golf Course",
    category: "Golf and Recreation",
    tagline:
      "A modern course website with course information and a clear path to book tee times.",
    summary:
      "A golf course website built to help golfers learn the course, find key details, and move into tee time booking.",
    transformation:
      "Turned a limited online presence into a course destination with clearer information and booking flow.",
    before:
      "Golfers struggled to find course details and a reliable path from interest to a reserved tee time.",
    whatWeBuilt:
      "A modern website with course information, practical visitor details, and a booking-focused customer journey.",
    challenge:
      "Course websites often bury the essentials — rates, pace, amenities, and booking — behind outdated layouts and unclear calls to action.",
    solution:
      "Built a clean recreation website that leads with the course experience and makes tee time booking the obvious next step.",
    impact:
      "Visitors can evaluate the course and move toward booking without hunting through outdated pages or phone calls.",
    features: [
      "Course overview",
      "Tee time booking",
      "Visitor details",
      "Mobile-friendly layout",
      "Clear CTAs",
    ],
    featureDetails: [
      {
        name: "Course clarity",
        description:
          "Golfers quickly understand what to expect before they visit.",
      },
      {
        name: "Booking-first paths",
        description:
          "The next step to reserve a tee time is visible throughout the experience.",
      },
      {
        name: "Practical visitor info",
        description:
          "Hours, location, and course details reduce pre-visit questions.",
      },
      {
        name: "Mobile-ready browsing",
        description:
          "Players can review the course and book from a phone on the go.",
      },
    ],
    growthFeatures: [
      "online-scheduling",
      "recurring-payments",
      "membership-management",
      "customer-portals",
      "email-text-automation",
      "custom-admin-tools",
    ],
    image: "/images/work/oak-tree-golf/desktop.webp",
    mobileImage: "/images/work/oak-tree-golf/mobile.webp",
    gallery: [
      {
        src: "/images/work/oak-tree-golf/desktop.webp",
        label: "Homepage",
        alt: "Oak Tree Golf Course homepage desktop screenshot",
      },
      {
        src: "/images/work/oak-tree-golf/course.webp",
        label: "Programs and Services",
        alt: "Oak Tree Golf Course course information section",
      },
      {
        src: "/images/work/oak-tree-golf/booking.webp",
        label: "Scheduling Experience",
        alt: "Oak Tree Golf Course tee time booking experience",
      },
      {
        src: "/images/work/oak-tree-golf/mobile.webp",
        label: "Mobile Experience",
        alt: "Oak Tree Golf Course mobile homepage screenshot",
      },
    ],
    demoUrl: "https://golf.hiresignalworks.com",
    featured: false,
  },
  {
    slug: "batting-academy",
    name: "D-BAT",
    category: "Athletic Training",
    tagline:
      "An indoor baseball and softball academy site built for lessons, cages, camps, and memberships.",
    summary:
      "A batting academy website designed to help families find coaches, book lessons, rent cages, and explore memberships.",
    transformation:
      "Replaced a franchise-style presence with a clearer academy destination focused on training paths and booking next steps.",
    before:
      "Families struggled to compare instructors, understand cage vs. lesson options, or know where to book next.",
    whatWeBuilt:
      "A structured academy site with instructor discovery, coach matching, membership pricing, camps, and facility details.",
    challenge:
      "Training academies lose leads when visitors cannot tell which coach fits their athlete or how to book cages and lessons.",
    solution:
      "Organized instructors, training programs, memberships, and facility access into a clear parent-friendly journey.",
    impact:
      "Parents can match a coach, compare memberships, and take the next booking step without hunting across third-party tools.",
    features: [
      "Instructor directory",
      "AI coach finder",
      "Cage & lesson CTAs",
      "Memberships & pricing",
      "Camps & facility tour",
    ],
    featureDetails: [
      {
        name: "Coach discovery",
        description:
          "Parents can filter instructors by sport and booking availability.",
      },
      {
        name: "AI coach finder",
        description:
          "A guided quiz recommends instructors matched to an athlete’s goals.",
      },
      {
        name: "Clear training paths",
        description:
          "Lessons, cages, camps, and memberships are separated into obvious next steps.",
      },
      {
        name: "Mobile-first experience",
        description:
          "Busy parents can explore coaches and book from a phone.",
      },
    ],
    growthFeatures: [
      "online-scheduling",
      "membership-management",
      "parent-dashboards",
      "recurring-payments",
      "email-text-automation",
      "staff-management",
    ],
    image: "/images/work/dbat/desktop.webp",
    mobileImage: "/images/work/dbat/mobile.webp",
    gallery: [
      {
        src: "/images/work/dbat/desktop.webp",
        label: "Homepage",
        alt: "D-BAT homepage desktop screenshot",
      },
      {
        src: "/images/work/dbat/instructors.webp",
        label: "Programs and Services",
        alt: "D-BAT instructor directory page",
      },
      {
        src: "/images/work/dbat/memberships.webp",
        label: "Membership Options",
        alt: "D-BAT memberships and pricing page",
      },
      {
        src: "/images/work/dbat/mobile.webp",
        label: "Mobile Experience",
        alt: "D-BAT mobile homepage screenshot",
      },
    ],
    demoUrl: "https://dbat.hiresignalworks.com",
    featured: false,
  },
  {
    slug: "baseball-facility",
    name: "Zero Limits Baseball",
    category: "Youth Sports",
    tagline:
      "A recruiting-ready facility site built for athletes, parents, and program discovery.",
    summary:
      "A youth baseball facility website designed to showcase programs, training quality, and a clear path to inquire or schedule.",
    transformation:
      "Modernized an outdated facility presence into a fast, mobile-first program and recruiting destination.",
    before:
      "An outdated site made it hard for families to understand programs or trust the quality of the facility.",
    whatWeBuilt:
      "A premium facility website with program pages, strong calls to action, and a mobile-first experience for parents.",
    challenge:
      "Youth sports facilities lose interest when the website looks outdated, loads slowly on phones, or fails to explain programs clearly.",
    solution:
      "Rebuilt the experience around program clarity, facility credibility, and conversion paths that work for parents on mobile.",
    impact:
      "Families can evaluate programs and take the next step with confidence — whether that is scheduling training or visiting the facility.",
    features: [
      "Program pages",
      "Facility messaging",
      "Strong CTAs",
      "SEO structure",
      "Mobile responsive",
    ],
    featureDetails: [
      {
        name: "Program discovery",
        description:
          "Athletes and parents can quickly find the right training path.",
      },
      {
        name: "Facility credibility",
        description:
          "The site communicates quality before a family ever walks through the door.",
      },
      {
        name: "Conversion CTAs",
        description:
          "Clear next steps reduce drop-off between interest and inquiry.",
      },
      {
        name: "Mobile-first experience",
        description:
          "Parents researching from the sidelines can act immediately.",
      },
    ],
    growthFeatures: [
      "online-scheduling",
      "parent-dashboards",
      "membership-management",
      "digital-forms",
      "email-text-automation",
      "custom-admin-tools",
    ],
    image: "/images/work/zero-limits/desktop.webp",
    mobileImage: "/images/work/zero-limits/mobile.webp",
    gallery: [
      {
        src: "/images/work/zero-limits/desktop.webp",
        label: "Homepage",
        alt: "Zero Limits Baseball homepage desktop screenshot",
      },
      {
        src: "/images/work/zero-limits/programs.webp",
        label: "Programs and Services",
        alt: "Zero Limits Baseball training programs page",
      },
      {
        src: "/images/work/zero-limits/facility.webp",
        label: "Facility Experience",
        alt: "Zero Limits Baseball facility information page",
      },
      {
        src: "/images/work/zero-limits/mobile.webp",
        label: "Mobile Experience",
        alt: "Zero Limits Baseball mobile homepage screenshot",
      },
    ],
    demoUrl: "https://baseball.hiresignalworks.com",
    featured: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 3);
}

export function getProjectGrowthFeatures(project: Project) {
  return project.growthFeatures
    .map((id) => {
      const item = growthCapabilityCatalog[id];
      return item ? { id, ...item } : null;
    })
    .filter((item): item is { id: string; title: string; description: string } =>
      Boolean(item),
    );
}
