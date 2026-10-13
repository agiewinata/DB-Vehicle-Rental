import type { Metadata } from 'next';
import { DecisionRow, RSVP_ACTIONS } from '@/components/DecisionRow';
import { SendIcon } from '@/components/icons';
import { PageHead } from '@/components/PageHead';
import { QueueRow } from '@/components/QueueRow';
import { sellerPastBookings, sellerPendingRsvps } from '@/lib/data';

export const metadata: Metadata = { title: 'Incoming Bookings' };

export default function SellerBookingsPage() {
  return (
    <section className="container wide">
      <PageHead eyebrow="SELLER · MAYA SANTOSO" title="Incoming bookings" />

      <div className="card mb-5">
        {sellerPendingRsvps.map((r) => (
          <DecisionRow key={r.id} icon={<SendIcon />} title={r.title} sub={r.sub} actions={RSVP_ACTIONS} />
        ))}
      </div>

      <h3 style={{ marginBottom: 12, fontSize: 15, color: 'var(--ink-soft)' }}>Confirmed &amp; past</h3>
      <div className="card">
        {sellerPastBookings.map((b) => (
          <QueueRow key={b.id} icon={<SendIcon />} title={b.title} sub={b.sub} chip={b.chip} />
        ))}
      </div>
    </section>
  );
}
