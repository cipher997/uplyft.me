export type NavItem =
  | {
      label: string;
      href: string;
      children?: never;
    }
  | {
      label: string;
      children: {
        label: string;
        href: string;
      }[];
      href?: never;
    };


export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Solutions",
    children: [
      { label: "Managed IT Services", href: "/services/managed-it" },
      { label: "IT Consulting", href: "/services/it-consulting" },
      { label: "Cloud Computing", href: "/services/cloud-computing" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Software Development", href: "/services/software-development" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];
