export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 11, suffix: "+", label: "Happy Customers" },
  { value: 6, suffix: "+", label: "Projects Completed" },
  { value: 2, suffix: "+", label: "Awards Achievement" },
];