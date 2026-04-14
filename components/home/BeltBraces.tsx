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
      <div className="diagram-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* FS100 — Primary */}
        <div
          className="glass-card primary-card"
          style={{
            flex: 1,
            padding: '1.5rem',
            border: '1px solid rgba(14,165,233,0.3)',
            position: 'relative',
            transition: 'all 0.5s ease'
          }}
        >
          <div
            className="font-mono primary-status-label"
            style={{
              fontSize: '9px',
              letterSpacing: '0.14em',
              color: 'var(--color-signal)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            PRIMARY — ACTIVE
          </div>
          <div className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
            Travio FS100
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)', marginBottom: '1rem' }}>
            Hardwired · Constant Live
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {['10s Updates', 'Ignition Sense', 'Geofence Active'].map((f) => (
              <div key={f} className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>
                ✓ {f}
              </div>
            ))}
          </div>
          <div
            className="primary-dot"
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

        {/* Transition Arrow */}
        <div className="arrow-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', minWidth: '80px' }}>
          <div className="font-mono arrow-label" style={{ fontSize: '9px', color: 'var(--color-muted)', letterSpacing: '0.1em', textAlign: 'center', lineHeight: 1.3 }}>
            SEQUENCE<br />TRIGGERED
          </div>
          <div className="arrow-icon" style={{ fontSize: '20px', color: 'var(--color-muted)' }}>→</div>
        </div>

        {/* AT1 — Backup */}
        <div
          className="glass-card backup-card"
          style={{
            flex: 1,
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            opacity: 0.4,
            transition: 'all 0.5s ease'
          }}
        >
          <div
            className="font-mono backup-status-label"
            style={{
              fontSize: '9px',
              letterSpacing: '0.14em',
              color: 'var(--color-muted)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            BACKUP — DEEP SLEEP
          </div>
          <div className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
            Travio AT1
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-muted)', marginBottom: '1rem' }}>
            Covert · 3-Year Battery
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {['Invisible', 'RF Shielded', 'Wake-on-Panic'].map((f) => (
              <div key={f} className="font-mono" style={{ fontSize: '10px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}>
                ✓ {f}
              </div>
            ))}
          </div>
          <div
            className="backup-dot"
            style={{
              position: 'absolute',
              bottom: '0.75rem',
              right: '0.75rem',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-muted)',
              opacity: 0.3
            }}
          />
        </div>
      </div>

      <style>{`
        .diagram-container {
           animation: cycleSequence 10s infinite;
        }

        @keyframes cycleSequence {
           0%, 45% { /* FS100 Active state */ }
           50%, 95% { /* AT1 Active state */ }
        }

        /* PRIMARY CARD STATES */
        .diagram-container { animation: sequenceLoop 10s infinite; }

        @keyframes sequenceLoop {
          0%, 40% { /* Phase 1: FS100 Healthy */ }
          45%, 50% { /* Transition */ }
          55%, 95% { /* Phase 2: AT1 Waking up */ }
        }

        /* We'll use child-based animations tied to the container's 10s cycle */
        
        /* FS100 Card */
        .primary-card { animation: primaryPulse 10s infinite; }
        @keyframes primaryPulse {
          0%, 45% { border-color: rgba(14,165,233,0.4); opacity: 1; filter: grayscale(0); }
          50%, 95% { border-color: rgba(239,68,68,0.3); opacity: 0.6; filter: grayscale(1); }
        }
        
        .primary-dot { animation: primaryDotPulse 10s infinite; }
        @keyframes primaryDotPulse {
          0%, 45% { background: var(--color-success); box-shadow: 0 0 10px var(--color-success); }
          50%, 95% { background: #ef4444; box-shadow: 0 0 10px #ef4444; transform: scale(0.8); }
        }

        .primary-status-label { animation: primaryLabelText 10s infinite; }
        @keyframes primaryLabelText {
           0%, 45% { color: var(--color-signal); }
           50%, 95% { color: #ef4444; }
        }

        /* Arrow */
        .arrow-icon { animation: arrowFlow 10s infinite; }
        @keyframes arrowFlow {
          0%, 45% { color: var(--color-muted); opacity: 0.3; transform: translateX(0); }
          50% { color: var(--color-alert); opacity: 1; transform: translateX(5px); }
          55%, 95% { color: var(--color-alert); opacity: 0.3; transform: translateX(0); }
        }

        /* AT1 Card */
        .backup-card { animation: backupWake 10s infinite; }
        @keyframes backupWake {
          0%, 45% { border-color: rgba(255,255,255,0.05); opacity: 0.2; transform: scale(0.98); }
          50% { border-color: var(--color-alert); opacity: 1; transform: scale(1.02); }
          55%, 95% { border-color: var(--color-alert); opacity: 1; transform: scale(1); box-shadow: 0 0 30px rgba(245,158,11,0.15); }
        }

        .backup-dot { animation: backupDotPulse 10s infinite; }
        @keyframes backupDotPulse {
          0%, 45% { background: var(--color-muted); opacity: 0.3; }
          50%, 95% { background: var(--color-alert); opacity: 1; box-shadow: 0 0 15px var(--color-alert); animation: alertBlink 1s infinite; }
        }

        .backup-status-label { animation: backupLabelText 10s infinite; }
        @keyframes backupLabelText {
          0%, 45% { color: var(--color-muted); }
          50%, 95% { color: var(--color-alert); }
        }

        @keyframes alertBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
