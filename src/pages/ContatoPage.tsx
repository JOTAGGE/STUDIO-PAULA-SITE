import React from "react";
import { CheckCircle2 } from "lucide-react";
import Badge from "../components/common/Badge";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import MapSection from "../components/contact/MapSection";
import FaqAccordion from "../components/contact/FaqAccordion";
import { studioInfo } from "../data/studioInfo";

export default function ContatoPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f5f2ea] text-ink-pure">
      
      {/* Header Banner */}
      <section className="bg-olive-950 text-sand-100 py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">
            LOCALIZAÇÃO & CONTATO
          </Badge>
          <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-sand-50 mb-6">
            VAMOS <br />
            <i>marcar seu</i> <br />
            HORÁRIO?
          </h1>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Estamos na Cidade Universitária, em Recife/PE. Consulte horários, tire dúvidas e venha conhecer nosso espaço de beleza e autocuidado.
          </p>
        </div>
      </section>

      {/* Main Contact + Map Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ContactInfoCard />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <MapSection />
          </div>
        </div>

        {/* Amenities Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#eae5d8] border border-ink/10 mb-20">
          <div className="max-w-xl mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-olive-800 font-bold block mb-2">
              COMODIDADES DO STUDIO
            </span>
            <h3 className="editorial-title text-2xl sm:text-3xl text-ink-pure">
              PENSADO PARA <i>seu conforto.</i>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            {studioInfo.amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-sand-100/80 border border-sand-300/50">
                <CheckCircle2 className="w-4 h-4 text-olive-700 shrink-0" />
                <span className="text-ink-soft leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-olive-800 font-bold block mb-2">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl text-ink-pure">
              PERGUNTAS <i>frequentes.</i>
            </h2>
          </div>

          <FaqAccordion />
        </div>

      </section>

    </div>
  );
}
