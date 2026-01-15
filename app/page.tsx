import { Hero } from "@/sections/Hero/Hero";
import { About } from "@/sections/About/About";
import { Services } from "@/sections/Services/Services";
import { Industries } from "@/sections/Industries/Industries";
// import CaseStudies from "@/sections/CaseStudies/CaseStudies";
import { Testimonials } from "@/sections/Testimonials/Testimonials";
import { Contact } from "@/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Industries />
      {/* <CaseStudies /> */}
      <Testimonials />
      <Contact />
    </>
  );
}
