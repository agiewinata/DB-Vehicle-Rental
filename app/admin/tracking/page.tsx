import type { Metadata } from 'next';
import { DISPUTE_ACTIONS, DecisionRow } from '@/components/DecisionRow';
import { FlagIcon } from '@/components/icons';
import { PageHead } from '@/components/PageHead';
import { activeRentals, disputes } from '@/lib/data';

export const metadata: Metadata = { title: 'Tracking & Disputes' };

function MapMock() {
  return (
    <div className="map-mock">
      <svg width="100%" height="100%" viewBox="0 0 600 420" preserveAspectRatio="none" role="img" aria-label="Map showing the Honda HR-V along its route">
        <rect width="600" height="420" fill="#EDEAE1" />
        <g stroke="#DCD5C7" strokeWidth="1">
          {[70, 140, 210, 280, 350].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y} />
          ))}
          {[75, 150, 225, 300, 375, 450, 525].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="420" />
          ))}
        </g>
        <path d="M40 350 C 150 300, 180 200, 300 180 S 480 120, 560 60" stroke="#3A4A5C" strokeWidth="3" strokeDasharray="8 7" fill="none" />
        <circle cx="40" cy="350" r="6" fill="#1F6F63" />
        <circle cx="420" cy="150" r="9" fill="#C85A28" stroke="#fff" strokeWidth="3" />
        <circle cx="420" cy="150" r="16" fill="#C85A28" opacity="0.25" />
        <circle cx="560" cy="60" r="6" fill="#3A4A5C" />
      </svg>
      <div className="map-pin-label" style={{ left: '68%', top: '33%' }}>
        <strong>Honda HR-V</strong> &middot; WPT-076
        <br />
        62 km/h &middot; updated 6 min ago
      </div>
    </div>
  );
}

export default function TrackingPage() {
  return (
    <section className="container wide">
      <PageHead eyebrow="ADMIN · LIVE TRACKING" title="Active rentals" />

      <div className="tracking-grid">
        <div className="card" style={{ overflow: 'hidden' }}>
          <MapMock />
        </div>

        <aside className="card card-pad">
          <h3 style={{ marginBottom: 14 }}>In transit</h3>
          {activeRentals.map((r) => (
            <div key={r.id} className={`track-item${r.state === 'normal' ? '' : ` ${r.state}`}`}>
              <div className="dot" />
              <div>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{r.label}</div>
                <div className="text-xs" style={{ color: r.state === 'overdue' ? 'var(--red)' : 'var(--ink-soft)' }}>
                  {r.sub}
                </div>
              </div>
            </div>
          ))}
          <div className="route-line tight" />
          <button type="button" className="btn btn-danger btn-full btn-sm">
            Start retrieval for WPT-061
          </button>
        </aside>
      </div>

      <div className="route-line" />

      <PageHead eyebrow="DISPUTE MEDIATION" title="Open disputes" level={2} />
      <div className="card">
        {disputes.map((d) => (
          <DecisionRow
            key={d.id}
            icon={<FlagIcon stroke="var(--red)" strokeWidth={1.6} />}
            iconBg="var(--red-wash)"
            title={d.title}
            sub={d.sub}
            chip={{ kind: 'pending', label: 'Open' }}
            actions={DISPUTE_ACTIONS}
          />
        ))}
      </div>
    </section>
  );
}
