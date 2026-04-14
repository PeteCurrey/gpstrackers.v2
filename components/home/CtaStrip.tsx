import Link from 'next/link';

export default function CtaStrip() {
  return (
    <section
      style={{
        background: 'var(--color-signal)',
        padding: '4rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--color-void)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Start your free 14-day trial today.
          </h2>

          <div style={{ display: 'flex', gap: '1rem', flexShrink: 0, flexWrap: 'wrap' }}>
            <Link
              href="/shop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '48px',
                padding: '0 1.5rem',
                background: 'var(--color-void)',
                color: 'var(--color-white)',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                borderRadius: '6px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#0a0e12')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--color-void)')}
            >
              Shop Trackers
            </Link>
            <Link
              href="/find-my-tracker"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '48px',
                padding: '0 1.5rem',
                background: 'transparent',
                color: 'var(--color-void)',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                borderRadius: '6px',
                border: '1.5px solid var(--color-void)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(7,11,15,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              Find My Tracker →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
