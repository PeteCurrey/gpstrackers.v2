import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RoiCalculator from '@/components/fleet/RoiCalculator';

export const metadata: Metadata = {
  title: 'Fleet Management | Your Fleet. Live. Under Control. | Travio',
  description: 'Advanced fleet tracking solutions for businesses of all sizes. Live maps, driver scoring, geofencing and reports that pay for themselves.',
};

export default function FleetPage() {
  return (
    <div className="bg-void min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="coord-grid absolute inset-0 opacity-20 pointer-events-none" />
        <div 
          className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-center p-20 hidden lg:flex"
          style={{ background: 'radial-gradient(circle at center, var(--color-signal-glow) 0%, transparent 80%)' }}
        >
             {/* Mock map graphic */}
             <div className="w-full h-full border border-signal/20 rounded-full relative">
                 <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-signal rounded-full shadow-[0_0_15px_var(--color-signal)]" />
                 <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-signal rounded-full shadow-[0_0_15px_var(--color-signal)]" />
                 <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-alert rounded-full shadow-[0_0_15px_var(--color-alert)]" />
                 <div className="absolute inset-20 border border-signal/10 rounded-full" />
                 <div className="absolute inset-40 border border-signal/5 rounded-full" />
             </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mono-label mb-4">// FLEET MANAGEMENT SOLUTIONS</div>
            <h1 className="display-xl text-white mb-6">
              Your Fleet. Live.<br />
              Under Control.
            </h1>
            <p className="font-body text-muted text-xl lg:text-2xl font-light mb-10 leading-relaxed max-w-2xl">
              Professional GPS tracking designed to scale. Reduce fuel costs, improve driver safety, and protect your assets with the UK's most advanced platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Link href="#calculator" className="btn-signal h-14 px-8 text-base font-medium">ROI Calculator</Link>
               <Link href="#contact" className="btn-ghost h-14 px-8 text-base font-medium">Get a Fleet Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="section-pad">
         <div className="container">
            <div className="flex flex-col gap-32">
                
                {/* Feature 1: Live Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="glass-card aspect-video relative overflow-hidden p-1 bg-signal/5 border-signal/20">
                             <div className="absolute inset-0 coord-grid opacity-10" />
                             <div className="relative w-full h-full flex items-center justify-center">
                                 {/* Mock Map UI */}
                                 <div className="w-4/5 h-4/5 glass-card bg-void/80 border-border p-4 flex flex-col gap-4">
                                     <div className="flex justify-between items-center border-b border-border pb-2">
                                         <span className="font-mono text-[10px] text-signal uppercase tracking-wider">LIVE FLEET VIEW</span>
                                         <span className="font-mono text-[10px] text-muted uppercase">8 ACTIVE VANS</span>
                                     </div>
                                     <div className="flex-1 flex gap-4">
                                         <div className="w-1/3 flex flex-col gap-2">
                                            {[1,2,3].map(i => (
                                                <div key={i} className="h-10 bg-surface-2 rounded border border-border/50" />
                                            ))}
                                         </div>
                                         <div className="flex-1 border border-signal/20 rounded relative bg-signal/10 transition-all">
                                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-signal rounded-full shadow-[0_0_10px_var(--color-signal)]" />
                                             <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-signal/20 rounded-full animate-ping" />
                                         </div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="mono-label mb-4">01 // LIVE MAP</div>
                        <h2 className="display-lg text-white mb-6">See every vehicle. Right now.</h2>
                        <p className="font-body text-muted text-lg leading-relaxed mb-8">
                            Our high-frequency 4G trackers report coordinates every 10 seconds. No lag, no latency. 
                            Know exactly where your drivers are, where they're heading, and when they'll arrive.
                        </p>
                        <ul className="flex flex-col gap-4">
                           {['10-second updates as standard', 'Multi-network global SIM coverage', 'Street-level accuracy', 'Live location sharing links'].map((item, i) => (
                               <li key={i} className="font-body text-white flex items-center gap-3">
                                   <div className="w-1.5 h-1.5 bg-signal rounded-full" /> {item}
                               </li>
                           ))}
                        </ul>
                    </div>
                </div>

                {/* Feature 2: Driver Scoring */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="mono-label mb-4">02 // DRIVER SCORING</div>
                        <h2 className="display-lg text-white mb-6">Actionable behaviour data.</h2>
                        <p className="font-body text-muted text-lg leading-relaxed mb-8">
                            Identify and coach out high-risk driving behaviour. Our platform automatically scores every journey 
                            on speeding, harsh braking, acceleration, and cornering intensity.
                        </p>
                        <div className="p-6 glass-card border-none bg-signal/5 border border-signal/10">
                            <div className="font-display text-4xl font-bold text-signal mb-1">22%</div>
                            <div className="font-mono text-xs text-muted uppercase tracking-widest">Average fuel reduction through coaching</div>
                        </div>
                    </div>
                    <div>
                        <div className="glass-card aspect-video bg-surface-2 border-border p-8 flex flex-col gap-6">
                            <div className="flex justify-between items-center mb-4">
                               <div className="font-mono text-[10px] text-muted tracking-widest uppercase">DRIVER PERFORMANACE INDEX</div>
                               <div className="font-mono text-[10px] text-success tracking-widest uppercase">ACTIVE</div>
                            </div>
                            <div className="flex-1 flex flex-col gap-8">
                                {[
                                    { name: 'Thompson, M.', score: 94, color: 'var(--color-success)' },
                                    { name: 'Jennings, S.', score: 88, color: 'var(--color-success)' },
                                    { name: 'Cartwright, J.', score: 72, color: 'var(--color-alert)' }
                                ].map((d, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="flex justify-between font-mono text-xs text-white">
                                            <span>{d.name}</span>
                                            <span>{d.score}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-void rounded-full overflow-hidden">
                                            <div className="h-full rounded-full" style={{ width: `${d.score}%`, backgroundColor: d.color }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Geofencing */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                         <div className="glass-card aspect-video border-border overflow-hidden relative">
                             <div className="absolute inset-0 bg-void/50" />
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 coord-grid" />
                             <svg width="100%" height="100%" style={{ position: 'relative', zIndex: 1 }}>
                                 <path d="M 100 80 L 300 100 L 250 220 L 80 180 Z" 
                                       fill="var(--color-signal-glow)" 
                                       stroke="var(--color-signal)" 
                                       strokeWidth="2" 
                                       strokeDasharray="8 4" />
                                 <circle cx="210" cy="145" r="5" fill="var(--color-white)" />
                             </svg>
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                 <div className="bg-alert/90 text-void font-mono text-[10px] font-bold px-4 py-2 rounded-full shadow-2xl">
                                     GEOFENCE BREACH ALERT
                                 </div>
                             </div>
                         </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="mono-label mb-4">03 // GEOFENCING</div>
                        <h2 className="display-lg text-white mb-6">Boundaries that alert you.</h2>
                        <p className="font-body text-muted text-lg leading-relaxed mb-8">
                            Draw infinite zones on the map. Get push, SMS, or email notifications the second a vehicle enters 
                            or leaves a designated area. Perfect for site monitoring and unauthorised use detection.
                        </p>
                        <div className="flex gap-4">
                            <div className="p-4 glass-card border-none bg-surface-2 text-center flex-1">
                                <div className="font-mono text-[10px] text-muted mb-1">PUSH</div>
                                <div className="font-display font-bold text-white">INSTANT</div>
                            </div>
                            <div className="p-4 glass-card border-none bg-surface-2 text-center flex-1">
                                <div className="font-mono text-[10px] text-muted mb-1">SMS</div>
                                <div className="font-display font-bold text-white">BACKUP</div>
                            </div>
                            <div className="p-4 glass-card border-none bg-surface-2 text-center flex-1">
                                <div className="font-mono text-[10px] text-muted mb-1">EMAIL</div>
                                <div className="font-display font-bold text-white">REPORTS</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="section-pad bg-void">
         < RoiCalculator />
      </section>

      {/* Fleet Lead Form */}
      <section id="contact" className="section-pad">
         <div className="container">
            <div className="max-w-4xl mx-auto glass-card p-8 lg:p-16 border-border">
                <div className="text-center mb-12">
                   <div className="mono-label mb-2">// FLEET CONSULTATION</div>
                   <h2 className="display-lg text-white">Get a fleet quote.</h2>
                   <p className="font-body text-muted mt-4">Typical response time: Under 2 hours (Mon–Fri).</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-muted uppercase tracking-widest ml-1">Full Name</label>
                        <input type="text" className="bg-surface border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors" placeholder="e.g. John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-muted uppercase tracking-widest ml-1">Company Name</label>
                        <input type="text" className="bg-surface border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors" placeholder="e.g. Travio Logistics" />
                    </div>
                    <div className="flex flex-col gap-2 text-white">
                        <label className="font-mono text-[10px] text-muted uppercase tracking-widest ml-1">Email Address</label>
                        <input type="email" className="bg-surface border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors" placeholder="j.doe@company.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-muted uppercase tracking-widest ml-1">Phone Number</label>
                        <input type="tel" className="bg-surface border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors" placeholder="0114 123 4567" />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="font-mono text-[10px] text-muted uppercase tracking-widest ml-1">Number of vehicles</label>
                        <select className="bg-surface border border-border rounded-lg h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors appearance-none">
                            <option>1-5 Vehicles</option>
                            <option>6-25 Vehicles</option>
                            <option>26-100 Vehicles</option>
                            <option>100+ Vehicles</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="font-mono text-[10px] text-muted uppercase tracking-widest ml-1">How can we help?</label>
                        <textarea className="bg-surface border border-border rounded-lg p-4 font-body text-white focus:border-signal outline-none transition-colors min-h-[120px]" placeholder="Tell us about your fleet requirements..."></textarea>
                    </div>
                    <div className="md:col-span-2 mt-4">
                        <button type="submit" className="btn-signal w-full h-14 text-base font-medium">Submit Fleet Request →</button>
                    </div>
                </form>
            </div>
         </div>
      </section>
    </div>
  );
}
