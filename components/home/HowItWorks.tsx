export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="6" width="24" height="28" rx="3" stroke="var(--color-signal)" strokeWidth="1.5" />
          <rect x="8" y="10" width="12" height="8" rx="1.5" fill="rgba(14,165,233,0.15)" stroke="rgba(14,165,233,0.4)" strokeWidth="1" />
          <circle cx="32" cy="28" r="7" fill="var(--color-signal)" fillOpacity="0.15" stroke="var(--color-signal)" strokeWidth="1.5" />
          <path d="M29 28l2 2 4-4" stroke="var(--color-signal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Choose Your Tracker',
      subtitle: 'Pick your device',
      desc: 'Select from our range based on your vehicle type, use case, and whether you need insurance approval.',
    },
    {
      num: '02',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="10" y="14" width="20" height="14" rx="2" stroke="var(--color-signal)" strokeWidth="1.5" />
          <path d="M10 20h20" stroke="var(--color-signal)" strokeWidth="1.5" />
          <path d="M16 14v-4M24 14v-4" stroke="var(--color-signal)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="28" cy="10" r="5" fill="var(--color-signal)" fillOpacity="0.2" stroke="var(--color-signal)" strokeWidth="1" />
          <path d="M26 10l1.5 1.5L30 8" stroke="var(--color-signal)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Plug In & Activate',
      subtitle: 'Install in seconds',
      desc: 'Plug into your OBD port, hardwire to battery, or attach magnetically. Most installs take under 5 minutes. Insurance models are professionally fitted.',
    },
    {
      num: '03',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="4" width="18" height="30" rx="3" stroke="var(--color-signal)" strokeWidth="1.5" />
          <rect x="11" y="8" width="12" height="18" rx="1" fill="rgba(14,165,233,0.08)" stroke="rgba(14,165,233,0.2)" strokeWidth="0.5" />
          <circle cx="17" cy="17" r="4" fill="rgba(14,165,233,0.1)" stroke="var(--color-signal)" strokeWidth="1" />
          <path d="M17 13v-2M17 23v-2M13 17h-2M23 17h-2" stroke="rgba(14,165,233,0.4)" strokeWidth="1" strokeLinecap="round" />
          <circle cx="17" cy="17" r="1.5" fill="var(--color-signal)" />
          <circle cx="29" cy="14" r="7" fill="var(--color-signal)" fillOpacity="0.12" stroke="var(--color-signal)" strokeWidth="1" />
          <path d="M29 11v3l2 1" stroke="var(--color-signal)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Track on Any Device',
      subtitle: 'Open Travio Live',
      desc: 'Your vehicle appears on the map immediately. Set geofence zones, get movement alerts, and view journey history from the app or browser.',
    },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-void)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}
          >
            Live in 60 Seconds.
          </h2>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting dashed line */}
          <div
            style={{
              position: 'absolute',
              top: '60px',
              left: 'calc(16% + 40px)',
              right: 'calc(16% + 40px)',
              height: '2px',
              backgroundImage: `repeating-linear-gradient(
                90deg,
                var(--color-signal) 0px,
                var(--color-signal) 8px,
                transparent 8px,
                transparent 16px
              )`,
              opacity: 0.25,
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', position: 'relative', zIndex: 2 }}>
            {steps.map((step) => (
              <div key={step.num} style={{ textAlign: 'center', padding: '1.5rem' }}>
                {/* Step number */}
                <div
                  className="font-mono"
                  style={{ fontSize: '11px', color: 'var(--color-signal)', letterSpacing: '0.14em', marginBottom: '1rem' }}
                >
                  STEP {step.num}
                </div>

                {/* Icon circle */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(14,165,233,0.06)',
                    border: '1px solid rgba(14,165,233,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  {step.icon}
                </div>

                <div
                  className="font-display"
                  style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem' }}
                >
                  {step.title}
                </div>
                <div
                  className="font-mono"
                  style={{ fontSize: '11px', color: 'var(--color-signal)', letterSpacing: '0.08em', marginBottom: '0.75rem', textTransform: 'uppercase' }}
                >
                  {step.subtitle}
                </div>
                <p
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.65 }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <span
            className="font-mono"
            style={{ fontSize: '12px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}
          >
            Free 14-day trial — no credit card. Cancel anytime.
          </span>
        </div>
      </div>
    </section>
  );
}
