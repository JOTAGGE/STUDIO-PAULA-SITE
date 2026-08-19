import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { galleryItems } from "../../data/galleryData";

export default function PortfolioTeaser() {
  const featured = galleryItems.slice(0, 3);

  return (
    <section className="py-24 sm:py-32 bg-[#ddd9cd] text-ink-pure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          number="03"
          label="PORTFÓLIO & TRABALHOS"
          title="PEQUENOS"
          italicWord="detalhes."
          description="Acompanhe algumas das produções e estilos desenvolvidos no Studio Paula Lima. Cada trabalho reflete simetria, cuidado com a cutícula e acabamento de alto nível."
          align="split"
          action={
            <Button to="/galeria" variant="dark" size="md" className="rounded-full">
              Abrir Galeria Completa (5 Fotos)
            </Button>
          }
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main big item */}
          <Link
            to="/galeria"
            className="md:col-span-7 group relative aspect-[4/3] md:aspect-auto md:min-h-[460px] rounded-3xl overflow-hidden shadow-luxury border border-ink/10 block"
          >
            <img
              src={featured[0].image}
              alt={featured[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-sand-50">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-300 block mb-1">
                  {featured[0].categoryLabel}
                </span>
                <h3 className="font-sans font-bold text-lg sm:text-2xl text-sand-50 leading-tight">
                  {featured[0].title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-gold-500 group-hover:text-olive-950 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Right 2 items */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            {featured.slice(1, 3).map((item) => (
              <Link
                key={item.id}
                to="/galeria"
                className="group relative aspect-[4/3] md:min-h-[218px] rounded-3xl overflow-hidden shadow-luxury border border-ink/10 block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-sand-50">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-gold-300 block mb-0.5">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-sand-50 line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-gold-500 group-hover:text-olive-950 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
