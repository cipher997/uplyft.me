import { Container } from "@/components/ui/Container";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('hero-main.jpg')",
        }}
      />

      {/* Overlay (for readability & mood) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-[90vh] items-center">
        <div className="max-w-2xl text-white">
          <HeroContent />
        </div>
      </Container>
    </section>
  );
}
