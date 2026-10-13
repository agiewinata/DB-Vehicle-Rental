import type { ReactNode } from 'react';
import type { Role } from '@/lib/types';
import { Topbar } from './Topbar';

/** Page frame shared by every route: top bar, body, footer. `role` switches the accent colour. */
export function AppShell({ role, children }: { role?: Role; children: ReactNode }) {
  return (
    <div className={`app-shell${role ? ` role-${role}` : ''}`}>
      <Topbar role={role} />
      <main className="shell-body">{children}</main>
      <footer className="site-foot">
        <span>Waypoint — a verified vehicle rental marketplace</span>
        <span>Admin-mediated listings, payments, and disputes</span>
      </footer>
    </div>
  );
}
