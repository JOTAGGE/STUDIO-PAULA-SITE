import React from "react";
import { MapPin, Clock, Star } from "lucide-react";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import { studioInfo, generateWhatsAppLink } from "../../data/studioInfo";

export default function VisitCtaSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#373f2f] text-sand-100 relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionHeading
              number="05"
              label="VISITE O STUDIO"
              title="VENHA NOS"
              italicWord="conhecer."
              description="Nosso espaço foi planejado para oferecer uma experiência confortável, reservada e sem correria. Estamos localizados na Cidade Universitária, em Recife."
              theme="dark"
              className="mb-8"
            />

            <div className="flex flex-col gap-4 w-full max-w-lg mb-10 font-mono text-xs">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-olive-950/60 border border-white/10">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-sand-200">
                  {studioInfo.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-olive-950/60 border border-white/10">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-sand-200">
                  {studioInfo.quickHours}
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-olive-950/60 border border-white/10">
                <Star className="w-4 h-4 text-gold-400 shrink-0 fill-current" />
                <span className="text-sand-200">
                  Nota 5.0 no Google · Atendimento com hora marcada
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                href={generateWhatsAppLink("Olá, Paula! Gostaria de agendar um horário no Studio.")}
                variant="gold"
                size="lg"
                className="rounded-full"
              >
                Chamar no WhatsApp
              </Button>
              <Button
                to="/contato"
                variant="outline"
                size="lg"
                className="rounded-full text-sand-100 border-white/20 hover:border-white hover:bg-white/10 hover:text-white"
              >
                Ver Mapa & Detalhes
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/paulinha2.png"
                alt="Ambiente Studio Paula Lima em Recife"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-olive-950/90 backdrop-blur-md border border-white/15 text-center">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400 font-bold block mb-1">
                  Espaço Aconchegante
                </span>
                <span className="font-sans font-bold text-sm text-sand-50 block">
                  Studio Paula Lima · Recife / PE
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
