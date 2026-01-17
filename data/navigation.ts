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
    label: "Services",
    href: "/#services",
  },
  {
    label: "About Us",
    href: "/#about",
  },
  // {
  //   label: "Testimonials",
  //   href: "/#testimonials",
  // },
];
