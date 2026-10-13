'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Vehicle } from '@/lib/types';
import { PLATFORM_FEE_RATE, daysBetween, formatIDR } from '@/lib/format';

/** Sticky price/date panel on the vehicle detail page. Totals recompute from the chosen dates. */
export function BookingCard({ vehicle }: { vehicle: Vehicle }) {
  const [start, setStart] = useState('2026-11-02');
  const [end, setEnd] = useState('2026-11-05');

  const rate = vehicle.dailyRate ?? 0;
  const days = daysBetween(start, end);
  const subtotal = days * rate;
  const fee = Math.round(subtotal * PLATFORM_FEE_RATE);

  return (
    <aside className="card card-pad" style={{ position: 'sticky', top: 84, alignSelf: 'start' }}>
      <div className="vcard-price" style={{ fontSize: 22 }}>
        {formatIDR(rate)}
        <small style={{ fontSize: 13 }}> / day</small>
      </div>
      <div className="route-line tight" />
      <div className="field">
        <label htmlFor="b-start">Start date</label>
        <input id="b-start" type="date" value={start} onChange={(e) => setStart(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="b-end">End date</label>
        <input id="b-end" type="date" value={end} min={start} onChange={(e) => setEnd(e.target.value)} />
      </div>
      <div className="route-line tight" />
      <div className="kv">
        <span className="k">
          {days} {days === 1 ? 'day' : 'days'} &times; {formatIDR(rate)}
        </span>
        <span className="mono">{formatIDR(subtotal)}</span>
      </div>
      <div className="kv">
        <span className="k">Platform fee</span>
        <span className="mono">{formatIDR(fee)}</span>
      </div>
      <div className="kv total" style={{ fontSize: 15 }}>
        <span>Total</span>
        <span className="mono">{formatIDR(subtotal + fee)}</span>
      </div>
      <Link href="/buyer/bookings" className="btn btn-primary btn-full" style={{ marginTop: 'var(--sp-5)' }}>
        Request booking
      </Link>
      <p className="muted" style={{ fontSize: 11.5, marginTop: 10, textAlign: 'center' }}>
        You&apos;ll upload ID &amp; license after the Seller confirms
      </p>
    </aside>
  );
}
