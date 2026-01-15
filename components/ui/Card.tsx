type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-default bg-white p-6 transition hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
