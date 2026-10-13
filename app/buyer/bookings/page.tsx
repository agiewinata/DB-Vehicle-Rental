import type { Metadata } from 'next';
import Link from 'next/link';
import { Chip } from '@/components/Chip';
import { TargetIcon } from '@/components/icons';
import { PageHead } from '@/components/PageHead';
import { PayButton } from '@/components/PayButton';
import { Timeline } from '@/components/Timeline';
import { buyerBookings, userById, vehicleById } from '@/lib/data';

export const metadata: Metadata = { title: 'My Bookings' };

export default function BuyerBookingsPage() {
  return (
    <section className="container wide">
      <PageHead eyebrow="BUYER · SARAH WIJAYA" title="My bookings" />

      {buyerBookings.map((b, i) => {
        const v = vehicleById(b.vehicleId);
        const seller = v ? userById(v.sellerId) : undefined;
        const last = i === buyerBookings.length - 1;
        return (
          <div className="card" key={b.id} style={last ? undefined : { marginBottom: 'var(--sp-5)' }}>
            <div className="card-pad" style={{ paddingBottom: 0 }}>
              <div className="row-between">
                <div>
                  <h3>
                    {v?.make} {v?.model} ({v?.year}) &middot;{' '}
                    <span className="mono muted" style={{ fontSize: 13, fontWeight: 500 }}>
                      {b.vehicleId}
                    </span>
                  </h3>
                  <div className="text-sm muted" style={{ marginTop: 4 }}>
                    {b.dates} &middot; {b.city} &middot; Seller: {seller?.name}
                  </div>
                </div>
                <Chip kind={b.chip.kind}>{b.chip.label}</Chip>
              </div>
              <Timeline current={b.stage} />
            </div>

            {b.footer.type !== 'note' && <div className="route-line tight" style={{ margin: '0 24px' }} />}
            <div
              className="card-pad"
              style={{ paddingTop: 16, ...(b.footer.type === 'note' ? {} : { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }) }}
            >
              <div className="text-sm muted" style={b.footer.type === 'tracking' ? { display: 'flex', alignItems: 'center', gap: 6 } : undefined}>
                {b.footer.type === 'tracking' && <TargetIcon />}
                {b.footer.note}
              </div>
              {b.footer.type === 'payment' && <PayButton amount={b.footer.amount} />}
              {b.footer.type === 'tracking' && (
                <Link href="/admin/tracking" className="btn btn-ghost btn-sm">
                  View on map
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
