# Waypoint — Next.js + React + TypeScript

A verified vehicle-rental marketplace prototype (Seller / Buyer / Admin), converted from the static
HTML/CSS/JS version to the Next.js App Router with strict TypeScript.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build && npm start
```

## Routes

| Route | Role | Page |
|---|---|---|
| `/` | public | Landing |
| `/login` | public | Role tabs + sign-in (links only; no auth) |
| `/buyer/browse` | buyer | Catalogue with type / max price / city filters |
| `/buyer/vehicles/[id]` | buyer | Vehicle detail + live price calculator |
| `/buyer/bookings` | buyer | 7-stage booking timelines, pay-into-escrow modal |
| `/seller/listings` | seller | Listings ledger + stats |
| `/seller/new-listing` | seller | Listing form + document upload wells |
| `/seller/bookings` | seller | Incoming RSVPs (confirm / decline) |
| `/admin/dashboard` | admin | Stats, activity feed |
| `/admin/review` | admin | Listings / documents queue (approve / reject) |
| `/admin/bookings` | admin | Bookings & escrow ledger |
| `/admin/tracking` | admin | Map mock, in-transit list, disputes |

`/seller`, `/buyer`, `/admin` redirect to each role's home page.

## Structure

```
app/
  layout.tsx            root: <html>, fonts (<link>), metadata
  globals.css           design tokens + components (from css/base.css) + per-page styles
  (public)/             landing, login   → <AppShell> with no role
  buyer/ seller/ admin/ each has layout.tsx → <AppShell role="…"> (sets accent colour + nav)
components/             Topbar, AppShell, Chip, Timeline, VehicleCard, QueueRow, DecisionRow,
                        Modal, Tabs, UploadWell, BrowseCatalog, BookingCard, PayButton, StatStrip, PageHead, icons
lib/
  types.ts              Role, User, Vehicle, Booking*, ReviewItem, DisputeItem, ChipKind, CSSVars
  data.ts               typed mock data (single source for every page)
  nav.ts                per-role nav + topbar labels
  format.ts             formatIDR / formatNumber / daysBetween / PLATFORM_FEE_RATE
```

Server components by default; only interactive pieces are `'use client'`
(Topbar, Tabs, Modal, UploadWell, DecisionRow, BrowseCatalog, BookingCard, PayButton).
