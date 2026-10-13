import type { Metadata } from 'next';
import { BrowseCatalog } from '@/components/BrowseCatalog';
import { PageHead } from '@/components/PageHead';
import { catalogue } from '@/lib/data';

export const metadata: Metadata = { title: 'Browse Vehicles' };

export default function BrowsePage() {
  return (
    <section className="container wide">
      <PageHead eyebrow={`BROWSE · ${catalogue.length} ADMIN-APPROVED VEHICLES`} title="Find a vehicle" />
      <BrowseCatalog vehicles={catalogue} />
    </section>
  );
}
