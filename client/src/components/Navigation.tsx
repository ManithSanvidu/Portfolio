import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", hash: "home" },
  { name: "About", hash: "about" },
  { name: "Projects", hash: "projects" },
  { name: "Certifications", hash: "certifications" },
  { name: "Contact", hash: "contact" },
] as const;

function scrollToSection(hash: string) {
  const el = document.getElementById(hash);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentHash = location.hash.replace(/^#/, "") || "home";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close mobile menu when section changes
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, hash: string) => {
      e.preventDefault();
      navigate({ pathname: "/", hash });
      requestAnimationFrame(() => scrollToSection(hash));
    },
    [navigate]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-950/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
          <Link to="/" className="group shrink-0" onClick={(e) => handleNavClick(e, "home")}>
            <motion.div
              className="text-xl font-bold bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {"<Dev />"}
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentHash === link.hash;
              return (
                <Link
                  key={link.hash}
                  to={{ pathname: "/", hash: link.hash }}
                  onClick={(e) => handleNavClick(e, link.hash)}
                >
                  <Button
                    variant="ghost"
                    className={`relative font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="md:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-slate-950/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentHash === link.hash;
                return (
                  <Link
                    key={link.hash}
                    to={{ pathname: "/", hash: link.hash }}
                    onClick={(e) => handleNavClick(e, link.hash)}
                  >
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className={`block px-4 py-3 rounded-xl transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/15 to-violet-600/15 text-white border border-white/10"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
