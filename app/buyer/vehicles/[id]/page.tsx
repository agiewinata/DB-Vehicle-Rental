import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookingCard } from '@/components/BookingCard';
import { CheckCircle } from '@/components/icons';
import { VehicleArt } from '@/components/VehicleCard';
import { catalogue, userById, vehicleById } from '@/lib/data';

type Params = Promise<{ id: string }>;

export function generateStaticParams() {
  return catalogue.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const v = vehicleById((await params).id);
  return { title: v ? `${v.make} ${v.model}` : 'Vehicle' };
}

const hint = { fontSize: 12, color: 'var(--ink-soft)' } as const;

export default async function VehiclePage({ params }: { params: Params }) {
  const vehicle = vehicleById((await params).id);
  if (!vehicle || vehicle.status !== 'approved') notFound();

  const seller = userById(vehicle.sellerId);
  const specs: { label: string; value: string | number; mono?: boolean }[] = [
    { label: 'Make', value: vehicle.make },
    { label: 'Model', value: vehicle.model },
    { label: 'Year', value: vehicle.year },
    { label: 'Plate', value: vehicle.plate, mono: true },
  ];

  return (
    <section className="container wide">
      <Link
        href="/buyer/browse"
        style={{ fontSize: 13, color: 'var(--ink-soft)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 'var(--sp-5)' }}
      >
        &larr; Back to results
      </Link>

      <div className="vehicle-detail-grid">
        <div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <VehicleArt tint={vehicle.tint} height={280} />
          </div>

          <div className="card card-pad" style={{ marginTop: 'var(--sp-5)' }}>
            <h2>
              {vehicle.make} {vehicle.model} ({vehicle.year})
            </h2>
            <div className="vcard-meta" style={{ marginTop: 6 }}>
              {vehicle.city} &middot; {vehicle.type.toUpperCase()} &middot; <span className="mono">{vehicle.id}</span>
            </div>
            <div className="route-line tight" />
            <div className="grid grid-2" style={{ gap: 'var(--sp-4)' }}>
              {specs.map((s) => (
                <div key={s.label}>
                  <div style={hint}>{s.label}</div>
                  <div style={{ fontWeight: 600 }} className={s.mono ? 'mono' : undefined}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="route-line tight" />
            <h3 style={{ fontSize: 15, marginBottom: 10 }}>Listed by</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--role-wash)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--role-dark)' }}
              >
                {seller?.name[0]}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{seller?.name}</div>
                <div className="badge-verified">
                  <CheckCircle size={12} color="currentColor" strokeWidth={2.4} /> Identity verified by Admin
                </div>
              </div>
            </div>
          </div>
        </div>

        <BookingCard vehicle={vehicle} />
      </div>
    </section>
  );
}
