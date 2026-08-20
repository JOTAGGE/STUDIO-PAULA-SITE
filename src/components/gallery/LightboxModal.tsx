import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryItem } from "../../types";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-olive-950/95 backdrop-blur-xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Fechar galeria"
        >
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="max-w-4xl w-full flex flex-col items-center max-h-[90vh]">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[68vh] rounded-3xl overflow-hidden shadow-2xl border border-white/15"
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[68vh] w-auto object-contain"
            />
          </motion.div>

          <div className="mt-6 text-center text-sand-100 max-w-lg">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400 block mb-1">
              {currentItem.categoryLabel} · {currentIndex + 1} de {items.length}
            </span>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-sand-50 mb-2">
              {currentItem.title}
            </h3>
            <p className="text-xs text-sand-300 leading-relaxed">
              {currentItem.description}
            </p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
