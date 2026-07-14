export type CapabilityPlanId =
  | "personal-brand"
  | "launch"
  | "growth"
  | "outright"
  | "custom"
  | "addon";

export const capabilityPlanLabels: Record<CapabilityPlanId, string> = {
  "personal-brand": "Personal Brand",
  launch: "Launch Website",
  growth: "Growth Website",
  outright: "Purchase Outright",
  custom: "Custom Software",
  addon: "Add-on",
};

export type FeaturedFeature = {
  id: string;
  title: string;
  summary: string;
  whatItDoes: string;
  whoItsFor: string;
  plans: CapabilityPlanId[];
  screenshot?: { src: string; alt: string };
};

export type CapabilityCategory = {
  id: string;
  name: string;
  items: string[];
};

export const capabilitiesHero = {
  title: "Start simple. Grow over time.",
  description:
    "Most clients begin with a professional website. As your business grows, we can add online booking, payments, customer portals, AI assistants, automation, dashboards, memberships, and custom software — without rebuilding your website.",
  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: "View Pricing", href: "/pricing" },
} as const;

export const featuredFeatures: FeaturedFeature[] = [
  {
    id: "online-scheduling",
    title: "Online Scheduling",
    summary: "Let customers book appointments, classes, and events online.",
    whatItDoes:
      "Customers pick a time that works for them — private appointments, group classes, or recurring events — with confirmations, reminders, and capacity limits handled automatically.",
    whoItsFor:
      "Salons, trainers, medical offices, golf courses, gyms, and any business that books by appointment or class.",
    plans: ["growth", "custom", "addon"],
  },
  {
    id: "customer-login",
    title: "Customer Login",
    summary: "Secure member access to bookings, documents, and account history.",
    whatItDoes:
      "Gives customers a private login to view bookings, receipts, documents, waivers, and profile details — so they self-serve instead of calling your front desk.",
    whoItsFor:
      "Membership businesses, clinics, clubs, and service providers who want clients to manage their own accounts.",
    plans: ["growth", "custom", "addon"],
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    summary: "Answer common questions and qualify leads around the clock.",
    whatItDoes:
      "An AI chat or FAQ assistant that answers site visitors from your knowledge base, captures lead details, and routes serious inquiries to you.",
    whoItsFor:
      "Businesses that get the same questions repeatedly — or want faster lead response without hiring overnight coverage.",
    plans: ["custom", "addon"],
  },
  {
    id: "parent-portal",
    title: "Parent Portal",
    summary: "A dashboard for parents to manage athletes, schedules, and documents.",
    whatItDoes:
      "Parents log in to see schedules, athlete profiles, waivers, progress, and communications in one place — reducing admin back-and-forth.",
    whoItsFor:
      "Youth sports programs, academies, camps, and family-focused fitness or training businesses.",
    plans: ["custom", "addon"],
  },
  {
    id: "online-payments",
    title: "Online Payments",
    summary: "Collect deposits, memberships, and invoices through Stripe.",
    whatItDoes:
      "Accept deposits, one-time payments, monthly subscriptions, gift cards, promo codes, and invoicing — integrated with your booking and membership workflows.",
    whoItsFor:
      "Any business that takes payments online — memberships, deposits for bookings, packages, or billed services.",
    plans: ["growth", "custom", "addon"],
  },
  {
    id: "mobile-app-ready",
    title: "Mobile App Ready",
    summary: "Mobile-first experiences that feel native on every phone.",
    whatItDoes:
      "Every Signal Works build is designed mobile-first so customers can book, pay, and log in from their phone — with structure ready for progressive web or native app layers later.",
    whoItsFor:
      "Businesses whose customers live on their phones — which is most of them.",
    plans: ["personal-brand", "launch", "growth", "outright", "custom"],
  },
  {
    id: "email-automation",
    title: "Email Automation",
    summary: "Reminders, confirmations, and follow-ups that send themselves.",
    whatItDoes:
      "Automated confirmations, appointment reminders, cancellation notices, review requests, and nurture sequences tied to real booking and customer events.",
    whoItsFor:
      "Teams that want fewer no-shows and more reviews without manually sending every message.",
    plans: ["growth", "custom", "addon"],
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    summary: "See bookings, revenue signals, and customer activity in one view.",
    whatItDoes:
      "A clear dashboard for attendance, bookings, conversions, and business metrics — so you know what’s working without digging through spreadsheets.",
    whoItsFor:
      "Owners and managers who want visibility into operations, not just website traffic.",
    plans: ["growth", "custom", "addon"],
  },
  {
    id: "admin-portal",
    title: "Admin Portal",
    summary: "Manage content, bookings, customers, and staff permissions.",
    whatItDoes:
      "Staff tools for content, calendars, bookings, customer records, attendance, reports, role-based permissions, and notifications — without asking a developer for every change.",
    whoItsFor:
      "Growing teams that need day-to-day control over operations and content.",
    plans: ["custom", "addon"],
  },
];

export const capabilityCategories: CapabilityCategory[] = [
  {
    id: "website-foundation",
    name: "Website Foundation",
    items: [
      "Custom responsive website",
      "SEO optimization",
      "Photo galleries",
      "Contact forms",
      "Google Maps",
      "Reviews & testimonials",
      "Blog / news",
      "FAQ",
      "Multi-location support",
    ],
  },
  {
    id: "scheduling-booking",
    name: "Scheduling & Booking",
    items: [
      "Online booking",
      "Group classes",
      "Private appointments",
      "Calendar management",
      "Waitlists",
      "Automated confirmations",
      "Cancellation management",
      "Reminder emails",
      "Capacity limits",
      "Recurring events",
    ],
  },
  {
    id: "payments",
    name: "Payments",
    items: [
      "Stripe integration",
      "Deposits",
      "Memberships",
      "Monthly subscriptions",
      "Gift cards",
      "Promo codes",
      "Invoicing",
    ],
  },
  {
    id: "customer-portals",
    name: "Customer Portals",
    items: [
      "Parent dashboard",
      "Member login",
      "Athlete profiles",
      "Booking history",
      "Documents & waivers",
      "Receipts",
      "Progress tracking",
    ],
  },
  {
    id: "admin-tools",
    name: "Admin Tools",
    items: [
      "Content management",
      "Calendar editor",
      "Booking management",
      "Customer database",
      "Attendance tracking",
      "Reports",
      "Role-based permissions",
      "Notifications",
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    items: [
      "AI chat assistant",
      "FAQ bot",
      "Lead qualification",
      "Email automation",
      "Appointment reminders",
      "Review requests",
      "Content generation",
      "AI knowledge base",
    ],
  },
];

export const industryExamples = [
  "Gyms & sports facilities",
  "Salons",
  "Golf courses",
  "Financial advisors",
  "Medical offices",
  "Contractors",
  "Restaurants",
  "Real estate",
  "Nonprofits",
] as const;

export const capabilitiesCatalogIntro =
  "A fuller catalog of what we can add as your business grows — organized by capability, not by industry.";
