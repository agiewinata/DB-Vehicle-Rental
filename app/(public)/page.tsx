import Link from 'next/link';
import { CheckCircle, PinMark } from '@/components/icons';
import type { CSSVars } from '@/lib/types';

const sellerLane: CSSVars = { '--lane': 'var(--rust)', '--lane-wash': 'var(--rust-wash)' };
const buyerLane: CSSVars = { '--lane': 'var(--teal)', '--lane-wash': 'var(--teal-wash)' };

export default function LandingPage() {
  return (
    <>
      <section className="container wide" style={{ paddingTop: 64 }}>
        <div style={{ maxWidth: 640 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-soft)' }}>
            waypoint.id &middot; verified vehicle rentals
          </span>
          <h1 style={{ marginTop: 14 }}>Every rental passes through one trusted hand before it reaches the road.</h1>
          <p className="lede" style={{ marginTop: 18 }}>
            Waypoint connects vehicle owners and renters directly — but every listing, every ID, and every payment is
            checked by Waypoint Admin before a key changes hands. That&apos;s the whole model: three roles, one
            accountable middle layer.
          </p>
        </div>
      </section>

      <section className="container wide" style={{ paddingTop: 8 }}>
        <div className="route-lanes">
          <Link href="/seller/listings" className="lane-card" style={sellerLane}>
            <span className="lane-kicker">Lane 01</span>
            <h3>List a vehicle</h3>
            <p>Owners add a vehicle, upload ownership &amp; insurance documents, and set a daily rate.</p>
            <span className="lane-cta">Enter as Seller &rarr;</span>
          </Link>

          <div className="lane-hub">
            <div className="lane-hub-ring">
              <PinMark />
            </div>
            <span className="lane-hub-label">
              Waypoint Admin
              <br />
              verifies every step
            </span>
          </div>

          <Link href="/buyer/browse" className="lane-card" style={buyerLane}>
            <span className="lane-kicker">Lane 02</span>
            <h3>Book a vehicle</h3>
            <p>Renters browse admin-approved listings, submit ID, pay into escrow, and track the trip.</p>
            <span className="lane-cta">Enter as Buyer &rarr;</span>
          </Link>
        </div>

        <Link href="/admin/dashboard" className="admin-strip">
          <div className="queue-icon" style={{ background: 'var(--slate-wash)' }}>
            <CheckCircle size={18} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14.5 }}>Run Waypoint as Admin</div>
            <div className="muted" style={{ fontSize: 12.5 }}>
              Review listings and documents, approve bookings, hold escrow, resolve disputes.
            </div>
          </div>
          <span className="lane-cta" style={{ color: 'var(--slate-dark)', marginLeft: 'auto' }}>
            Open console &rarr;
          </span>
        </Link>
      </section>

      <section className="container wide">
        <div className="route-line" />
        <div className="grid grid-3">
          <div>
            <h3>Nine records, one ledger</h3>
            <p className="lede" style={{ fontSize: 14.5, marginTop: 8 }}>
              Seller, Buyer, Admin, Vehicle, Document, Booking, Payment, LocationLog, and Dispute all trace back to an
              Admin decision — every approval is a row, not a guess.
            </p>
          </div>
          <div>
            <h3>Escrow, not direct transfer</h3>
            <p className="lede" style={{ fontSize: 14.5, marginTop: 8 }}>
              A Buyer&apos;s payment is held by Waypoint until the rental is confirmed complete, then released to the
              Seller minus the platform fee.
            </p>
          </div>
          <div>
            <h3>Tracked for the trip</h3>
            <p className="lede" style={{ fontSize: 14.5, marginTop: 8 }}>
              Once a rental begins, the vehicle&apos;s location is logged for the duration of the Buyer&apos;s possession
              — visible to Admin if a return runs late.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
