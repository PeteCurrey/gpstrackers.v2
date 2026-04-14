import Link from 'next/link';

export default function BeltBraces() {
  return (
    <section
      className="section-pad"
      style={{
        background: 'var(--color-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Signal glow accent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Copy */}
          <div>
            <div
              className="font-mono"
              style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'var(--color-signal)', textTransform: 'uppercase', marginBottom: '1.25rem' }}
            >
              // DUAL TRACKER PROTECTION
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 800,
                color: 'var(--color-white)',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
              }}
            >
              The Smart Way to Protect Your Vehicle.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--color-muted)',
                lineHeight: 1.75,
                marginBottom: '1.75rem',
              }}
            >
              One tracker is good. Two trackers is the strategy that professionals use. The Travio FS100 acts as your primary device — visible, hardwired, always on. The Travio AT1 is covert — battery-powered, undetectable, and asleep until your FS100 is tampered with. The moment the primary device is compromised, the AT1 wakes up and starts transmitting. Thieves don{"'"}t find two trackers. They find zero.
            </p>

            <div
              className="font-mono"
              style={{
                fontSize: '11px',
                color: 'var(--color-signal)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem',
                padding: '0.625rem 0.875rem',
                border: '1px solid rgba(14,165,233,0.25)',
                borderRadius: '6px',
                display: 'inline-block',
              }}
            >
              50% OFF THE AT1 WHEN PURCHASED WITH THE FS100
            </div>

            <div style={{ display: 'block' }}>
              <Link href="/shop/travio-fs100" className="btn-signal">
                Get the dual protection bundle →
              </Link>
            </div>
          </div>

          {/* Right: Animated diagram */}
          <DualTrackerDiagram />
        </div>
      </div>
    </section>
  );
}

function DualTrackerDiagram() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* FS100 — Primary */}
        <div
          className="glass-card"
          style={{
            flex: 1,
            padding: '1.5rem',
            border: '1px solid rgba(14,165,233,0.3)',
            position: 'relative',
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: '9px',
              letterSpacing: '0.14em',
              color: 'var(--color-signal)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            PRIMARY
          </div>
          <div className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
            Travio FS100
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)', marginBottom: '1rem' }}>
            Hardwired · Always on
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {['Hardwired', '10s updates', 'Visible deterrent'].map((f) => (
              <div key={f} className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>
                ✓ {f}
              </div>
            ))}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '0.75rem',
              right: '0.75rem',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-success)',
              boxShadow: '0 0 8px var(--color-success)',
            }}
          />
        </div>

        {/* Arrow */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', minWidth: '80px' }}>
          <div className="font-mono" style={{ fontSize: '9px', color: 'var(--color-muted)', letterSpacing: '0.1em', textAlign: 'center', lineHeight: 1.3 }}>
            IF FS100<br />COMPROMISED
          </div>
          <div style={{ fontSize: '20px', color: 'var(--color-alert)' }}>→</div>
        </div>

        {/* AT1 — Backup */}
        <div
          className="glass-card"
          style={{
            flex: 1,
            padding: '1.5rem',
            border: '1px solid rgba(245,158,11,0.3)',
            position: 'relative',
            animation: 'backupPulse 4s ease-in-out infinite',
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: '9px',
              letterSpacing: '0.14em',
              color: 'var(--color-alert)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            BACKUP — ACTIVE
          </div>
          <div className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
            Travio AT1
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)', marginBottom: '1rem' }}>
            Covert · Battery powered
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {['Magnetic mount', '3-year battery', 'Tamper activated'].map((f) => (
              <div key={f} className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>
                ✓ {f}
              </div>
            ))}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '0.75rem',
              right: '0.75rem',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-alert)',
              boxShadow: '0 0 8px var(--color-alert)',
              animation: 'alertBlink 1s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes backupPulse {
          0%, 100% { border-color: rgba(245,158,11,0.2); }
          50% { border-color: rgba(245,158,11,0.6); box-shadow: 0 0 20px rgba(245,158,11,0.1); }
        }
        @keyframes alertBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
