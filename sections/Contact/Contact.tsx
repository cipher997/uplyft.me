import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-custom py-20">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Left Content */}
        <div>
          <span className="text-sm font-medium text-white">
            Get In Touch
          </span>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Let’s Build Something Great Together
          </h2>

          <p className="mt-4 max-w-md text-white">
            Have a project in mind or need help with IT services?  
            Our team is ready to discuss your requirements and provide
            the right solution.
          </p>
        </div>

        {/* Right Form */}
        <div className="rounded-lg border border-default bg-soft p-6">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
