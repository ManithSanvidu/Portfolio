/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";

/**
 * 3D PIXEL CURSOR CONFIGURATION
 * Tweak colors, sizing, smoothing, and physics here.
 */
const CURSOR_CONFIG = {
  size: 15, // Width/height of the voxel arrow in px
  lerpFactor: 0.25, // Motion smoothing factor (0.1 - 0.4)
  maxTiltAngle: 25, // Maximum 3D tilt in degrees based on velocity
  tiltDamping: 0.82, // Velocity decay rate for tilt return
  accentColor: "#b783f5", // Primary theme fill color
  accentHighlight: "#d8b4fe", // Edge highlight
  outlineColor: "#0f081d", // Dark voxel outline
  shadowColor: "rgba(0, 0, 0, 0.45)", // Blocky drop shadow
  particleCount: 6, // Burst particles on click
};

// 12x16 Arrow Bitmap Matrix (0: Transparent, 1: Dark Outline, 2: Accent Fill, 3: Highlight)
const ARROW_VOXEL_GRID = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 3, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0],
  [1, 3, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0],
  [1, 3, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0],
  [1, 3, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0],
  [1, 3, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0],
  [1, 3, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0],
  [1, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0],
  [1, 3, 2, 3, 2, 2, 1, 0, 0, 0, 0, 0],
  [1, 2, 3, 0, 1, 2, 2, 1, 0, 0, 0, 0],
  [1, 3, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  color: string;
}

export function CustomCursor() {
  const [isSupported, setIsSupported] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "pointer" | "card" | "text">("default");
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Smooth position tracking refs
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ x: 0, y: 0 });
  const tilt = useRef({ x: 0, y: 0 });
  const isVisible = useRef(false);
  const rAF = useRef<number | null>(null);

  useEffect(() => {
    // Only mount on desktop with fine mouse pointer
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsSupported(true);
    document.body.classList.add("custom-cursor-active");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        currentPos.current.x = e.clientX;
        currentPos.current.y = e.clientY;
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.closest("input, textarea, [contenteditable='true']")) {
          setHoverType("text");
        } else if (
          target.closest(
            "[data-cursor='view'], .perspective-\\[1200px\\], .project-card"
          )
        ) {
          setHoverType("card");
        } else if (
          target.closest(
            "a, button, [role='button'], .cursor-pointer, select, [tabindex]:not([tabindex='-1'])"
          )
        ) {
          setHoverType("pointer");
        } else {
          setHoverType("default");
        }
      }
    };

    const onMouseDown = () => {
      setIsClicking(true);

      // Spawn burst particles around click tip
      if (!prefersReducedMotion) {
        const newParticles: Particle[] = Array.from(
          { length: CURSOR_CONFIG.particleCount },
          (_, i) => {
            const angle = (Math.PI * 2 * i) / CURSOR_CONFIG.particleCount + (Math.random() - 0.5);
            const speed = 1.8 + Math.random() * 2.5;
            return {
              id: Date.now() + i,
              x: mousePos.current.x,
              y: mousePos.current.y,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              size: 4 + Math.floor(Math.random() * 3),
              life: 1,
              color: i % 2 === 0 ? CURSOR_CONFIG.accentColor : CURSOR_CONFIG.accentHighlight,
            };
          }
        );
        setParticles((prev) => [...prev.slice(-12), ...newParticles]);
      }
    };

    const onMouseUp = () => {
      setIsClicking(false);
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      document.body.classList.remove("custom-cursor-active");
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      document.body.classList.add("custom-cursor-active");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Animation loop (requestAnimationFrame)
    const updateMotion = () => {
      if (cursorRef.current && isVisible.current) {
        const dx = mousePos.current.x - currentPos.current.x;
        const dy = mousePos.current.y - currentPos.current.y;

        // Linear interpolation for silky 60fps tracking
        currentPos.current.x += dx * CURSOR_CONFIG.lerpFactor;
        currentPos.current.y += dy * CURSOR_CONFIG.lerpFactor;

        velocity.current.x = dx;
        velocity.current.y = dy;

        // 3D velocity tilt
        if (!prefersReducedMotion) {
          const targetTiltX = Math.max(
            -CURSOR_CONFIG.maxTiltAngle,
            Math.min(CURSOR_CONFIG.maxTiltAngle, -dy * 1.2)
          );
          const targetTiltY = Math.max(
            -CURSOR_CONFIG.maxTiltAngle,
            Math.min(CURSOR_CONFIG.maxTiltAngle, dx * 1.2)
          );

          tilt.current.x += (targetTiltX - tilt.current.x) * 0.18;
          tilt.current.y += (targetTiltY - tilt.current.y) * 0.18;
          tilt.current.x *= CURSOR_CONFIG.tiltDamping;
          tilt.current.y *= CURSOR_CONFIG.tiltDamping;
        } else {
          tilt.current.x = 0;
          tilt.current.y = 0;
        }

        const posX = currentPos.current.x;
        const posY = currentPos.current.y;

        cursorRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0px) rotateX(${tilt.current.x}deg) rotateY(${tilt.current.y}deg)`;
        cursorRef.current.style.opacity = isVisible.current ? "1" : "0";
      }

      rAF.current = requestAnimationFrame(updateMotion);
    };

    rAF.current = requestAnimationFrame(updateMotion);

    return () => {
      if (rAF.current) cancelAnimationFrame(rAF.current);
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  // Particle physics tick
  useEffect(() => {
    if (particles.length === 0) return;

    const timer = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.08,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);

    return () => clearInterval(timer);
  }, [particles.length]);

  if (!isSupported) return null;

  const isTextHover = hoverType === "text";
  const isCardHover = hoverType === "card";
  const isPointerHover = hoverType === "pointer";

  return (
    <>
      {/* Global CSS to suppress OS pointer strictly when custom cursor is live */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          body.custom-cursor-active,
          body.custom-cursor-active * {
            cursor: none !important;
          }
          body.custom-cursor-active input,
          body.custom-cursor-active textarea,
          body.custom-cursor-active [contenteditable="true"] {
            cursor: text !important;
          }
        }
      `}</style>

      {/* Main Cursor Stage */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[999999] will-change-transform origin-top-left"
        style={{
          display: isTextHover ? "none" : "block",
          transformStyle: "preserve-3d",
          perspective: "600px",
        }}
      >
        <div
          className={`relative transition-transform duration-200 ease-out ${
            isClicking ? "scale-90" : isPointerHover ? "scale-125" : "scale-100"
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Card Hover Mode: 3D Pixel Badge */}
          {isCardHover ? (
            <div
              className="relative -top-3 -left-3 px-3 py-1.5 rounded-lg bg-[#b783f5] text-black text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_10px_25px_rgba(183,131,245,0.6)] border border-white/40 flex items-center gap-1.5"
              style={{
                imageRendering: "pixelated",
                transform: "translateZ(8px)",
              }}
            >
              <span>VIEW</span>
              <span className="text-xs">↗</span>
            </div>
          ) : (
            /* Standard 3D Voxel Arrow Cursor */
            <div
              className="relative"
              style={{
                width: `${CURSOR_CONFIG.size}px`,
                height: `${(CURSOR_CONFIG.size * 16) / 12}px`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Layer 0: Blocky Soft Drop Shadow */}
              <svg
                viewBox="0 0 12 16"
                className="absolute top-1 left-1.5 w-full h-full opacity-40 blur-[1px]"
                style={{
                  transform: "translateZ(-8px)",
                  imageRendering: "pixelated",
                }}
              >
                {ARROW_VOXEL_GRID.map((row, y) =>
                  row.map((cell, x) => {
                    if (cell === 0) return null;
                    return (
                      <rect
                        key={`shadow-${x}-${y}`}
                        x={x}
                        y={y}
                        width="1"
                        height="1"
                        fill="#000000"
                      />
                    );
                  })
                )}
              </svg>

              {/* Layer 1: Dark Extrusion Base (translateZ: 0px) */}
              <svg
                viewBox="0 0 12 16"
                className="absolute top-0 left-0 w-full h-full drop-shadow-md"
                style={{
                  transform: "translateZ(0px)",
                  imageRendering: "pixelated",
                }}
              >
                {ARROW_VOXEL_GRID.map((row, y) =>
                  row.map((cell, x) => {
                    if (cell === 0) return null;
                    return (
                      <rect
                        key={`base-${x}-${y}`}
                        x={x}
                        y={y}
                        width="1"
                        height="1"
                        fill={CURSOR_CONFIG.outlineColor}
                      />
                    );
                  })
                )}
              </svg>

              {/* Layer 2: Middle Voxel Body (translateZ: 3px) */}
              <svg
                viewBox="0 0 12 16"
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform: "translateZ(3px)",
                  imageRendering: "pixelated",
                }}
              >
                {ARROW_VOXEL_GRID.map((row, y) =>
                  row.map((cell, x) => {
                    if (cell === 0) return null;
                    const fill =
                      cell === 1
                        ? CURSOR_CONFIG.outlineColor
                        : cell === 3
                        ? CURSOR_CONFIG.accentHighlight
                        : CURSOR_CONFIG.accentColor;
                    return (
                      <rect
                        key={`mid-${x}-${y}`}
                        x={x}
                        y={y}
                        width="1"
                        height="1"
                        fill={fill}
                      />
                    );
                  })
                )}
              </svg>

              {/* Layer 3: Top Beveled Cap with Accent Glow (translateZ: 6px) */}
              <svg
                viewBox="0 0 12 16"
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform: "translateZ(6px)",
                  imageRendering: "pixelated",
                }}
              >
                {ARROW_VOXEL_GRID.map((row, y) =>
                  row.map((cell, x) => {
                    if (cell === 0) return null;
                    const fill =
                      cell === 1
                        ? CURSOR_CONFIG.outlineColor
                        : cell === 3
                        ? "#ffffff"
                        : isPointerHover
                        ? "#d8b4fe"
                        : CURSOR_CONFIG.accentColor;
                    return (
                      <rect
                        key={`top-${x}-${y}`}
                        x={x}
                        y={y}
                        width="1"
                        height="1"
                        fill={fill}
                      />
                    );
                  })
                )}
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Click Pixel Burst Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-[999999] will-change-transform shadow-[0_0_8px_rgba(183,131,245,0.8)]"
          style={{
            transform: `translate3d(${p.x}px, ${p.y}px, 0)`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.life,
            imageRendering: "pixelated",
          }}
        />
      ))}
    </>
  );
}
