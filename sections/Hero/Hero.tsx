import { Container } from "@/components/ui/Container";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="bg-soft">
      <Container className="grid min-h-[80vh] grid-cols-1 items-center gap-12 py-20 md:grid-cols-2">
        <HeroContent />

        {/* Right Side (Image placeholder for now) */}
        <div className="flex justify-center">
          <div className="h-[420px] w-full max-w-md rounded-lg bg-white border border-default flex items-center justify-center text-muted">
            Hero Image
          </div>
        </div>
      </Container>
    </section>
  );
}
