import React from "react";
import { galleryCategories } from "../../data/galleryData";

interface GalleryFilterProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function GalleryFilter({ activeCategory, onSelectCategory }: GalleryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
      {galleryCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`px-5 py-2.5 rounded-full font-mono text-[11px] uppercase tracking-[0.16em] whitespace-nowrap transition-all duration-300 font-medium ${
            activeCategory === cat.id
              ? "bg-olive-900 text-sand-50 shadow-md font-semibold"
              : "bg-sand-200/80 hover:bg-sand-300 text-ink-muted hover:text-ink-pure"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
