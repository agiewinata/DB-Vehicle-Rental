import type { ReactNode } from 'react';

export function PageHead({
  eyebrow,
  title,
  level = 1,
  children,
}: {
  eyebrow: string;
  title: string;
  level?: 1 | 2;
  children?: ReactNode;
}) {
  const Heading = level === 1 ? 'h1' : 'h2';
  return (
    <div className="page-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <Heading>{title}</Heading>
      </div>
      {children}
    </div>
  );
}
