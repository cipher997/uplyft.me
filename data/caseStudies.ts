export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  date: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-cloud",
    title: "Unlocking Business Potential: The Role of IT Services Today",
    category: "Cloud Solutions",
    description:
      "How cloud infrastructure enabled scalability and operational efficiency.",
    image: "/images/case-study-1.jpg",
    href: "/case-studies/fintech-cloud",
    date: "September 18, 2023",
  },
  {
    id: "cyber-security",
    title: "Demystifying IT Services: Exploring Tech Trends & Solutions",
    category: "Cybersecurity",
    description:
      "Strengthening digital security with modern cybersecurity practices.",
    image: "/images/case-study-2.jpg",
    href: "/case-studies/cyber-security",
    date: "September 16, 2023",
  },
  {
    id: "software-dev",
    title: "Tech Insights: How IT Services Drive Modern Business",
    category: "Application Development",
    description:
      "Building scalable applications to improve business workflows.",
    image: "/images/case-study-3.jpg",
    href: "/case-studies/software-dev",
    date: "August 10, 2023",
  },
];
