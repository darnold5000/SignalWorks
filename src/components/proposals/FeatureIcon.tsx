import type { ProposalFeatureGroup } from "@/data/proposals/types";

type FeatureIconProps = {
  icon: ProposalFeatureGroup["icon"];
  className?: string;
};

export function FeatureIcon({ icon, className = "h-5 w-5" }: FeatureIconProps) {
  const stroke = "currentColor";

  switch (icon) {
    case "globe":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="1.5" />
          <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "users":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9" cy="8" r="3" stroke={stroke} strokeWidth="1.5" />
          <path d="M3.5 19c0-2.5 2.2-4.5 5.5-4.5s5.5 2 5.5 4.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="17" cy="9" r="2.5" stroke={stroke} strokeWidth="1.5" />
          <path d="M19.5 19c0-1.8-1.2-3.3-3-3.9" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "message":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 6.5h14v9H9l-4 3v-12z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "settings":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3" stroke={stroke} strokeWidth="1.5" />
          <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6.1 6.1l1.6 1.6M16.3 16.3l1.6 1.6M17.9 6.1l-1.6 1.6M7.7 16.3l-1.6 1.6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7.5 17.5h9a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.5 1.8A3.5 3.5 0 0 0 7.5 17.5z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
  }
}
