import Link from 'next/link';

const posts = [
  {
    category: 'BUYING GUIDE',
    title: 'OBD vs Hardwired GPS Trackers: Which Is Right for Your Vehicle?',
    excerpt: 'We break down the key differences between plug-and-play OBD trackers and professionally hardwired devices — including when each makes sense.',
    date: '12 Apr 2026',
    readingTime: 6,
    slug: 'obd-vs-hardwired-trackers',
  },
  {
    category: 'INSURANCE',
    title: 'Thatcham S5 vs S7: What Your Insurer Actually Requires',
    excerpt: 'Category S5 and S7 trackers both offer insurance approval, but they are very different products. Here is what you need to know before you buy.',
    date: '8 Apr 2026',
    readingTime: 5,
    slug: 'thatcham-s5-vs-s7-guide',
  },
  {
    category: 'FLEET',
    title: 'How Driver Behaviour Scoring Cut Our Client\'s Fuel Bill by 22%',
    excerpt: 'A real-world look at how a 24-vehicle Midlands logistics company used Travio\'s driver scoring to identify inefficiencies and change behaviour.',
    date: '3 Apr 2026',
    readingTime: 7,
    slug: 'driver-behaviour-scoring-case-study',
  },
];

export default function BlogPreview() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: 'var(--color-white)',
              letterSpacing: '-0.02em',
            }}
          >
            From the Blog
          </h2>
          <Link
            href="/blog"
            style={{ color: 'var(--color-signal)', fontFamily: 'var(--font-body)', fontSize: '14px', textDecoration: 'none' }}
          >
            All articles →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                className="glass-card"
                style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                {/* Category */}
                <div
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    color: 'var(--color-signal)',
                    textTransform: 'uppercase',
                    marginBottom: '0.875rem',
                  }}
                >
                  {post.category}
                </div>

                {/* Title */}
                <div
                  className="font-display"
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--color-white)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                    marginBottom: '0.875rem',
                  }}
                >
                  {post.title}
                </div>

                {/* Excerpt */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '14px',
                    color: 'var(--color-muted)',
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: '1.25rem',
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.08em',
                    display: 'flex',
                    gap: '0.75rem',
                  }}
                >
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readingTime} MIN READ</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
