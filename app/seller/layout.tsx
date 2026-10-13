import type { ReactNode } from 'react';
import { AppShell } from '@/components/AppShell';

export default function SellerLayout({ children }: { children: ReactNode }) {
  return <AppShell role="seller">{children}</AppShell>;
}
