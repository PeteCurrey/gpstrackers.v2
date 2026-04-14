import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories } from '@/lib/data/categories';
import { products } from '@/lib/data/products';
import DeviceMockup from '@/components/shop/DeviceMockup';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: 'Category Not Found' };

  return {
    title: `${cat.name} GPS Trackers UK | ${cat.sub.split('.')[0]} | Travio`,
    description: cat.sub,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  // Filter products for this category
  const catProducts = products.filter((p) => {
    if (Array.isArray(p.category)) {
      // Logic for slugs vs product category strings
      const slugBase = slug.split('-')[0]; // e.g. 'plant' from 'plant-machinery'
      return p.category.some(pc => slug.includes(pc));
    }
    return slug.includes(p.category);
  });

  const isPlant = slug === 'plant-machinery';
  const signalColor = isPlant ? 'var(--color-alert)' : 'var(--color-signal)';

  return (
    <div className="bg-void min-h-screen">
      {/* SECTION 1: HERO */}
      <section 
        className="relative pt-32 pb-20 overflow-hidden border-b border-border"
        style={{ background: 'var(--color-void)' }}
      >
        <div className="coord-grid opacity-[0.04]" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div className="container relative z-10 text-center lg:text-left">
          <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: signalColor }}>
            {cat.label}
          </div>
          <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-white mb-6 max-w-4xl tracking-tight leading-[0.95]">
            {cat.h1}
          </h1>
          <p className="font-body text-muted text-lg lg:text-xl max-w-2xl leading-relaxed opacity-80">
            {cat.sub}
          </p>
        </div>
      </section>

      {/* SECTION 2: WHAT IS [CATEGORY] TRACKING? */}
      <section className="section-pad bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                Professional {cat.name} visibility.
              </h2>
              <p className="font-body text-muted text-lg leading-relaxed mb-8">
                In the UK, {cat.name.toLowerCase()} theft is at an all-time high. Our {cat.name.toLowerCase()} trackers are designed specifically for the unique challenges of this sector—combining rugged hardware with the most advanced GPS tracking software in the country.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                {cat.features.map((f, i) => (
                   <div key={i} className="flex items-start gap-4">
                      <div className="font-mono text-xs p-2 border border-border rounded min-w-[100px] text-center" style={{ color: signalColor }}>
                         {f.label}<br/>
                         <span className="text-white">{f.value}</span>
                      </div>
                      <div>
                         <div className="font-display text-lg text-white font-bold">{f.title}</div>
                         <div className="font-body text-sm text-muted">{f.desc}</div>
                      </div>
                   </div>
                ))}
              </div>
            </div>
            <div className="aspect-square glass-card relative p-1">
               <DeviceMockup name={catProducts[0]?.name || cat.name} category={slug} className="w-full h-full border-none" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCTS IN THIS CATEGORY */}
      <section className="section-pad bg-void">
        <div className="container text-center mb-12">
            <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-2">// RECOMMENDED HARDWARE</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">Trackers for {cat.name}</h2>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {catProducts.map((p) => (
             <Link key={p.id} href={`/shop/${p.slug}`} className="glass-card p-6 flex flex-col group hover:border-signal/50 transition-all">
                <DeviceMockup name={p.name} category={p.category} className="mb-6 h-48" />
                <div className="font-display text-xl font-bold text-white mb-1 group-hover:text-signal transition-colors">{p.name}</div>
                <div className="font-body text-sm text-muted mb-6 flex-1">{p.tagline}</div>
                <div className="flex justify-between items-end">
                   <div>
                      <div className="font-display text-2xl font-bold text-white">£{p.price}</div>
                      <div className="font-mono text-[9px] text-muted">+ £{p.subscriptionAnnual}/yr Sub</div>
                   </div>
                   <div className="font-mono text-[10px] text-signal uppercase tracking-widest">Details →</div>
                </div>
             </Link>
           ))}
        </div>
        <div className="container text-center mt-12">
           <Link href="/shop" className="font-mono text-xs text-muted hover:text-white transition-colors underline underline-offset-4">
              View all 9 trackers in the shop →
           </Link>
        </div>
      </section>

      {/* SECTION 4: USE CASES */}
      <section className="section-pad bg-surface-2">
        <div className="container">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-12 text-center lg:text-left">
            Real-world usage.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {cat.useCases.map((u, i) => (
               <div key={i} className="glass-card p-8 bg-void/40 hover:bg-void/60 transition-colors">
                  <div className="font-display text-xl text-white font-bold mb-3">{u.title}</div>
                  <p className="font-body text-muted leading-relaxed">{u.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CATEGORY FAQ */}
      <section className="section-pad bg-surface">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Common questions.
          </h2>
          <div className="flex flex-col gap-4">
            {cat.faqs.map((f, i) => (
              <div key={i} className="glass-card p-6 bg-void/20">
                <h4 className="font-display text-lg text-white mb-2">{f.question}</h4>
                <p className="font-body text-muted text-sm leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
          {/* JSON-LD for FAQs */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": cat.faqs.map(f => ({
                  "@type": "Question",
                  "name": f.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.answer
                  }
                }))
              })
            }}
          />
        </div>
      </section>

      {/* SECTION 6: CTA STRIP */}
      <section className="section-pad" style={{ background: signalColor }}>
          <div className="container flex flex-col items-center text-center gap-6">
             <h2 className="font-display text-4xl lg:text-6xl font-extrabold text-void tracking-tight">
                Ready to protect your {cat.name.toLowerCase()}?
             </h2>
             <div className="flex flex-wrap justify-center gap-4">
                <Link href="/shop" className="btn-void h-14 px-8 text-base">
                   Shop {cat.name} Trackers
                </Link>
                <Link href="/contact" className="h-14 px-8 border border-void/30 flex items-center text-void font-bold hover:bg-void/10 transition-colors">
                   Get a fleet quote →
                </Link>
             </div>
          </div>
      </section>

      {/* COLLECTION JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${cat.name} GPS Trackers`,
            "description": cat.sub,
            "url": `https://travio.co.uk/trackers/${cat.slug}`
          })
        }}
      />
    </div>
  );
}
