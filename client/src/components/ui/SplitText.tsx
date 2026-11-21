import React from "react";
import { useInView } from "../../hooks/useInView";

interface SplitTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  className?: string;
  accentBar?: boolean;
  accentBarClassName?: string;
  staggerMs?: number; // Word stagger, default 80ms
  startDelayMs?: number; // Initial delay in ms
  highlightWords?: string[]; // Words that should take the accent color (#b783f5)
}

export function SplitText({
  text,
  as: Tag = "h2",
  className = "",
  accentBar = true,
  accentBarClassName = "bg-[#b783f5]",
  staggerMs = 80,
  startDelayMs = 0,
  highlightWords = [],
}: SplitTextProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.25, triggerOnce: true });

  const words = text.split(" ");

  return (
    <div ref={ref} className={`split-text-container ${isInView ? "in-view" : ""}`}>
      {accentBar && (
        <div
          className={`split-text-accent-bar mb-3 sm:mb-4 rounded-full ${accentBarClassName}`}
          aria-hidden="true"
        />
      )}
      <Tag className={`split-text-heading ${className}`} aria-label={text}>
        {words.map((word, i) => {
          const isAccent = highlightWords.some(
            (hw) => word.toLowerCase().includes(hw.toLowerCase())
          );
          return (
            <span
              key={`${word}-${i}`}
              className="split-text-mask inline-block overflow-hidden align-top"
              aria-hidden="true"
            >
              <span
                className={`split-text-word inline-block will-change-transform ${
                  isAccent ? "text-[#b783f5]" : ""
                }`}
                style={
                  {
                    "--i": i,
                    "--stagger-delay": `${startDelayMs + i * staggerMs}ms`,
                  } as React.CSSProperties
                }
              >
                {word}
                {i < words.length - 1 && "\u00A0"}
              </span>
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
