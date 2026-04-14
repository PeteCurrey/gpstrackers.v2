export default function TopBar() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 60,
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          className="font-mono"
          style={{
            fontSize: '11px',
            color: 'var(--color-muted)',
            letterSpacing: '0.08em',
          }}
        >
          Free next day delivery on all UK orders
        </span>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span
            className="font-mono"
            style={{ fontSize: '11px', color: 'var(--color-muted)', letterSpacing: '0.06em' }}
          >
            UK support: 03300 600 499
          </span>
          <span
            className="font-mono"
            style={{ fontSize: '11px', color: 'var(--color-signal)', letterSpacing: '0.06em' }}
          >
            Free 14-day trial
          </span>
        </div>
      </div>
    </div>
  );
}
