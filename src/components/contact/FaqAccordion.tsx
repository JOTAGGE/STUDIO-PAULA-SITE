import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqsData } from "../../data/faqsData";

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqsData.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl bg-sand-100/90 border border-sand-300/50 overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-sans font-bold text-sm sm:text-base text-ink-pure hover:text-olive-900"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-olive-700 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-olive-900" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-ink/5 animate-in fade-in duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
