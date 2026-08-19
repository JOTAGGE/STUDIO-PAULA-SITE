import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ButtonProps } from "../../types";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "dark",
  size = "md",
  icon = true,
  className = "",
  target,
  rel,
  disabled = false,
  type = "button"
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-mono uppercase tracking-[0.15em] transition-all duration-300 font-medium select-none group relative overflow-hidden";

  const sizeStyles = {
    sm: "text-[10px] px-4 py-2.5 gap-2",
    md: "text-[11px] px-6 py-3.5 gap-2.5",
    lg: "text-xs px-8 py-4 gap-3",
    link: "text-[11px] px-0 py-1.5 gap-1.5 tracking-[0.12em]"
  }[size];

  const variantStyles = {
    dark: "bg-olive-900 text-sand-100 hover:bg-olive-950 hover:text-white shadow-sm hover:shadow-luxury",
    light: "bg-sand-100 text-olive-900 hover:bg-white hover:text-ink-pure shadow-sm border border-sand-300/40",
    gold: "bg-gradient-to-r from-gold-600 to-gold-500 text-sand-950 font-semibold hover:brightness-110 shadow-glow-gold",
    outline: "border border-ink/20 hover:border-ink text-ink-pure bg-transparent hover:bg-ink hover:text-sand-100",
    link: "bg-transparent text-ink-pure border-b border-ink/30 hover:border-ink hover:text-olive-900 pb-1"
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-80 group-hover:opacity-100" />
      )}
    </>
  );

  const combinedClass = `${baseStyles} ${sizeStyles} ${variantStyles} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target || (href.startsWith("http") ? "_blank" : undefined)}
        rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
        className={combinedClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClass}>
      {content}
    </button>
  );
}
