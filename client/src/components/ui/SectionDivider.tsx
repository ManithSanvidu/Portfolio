import React from "react";
import { useInView } from "../../hooks/useInView";

interface SectionDividerProps {
  className?: string;
  accentColor?: string; // Optional custom color, defaults to currentColor (#b783f5)
}

export function SectionDivider({
  className = "",
  accentColor = "text-[#b783f5]",
}: SectionDividerProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.25, triggerOnce: true });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative w-full py-8 sm:py-12 flex items-center justify-center overflow-hidden pointer-events-none select-none ${accentColor} ${className}`}
    >
      <div className={`relative flex items-center justify-center section-divider-track ${isInView ? "in-view" : ""}`}>
        {/* Left Line */}
        <span className="section-divider-line section-divider-line-left bg-current" />

        {/* Center Dot */}
        <span className="section-divider-dot bg-current shadow-[0_0_12px_currentColor]" />

        {/* Right Line */}
        <span className="section-divider-line section-divider-line-right bg-current" />
      </div>
    </div>
  );
}
