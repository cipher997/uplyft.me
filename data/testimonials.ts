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
    name: "Amit Shinde",
    role: "Founder",
    company: "Pune, Maharashtra",
    quote:
      "Uplyft has been extremely professional and reliable throughout our project. Their team understood our requirements clearly and delivered a clean, scalable solution that aligned perfectly with our business goals.",
    image: "/images/testimonials/amit.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "Neha Bakshi",
    role: "Marketing Manager",
    company: "Bengaluru, Karnataka",
    quote:
      "Working with Uplyft was a smooth experience from start to finish. Their web development and digital marketing expertise helped us improve both our online presence and lead quality.",
    image: "/images/testimonials/neha.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Rahul Mehta",
    role: "Business Owner",
    company: "Mumbai, Maharashtra",
    quote:
      "The Uplyft team delivered our website on time with excellent attention to detail. The UI/UX was clean, modern, and exactly what we were looking for. Highly recommended for growing businesses.",
    image: "/images/testimonials/rahul.jpg",
    rating: 5,
  },
  {
    id: "4",
    name: "Sandeep Patil",
    role: "Product Manager",
    company: "Hyderabad, Telangana",
    quote:
      "Uplyft took the time to understand our product and users before starting development. Their structured approach and technical expertise made a big difference in the final outcome.",
    image: "/images/testimonials/sandeep.jpg",
    rating: 5,
  },
  {
    id: "5",
    name: "Priya Nair",
    role: "Operations Lead",
    company: "Kochi, Kerala",
    quote:
      "What we appreciated most about Uplyft was their commitment and communication. They stayed involved throughout the project and delivered a solution that truly supported our business operations.",
    image: "/images/testimonials/priya.jpg",
    rating: 5,
  },
];
