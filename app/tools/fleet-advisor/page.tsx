'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export default function FleetAdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Tell me about your fleet. How many vehicles are you looking to track?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'chat' | 'lead' | 'finished'>('chat');
  const [leadForm, setLeadForm] = useState({ name: '', company: '', email: '' });
  const [recommendation, setRecommendation] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          max_tokens: 500,
          system: `You are a friendly, knowledgeable GPS fleet tracking advisor for Travio.
Your job is to ask the right questions and then provide a clear, 
costed fleet tracking recommendation.

Ask about: number of vehicles, vehicle types, main goals 
(theft recovery / driver behaviour / live visibility / compliance),
whether they currently have any tracking, company name and sector.

After gathering enough information (usually 4-5 exchanges), 
provide a recommendation using these Travio products:
- Travio FS100: £45/device, £59/year subscription (hardwired, fleet standard)
- Travio FS003: £105/device, £59/year (OBD plug-in)
- Fleet pricing: 6-25 vehicles = 10% discount, 26+ = contact for quote

Format your final recommendation exactly as:
RECOMMENDED SETUP: [description]
HARDWARE COST: £[X] (X devices × £[price])
ANNUAL SUBSCRIPTION: £[X] (£[per device]/year × [devices])
FIRST YEAR TOTAL: £[X]
ESTIMATED ROI: [brief calculation based on their stated goals]

Then ask: "Shall I email this recommendation to you so you can share it with your team?"
If they agree, DO NOT ask for their details here. Instead, end your response with [END_OF_CHAT].`,
          messages: [...messages, { role: 'user', content: userMsg }],
        }),
      });

      const data = await response.json();
      const assistantMsg = data.content[0].text;

      if (assistantMsg.includes('[END_OF_CHAT]')) {
        setRecommendation(assistantMsg.replace('[END_OF_CHAT]', '').trim());
        setMessages(prev => [...prev, { role: 'assistant', content: assistantMsg.replace('[END_OF_CHAT]', '').trim() }]);
        setStep('lead');
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: assistantMsg }]);
      }
    } catch (err) {
      console.error('Fleet Advisor Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await supabase.from('fleet_advisor_leads').insert([
            { ...leadForm, recommendation }
        ]);
        setStep('finished');

        // Fire GA4 Event as requested
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'fleet_advisor_lead_captured', {
                'vehicle_count': messages.find(m => m.role === 'user')?.content // Simplistic extraction
            });
        }

    } catch (err) {
        console.error('Lead submission error:', err);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-void relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-signal/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="mono-label mb-4 text-signal uppercase tracking-[0.2em] animate-fade-in">// AI FLEET ADVISOR</div>
            <h1 className="display-lg text-white mb-4 uppercase">Get your fleet recommendation in 60 seconds.</h1>
            <p className="font-body text-lg text-muted">Powered by AI. Tell us about your fleet and we’ll tell you exactly what you need.</p>
        </div>

        <div className="max-w-4xl mx-auto h-[600px] flex flex-col">
            {/* Chat Area */}
            <div className="flex-1 glass-card border-border bg-surface-2/30 flex flex-col overflow-hidden">
                
                {step === 'chat' || step === 'lead' ? (
                    <>
                        <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end animate-slide-up'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-lg font-body text-sm leading-relaxed ${
                                        msg.role === 'assistant' 
                                            ? 'bg-void border border-border text-white rounded-tl-none' 
                                            : 'bg-signal border border-signal text-white rounded-tr-none'
                                    }`}>
                                        {msg.role === 'assistant' && (
                                            <div className="font-mono text-[9px] text-signal mb-1 uppercase tracking-widest">// TRAVIO AI</div>
                                        )}
                                        {msg.content.split('\n').map((line, j) => (
                                            <p key={j} className={line.startsWith('RECOMMENDED') || line.startsWith('HARDWARE') ? 'font-bold text-signal mt-2' : ''}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-void border border-border text-signal p-4 rounded-lg rounded-tl-none font-mono text-[10px] animate-pulse">
                                        THINKING...
                                    </div>
                                </div>
                            )}
                        </div>

                        {step === 'chat' ? (
                            <form onSubmit={handleSend} className="p-4 bg-void border-t border-border flex gap-2">
                                <input 
                                    className="flex-1 bg-surface-2 border border-border h-12 px-4 font-body text-white outline-none focus:border-signal transition-colors rounded-sm"
                                    placeholder="Type your reply..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    disabled={loading}
                                />
                                <button 
                                    disabled={loading}
                                    className="btn-signal h-12 px-6 font-mono text-xs uppercase tracking-widest disabled:opacity-50"
                                >
                                    Send
                                </button>
                            </form>
                        ) : (
                            <div className="p-8 bg-signal/10 border-t border-signal/30 animate-slide-up">
                                <h3 className="font-display text-lg font-bold text-white mb-4">Complete your fleet profile to receive the full quote</h3>
                                <form onSubmit={handleLeadSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <input 
                                        required
                                        placeholder="Full Name"
                                        className="bg-void border border-border h-11 px-4 text-white font-body text-sm outline-none focus:border-signal"
                                        value={leadForm.name}
                                        onChange={(e) => setLeadForm({...leadForm, name: e.target.value})}
                                    />
                                    <input 
                                        required
                                        placeholder="Company Name"
                                        className="bg-void border border-border h-11 px-4 text-white font-body text-sm outline-none focus:border-signal"
                                        value={leadForm.company}
                                        onChange={(e) => setLeadForm({...leadForm, company: e.target.value})}
                                    />
                                    <input 
                                        required
                                        type="email"
                                        placeholder="Work Email"
                                        className="bg-void border border-border h-11 px-4 text-white font-body text-sm outline-none focus:border-signal"
                                        value={leadForm.email}
                                        onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
                                    />
                                    <button className="btn-signal h-11 md:col-span-3 font-mono text-xs uppercase tracking-widest">
                                        Send Full Recommendation →
                                    </button>
                                </form>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center animate-fade-in">
                        <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-6 border border-success/30">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h2 className="display-sm text-white mb-4">Recommendation Sent.</h2>
                        <p className="font-body text-muted max-w-sm mb-8">Your fleet advisor report is on its way to your inbox. One of our fleet specialists will also review your requirements and reach out within 24 hours.</p>
                        <div className="flex gap-4">
                            <Link href="/fleet" className="btn-signal px-8 h-12">Return to Fleet Overview</Link>
                            <button onClick={() => { setStep('chat'); setMessages([{role:'assistant', content:'Tell me about your fleet. How many vehicles are you looking to track?'}]); setLeadForm({name:'', company:'', email:''}); }} className="btn-ghost px-8 h-12">New Consultation</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
      </div>
    </div>
  );
}
