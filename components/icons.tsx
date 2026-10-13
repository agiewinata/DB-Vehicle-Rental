import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({ width: size, height: size, viewBox: '0 0 24 24', fill: 'none' as const });

export function PinMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className="pin-mark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8z" fill="currentColor" opacity="0.15" />
      <path d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}

export function CarArt() {
  return (
    <svg width="120" height="56" viewBox="0 0 120 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 38c0-3 2-5 5-6l10-3 9-14c2-3 5-5 9-5h24c4 0 7 2 9 5l8 13 11 2c4 1 7 4 7 8v6c0 2-2 4-4 4H10c-2 0-4-2-4-4v-6z" fill="currentColor" opacity="0.9" />
      <path d="M32 20l6-9c1-1.5 2.5-2 4-2h12c1.5 0 3 .5 4 2l6 9" stroke="#F6F3EC" strokeWidth="2" fill="none" />
      <circle cx="30" cy="42" r="7" fill="#15171A" />
      <circle cx="30" cy="42" r="3" fill="#F6F3EC" />
      <circle cx="86" cy="42" r="7" fill="#15171A" />
      <circle cx="86" cy="42" r="3" fill="#F6F3EC" />
    </svg>
  );
}

export function CheckCircle({ size = 18, color = '#3A4A5C', strokeWidth = 2, ...rest }: IconProps & { color?: string }) {
  return (
    <svg {...base(size)} aria-hidden="true" {...rest}>
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function DocIcon({ size = 18, stroke = 'var(--slate-dark)' }: { size?: number; stroke?: string }) {
  return (
    <svg {...base(size)} aria-hidden="true">
      <path d="M7 3h7l5 5v13H7V3z" stroke={stroke} strokeWidth="1.5" />
      <path d="M14 3v5h5" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

export function SendIcon({ size = 18 }: { size?: number }) {
  return (
    <svg {...base(size)} aria-hidden="true">
      <path d="M3 11l18-5-5 18-4-7-7-4z" stroke="var(--role-dark)" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function CarOutline({ size = 18 }: { size?: number }) {
  return (
    <svg {...base(size)} aria-hidden="true">
      <path d="M3 16l1-5 2-3h12l2 3 1 5" stroke="var(--slate-dark)" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="7" cy="17" r="1.6" stroke="var(--slate-dark)" strokeWidth="1.3" />
      <circle cx="17" cy="17" r="1.6" stroke="var(--slate-dark)" strokeWidth="1.3" />
    </svg>
  );
}

export function FlagIcon({ size = 18, stroke = 'var(--slate-dark)', strokeWidth = 1.5 }: { size?: number; stroke?: string; strokeWidth?: number }) {
  return (
    <svg {...base(size)} aria-hidden="true">
      <path d="M5 3v18M5 4h11l-2.5 4L16 12H5" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}

export function CoinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg {...base(size)} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="var(--slate-dark)" strokeWidth="1.5" />
      <path d="M12 7v10M9 9.5c0-1 1-2 3-2s3 1 3 2-1 1.5-3 2-3 1-3 2 1 2 3 2 3-1 3-2" stroke="var(--slate-dark)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function TargetIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="var(--teal)" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" fill="var(--teal)" />
    </svg>
  );
}

export function ShieldIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true">
      <path d="M12 2L2 7v6c0 5 4 8 10 9 6-1 10-4 10-9V7l-10-5z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
