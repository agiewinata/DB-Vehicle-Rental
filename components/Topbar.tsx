'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVS, ROLE_LABEL } from '@/lib/nav';
import type { Role } from '@/lib/types';
import { PinMark } from './icons';

export function Topbar({ role }: { role?: Role }) {
  const pathname = usePathname();
  const items = role ? NAVS[role] : [];

  return (
    <header className="topbar">
      <Link href="/" className="topbar-brand">
        <PinMark />
        Waypoint
      </Link>
      <nav className="topbar-nav" aria-label="Primary">
        {items.map((item) => {
          const prefixes = [item.href, ...(item.match ?? [])];
          const active = prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
          return (
            <Link key={item.href} href={item.href} className={active ? 'active' : undefined} aria-current={active ? 'page' : undefined}>
              {item.label}
            </Link>
          );
        })}
      </nav>
      {role ? (
        <div className="topbar-role">
          <span className="dot" />
          {ROLE_LABEL[role]}
        </div>
      ) : (
        <Link href="/login" className="btn btn-ghost btn-sm" style={{ borderColor: '#33363B', color: '#fff' }}>
          Sign in
        </Link>
      )}
    </header>
  );
}
