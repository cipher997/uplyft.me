import Link from "next/link";
import type { Industry } from "@/data/industries";
import { ArrowRight } from "lucide-react";

type IndustryItemProps = {
  industry: Industry;
};

export function IndustryItem({ industry }: IndustryItemProps) {
  return (
    <Link
      href={industry.href}
      className="flex items-center justify-between rounded-md border border-default bg-white px-5 py-4 text-sm font-medium hover:bg-soft"
    >
      <span>{industry.name}</span>
      {/* <span className="text-muted"><ArrowRight size={16} /></span> */}
    </Link>
  );
}
