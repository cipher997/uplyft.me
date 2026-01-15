import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card>
      <Quote size={20} className="mb-2 text-primary opacity-60" />
      <p className="text-sm text-muted leading-relaxed">
        “{testimonial.quote}”
      </p>

      <div className="mt-6 flex items-center gap-4">
        {/* Avatar placeholder */}
        <div className="h-12 w-12 rounded-full bg-soft flex items-center justify-center text-xs text-muted">
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
