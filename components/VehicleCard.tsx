import Link from 'next/link';
import type { Vehicle } from '@/lib/types';
import { formatIDR } from '@/lib/format';
import { CarArt, CheckCircle } from './icons';

export function VehicleArt({ tint, height }: { tint: string; height?: number }) {
  return (
    <div
      className="vcard-art"
      style={{ height, background: `linear-gradient(160deg,${tint} 0%, var(--paper) 100%)`, color: 'var(--asphalt)' }}
    >
      <CarArt />
    </div>
  );
}

export function VehicleCard({ vehicle: v }: { vehicle: Vehicle }) {
  return (
    <Link href={`/buyer/vehicles/${v.id}`} className="vcard">
      <VehicleArt tint={v.tint} />
      <div className="vcard-body">
        <div className="vcard-title">
          {v.make} {v.model}
        </div>
        <div className="vcard-meta">
          {v.year} &middot; {v.city} &middot; {v.type.toUpperCase()}
        </div>
        <div className="vcard-meta" style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--teal-dark)', fontWeight: 600 }}>
          <CheckCircle size={13} color="currentColor" strokeWidth={2.4} />
          Admin-verified listing
        </div>
        <div className="vcard-foot">
          <div className="vcard-price">
            {v.dailyRate !== null ? formatIDR(v.dailyRate) : '—'}
            <small> / day</small>
          </div>
          <span className="mono" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>
            {v.id}
          </span>
        </div>
      </div>
    </Link>
  );
}
