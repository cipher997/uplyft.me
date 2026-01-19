"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation, type NavItem } from "@/data/navigation";
import { Sparkles, Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-default bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          // href="#top"
          className="group flex items-center gap-2 text-xl font-bold uppercase tracking-wide"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:scale-110">
            <Sparkles size={18} />
          </span>
          <span className="relative">
            Uplyft
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:brightness-110"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-soft"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-default bg-white px-6 py-6 shadow-inner">
          <MobileNav onNavigate={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}

type NavItemProps = {
  item: NavItem;
};

function isLinkItem(
  item: NavItem
): item is Extract<NavItem, { href: string }> {
  return "href" in item;
}

function DesktopNavItem({ item }: NavItemProps) {
  if (isLinkItem(item)) {
    return (
      <a
        href={item.href}
        className="group relative text-sm font-medium text-gray-700 transition hover:text-primary"
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
      </a>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary">
        {item.label}
        <ChevronDown size={14} className="opacity-60" />
      </button>

      <div className="absolute left-0 top-full mt-3 hidden min-w-[220px] rounded-xl border border-default bg-white shadow-lg group-hover:block">
        <ul className="py-2">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-soft hover:text-primary"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileNav({
  onNavigate,
}: {
  onNavigate: () => void;
}) {
  return (
    <nav className="flex flex-col gap-5">
      {navigation.map((item) => (
        <MobileNavItem
          key={item.label}
          item={item}
          onNavigate={onNavigate}
        />
      ))}

      <Link
        href="/#contact"
        onClick={onNavigate}
        className="mt-6 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
      >
        Contact
      </Link>
    </nav>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (isLinkItem(item)) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="text-sm font-medium text-gray-700"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between text-sm font-medium text-gray-700"
      >
        {item.label}
        <span className="text-lg">{expanded ? "−" : "+"}</span>
      </button>

      {expanded && (
        <div className="mt-3 ml-4 flex flex-col gap-3">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onNavigate}
              className="text-sm text-muted hover:text-primary"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}