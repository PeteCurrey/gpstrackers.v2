import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries } from '@/lib/data/industries';
import { products } from '@/lib/data/products';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  
  if (!industry) return { title: 'Industry Not Found' };

  return {
    title: `GPS Tracking for ${industry.name} | Site & Fleet Protection | Travio`,
    description: industry.sub,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) notFound();

  const recProducts = industry.recommendedProducts
    .map(sku => products.find(prod => prod.id === sku))
    .filter((p): p is (typeof products[0]) => !!p);

  return (
    <div className="bg-void min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 border-b border-border relative overflow-hidden">
          <div className="container relative z-10 text-center">
              <div className="mono-label text-signal mb-4 uppercase tracking-[0.2em]">
                  // INDUSTRY SOLUTIONS: {industry.name.toUpperCase()}
              </div>
              <h1 className="display-xl text-white mb-8 uppercase leading-none">
                  {industry.headline}
              </h1>
              <p className="font-body text-xl text-muted max-w-2xl mx-auto mb-12">
                  {industry.sub}
              </p>
              <div className="flex flex-wrap justify-center gap-12 text-center uppercase">
                  <div>
                      <div className="font-display text-4xl font-bold text-white mb-1">{industry.heroStat}</div>
                      <div className="font-mono text-[10px] text-muted tracking-widest">{industry.heroStatLabel}</div>
                  </div>
              </div>
          </div>
      </section>

      {/* SECTION 2: PAIN POINTS */}
      <section className="py-24 bg-surface-2/30">
          <div className="container">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="display-md text-white mb-6 uppercase">SOLVING YOUR BIGGEST CHALLENGES.</h2>
                      <div className="space-y-6">
                          {industry.painPoints.map((point, i) => (
                              <div key={i} className="flex gap-4">
                                  <div className="text-signal font-bold pt-1">!</div>
                                  <p className="font-body text-lg text-muted leading-relaxed">{point}</p>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="glass-card border-border bg-void p-12">
                      <div className="font-mono text-signal text-xs mb-8 tracking-widest uppercase">// TYPICAL CLIENTS</div>
                      <div className="grid grid-cols-1 gap-4">
                          {industry.clients.map((client, i) => (
                              <div key={i} className="flex items-center gap-3 text-white font-display text-sm uppercase tracking-widest">
                                  <div className="w-1.5 h-1.5 bg-signal rounded-full" />
                                  {client}
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* SECTION 3: RECOMMENDED HARDWARE */}
      <section className="py-24 border-y border-border">
          <div className="container">
              <div className="text-center mb-16">
                  <h2 className="display-md text-white mb-4 uppercase">RECOMMENDED TRACKING HARDWARE.</h2>
                  <p className="font-body text-muted max-w-2xl mx-auto">Selected specifically for the unique demands of the {industry.name} sector.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {recProducts.map((p, i) => (
                      <div key={i} className="glass-card border-border bg-void p-8 flex flex-col">
                          <div className="flex justify-between items-start mb-6">
                              <span className="font-mono text-[9px] text-signal border border-signal/30 px-2 py-0.5 rounded uppercase tracking-widest">
                                {Array.isArray(p.category) ? p.category[0] : (p.category as string)}
                              </span>
                              <div className="font-mono text-signal text-[8px] tracking-[0.2em] font-bold uppercase">[{p.installType.toUpperCase()} INSTALL]</div>
                          </div>
                          <h3 className="font-display text-2xl font-bold text-white mb-3 uppercase tracking-tight">{p.name}</h3>
                          <p className="font-body text-sm text-muted mb-8 line-clamp-2">{p.tagline}</p>
                          <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                             <div className="flex flex-col">
                                <div className="font-display text-2xl font-bold text-white leading-none">£{p.price}</div>
                                <div className="font-mono text-[10px] text-muted uppercase">SUB: £{p.subscriptionAnnual}/year</div>
                             </div>
                             <Link href={`/shop/${p.slug}`} className="btn-signal h-10 px-5 text-xs">View →</Link>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* SECTION 5: CASE STUDY testimonials placeholder */}
      {industry.caseStudy && (
          <section className="py-24 border-t border-border bg-void">
             <div className="container">
                <div className="max-w-4xl mx-auto glass-card border-border bg-surface-2 p-12 text-center">
                    <div className="text-signal text-6xl font-display font-black opacity-20 mb-4">"</div>
                    <p className="font-body text-2xl text-white mb-8 leading-relaxed">
                        "Travio has completely transformed how we manage our equipment. We recovered 3 stolen assets in the first 6 months alone."
                    </p>
                    <div className="font-mono text-xs text-muted uppercase tracking-[0.2em]">
                        D. HARRIS • {industry.name.toUpperCase()} DIRECTOR
                    </div>
                </div>
             </div>
          </section>
      )}

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(var(--color-signal)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="container text-center relative z-10">
              <h2 className="display-lg text-white mb-8 leading-tight">READY TO PROTECT YOUR {industry.name.toUpperCase()} OPERATION?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/fleet" className="btn-signal h-14 px-12 text-base">Get a Fleet Quote →</Link>
                  <Link href="/shop" className="btn-ghost h-14 px-12 text-base">Browse All Trackers</Link>
              </div>
          </div>
      </section>
    </div>
  );
}
