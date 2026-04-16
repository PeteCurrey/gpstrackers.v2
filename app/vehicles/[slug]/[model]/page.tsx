import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { vehicles } from '@/lib/data/vehicles';
import { products } from '@/lib/data/products';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string; model: string }>;
}

export async function generateStaticParams() {
  return vehicles.map((v) => ({
    slug: v.make,
    model: v.model,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, model } = await params;
  const vehicle = vehicles.find((v) => v.make === slug && v.model === model);
  
  if (!vehicle) return { title: 'Vehicle Not Found' };

  const recProduct = products.find(p => p.id === vehicle.recommended);
  const price = recProduct?.price || 45;

  return {
    title: `GPS Tracker for ${vehicle.displayName} | From £${price} | Travio`,
    description: `GPS tracker for ${vehicle.displayName}. ${vehicle.fact} Free next day delivery. 14-day free trial.`,
  };
}

export default async function VehiclePage({ params }: PageProps) {
  const { slug, model } = await params;
  const vehicle = vehicles.find((v) => v.make === slug && v.model === model);

  if (!vehicle) notFound();

  const recProduct = products.find(p => p.id === vehicle.recommended);

  return (
    <div className="bg-void min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }} />
        
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">
               // {vehicle.make.toUpperCase()} {vehicle.model.toUpperCase()} GPS TRACKER
            </div>
            <h1 className="display-xl text-white mb-6 uppercase leading-none">
              GPS Tracker for <span className="text-signal">{vehicle.displayName}</span>.
            </h1>
            <p className="font-body text-xl text-muted mb-10 max-w-2xl">
              Protect your {vehicle.type === 'van' ? 'van' : 'vehicle'}. From £{recProduct?.price || 45}. Free next day delivery to all UK postcodes.
            </p>

            <div className={`inline-flex items-center gap-3 px-4 py-2 border rounded-full font-mono text-xs font-bold ${
                vehicle.theftRisk === 'VERY HIGH' ? 'bg-amber-500/10 border-amber-500 text-amber-500' :
                vehicle.theftRisk === 'HIGH' ? 'border-amber-500/50 text-amber-500' :
                'border-signal text-signal'
            }`}>
                <span className={`w-2 h-2 rounded-full ${vehicle.theftRisk === 'VERY HIGH' ? 'bg-amber-500 animate-pulse' : 'bg-current'}`} />
                {vehicle.theftRisk} THEFT RISK
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THEFT FACT */}
      <section className="py-20 bg-surface-2/30 border-b border-border">
        <div className="container">
            <div className="glass-card border-border bg-surface-2 p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="var(--color-signal)">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16C10.9124 16 10.017 16.8954 10.017 18L10.017 21" />
                        <path d="M3.01709 13H5.01709V21H3.01709V13Z" />
                        <path d="M19.0171 13H21.0171V21H19.0171V13Z" />
                    </svg>
                </div>
                <div className="max-w-3xl">
                    <div className="text-signal text-5xl mb-6 font-display font-black">"</div>
                    <h2 className="display-lg text-white mb-6 leading-tight">
                        {vehicle.fact}
                    </h2>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest">
                        Source: National Vehicle Crime Intelligence Service (NaVCIS) / Police UK data
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: RECOMMENDED TRACKER */}
      <section className="py-24">
        <div className="container">
            <div className="text-center mb-16">
                <h2 className="display-md text-white mb-4">The Right Tracker for Your {vehicle.displayName}</h2>
                <p className="font-body text-muted max-w-xl mx-auto">Selected by experts based on local theft patterns and vehicle vulnerabilities.</p>
            </div>

            <div className="max-w-4xl mx-auto">
                {recProduct && (
                    <div className="glass-card border-signal/30 bg-void p-8 lg:p-12 mb-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="mono-label text-signal mb-4 uppercase tracking-[0.2em] opacity-60">// {recProduct.name}</div>
                                <h3 className="display-md text-white mb-6">{recProduct.name}</h3>
                                <ul className="space-y-4 mb-10">
                                    {recProduct.features.slice(0, 4).map((f, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-signal mt-1">✓</span>
                                            <span className="font-body text-muted">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href={`/shop/${recProduct.slug}`} className="btn-signal h-14 flex-1">View Full Details</Link>
                                    <div className="flex flex-col justify-center">
                                        <div className="font-display text-2xl font-bold text-white leading-none">£{recProduct.price}</div>
                                        <div className="font-mono text-[10px] text-muted uppercase">inc. delivery</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-surface-2 p-8 rounded-sm border border-border">
                                <div className="aspect-[4/5] bg-void/50 rounded-sm flex items-center justify-center border border-border mb-6">
                                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest">PRODUCT_IMAGE</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="font-mono text-[10px] text-muted uppercase">SUB: £{recProduct.subscriptionAnnual}/year</div>
                                    <div className="font-mono text-[10px] text-muted uppercase">{recProduct.installType.toUpperCase()} INSTALL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {vehicle.thatchamRequired && (
                    <div className="bg-amber-500/10 border border-amber-500/50 p-6 flex gap-4">
                        <span className="text-2xl mt-1">⚠️</span>
                        <div>
                            <div className="font-display text-lg font-bold text-amber-500 mb-1 uppercase">Insurance Approved Device Required</div>
                            <p className="font-body text-sm text-white/80">Most insurers now require a Thatcham-approved tracker for the {vehicle.displayName}. The {recProduct?.name} meets this requirement and includes nationwide installation.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE TRAVIO */}
      <section className="py-24 bg-surface-2/30">
          <div className="container">
              <div className="text-center mb-16">
                  <h2 className="display-sm text-white mb-4 uppercase">Why {vehicle.make} Owners Choose Travio</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { 
                        title: vehicle.type === 'van' ? 'Protects your livelihood' : 'Insurance compliance', 
                        desc: vehicle.type === 'van' ? 'Our trackers are hidden deep within the vehicle wiring, undetectable by thieves.' : 'Issue your completion certificate the same day for your insurance company.' 
                      },
                      { 
                        title: vehicle.type === 'van' ? 'Geofence your depot' : 'Theft recovery rate',
                        desc: vehicle.type === 'van' ? 'Get instant alerts the second your van moves outside of business hours.' : 'Our 24/7 monitoring centre coordinates directly with UK police to recover your vehicle.'
                      },
                      { 
                        title: vehicle.type === 'van' ? 'Driver behaviour' : 'Live location anywhere',
                        desc: vehicle.type === 'van' ? 'Monitor speed, harsh braking, and idling across your van fleet.' : 'Track your vehicle in real-time across the UK and Europe from our mobile app.'
                      }
                  ].map((card, i) => (
                      <div key={i} className="glass-card border-border bg-surface-2 p-8">
                          <h3 className="font-display text-xl font-bold text-white mb-4 uppercase">{card.title}</h3>
                          <p className="font-body text-sm text-muted leading-relaxed">{card.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 border-t border-border">
          <div className="container max-w-3xl">
              <h2 className="display-sm text-white mb-10 text-center uppercase">// FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                {[
                    { q: `Will the tracker work on a ${vehicle.displayName}?`, a: `Yes, our trackers are compatible with all ${vehicle.displayName} variants, including newest keyless entry models.` },
                    { q: 'Do I need professional installation?', a: vehicle.thatchamRequired ? 'Yes. For insurance approval, a Thatcham-approved tracker must be fitted by a certified specialist.' : 'No. We provide clear guides for self-installation, or you can opt for our professional fitting service.' },
                    { q: `Does my insurer require a Thatcham tracker for a ${vehicle.displayName}?`, a: `Many insurers now mandate S5 or S7 tracking for high-risk vehicles like the ${vehicle.displayName}. We recommend checking your policy.` },
                    { q: `How is the tracker hidden on a ${vehicle.displayName}?`, a: 'Our engineers hide the device deep behind the dashboard wiring loom, making it virtually impossible for thieves to find quickly.' },
                    { q: `What happens if my ${vehicle.displayName} is stolen?`, a: 'Open the Travio app to see the live location. If you have an insurance tracker, alert our 24/7 monitoring centre who will coordinate the recovery with the police.' }
                ].map((faq, i) => (
                    <div key={i} className="glass-card border-border bg-surface-2 p-6">
                        <h4 className="font-display font-bold text-white mb-3 text-lg leading-tight">{faq.q}</h4>
                        <p className="font-body text-sm text-muted">{faq.a}</p>
                    </div>
                ))}
              </div>
          </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-signal py-12">
          <div className="container">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                      <h2 className="font-display text-4xl font-black text-white leading-none mb-2">PROTECT YOUR {vehicle.displayName.toUpperCase()} TODAY.</h2>
                      <p className="font-mono text-[11px] text-white/80 uppercase tracking-widest">Pricing starts from £{recProduct?.price || 45}. Free next-day delivery.</p>
                  </div>
                  <Link href={`/shop/${recProduct?.slug}`} className="bg-white text-void h-14 px-10 font-mono text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-colors flex items-center">
                    Add to Cart →
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
}
