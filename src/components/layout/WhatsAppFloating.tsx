import React, { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { generateWhatsAppLink } from "../../data/studioInfo";

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="relative bg-olive-950 text-sand-100 p-3.5 pr-8 rounded-2xl shadow-luxury-lg border border-white/10 text-xs font-mono max-w-[240px] animate-bounce-short">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-sand-400 hover:text-white"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-gold-400 font-bold mb-1 text-[10px] tracking-wider uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Atendimento Online</span>
          </div>
          <p className="text-[11px] text-sand-200 leading-snug">
            Tire dúvidas e marque seu horário com a Paula no WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={generateWhatsAppLink("Olá, Paula! Gostaria de tirar uma dúvida e saber horários disponíveis.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Studio Paula Lima no WhatsApp"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-luxury-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative group"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
