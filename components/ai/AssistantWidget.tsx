'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi — I can answer any question about Travio trackers. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

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
          system: `You are Travio's friendly GPS tracking expert. Answer questions about:

PRODUCTS:
- FS100: £45, hardwired, 10s updates, £59/year sub, fleet/vehicle
- FS003: £105, OBD plug-in, 15s updates, £59/year sub
- AT1: £105, magnetic, 3-year battery, £30/year sub, assets
- LLB: £150, magnetic, 40-day battery, £30/year sub
- S7: £189 inc. installation, Thatcham S7, £59/year, insurance approved
- S5: £349 inc. installation, Thatcham S5 + ADR fobs, £59/year  
- S5+: £549, S5 with remote immobilisation
- Caravan Shield CT1: £105–£244, 4-year battery
- PT1: £129, plant/machinery, IP67, 90-day battery, £49/year

PLATFORM: Travio Live — 90-day history, geofencing, driver scoring, iOS/Android app

KEY POLICIES: Free 14-day trial, free next day delivery, no contracts, cancel anytime

Be concise, helpful, and always suggest a specific product when relevant.
If asked about fleet pricing over 25 vehicles, direct to /fleet for a quote.
Never make up specifications. If unsure, say "Let me get that confirmed for you" 
and suggest they call 03300 600 499.

CONTEXT: The user is currently browsing the Travio website.`,
          messages: [...messages, { role: 'user', content: userMsg }],
        }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.content[0].text }]);
    } catch (err) {
      console.error('Assistant Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button 
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 glass-card border-signal/50 bg-void/80 h-14 pl-4 pr-6 group shadow-2xl hover:border-signal transition-all animate-[float_3s_ease-in-out_infinite]"
        >
            <div className="w-8 h-8 bg-signal rounded-full flex items-center justify-center text-white relative">
                <span className="absolute inset-0 bg-signal rounded-full animate-ping opacity-40" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            </div>
            <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">Ask Travio</span>
        </button>
      </div>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[400px] h-[550px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)] glass-card border-border bg-void shadow-2xl z-[9999] flex flex-col overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="p-4 border-b border-border bg-surface-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] text-white uppercase tracking-widest font-bold">Travio AI Assistant</span>
                </div>
                <button onClick={() => setOpen(false)} className="text-muted hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-[85%] p-3 rounded-lg text-sm font-body leading-relaxed ${
                            msg.role === 'assistant' 
                                ? 'bg-surface-2 text-white border border-border rounded-tl-none' 
                                : 'bg-signal text-white rounded-tr-none'
                        }`}>
                            {msg.role === 'assistant' && (
                                <div className="font-mono text-[9px] text-signal/60 mb-1 uppercase tracking-widest animate-pulse">// TRAVIO AI</div>
                            )}
                            <div className="animate-fade-in">
                                {msg.content}
                            </div>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-void border border-border text-signal p-4 rounded-lg rounded-tl-none font-mono text-[10px] flex items-center gap-2">
                            <span className="inline-block w-1 h-1 bg-signal rounded-full animate-pulse" />
                            <span className="inline-block w-1 h-1 bg-signal rounded-full animate-pulse [animation-delay:0.2s]" />
                            <span className="inline-block w-1 h-1 bg-signal rounded-full animate-pulse [animation-delay:0.4s]" />
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-border bg-void">
                <input 
                    className="w-full bg-surface-2 border border-border h-11 px-4 text-white font-body text-sm outline-none focus:border-signal transition-colors rounded-sm"
                    placeholder="Ask about products, pricing..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={loading}
                    autoFocus
                />
            </form>
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
}
