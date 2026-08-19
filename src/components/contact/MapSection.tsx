import React from "react";
import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <div className="rounded-3xl overflow-hidden shadow-luxury border border-ink/10 relative min-h-[480px] bg-sand-200 flex flex-col">
      <div className="absolute top-4 left-4 z-10 p-3 rounded-2xl bg-olive-950/90 backdrop-blur-md border border-white/10 text-sand-50 font-mono text-xs flex items-center gap-2 shadow-lg">
        <MapPin className="w-4 h-4 text-gold-400" />
        <span>Cidade Universitária · Recife/PE</span>
      </div>

      <iframe
        title="Localização do Studio Paula Lima no Google Maps"
        src="https://www.google.com/maps?q=Studio%20Paula%20Lima%2C%20Av.%20Prof.%20Artur%20de%20S%C3%A1%2C%20Recife%20-%20PE&output=embed"
        className="w-full h-full min-h-[480px] border-0 filter grayscale-[40%] contrast-110"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
