"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname.startsWith("/proposals")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 shrink-0"
            priority
          />
          <span className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs text-muted sm:block">
              Built with clarity.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-foreground font-medium"
                  : "text-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" size="sm">
            Start a Project
          </Button>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-foreground transition-transform",
              mobileOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-foreground transition-opacity",
              mobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-foreground transition-transform",
              mobileOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border px-6 py-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="/contact" className="w-full">
                Start a Project
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
