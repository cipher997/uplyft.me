export type Industry = {
  id: string;
  name: string;
  href: string;
};

export const industries: Industry[] = [
  { id: "finance", name: "Finance & Banking", href: "/industries/finance" },
  { id: "healthcare", name: "Healthcare & Pharmaceuticals", href: "/industries/healthcare" },
  { id: "real-estate", name: "Real Estate", href: "/industries/real-estate" },
  { id: "education", name: "Education & Training", href: "/industries/education" },
  { id: "ecommerce", name: "E-Commerce & Retail", href: "/industries/ecommerce" },
  { id: "it", name: "IT & Telecommunications", href: "/industries/it" },
  { id: "logistics", name: "Transportation & Logistics", href: "/industries/logistics" },
  { id: "manufacturing", name: "Manufacturing & Industry 4.0", href: "/industries/manufacturing" },
  { id: "energy", name: "Energy & Environment", href: "/industries/energy" },
  { id: "media", name: "Entertainment & Media", href: "/industries/media" },
];
