import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="bg-soft py-20 overflow-hidden">
      <Container>
        {/* Header */}
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

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="testimonial-track">
            {items.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="testimonial-slide"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
