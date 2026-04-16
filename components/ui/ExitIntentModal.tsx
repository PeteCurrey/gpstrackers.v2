'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
        localStorage.setItem('travio_exit_intent_shown', 'true');
      }
    };

    const isShown = localStorage.getItem('travio_exit_intent_shown');
    if (!isShown) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await supabase.from('exit_intent_leads').insert([{ email }]);
        setSubmitted(true);
    } catch (err) {
        console.error('Lead Error:', err);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-void/90 backdrop-blur-md animate-fade-in">
      <div className="max-w-2xl w-full glass-card border-signal/30 bg-void p-8 lg:p-16 relative shadow-[0_0_100px_rgba(14,165,233,0.2)]">
          <button 
            onClick={() => setShow(false)}
            className="absolute top-6 right-6 text-muted hover:text-white transition-colors"
          >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>

          {!submitted ? (
            <div className="text-center">
                <div className="mono-label text-signal mb-6 uppercase tracking-[0.2em] font-bold animate-slide-up">// WAIT! BEFORE YOU GO...</div>
                <h2 className="display-lg text-white mb-6 uppercase leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    DON'T LEAVE YOUR VEHICLE <span className="text-alert">UNPROTECTED</span>.
                </h2>
                <p className="font-body text-lg text-muted mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Get the <span className="text-white font-bold">2024 UK Vehicle Theft Report</span> + a 5% discount code for your first tracker.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <input 
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="flex-1 bg-surface-2 border border-border h-14 px-6 text-white font-body outline-none focus:border-signal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="btn-signal h-14 px-10 uppercase font-mono text-xs tracking-widest whitespace-nowrap">
                        Send My Discount
                    </button>
                </form>
                <p className="font-mono text-[9px] text-muted mt-6 uppercase tracking-widest opacity-50">
                    JOIN 12,000+ VEHICLE OWNERS GETTING OUR WEEKLY SECURITY UPDATES.
                </p>
            </div>
          ) : (
            <div className="text-center py-10 animate-fade-in">
                <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-8 border border-success/30">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h3 className="display-sm text-white mb-4">CHECK YOUR INBOX.</h3>
                <p className="font-body text-muted mb-8">Your report and discount code 'TRAVIO5' are on their way. We've also included a free security audit guide for your postcode area.</p>
                <button onClick={() => setShow(false)} className="btn-ghost px-10 h-12 uppercase font-mono text-xs tracking-widest">Close</button>
            </div>
          )}
      </div>
    </div>
  );
}
