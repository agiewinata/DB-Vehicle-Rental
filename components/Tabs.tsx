'use client';

import { useState, type ReactNode } from 'react';

export interface TabDef {
  id: string;
  label: ReactNode;
}

interface TabsProps {
  tabs: TabDef[];
  /** One panel per tab id. All panels stay mounted so their state survives tab switches. */
  panels: Record<string, ReactNode>;
  tabsClassName?: string;
}

export function Tabs({ tabs, panels, tabsClassName }: TabsProps) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <>
      <div className={`tabs ${tabsClassName ?? ''}`} role="tablist">
        {tabs.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            role="tab"
            aria-selected={active === t.id}
            className={active === t.id ? 'active' : undefined}
            onClick={(e) => {
              e.preventDefault();
              setActive(t.id);
            }}
          >
            {t.label}
          </a>
        ))}
      </div>
      {tabs.map((t) => (
        <div key={t.id} role="tabpanel" style={active === t.id ? undefined : { display: 'none' }}>
          {panels[t.id]}
        </div>
      ))}
    </>
  );
}
