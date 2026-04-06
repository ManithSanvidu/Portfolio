import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Certifications } from "./Certifications";
import { Contact } from "./Contact";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PortfolioPage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    if (hash) {
      requestAnimationFrame(() => scrollToId(hash));
    }
  }, [location.hash]);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[100dvh] snap-start snap-always scroll-mt-20 flex flex-col"
        aria-label="Home"
      >
        <Home />
      </section>

      <section
        id="about"
        className="relative min-h-[100dvh] snap-start snap-always scroll-mt-20 border-t border-white/5 flex flex-col"
        aria-label="About"
      >
        <About />
      </section>

      <section
        id="projects"
        className="relative min-h-[100dvh] snap-start snap-always scroll-mt-20 border-t border-white/5 flex flex-col"
        aria-label="Projects"
      >
        <Projects />
      </section>

      <section
        id="certifications"
        className="relative min-h-[100dvh] snap-start snap-always scroll-mt-20 border-t border-white/5 flex flex-col"
        aria-label="Certifications"
      >
        <Certifications />
      </section>

      <section
        id="contact"
        className="relative min-h-[100dvh] snap-start snap-always scroll-mt-20 border-t border-white/5 flex flex-col"
        aria-label="Contact"
      >
        <Contact />
      </section>
    </>
  );
}
