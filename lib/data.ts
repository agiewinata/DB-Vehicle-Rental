import type {
  AdminBooking,
  BuyerBooking,
  DisputeItem,
  ReviewItem,
  User,
  Vehicle,
} from './types';

export const users: User[] = [
  { id: 'u-maya', name: 'Maya Santoso', role: 'seller', email: 'maya.s@example.com' },
  { id: 'u-budi', name: 'Budi Hartono', role: 'seller', email: 'budi.h@example.com' },
  { id: 'u-sarah', name: 'Sarah Wijaya', role: 'buyer', email: 'sarah.w@example.com' },
  { id: 'u-rian', name: 'Rian Kalona', role: 'buyer', email: 'rian.k@example.com' },
  { id: 'u-dewi', name: 'Dewi Lestari', role: 'admin', email: 'dewi.l@waypoint.id' },
];

export const userById = (id: string): User | undefined => users.find((u) => u.id === id);

const RUST = '#F3DDD0';
const TEAL = '#D9EAE6';
const SLATE = '#DDE3E9';
const AMBER = '#F6E8C8';

export const vehicles: Vehicle[] = [
  { id: 'WPT-104', make: 'Toyota', model: 'Avanza', year: 2022, plate: 'B 1942 RKA', type: 'mpv', city: 'Jakarta Selatan', dailyRate: 350000, status: 'approved', sellerId: 'u-maya', tint: RUST },
  { id: 'WPT-098', make: 'Honda', model: 'Brio', year: 2023, plate: 'B 3305 KLM', type: 'hatchback', city: 'Jakarta Barat', dailyRate: 275000, status: 'approved', sellerId: 'u-budi', tint: TEAL },
  { id: 'WPT-112', make: 'Mitsubishi', model: 'Pajero Sport', year: 2021, plate: 'B 8812 TNG', type: 'suv', city: 'Tangerang', dailyRate: 650000, status: 'approved', sellerId: 'u-budi', tint: SLATE },
  { id: 'WPT-087', make: 'Toyota', model: 'Camry', year: 2022, plate: 'B 5521 JKP', type: 'sedan', city: 'Jakarta Pusat', dailyRate: 480000, status: 'approved', sellerId: 'u-budi', tint: AMBER },
  { id: 'WPT-121', make: 'Daihatsu', model: 'Xenia', year: 2023, plate: 'B 6107 BKS', type: 'mpv', city: 'Bekasi', dailyRate: 310000, status: 'approved', sellerId: 'u-budi', tint: RUST },
  { id: 'WPT-076', make: 'Honda', model: 'HR-V', year: 2021, plate: 'B 4470 JKS', type: 'suv', city: 'Jakarta Selatan', dailyRate: 520000, status: 'approved', sellerId: 'u-budi', tint: SLATE },
  // Maya's remaining listings (seller view only — not yet public)
  { id: 'WPT-130', make: 'Toyota', model: 'Innova Zenix', year: 2023, plate: 'B 7781 MYS', type: 'mpv', city: 'Jakarta Selatan', dailyRate: 420000, status: 'pending', sellerId: 'u-maya', tint: AMBER },
  { id: 'WPT-061', make: 'Suzuki', model: 'Ertiga', year: 2020, plate: 'B 2210 QRS', type: 'mpv', city: 'Jakarta Timur', dailyRate: 290000, status: 'approved', sellerId: 'u-maya', tint: TEAL },
  { id: 'WPT-145', make: 'Toyota', model: 'Rush', year: 2024, plate: 'B 9901 ABC', type: 'suv', city: 'Jakarta Selatan', dailyRate: null, status: 'rejected', sellerId: 'u-maya', tint: SLATE },
];

/**
 * Vehicles shown in the Buyer catalogue. WPT-061 is approved but is kept out of the public
 * catalogue in the original prototype, so the browse page lists the first six.
 */
export const catalogue: Vehicle[] = vehicles.filter(
  (v) => v.status === 'approved' && v.id !== 'WPT-061',
);

export const vehicleById = (id: string): Vehicle | undefined => vehicles.find((v) => v.id === id);

export const sellerListings = (sellerId: string): Vehicle[] =>
  vehicles.filter((v) => v.sellerId === sellerId);

// ---- Buyer: my bookings -------------------------------------------------
export const buyerBookings: BuyerBooking[] = [
  {
    id: 'BKG-2301',
    vehicleId: 'WPT-104',
    dates: '2–5 Nov 2026',
    city: 'Jakarta Selatan',
    stage: 4,
    chip: { kind: 'pending', label: 'Awaiting payment' },
    footer: {
      type: 'payment',
      note: 'Booking confirmed by Seller and Admin. Documents verified. Payment held in escrow once paid.',
      amount: 1102500,
    },
  },
  {
    id: 'BKG-2284',
    vehicleId: 'WPT-076',
    dates: '10–14 Oct 2026',
    city: 'Jakarta Selatan',
    stage: 5,
    chip: { kind: 'active', label: 'Active rental' },
    footer: { type: 'tracking', note: 'Location tracking active · last ping 6 min ago' },
  },
  {
    id: 'BKG-2240',
    vehicleId: 'WPT-112',
    dates: '14–16 Sep 2026',
    city: 'Tangerang',
    stage: 7,
    chip: { kind: 'completed', label: 'Completed' },
    footer: { type: 'note', note: 'Rental completed on time. Escrow released to Seller on 17 Sep 2026.' },
  },
];

// ---- Seller: incoming bookings -----------------------------------------
export const sellerPendingRsvps = [
  { id: 'rsvp-1', title: 'Toyota Avanza · WPT-104', sub: 'Sarah Wijaya · 2–5 Nov 2026 · Admin-verified documents' },
  { id: 'rsvp-2', title: 'Suzuki Ertiga · WPT-061', sub: 'Rian Kalona · 8–10 Nov 2026 · Admin-verified documents' },
];

export const sellerPastBookings = [
  { id: 'past-1', title: 'Honda HR-V · WPT-076', sub: 'Sarah Wijaya · 10–14 Oct 2026', chip: { kind: 'active', label: 'Active' } },
  { id: 'past-2', title: 'Toyota Avanza · WPT-104', sub: 'Budi Hartono · 2–4 Sep 2026', chip: { kind: 'completed', label: 'Completed' } },
] as const;

// ---- Admin --------------------------------------------------------------
export const adminBookings: AdminBooking[] = [
  { id: 'BKG-2301', vehicle: 'Toyota Avanza', dates: '2–5 Nov', buyer: 'Sarah Wijaya', seller: 'Maya Santoso', total: 1102500, escrow: { kind: 'pending', label: 'Awaiting approval' }, action: 'approve' },
  { id: 'BKG-2298', vehicle: 'Suzuki Ertiga', dates: '8–10 Nov', buyer: 'Rian Kalona', seller: 'Maya Santoso', total: 630000, escrow: { kind: 'pending', label: 'Awaiting approval' }, action: 'approve' },
  { id: 'BKG-2284', vehicle: 'Honda HR-V', dates: '10–14 Oct', buyer: 'Sarah Wijaya', seller: 'Budi Hartono', total: 2132500, escrow: { kind: 'active', label: 'Escrow held' }, action: 'track' },
  { id: 'BKG-2270', vehicle: 'Toyota Avanza', dates: '2–4 Sep', buyer: 'Budi Hartono', seller: 'Maya Santoso', total: 752500, escrow: { kind: 'completed', label: 'Escrow released' }, action: 'none' },
  { id: 'BKG-2255', vehicle: 'Honda Brio', dates: '20–22 Aug', buyer: 'Rian Kalona', seller: 'Budi Hartono', total: 602500, escrow: { kind: 'completed', label: 'Escrow released' }, action: 'none' },
];

export const reviewListings: ReviewItem[] = [
  { id: 'rl-1', title: 'Toyota Innova Zenix · WPT-130', sub: 'Maya Santoso · submitted 3 hours ago · STNK + insurance attached' },
  { id: 'rl-2', title: 'Toyota Rush · WPT-145 (resubmission)', sub: 'Maya Santoso · submitted 1 day ago · previously rejected: plate mismatch' },
  { id: 'rl-3', title: 'Daihatsu Terios · WPT-151', sub: 'Maya Santoso · submitted 2 days ago · STNK pending, insurance attached' },
];

export const reviewDocuments: ReviewItem[] = [
  { id: 'rd-1', title: 'Insurance document', sub: 'Rian Kalona · Buyer verification · booking BKG-2298' },
  { id: 'rd-2', title: 'National ID (KTP)', sub: 'Sarah Wijaya · Buyer verification · booking BKG-2301' },
  { id: 'rd-3', title: "Driver's license (SIM)", sub: 'Rian Kalona · Buyer verification · booking BKG-2298' },
  { id: 'rd-4', title: 'STNK (ownership)', sub: 'Maya Santoso · Seller verification · WPT-151' },
  { id: 'rd-5', title: 'Insurance document', sub: 'Maya Santoso · Seller verification · WPT-145' },
];

export const disputes: DisputeItem[] = [
  { id: 'dsp-1', title: 'Late return claim · BKG-2284', sub: 'Raised by Seller Budi Hartono · vehicle returned 3 hours past agreed checkout' },
  { id: 'dsp-2', title: 'Damage claim · BKG-2270', sub: 'Raised by Seller Maya Santoso · disputes condition of return, photos attached' },
];

export const activeRentals = [
  { id: 'WPT-076', label: 'Honda HR-V · WPT-076', sub: 'Sarah Wijaya · returns 14 Oct, 18:00', state: 'active' },
  { id: 'WPT-104', label: 'Toyota Avanza · WPT-104', sub: 'Budi Hartono · returns 15 Oct, 10:00', state: 'normal' },
  { id: 'WPT-061', label: 'Suzuki Ertiga · WPT-061', sub: 'Rian Kalona · overdue since 13 Oct, 09:00', state: 'overdue' },
] as const;

export const recentActivity = [
  { id: 'a1', icon: 'doc', title: 'Insurance doc uploaded', sub: 'Rian Kalona · Buyer verification', when: '4 min ago' },
  { id: 'a2', icon: 'check', title: 'Listing approved', sub: 'Suzuki Ertiga · WPT-061 · Maya Santoso', when: '28 min ago' },
  { id: 'a3', icon: 'coin', title: 'Escrow released', sub: 'Booking BKG-2291 · Rp780.000 to Budi Hartono', when: '1 hr ago' },
  { id: 'a4', icon: 'flag', title: 'Dispute raised', sub: 'Booking BKG-2284 · late return claim', when: '2 hr ago' },
  { id: 'a5', icon: 'doc', title: 'STNK uploaded', sub: 'Toyota Innova Zenix · WPT-130 · Maya Santoso', when: '3 hr ago' },
] as const;
