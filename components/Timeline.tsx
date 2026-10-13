import type { BookingStage } from '@/lib/types';

export const BOOKING_STAGES = [
  'Requested',
  'Seller RSVP',
  'Docs Verified',
  'Payment',
  'Active',
  'Returned',
  'Completed',
] as const;

/** 7-stage booking progress. Steps before `current` are done, `current` is highlighted. */
export function Timeline({ current }: { current: BookingStage }) {
  return (
    <div className="timeline">
      {BOOKING_STAGES.map((label, i) => {
        const n = i + 1;
        const state = n < current ? 'done' : n === current ? 'current' : '';
        return (
          <div key={label} className={`tl-step ${state}`}>
            <div className={`tl-connector ${n > 1 && n <= current ? 'done' : ''}`} />
            <div className="tl-dot">{n < current ? '✓' : n}</div>
            <div className="tl-label">{label}</div>
          </div>
        );
      })}
    </div>
  );
}
