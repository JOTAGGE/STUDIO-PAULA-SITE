import React, { useState } from "react";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import GalleryFilter from "../components/gallery/GalleryFilter";
import GalleryGrid from "../components/gallery/GalleryGrid";
import LightboxModal from "../components/gallery/LightboxModal";
import { galleryItems } from "../data/galleryData";

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#f5f2ea] text-ink-pure">
      
      {/* Header Banner */}
      <section className="bg-olive-950 text-sand-100 py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">
            PORTFÓLIO & CRIAÇÕES
          </Badge>
          <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-sand-50 mb-6">
            FEITO À MÃO. <br />
            <i>feito para</i> <br />
            VOCÊ.
          </h1>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Explore nossa galeria visual de acabamentos, alongamentos e detalhes artísticos. Clique em qualquer foto para ampliar em tela cheia.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters */}
        <div className="mb-10">
          <GalleryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Grid */}
        <GalleryGrid
          items={filteredItems}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={filteredItems}
          currentIndex={currentIndex}
          onNavigate={setCurrentIndex}
        />

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#eae5d8] border border-ink/10 text-center max-w-2xl mx-auto">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-olive-800 font-bold block mb-2">
            GOSTOU DE ALGUM ESTILO?
          </span>
          <h3 className="editorial-title text-2xl sm:text-3xl text-ink-pure mb-4">
            MARQUE SUA <i>sessão.</i>
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted mb-8">
            Você pode nos enviar uma foto de referência no WhatsApp para recriarmos o estilo perfeito para suas unhas.
          </p>
          <Button to="/agendamento" variant="gold" size="lg" className="rounded-full">
            Agendar Horário
          </Button>
        </div>

      </section>
    </div>
  );
}
