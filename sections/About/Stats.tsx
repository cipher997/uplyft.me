"use client";

import type { Stat } from "@/data/stats";
import { useCountUp } from "@/lib/useCountUp";

type StatsProps = {
  stats: Stat[];
};

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-primary">
        {count}
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm text-muted">
        {stat.label}
      </p>
    </div>
  );
}
