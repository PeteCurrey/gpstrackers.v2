import Link from 'next/link';

const features = [
  'Live map — every vehicle, every asset, right now',
  'Journey history — 90 days of complete route data',
  'Driver behaviour scoring — speed, braking, idle time',
  'Geofencing — set zones, get alerted on breach',
  'Multiple sub-accounts — share access without sharing everything',
  'iOS + Android app — full platform on your phone',
  'Location share links — send a live link, set an expiry',
  'SMS backup tracking — text the device, get a Maps link',
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
      <circle cx="8" cy="8" r="8" fill="rgba(14,165,233,0.15)" />
      <path d="M5 8l2 2 4-4" stroke="var(--color-signal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <div
      style={{
        background: 'rgba(13, 17, 23, 0.96)',
        border: '1px solid rgba(14,165,233,0.18)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 0 80px rgba(14,165,233,0.1), 0 40px 120px rgba(0,0,0,0.4)',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: '0.75rem 1rem',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--color-surface)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-success)', boxShadow: '0 0 6px var(--color-success)' }} />
          <span className="font-mono" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', color: 'var(--color-signal)' }}>
            TRAVIO LIVE
          </span>
        </div>
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>
          8 vehicles active
        </span>
      </div>

      <div style={{ display: 'flex' }}>
        {/* Map area */}
        <div style={{ flex: 1, position: 'relative', minHeight: '320px', background: '#070e18', overflow: 'hidden' }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
            <defs>
              <pattern id="platform-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(14,165,233,0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#platform-grid)" />
            {/* Road network */}
            <path d="M 30 80 Q 100 60 160 100 Q 220 140 300 120" stroke="rgba(14,165,233,0.15)" strokeWidth="3" fill="none" />
            <path d="M 0 160 Q 80 140 160 160 Q 240 180 320 150" stroke="rgba(14,165,233,0.1)" strokeWidth="2" fill="none" />
            <path d="M 120 20 L 120 280" stroke="rgba(14,165,233,0.06)" strokeWidth="1.5" />
            <path d="M 240 0 Q 220 100 240 200 Q 260 280 240 320" stroke="rgba(14,165,233,0.07)" strokeWidth="1.5" fill="none" />

            {/* Vehicle pins */}
            {[
              { x: 80, y: 90, color: 'var(--color-signal)', pulse: true },
              { x: 165, y: 100, color: 'var(--color-signal)', pulse: false },
              { x: 240, y: 50, color: 'var(--color-success)', pulse: false },
              { x: 120, y: 200, color: 'var(--color-signal)', pulse: false },
              { x: 290, y: 145, color: 'var(--color-alert)', pulse: false },
            ].map((pin, i) => (
              <g key={i} transform={`translate(${pin.x}, ${pin.y})`}>
                <circle r="12" fill={`${pin.color}22`} />
                <circle r="6" fill={pin.color} />
                <circle r="3" fill="white" fillOpacity="0.9" />
              </g>
            ))}
          </svg>

          {/* Signal pulse on first pin */}
          <div
            style={{
              position: 'absolute',
              top: 70,
              left: 60,
              width: '40px',
              height: '40px',
              pointerEvents: 'none',
            }}
          >
            <div className="signal-pulse-ring" />
            <div className="signal-pulse-ring" />
          </div>

          {/* Alert badge bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              background: 'rgba(245,158,11,0.12)',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: '6px',
              padding: '0.5rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-alert)', flexShrink: 0 }} />
            <span className="font-mono" style={{ fontSize: '10px', color: 'var(--color-alert)', letterSpacing: '0.06em' }}>
              VAN 003 — Geofence breach detected 2 min ago
            </span>
          </div>
        </div>

        {/* Right sidebar */}
        <div
          style={{
            width: '180px',
            borderLeft: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
          }}
        >
          {/* Column header */}
          <div
            className="font-mono"
            style={{
              padding: '0.5rem 0.75rem',
              fontSize: '9px',
              letterSpacing: '0.12em',
              color: 'var(--color-muted)',
              textTransform: 'uppercase',
              borderBottom: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
            }}
          >
            FLEET STATUS
          </div>
          {[
            { name: 'VAN 001', status: 'MOVING', speed: '42 mph', color: 'var(--color-success)' },
            { name: 'VAN 002', status: 'PARKED', speed: 'Sheffield', color: 'var(--color-signal)' },
            { name: 'VAN 003', status: 'ALERT', speed: 'Geofence', color: 'var(--color-alert)' },
            { name: 'VAN 004', status: 'MOVING', speed: '31 mph', color: 'var(--color-success)' },
            { name: 'VAN 005', status: 'PARKED', speed: 'Leeds, LS1', color: 'var(--color-signal)' },
          ].map((v) => (
            <div
              key={v.name}
              style={{
                padding: '0.625rem 0.75rem',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div className="font-mono" style={{ fontSize: '10px', color: 'var(--color-text)', letterSpacing: '0.06em', marginBottom: '2px' }}>
                {v.name}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  className="font-mono"
                  style={{ fontSize: '9px', color: v.color, letterSpacing: '0.08em', fontWeight: 500 }}
                >
                  {v.status}
                </span>
                <span className="font-mono" style={{ fontSize: '9px', color: 'var(--color-muted)', letterSpacing: '0.04em' }}>
                  {v.speed}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          padding: '0.5rem 1rem',
          borderTop: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          display: 'flex',
          gap: '1.5rem',
        }}
      >
        {[
          { label: 'ACTIVE', val: '5', color: 'var(--color-success)' },
          { label: 'PARKED', val: '2', color: 'var(--color-signal)' },
          { label: 'ALERTS', val: '1', color: 'var(--color-alert)' },
          { label: 'OFFLINE', val: '0', color: 'var(--color-muted)' },
        ].map((s) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.color }} />
            <span className="font-mono" style={{ fontSize: '9px', color: 'var(--color-muted)', letterSpacing: '0.1em' }}>
              {s.label}
            </span>
            <span className="font-mono" style={{ fontSize: '10px', color: s.color, fontWeight: 500 }}>
              {s.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlatformShowcase() {
  return (
    <section
      className="section-pad coord-grid"
      style={{ background: 'var(--color-surface)', position: 'relative' }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 0.7fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Dashboard mockup */}
          <div>
            <DashboardMockup />
          </div>

          {/* Right: Feature list */}
          <div>
            <div className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'var(--color-signal)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              // TRAVIO LIVE PLATFORM
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: 'var(--color-white)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '2rem',
              }}
            >
              One Dashboard. Complete Control.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
              {features.map((f) => (
                <div key={f} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckIcon />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text)', lineHeight: 1.5 }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', color: 'var(--color-muted)', marginBottom: '1rem' }}>
              Free 14-day trial. No credit card required.
            </p>
            <Link
              href="/platform"
              style={{
                color: 'var(--color-signal)',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              Start free trial →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
