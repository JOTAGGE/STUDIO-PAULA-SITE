import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowUpRight, Star, Heart } from "lucide-react";
import { studioInfo, generateWhatsAppLink } from "../../data/studioInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-950 text-sand-100 border-t border-white/10 pt-20 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-olive-800/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link to="/" className="inline-block group">
              <span className="font-sans font-extrabold text-2xl sm:text-3xl tracking-[0.1em] text-sand-50 block">
                STUDIO PAULA LIMA
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold-400 block mt-1">
                Nail Designer · Recife / PE
              </span>
            </Link>
            <p className="text-sand-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Espaço de beleza e estética avançada das unhas em Recife. Atendimento acolhedor, técnicas modernas e acabamento de alto padrão para quem valoriza a elegância em cada detalhe.
            </p>
            <div className="flex items-center gap-2 text-gold-400 text-xs font-mono">
              <div className="flex text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-sand-200">5.0 no Google Reviews</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-sand-400">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em]">
              <li>
                <Link to="/" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Sobre o Studio
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Menu de Serviços
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Portfólio / Galeria
                </Link>
              </li>
              <li>
                <Link to="/agendamento" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Simulador de Agendamento
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sand-300 hover:text-gold-300 transition-colors">
                  Contato & Localização
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-sand-400">
              Horários
            </h3>
            <div className="flex flex-col gap-3 font-mono text-[11px]">
              <div>
                <span className="text-sand-400 block text-[9px] uppercase tracking-wider">Terça a Sexta</span>
                <span className="text-sand-200">08h às 19h</span>
              </div>
              <div>
                <span className="text-sand-400 block text-[9px] uppercase tracking-wider">Sábado</span>
                <span className="text-sand-200">08h às 18h</span>
              </div>
              <div>
                <span className="text-sand-400 block text-[9px] uppercase tracking-wider">Dom & Seg</span>
                <span className="text-sand-400">Sob consulta</span>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-sand-400">
              Atendimento
            </h3>
            <div className="flex flex-col gap-3 text-xs">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-xl bg-olive-900/60 hover:bg-olive-800 border border-white/5 transition-all text-sand-200 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span className="font-mono text-[11px]">{studioInfo.phone}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={studioInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between p-3 rounded-xl bg-olive-900/60 hover:bg-olive-800 border border-white/5 transition-all text-sand-200 hover:text-white"
              >
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">{studioInfo.address}, Recife — PE</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-sand-400 tracking-wider">
          <p>© {currentYear} Studio Paula Lima. By NOMA. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-sand-400">
              Recife / PE · Feito com cuidado & <Heart className="w-2.5 h-2.5 text-gold-400 fill-current" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
