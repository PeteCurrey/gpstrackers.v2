import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Travio Blog | GPS Tracking & Fleet Intelligence',
  description: 'Expert advice on vehicle security, fleet optimization, and the latest in GPS tracking technology. Read our guides and industry news.',
};

import { blogPosts } from '@/lib/data/blog';

export default function BlogPage() {
  return (
    <div className="bg-void min-h-screen pt-40 pb-20">
      <div className="container">
        
        <div className="text-center mb-20">
            <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em]">// INDUSTRY INSIGHTS</div>
            <h1 className="display-xl text-white mb-6">Expertise in Motion.</h1>
            <p className="font-body text-muted text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Guides, case studies, and news from the front line of GPS tracking and fleet intelligence.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full flex flex-col">
                    <div className="glass-card aspect-video relative overflow-hidden mb-6 group-hover:border-signal/50 transition-all">
                         <div className="absolute inset-0 bg-surface-2 opacity-50" />
                         <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-muted tracking-widest uppercase opacity-20 group-hover:opacity-40 transition-opacity">
                             {post.category} IMAGE
                         </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col px-1">
                        <div className="flex items-center gap-4 mb-3">
                             <span className="font-mono text-[9px] text-signal uppercase tracking-widest">{post.category}</span>
                             <span className="font-mono text-[9px] text-muted uppercase tracking-wider">{post.readTime}</span>
                        </div>
                        
                        <h3 className="font-display text-2xl text-white group-hover:text-signal transition-colors mb-4 line-clamp-2 uppercase tracking-tight">{post.title}</h3>
                        <p className="font-body text-muted text-sm leading-relaxed line-clamp-3 mb-6 opacity-70">{post.excerpt}</p>
                        
                        <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                            <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{post.date}</span>
                            <span className="text-white group-hover:text-signal transition-colors flex items-center gap-2 font-body text-xs font-medium">
                                Read Article <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        <div className="mt-24 text-center">
            <button className="btn-ghost h-12 px-10 text-sm font-medium">Load More Articles</button>
        </div>

      </div>
    </div>
  );
}
