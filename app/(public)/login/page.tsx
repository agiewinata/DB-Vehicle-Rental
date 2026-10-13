import type { Metadata } from 'next';
import Link from 'next/link';
import { Tabs } from '@/components/Tabs';
import { users } from '@/lib/data';
import type { Role } from '@/lib/types';

export const metadata: Metadata = { title: 'Sign in' };

const COPY: Record<Role, { blurb: string; href: string }> = {
  seller: { blurb: 'List vehicles and manage incoming bookings.', href: '/seller/listings' },
  buyer: { blurb: 'Browse vehicles and manage your bookings.', href: '/buyer/browse' },
  admin: { blurb: 'Review listings, documents, bookings, and disputes.', href: '/admin/dashboard' },
};
const ROLES: Role[] = ['seller', 'buyer', 'admin'];
const label = (r: Role) => r[0].toUpperCase() + r.slice(1);

export default function LoginPage() {
  // Demo credentials: the first seeded user of each role.
  const panels = Object.fromEntries(
    ROLES.map((role) => {
      const user = users.find((u) => u.role === role);
      return [
        role,
        <div key={role} className="card card-pad" style={{ maxWidth: 420, margin: '0 auto' }}>
          <h2 style={{ marginBottom: 4 }}>Sign in as {label(role)}</h2>
          <p className="lede" style={{ fontSize: 13.5, marginBottom: 24 }}>
            {COPY[role].blurb}
          </p>
          <div className="field">
            <label htmlFor={`${role}-email`}>Email</label>
            <input id={`${role}-email`} type="email" defaultValue={user?.email} />
          </div>
          <div className="field">
            <label htmlFor={`${role}-pw`}>Password</label>
            <input id={`${role}-pw`} type="password" defaultValue="••••••••" />
          </div>
          <Link href={COPY[role].href} className="btn btn-primary btn-full">
            Sign in
          </Link>
          {role === 'seller' && (
            <>
              <div className="route-line tight" />
              <p className="muted" style={{ fontSize: 12.5, textAlign: 'center' }}>
                New owner?{' '}
                <Link href="/seller/new-listing" style={{ color: 'var(--role)', fontWeight: 600 }}>
                  List your first vehicle
                </Link>
              </p>
            </>
          )}
        </div>,
      ];
    }),
  );

  return (
    <section className="container narrow" style={{ paddingTop: 72, paddingBottom: 96 }}>
      <Tabs
        tabs={ROLES.map((r) => ({ id: r, label: label(r) }))}
        panels={panels}
        tabsClassName="tabs-center"
      />
    </section>
  );
}
