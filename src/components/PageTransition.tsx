// src/components/PageTransition.tsx
'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    // This key forces the DOM element to recreate on page changes, running the CSS entry animation
    <div key={segment || 'home'} className="animate-page-entry">
      {children}
    </div>
  );
}