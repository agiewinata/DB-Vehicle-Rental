import type { Metadata } from 'next';
import Link from 'next/link';
import { Chip } from '@/components/Chip';
import { PageHead } from '@/components/PageHead';
import { StatStrip } from '@/components/StatStrip';
import { adminBookings } from '@/lib/data';
import { formatIDR } from '@/lib/format';

export const metadata: Metadata = { title: 'Bookings & Escrow' };

export default function AdminBookingsPage() {
  return (
    <section className="container wide">
      <PageHead eyebrow="ADMIN · BOOKINGS & ESCROW" title="All bookings" />

      <StatStrip
        className="mb-5"
        stats={[
          { value: adminBookings.filter((b) => b.action === 'approve').length, label: 'Pending approval' },
          { value: 'Rp2.132.500', label: 'Currently in escrow' },
          { value: 12, label: 'Active bookings' },
          { value: 'Rp14.230.000', label: 'Released this week' },
        ]}
      />

      <div className="card">
        <table className="ledger">
          <thead>
            <tr>
              <th>Booking</th>
              <th>Vehicle</th>
              <th>Buyer &rarr; Seller</th>
              <th>Total</th>
              <th>Escrow status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {adminBookings.map((b) => (
              <tr key={b.id}>
                <td className="mono">{b.id}</td>
                <td>
                  {b.vehicle}
                  <div className="text-xs muted">{b.dates}</div>
                </td>
                <td>
                  {b.buyer} <span className="muted">&rarr;</span> {b.seller}
                </td>
                <td className="mono">{formatIDR(b.total)}</td>
                <td>
                  <Chip kind={b.escrow.kind}>{b.escrow.label}</Chip>
                </td>
                <td>
                  {b.action === 'approve' && <button type="button" className="btn btn-primary btn-sm">Approve</button>}
                  {b.action === 'track' && (
                    <Link href="/admin/tracking" className="btn btn-ghost btn-sm">
                      Track
                    </Link>
                  )}
                  {b.action === 'none' && <span className="text-xs muted">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
