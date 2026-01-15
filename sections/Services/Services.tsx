import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section className="bg-white py-20">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-medium text-primary">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Comprehensive IT Solutions
          </h2>
          <p className="mt-4 text-muted">
            We deliver end-to-end IT services designed to support and scale your
            business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
