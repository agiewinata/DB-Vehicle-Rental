import type { Metadata } from 'next';
import { APPROVE_REJECT, DecisionRow } from '@/components/DecisionRow';
import { CarOutline, DocIcon } from '@/components/icons';
import { PageHead } from '@/components/PageHead';
import { Tabs } from '@/components/Tabs';
import { reviewDocuments, reviewListings } from '@/lib/data';
import type { ReactNode } from 'react';

export const metadata: Metadata = { title: 'Review Queue' };

const count = (n: number): ReactNode => (
  <span className="mono muted" style={{ fontSize: 12 }}>({n})</span>
);

export default function ReviewPage() {
  return (
    <section className="container wide">
      <PageHead eyebrow="ADMIN · REVIEW QUEUE" title="Listings & documents" />
      <Tabs
        tabs={[
          { id: 'listings', label: <>Listings {count(reviewListings.length)}</> },
          { id: 'documents', label: <>Documents {count(reviewDocuments.length)}</> },
        ]}
        panels={{
          listings: (
            <div className="card">
              {reviewListings.map((r) => (
                <DecisionRow key={r.id} icon={<CarOutline />} title={r.title} sub={r.sub} chip={{ kind: 'pending', label: 'Pending' }} actions={APPROVE_REJECT} />
              ))}
            </div>
          ),
          documents: (
            <div className="card">
              {reviewDocuments.map((r) => (
                <DecisionRow key={r.id} icon={<DocIcon />} title={r.title} sub={r.sub} chip={{ kind: 'pending', label: 'Pending' }} actions={APPROVE_REJECT} />
              ))}
            </div>
          ),
        }}
      />
    </section>
  );
}
