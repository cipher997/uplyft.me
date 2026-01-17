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
    name: "Pierre Booker",
    role: "Founder",
    company: "Italy",
    quote:
      "Very professional, understanding, and willing to go the extra mile. Fahad’s WordPress development and UI/UX design skills are top-notch. He has become my go-to expert for all web-related work.",
    image: "/images/testimonials/pierre.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "Zadok Williams",
    role: "Business Owner",
    company: "United States",
    quote:
      "One of the best developers I’ve worked with. Fahad’s expertise in web development, SEO, and digital marketing is outstanding. I always look forward to collaborating with him.",
    image: "/images/testimonials/zadok.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Alex Sensation",
    role: "Entrepreneur",
    company: "United Kingdom",
    quote:
      "Excellent experience working with Fahad. His WordPress development and UI/UX design work was delivered quickly and with a very high level of professionalism. Highly recommended.",
    image: "/images/testimonials/alex.jpg",
    rating: 5,
  },
  {
    id: "4",
    name: "Weshatton",
    role: "Product Manager",
    company: "United States",
    quote:
      "Fahad listened carefully to our requirements and delivered a clean, well-thought-out UI/UX design. His attention to detail in web development and WordPress solutions is exceptional.",
    image: "/images/testimonials/weshatton.jpg",
    rating: 5,
  },
  // {
  //   id: "5",
  //   name: "Business Client",
  //   role: "Marketing Lead",
  //   company: "United States",
  //   quote:
  //     "Fahad is incredible to work with. He stays involved until the very end and beyond. His digital marketing strategies and SEO expertise helped take our business to the next level.",
  //   image: "/images/testimonials/client.jpg",
  //   rating: 5,
  // },
];
