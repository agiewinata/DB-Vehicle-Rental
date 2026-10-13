import type { CSSProperties } from 'react';

/** Style object that also accepts CSS custom properties, e.g. { '--lane': 'var(--rust)' } */
export type CSSVars = CSSProperties & { [key: `--${string}`]: string };

// ---- Roles & users (ERD: Seller, Buyer, Admin) -------------------------
export type Role = 'seller' | 'buyer' | 'admin';

export interface User {
  id: string;
  name: string;
  role: Role;
  email: string;
}

// ---- Vehicle (ERD: Vehicle) --------------------------------------------
export type VehicleType = 'mpv' | 'suv' | 'sedan' | 'hatchback';
export type ListingStatus = 'draft' | 'pending' | 'approved' | 'rejected';

export interface Vehicle {
  id: string; // e.g. WPT-104
  make: string;
  model: string;
  year: number;
  plate: string;
  type: VehicleType;
  city: string;
  /** Daily rate in IDR; null while a listing has no approved rate */
  dailyRate: number | null;
  status: ListingStatus;
  sellerId: string;
  /** Background wash colour token for the illustration tile */
  tint: string;
}

// ---- Booking (ERD: Booking) --------------------------------------------
/** 1 Requested · 2 Seller RSVP · 3 Docs Verified · 4 Payment · 5 Active · 6 Returned · 7 Completed */
export type BookingStage = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ChipKind =
  | 'pending'
  | 'approved'
  | 'verified'
  | 'active'
  | 'paid'
  | 'rejected'
  | 'overdue'
  | 'declined'
  | 'draft'
  | 'completed';

export interface BuyerBooking {
  id: string;
  vehicleId: string;
  dates: string;
  city: string;
  stage: BookingStage;
  chip: { kind: ChipKind; label: string };
  footer:
    | { type: 'payment'; note: string; amount: number }
    | { type: 'tracking'; note: string }
    | { type: 'note'; note: string };
}

export interface AdminBooking {
  id: string;
  vehicle: string;
  dates: string;
  buyer: string;
  seller: string;
  total: number;
  escrow: { kind: ChipKind; label: string };
  action: 'approve' | 'track' | 'none';
}

// ---- Admin review queue (ERD: Document / Vehicle verification) ---------
export interface ReviewItem {
  id: string;
  title: string;
  sub: string;
}

// ---- Dispute (ERD: Dispute) ---------------------------------------------
export interface DisputeItem {
  id: string;
  title: string;
  sub: string;
}
