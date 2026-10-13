'use client';

import { useState } from 'react';
import type { ChipKind } from '@/lib/types';
import { QueueRow, type QueueRowProps } from './QueueRow';

export interface DecisionAction {
  label: string;
  variant: 'ghost' | 'primary';
  /** If set, clicking records this decision: swaps the chip, hides the buttons, fades the row. */
  resolves?: { kind: ChipKind; label: string };
}

type Props = Omit<QueueRowProps, 'actions' | 'dimmed'> & {
  actions: DecisionAction[];
};

/**
 * A queue row whose buttons make a (prototype-only) decision.
 * Replaces the original setRowDecision() DOM mutation with component state.
 */
export function DecisionRow({ actions, chip, ...row }: Props) {
  const [decision, setDecision] = useState<{ kind: ChipKind; label: string } | null>(null);

  return (
    <QueueRow
      {...row}
      chip={decision ?? chip}
      dimmed={decision !== null}
      actions={
        decision ? null : (
          <div className="queue-actions">
            {actions.map((a) => (
              <button
                key={a.label}
                type="button"
                className={`btn btn-${a.variant} btn-sm`}
                onClick={a.resolves ? () => setDecision(a.resolves ?? null) : undefined}
              >
                {a.label}
              </button>
            ))}
          </div>
        )
      }
    />
  );
}

export const APPROVE_REJECT: DecisionAction[] = [
  { label: 'Reject', variant: 'ghost', resolves: { kind: 'rejected', label: 'Rejected' } },
  { label: 'Approve', variant: 'primary', resolves: { kind: 'approved', label: 'Approved' } },
];

export const RSVP_ACTIONS: DecisionAction[] = [
  { label: 'Decline', variant: 'ghost', resolves: { kind: 'declined', label: 'Declined' } },
  { label: 'Confirm', variant: 'primary', resolves: { kind: 'approved', label: 'Confirmed' } },
];

export const DISPUTE_ACTIONS: DecisionAction[] = [
  { label: 'Message parties', variant: 'ghost' },
  { label: 'Resolve', variant: 'primary', resolves: { kind: 'approved', label: 'Resolved' } },
];
