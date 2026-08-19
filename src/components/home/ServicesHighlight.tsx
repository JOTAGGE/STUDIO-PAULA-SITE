import React from "react";
import { Link } from "react-router-dom";
import { Clock, Check, Calendar, Sparkles } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Badge from "../common/Badge";
import { servicesData } from "../../data/servicesData";

export default function ServicesHighlight() {
  const featuredServices = servicesData.slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-[#f3f0e7] text-ink-pure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="02"
          label="SERVIÇOS EM DESTAQUE"
          title="CUIDADO"
          italicWord="do seu jeito."
          description="Do alongamento estruturado à blindagem natural, oferecemos procedimentos pensados para a sua rotina, com máxima durabilidade e acabamento refinado."
          align="split"
          action={
            <Button to="/servicos" variant="link" size="link">
              Ver Todos os Procedimentos & Valores
            </Button>
          }
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, idx) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-3xl bg-white/70 hover:bg-white border border-ink/5 hover:border-olive-700/20 shadow-sm hover:shadow-luxury transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-xs text-olive-700 font-bold">
                    0{idx + 1}
                  </span>
                  {service.tag && (
                    <Badge variant={service.popular ? "gold" : "subtle"}>
                      {service.tag}
                    </Badge>
                  )}
                </div>

                <h3 className="font-sans font-bold text-xl text-ink-pure mb-2 group-hover:text-olive-900 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-ink-muted leading-relaxed mb-6">
                  {service.subtitle}
                </p>

                <div className="flex items-center gap-4 py-3 border-y border-ink/5 font-mono text-[11px] text-ink-soft mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-olive-600" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-ink/20" />
                  <span className="font-semibold text-olive-900">
                    {service.priceEstimate}
                  </span>
                </div>

                <ul className="space-y-2 mb-8">
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-ink-muted leading-snug">
                      <Check className="w-3 h-3 text-olive-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/agendamento?service=${service.id}`}
                className="w-full py-3 rounded-2xl font-mono text-[10px] uppercase tracking-[0.16em] bg-sand-200/80 group-hover:bg-olive-900 group-hover:text-sand-50 text-ink-pure font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Escolher Horário</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-olive-900 text-sand-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 border border-gold-400/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base sm:text-lg text-sand-50">
                Não sabe qual procedimento escolher?
              </h4>
              <p className="text-xs text-sand-300">
                A Paula faz uma avaliação personalizada no seu primeiro atendimento para indicar a melhor técnica.
              </p>
            </div>
          </div>
          <Button to="/agendamento" variant="gold" size="md" className="rounded-full shrink-0">
            Consultar com a Paula
          </Button>
        </div>

      </div>
    </section>
  );
}
