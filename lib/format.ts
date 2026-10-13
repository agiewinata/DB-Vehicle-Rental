/** 1102500 -> "1.102.500" (Indonesian grouping, deterministic across server/client). */
export function formatNumber(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/** 350000 -> "Rp350.000" */
export function formatIDR(n: number): string {
  return `Rp${formatNumber(n)}`;
}

/** Whole days between two ISO dates (YYYY-MM-DD), minimum 1. */
export function daysBetween(start: string, end: string): number {
  const ms = new Date(end).getTime() - new Date(start).getTime();
  if (Number.isNaN(ms)) return 1;
  return Math.max(1, Math.round(ms / 86_400_000));
}

export const PLATFORM_FEE_RATE = 0.05;
