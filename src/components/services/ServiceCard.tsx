import React from "react";
import { Link } from "react-router-dom";
import { Check, Calendar } from "lucide-react";
import Badge from "../common/Badge";
import { ServiceItem } from "../../types";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-between p-8 rounded-3xl bg-sand-100/90 border border-sand-300/60 shadow-sm hover:shadow-luxury hover:border-olive-700/30 transition-all duration-300 group">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <Badge variant="subtle">
            {service.duration}
          </Badge>
          {service.tag && (
            <Badge variant={service.popular ? "gold" : "subtle"}>
              {service.tag}
            </Badge>
          )}
        </div>

        <h3 className="font-sans font-bold text-2xl text-ink-pure mb-2 group-hover:text-olive-900 transition-colors">
          {service.title}
        </h3>
        <p className="font-serif italic text-sm text-olive-800 mb-4">
          {service.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="space-y-2 mb-6 pt-4 border-t border-ink/10">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-muted block mb-2">
            O que está incluso:
          </span>
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-soft">
              <Check className="w-3.5 h-3.5 text-olive-700 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-ink/10 flex items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-ink-muted block">
            Estimativa
          </span>
          <span className="font-sans font-bold text-base sm:text-lg text-olive-900">
            {service.priceEstimate}
          </span>
        </div>

        <Link
          to={`/agendamento?service=${service.id}`}
          className="px-5 py-3 rounded-full font-mono text-[10px] uppercase tracking-[0.15em] bg-olive-900 hover:bg-olive-950 text-sand-50 font-bold transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          <Calendar className="w-3 h-3 text-gold-400" />
          <span>Agendar</span>
        </Link>
      </div>
    </div>
  );
}
