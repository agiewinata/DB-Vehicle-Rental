'use client';

import { useMemo, useState } from 'react';
import type { Vehicle, VehicleType } from '@/lib/types';
import { formatNumber } from '@/lib/format';
import { VehicleCard } from './VehicleCard';

const MIN_PRICE = 200000;
const MAX_PRICE = 700000;

/** Filter sidebar + results grid. Replaces initFilters() (which toggled display on [data-vehicle-card]). */
export function BrowseCatalog({ vehicles }: { vehicles: Vehicle[] }) {
  const [type, setType] = useState<'all' | VehicleType>('all');
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [city, setCity] = useState('');

  const results = useMemo(() => {
    const q = city.trim().toLowerCase();
    return vehicles.filter(
      (v) =>
        (type === 'all' || v.type === type) &&
        (v.dailyRate ?? 0) <= maxPrice &&
        (q === '' || v.city.toLowerCase().includes(q)),
    );
  }, [vehicles, type, maxPrice, city]);

  return (
    <div className="browse-layout">
      <aside className="card card-pad" style={{ alignSelf: 'start', position: 'sticky', top: 84 }}>
        <h3 style={{ marginBottom: 16 }}>Filter</h3>
        <div className="field">
          <label htmlFor="f-type">Vehicle type</label>
          <select id="f-type" value={type} onChange={(e) => setType(e.target.value as 'all' | VehicleType)}>
            <option value="all">All types</option>
            <option value="mpv">MPV</option>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
            <option value="hatchback">Hatchback</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-price">Max price per day</label>
          <input
            id="f-price"
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={10000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <span className="hint mono">Rp{formatNumber(maxPrice)}</span>
        </div>
        <div className="field">
          <label htmlFor="f-city">City</label>
          <input id="f-city" type="text" placeholder="e.g. Jakarta Selatan" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="route-line tight" />
        <p className="text-xs muted" aria-live="polite">
          {results.length} {results.length === 1 ? 'vehicle matches' : 'vehicles match'}
        </p>
      </aside>

      <div className="grid grid-cards">
        {results.map((v) => (
          <VehicleCard key={v.id} vehicle={v} />
        ))}
        {results.length === 0 && (
          <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
            <h3>No vehicles match</h3>
            <p>Try a higher price limit or clear the city filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
