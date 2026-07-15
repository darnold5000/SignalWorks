export type GalleryItem = {
  src: string;
  label: string;
  alt: string;
  /** Portrait phone screenshots — shown full-height instead of a cropped landscape frame */
  layout?: "desktop" | "mobile";
};

export type FeatureItem = {
  name: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** Optional product framing shown near the category (e.g. Digital Brand Platform) */
  productType?: string;
  tagline: string;
  summary: string;
  transformation: string;
  before: string;
  whatWeBuilt: string;
  /** Short card copy for Before (2–3 lines). Falls back to `before`. */
  cardBefore?: string;
  /** Short card copy for What We Built (2–3 lines). Falls back to `whatWeBuilt`. */
  cardBuilt?: string;
  /** One-line card summary. Falls back to `transformation`. */
  cardLine?: string;
  /** Small scope chips shown near the screenshot on works cards */
  metrics?: string[];
  /** Unique differentiator badge on works cards (e.g. Booking Platform) */
  badge?: string;
  /** Card section label override (default: Before) */
  beforeLabel?: string;
  /** Card section label override (default: What We Built) */
  builtLabel?: string;
  /** Live demo CTA label (default: Explore Live Website) */
  demoCtaLabel?: string;
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
    slug: "batting-academy",
    name: "Batter Up",
    category: "Athletic Training",
    tagline:
      "An indoor baseball and softball academy site built for lessons, cages, camps, and memberships.",
    summary:
      "A batting academy website designed to help families find coaches, book lessons, rent cages, and explore memberships.",
    transformation:
      "Reimagined a conventional franchise website experience into a modern academy platform that makes training options, instructors, memberships, and next steps easier to understand.",
    before:
      "The existing experience followed a familiar franchise-style structure, but families had to work harder to compare instructors, understand lesson and cage options, and determine the best path forward.",
    whatWeBuilt:
      "A more engaging academy website with instructor discovery, coach matching, clear training paths, membership comparisons, camp listings, and detailed facility information.",
    cardBefore:
      "Families had to work harder to compare instructors and choose the right training path.",
    cardBuilt:
      "An academy platform for coaches, lessons, cages, camps, and memberships.",
    metrics: ["Lesson Booking", "Coach Profiles", "Memberships"],
    badge: "AI Features",
    cardLine:
      "An academy platform for coaches, lessons, cages, and memberships.",
    challenge:
      "The existing experience followed a familiar franchise-style structure, but families had to work harder to compare instructors, understand lesson and cage options, and determine the best path forward.",
    solution:
      "A more engaging academy website with instructor discovery, coach matching, clear training paths, membership comparisons, camp listings, and detailed facility information.",
    impact:
      "Parents can match a coach, compare memberships, and take the next booking step without hunting across third-party tools.",
    features: [
      "Instructor directory",
      "AI coach finder",
      "Lessons and cage rentals",
      "Membership pricing",
      "Camps and facility tour",
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
        alt: "Batter Up homepage desktop screenshot",
      },
      {
        src: "/images/work/dbat/instructors.webp",
        label: "Baseball Training",
        alt: "Batter Up baseball training page with instructor cards",
      },
      {
        src: "/images/work/dbat/memberships.webp",
        label: "Membership Options",
        alt: "Batter Up memberships page with Platinum and Gold plans",
      },
      {
        src: "/images/work/dbat/mobile.webp",
        label: "Mobile Experience",
        layout: "mobile",
        alt: "Batter Up mobile homepage with booking actions",
      },
    ],
    demoUrl: "https://battingcages.hiresignalworks.com",
    featured: false,
  },
  {
    slug: "athletic-training",
    name: "DAWGZ Youth Training",
    category: "Athletic Training",
    tagline:
      "A booking-ready training site that makes sessions, coaches, and next steps obvious.",
    summary:
      "A modern athletic training website built to help parents find sessions, understand the program, and book with confidence.",
    transformation:
      "Expanded a social-media-based presence into a professional training platform built around program discovery, communication, and online booking.",
    before:
      "Facebook served as the main source for announcements, training updates, and signup information, making it difficult for new families to quickly understand everything DAWGZ offered.",
    whatWeBuilt:
      "A dedicated training website where families can explore programs, learn about the coaching approach, find answers to common questions, and move directly into scheduling.",
    cardBefore:
      "Facebook carried announcements and signups, so new families struggled to understand the full program.",
    cardBuilt:
      "A booking-ready training site for programs, coaches, FAQs, and online scheduling.",
    metrics: ["Lesson Booking", "Coach Profiles", "Programs"],
    badge: "Online Booking",
    cardLine:
      "A booking-ready training site for sessions, coaches, and parents.",
    challenge:
      "Facebook served as the main source for announcements, training updates, and signup information, making it difficult for new families to quickly understand everything DAWGZ offered.",
    solution:
      "A dedicated training website where families can explore programs, learn about the coaching approach, find answers to common questions, and move directly into scheduling.",
    impact:
      "Parents can evaluate fit, pick a session, and complete the next step without chasing details across messages and forms.",
    features: [
      "Training programs",
      "Online booking",
      "Coach information",
      "Parent FAQs",
      "Mobile scheduling",
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
        alt: "DAWGZ Youth Training homepage desktop screenshot",
      },
      {
        src: "/images/work/dawg-training/programs.webp",
        label: "Training Programs",
        alt: "DAWGZ Youth Training programs page with Little Dawgz and Big Dawgz",
      },
      {
        src: "/images/work/dawg-training/admin.webp",
        label: "Staff Dashboard",
        alt: "DAWGZ Admin staff dashboard with overview metrics and today’s sessions",
      },
      {
        src: "/images/work/dawg-training/mobile.webp",
        label: "Mobile Experience",
        layout: "mobile",
        alt: "DAWGZ Youth Training mobile homepage screenshot",
      },
    ],
    demoUrl: "https://dawgz.hiresignalworks.com",
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
      "Refreshed a dated salon website into a polished, welcoming experience that makes it easier to explore services, meet the stylists, and request an appointment.",
    before:
      "The existing website provided basic salon information, but the design no longer reflected the quality of the brand and guests did not have a convenient way to book directly with a stylist.",
    whatWeBuilt:
      "A modern salon website with organized service menus, individual stylist profiles, new-guest guidance, bridal offerings, and clear booking paths throughout the experience.",
    cardBefore:
      "The old site felt dated and guests could not book a stylist online with confidence.",
    cardBuilt:
      "A polished salon experience for services, stylists, and appointment requests.",
    metrics: ["Stylist Booking", "Service Menus", "New Guest Flow"],
    badge: "Stylist Booking",
    cardLine:
      "A refined salon experience for services, stylists, and appointments.",
    challenge:
      "The existing website provided basic salon information, but the design no longer reflected the quality of the brand and guests did not have a convenient way to book directly with a stylist.",
    solution:
      "A modern salon website with organized service menus, individual stylist profiles, new-guest guidance, bridal offerings, and clear booking paths throughout the experience.",
    impact:
      "New guests can explore the salon experience and choose a stylist or service before they commit to an appointment.",
    features: [
      "Service menus",
      "Stylist profiles",
      "Stylist booking",
      "New-guest guidance",
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
        layout: "mobile",
        alt: "Willow & Mane mobile homepage screenshot",
      },
    ],
    demoUrl: "https://willowsalon.hiresignalworks.com",
    featured: true,
  },
  {
    slug: "golf-course",
    name: "Pine Tree Golf Course",
    category: "Golf and Recreation",
    tagline:
      "A modern course website with course information and a clear path to book tee times.",
    summary:
      "A golf course website built to help golfers learn the course, find key details, and move into tee time booking.",
    transformation:
      "Modernized the course’s online presence and created a clear path for golfers to explore the facility, find essential information, and reserve a tee time.",
    before:
      "The existing website had a more traditional design and offered course information, but golfers could not book tee times online and key visitor details were not always easy to find.",
    whatWeBuilt:
      "A refreshed golf course website with course details, rates, visitor information, lessons and events, prominent calls to action, and an integrated tee-time booking experience.",
    cardBefore:
      "Course details and next steps were hard to find for first-time visitors.",
    cardBuilt:
      "A clearer visitor path for course info, rates, and tee-time booking.",
    metrics: ["Online Tee Times", "Events", "Course Info"],
    badge: "Tee Time Booking",
    cardLine:
      "A clearer path from course discovery to booking a tee time.",
    challenge:
      "The existing website had a more traditional design and offered course information, but golfers could not book tee times online and key visitor details were not always easy to find.",
    solution:
      "A refreshed golf course website with course details, rates, visitor information, lessons and events, prominent calls to action, and an integrated tee-time booking experience.",
    impact:
      "Visitors can evaluate the course and move toward booking without hunting through outdated pages or phone calls.",
    features: [
      "Course overview",
      "Tee-time booking",
      "Rates and details",
      "Events and lessons",
      "Mobile-friendly design",
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
        alt: "Pine Tree Golf Course homepage desktop screenshot",
      },
      {
        src: "/images/work/oak-tree-golf/course.webp",
        label: "Programs and Services",
        alt: "Pine Tree Golf Course course information section",
      },
      {
        src: "/images/work/oak-tree-golf/booking.webp",
        label: "Scheduling Experience",
        alt: "Pine Tree Golf Course tee time booking experience",
      },
      {
        src: "/images/work/oak-tree-golf/mobile.webp",
        label: "Mobile Experience",
        layout: "mobile",
        alt: "Pine Tree Golf Course mobile homepage screenshot",
      },
    ],
    demoUrl: "https://pinetreegolf.hiresignalworks.com",
    featured: false,
  },
  {
    slug: "youth-basketball",
    name: "Cornerstone Hoops",
    category: "Youth Sports",
    tagline:
      "A complete home for programs, schedules, registration, and parent information.",
    summary:
      "A high-energy youth basketball website designed to help families understand the program and register more easily.",
    transformation:
      "Turned a registration-first online presence into a complete destination where families can learn about training, view schedules, and confidently choose the right opportunity.",
    before:
      "Program registration was handled through SignUpGenius, while schedules, updates, and important details were shared through more traditional communication channels.",
    whatWeBuilt:
      "A central website that brings training options, schedules, program information, coaching details, FAQs, and registration links together in one easy-to-navigate experience.",
    cardBefore:
      "Registration lived in SignUpGenius while schedules and updates were scattered across other channels.",
    cardBuilt:
      "One site for programs, schedules, coaching details, FAQs, and registration.",
    metrics: ["Scheduling", "Registration", "Parent Portal"],
    badge: "Registration Platform",
    cardLine:
      "A complete home for youth basketball programs, schedules, and registration.",
    challenge:
      "Program registration was handled through SignUpGenius, while schedules, updates, and important details were shared through more traditional communication channels.",
    solution:
      "A central website that brings training options, schedules, program information, coaching details, FAQs, and registration links together in one easy-to-navigate experience.",
    impact:
      "Families can learn about the program and decide whether it is a good fit before reaching the registration process.",
    features: [
      "Program pages",
      "Training schedules",
      "Registration links",
      "Parent information",
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
        layout: "mobile",
        alt: "Cornerstone Hoops mobile homepage screenshot",
      },
    ],
    demoUrl: "https://cornerstonehoops.vercel.app",
    featured: true,
  },
  {
    slug: "personal-stylist",
    name: "Hair by Maya",
    category: "Health and Beauty",
    tagline:
      "A personal stylist site built for booking, services, and client trust.",
    summary:
      "A focused booking website for an individual stylist — services, pricing, before-and-afters, and a clear path to schedule.",
    transformation:
      "Turned a stylist into a bookable personal brand with clear services and a direct scheduling experience.",
    before:
      "Clients had to find Maya through the salon or social posts without a dedicated booking destination.",
    whatWeBuilt:
      "A personal brand site with service menus, pricing, transformations, location details, and online booking.",
    cardBefore:
      "Services and proof of work were hard to scan before requesting a booking.",
    cardBuilt:
      "A focused stylist site with clear services, gallery proof, and direct booking.",
    metrics: ["Direct Booking", "Service Menus", "Gallery"],
    badge: "Direct Booking",
    cardLine:
      "A focused stylist brand site with clear services and booking.",
    challenge:
      "Independent stylists often lose bookings when they lack a simple place for clients to learn about their work and schedule online.",
    solution:
      "Created a focused one-stylist website that highlights specialty, pricing, results, and booking in a few clear steps.",
    impact:
      "Clients can review Maya’s work and book directly — without navigating a full salon roster first.",
    features: [
      "Service & pricing menus",
      "Online booking",
      "Before & after gallery",
      "Location details",
      "Mobile-first booking",
    ],
    featureDetails: [
      {
        name: "Clear service paths",
        description:
          "Clients can quickly scan color, cut, and styling options with pricing.",
      },
      {
        name: "Direct booking",
        description:
          "The next step from interest to appointment is always visible.",
      },
      {
        name: "Proof of work",
        description:
          "Before-and-after photos help clients trust the stylist’s craft.",
      },
      {
        name: "Mobile-first experience",
        description:
          "Most clients can book from a phone in a few taps.",
      },
    ],
    growthFeatures: [
      "online-scheduling",
      "email-text-automation",
      "customer-portals",
      "recurring-payments",
      "digital-forms",
    ],
    image: "/images/work/hair-by-maya/desktop.webp",
    mobileImage: "/images/work/hair-by-maya/mobile.webp",
    gallery: [
      {
        src: "/images/work/hair-by-maya/desktop.webp",
        label: "Homepage",
        alt: "Hair by Maya homepage desktop screenshot",
      },
      {
        src: "/images/work/hair-by-maya/services.webp",
        label: "Programs and Services",
        alt: "Hair by Maya services and pricing section",
      },
      {
        src: "/images/work/hair-by-maya/booking.webp",
        label: "Scheduling Experience",
        alt: "Hair by Maya booking experience",
      },
      {
        src: "/images/work/hair-by-maya/mobile.webp",
        label: "Mobile Experience",
        layout: "mobile",
        alt: "Hair by Maya mobile homepage screenshot",
      },
    ],
    demoUrl: "https://hairbymaya.hiresignalworks.com",
    featured: false,
  },
  {
    slug: "creator-platform",
    name: "The Routine Review",
    category: "Creator & Sports Education",
    productType: "Digital Brand Platform",
    tagline:
      "A professional creator platform that consolidates educational content, partnerships, and community in one brand destination.",
    summary:
      "A digital brand platform for The Routine Review — gymnastics education, Score Notes, resources, and brand partnerships in one destination.",
    transformation:
      "Elevated a gymnastics educator's online presence into a professional media brand with content, partnerships, and clear next steps.",
    before:
      "Content and resources were spread across social platforms and individual links, making it difficult for followers and brands to discover everything from a single destination.",
    whatWeBuilt:
      "Designed a centralized platform where visitors can explore educational content, Score Notes, videos, brand collaborations, recommended products, and future membership opportunities—all within a cohesive brand experience.",
    cardBefore:
      "Content and resources were scattered across social links instead of one destination.",
    cardBuilt:
      "A brand platform for education, Score Notes, videos, and partnerships.",
    metrics: ["Content Hub", "Partnerships", "Video Library"],
    badge: "Content Platform",
    cardLine:
      "A gymnastics media brand for education, Score Notes, and partnerships.",
    beforeLabel: "The Previous Experience",
    builtLabel: "The Signal Works Approach",
    demoCtaLabel: "Explore Live Platform",
    challenge:
      "Content and resources were spread across social platforms and individual links, making it difficult for followers and brands to discover everything from a single destination.",
    solution:
      "Designed a centralized platform where visitors can explore educational content, Score Notes, videos, brand collaborations, recommended products, and future membership opportunities—all within a cohesive brand experience.",
    impact:
      "Followers and brand partners can discover educational content, collaborations, and next steps from one professional destination instead of scattered social links.",
    features: [
      "Content hub",
      "Brand partnerships",
      "Product recommendations",
      "Video library",
      "Future membership platform",
    ],
    featureDetails: [
      {
        name: "Content hub",
        description:
          "Educational resources and creator content live in one discoverable place.",
      },
      {
        name: "Brand partnerships",
        description:
          "Collaborations and sponsor relationships are presented as part of the brand story.",
      },
      {
        name: "Product recommendations",
        description:
          "Trusted product picks support both audience value and partnership opportunities.",
      },
      {
        name: "Video library",
        description:
          "Score Notes and educational videos are organized for easy exploration.",
      },
      {
        name: "Membership-ready structure",
        description:
          "The platform is structured to grow into memberships and deeper community offerings.",
      },
    ],
    growthFeatures: [
      "membership-management",
      "recurring-payments",
      "customer-portals",
      "email-text-automation",
      "custom-admin-tools",
    ],
    image: "/images/work/creator-platform/desktop.webp",
    mobileImage: "/images/work/creator-platform/mobile.webp",
    gallery: [
      {
        src: "/images/work/creator-platform/desktop.webp",
        label: "Homepage",
        alt: "The Routine Review creator platform homepage desktop screenshot",
      },
      {
        src: "/images/work/creator-platform/content.webp",
        label: "Learn Hub",
        alt: "The Routine Review educational content and learn hub",
      },
      {
        src: "/images/work/creator-platform/partnerships.webp",
        label: "Brand Partnerships",
        alt: "The Routine Review brand partnerships page",
      },
      {
        src: "/images/work/creator-platform/mobile.webp",
        label: "Mobile Experience",
        layout: "mobile",
        alt: "The Routine Review creator platform mobile homepage screenshot",
      },
    ],
    demoUrl: "https://influencer.hiresignalworks.com",
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
      "Expanded a limited facility website into a modern baseball destination with clearer program information, stronger calls to action, and online scheduling.",
    before:
      "The previous website offered only a small amount of information about the facility and programs, with no clear scheduling or booking process for interested families.",
    whatWeBuilt:
      "A complete, mobile-first website that presents training programs, facility benefits, coaches, camps, and scheduling options in a clear and professional experience.",
    cardBefore:
      "The facility site shared little program detail and no clear scheduling path.",
    cardBuilt:
      "A complete training destination with programs, gallery, and booking CTAs.",
    metrics: ["Lesson Booking", "Programs", "Gallery"],
    badge: "Scheduling",
    cardLine:
      "A training facility site built for programs, gallery, and booking CTAs.",
    challenge:
      "The previous website offered only a small amount of information about the facility and programs, with no clear scheduling or booking process for interested families.",
    solution:
      "A complete, mobile-first website that presents training programs, facility benefits, coaches, camps, and scheduling options in a clear and professional experience.",
    impact:
      "Families can evaluate programs and take the next step with confidence — whether that is scheduling training or visiting the facility.",
    features: [
      "Program pages",
      "Online scheduling",
      "Facility information",
      "Camps and training",
      "Mobile-first design",
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
        label: "Schedule Training",
        alt: "Zero Limits Baseball schedule training and pricing page",
      },
      {
        src: "/images/work/zero-limits/gallery.webp",
        label: "Gallery",
        alt: "Zero Limits Baseball facility gallery page",
      },
      {
        src: "/images/work/zero-limits/mobile.webp",
        label: "Mobile Experience",
        layout: "mobile",
        alt: "Zero Limits Baseball mobile homepage screenshot",
      },
    ],
    demoUrl: "https://zerolimits-iota.vercel.app",
    featured: false,
  },
  {
    slug: "wealth-management",
    name: "NorthBridge Wealth",
    category: "Wealth Management",
    tagline:
      "A fee-only fiduciary site that makes planning services, advisors, and next steps clear.",
    summary:
      "A modern wealth management website built to help professionals understand services, meet the team, and schedule a consultation with confidence.",
    transformation:
      "Elevated a traditional advisory presence into a polished digital experience focused on trust, clarity, and an easy path from research to consultation.",
    before:
      "Prospective clients had to piece together services, advisor credentials, and office details from scattered pages and third-party tools before they could take a confident next step.",
    whatWeBuilt:
      "A dedicated advisory website where visitors can explore planning services, review the team, find office locations, read guidance content, and schedule a consultation online.",
    cardBefore:
      "Services, credentials, and office details were hard to assemble before booking a consult.",
    cardBuilt:
      "A trust-first advisory site for services, advisors, locations, and scheduling.",
    metrics: ["Consultation Booking", "Advisor Profiles", "Multi-Office"],
    badge: "Consultation Platform",
    cardLine:
      "A trust-first advisory site for services, advisors, and consultations.",
    challenge:
      "Prospective clients had to piece together services, advisor credentials, and office details from scattered pages and third-party tools before they could take a confident next step.",
    solution:
      "A dedicated advisory website where visitors can explore planning services, review the team, find office locations, read guidance content, and schedule a consultation online.",
    impact:
      "Prospective clients can evaluate fit, understand the fee-only approach, and book a consultation without chasing details across channels.",
    features: [
      "Service education",
      "Advisor profiles",
      "Consultation scheduling",
      "Multi-office locations",
      "Planning resources",
    ],
    featureDetails: [
      {
        name: "Service clarity",
        description:
          "Wealth management, retirement, and foundations offerings are easy to compare.",
      },
      {
        name: "Advisor credibility",
        description:
          "Team bios and credentials help visitors choose the right planning relationship.",
      },
      {
        name: "Consultation-ready CTAs",
        description:
          "Scheduling paths are visible from the homepage through service and contact pages.",
      },
      {
        name: "Multi-location support",
        description:
          "Carmel and Greenwood office details are presented clearly for in-person and virtual clients.",
      },
    ],
    growthFeatures: [
      "online-scheduling",
      "customer-portals",
      "digital-forms",
      "email-text-automation",
      "multi-location",
      "custom-admin-tools",
    ],
    image: "/images/work/northbridge-wealth/desktop.webp",
    mobileImage: "/images/work/northbridge-wealth/mobile.webp",
    gallery: [
      {
        src: "/images/work/northbridge-wealth/desktop.webp",
        label: "Homepage",
        alt: "NorthBridge Wealth homepage desktop screenshot",
      },
      {
        src: "/images/work/northbridge-wealth/services.webp",
        label: "Services",
        alt: "NorthBridge Wealth services section",
      },
      {
        src: "/images/work/northbridge-wealth/team.webp",
        label: "Team",
        alt: "NorthBridge Wealth advisor team page",
      },
      {
        src: "/images/work/northbridge-wealth/mobile.webp",
        label: "Mobile Experience",
        layout: "mobile",
        alt: "NorthBridge Wealth mobile homepage screenshot",
      },
    ],
    demoUrl: "https://northbridgewealth.hiresignalworks.com",
    featured: true,
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
