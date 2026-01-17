import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full min-h-[260px] flex-col justify-between">
      <div>
        <Quote size={20} className="mb-3 text-primary opacity-60" />
        <p className="text-sm leading-relaxed text-muted">
          “{testimonial.quote}”
        </p>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft text-xs text-muted">
          IMG
        </div>

        <div>
          <div className="text-sm font-semibold">
            {testimonial.name}
          </div>
          <div className="text-xs text-muted">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </Card>
  );
}
