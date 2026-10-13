import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, CoinIcon, DocIcon, FlagIcon } from '@/components/icons';
import { PageHead } from '@/components/PageHead';
import { QueueRow } from '@/components/QueueRow';
import { StatStrip } from '@/components/StatStrip';
import { recentActivity } from '@/lib/data';

export const metadata: Metadata = { title: 'Dashboard' };

const ICONS = {
  doc: <DocIcon size={16} />,
  check: <CheckCircle size={16} strokeWidth={2.2} color="var(--slate-dark)" />,
  coin: <CoinIcon size={16} />,
  flag: <FlagIcon size={16} />,
} as const;

const WEEK: [string, string][] = [
  ['Listings approved', '9'],
  ['Bookings completed', '17'],
  ['Escrow released', 'Rp14.230.000'],
  ['Platform fees collected', 'Rp711.500'],
  ['Disputes resolved', '4 / 6'],
];

export default function DashboardPage() {
  return (
    <section className="container wide">
      <PageHead eyebrow="ADMIN · DEWI LESTARI" title="Dashboard" />

      <StatStrip
        className="mb-6"
        stats={[
          { value: 3, label: 'Listings pending review', delta: { text: '+1 today', direction: 'up' } },
          { value: 5, label: 'Documents pending verification', delta: { text: '+2 today', direction: 'up' } },
          { value: 12, label: 'Active bookings', delta: { text: '-1 vs yesterday', direction: 'down' } },
          { value: 2, label: 'Open disputes', delta: { text: '+1 today', direction: 'up' } },
        ]}
      />

      <div className="grid grid-2" style={{ alignItems: 'start' }}>
        <div className="card">
          <div className="card-pad" style={{ paddingBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Recent activity</h3>
            <Link href="/admin/review" className="btn btn-ghost btn-sm">
              Open review queue
            </Link>
          </div>
          {recentActivity.map((a) => (
            <QueueRow
              key={a.id}
              icon={ICONS[a.icon]}
              title={a.title}
              sub={a.sub}
              columns="auto 1fr auto"
              aside={<div className="text-xs muted" style={{ whiteSpace: 'nowrap' }}>{a.when}</div>}
            />
          ))}
        </div>

        <div className="card card-pad">
          <h3 style={{ marginBottom: 14 }}>This week</h3>
          {WEEK.map(([k, v], i) => (
            <div className="kv" key={k} style={{ marginBottom: i === WEEK.length - 1 ? 0 : 12 }}>
              <span className="k">{k}</span>
              <span className="mono" style={{ fontWeight: 600 }}>{v}</span>
            </div>
          ))}
          <div className="route-line tight" />
          <Link href="/admin/tracking" className="btn btn-dark btn-full">
            Open live tracking
          </Link>
        </div>
      </div>
    </section>
  );
}
