import React from "react";
import { SectionHeadingProps } from "../../types";

export default function SectionHeading({
  number = "",
  label = "",
  title,
  italicWord = "",
  description = "",
  align = "left",
  theme = "light",
  className = "",
  action = null
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  if (align === "split") {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-8 border-b ${isDark ? "border-white/10" : "border-ink/10"} ${className}`}>
        <div className="lg:col-span-7">
          {(number || label) && (
            <span className={`block font-mono text-[10px] tracking-[0.25em] uppercase mb-4 ${isDark ? "text-sand-300/70" : "text-olive-700/80"}`}>
              {number && `${number} / `}{label}
            </span>
          )}
          <h2 className={`editorial-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${isDark ? "text-sand-100" : "text-ink-pure"}`}>
            {title} {italicWord && <i>{italicWord}</i>}
          </h2>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-end gap-6">
          {description && (
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-sand-300" : "text-ink-muted"}`}>
              {description}
            </p>
          )}
          {action && <div>{action}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={`${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"} ${className}`}>
      {(number || label) && (
        <span className={`inline-block font-mono text-[10px] tracking-[0.25em] uppercase mb-3 ${isDark ? "text-sand-300/70" : "text-olive-700/80"}`}>
          {number && `${number} / `}{label}
        </span>
      )}
      <h2 className={`editorial-title text-4xl sm:text-5xl md:text-6xl ${isDark ? "text-sand-100" : "text-ink-pure"}`}>
        {title} {italicWord && <i>{italicWord}</i>}
      </h2>
      {description && (
        <p className={`mt-5 text-xs sm:text-sm leading-relaxed ${isDark ? "text-sand-300" : "text-ink-muted"}`}>
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
