import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Certifications } from "./Certifications";
import { Contact } from "./Contact";
import { useInView } from "../../hooks/useInView";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionWrapper({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  const [ref] = useInView<HTMLElement>({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-[100dvh] snap-start snap-always scroll-mt-20 flex flex-col section-reveal"
      aria-label={label}
    >
      {children}
    </section>
  );
}

export function PortfolioPage() {
  const location = useLocation();

  useEffect(() => {
    // If page was reloaded, prevent auto-scrolling to any hash and stay at top
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const isReload =
      (navEntries.length > 0 && navEntries[0].type === "reload") ||
      // @ts-expect-error fallback
      performance?.navigation?.type === 1;

    if (isReload) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const hash = location.hash.replace(/^#/, "");
    if (hash) {
      requestAnimationFrame(() => scrollToId(hash));
    }
  }, [location.hash]);

  return (
    <>
      {/* Home Section: Visible immediately on load, no delay */}
      <section
        id="home"
        className="relative min-h-[100dvh] snap-start snap-always scroll-mt-20 flex flex-col in-view"
        aria-label="Home"
      >
        <Home />
      </section>

      {/* About Section: Scroll-triggered reveal */}
      <SectionWrapper id="about" label="About">
        <About />
      </SectionWrapper>

      {/* Projects Section: Scroll-triggered reveal */}
      <SectionWrapper id="projects" label="Projects">
        <Projects />
      </SectionWrapper>

      {/* Certifications Section: Scroll-triggered reveal */}
      <SectionWrapper id="certifications" label="Certifications">
        <Certifications />
      </SectionWrapper>

      {/* Contact Section: Scroll-triggered reveal */}
      <SectionWrapper id="contact" label="Contact">
        <Contact />
      </SectionWrapper>
    </>
  );
}
