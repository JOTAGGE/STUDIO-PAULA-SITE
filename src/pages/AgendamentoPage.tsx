import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Sparkles, Check, MessageCircle, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import Badge from "../components/common/Badge";
import { servicesData } from "../data/servicesData";
import { studioInfo } from "../data/studioInfo";

export default function AgendamentoPage() {
  const [searchParams] = useSearchParams();
  const initialServiceId = searchParams.get("service");

  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ["alongamento-gel-tips"]
  );
  const [clientName, setClientName] = useState<string>("");
  const [preferredDay, setPreferredDay] = useState<string>("Esta semana");
  const [preferredShift, setPreferredShift] = useState<string>("Tarde (14h - 18h)");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (initialServiceId && !selectedServices.includes(initialServiceId)) {
      setSelectedServices((prev) => [...prev, initialServiceId]);
    }
  }, [initialServiceId]);

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((id) => id !== serviceId));
      }
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const selectedServicesObjects = servicesData.filter((s) =>
    selectedServices.includes(s.id)
  );

  const formatWhatsAppMessage = (): string => {
    const servicesList = selectedServicesObjects
      .map((s) => `• ${s.title} (${s.priceEstimate})`)
      .join("\n");

    const message = `✨ *Olá, Paula! Gostaria de agendar um horário no Studio Paula Lima.*\n\n` +
      `👤 *Nome:* ${clientName.trim() || "Cliente"}\n` +
      `💅 *Procedimento(s) desejado(s):*\n${servicesList}\n\n` +
      `📅 *Preferência:* ${preferredDay} — ${preferredShift}\n` +
      (notes.trim() ? `💬 *Observações:* ${notes.trim()}\n\n` : `\n`) +
      `Gostaria de confirmar a disponibilidade para agendarmos!`;

    return message;
  };

  const handleBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#c99b3d", "#373f2f", "#f5f2ea", "#6d7a5f"]
      });
    } catch (err) {
      console.log("Confetti trigger", err);
    }

    const message = formatWhatsAppMessage();
    const link = `https://wa.me/${studioInfo.phoneRaw}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(link, "_blank");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="pt-28 pb-20 bg-[#f5f2ea] text-ink-pure">
      
      {/* Hero Header */}
      <section className="bg-olive-950 text-sand-100 py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="gold" className="mb-4">
            SIMULADOR & AGENDAMENTO ONLINE
          </Badge>
          <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl text-sand-50 mb-6">
            MONTE SEU <br />
            <i>atendimento.</i>
          </h1>
          <p className="text-sand-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Selecione os procedimentos, informe sua preferência de dia e turno, e envie a solicitação já estruturada para o WhatsApp da Paula com 1 clique.
          </p>
        </div>
      </section>

      {/* Booking Form & Live Summary */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form: Step by Step */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Step 1: Select Services */}
            <div className="p-8 rounded-3xl bg-sand-100 border border-sand-300/60 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-olive-900 text-sand-50 font-mono text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <h2 className="font-sans font-bold text-xl text-ink-pure">
                  Escolha o(s) Procedimento(s)
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {servicesData.map((service) => {
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start justify-between gap-3 ${
                        isSelected
                          ? "bg-olive-900 text-sand-50 border-olive-900 shadow-md scale-[1.01]"
                          : "bg-sand-200/60 hover:bg-sand-200 border-sand-300/50 text-ink-pure"
                      }`}
                    >
                      <div>
                        <span className={`font-sans font-bold text-xs sm:text-sm block leading-snug ${isSelected ? "text-sand-50" : "text-ink-pure"}`}>
                          {service.title}
                        </span>
                        <span className={`font-mono text-[10px] block mt-1 ${isSelected ? "text-gold-300" : "text-olive-700 font-semibold"}`}>
                          {service.priceEstimate} · {service.duration}
                        </span>
                      </div>

                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border mt-0.5 ${
                        isSelected
                          ? "bg-gold-500 text-olive-950 border-gold-400"
                          : "border-ink/20"
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Client Info & Preferences */}
            <div className="p-8 rounded-3xl bg-sand-100 border border-sand-300/60 shadow-sm space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-olive-900 text-sand-50 font-mono text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <h2 className="font-sans font-bold text-xl text-ink-pure">
                  Seus Dados & Preferências
                </h2>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex: Maria Clara"
                  className="w-full px-5 py-3.5 rounded-2xl bg-sand-200/60 border border-sand-300/60 text-sm font-sans focus:outline-none focus:border-olive-800 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted mb-2">
                    Dia de Preferência
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-2xl bg-sand-200/60 border border-sand-300/60 text-xs font-mono focus:outline-none focus:border-olive-800 transition-colors cursor-pointer"
                  >
                    <option>Esta semana (o quanto antes)</option>
                    <option>Terça-feira</option>
                    <option>Quarta-feira</option>
                    <option>Quinta-feira</option>
                    <option>Sexta-feira</option>
                    <option>Sábado</option>
                    <option>Próxima semana</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted mb-2">
                    Turno de Preferência
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="w-full px-5 py-3.5 rounded-2xl bg-sand-200/60 border border-sand-300/60 text-xs font-mono focus:outline-none focus:border-olive-800 transition-colors cursor-pointer"
                  >
                    <option>Manhã (08h às 12h)</option>
                    <option>Tarde (13h às 17h)</option>
                    <option>Final da Tarde (17h às 19h)</option>
                    <option>Qualquer horário disponível</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted mb-2">
                  Observações ou Estilo Desejado (Opcional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Gostaria de unhas amendoadas, francesinha fina ou levar foto de referência..."
                  rows={3}
                  className="w-full px-5 py-3.5 rounded-2xl bg-sand-200/60 border border-sand-300/60 text-xs font-sans focus:outline-none focus:border-olive-800 transition-colors resize-none"
                />
              </div>
            </div>

          </div>

          {/* Right Summary: Live Order Preview */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-8 rounded-3xl bg-olive-950 text-sand-100 shadow-luxury-lg border border-white/10">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-400 font-bold block">
                    RESUMO DO AGENDAMENTO
                  </span>
                  <h3 className="font-sans font-bold text-xl text-sand-50 mt-1">
                    Studio Paula Lima
                  </h3>
                </div>
                <Sparkles className="w-5 h-5 text-gold-400" />
              </div>

              <div className="py-6 space-y-3 border-b border-white/10">
                <span className="font-mono text-[9px] uppercase tracking-wider text-sand-400 block mb-2">
                  Procedimento(s) Selecionado(s):
                </span>
                {selectedServicesObjects.map((service) => (
                  <div key={service.id} className="flex items-start justify-between gap-3 text-xs">
                    <span className="text-sand-100 font-medium leading-snug">
                      • {service.title}
                    </span>
                    <span className="font-mono text-gold-300 shrink-0 text-[11px]">
                      {service.priceEstimate}
                    </span>
                  </div>
                ))}
              </div>

              <div className="py-6 space-y-2 border-b border-white/10 font-mono text-xs text-sand-300">
                <div className="flex items-center justify-between">
                  <span className="text-sand-400">Cliente:</span>
                  <span className="text-sand-100 font-semibold">{clientName.trim() || "A preencher"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sand-400">Preferência:</span>
                  <span className="text-sand-100">{preferredDay}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sand-400">Turno:</span>
                  <span className="text-sand-100">{preferredShift}</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={handleBooking}
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-olive-950 font-mono text-xs uppercase tracking-[0.16em] font-bold shadow-glow-gold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{isSubmitting ? "Formatando..." : "Enviar Pedido no WhatsApp"}</span>
                </button>
                <p className="font-mono text-[9px] text-center text-sand-400 mt-3 leading-relaxed">
                  Você será redirecionada para o WhatsApp oficial da Paula Lima com todos os dados preenchidos para confirmação de horário.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-sand-100 border border-sand-300/50 flex items-center gap-3 text-xs text-ink-muted">
              <CheckCircle2 className="w-5 h-5 text-olive-700 shrink-0" />
              <span>
                Atendimento com hora marcada e 100% de pontualidade na Cidade Universitária, Recife.
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
