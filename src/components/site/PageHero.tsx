import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SmartCount } from "@/components/site/CountUp";

type Stat = { k: string; v: string };
type CTA = { label: string; to?: string; href?: string; primary?: boolean; icon?: React.ReactNode };

type Props = {
  eyebrow: string;
  title: React.ReactNode; // can be string or array of words to split
  words?: string[]; // optional split words for stagger
  description: string;
  image: string;
  imageAlt: string;
  stats?: Stat[];
  ctas?: CTA[];
};

export function PageHero({
  eyebrow,
  title,
  words,
  description,
  image,
  imageAlt,
  stats = [],
  ctas = [],
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 220, damping: 24, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 220, damping: 24, mass: 0.5 });
  const rotateY = useTransform(smx, [-0.5, 0.5], [-22, 22]);
  const rotateX = useTransform(smy, [-0.5, 0.5], [16, -16]);
  const tShift = useTransform(smx, [-0.5, 0.5], [-10, 10]);

  const titleWords = words ?? (typeof title === "string" ? title.split(" ") : []);

  return (
    <section
      ref={ref}
      className="relative min-h-[82svh] -mt-24 pt-28 overflow-hidden noise"
      style={{ perspective: 1400 }}
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 [background:var(--gradient-radial-spot)] pointer-events-none" />

      <motion.div
        aria-hidden
        className="absolute -top-32 -left-20 h-[24rem] w-[24rem] rounded-full blur-3xl opacity-25 animate-float"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.06 80) 0%, transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20 animate-float"
        style={{
          background: "radial-gradient(circle, oklch(0.40 0.04 260) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <motion.div
        style={{ opacity: opacityHero }}
        className="relative mx-auto max-w-7xl px-4 pt-10 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full glass border-gradient px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.82_0.13_85)] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.82_0.13_85)]" />
          </span>
          {eyebrow}
        </motion.div>

        <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
          {/* Text column */}
          <motion.div style={{ y: yText, scale: scaleText }} className="lg:col-span-7">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
            >
              {titleWords.length > 0 ? (
                titleWords.map((w, i) => (
                  <motion.span
                    key={`${w}-${i}`}
                    variants={{
                      hidden: { y: 80, opacity: 0, rotateX: -40 },
                      show: { y: 0, opacity: 1, rotateX: 0 },
                    }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-metallic mr-[0.25em]"
                    style={{ transformPerspective: 800 }}
                  >
                    {w}
                    {i === titleWords.length - 1 && (
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "40%" }}
                        transition={{ delay: 0.9, duration: 1 }}
                        className="block h-[3px] mt-3 bg-gradient-to-r from-[oklch(0.82_0.13_85)] to-transparent"
                      />
                    )}
                  </motion.span>
                ))
              ) : (
                <span className="text-metallic">{title}</span>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
            >
              {description}
            </motion.p>

            {ctas.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                {ctas.map((c, i) =>
                  c.to ? (
                    <Link
                      key={i}
                      to={c.to}
                      className={
                        c.primary
                          ? "group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-b from-[oklch(0.92_0.10_90)] to-[oklch(0.62_0.12_75)] text-[oklch(0.14_0.005_270)] shadow-[var(--shadow-gold)] hover:brightness-110 transition-all"
                          : "inline-flex items-center gap-2 rounded-xl glass border-gradient px-5 py-3 text-sm font-medium hover:text-[oklch(0.88_0.10_90)] transition-colors"
                      }
                    >
                      {c.icon}
                      {c.label}
                      {c.primary && (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </Link>
                  ) : (
                    <a
                      key={i}
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        c.primary
                          ? "group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-b from-[oklch(0.92_0.10_90)] to-[oklch(0.62_0.12_75)] text-[oklch(0.14_0.005_270)] shadow-[var(--shadow-gold)] hover:brightness-110 transition-all"
                          : "inline-flex items-center gap-2 rounded-xl glass border-gradient px-5 py-3 text-sm font-medium hover:text-[oklch(0.88_0.10_90)] transition-colors"
                      }
                    >
                      {c.icon}
                      {c.label}
                    </a>
                  ),
                )}
              </motion.div>
            )}

            {stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-12 grid grid-cols-3 max-w-md gap-6 text-sm"
              >
                {stats.map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-3xl text-metallic">
                      <SmartCount value={s.k} />
                    </div>
                    <div className="text-muted-foreground text-xs uppercase tracking-widest mt-1">
                      {s.v}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* 3D image column */}
          <motion.div
            style={{ y: yImg }}
            className="lg:col-span-5"
            onMouseMove={(e) => {
              const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              mx.set((e.clientX - r.left) / r.width - 0.5);
              my.set((e.clientY - r.top) / r.height - 0.5);
            }}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square w-full max-w-md mx-auto"
              style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-full border border-dashed border-white/10"
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  style={{ rotateX, rotateY, x: tShift, transformStyle: "preserve-3d" }}
                  className="relative h-full w-full rounded-[2rem] overflow-hidden glass-strong border-gradient shadow-[var(--shadow-elevated)] will-change-transform"
                >
                  <div
                    aria-hidden
                    className="absolute -inset-1 rounded-[2rem] opacity-70 blur-2xl"
                    style={{
                      background:
                        "conic-gradient(from 120deg, oklch(0.55 0.01 270 / 0.35), transparent 30%, oklch(0.30 0.008 265 / 0.35) 60%, transparent 80%, oklch(0.55 0.01 270 / 0.35))",
                    }}
                  />
                  <img
                    src={image}
                    alt={imageAlt}
                    width={1024}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, oklch(0.14 0.005 270 / 0.6) 100%)",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
