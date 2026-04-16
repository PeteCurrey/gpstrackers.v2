'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function TradePortalPage() {
  const [form, setForm] = useState({
    businessName: '',
    businessType: 'Auto Electrician',
    deviceCount: '5-24',
    contactName: '',
    email: '',
    phone: '',
    source: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
        await supabase.from('trade_applications').insert([form]);
        setSubmitted(true);
    } catch (err) {
        console.error('Application Error:', err);
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <div className="bg-void min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-40 pb-24 border-b border-border">
          <div className="container text-center">
              <div className="mono-label text-signal mb-6 uppercase tracking-[0.2em]">
                  // TRADE & INSTALLER PROGRAMME
              </div>
              <h1 className="display-xl text-white mb-8 uppercase leading-none max-w-5xl mx-auto">
                  BECOME A <span className="text-signal">TRAVIO</span> INSTALLER.
              </h1>
              <p className="font-body text-xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
                  Wholesale pricing, installation support, and a recurring commission structure for qualified auto electricians, dealers, and fleet consultants.
              </p>
          </div>
      </section>

      {/* TIERS SECTION */}
      <section className="py-24">
          <div className="container">
              <div className="grid lg:grid-cols-3 gap-8">
                  {[
                      { 
                        name: 'TRADE PARTNER', 
                        discount: '10% off RRP', 
                        features: ['Buy for resale', 'Marketing materials', 'Email support'],
                        min: 'Minimum: 5 devices per order',
                        cta: 'Apply Now →'
                      },
                      { 
                        name: 'APPROVED INSTALLER', 
                        discount: '25% off RRP', 
                        recommended: true,
                        features: ['Certified installation', 'Co-branded materials', 'Priority phone support'],
                        min: 'Minimum: 25/year volume',
                        cta: 'Apply Now →'
                      },
                      { 
                        name: 'PLATINUM PARTNER', 
                        discount: '35% off RRP + volume', 
                        features: ['Dedicated account mgr', 'White-label platform', 'SLA support'],
                        min: 'Minimum: 100/year volume',
                        cta: 'Contact Us →'
                      }
                  ].map((tier, i) => (
                      <div key={i} className={`glass-card p-10 flex flex-col items-center text-center transition-all hover:scale-[1.02] ${
                        tier.recommended ? 'bg-signal/10 border-signal border-2' : 'bg-surface-2 border-border border'
                      }`}>
                          <div className="font-mono text-signal text-xs mb-8 uppercase tracking-[0.3em] font-bold">{tier.name}</div>
                          <div className="font-display text-4xl font-black text-white mb-4 uppercase">{tier.discount}</div>
                          <div className="w-12 h-px bg-border my-8" />
                          <ul className="space-y-4 mb-12">
                              {tier.features.map((feat, idx) => (
                                  <li key={idx} className="font-body text-muted flex items-center justify-center gap-2">
                                      <span className="text-signal text-xs">●</span> {feat}
                                  </li>
                              ))}
                          </ul>
                          <div className="mt-auto pt-8 border-t border-border/50 w-full mb-8">
                             <div className="font-mono text-[9px] text-muted uppercase tracking-widest">{tier.min}</div>
                          </div>
                          <button 
                            onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className={`w-full h-14 font-mono text-xs uppercase tracking-widest transition-all ${
                                tier.recommended ? 'btn-signal' : 'btn-ghost'
                            }`}
                          >
                            {tier.cta}
                          </button>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* STAT STRIP */}
      <section className="py-16 bg-surface-2 border-y border-border">
          <div className="container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { val: '35%', label: 'Trade discount max' },
                        { val: '£0', label: 'Setup cost' },
                        { val: '48hr', label: 'Approval time' },
                        { val: '24/7', label: 'Partner support' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="font-display text-4xl font-black text-signal mb-1">{stat.val}</div>
                            <div className="font-body text-xs text-muted uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
              </div>
          </div>
      </section>

      {/* SECTORS GRID */}
      <section className="py-24">
          <div className="container">
              <h2 className="display-sm text-white mb-16 text-center uppercase tracking-wider">// WHO THIS IS FOR</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                      'Auto Electricians', 'Caravan & Motorhome Dealers', 'Motorcycle Dealers', 
                      'Plant Hire Companies', 'Fleet Management Consultants', 'Vehicle Dealerships'
                  ].map((sector, i) => (
                      <div key={i} className="glass-card border-border bg-surface-2 p-8 text-center hover:bg-signal/5 hover:border-signal/50 transition-all">
                          <div className="font-display text-sm font-bold text-white uppercase">{sector}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply-form" className="py-24 border-t border-border bg-void">
          <div className="container max-w-4xl">
              <div className="glass-card border-border bg-surface-2 p-10 lg:p-16">
                  {!submitted ? (
                    <>
                        <div className="text-center mb-12">
                            <div className="mono-label text-signal mb-4 uppercase tracking-[0.2em]">// REGISTER FOR TRADE ACCESS</div>
                            <h2 className="display-md text-white mb-4">PARTNER APPLICATION.</h2>
                            <p className="font-body text-muted">Submit your business details and our trade team will review your application within 48 hours.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-mono text-[10px] text-muted uppercase tracking-widest">BUSINESS NAME</label>
                                <input required className="bg-void border border-border h-12 px-4 text-white outline-none focus:border-signal" value={form.businessName} onChange={e => setForm({...form, businessName: e.target.value})} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-mono text-[10px] text-muted uppercase tracking-widest">BUSINESS TYPE</label>
                                <select className="bg-void border border-border h-12 px-4 text-white outline-none focus:border-signal appearance-none" value={form.businessType} onChange={e => setForm({...form, businessType: e.target.value})}>
                                    <option>Auto Electrician</option>
                                    <option>Caravan Dealer</option>
                                    <option>Motorcycle Workshop</option>
                                    <option>Plant Hire</option>
                                    <option>Fleet Manager</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-mono text-[10px] text-muted uppercase tracking-widest">ESTIMATED VOLUME / YR</label>
                                <select className="bg-void border border-border h-12 px-4 text-white outline-none focus:border-signal appearance-none" value={form.deviceCount} onChange={e => setForm({...form, deviceCount: e.target.value})}>
                                    <option>5-24</option>
                                    <option>25-99</option>
                                    <option>100+</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-mono text-[10px] text-muted uppercase tracking-widest">CONTACT NAME</label>
                                <input required className="bg-void border border-border h-12 px-4 text-white outline-none focus:border-signal" value={form.contactName} onChange={e => setForm({...form, contactName: e.target.value})} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-mono text-[10px] text-muted uppercase tracking-widest">EMAIL ADDRESS</label>
                                <input required type="email" className="bg-void border border-border h-12 px-4 text-white outline-none focus:border-signal" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-mono text-[10px] text-muted uppercase tracking-widest">PHONE NUMBER</label>
                                <input required type="tel" className="bg-void border border-border h-12 px-4 text-white outline-none focus:border-signal" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="font-mono text-[10px] text-muted uppercase tracking-widest">HOW DID YOU HEAR ABOUT US?</label>
                                <input className="bg-void border border-border h-12 px-4 text-white outline-none focus:border-signal" value={form.source} onChange={e => setForm({...form, source: e.target.value})} />
                            </div>
                            <button 
                                disabled={submitting}
                                className="btn-signal h-14 md:col-span-2 uppercase font-mono text-xs tracking-[0.2em] disabled:opacity-50 mt-4"
                            >
                                {submitting ? 'Submitting Application...' : 'Submit Application →'}
                            </button>
                        </form>
                    </>
                  ) : (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-8 border border-success/30">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                        </div>
                        <h2 className="display-sm text-white mb-4">Application Submitted.</h2>
                        <p className="font-body text-muted max-w-md mx-auto">Thank you for your interest in the Travio Trade Programme. Our team will review your details and contact you within 48 hours to confirm your account status.</p>
                    </div>
                  )}
              </div>
          </div>
      </section>
    </div>
  );
}
