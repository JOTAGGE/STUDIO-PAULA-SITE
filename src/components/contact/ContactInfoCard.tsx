import React from "react";
import { MapPin, Phone, Clock, Star, ArrowUpRight } from "lucide-react";
import Button from "../common/Button";
import { studioInfo, generateWhatsAppLink } from "../../data/studioInfo";

export default function ContactInfoCard() {
  return (
    <div className="flex flex-col gap-6 p-8 sm:p-10 rounded-3xl bg-sand-100 border border-sand-300/60 shadow-luxury">
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-olive-800 font-bold block mb-2">
          CANAIS DE ATENDIMENTO
        </span>
        <h3 className="editorial-title text-3xl sm:text-4xl text-ink-pure mb-4">
          FALE COM <i>o studio.</i>
        </h3>
        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
          Tire dúvidas, consulte disponibilidade de horários e agende seu momento com a Paula.
        </p>
      </div>

      <div className="space-y-4 pt-4 border-t border-ink/10 font-mono text-xs">
        {/* Endereço */}
        <a
          href={studioInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-2xl bg-sand-200/60 hover:bg-sand-200 border border-sand-300/40 transition-colors group"
        >
          <MapPin className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="text-[9px] uppercase tracking-wider text-ink-muted block mb-0.5">
              Endereço / Localização
            </span>
            <span className="text-ink-pure leading-tight block">
              {studioInfo.fullAddress}
            </span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-ink-pure transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Telefone / WhatsApp */}
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-2xl bg-sand-200/60 hover:bg-sand-200 border border-sand-300/40 transition-colors group"
        >
          <Phone className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="text-[9px] uppercase tracking-wider text-ink-muted block mb-0.5">
              Telefone / WhatsApp
            </span>
            <span className="text-ink-pure leading-tight block font-bold">
              {studioInfo.phone}
            </span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-ink-pure transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Horários */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-200/60 border border-sand-300/40">
          <Clock className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
          <div>
            <span className="text-[9px] uppercase tracking-wider text-ink-muted block mb-0.5">
              Horários de Atendimento
            </span>
            <span className="text-ink-pure leading-tight block">
              {studioInfo.quickHours}
            </span>
          </div>
        </div>

        {/* Avaliação */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-200/60 border border-sand-300/40">
          <Star className="w-4 h-4 text-gold-600 shrink-0 mt-0.5 fill-current" />
          <div>
            <span className="text-[9px] uppercase tracking-wider text-ink-muted block mb-0.5">
              Reputação no Google
            </span>
            <span className="text-ink-pure leading-tight block font-semibold">
              5.0 Estrelas · Avaliação Máxima
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col gap-3">
        <Button
          href={generateWhatsAppLink("Olá, Paula! Gostaria de agendar um horário no Studio.")}
          variant="gold"
          size="lg"
          className="rounded-2xl w-full"
        >
          Chamar no WhatsApp
        </Button>
      </div>
    </div>
  );
}
