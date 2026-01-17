export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string; // icon key (lucide, svg, etc.)
};

export const services: Service[] = [
  {
    id: "managed-it",
    title: "Managed IT Services",
    description:
      "End-to-end IT management services designed to keep your systems running smoothly. We provide proactive monitoring, maintenance, and ongoing support so you can focus on growing your business without technical disruptions.",
    href: "/services/managed-it",
    icon: "server",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description:
      "Strategic IT consulting to help businesses align technology with long-term goals. We analyze your current systems, identify gaps, and recommend scalable, future-ready solutions.",
    href: "/services/it-consulting",
    icon: "briefcase",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "We design and develop high-performance mobile applications for Android and iOS platforms. Our apps are secure, scalable, and built to deliver seamless user experiences.",
    href: "/services/mobile-app-development",
    icon: "smartphone",
  },
  {
    id: "web-app-development",
    title: "Web App Development",
    description:
      "Custom web application development using modern technologies and frameworks. We build fast, responsive, and scalable web solutions tailored to your business requirements.",
    href: "/services/web-app-development",
    icon: "layout",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Services",
    description:
      "Data-driven digital marketing solutions to boost your online presence and generate quality leads. From SEO and social media to paid campaigns, we help your brand grow digitally.",
    href: "/services/digital-marketing",
    icon: "trending-up",
  },
  {
    id: "software-dev",
    title: "Custom App development",
    description:
      "Custom software development services built to solve complex business challenges. We deliver secure, scalable, and high-quality software solutions tailored to your workflows.",
    href: "/services/software-development",
    icon: "code",
  },
];
