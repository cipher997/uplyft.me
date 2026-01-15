import { Container } from "@/components/ui/Container";
import { stats } from "@/data/stats";
import { Stats } from "./Stats";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section className="bg-soft py-20">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Left Content */}
        <div>
          <span className="text-sm font-medium text-primary">
            About Our Company
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Trusted IT Partner For Modern Businesses
          </h2>

          <p className="mt-6 text-muted">
            We help organizations transform through technology. Our team
            delivers reliable, scalable, and secure IT solutions tailored to
            your business goals.
          </p>

          <p className="mt-4 text-muted">
            From infrastructure management to custom software development,
            we bring expertise, innovation, and long-term value.
          </p>

          <div className="mt-8">
            <Button href="/company/about" variant="outline">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Right Stats */}
        <Stats stats={stats} />
      </Container>
    </section>
  );
}
