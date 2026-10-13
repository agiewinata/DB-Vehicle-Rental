import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHead } from '@/components/PageHead';
import { UploadWell } from '@/components/UploadWell';

export const metadata: Metadata = { title: 'New Listing' };

export default function NewListingPage() {
  return (
    <section className="container narrow">
      <PageHead eyebrow="SELLER · NEW LISTING" title="List a vehicle" />

      <div className="card card-pad">
        <h3 style={{ marginBottom: 16 }}>Vehicle details</h3>
        <div className="field-row">
          <div className="field"><label htmlFor="make">Make</label><input id="make" type="text" placeholder="Toyota" /></div>
          <div className="field"><label htmlFor="model">Model</label><input id="model" type="text" placeholder="Avanza" /></div>
        </div>
        <div className="field-row">
          <div className="field"><label htmlFor="year">Year</label><input id="year" type="number" placeholder="2023" /></div>
          <div className="field"><label htmlFor="plate">Plate number</label><input id="plate" type="text" placeholder="B 1234 XYZ" /></div>
        </div>
        <div className="field"><label htmlFor="rate">Daily rate (IDR)</label><input id="rate" type="number" placeholder="350000" /></div>
        <div className="field"><label htmlFor="city">City</label><input id="city" type="text" placeholder="Jakarta Selatan" /></div>

        <div className="route-line" />

        <h3 style={{ marginBottom: 6 }}>Verification documents</h3>
        <p className="text-sm muted" style={{ marginBottom: 16 }}>
          Admin reviews these before your listing becomes visible to Buyers.
        </p>
        <div className="field">
          <label>Vehicle ownership (STNK/BPKB)</label>
          <UploadWell />
        </div>
        <div className="field">
          <label>Insurance document</label>
          <UploadWell />
        </div>

        <div className="route-line" />
        <div style={{ display: 'flex', gap: 12 }}>
          <Link href="/seller/listings" className="btn btn-ghost">Save as draft</Link>
          <Link href="/seller/listings" className="btn btn-primary">Submit for review</Link>
        </div>
        <p className="muted" style={{ fontSize: 12, marginTop: 12 }}>Typical Admin review time: under 24 hours.</p>
      </div>
    </section>
  );
}
