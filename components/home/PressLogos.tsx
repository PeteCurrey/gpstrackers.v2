'use client';

export default function PressLogos() {
  const logos = [
    { name: 'BBC', label: 'BBC' },
    { name: 'Telegraph', label: 'The Telegraph' },
    { name: 'FleetNews', label: 'Fleet News' },
    { name: 'ConstEnq', label: 'Construction Enquirer' },
    { name: 'LRO', label: 'Land Rover Owner' },
  ];

  return (
    <section className="py-20 border-t border-border bg-void/50">
      <div className="container">
        <div className="text-center mb-10">
          <span className="font-mono text-[9px] text-muted uppercase tracking-[0.3em] font-bold">AS FEATURED IN & TRUSTED BY</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              <span className="font-display text-2xl md:text-3xl font-black text-white tracking-tighter hover:text-signal transition-colors cursor-default">
                {logo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
