import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations } from '@/lib/data/locations';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `GPS Tracker ${location.name} | Vehicle & Fleet Tracking | Travio`,
    description: `GPS trackers in ${location.name} from £45. Free next day delivery to all ${location.name} postcodes. Thatcham installation available.`,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) notFound();

  return (
    <div className="bg-void min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 border-b border-border relative overflow-hidden">
          <div className="container relative z-10 text-center">
              <div className="mono-label text-signal mb-4 uppercase tracking-[0.2em]">
                  // SERVING {location.name.toUpperCase()} & SURROUNDING AREAS
              </div>
              <h1 className="display-xl text-white mb-8 uppercase leading-none">
                  GPS TRACKING IN <span className="text-signal">{location.name.toUpperCase()}</span>.
              </h1>
              <p className="font-body text-xl text-muted max-w-2xl mx-auto mb-12">
                  Professional GPS tracking solutions for vehicles and fleets in {location.name}. Free next-day delivery to all local postcodes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-6 py-2 bg-surface-2 border border-border rounded-sm font-mono text-[10px] text-white uppercase tracking-widest">
                      Free Next Day Delivery
                  </div>
                  <div className="px-6 py-2 bg-surface-2 border border-border rounded-sm font-mono text-[10px] text-white uppercase tracking-widest">
                      Local Installer Network
                  </div>
                  <div className="px-6 py-2 bg-surface-2 border border-border rounded-sm font-mono text-[10px] text-white uppercase tracking-widest">
                      No Contracts
                  </div>
              </div>
          </div>
      </section>

      {/* WHY IN [CITY] */}
      <section className="py-24 bg-surface-2/30">
          <div className="container">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="display-md text-white mb-6 uppercase">EXPERT VEHICLE SECURITY IN {location.name.toUpperCase()}.</h2>
                      <p className="font-body text-lg text-muted mb-8 leading-relaxed">
                          Whether you're protecting a high-value personal car or managing a business fleet across {location.name}, Travio provides the industry’s most reliable 4G tracking hardware.
                      </p>
                      <ul className="space-y-4 mb-10">
                          {[
                              `Next-day delivery to all ${location.name} postcodes`,
                              'Professional Thatcham-approved installation available local to you',
                              '24/7 UK-based theft monitoring centre'
                          ].map((item, i) => (
                              <li key={i} className="flex gap-3 text-white font-body">
                                  <span className="text-signal font-bold">✓</span>
                                  {item}
                              </li>
                          ))}
                      </ul>
                      <Link href="/shop" className="btn-signal h-14 px-10 inline-flex items-center">Browse Local Trackers</Link>
                  </div>
                  <div className="glass-card border-border bg-void p-2">
                       <div className="aspect-video bg-surface-2/50 flex items-center justify-center font-mono text-[10px] text-muted uppercase tracking-[0.3em]">
                           {location.name}_AREA_RADAR_ANIMATION
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* STATS STRIP FOR LOCATION */}
      <section className="py-12 border-y border-border bg-void">
          <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center uppercase">
                  <div>
                      <div className="font-display text-3xl font-bold text-white mb-1">4.9/5</div>
                      <div className="font-mono text-[9px] text-muted tracking-widest">{location.name} Rating</div>
                  </div>
                  <div>
                      <div className="font-display text-3xl font-bold text-white mb-1">24hr</div>
                      <div className="font-mono text-[9px] text-muted tracking-widest">Local Dispatch</div>
                  </div>
                  <div>
                      <div className="font-display text-3xl font-bold text-white mb-1">0330+</div>
                      <div className="font-mono text-[9px] text-muted tracking-widest">Local Support</div>
                  </div>
                  <div>
                      <div className="font-display text-3xl font-bold text-white mb-1">100%</div>
                      <div className="font-mono text-[9px] text-muted tracking-widest">Fleet Coverage</div>
                  </div>
              </div>
          </div>
      </section>

      {/* CALLOUT TO FLEET FOR BUSINESSES */}
      <section className="py-24 border-b border-border">
          <div className="container">
               <div className="glass-card border-signal/30 bg-signal/5 p-12 lg:p-20 text-center relative overflow-hidden">
                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="display-lg text-white mb-6 leading-tight">MANAGING A FLEET IN {location.name.toUpperCase()}?</h2>
                        <p className="font-body text-xl text-white/80 mb-10">Join hundreds of {location.name}-based businesses using Travio to reduce fuel costs and improve vehicle security.</p>
                        <Link href="/fleet" className="btn-signal bg-white text-signal hover:bg-white/90 h-16 px-12 text-lg">Get Your Fleet Quote →</Link>
                    </div>
               </div>
          </div>
      </section>

      {/* SMALLER FEATURE GRID */}
      <section className="py-24">
          <div className="container">
              <div className="grid md:grid-cols-3 gap-12">
                  <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 bg-signal/10 border border-signal/30 flex items-center justify-center text-signal text-xl font-bold">01</div>
                      <h3 className="font-display text-xl font-bold text-white">PERSONAL TRACKING</h3>
                      <p className="font-body text-sm text-muted">Protect your premium vehicle from relay attacks. Insurer-approved S5 and S7 devices available with mobile app access.</p>
                  </div>
                  <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 bg-signal/10 border border-signal/30 flex items-center justify-center text-signal text-xl font-bold">02</div>
                      <h3 className="font-display text-xl font-bold text-white">FLEET MANAGEMENT</h3>
                      <p className="font-body text-sm text-muted">Optimize routes across {location.name}. Monitor driver behavior and ignition events in real-time on our unified platform.</p>
                  </div>
                  <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 bg-signal/10 border border-signal/30 flex items-center justify-center text-signal text-xl font-bold">03</div>
                      <h3 className="font-display text-xl font-bold text-white">ASSET PROTECTION</h3>
                      <p className="font-body text-sm text-muted">Protect tools and equipment on site. Our battery-powered asset trackers are hidden from sight and alert you to movement.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
