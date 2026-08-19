import React from "react";
import { Star, CheckCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { testimonialsData, studioStats } from "../../data/testimonialsData";

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#262c20] text-sand-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-olive-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          number="04"
          label="AVALIAÇÕES & SATISFAÇÃO"
          title="QUEM VAI"
          italicWord="recomenda."
          description="A confiança das nossas clientes é nosso maior patrimônio. Veja o que dizem sobre o atendimento, durabilidade e experiência no Studio Paula Lima."
          theme="dark"
          align="split"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-7 rounded-3xl bg-olive-900/70 border border-white/10 hover:border-gold-400/30 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-gold-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] text-sand-400">
                    {review.date}
                  </span>
                </div>

                <p className="text-xs text-sand-200 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/20 text-gold-300 font-mono text-xs font-bold flex items-center justify-center border border-gold-400/30 shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-sans font-bold text-xs text-sand-50">
                      {review.name}
                    </span>
                    {review.verified && (
                      <CheckCircle className="w-3 h-3 text-gold-400" />
                    )}
                  </div>
                  <span className="font-mono text-[9px] text-sand-400 block">
                    {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-olive-950/80 border border-white/10">
          {studioStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-sans font-extrabold text-2xl sm:text-3xl text-gold-400 tracking-tight">
                {stat.value}
              </span>
              <span className="font-sans font-semibold text-xs text-sand-100 mt-1">
                {stat.label}
              </span>
              <span className="font-mono text-[9px] text-sand-400 uppercase tracking-wider mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
