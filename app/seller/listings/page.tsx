import type { Metadata } from 'next';
import Link from 'next/link';
import { Chip } from '@/components/Chip';
import { PageHead } from '@/components/PageHead';
import { StatStrip } from '@/components/StatStrip';
import { sellerListings } from '@/lib/data';
import { formatIDR } from '@/lib/format';
import type { ChipKind, ListingStatus } from '@/lib/types';

export const metadata: Metadata = { title: 'My Listings' };

const STATUS_CHIP: Record<ListingStatus, { kind: ChipKind; label: string }> = {
  draft: { kind: 'draft', label: 'Draft' },
  pending: { kind: 'pending', label: 'Pending' },
  approved: { kind: 'approved', label: 'Approved' },
  rejected: { kind: 'rejected', label: 'Rejected' },
};

export default function SellerListingsPage() {
  const listings = sellerListings('u-maya');
  const count = (s: ListingStatus) => listings.filter((v) => v.status === s).length;

  return (
    <section className="container wide">
      <PageHead eyebrow="SELLER · MAYA SANTOSO" title="My listings">
        <Link href="/seller/new-listing" className="btn btn-primary">
          + New listing
        </Link>
      </PageHead>

      <StatStrip
        className="mb-5"
        stats={[
          { value: listings.length, label: 'Total listings' },
          { value: count('approved'), label: 'Approved & live' },
          { value: count('pending'), label: 'Pending review' },
          { value: 'Rp4.200.000', label: 'Payout, last 30 days' },
        ]}
      />

      <div className="card">
        <table className="ledger">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle</th>
              <th>Rate</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {listings.map((v) => {
              const chip = STATUS_CHIP[v.status];
              return (
                <tr key={v.id}>
                  <td className="mono">{v.id}</td>
                  <td>
                    <strong>
                      {v.make} {v.model}
                    </strong>
                    <div className="text-xs muted">
                      {v.year} &middot; <span className="mono">{v.plate}</span>
                    </div>
                  </td>
                  <td className="mono">{v.dailyRate !== null ? `${formatIDR(v.dailyRate)} / day` : '—'}</td>
                  <td>
                    <Chip kind={chip.kind}>{chip.label}</Chip>
                  </td>
                  <td>
                    <Link href="/seller/bookings" className="btn btn-ghost btn-sm">
                      View bookings
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
