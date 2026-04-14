import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Case Studies | Real World Recovery & ROI | Travio',
  description: 'See how Travio GPS trackers have helped UK businesses recover stolen vehicles, reduce fuel costs, and improve fleet efficiency.',
};

const caseStudies = [
  {
    company: 'MT Electrical Services',
    sector: 'Trade Services',
    title: 'Van recovered within 4 hours of theft.',
    slug: 'mt-electrical-recovery',
    result: '100% Asset Recovery',
    tag: 'RECOVERY',
  },
  {
    company: 'East Midlands Logistics',
    sector: 'Transport',
    title: '18% fuel reduction across 24-vehicle fleet.',
    slug: 'east-midlands-logistics-roi',
    result: '£22k Annual Saving',
    tag: 'ROI',
  },
  {
    company: 'Peak Equestrian Centre',
    sector: 'Argiculture',
    title: 'Horse trailer theft prevented by geofence alert.',
    slug: 'peak-equestrian-prevention',
    result: 'Theft Prevented',
    tag: 'PREVENTION',
  },
  {
      company: 'JCT600 Logistics',
      sector: 'Automotive',
      title: 'Real-time visibility for high-value vehicle movements.',
      slug: 'jct600-visibility',
      result: 'Full Fleet Transparency',
      tag: 'VISIBILITY',
  },
  {
      company: 'Build-It Construction',
      sector: 'Construction',
      title: 'Plant machinery tracking across 12 active sites.',
      slug: 'build-it-construction-tracking',
      result: 'Zero Equipment Loss',
      tag: 'ASSET PROTECTION',
  },
  {
      company: 'Sheffield Council',
      sector: 'Public Sector',
      title: 'Optimised route planning for maintenance fleets.',
      slug: 'sheffield-council-optimisation',
      result: '12% Efficiency Gain',
      tag: 'OPTIMISATION',
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-void min-h-screen pt-40 pb-20">
      <div className="container">
        
        <div className="text-center mb-20">
            <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">// BUSINESS CASE STUDIES</div>
            <h1 className="display-xl text-white mb-6">Real Results.<br />Real Recoveries.</h1>
            <p className="font-body text-muted text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              We help UK businesses protect their assets and optimize their operations. These are their stories.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                    <div className="glass-card p-8 flex flex-col h-full hover:border-signal/50 transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-mono text-[9px] text-signal border border-signal/30 px-2 py-0.5 rounded uppercase tracking-widest">{study.tag}</span>
                            <span className="font-mono text-[9px] text-muted uppercase tracking-wider">{study.sector}</span>
                        </div>
                        
                        <div className="flex-1">
                            <h3 className="display-md text-white group-hover:text-signal transition-colors mb-4">{study.title}</h3>
                            <div className="font-body text-muted text-sm mb-6">{study.company}</div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border flex justify-between items-center text-white">
                            <div className="flex flex-col">
                                <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">KEY RESULT</span>
                                <span className="font-display text-lg font-bold">{study.result}</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-signal group-hover:border-signal transition-all">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-void"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        <div className="mt-20 p-12 glass-card bg-signal text-void flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
                <h3 className="display-lg font-bold mb-2">Want to see these results in your business?</h3>
                <p className="font-body font-medium opacity-80 text-lg">Speak with our fleet specialists today for a bespoke consultation.</p>
            </div>
            <Link href="/fleet#contact" className="bg-void text-white h-14 px-10 rounded-lg flex items-center font-body font-medium hover:bg-void/90 transition-colors">Get Started →</Link>
        </div>

      </div>
    </div>
  );
}
