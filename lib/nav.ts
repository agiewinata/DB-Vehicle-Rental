import type { Role } from './types';

export interface NavItem {
  href: string;
  label: string;
  /** Extra path prefixes that should also highlight this item */
  match?: string[];
}

export const NAVS: Record<Role, NavItem[]> = {
  seller: [
    { href: '/seller/listings', label: 'My Listings' },
    { href: '/seller/new-listing', label: 'New Listing' },
    { href: '/seller/bookings', label: 'Bookings' },
  ],
  buyer: [
    { href: '/buyer/browse', label: 'Browse Vehicles', match: ['/buyer/vehicles'] },
    { href: '/buyer/bookings', label: 'My Bookings' },
  ],
  admin: [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/review', label: 'Review Queue' },
    { href: '/admin/bookings', label: 'Bookings & Escrow' },
    { href: '/admin/tracking', label: 'Tracking & Disputes' },
  ],
};

export const ROLE_LABEL: Record<Role, string> = {
  seller: 'Seller — Maya Santoso',
  buyer: 'Buyer — Sarah Wijaya',
  admin: 'Admin — Dewi Lestari',
};
