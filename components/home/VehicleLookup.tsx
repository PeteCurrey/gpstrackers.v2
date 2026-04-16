'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { vehicles, Vehicle } from '@/lib/data/vehicles';

export default function VehicleLookup() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Vehicle[]>([]);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 1) {
      const filtered = vehicles.filter(v => 
        v.displayName.toLowerCase().includes(query.toLowerCase()) ||
        v.make.toLowerCase().includes(query.toLowerCase()) ||
        v.model.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6);
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (v: Vehicle) => {
    setQuery(v.displayName);
    setIsOpen(false);
    router.push(`/vehicles/${v.make}/${v.model}`);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md mt-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="ENTER YOUR VEHICLE... (e.g. FORD TRANSIT)"
          className="w-full bg-void border border-signal/30 h-14 pl-12 pr-4 font-mono text-[11px] text-white placeholder:text-muted focus:border-signal outline-none transition-all rounded-sm uppercase tracking-widest"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 1 && setIsOpen(true)}
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 w-full mt-2 bg-void border border-border rounded-sm shadow-2xl z-50 overflow-hidden animate-slide-up">
            {results.map((v, i) => (
                <button
                    key={i}
                    onClick={() => handleSelect(v)}
                    className="w-full text-left p-4 hover:bg-signal/10 flex items-center justify-between group transition-colors border-b border-border/50 last:border-0"
                >
                    <div>
                        <div className="font-display font-bold text-white uppercase">{v.displayName}</div>
                        <div className="font-mono text-[9px] text-muted tracking-widest mt-1">{v.type.toUpperCase()} • {v.theftRisk} RISK</div>
                    </div>
                    <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
            ))}
        </div>
      )}
    </div>
  );
}
