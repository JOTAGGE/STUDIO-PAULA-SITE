import React from "react";
import { Sparkles } from "lucide-react";

export default function TickerBanner() {
  const items: string[] = [
    "ALONGAMENTO EM GEL",
    "BLINDAGEM DIAMANTE",
    "ESMALTAÇÃO EM GEL",
    "NAIL ART MINIMALISTA",
    "SPA DOS PÉS",
    "BEAUTY & CARE",
    "RECIFE — PE"
  ];

  return (
    <div className="bg-olive-800 text-sand-100 py-4 overflow-hidden border-y border-white/10 select-none">
      <div className="flex whitespace-nowrap animate-ticker">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-sand-200">
            <span>{item}</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400 ml-6 fill-current opacity-75" />
          </div>
        ))}
      </div>
    </div>
  );
}
