// src/components/RadialMenu.tsx
'use client';

import { useState } from 'react';

interface MenuItem {
  label: string;
  href: string;
  icon: string;
}

export default function RadialMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'Projects', href: '/projects', icon: '💻' },
    { label: 'Experience', href: '/experience', icon: '💼' },
    { label: 'Skills', href: '/skills', icon: '🛠️' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const radius = 85; // Distance from the floating center action button
  const totalItems = menuItems.length;

  return (
    /* ─── FLOATING WINDOW BOUNDARY: Mounted fixed in the bottom right corner ─── */
    <div className="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <div className="relative w-12 h-12 flex items-center justify-center">
        
        {/* ─── CHILD MENU ITEMS (SWEEPING COUNTERCLOCKWISE UP & LEFT) ─── */}
        {menuItems.map((item, index) => {
          /* Trigonometric Arc Distribution for Bottom-Right Corner:
             - To fan outwards across the open viewport layout, we target 180° (left) to 90° (straight up).
             - To keep the cascading flow sweeping COUNTERCLOCKWISE, the items step down 
               from 180° backwards into 90°.
          */
          const startAngle = 180; 
          const endAngle = 90;
          const angleStep = totalItems > 1 ? (startAngle - endAngle) / (totalItems - 1) : 0;
          const currentAngle = startAngle - (index * angleStep);
          
          const radian = (currentAngle * Math.PI) / 180;

          // Compute coordinate translations relative to the anchor point
          const xOffset = isOpen ? Math.cos(radian) * radius : 0;
          const yOffset = isOpen ? -Math.sin(radian) * radius : 0;

          return (
            <a
              key={item.label}
              href={item.href}
              title={item.label}
              className={`absolute flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-sm shadow-xl transition-all duration-300 ease-out font-mono ${
                isOpen 
                  ? 'opacity-100 scale-100 pointer-events-auto' 
                  : 'opacity-0 scale-50 pointer-events-none'
              }`}
              style={{
                transform: `translate(${xOffset}px, ${yOffset}px)`,
                transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
              }}
            >
              <span>{item.icon}</span>
            </a>
          );
        })}

        {/* ─── FLOATING ACTION TRIGGER TRIGGER ─── */}
        <button
          onClick={toggleMenu}
          className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-transform duration-300 ${
            isOpen ? 'rotate-45 bg-slate-800 border border-slate-700' : 'rotate-0'
          }`}
        >
          <svg 
            className="w-5 h-5 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>

      </div>
    </div>
  );
}