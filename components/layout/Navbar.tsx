"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation, type NavItem } from "@/data/navigation";
import { Sparkles } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-default bg-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold uppercase">
        <Sparkles size={20} className="text-primary" />
          Uplyft
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block rounded-md bg-primary px-4 py-2 text-white text-sm font-medium"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sm font-medium"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-default bg-white px-6 py-4">
          <MobileNav
            onNavigate={() => setOpen(false)}
          />
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
      <Link
        href={item.href}
        className="text-sm font-medium text-gray-700 hover:text-primary"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <span className="cursor-pointer text-sm font-medium">
        {item.label}
      </span>

      <div className="absolute left-0 top-full hidden min-w-[220px] rounded-md border border-default bg-white shadow-md group-hover:block">
        <ul className="py-2">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                className="block px-4 py-2 text-sm hover:bg-soft"
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
    <nav className="flex flex-col gap-4">
      {navigation.map((item) => (
        <MobileNavItem
          key={item.label}
          item={item}
          onNavigate={onNavigate}
        />
      ))}

      {/* Mobile CTA */}
      <Link
        href="/contact"
        onClick={onNavigate}
        className="mt-4 rounded-md bg-primary px-4 py-2 text-center text-white text-sm font-medium"
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
        className="text-sm font-medium"
      >
        {item.label}
      </Link>
    );
  }


  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between text-sm font-medium"
      >
        {item.label}
        <span>{expanded ? "−" : "+"}</span>
      </button>

      {expanded && (
        <div className="mt-2 ml-4 flex flex-col gap-2">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onNavigate}
              className="text-sm text-muted"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

