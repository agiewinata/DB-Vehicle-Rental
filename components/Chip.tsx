import type { ChipKind } from '@/lib/types';

export function Chip({ kind, children }: { kind: ChipKind; children: React.ReactNode }) {
  return (
    <span className={`chip chip-${kind}`}>
      <span className="dot" />
      {children}
    </span>
  );
}
