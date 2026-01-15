import { Container } from "@/components/ui/Container";
import { industries } from "@/data/industries";
import { IndustryItem } from "./IndustryItem";

export function Industries() {
  return (
    <section className="bg-white py-20">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-medium text-primary">
            Industries We Serve
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Technology Solutions Across Industries
          </h2>
          <p className="mt-4 text-muted">
            We work with businesses across multiple industries, delivering
            tailored IT solutions that solve real-world challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryItem
              key={industry.id}
              industry={industry}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
