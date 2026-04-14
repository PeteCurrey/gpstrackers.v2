'use client';

import { useEffect, useRef } from 'react';

export default function CinematicMap() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 coord-grid" 
        style={{ 
          opacity: 0.1,
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }} 
      />
      
      {/* Animated SVG Map Layers */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* UK/Network Points */}
        <g opacity="0.4">
           {/* Static Points */}
           {[
             { x: 450, y: 400 }, { x: 480, y: 450 }, { x: 520, y: 420 }, 
             { x: 490, y: 380 }, { x: 550, y: 460 }, { x: 510, y: 500 },
             { x: 460, y: 520 }, { x: 420, y: 480 }
           ].map((p, i) => (
             <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="var(--color-signal)" />
           ))}
        </g>

        {/* Moving "Data Packets" */}
        <g filter="url(#glow)">
           <path 
             d="M450 400 Q 500 350, 550 460" 
             stroke="var(--color-signal)" 
             strokeWidth="0.5" 
             fill="none" 
             strokeDasharray="100 100"
             opacity="0.2"
           >
              <animate 
                attributeName="stroke-dashoffset" 
                from="200" to="0" 
                dur="4s" 
                repeatCount="indefinite" 
              />
           </path>
           <path 
             d="M520 420 Q 480 500, 420 480" 
             stroke="var(--color-signal)" 
             strokeWidth="0.5" 
             fill="none" 
             strokeDasharray="80 120"
             opacity="0.2"
           >
              <animate 
                attributeName="stroke-dashoffset" 
                from="-200" to="0" 
                dur="5s" 
                repeatCount="indefinite" 
              />
           </path>
        </g>

        {/* Pulse Centers (Chesterfield + Key Hubs) */}
        <g>
           <circle cx="490" cy="450" r="4" fill="var(--color-signal)" className="animate-pulse" />
           <circle cx="490" cy="450" r="12" stroke="var(--color-signal)" strokeWidth="0.5" fill="none" opacity="0.3">
              <animate attributeName="r" from="4" to="20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
           </circle>
        </g>
      </svg>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-transparent to-void opacity-60" />
    </div>
  );
}
