import React from "react";
import { BadgeProps } from "../../types";

export default function Badge({ children, variant = "subtle", className = "" }: BadgeProps) {
  const variants = {
    subtle: "bg-sand-200/80 text-olive-900 border border-sand-300/60",
    dark: "bg-olive-950/80 text-sand-100 border border-white/10",
    gold: "bg-gold-100/90 text-gold-900 border border-gold-300",
    olive: "bg-olive-700 text-sand-50",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] font-medium rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
