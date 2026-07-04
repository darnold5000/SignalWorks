import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-accent-hover border border-foreground",
  secondary:
    "bg-transparent text-foreground hover:bg-neutral-50 border border-border",
  ghost: "bg-transparent text-foreground hover:text-muted border border-transparent",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-sm",
};

export function Button({
  href,
  variant = "primary",
  size = "default",
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 rounded-sm",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
