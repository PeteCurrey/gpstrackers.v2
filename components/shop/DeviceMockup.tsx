import React from 'react';

interface DeviceMockupProps {
  name: string;
  category?: string | string[];
  className?: string;
}

export default function DeviceMockup({ name, category, className = '' }: DeviceMockupProps) {
  const isAmber = Array.isArray(category) ? category.includes('plant') : category === 'plant';
  const signalColor = isAmber ? 'var(--color-alert)' : 'var(--color-signal)';
  const glowColor = isAmber ? 'rgba(245,158,11,0.15)' : 'rgba(14,165,233,0.15)';

  return (
    <div 
      className={`relative aspect-square glass-card overflow-hidden flex items-center justify-center group ${className}`}
      style={{
        background: 'rgba(13, 17, 23, 0.4)',
        border: `1px solid ${isAmber ? 'rgba(245,158,11,0.2)' : 'rgba(14,165,233,0.2)'}`,
      }}
    >
      {/* Dynamic Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          opacity: 0.6
        }} 
      />

      {/* Coordinate Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${signalColor} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Device Silhouette */}
      <div className="relative z-10 w-3/5 h-3/5 flex flex-col items-center justify-center">
        <div 
          className="relative w-full h-full rounded-xl border-2 flex items-center justify-center"
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderColor: 'rgba(255,255,255,0.08)',
            boxShadow: `0 20px 50px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.02)`
          }}
        >
          {/* LED Indicator */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <div 
              className="w-1.5 h-1.5 rounded-full relative"
              style={{ 
                backgroundColor: signalColor,
                boxShadow: `0 0 10px ${signalColor}`
              }}
            >
              {/* Pulse Anims */}
              <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: signalColor }} />
            </div>
          </div>

          {/* Abstract Hardware Details */}
          <div className="w-1/2 h-1/2 border border-white/5 rounded-lg flex items-center justify-center">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-20">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
        </div>
      </div>

      {/* Large Signal Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="signal-pulse-ring" style={{ width: '60%', height: '60%', borderColor: signalColor, opacity: 0.1 }} />
          <div className="signal-pulse-ring" style={{ width: '85%', height: '85%', borderColor: signalColor, opacity: 0.05, animationDelay: '1.5s' }} />
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
          <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-1">
            {name}
          </div>
          <div className="font-mono text-[9px] text-muted tracking-tighter opacity-50">
            // DEVICE IMAGE COMING SOON
          </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 right-4">
          <div 
            className="font-mono text-[8px] px-2 py-0.5 rounded border tracking-widest uppercase"
            style={{ 
              color: signalColor, 
              borderColor: `${signalColor}40`,
              backgroundColor: `${signalColor}10`
            }}
          >
            {Array.isArray(category) ? category[0] : category}
          </div>
      </div>

    </div>
  );
}
