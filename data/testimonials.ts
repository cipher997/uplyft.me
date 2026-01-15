export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Christina Smith",
    role: "CEO",
    company: "Digital Matrix",
    quote:
      "Uplyft exceeded our expectations with their cloud computing solutions. Highly recommended!",
    image: "/images/testimonial-1.jpg",
    rating: 5,
  },
];
