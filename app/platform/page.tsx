import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travio Live | The UK\'s Most Advanced Tracking Platform',
  description: 'Explore the full power of the Travio Live platform. Real-time mapping, 90-day history, driver behaviour analytics and more. Free 14-day trial.',
};

export default function PlatformPage() {
  return (
    <div className="bg-void min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="coord-grid absolute inset-0 opacity-15" />
        <div className="container relative z-10 text-center">
            <div className="mono-label mb-4 mx-auto text-signal">// TRAVIO LIVE PLATFORM</div>
            <h1 className="display-xl text-white mb-6 max-w-4xl mx-auto">
              Intelligence in Motion.
            </h1>
            <p className="font-body text-muted text-xl lg:text-2xl font-light mb-10 leading-relaxed max-w-2xl mx-auto">
              A single platform to track, manage, and protect every asset you own. Built for speed, precision, and ease of use.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/shop" className="btn-signal h-14 px-8 text-base font-medium">Get Started Free</Link>
               <button className="btn-ghost h-14 px-8 text-base font-medium">Watch Platform Demo</button>
            </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-12 border-y border-border bg-surface/30">
        <div className="container">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Uptime', val: '99.99%', suffix: '' },
                { label: 'Latency', val: '< 200', suffix: 'ms' },
                { label: 'Devices Active', val: '42,000', suffix: '+' },
                { label: 'Map Refreshes', val: '10', suffix: 's' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                   <div className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">{stat.val}{stat.suffix}</div>
                   <div className="font-mono text-[10px] text-muted uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="section-pad">
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
               {/* 1. Live Mapping */}
               <div className="glass-card p-8 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-signal/10 flex items-center justify-center mb-6 group-hover:bg-signal/20 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                  </div>
                  <h3 className="display-md text-white mb-4">Live Mapping</h3>
                  <p className="font-body text-muted leading-relaxed flex-1 mb-8">
                    Ultra-fast vector maps that update every 10 seconds. See your assets move in real-time with street-level precision.
                  </p>
                  <div className="border-t border-border pt-6 mt-auto">
                      <div className="font-mono text-[10px] text-signal uppercase tracking-widest mb-2">FEATURES</div>
                      <ul className="flex flex-col gap-2">
                         {['Street/Satellite modes', 'Traffic overlays', 'Asset clustering', 'Direct route link'].map((f, i) => (
                             <li key={i} className="font-mono text-[11px] text-muted lowercase flex items-center gap-2">
                                <div className="w-1 h-1 bg-signal rounded-full" /> {f}
                             </li>
                         ))}
                      </ul>
                  </div>
               </div>

               {/* 2. Journey History */}
               <div className="glass-card p-8 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-signal/10 flex items-center justify-center mb-6 group-hover:bg-signal/20 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="9" /></svg>
                  </div>
                  <h3 className="display-md text-white mb-4">Journey History</h3>
                  <p className="font-body text-muted leading-relaxed flex-1 mb-8">
                    90 days of complete journey data stored on our servers. Replay any route, analyze stops, and export reports.
                  </p>
                  <div className="border-t border-border pt-6 mt-auto">
                      <div className="font-mono text-[10px] text-signal uppercase tracking-widest mb-2">FEATURES</div>
                      <ul className="flex flex-col gap-2">
                         {['Animated route replay', 'Idle time analysis', 'Stop-point logging', 'Excel/CSV exports'].map((f, i) => (
                             <li key={i} className="font-mono text-[11px] text-muted lowercase flex items-center gap-2">
                                <div className="w-1 h-1 bg-signal rounded-full" /> {f}
                             </li>
                         ))}
                      </ul>
                  </div>
               </div>

               {/* 3. Driver Behaviour */}
               <div className="glass-card p-8 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-signal/10 flex items-center justify-center mb-6 group-hover:bg-signal/20 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                  </div>
                  <h3 className="display-md text-white mb-4">Driver Behaviour</h3>
                  <p className="font-body text-muted leading-relaxed flex-1 mb-8">
                    Sophisticated scoring algorithms that identify high-risk behaviour and fuel-inefficiency across your fleet.
                  </p>
                  <div className="border-t border-border pt-6 mt-auto">
                      <div className="font-mono text-[10px] text-signal uppercase tracking-widest mb-2">FEATURES</div>
                      <ul className="flex flex-col gap-2">
                         {['Speeding events', 'Harsh braking logic', 'Idle time alerts', 'Driver league tables'].map((f, i) => (
                             <li key={i} className="font-mono text-[11px] text-muted lowercase flex items-center gap-2">
                                <div className="w-1 h-1 bg-signal rounded-full" /> {f}
                             </li>
                         ))}
                      </ul>
                  </div>
               </div>

               {/* 4. Smart Geofencing */}
               <div className="glass-card p-8 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-signal/10 flex items-center justify-center mb-6 group-hover:bg-signal/20 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <h3 className="display-md text-white mb-4">Smart Geofencing</h3>
                  <p className="font-body text-muted leading-relaxed flex-1 mb-8">
                    Draw complex polygonal zones on the map. Get instant alerts when vehicles enter or exit designated areas.
                  </p>
                  <div className="border-t border-border pt-6 mt-auto">
                      <div className="font-mono text-[10px] text-signal uppercase tracking-widest mb-2">FEATURES</div>
                      <ul className="flex flex-col gap-2">
                         {['Polygonal zone drawing', 'Entry/Exit alerts', 'Time-restricted zones', 'Speed limit zones'].map((f, i) => (
                             <li key={i} className="font-mono text-[11px] text-muted lowercase flex items-center gap-2">
                                <div className="w-1 h-1 bg-signal rounded-full" /> {f}
                             </li>
                         ))}
                      </ul>
                  </div>
               </div>

               {/* 5. Mobile App */}
               <div className="glass-card p-8 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-signal/10 flex items-center justify-center mb-6 group-hover:bg-signal/20 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                  </div>
                  <h3 className="display-md text-white mb-4">Mobile App</h3>
                  <p className="font-body text-muted leading-relaxed flex-1 mb-8">
                    Your entire fleet in your pocket. Full platform parity on iOS and Android with native push notifications.
                  </p>
                  <div className="border-t border-border pt-6 mt-auto">
                      <div className="font-mono text-[10px] text-signal uppercase tracking-widest mb-2">FEATURES</div>
                      <ul className="flex flex-col gap-2">
                         {['Native push alerts', 'Biometric login', 'Live location widget', 'Remote immobilisation'].map((f, i) => (
                             <li key={i} className="font-mono text-[11px] text-muted lowercase flex items-center gap-2">
                                <div className="w-1 h-1 bg-signal rounded-full" /> {f}
                             </li>
                         ))}
                      </ul>
                  </div>
               </div>

               {/* 6. Developer API */}
               <div className="glass-card p-8 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-signal/10 flex items-center justify-center mb-6 group-hover:bg-signal/20 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                  </div>
                  <h3 className="display-md text-white mb-4">Developer API</h3>
                  <p className="font-body text-muted leading-relaxed flex-1 mb-8">
                    Powerful REST API and Webhooks to integrate Travio location data directly into your own dispatch or ERP systems.
                  </p>
                  <div className="border-t border-border pt-6 mt-auto">
                      <div className="font-mono text-[10px] text-signal uppercase tracking-widest mb-2">FEATURES</div>
                      <ul className="flex flex-col gap-2">
                         {['RESTful endpoints', 'Real-time Webhooks', 'Bespoke SDKs', 'Full documentation'].map((f, i) => (
                             <li key={i} className="font-mono text-[11px] text-muted lowercase flex items-center gap-2">
                                <div className="w-1 h-1 bg-signal rounded-full" /> {f}
                             </li>
                         ))}
                      </ul>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* CTA Band */}
      <section className="section-pad bg-surface border-t border-border relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
             <div className="signal-pulse-ring mx-auto" style={{ width: '40vw', height: '40vw' }} />
         </div>
         <div className="container relative z-10 text-center">
            <h2 className="display-lg text-white mb-6">Experience the platform for yourself.</h2>
            <p className="font-body text-muted mb-10 max-w-xl mx-auto">Get free platform access for 14 days when you purchase any Travio tracker. No contracts, no commitment.</p>
            <Link href="/shop" className="btn-signal h-14 px-12 text-base font-medium">Shop Trackers</Link>
         </div>
      </section>
    </div>
  );
}
