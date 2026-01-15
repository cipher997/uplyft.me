import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/data/services";
import { ArrowRight, Cpu } from "lucide-react";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full">
      <div className="flex">
        <Cpu size={28} className="mb-4 text-primary" />
        <h3 className="text-lg font-semibold pl-3">{service.title}</h3>
      </div>

      <p className="mt-3 text-sm text-muted">
        {service.description}
      </p>

      <Link
        href={service.href}
        className="mt-4 inline-block text-sm font-medium text-primary"
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </Card>
  );
}
