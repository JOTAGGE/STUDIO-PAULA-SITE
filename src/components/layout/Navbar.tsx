import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Calendar, ArrowUpRight } from "lucide-react";
import { generateWhatsAppLink } from "../../data/studioInfo";

interface NavLinkItem {
  name: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Serviços", path: "/servicos" },
  { name: "Galeria", path: "/galeria" },
  { name: "Agendamento", path: "/agendamento" },
  { name: "Contato", path: "/contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between px-6 sm:px-8 py-3.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "glass-dark shadow-luxury-lg"
              : "bg-olive-950/85 backdrop-blur-md border border-white/10 shadow-luxury"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col text-sand-100 group transition-transform duration-300"
          >
            <span className="font-sans font-bold tracking-[0.12em] text-sm sm:text-base text-sand-50 flex items-center gap-1">
              PAULA LIMA
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 inline-block"></span>
            </span>
            <small className="font-mono text-[7px] tracking-[0.28em] text-sand-300/60 uppercase">
              Studio · Recife
            </small>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-gold-300 font-semibold"
                      : "text-sand-300/80 hover:text-sand-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/agendamento"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.15em] bg-gold-500 hover:bg-gold-400 text-olive-950 font-bold transition-all duration-300 shadow-sm hover:shadow-glow-gold hover:-translate-y-0.5"
            >
              <Calendar className="w-3 h-3" />
              <span>Agendar</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menu de navegação"
              className="md:hidden text-sand-100 p-1.5 hover:text-gold-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 p-6 rounded-3xl bg-olive-950/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? "bg-olive-800 text-gold-300 font-semibold"
                        : "text-sand-200 hover:bg-olive-900/80 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                to="/agendamento"
                className="w-full py-3.5 rounded-xl font-mono text-xs uppercase tracking-[0.15em] bg-gold-500 text-olive-950 font-bold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Simular & Agendar</span>
              </Link>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-mono text-[11px] uppercase tracking-[0.15em] bg-white/10 hover:bg-white/15 text-sand-100 font-medium flex items-center justify-center gap-2"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
