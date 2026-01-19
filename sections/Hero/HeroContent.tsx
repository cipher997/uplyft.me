"use client";

import { Button } from "@/components/ui/Button";
import { useTypewriter } from "@/lib/useTypewriter";

export function HeroContent() {
  const typedText = useTypewriter([
    "Small To Mid-Sized Businesses",
    "Growing Startups",
    "Digital Transformation",
    "Scalable Growth",
  ]);

  return (
    <div>
      {/* Eyebrow */}
      <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
        IT Services & Digital Solutions
      </span>

      {/* Heading */}
      <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
        IT Services For <br />

        {/* Fixed-width typing container */}
        <span className="relative inline-block min-w-[30ch]">
          <span className="text-primary">
            {typedText}
            <span className="ml-1 animate-pulse">|</span>
          </span>
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-xl text-lg text-white/90">
        We provide innovative IT solutions and services that help businesses
        scale, stay secure, and succeed in the digital era.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="#contact" className="bg-primary text-white">
          Get Started
        </Button>
      </div>
    </div>
  );
}
