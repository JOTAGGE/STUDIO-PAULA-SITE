import React, { useState } from "react";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import ServiceCategoryFilter from "../components/services/ServiceCategoryFilter";
import ServiceCard from "../components/services/ServiceCard";
import { servicesData, careInstructions } from "../data/servicesData";

export default function ServicosPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices = activeCategory === "all"
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-[#f5f2ea] text-ink-pure">
      
      {/* Header Banner */}
      <section className="bg-olive-950 text-sand-100 py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">
            CATÁLOGO & PROCEDIMENTOS
          </Badge>
          <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-sand-50 mb-6">
            MENU DE <br />
            <i>serviços &</i> <br />
            CUIDADO.
          </h1>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Escolha o procedimento ideal para suas unhas. Trabalhamos com técnicas avançadas para garantir máxima durabilidade, beleza e saúde ungueal.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="mb-10">
          <ServiceCategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Care Instructions Section */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#eae5d8] border border-ink/10">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-olive-800 font-bold block mb-2">
              DURABILIDADE & SAÚDE
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl text-ink-pure">
              COMO CUIDAR <i>do seu alongamento.</i>
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-2">
              Pequenos hábitos diários garantem que suas unhas permaneçam perfeitas e brilhantes por até 30 dias.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careInstructions.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-sand-100/90 border border-sand-300/40">
                <span className="font-mono text-xs font-bold text-olive-700 block mb-2">
                  {item.step}
                </span>
                <h3 className="font-sans font-bold text-sm text-ink-pure mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Simulator CTA Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-olive-900 text-sand-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-luxury-lg">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400 font-bold block mb-1">
              EXPERIÊNCIA INTERATIVA
            </span>
            <h3 className="editorial-title text-2xl sm:text-3xl text-sand-50 mb-2">
              SIMULADOR DE <i>agendamento.</i>
            </h3>
            <p className="text-xs sm:text-sm text-sand-300 max-w-lg">
              Combine serviços, calcule o tempo estimado da sua sessão e envie a mensagem pré-formatada no WhatsApp da Paula!
            </p>
          </div>
          <Button to="/agendamento" variant="gold" size="lg" className="rounded-full shrink-0">
            Abrir Simulador
          </Button>
        </div>

      </section>
    </div>
  );
}
