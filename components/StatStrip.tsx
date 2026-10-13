export interface Stat {
  value: string | number;
  label: string;
  delta?: { text: string; direction: 'up' | 'down' };
}

export function StatStrip({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <div className={`stat-strip ${className ?? ''}`}>
      {stats.map((s) => (
        <div className="stat-tile" key={s.label}>
          <div className="stat-num">{s.value}</div>
          <div className="stat-label">{s.label}</div>
          {s.delta && <span className={`stat-delta ${s.delta.direction}`}>{s.delta.text}</span>}
        </div>
      ))}
    </div>
  );
}
