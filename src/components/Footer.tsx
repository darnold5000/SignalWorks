import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { SHOW_WORK } from "@/lib/flags";

const footerLinks = {
  services: [
    { label: "Business Websites", href: "/services/business-websites" },
    { label: "Custom Apps", href: "/services/custom-apps" },
    { label: "AI & Automation", href: "/services/ai-automation" },
    { label: "SEO + AEO", href: "/services/seo-aeo" },
  ],
  work: [
    { label: "All Work", href: "/work" },
    { label: "Cornerstone Hoops", href: "/work/youth-basketball" },
    { label: "DAWGZ Training", href: "/work/athletic-training" },
    { label: "Willow & Mane", href: "/work/luxury-salon" },
    { label: "NorthBridge Wealth", href: "/work/wealth-management" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [{ label: "Privacy", href: "/privacy" }],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div
          className={`grid gap-12 sm:grid-cols-2 ${SHOW_WORK ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
        >
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {SHOW_WORK && (
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-muted">
                Our Work
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.work.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-muted">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-muted">{siteConfig.brandStatement}</p>
        </div>
      </div>
    </footer>
  );
}
