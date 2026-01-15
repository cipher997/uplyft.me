import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  return (
    <section className="bg-soft py-20">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-medium text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted">
            Hear directly from businesses that trust us to deliver reliable and
            scalable IT solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
