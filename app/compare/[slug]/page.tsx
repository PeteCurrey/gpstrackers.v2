import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { comparisons } from '@/lib/data/comparisons';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  
  if (!comparison) return { title: 'Comparison Not Found' };

  return {
    title: `Travio vs ${comparison.name} | GPS Tracker Comparison UK | Travio`,
    description: `How does Travio compare to ${comparison.name}? See why businesses are switching for better pricing, zero contracts, and UK-based support.`,
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);

  if (!comp) notFound();

  return (
    <div className="bg-void min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-40 pb-20 border-b border-border relative overflow-hidden">
        <div className="container relative z-10 text-center">
            <div className="mono-label text-signal mb-4 uppercase tracking-[0.2em]">
                // HONEST COMPARISON
            </div>
            <h1 className="display-xl text-white mb-8 uppercase leading-none">
                TRAVIO <span className="text-signal">VS</span> {comp.name.toUpperCase()}.
            </h1>
            <p className="font-body text-xl text-muted max-w-2xl mx-auto mb-12">
                Considering {comp.name} for your vehicle tracking? See how Travio's flexible, contract-free, and high-spec solution compares.
            </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24">
          <div className="container overflow-x-auto">
              <div className="min-w-[800px]">
                  <div className="grid grid-cols-3 gap-4 mb-4 font-mono text-[10px] text-muted uppercase tracking-widest px-8">
                      <div>FEATURE</div>
                      <div>TRAVIO</div>
                      <div>{comp.name}</div>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                        { f: 'Pricing Model', t: 'Hardware + Subscription', c: comp.priceComparison.competitor },
                        { f: 'Contract Term', t: 'Zero Contracts / Monthly', c: comp.slug.includes('quartix') || comp.slug.includes('ram') ? '12–36 Month Contract' : 'Variable' },
                        { f: 'Hardware Price', t: 'From £45 (FS100)', c: comp.slug.includes('itrack') ? '£30+' : 'Variable' },
                        { f: 'Annual Sub', t: 'Fixed £59 (Most models)', c: comp.priceComparison.competitor.split(' + ')[1] || 'Variable' },
                        { f: 'Installation', t: 'Self or Pro Options', c: 'Professional Only (Usually)' },
                        { f: 'History Retention', t: '90 Days Standard', c: '30–90 Days' },
                        { f: 'Geofencing', t: 'Unlimited / Custom Shapes', c: 'Limited / Circular Only' },
                        { f: 'Support', t: '24/7 UK-Based', c: 'Business Hours Only' }
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 gap-4 items-center glass-card border-border bg-surface-2 p-8 transition-colors hover:border-signal/30">
                            <div className="font-display font-bold text-white uppercase text-base">{row.f}</div>
                            <div className="font-body text-signal font-bold">{row.t}</div>
                            <div className="font-body text-muted">{row.c}</div>
                        </div>
                    ))}
                  </div>
              </div>
          </div>
      </section>

      {/* WHY SWITCH SECTION */}
      <section className="py-24 bg-surface-2/30">
          <div className="container">
              <div className="text-center mb-16">
                  <h2 className="display-md text-white">Why Businesses are Switching to Travio.</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                  <div className="glass-card border-signal/20 bg-void p-10">
                      <div className="font-display text-2xl font-black text-signal mb-6 uppercase">Why we always win on flexibility.</div>
                      <p className="font-body text-muted leading-relaxed mb-8">
                          Unlike many competitors in the UK market, Travio doesn't believe in locking small businesses and owners into restrictive multi-year contracts. Our mission is to keep your business through service quality and platform innovation, not through legal obligation.
                      </p>
                      <ul className="space-y-4">
                          {[
                              'Cancel your subscription anytime',
                              'No minimum spend or device count',
                              'Transparent pricing on every product'
                          ].map((item, i) => (
                              <li key={i} className="flex gap-4 text-white font-body">
                                  <span className="text-signal">✓</span>
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                      <div className="p-8 border-l-4 border-l-signal bg-surface-2">
                          <h3 className="font-display text-xl font-bold text-white mb-2 uppercase">BETTER UI, BETTER UX.</h3>
                          <p className="font-body text-sm text-muted leading-relaxed">Most established competitors are running on decade-old legacy software. Travio's platform is built on a modern stack, delivering 10s updates and ultra-fast map performance.</p>
                      </div>
                      <div className="p-8 border-l-4 border-l-signal bg-surface-2">
                          <h3 className="font-display text-xl font-bold text-white mb-2 uppercase">UK EXPERTISE.</h3>
                          <p className="font-body text-sm text-muted leading-relaxed">We understand the UK vehicle crime landscape because we're based here. Our alerts are tuned to local theft patterns (like relay attacks and plant theft).</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24">
          <div className="container max-w-4xl text-center">
              <h2 className="display-lg text-white mb-8 leading-tight">MADE YOUR DECISION?</h2>
              <p className="font-body text-xl text-muted mb-12">Start with Travio today. From £45 for the hardware and a 14-day free trial of our premium platform.</p>
              <div className="flex flex-wrap justify-center gap-6">
                  <Link href="/shop" className="btn-signal h-16 px-12 text-lg">Shop Trackers Now →</Link>
                  <Link href="/find-my-tracker" className="btn-ghost h-16 px-12 text-lg">Find Your Perfect Device</Link>
              </div>
          </div>
      </section>
    </div>
  );
}
