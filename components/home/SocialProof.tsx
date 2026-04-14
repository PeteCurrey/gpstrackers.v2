export default function SocialProof() {
  const logos = [
    'MT Electrical Services', 'East Midlands Logistics', 'Peak District Scaffolding',
    'Hardwick Plant Hire', 'County Groundworks', 'Swift Courier UK',
    'Midlands Fleet Services', 'Apex Construction Ltd', 'Northern Refrigeration Co',
    'Highland Agricultural', 'Mersey Plant & Tool', 'Southern Fleet Solutions'
  ];

  const testimonials = [
    {
      quote: "Within 4 hours of the van being stolen, the police had it back. The FS100 tracked it straight to a lock-up in Rotherham. Paid for itself many times over.",
      name: 'Mark Thompson',
      business: 'MT Electrical Services, Sheffield',
      device: 'TRAVIO FS100',
      stars: 5,
    },
    {
      quote: "We run 24 vehicles. The fleet dashboard is genuinely excellent — driver scoring alone has cut our fuel bill by over 18%. ROI in about 6 weeks.",
      name: 'Sarah Jennings',
      business: 'East Midlands Logistics Ltd',
      device: 'TRAVIO FS100 × 24',
      stars: 5,
    },
    {
      quote: "Three horse trailers, all tracked with Caravan Shield. Had a geofence breach alert at 2am — called the police before the thieves even left the village.",
      name: 'James & Helen Cartwright',
      business: 'Peak District Equestrian Centre',
      device: 'CARAVAN SHIELD CT1 × 3',
      stars: 5,
    },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-void)', overflow: 'hidden' }}>
      <div className="container">
        {/* Logo marquee */}
        <div style={{ marginBottom: '4rem' }}>
          <div
            className="font-mono"
            style={{
              textAlign: 'center',
              fontSize: '10px',
              letterSpacing: '0.16em',
              color: 'var(--color-muted)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            // RATED EXCELLENT · 4.8 STARS · 1,200+ UK BUYERS
          </div>

          {/* Trustpilot Placeholder */}
          <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{ width: '22px', height: '22px', background: 'var(--color-signal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-void)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="font-display" style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-white)' }}>4.8 / 5</div>
            <div className="font-mono" style={{ fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.04em' }}>BASED ON 1,200+ VERIFIED UK REVIEWS</div>
          </div>

          {/* Marquee wrapper */}
          <div
            style={{
              overflow: 'hidden',
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              opacity: 0.6
            }}
          >
            <div className="marquee-track" style={{ gap: '0' }}>
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    padding: '0.75rem 2.5rem',
                    borderRight: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <span
                    className="font-body"
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--color-white)',
                      letterSpacing: '0.1em',
                      whiteSpace: 'nowrap',
                      textTransform: 'uppercase'
                    }}
                  >
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(t.stars)].map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-signal)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Decorative quote mark */}
              <div
                className="font-display"
                style={{
                  fontSize: '64px',
                  lineHeight: 0.6,
                  color: 'var(--color-signal)',
                  opacity: 0.25,
                  fontWeight: 800,
                  userSelect: 'none',
                }}
              >
                "
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--color-text)',
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {t.quote}
              </p>

              <div>
                <div
                  style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text)', fontWeight: 400 }}
                >
                  {t.name}
                </div>
                <div
                  className="font-mono"
                  style={{ fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.04em', marginTop: '2px' }}
                >
                  {t.business}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    color: 'var(--color-signal)',
                    letterSpacing: '0.08em',
                    marginTop: '0.5rem',
                    padding: '2px 8px',
                    border: '1px solid rgba(14, 165, 233, 0.2)',
                    borderRadius: '4px',
                    display: 'inline-block',
                  }}
                >
                  DEVICE: {t.device}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
