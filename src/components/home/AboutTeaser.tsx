import React from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

export default function AboutTeaser() {
  const highlights: string[] = [
    "Atendimento acolhedor e individualizado",
    "Biossegurança rigorosa com esterilização profissional",
    "Materiais e géis de padrão internacional",
    "Ambiente climatizado e confortável para sua pausa"
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#e9e5d8] text-ink-pure overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-luxury-lg border border-ink/10 group">
              <img
                src="/images/unha1.png"
                alt="Trabalho de nail design no Studio Paula Lima"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-sand-100/90 backdrop-blur-md border border-ink/10 text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-olive-800 font-bold block">
                  Cuidado & Acabamento
                </span>
                <span className="font-serif italic text-sm text-ink-pure">
                  "Onde a beleza encontra a saúde das suas unhas."
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionHeading
              number="01"
              label="SOBRE O STUDIO"
              title="SEU MOMENTO."
              italicWord="seu estilo."
              description="O Studio Paula Lima foi criado para transformar o cuidado com as unhas em um ritual de bem-estar. Aqui, não se trata de atendimento em linha de produção: cada detalhe é planejado para valorizar suas mãos com naturalidade, resistência e bom gosto."
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-sand-100/70 border border-sand-300/40">
                  <CheckCircle2 className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-ink-soft leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button to="/sobre" variant="dark" size="md" className="rounded-full">
                Conhecer Nossa História
              </Button>
              <Button to="/galeria" variant="link" size="link">
                Ver Galeria de Trabalhos
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
