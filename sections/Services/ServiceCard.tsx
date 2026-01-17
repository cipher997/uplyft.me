import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/data/services";
import {
  ArrowRight,
  Server,
  Briefcase,
  Smartphone,
  Layout,
  TrendingUp,
  Code,
} from "lucide-react";

type ServiceCardProps = {
  service: Service;
};

/**
 * Inline icon map (simple & readable)
 */
const ICON_MAP = {
  server: Server,
  briefcase: Briefcase,
  smartphone: Smartphone,
  layout: Layout,
  "trending-up": TrendingUp,
  code: Code,
} as const;

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];

  return (
    <Card className="h-full">
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon size={28} className="text-primary" />
        )}

        <h3 className="text-lg font-semibold">
          {service.title}
        </h3>
      </div>

      <p className="mt-3 text-sm text-muted">
        {service.description}
      </p>

      <Link
        href={service.href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </Card>
  );
}
