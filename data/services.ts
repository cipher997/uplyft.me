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
      "Proactive monitoring, maintenance, and support for your IT infrastructure.",
    href: "/services/managed-it",
    icon: "server",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description:
      "Strategic guidance to align technology with business objectives.",
    href: "/services/it-consulting",
    icon: "briefcase",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description:
      "Scalable cloud solutions including migration, hosting, and management.",
    href: "/services/cloud-computing",
    icon: "cloud",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description:
      "Protect your systems and data from cyber threats with robust security.",
    href: "/services/cybersecurity",
    icon: "shield",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description:
      "Turn data into actionable insights for smarter decision-making.",
    href: "/services/data-analytics",
    icon: "bar-chart",
  },
  {
    id: "software-dev",
    title: "Software Development",
    description:
      "Custom software development tailored to your business needs.",
    href: "/services/software-development",
    icon: "code",
  },
];
