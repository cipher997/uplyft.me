import type { Stat } from "@/data/stats";

type StatsProps = {
  stats: Stat[];
};

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-primary">
            {stat.value}
          </div>
          <p className="mt-2 text-sm text-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
