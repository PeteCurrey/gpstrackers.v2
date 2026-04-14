import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const caseStudies: Record<string, {
    company: string;
    sector: string;
    title: string;
    slug: string;
    tag: string;
    metrics: Array<{ label: string; value: string }>;
    problem: string;
    solution: string;
    result: string;
}> = {
    'mt-electrical-recovery': {
        company: 'MT Electrical Services',
        sector: 'Trade Services',
        title: 'Van recovered within 4 hours of theft.',
        slug: 'mt-electrical-recovery',
        tag: 'RECOVERY',
        metrics: [
            { label: 'RECOVERY TIME', value: '3h 42m' },
            { label: 'ASSET VALUE', value: '£32,000' },
            { label: 'DEVICE USED', value: 'FS100' }
        ],
        problem: 'MT Electrical is a Sheffield-based contractor with a fleet of 5 highly loaded vans. At 2:15 AM on a Wednesday, thieves bypassed the factory immobilizer on their primary lead vehicle and drove it off the driveway. The van contained over £12,000 worth of specialist testing equipment and tools, representing a significant portion of the company’s revenue-generating assets.',
        solution: 'Each of MT Electrical’s vehicles had been fitted with a Travio FS100 hardwired tracker six months prior. Within minutes of the theft, the company owner received a push notification from Travio Live indicating a geofence breach. He immediately opened the app, verified the live location of the van moving toward Rotherham, and contacted the South Yorkshire Police.',
        result: 'Using the Travio Live "Share Live Location" link, the owner provided the police with a real-time tracking URL. Patrol cars were able to intercept the vehicle at a set of traffic lights in Bramley. The tools and equipment were untouched. The vehicle was returned to the owner by sunrise, allowing his team to start their scheduled work day without delay or loss of income.'
    },
    'east-midlands-logistics-roi': {
        company: 'East Midlands Logistics Ltd',
        sector: 'Transport',
        title: '18% fuel reduction across 24-vehicle fleet.',
        slug: 'east-midlands-logistics-roi',
        tag: 'ROI',
        metrics: [
            { label: 'FUEL SAVING', value: '18.4%' },
            { label: 'IDLE REDUCTION', value: '31%' },
            { label: 'MONTHLY ROI', value: '340%' }
        ],
        problem: 'Operating a fleet of 24 large transit vans across the Midlands, EML was facing spiralling fuel costs and an increase in insurance premiums due to minor at-fault accidents. They lacked visibility into driver behaviour and had no way to identify who was most efficient or where wastage was occurring.',
        solution: 'Travio FS100 trackers were installed across the entire fleet. We implemented weekly "Driver League Tables" based on the platform\'s scoring for speeding, harsh braking, and idling. The company introduced a small monthly bonus for the top 3 scoring drivers each month.',
        result: 'Within 90 days, the fleet average driver score increased from 62% to 89%. Fuel spend dropped by 18.4% (£1,800/month saving). Idling time was reduced by 31%, and idling-related maintenance issues were cut in half. The fuel savings alone paid for the entire Travio subscription within the first 10 days of each month.'
    }
};

export async function generateStaticParams() {
    return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies[slug];
    if (!study) return {};
    return {
        title: `${study.company} | ${study.tag} Case Study | Travio`,
        description: study.title,
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = caseStudies[slug];
    if (!study) notFound();

    return (
        <div className="bg-void min-h-screen pt-40 pb-20">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    
                    <div className="mb-12">
                        <Link href="/case-studies" className="font-mono text-[10px] text-muted hover:text-signal transition-colors flex items-center gap-2 mb-8 uppercase tracking-widest">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                            Back to Case Studies
                        </Link>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <span className="mono-label text-signal uppercase tracking-[0.2em]">{study.tag}</span>
                            <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{study.sector}</span>
                        </div>
                        
                        <h1 className="display-xl text-white mb-6 leading-tight">{study.title}</h1>
                        <div className="font-display text-2xl text-muted font-light">{study.company}</div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                        {study.metrics.map((metric, i) => (
                            <div key={i} className="glass-card p-8 border-border bg-white/[0.02]">
                                <div className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2">{metric.label}</div>
                                <div className="font-display text-3xl font-bold text-white">{metric.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Content Sections */}
                    <div className="flex flex-col gap-16">
                        <div>
                            <h2 className="font-mono text-xs text-signal uppercase tracking-[0.2em] mb-4">THE CHALLENGE</h2>
                            <p className="font-body text-muted text-lg leading-relaxed">{study.problem}</p>
                        </div>
                        
                        <div>
                            <h2 className="font-mono text-xs text-signal uppercase tracking-[0.2em] mb-4">THE SOLUTION</h2>
                            <p className="font-body text-muted text-lg leading-relaxed">{study.solution}</p>
                        </div>

                        <div className="p-12 glass-card bg-surface-2 border-l-4 border-l-signal">
                            <h2 className="font-mono text-xs text-signal uppercase tracking-[0.2em] mb-6">THE RESULT</h2>
                            <p className="font-body text-white text-xl font-light leading-relaxed">{study.result}</p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-24 pt-16 border-t border-border flex flex-col items-center text-center">
                        <h3 className="display-md text-white mb-6">Experience these results in your fleet.</h3>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/fleet" className="btn-signal h-14 px-10 text-base font-medium">Fleet Solutions</Link>
                            <Link href="/shop" className="btn-ghost h-14 px-10 text-base font-medium">Shop Trackers</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
