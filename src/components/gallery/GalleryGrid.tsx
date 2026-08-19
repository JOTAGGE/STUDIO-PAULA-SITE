import React from "react";
import { Eye } from "lucide-react";
import { GalleryItem } from "../../types";

interface GalleryGridProps {
  items: GalleryItem[];
  onOpenLightbox: (index: number) => void;
}

export default function GalleryGrid({ items, onOpenLightbox }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          onClick={() => onOpenLightbox(index)}
          className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxury border border-ink/10 cursor-pointer bg-sand-200"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-sand-50" />

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10">
            <div className="bg-sand-100/90 group-hover:bg-olive-950/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-ink/10 group-hover:border-white/15 transition-colors">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-olive-800 group-hover:text-gold-300 font-bold block mb-0.5">
                {item.categoryLabel}
              </span>
              <h4 className="font-sans font-bold text-xs sm:text-sm text-ink-pure group-hover:text-sand-50 line-clamp-1">
                {item.title}
              </h4>
            </div>

            <div className="w-10 h-10 rounded-full bg-sand-100 group-hover:bg-gold-500 text-ink-pure group-hover:text-olive-950 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-all duration-300">
              <Eye className="w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
