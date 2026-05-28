import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/certifications", label: "Certifications" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 md:px-6 h-14 relative border-gradient",
            scrolled ? "glass-strong" : "glass",
          )}
        >
          <Link to="/" className="flex items-center gap-3 group" style={{ perspective: 1200 }}>
            <motion.span
              whileHover={{ rotateX: 12, rotateY: -12, rotateZ: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                transformStyle: "preserve-3d",
                background:
                  "linear-gradient(145deg, oklch(0.20 0.008 270) 0%, oklch(0.08 0.003 270) 100%)",
                boxShadow:
                  "inset 0 2px 4px oklch(1 0 0 / 0.12), inset 0 -2px 8px oklch(0 0 0 / 0.8), 0 0 0 1px oklch(0.82 0.13 85 / 0.4), 0 20px 40px -10px oklch(0.82 0.13 85 / 0.5), 0 -8px 16px -4px oklch(0 0 0 / 0.4)",
              }}
            >
              {/* Conic gold halo behind glyph */}
              <span
                aria-hidden
                className="absolute -inset-px rounded-xl pointer-events-none opacity-90"
                style={{
                  background:
                    "conic-gradient(from 140deg, oklch(0.98 0.06 92) 0deg, oklch(0.88 0.15 88) 80deg, oklch(0.82 0.13 85) 180deg, oklch(0.88 0.15 88) 260deg, oklch(0.98 0.06 92) 360deg)",
                  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "2px",
                  transform: "translateZ(-2px)",
                }}
              />

              {/* 3D Text Effect - Front Layer */}
              <div style={{ transformStyle: "preserve-3d", transform: "translateZ(8px)" }}>
                <svg
                  viewBox="0 0 40 40"
                  className="relative h-7 w-7"
                  style={{ filter: "drop-shadow(0 2px 4px oklch(0 0 0 / 0.8))" }}
                >
                  <defs>
                    <linearGradient id="logoGold3D" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.98 0.06 92)" />
                      <stop offset="50%" stopColor="oklch(0.85 0.15 88)" />
                      <stop offset="100%" stopColor="oklch(0.65 0.12 82)" />
                    </linearGradient>
                    <filter id="glow3d">
                      <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* M strokes */}
                  <path
                    d="M5 32 V10 L14 24 L23 10 V32"
                    fill="none"
                    stroke="url(#logoGold3D)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow3d)"
                  />
                  {/* Z overlapping */}
                  <path
                    d="M21 11 H35 L21 31 H35"
                    fill="none"
                    stroke="url(#logoGold3D)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow3d)"
                  />
                </svg>
              </div>

              {/* 3D Depth Layer */}
              <div
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(-4px)",
                  position: "absolute",
                }}
              >
                <svg
                  viewBox="0 0 40 40"
                  className="absolute h-7 w-7"
                  style={{ opacity: 0.4, filter: "blur(1px)" }}
                >
                  <defs>
                    <linearGradient id="logoGoldDark" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.65 0.12 82)" />
                      <stop offset="100%" stopColor="oklch(0.45 0.08 78)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M5 32 V10 L14 24 L23 10 V32"
                    fill="none"
                    stroke="url(#logoGoldDark)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 11 H35 L21 31 H35"
                    fill="none"
                    stroke="url(#logoGoldDark)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Specular sweep */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
              >
                <span
                  className="absolute -inset-[50%] opacity-70"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 30%, oklch(1 0 0 / 0.4) 50%, transparent 70%)",
                    mixBlendMode: "overlay",
                    animation: "shimmer 4s linear infinite",
                  }}
                />
              </span>

              {/* Ambient Light */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 20px oklch(0.82 0.13 85 / 0.15)",
                  transformStyle: "preserve-3d",
                  transform: "translateZ(5px)",
                }}
              />
            </motion.span>

            <span className="flex flex-col leading-none">
              <span className="font-display text-sm tracking-[0.32em] text-metallic">ZEESHAN</span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-muted-foreground mt-1">
                Designer · Engineer
              </span>
            </span>
          </Link>


          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "relative px-3 py-1.5 text-xs uppercase tracking-wider transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-md bg-white/5 border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/contact"
              className="text-xs uppercase tracking-wider px-4 py-2 rounded-lg bg-gradient-to-b from-[oklch(0.88_0.10_90)] to-[oklch(0.65_0.12_75)] text-[oklch(0.16_0.005_270)] font-semibold hover:brightness-110 transition-all shadow-[var(--shadow-gold)]"
            >
              Hire Me
            </Link>
          </div>

          <button
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/5"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl border-gradient p-3"
            >
              <div className="grid">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={cn(
                      "px-3 py-2.5 rounded-md text-sm uppercase tracking-wider",
                      pathname === l.to ? "text-foreground bg-white/5" : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
