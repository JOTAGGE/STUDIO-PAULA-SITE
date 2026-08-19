import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import Button from "../common/Button";
import Badge from "../common/Badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] pt-32 pb-20 bg-olive-950 text-sand-100 overflow-hidden flex items-center">
      {/* Editorial Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[26vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter leading-none">
        STUDIO
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-olive-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="gold" className="text-[10px]">
                <Sparkles className="w-3 h-3 text-gold-700" />
                <span>Nail Designer em Recife · PE</span>
              </Badge>
              <div className="hidden sm:flex items-center gap-1 text-gold-400 font-mono text-[10px]">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-sand-300">5.0 no Google</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.05em] text-sand-50 mb-6">
              BELEZA <br />
              <i>em cada</i> <br />
              <span className="text-sand-100">DETALHE.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-sand-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              Um studio de beleza e nail design exclusivo na Cidade Universitária, em Recife. 
              Alongamentos finos, esmaltação em gel duradoura e um momento de pausa para quem valoriza mãos impecáveis.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
              <Button
                to="/agendamento"
                variant="gold"
                size="lg"
                className="rounded-full shadow-lg"
              >
                Agendar Meu Horário
              </Button>
              <Button
                to="/servicos"
                variant="outline"
                size="lg"
                className="rounded-full text-sand-100 border-white/20 hover:border-white hover:bg-white/10 hover:text-white"
              >
                Explorar Serviços
              </Button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full max-w-lg">
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-gold-400">
                  5.0 ★
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-sand-400">
                  Avaliação Google
                </span>
              </div>
              <div>
                <span className="block font-mono text-xl sm:text-2xl font-bold text-sand-100">
                  28 dias
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-sand-400">
                  Durabilidade Média
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-sand-100">
                  100%
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-sand-400">
                  Biossegurança
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual & Editorial Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/paulinha1.png"
                alt="Paula Lima Nail Designer no Studio em Recife"
                className="w-full h-full object-cover object-center filter saturate-90 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-olive-950/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <span className="font-sans font-bold text-xs text-sand-50 block">
                    Paula Lima
                  </span>
                  <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest block">
                    Nail Designer & Visagista
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white/10 font-mono text-[8px] tracking-wider text-sand-200 uppercase">
                  Recife · PE
                </span>
              </div>

              <div className="hidden sm:block absolute right-3 top-6 font-mono text-[8px] tracking-[0.3em] uppercase text-sand-300/70 [writing-mode:vertical-rl] rotate-180">
                BEAUTY / NAILS / CARE
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
