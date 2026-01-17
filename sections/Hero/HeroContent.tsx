import { Button } from "@/components/ui/Button";

export function HeroContent() {
  return (
    <div>
      {/* Eyebrow */}
      <span className="mb-4 inline-block rounded-md bg-white px-4 py-1 text-sm text-primary border border-default">
        IT Services & Digital Solutions
      </span>

      {/* Heading */}
      <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
        IT Services For <br />
        <span className="text-primary">Small To Mid-Sized</span> Businesses
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-xl leading-tight leading-relaxed">
        We provide innovative IT solutions and services that help businesses
        scale, stay secure, and succeed in the digital era.
      </p>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/#contact">Get Started</Button>
        {/* <Button href="/services" variant="outline">
          Our Services
        </Button> */}
      </div>
    </div>
  );
}
