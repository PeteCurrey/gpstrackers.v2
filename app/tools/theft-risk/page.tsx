'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

interface RiskResult {
  riskLevel: 'HIGH' | 'MEDIUM' | 'LOW';
  riskScore: number;
  riskHeadline: string;
  keyFacts: string[];
  recommendedTracker: string;
  recommendedReason: string;
  estimatedInsuranceSaving: string;
  urgencyNote: string;
}

export default function TheftRiskPage() {
  const [form, setForm] = useState({
    make: '',
    model: '',
    postcode: '',
    value: 'Under £10k',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RiskResult | null>(null);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const prompt = `Vehicle: ${form.make} ${form.model}. Postcode area: ${form.postcode.substring(0, 3)}. Value: ${form.value}. Assess theft risk.`;
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: `You are a vehicle theft risk analyst for Travio GPS Trackers. 
You have knowledge of UK vehicle theft statistics. 
Given a vehicle make, model, postcode area, and approximate value, 
provide a concise theft risk assessment in JSON format only.

Respond ONLY with this JSON structure (no markdown, no preamble):
{
  "riskLevel": "HIGH" | "MEDIUM" | "LOW",
  "riskScore": number [1-10],
  "riskHeadline": "Short punchy sentence",
  "keyFacts": ["fact1", "fact2", "fact3"],
  "recommendedTracker": "S7" | "S5" | "FS100" | "AT1",
  "recommendedReason": "1 sentence",
  "estimatedInsuranceSaving": "e.g. £80–£200/year",
  "urgencyNote": "1 sentence"
}`,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      const data = await response.json();
      const riskData = JSON.parse(data.content[0].text);
      setResult(riskData);
    } catch (err) {
      console.error('Theft Risk Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !result) return;
    
    try {
        await supabase.from('theft_risk_leads').insert([
            { email, vehicle: `${form.make} ${form.model}`, risk_score: result.riskScore, ...result }
        ]);
        setEmailSubmitted(true);
    } catch (err) {
        console.error('Lead Capture Error:', err);
    }
  };

  const getTrackerLink = (sku: string) => {
    const map: Record<string, string> = {
      'S7': 'travio-s7',
      'S5': 'travio-s5',
      'FS100': 'travio-fs100',
      'AT1': 'travio-at1'
    };
    return `/shop/${map[sku] || 'travio-fs100'}`;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 overflow-hidden relative">
      <div className="container relative z-10">
        
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mono-label mb-6 text-signal uppercase tracking-[0.2em] animate-fade-in">// THEFT RISK CHECKER</div>
          <h1 className="display-xl text-white mb-6 uppercase">Is your vehicle at risk?</h1>
          <p className="font-body text-xl text-muted max-w-2xl mx-auto">
            Enter your vehicle details. We'll assess your theft risk and tell you what protection you need.
          </p>
        </div>

        {!result ? (
          <div className="max-w-xl mx-auto animate-slide-up">
            <div className="glass-card border-border bg-surface-2 p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-muted uppercase tracking-widest">MAKE</label>
                        <input 
                            required
                            placeholder="e.g. Ford"
                            className="bg-void border border-border h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors"
                            value={form.make}
                            onChange={(e) => setForm({...form, make: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-muted uppercase tracking-widest">MODEL</label>
                        <input 
                            required
                            placeholder="e.g. Transit"
                            className="bg-void border border-border h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors"
                            value={form.model}
                            onChange={(e) => setForm({...form, model: e.target.value})}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-muted uppercase tracking-widest">POSTCODE (FIRST 3)</label>
                    <input 
                        required
                        placeholder="e.g. S10"
                        maxLength={4}
                        className="bg-void border border-border h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors"
                        value={form.postcode}
                        onChange={(e) => setForm({...form, postcode: e.target.value})}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-muted uppercase tracking-widest">VEHICLE VALUE</label>
                    <select 
                        className="bg-void border border-border h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors appearance-none"
                        value={form.value}
                        onChange={(e) => setForm({...form, value: e.target.value})}
                    >
                        <option>Under £10k</option>
                        <option>£10–25k</option>
                        <option>£25–50k</option>
                        <option>£50k+</option>
                    </select>
                </div>

                <button 
                    disabled={loading}
                    className="btn-signal w-full h-14 mt-4 text-sm font-mono uppercase tracking-[0.2em] disabled:opacity-50"
                >
                    {loading ? 'Analyzing Risk...' : 'Check My Risk →'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Risk Indicator */}
            <div className="text-center mb-16">
                <div className="inline-flex flex-col items-center gap-6">
                    <div className={`relative w-48 h-48 rounded-full border-4 flex items-center justify-center transition-colors duration-1000 ${
                        result.riskLevel === 'HIGH' ? 'border-amber-500 animate-[pulse_2s_infinite]' : 
                        result.riskLevel === 'MEDIUM' ? 'border-signal' : 'border-success'
                    }`}>
                        <div className="text-center">
                            <div className="font-display text-6xl font-black text-white">{result.riskScore}/10</div>
                            <div className={`font-mono text-[10px] uppercase tracking-[0.3em] font-bold ${
                                result.riskLevel === 'HIGH' ? 'text-amber-500' : 
                                result.riskLevel === 'MEDIUM' ? 'text-signal' : 'text-success'
                            }`}>RISK LEVEL</div>
                        </div>
                    </div>
                    <h2 className="display-md text-white max-w-xl">{result.riskHeadline}</h2>
                </div>
            </div>

            {/* Facts Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {result.keyFacts.map((fact, i) => (
                    <div key={i} className="glass-card border-border bg-surface-2 p-6">
                        <div className="mono-label text-signal mb-3">// FACT 0{i+1}</div>
                        <p className="font-body text-sm text-white leading-relaxed">{fact}</p>
                    </div>
                ))}
            </div>

            {/* Recommendation & Savings */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                <div className="glass-card border-signal/30 bg-void p-8 lg:p-10 border-t-4 border-t-signal">
                    <div className="mono-label text-signal mb-4 uppercase tracking-[0.2em] opacity-60">RECOMMENDED PROTECTION</div>
                    <h3 className="display-sm text-white mb-4">Travio {result.recommendedTracker}</h3>
                    <p className="font-body text-muted mb-8">{result.recommendedReason}</p>
                    <Link href={getTrackerLink(result.recommendedTracker)} className="btn-signal h-14 w-full">Get Protected →</Link>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="glass-card border-signal/20 bg-signal/5 p-8 text-center ring-1 ring-signal/30">
                        <div className="mono-label text-signal mb-2 uppercase tracking-[0.2em]">ESTIMATED SAVING</div>
                        <div className="font-display text-4xl font-bold text-white mb-2">{result.estimatedInsuranceSaving}</div>
                        <p className="font-body text-xs text-muted">Annual insurance discount estimate</p>
                    </div>
                    <div className="p-6 bg-surface-2/30 italic text-muted text-sm border-l-2 border-signal">
                        "{result.urgencyNote}"
                    </div>
                </div>
            </div>

            {/* Lead Capture */}
            <div className="max-w-2xl mx-auto glass-card border-border bg-surface-2 p-10 text-center">
                {!emailSubmitted ? (
                    <>
                        <h4 className="font-display text-2xl font-bold text-white mb-2">Get Your Full Risk Report</h4>
                        <p className="font-body text-muted mb-8 text-sm">We'll send you a detailed breakdown of local theft statistics and a tailored security audit for your ${form.make}.</p>
                        <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 bg-void border border-border h-12 px-4 font-body text-white focus:border-signal outline-none transition-colors"
                            />
                            <button className="btn-signal h-12 px-8 font-mono text-[10px] uppercase tracking-widest">Send Report</button>
                        </form>
                    </>
                ) : (
                    <div className="py-4">
                        <div className="text-success font-mono text-sm uppercase tracking-widest mb-2">✓ Report Sent Successfully</div>
                        <p className="font-body text-muted text-sm">Check your inbox. Your full risk assessment is on its way.</p>
                    </div>
                )}
            </div>
            
            <div className="text-center mt-12">
                <button onClick={() => setResult(null)} className="text-muted hover:text-white transition-colors font-mono text-[10px] uppercase tracking-widest">← New Risk Assessment</button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(245, 158, 11, 0); }
          100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
        }
      `}</style>
    </div>
  );
}
