"use client";

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition";

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90 hover:-translate-y-[1px]",
    secondary:
      "bg-soft text-primary hover:bg-white border border-default",
    outline:
      "border border-default text-primary hover:bg-soft",
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
