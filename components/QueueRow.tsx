import type { ReactNode } from 'react';
import type { ChipKind } from '@/lib/types';
import { Chip } from './Chip';

export interface QueueRowProps {
  icon: ReactNode;
  iconBg?: string;
  title: string;
  sub: string;
  chip?: { kind: ChipKind; label: string };
  actions?: ReactNode;
  aside?: ReactNode;
  /** Override the grid template, e.g. for rows with a single trailing timestamp */
  columns?: string;
  dimmed?: boolean;
}

/** Presentational row used by the admin queue, dashboard feed, seller RSVPs and disputes. */
export function QueueRow({ icon, iconBg, title, sub, chip, actions, aside, columns, dimmed }: QueueRowProps) {
  return (
    <div className={`queue-row${dimmed ? ' decided' : ''}`} style={columns ? { gridTemplateColumns: columns } : undefined}>
      <div className="queue-icon" style={iconBg ? { background: iconBg } : undefined}>
        {icon}
      </div>
      <div className="queue-main">
        <div className="title">{title}</div>
        <div className="sub">{sub}</div>
      </div>
      {chip && <Chip kind={chip.kind}>{chip.label}</Chip>}
      {actions}
      {aside}
    </div>
  );
}
