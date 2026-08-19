import React from "react";
import { Sparkles, ShieldCheck, Heart, Award } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import { generateWhatsAppLink } from "../data/studioInfo";

export default function SobrePage() {
  const pillars = [
    {
      title: "Biossegurança Hospitalar",
      desc: "Todos os instrumentos metálicos passam por processo rigoroso de esterilização em autoclave com embalagens grau cirúrgico individuais. Descartáveis 100% descartados a cada atendimento.",
      icon: ShieldCheck
    },
    {
      title: "Naturalidade & Estrutura Fina",
      desc: "Nossos alongamentos em gel não ficam grossos ou artificiais. Priorizamos a simetria, curvatura e ponto de tensão correto para unir resistência e sofisticação.",
      icon: Sparkles
    },
    {
      title: "Saúde da Lâmina Ungueal",
      desc: "Não lixamos em excesso a unha natural. Usamos preparadores e géis dermatologicamente testados e regularizados que preservam a integridade da queratina.",
      icon: Heart
    },
    {
      title: "Atendimento Humanizado & Exclusivo",
      desc: "Sem filas ou pressa de linha de produção. Um horário dedicado a você, com ambiente climatizado, música relaxante e café cortesia.",
      icon: Award
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#f5f2ea] text-ink-pure">
      
      {/* Hero Header */}
      <section className="bg-olive-950 text-sand-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">
            CONHEÇA NOSSA ESSÊNCIA
          </Badge>
          <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-sand-50 mb-6">
            BELEZA NÃO <br />
            <i>precisa</i> <br />
            GRITAR.
          </h1>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            O Studio Paula Lima nasceu da convicção de que o cuidado com as unhas pode ser uma experiência tranquila, refinada e feita sob medida para a sua identidade.
          </p>
        </div>
      </section>

      {/* Story Split Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-luxury-lg border border-ink/10 group">
              <img
                src="/images/paulinha1.png"
                alt="Paula Lima Nail Designer"
                className="w-full h-full object-cover filter saturate-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-sand-100/90 backdrop-blur-md border border-ink/10 text-center">
                <span className="font-sans font-bold text-sm text-ink-pure block">
                  Paula Lima
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-olive-800">
                  Fundadora & Nail Designer
                </span>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-olive-800 font-bold mb-3">
              A HISTÓRIA DO STUDIO
            </span>
            <h2 className="editorial-title text-4xl sm:text-5xl text-ink-pure mb-6">
              O CUIDADO <i>em cada</i> GESTO.
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-ink-muted leading-relaxed">
              <p>
                Localizado no coração da Cidade Universitária em Recife, o Studio Paula Lima foi idealizado para ser muito mais que um salão de unhas convencional.
              </p>
              <p>
                Acreditamos que unhas bem feitas são uma extensão da sua presença e autoestima. Por isso, nosso foco está na técnica apurada, na higiene impecável e na escolha de formatos e designs que harmonizem com o seu estilo de vida.
              </p>
              <p>
                Cada atendimento é um momento de pausa no seu dia: sem correria, com atenção total às suas preferências e com produtos que garantem brilho e durabilidade de semanas.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/servicos" variant="dark" size="md" className="rounded-full">
                Ver Procedimentos
              </Button>
              <Button
                href={generateWhatsAppLink("Olá, Paula! Gostaria de tirar dúvidas sobre o atendimento.")}
                variant="outline"
                size="md"
                className="rounded-full"
              >
                Falar com a Paula
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-20 bg-[#ebe7db] border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="NOSSOS PILARES"
            title="O PADRÃO"
            italicWord="paula lima."
            description="Compromisso inegociável com a sua segurança, saúde e satisfação estética."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-sand-100/80 border border-sand-300/50 flex flex-col sm:flex-row gap-5 items-start shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-olive-900 text-gold-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-ink-pure mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-olive-900 text-sand-100 shadow-luxury-lg max-w-3xl mx-auto">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400 font-bold block mb-2">
            AGENDAMENTO INDIVIDUAL
          </span>
          <h2 className="editorial-title text-3xl sm:text-4xl text-sand-50 mb-4">
            RESERVE SEU <i>momento.</i>
          </h2>
          <p className="text-xs sm:text-sm text-sand-300 max-w-md mx-auto mb-8">
            Venha desfrutar de um atendimento exclusivo na Cidade Universitária em Recife.
          </p>
          <Button to="/agendamento" variant="gold" size="lg" className="rounded-full">
            Agendar Horário
          </Button>
        </div>
      </section>

    </div>
  );
}
