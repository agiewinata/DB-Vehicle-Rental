import type { ReactNode } from 'react';
import { AppShell } from '@/components/AppShell';

export default function BuyerLayout({ children }: { children: ReactNode }) {
  return <AppShell role="buyer">{children}</AppShell>;
}
