import React, { useState, useEffect } from "react";
import { X, Clock, ExternalLink, MessageCircle, Globe, Sparkles, AlertTriangle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoNoticeModal() {
  const [isOpen, setIsOpen] = useState(true);

  // Fecha com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Modal Popup Principal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">
            {/* Backdrop com Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-olive-950/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-xl bg-sand-50 text-ink-pure rounded-3xl shadow-luxury-lg border border-sand-300/60 overflow-hidden z-10 max-h-[92vh] flex flex-col"
            >
              {/* Top Accent Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-gold-600 via-gold-400 to-olive-700" />

              {/* Botão Fechar X */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-sand-700 hover:text-ink-pure hover:bg-sand-200/70 transition-all z-20"
                aria-label="Fechar pop-up"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                {/* Tag / Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 border border-gold-500/30 text-gold-900 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold mb-3">
                  <Clock className="w-3.5 h-3.5 text-gold-700 animate-pulse" />
                  <span>Demonstração Exclusiva · 1 dia de visualização</span>
                </div>

                {/* Título Principal */}
                <h2 className="font-serif text-2xl sm:text-3xl text-olive-950 font-bold tracking-tight mb-2">
                  Demonstração Exclusiva
                </h2>

                <p className="text-ink-soft text-xs sm:text-sm leading-relaxed mb-4">
                  Este é um modelo personalizado preparado especialmente para você visualizar como o seu negócio pode se posicionar na internet com elegância e profissionalismo.
                </p>

                {/* Caixa de Aviso Destacada - Prazo de 1 semana */}
                <div className="bg-amber-500/10 border-2 border-amber-500/40 rounded-2xl p-4 sm:p-4 mb-4 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-start gap-3.5 relative z-10">
                    <div className="p-2 rounded-xl bg-amber-500/20 text-amber-800 shrink-0 mt-0.5">
                      <AlertTriangle className="w-4.5 h-4.5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-amber-950 text-xs sm:text-sm uppercase tracking-wider mb-1 flex items-center gap-2">
                        <span>Aviso Importante: Prazo de Resposta</span>
                      </h4>
                      <p className="text-amber-950/90 text-xs sm:text-[13px] leading-relaxed">
                        Você tem <strong className="text-amber-950 font-bold underline decoration-amber-500/60">até 1 semana (7 dias)</strong> para nos dar uma resposta sobre a aquisição. Caso contrário, <strong className="text-amber-950 font-bold">os seus dados serão retirados</strong> e este modelo de site ficará <strong className="text-amber-950 font-bold">livre e disponível para o próximo cliente</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Caixa Informativa de Exploração */}
                <div className="bg-olive-950 text-sand-100 rounded-2xl p-4 mb-6 border border-olive-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="p-2 rounded-xl bg-gold-500/20 text-gold-400 shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sand-50 text-xs uppercase tracking-wider mb-1">
                        Explore todas as páginas
                      </h4>
                      <p className="text-sand-300 text-xs sm:text-[12.5px] leading-relaxed">
                        Dê uma olhada em todas as seções, serviços, simulador de agendamento e galeria para conferir a experiência completa! O acesso ao site será desativado no dia seguinte. Entre em contato para visualizar novamente.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Seção de Aquisição */}
                <div className="mb-6">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-3 flex items-center gap-2">
                    <span>Deseja adquirir este site?</span>
                    <div className="flex-1 h-[1px] bg-sand-300/80" />
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Opção WhatsApp com Preço */}
                    <a
                      href="https://wa.me/c/558183100118"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between p-4 rounded-2xl bg-white border border-sand-300/70 hover:border-gold-500/60 shadow-sm hover:shadow-luxury transition-all duration-300 text-left relative overflow-hidden"
                    >
                      <div className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                        Catálogo
                      </div>

                      <div>
                        <div className="w-9 h-9 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                          <MessageCircle className="w-5 h-5 fill-emerald-600/20" />
                        </div>
                        <h4 className="font-sans font-bold text-sm text-olive-950 group-hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                          WhatsApp
                          <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-all" />
                        </h4>
                        <p className="text-[11px] text-ink-muted mt-1 leading-snug">
                          Escolha o produto <strong className="text-olive-950 font-semibold">"Website"</strong> direto no catálogo.
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-sand-200/70 flex items-baseline justify-between">
                        <span className="font-mono text-[10px] text-ink-faint uppercase">Valor único</span>
                        <span className="font-mono font-bold text-base text-emerald-700">R$ 360</span>
                      </div>
                    </a>

                    {/* Opção NOMA */}
                    <a
                      href="http://nomaproject.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between p-4 rounded-2xl bg-white border border-sand-300/70 hover:border-olive-600/50 shadow-sm hover:shadow-luxury transition-all duration-300 text-left relative overflow-hidden"
                    >
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-olive-900/10 text-olive-900 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                          <Globe className="w-5 h-5" />
                        </div>
                        <h4 className="font-sans font-bold text-sm text-olive-950 group-hover:text-olive-800 transition-colors flex items-center gap-1.5">
                          NOMA
                          <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </h4>
                        <p className="text-[11px] text-ink-muted mt-1 leading-snug">
                          Conheça os projetos, soluções e serviços desenvolvidos pela NOMA.
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-sand-200/70 flex items-center justify-between text-olive-900 font-mono text-[11px] font-semibold">
                        <span>nomaproject.vercel.app</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Botões de Ação Inferiores */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                  <a
                    href="https://wa.me/c/558183100118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-olive-900 hover:bg-olive-950 text-sand-100 font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-center shadow-md hover:shadow-luxury transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Quero Adquirir o Site</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl bg-sand-200/80 hover:bg-sand-300 text-ink-soft hover:text-ink-pure font-mono text-[11px] uppercase tracking-[0.14em] font-medium transition-all text-center"
                  >
                    Dar uma Olhada
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Botão / Pill Flutuante Discreto para Reabrir quando Fechado */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-olive-950/90 text-sand-100 hover:bg-olive-950 hover:text-gold-300 border border-gold-500/30 shadow-luxury backdrop-blur-md transition-all group font-mono text-[11px] tracking-wider uppercase cursor-pointer"
            aria-label="Abrir informações do site demo"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span className="font-medium">Site Demo</span>
            <span className="text-gold-400 font-bold">· R$ 360</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
