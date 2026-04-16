import Link from 'next/link';

const trackerLinks = [
  { label: 'Vehicle Trackers', href: '/trackers/vehicle-trackers' },
  { label: 'Fleet Trackers', href: '/trackers/fleet-trackers' },
  { label: 'Insurance Approved', href: '/trackers/insurance-approved' },
  { label: 'Asset Trackers', href: '/trackers/asset-trackers' },
  { label: 'Caravan & Motorhome', href: '/trackers/caravan-motorhome' },
  { label: 'Plant & Machinery', href: '/trackers/plant-machinery' },
];

const platformLinks = [
  { label: 'Travio Live', href: '/platform' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Fleet Management', href: '/fleet' },
  { label: 'Driver Behaviour', href: '/platform#driver-behaviour' },
  { label: 'Geofencing', href: '/platform#geofencing' },
  { label: 'API Access', href: '/contact' },
];

const resourceLinks = [
  { label: 'Theft Risk Checker', href: '/tools/theft-risk' },
  { label: 'AI Fleet Advisor', href: '/tools/fleet-advisor' },
  { label: 'Insurance Calculator', href: '/tools/insurance-savings' },
  { label: 'Blog', href: '/blog' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'FAQ', href: '/how-it-works#faq' },
];

const industriesLinks = [
  { label: 'Construction', href: '/industries/construction' },
  { label: 'Logistics', href: '/industries/logistics' },
  { label: 'Scaffolding', href: '/industries/scaffolding' },
  { label: 'Agriculture', href: '/industries/agriculture' },
  { label: 'Tradespeople', href: '/industries/tradesperson' },
  { label: 'Plant Hire', href: '/industries/plant-hire' },
];

const companyLinks = [
  { label: 'About Travio', href: '/about' },
  { label: 'Partner Portal', href: '/trade' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
];

const footerLinkStyle = {
  color: 'var(--color-muted)',
  textDecoration: 'none',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  transition: 'color 0.15s',
  display: 'block',
  marginBottom: '0.5rem',
};

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="footer-link"
    >
      {label}
    </Link>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-mono"
      style={{
        fontSize: '10px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--color-muted)',
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {children}
    </div>
  );
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--color-surface)" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '3rem',
            paddingTop: '4rem',
            paddingBottom: '3rem',
          }}
        >
          {/* Col 1: Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link
              href="/"
              className="font-display"
              style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--color-white)', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}
            >
              TRAVIO
            </Link>
            <div
              className="font-display"
              style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-muted)', letterSpacing: '0.02em', marginBottom: '1rem' }}
            >
              Track Everything. Know Everything.
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontWeight: 300, lineHeight: 1.6, marginBottom: '1.5rem' }}>
              GPS trackers, fleet management, and asset protection. UK-based team. Free next day delivery.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  className="social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Trackers */}
          <div>
            <FooterHeading>Trackers</FooterHeading>
            {trackerLinks.map((l) => <FooterLink key={l.href} {...l} />)}
          </div>

          {/* Col 3: Industries */}
          <div>
            <FooterHeading>Industries</FooterHeading>
            {industriesLinks.map((l) => <FooterLink key={l.href} {...l} />)}
          </div>

          {/* Col 4: Resources */}
          <div>
            <FooterHeading>Resources</FooterHeading>
            {resourceLinks.map((l) => <FooterLink key={l.href} {...l} />)}
          </div>

          {/* Col 5: Company */}
          <div>
            <FooterHeading>Company</FooterHeading>
            {companyLinks.map((l) => <FooterLink key={l.href} {...l} />)}
            <a
              href="tel:03300600499"
              className="font-mono"
              style={{
                display: 'block',
                color: 'var(--color-signal)',
                textDecoration: 'none',
                fontSize: '13px',
                letterSpacing: '0.06em',
                marginTop: '1rem',
              }}
            >
              03300 600 499
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '1.25rem',
            paddingBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span
            className="font-mono"
            style={{ fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.04em' }}
          >
            © 2026 Travio. All rights reserved. Registered in England &amp; Wales.
          </span>
          <span
            className="font-mono"
            style={{ fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.04em' }}
          >
            VAT No. GB 000 000 000
          </span>
        </div>
      </div>
    </footer>
  );
}
