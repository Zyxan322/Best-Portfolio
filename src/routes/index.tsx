import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BrainCircuit,
  Code2,
  Compass,
  Download,
  Eye,
  Flame,
  Gamepad2,
  Gauge,
  Github,
  Layers,
  Linkedin,
  Mail,
  MousePointer2,
  Plus,
  Quote,
  Rocket,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wand2,
  Zap,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { TiltCard } from "@/components/site/TiltCard";
import { CountUp, SmartCount } from "@/components/site/CountUp";
import heroPortrait from "@/assets/zeeshan-hero.png";
import imgProgmize from "@/assets/project-progmize.jpg";
import imgGst from "@/assets/project-gst.jpg";
import imgSentax from "@/assets/project-sentax.jpg";
import imgAi from "@/assets/project-ai.jpg";
import imgEcom from "@/assets/project-ecom.jpg";
import imgFitness from "@/assets/project-fitness.jpg";
import imgDiscover from "@/assets/process-discover.jpg";
import imgDesign from "@/assets/process-design.jpg";
import imgBuild from "@/assets/process-build.jpg";
import imgLaunch from "@/assets/process-launch.jpg";
import wfBrief from "@/assets/wf-brief.jpg";
import wfAudit from "@/assets/wf-audit.jpg";
import wfSystem from "@/assets/wf-system.jpg";
import wfSurfaces from "@/assets/wf-surfaces.jpg";
import wfEngineer from "@/assets/wf-engineer.jpg";
import wfMeasure from "@/assets/wf-measure.jpg";
import wfCompound from "@/assets/wf-compound.jpg";
import gameGta5 from "@/assets/game-gta5.jpg";
import gameGta6 from "@/assets/game-gta6.jpg";
import gameRdr2 from "@/assets/game-rdr2.jpg";
import gameCyberpunk from "@/assets/game-cyberpunk.jpg";
import gameCod from "@/assets/game-cod.jpg";
import gameTombRaider from "@/assets/game-tombraider.jpg";
import gameGow from "@/assets/game-gow.jpg";
import gameWitcher from "@/assets/game-witcher.jpg";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Muhammad Zeeshan — Senior Web Developer & SaaS UX Expert</title>
        <meta
          name="description"
          content="Cinematic portfolio of Muhammad Zeeshan — SaaS UI/UX, frontend engineering, and AI-powered workflows. Premium digital products engineered with precision."
        />
        <meta property="og:title" content="Muhammad Zeeshan — Portfolio" />
        <meta
          property="og:description"
          content="Building immersive digital products with design precision and AI-powered workflows."
        />
        <meta property="og:image" content={heroPortrait} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://github.com/Zyxan322/Best-Portfolio/" />
      </Helmet>
      <Hero />
      <Marquee />
      <Capabilities />
      <Philosophy />
      <Process />
      <FeaturedProjects />
      <StackOrbit />
      <Workflow />
      <StatsBand />
      <TestimonialPreview />
      <Journal />
      <FAQ />
      <BeyondCode />
      <CTA />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    HERO                                    */
/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax depth
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.9], [1, 0.2]);

  // 3D tilt for portrait (mouse driven)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 220, damping: 24, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 220, damping: 24, mass: 0.5 });
  const rotateY = useTransform(smx, [-0.5, 0.5], [-26, 26]);
  const rotateX = useTransform(smy, [-0.5, 0.5], [20, -20]);
  const tShift = useTransform(smx, [-0.5, 0.5], [-12, 12]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] pt-28 overflow-hidden noise"
      style={{ perspective: 1400 }}
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 [background:var(--gradient-radial-spot)] pointer-events-none" />

      <motion.div
        aria-hidden
        className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30 animate-float"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.06 80) 0%, transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-25 animate-float"
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
          Available for select engagements · 2026
        </motion.div>

        <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
          {/* Text column */}
          <motion.div style={{ y: yText, scale: scaleText }} className="lg:col-span-7">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
            >
              {["Muhammad", "Zeeshan"].map((w, i) => (
                <motion.span
                  key={w}
                  variants={{
                    hidden: { y: 80, opacity: 0, rotateX: -40 },
                    show: { y: 0, opacity: 1, rotateX: 0 },
                  }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-metallic"
                  style={{ transformPerspective: 800 }}
                >
                  {w}
                  {i === 1 && (
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "40%" }}
                      transition={{ delay: 0.9, duration: 1 }}
                      className="block h-[3px] mt-3 bg-gradient-to-r from-[oklch(0.82_0.13_85)] to-transparent"
                    />
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
            >
              <span className="text-foreground/90">Senior Web Developer</span> · Product Designer ·
              SaaS UX Expert. Building immersive digital products with design precision, frontend
              engineering, and AI-powered workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://www.behance.net/zyxan_official"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-b from-[oklch(0.92_0.10_90)] to-[oklch(0.62_0.12_75)] text-[oklch(0.14_0.005_270)] shadow-[var(--shadow-gold)] hover:brightness-110 transition-all"
              >
                Behance Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://muhammadzeeshanportfolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass border-gradient px-5 py-3 text-sm font-medium hover:text-[oklch(0.88_0.10_90)] transition-colors"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <IconLink href="https://github.com/zyxan322" label="GitHub">
                <Github className="h-4 w-4" />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/zeeshan322/" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </IconLink>
              <IconLink href="https://www.behance.net/zyxan_official" label="Behance">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M7.8 6.2c1 0 1.9.1 2.6.3.7.2 1.3.5 1.8.8.5.4.8.8 1 1.4.2.5.3 1.2.3 1.9 0 .8-.2 1.5-.6 2-.4.5-.9 1-1.7 1.3 1 .3 1.8.8 2.3 1.5.5.7.7 1.5.7 2.5 0 .8-.2 1.5-.5 2.1-.3.6-.7 1.1-1.3 1.5-.5.4-1.2.7-1.9.8-.7.2-1.5.3-2.3.3H1V6.2h6.8zm-.4 5.7c.7 0 1.2-.2 1.7-.5.4-.3.6-.8.6-1.5 0-.4-.1-.7-.2-1-.1-.2-.3-.4-.6-.6-.2-.1-.5-.2-.8-.3-.3-.1-.6-.1-1-.1H4v3.9h3.4zm.2 6c.4 0 .7 0 1.1-.1.3-.1.6-.2.9-.4.3-.2.5-.4.6-.7.2-.3.2-.7.2-1.1 0-.9-.2-1.5-.7-1.9-.5-.4-1.2-.6-2-.6H4v4.7h3.6zM17.6 17.9c.4.4 1.1.7 1.9.7.6 0 1.1-.1 1.5-.4.4-.3.7-.6.8-.9h2.5c-.4 1.2-1 2.1-1.8 2.6-.8.5-1.8.8-3 .8-.8 0-1.6-.1-2.3-.4-.7-.3-1.2-.6-1.7-1.1-.5-.5-.8-1.1-1.1-1.8-.3-.7-.4-1.5-.4-2.3 0-.8.1-1.6.4-2.3.3-.7.6-1.3 1.1-1.8.5-.5 1.1-.9 1.7-1.2.7-.3 1.4-.4 2.2-.4.9 0 1.7.2 2.4.5.7.4 1.2.8 1.7 1.4.4.6.8 1.3 1 2.1.2.8.3 1.6.2 2.5h-7.8c0 .9.3 1.6.7 2zm3.3-5.4c-.3-.4-.9-.6-1.6-.6-.5 0-.8.1-1.1.2-.3.2-.5.4-.7.6-.2.2-.3.5-.4.7-.1.3-.1.5-.1.7h4.6c-.1-.7-.4-1.2-.7-1.6zM15.6 6.8h6v1.5h-6V6.8z" />
                </svg>
              </IconLink>
              <IconLink href="mailto:m.zyxan322@gmail.com" label="Email">
                <Mail className="h-4 w-4" />
              </IconLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 grid grid-cols-3 max-w-md gap-6 text-sm"
            >
              {[
                { k: "5+", v: "Years" },
                { k: "40+", v: "Projects" },
                { k: "12+", v: "SaaS Products" },
              ].map((s) => (
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
          </motion.div>

          {/* 3D portrait */}
          <motion.div
            style={{ y: yPortrait }}
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
              {/* rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-full border border-dashed border-white/10"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-20 rounded-full border border-white/5"
              />

              {/* Float wrapper (independent vertical drift) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Portrait card with 3D tilt (mouse driven) */}
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    x: tShift,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative h-full w-full rounded-[2rem] overflow-hidden glass-strong border-gradient shadow-[var(--shadow-elevated)] will-change-transform"
                >
                  {/* gradient halo */}
                  <div
                    aria-hidden
                    className="absolute -inset-1 rounded-[2rem] opacity-70 blur-2xl"
                    style={{
                      background:
                        "conic-gradient(from 120deg, oklch(0.55 0.01 270 / 0.35), transparent 30%, oklch(0.30 0.008 265 / 0.35) 60%, transparent 80%, oklch(0.55 0.01 270 / 0.35))",
                    }}
                  />

                  <div className="absolute inset-0">
                    <img
                      src={heroPortrait}
                      alt="Muhammad Zeeshan — Senior Web Developer & SaaS UX Expert"
                      width={1024}
                      height={1024}
                      className="h-full w-full object-cover object-center scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_270)] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[oklch(0.14_0.005_270)/0.6]" />
                  </div>

                  {/* corner HUD */}
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.35em] text-[oklch(0.88_0.10_90)] flex items-center gap-2">
                    <Flame className="h-3.5 w-3.5" /> MZ // 2026
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    ID · 001
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        Operator
                      </div>
                      <div className="font-display text-2xl text-metallic mt-1">Zeeshan</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        Status
                      </div>
                      <div className="mt-1 inline-flex items-center gap-1.5 text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.13_85)] pulse-gold" />
                        Online
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* floating chips - extra depth */}
              {[
                { t: "Next.js", x: "-6%", y: "8%", d: 0, z: 60 },
                { t: "TypeScript", x: "96%", y: "18%", d: 0.4, z: 80 },
                { t: "Framer Motion", x: "100%", y: "74%", d: 0.8, z: 50 },
                { t: "AI Workflows", x: "-4%", y: "70%", d: 1.2, z: 40 },
              ].map((c) => (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { delay: 0.6 + c.d, duration: 0.6 },
                    scale: { delay: 0.6 + c.d, duration: 0.6 },
                    y: {
                      delay: c.d,
                      duration: 4 + c.d,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    left: c.x,
                    top: c.y,
                    transform: `translateZ(${c.z}px)`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 glass border-gradient rounded-full px-3 py-1.5 text-[11px] uppercase tracking-wider whitespace-nowrap"
                >
                  {c.t}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-16 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          <MousePointer2 className="h-4 w-4 animate-bounce" />
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass border-gradient hover:text-[oklch(0.88_0.10_90)] hover:-translate-y-0.5 transition-all"
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   MARQUEE                                  */
/* -------------------------------------------------------------------------- */

function Marquee() {
  const items = [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind",
    "Framer Motion",
    "SaaS UX",
    "Product Design",
    "AI Workflows",
    "SEO",
    "Odoo",
  ];
  return (
    <div className="relative border-y border-white/5 py-6 overflow-hidden">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground inline-flex items-center gap-12"
          >
            {t}
            <span className="h-1 w-1 rounded-full bg-[oklch(0.82_0.13_85)]" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                CAPABILITIES                                */
/* -------------------------------------------------------------------------- */

function Capabilities() {
  const items = [
    {
      icon: Layers,
      t: "SaaS UI/UX",
      d: "End-to-end product surfaces with measurable activation lift.",
    },
    {
      icon: Code2,
      t: "Frontend Engineering",
      d: "Production React, type-safe systems, and motion-rich interactions.",
    },
    {
      icon: Wand2,
      t: "AI Workflow Automation",
      d: "Custom GPT pipelines that ship work, not demos.",
    },
    {
      icon: Rocket,
      t: "SEO / AEO / GEO",
      d: "Technical, on-page, and entity-driven discovery strategies.",
    },
  ];
  return (
    <Section>
      <SectionHeader
        eyebrow="Capabilities"
        title="A premium operator across product surfaces"
        description="From the first wireframe to the last shipped commit — design, engineer, and grow."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            style={{ transformPerspective: 1000 }}
          >
            <TiltCard className="p-6 h-full">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-lg glass border-gradient inline-flex items-center justify-center text-[oklch(0.88_0.10_90)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
                  0{i + 1}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          PROCESS — sticky scroll 3D                        */
/* -------------------------------------------------------------------------- */

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const steps = [
    {
      n: "01",
      t: "Discover",
      d: "Stakeholder interviews, audit, and product north-star alignment.",
      icon: Sparkles,
      img: imgDiscover,
    },
    {
      n: "02",
      t: "Design",
      d: "Information architecture, motion language, and high-fidelity surfaces.",
      icon: Wand2,
      img: imgDesign,
    },
    {
      n: "03",
      t: "Build",
      d: "Type-safe React, accessible components, and silky 60fps interactions.",
      icon: Code2,
      img: imgBuild,
    },
    {
      n: "04",
      t: "Launch",
      d: "Performance, SEO, analytics — measured launches that compound.",
      icon: Rocket,
      img: imgLaunch,
    },
  ];

  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    return activeIndex.on("change", (v) => setActive(Math.round(v)));
  }, [activeIndex]);

  return (
    <section ref={ref} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 w-full grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
              How I work
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl text-metallic">
              A cinematic four-act process.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Each engagement moves through four deliberate acts — every artifact shipped is a setup
              for the next.
            </p>

            <div className="mt-10 space-y-3">
              {steps.map((s, i) => (
                <button
                  key={s.t}
                  className={`w-full text-left rounded-xl border px-4 py-3 transition-all ${
                    i === active
                      ? "glass-strong border-[oklch(0.82_0.13_85_/_0.5)] shadow-[var(--shadow-gold)]"
                      : "border-white/5 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono text-[oklch(0.88_0.10_90)]">{s.n}</span>
                    <span className="font-semibold">{s.t}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[480px]" style={{ perspective: 1400 }}>
            {steps.map((s, i) => {
              const offset = i - active;
              return (
                <motion.div
                  key={s.t}
                  animate={{
                    x: offset * 40,
                    y: offset * 20,
                    z: -Math.abs(offset) * 200,
                    rotateY: offset * -8,
                    opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.25,
                    scale: 1 - Math.abs(offset) * 0.06,
                  }}
                  transition={{ type: "spring", stiffness: 140, damping: 22 }}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: 10 - Math.abs(offset),
                  }}
                  className="absolute inset-0 rounded-3xl glass-strong border-gradient overflow-hidden"
                >
                  <img
                    src={s.img}
                    alt={s.t}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_270)] via-[oklch(0.14_0.005_270)/0.55] to-transparent" />
                  <div className="absolute inset-0 [background:var(--gradient-metallic)] opacity-20 mix-blend-overlay" />
                  <div className="relative h-full flex flex-col p-8">
                    <div className="flex items-center justify-between">
                      <div className="font-mono text-sm text-[oklch(0.88_0.10_90)] tracking-widest">
                        {s.n} / 04
                      </div>
                      <s.icon className="h-6 w-6 text-[oklch(0.88_0.10_90)]" />
                    </div>
                    <h3 className="mt-auto font-display text-5xl md:text-6xl text-metallic">
                      {s.t}
                    </h3>
                    <p className="mt-4 text-foreground/85 max-w-md">{s.d}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             FEATURED PROJECTS                              */
/* -------------------------------------------------------------------------- */

function FeaturedProjects() {
  const projects = [
    {
      t: "Progmize SaaS Suite",
      c: "SaaS · Dashboard",
      d: "Multi-tenant operations dashboard with role-aware analytics.",
      img: imgProgmize,
      tag: "Featured",
    },
    {
      t: "GST International",
      c: "Web App · Branding",
      d: "Corporate platform with cinematic brand storytelling.",
      img: imgGst,
    },
    {
      t: "Sentax LMS",
      c: "UI/UX · Web App",
      d: "Training institute platform with adaptive learning flows.",
      img: imgSentax,
    },
    {
      t: "Neuron AI Studio",
      c: "AI · Workflows",
      d: "Visual node editor for chaining GPT pipelines at scale.",
      img: imgAi,
    },
    {
      t: "Aureate Commerce",
      c: "Commerce · Admin",
      d: "Premium storefront + admin with cinematic merchandising.",
      img: imgEcom,
    },
    {
      t: "Pulse Fitness",
      c: "Mobile · UI/UX",
      d: "Adaptive workout app with hyper-personalised programming.",
      img: imgFitness,
    },
  ];
  return (
    <Section>
      <SectionHeader
        eyebrow="Selected work"
        title="Recent launches"
        description="A curated slice of recent product surfaces. Visit the projects page for the full archive."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.7 }}
            style={{ transformPerspective: 1200 }}
          >
            <TiltCard className="p-1.5 h-full">
              <div className="rounded-xl bg-gradient-to-br from-[oklch(0.22_0.008_270)] to-[oklch(0.16_0.006_270)] p-3 h-full">
                <div className="aspect-[16/10] rounded-lg relative overflow-hidden mb-4 border border-white/5 group">
                  <img
                    src={p.img}
                    alt={p.t}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_270)] via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:radial-gradient(400px_circle_at_50%_50%,oklch(0.82_0.13_85_/_0.18),transparent_60%)]" />
                  {p.tag && (
                    <div className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.3em] glass border-gradient rounded-full px-2 py-1">
                      <Star className="h-3 w-3 inline mr-1 -mt-0.5 text-[oklch(0.88_0.10_90)]" />
                      {p.tag}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {p.c}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs text-[oklch(0.88_0.10_90)] uppercase tracking-widest">
                    Case study <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
        >
          All projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              STACK ORBIT                                   */
/* -------------------------------------------------------------------------- */

function StackOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const ring1 = ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"];
  const ring2 = ["Node.js", "Supabase", "Postgres", "Vercel", "Cloudflare"];
  const ring3 = ["Figma", "GSAP", "Three.js", "OpenAI", "n8n"];

  return (
    <Section>
      <SectionHeader
        eyebrow="Stack"
        title="Tools wired for velocity"
        description="A curated toolchain optimised for premium product work — from pixel to production."
      />
      <div
        ref={ref}
        className="relative mx-auto aspect-square w-full max-w-2xl"
        style={{ perspective: 1200 }}
      >
        <motion.div style={{ rotate }} className="absolute inset-0">
          <Ring items={ring1} radius={48} duration={40} />
          <Ring items={ring2} radius={70} duration={60} reverse />
          <Ring items={ring3} radius={92} duration={80} />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-28 w-28 rounded-full glass-strong border-gradient flex items-center justify-center shadow-[var(--shadow-gold)]">
            <Zap className="h-8 w-8 text-[oklch(0.88_0.10_90)]" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Ring({
  items,
  radius,
  duration,
  reverse = false,
}: {
  items: string[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
    >
      {items.map((t, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        return (
          <motion.div
            key={t}
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 glass border-gradient rounded-full px-3 py-1.5 text-[11px] uppercase tracking-wider whitespace-nowrap"
          >
            {t}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  STATS                                     */
/* -------------------------------------------------------------------------- */

function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const stats = [
    { k: "98", s: "%", v: "Lighthouse" },
    { k: "60", s: "fps", v: "Interactions" },
    { k: "40", s: "+", v: "Shipped" },
    { k: "12", s: "+", v: "SaaS products" },
  ];
  return (
    <Section className="!py-32">
      <motion.div
        ref={ref}
        style={{ y }}
        className="relative overflow-hidden rounded-3xl glass-strong border-gradient p-10 md:p-16"
      >
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 [background:var(--gradient-radial-spot)]" />
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="text-center"
            >
              <div className="font-display text-5xl md:text-7xl text-metallic">
                <CountUp to={parseFloat(s.k)} duration={2.4} />
                <span className="text-[oklch(0.88_0.10_90)]">{s.s}</span>
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {s.v}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              TESTIMONIAL                                   */
/* -------------------------------------------------------------------------- */

function TestimonialPreview() {
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
            Trusted by founders
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-metallic">
            Craft you can feel.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            A selection of words from the operators and founders I've shipped with.
          </p>
          <Link
            to="/testimonials"
            className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
          >
            All testimonials <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, rotateY: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformPerspective: 1000 }}
          className="lg:col-span-7"
        >
          <TiltCard className="p-10">
            <Quote className="h-10 w-10 text-[oklch(0.88_0.10_90)]" />
            <p className="mt-6 text-xl md:text-2xl leading-relaxed text-foreground/90">
              Zeeshan ships at a velocity that doesn't compromise craft. The motion, the type, the
              systems thinking — every detail is dialed. He didn't just build our SaaS, he set its
              visual standard.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[oklch(0.30_0.01_270)] to-[oklch(0.16_0.006_270)] border border-white/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-[oklch(0.88_0.10_90)]" />
              </div>
              <div>
                <div className="font-semibold">A. Khan</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">
                  Founder · Progmize
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    CTA                                     */
/* -------------------------------------------------------------------------- */

function CTA() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl glass-strong border-gradient p-10 md:p-16 text-center"
      >
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-0 [background:var(--gradient-radial-spot)] pointer-events-none" />
        <h2 className="relative text-3xl md:text-5xl font-display text-metallic">
          Let's build something inevitable.
        </h2>
        <p className="relative mt-4 text-muted-foreground max-w-xl mx-auto">
          Open for SaaS UX engagements, product design partnerships, and high-craft frontend
          collaborations.
        </p>
        <div className="relative mt-8 flex justify-center gap-3 flex-wrap">
          <Link
            to="/contact"
            className="rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-b from-[oklch(0.92_0.10_90)] to-[oklch(0.62_0.12_75)] text-[oklch(0.14_0.005_270)] shadow-[var(--shadow-gold)] hover:brightness-110"
          >
            Contact Me
          </Link>
          <a
            href="mailto:m.zyxan322@gmail.com"
            className="rounded-xl glass border-gradient px-5 py-3 text-sm"
          >
            m.zyxan322@gmail.com
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PHILOSOPHY                                  */
/* -------------------------------------------------------------------------- */

function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const pillars = [
    {
      icon: Compass,
      t: "Clarity over cleverness",
      d: "Strip noise until the product reveals its own gravity.",
    },
    {
      icon: ShieldCheck,
      t: "Craft is a system",
      d: "Tokens, motion, type — every detail composes the brand.",
    },
    {
      icon: Gauge,
      t: "Speed is a feature",
      d: "60fps interactions, sub-second LCP, instant perceived response.",
    },
    {
      icon: BrainCircuit,
      t: "AI as leverage",
      d: "Pipelines that compound output without compromising taste.",
    },
  ];

  return (
    <Section>
      <SectionHeader
        eyebrow="Philosophy"
        title="Operating principles"
        description="Four non-negotiables that shape every engagement, every commit."
      />
      <motion.div
        ref={ref}
        style={{ y, rotateX: rotate, transformPerspective: 1400 }}
        className="grid sm:grid-cols-2 gap-5"
      >
        {pillars.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl glass border-gradient p-6 group card-hover"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl bg-[oklch(0.88_0.10_90)] group-hover:opacity-40 transition-opacity" />
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-lg glass-strong border-gradient inline-flex items-center justify-center text-[oklch(0.88_0.10_90)]">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
                  Principle 0{i + 1}
                </div>
                <h3 className="mt-2 text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          WORKFLOW — horizontal 3D rail                     */
/* -------------------------------------------------------------------------- */

function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-32%"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [12, -12]);

  const cards = [
    { t: "Brief", d: "Scope, KPIs, north-star metric.", icon: Eye, img: wfBrief },
    { t: "Audit", d: "Heuristic + technical baseline.", icon: Compass, img: wfAudit },
    { t: "System", d: "Tokens, type, motion language.", icon: Layers, img: wfSystem },
    { t: "Surfaces", d: "Hi-fi flows + interaction specs.", icon: Wand2, img: wfSurfaces },
    { t: "Engineer", d: "Type-safe React + 60fps motion.", icon: Code2, img: wfEngineer },
    { t: "Measure", d: "Analytics, SEO, conversion.", icon: Gauge, img: wfMeasure },
    { t: "Compound", d: "Iterate on data, ship weekly.", icon: Rocket, img: wfCompound },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32"
      style={{ perspective: 1600 }}
    >
      <div className="mx-auto max-w-7xl px-4 mb-12">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
          End-to-end workflow
        </div>
        <h2 className="mt-3 font-display text-4xl md:text-6xl text-metallic max-w-3xl">
          A pipeline that compounds.
        </h2>
      </div>
      <motion.div
        style={{ x, rotateY, transformStyle: "preserve-3d" }}
        className="flex gap-6 px-6 will-change-transform"
      >
        {cards.map((c, i) => (
          <div
            key={c.t}
            className="relative shrink-0 w-[340px] h-[460px] rounded-3xl glass-strong border-gradient overflow-hidden flex flex-col justify-between"
            style={{ transform: `translateZ(${(i % 3) * -40}px)` }}
          >
            <img
              src={c.img}
              alt={c.t}
              loading="lazy"
              width={1024}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
            <div className="absolute inset-0 [background:var(--gradient-metallic)] opacity-15 mix-blend-overlay" />
            <div className="absolute -inset-px rounded-3xl pointer-events-none opacity-40 [background:radial-gradient(400px_circle_at_30%_0%,oklch(0.55_0.01_270_/_0.35),transparent_60%)]" />
            <div className="relative p-7 flex items-center justify-between">
              <div className="font-mono text-xs text-[oklch(0.88_0.10_90)] tracking-widest">
                Step {String(i + 1).padStart(2, "0")}
              </div>
              <c.icon className="h-5 w-5 text-[oklch(0.88_0.10_90)]" />
            </div>
            <div className="relative p-7">
              <h3 className="font-display text-4xl text-metallic">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[oklch(0.82_0.13_85)] to-transparent" />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  JOURNAL                                   */
/* -------------------------------------------------------------------------- */

function Journal() {
  const entries = [
    {
      d: "May 2026",
      t: "Designing for perceived velocity",
      e: "Why the first 200ms decide whether your SaaS feels premium or generic.",
    },
    {
      d: "Apr 2026",
      t: "Motion as information architecture",
      e: "Using transitions as wayfinding instead of decoration.",
    },
    {
      d: "Mar 2026",
      t: "AI workflows that ship",
      e: "From prompt soup to deterministic pipelines you can monetise.",
    },
  ];
  return (
    <Section>
      <SectionHeader
        eyebrow="Field notes"
        title="From the journal"
        description="Short essays on craft, motion, and shipping premium product surfaces."
      />
      <div className="grid md:grid-cols-3 gap-5">
        {entries.map((j, i) => (
          <motion.article
            key={j.t}
            initial={{ opacity: 0, y: 30, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            style={{ transformPerspective: 1200 }}
            className="group relative rounded-2xl glass border-gradient p-7 overflow-hidden card-hover"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity [background:radial-gradient(400px_circle_at_50%_0%,oklch(0.55_0.01_270_/_0.25),transparent_60%)]" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
                {j.d}
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug">{j.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{j.e}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[oklch(0.88_0.10_90)]">
                Read essay <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    FAQ                                     */
/* -------------------------------------------------------------------------- */

function FAQ() {
  const items = [
    {
      q: "What kind of engagements do you take?",
      a: "SaaS UI/UX leadership, founding design partnerships, and high-craft frontend builds. Typically 4-12 week sprints with measurable outcomes.",
    },
    {
      q: "How do you collaborate with existing teams?",
      a: "I plug into your stack — Figma, Linear, GitHub, Slack. I lead design + frontend, work alongside your engineers, and ship to production.",
    },
    {
      q: "Do you handle backend or just frontend?",
      a: "Frontend, motion, and product design are the core. For backend I integrate with Supabase, tRPC, or your existing API surface.",
    },
    {
      q: "How fast can we start?",
      a: "Most engagements kick off within 1-2 weeks. For urgent product launches I can usually fit a discovery call inside 48 hours.",
    },
    {
      q: "What does pricing look like?",
      a: "Project-based or weekly retainer. Scope, deliverables, and pricing are agreed up-front — no surprise invoices.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeader
        eyebrow="FAQ"
        title="Operating questions, answered."
        description="A short list of what founders ask before we kick off."
      />
      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-2">
          <div className="rounded-2xl glass-strong border-gradient p-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
              Still curious?
            </div>
            <h3 className="mt-3 font-display text-3xl text-metallic">Ask me anything.</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              The fastest way to get a real answer is a 20-minute call.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold bg-gradient-to-b from-[oklch(0.92_0.10_90)] to-[oklch(0.62_0.12_75)] text-[oklch(0.14_0.005_270)] shadow-[var(--shadow-gold)] hover:brightness-110"
            >
              Book a call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={it.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border ${
                  isOpen
                    ? "glass-strong border-[oklch(0.82_0.13_85_/_0.45)] shadow-[var(--shadow-gold)]"
                    : "glass border-white/5"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg">{it.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="shrink-0 h-8 w-8 rounded-full glass border-gradient inline-flex items-center justify-center text-[oklch(0.88_0.10_90)]"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              BEYOND CODE / 3D                              */
/* -------------------------------------------------------------------------- */

function BeyondCode() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rot = useSpring(useTransform(scrollYProgress, [0, 1], [12, -12]), {
    stiffness: 60,
    damping: 18,
  });
  const yShift = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), {
    stiffness: 60,
    damping: 18,
  });

  const socials = [
    { k: "8+", v: "Years on Social", i: TrendingUp },
    { k: "120M+", v: "Impressions", i: Eye },
    { k: "350K+", v: "Followers Grown", i: Users },
    { k: "9", v: "Platforms", i: Share2 },
  ];

  const games = [
    { name: "GTA V", tag: "Open World · Rockstar", img: gameGta5 },
    { name: "GTA VI", tag: "Most Anticipated · 2026", img: gameGta6 },
    { name: "Red Dead Redemption 2", tag: "Cinematic Western", img: gameRdr2 },
    { name: "Cyberpunk 2077", tag: "Night City RPG", img: gameCyberpunk },
    { name: "Call of Duty: MW", tag: "Tactical FPS", img: gameCod },
    { name: "Rise of the Tomb Raider", tag: "Action-Adventure", img: gameTombRaider },
    { name: "God of War Ragnarök", tag: "Norse Saga", img: gameGow },
    { name: "The Witcher 3", tag: "Fantasy RPG", img: gameWitcher },
  ];

  return (
    <section ref={ref} className="relative" style={{ perspective: 1600 }}>
      <Section>
        <SectionHeader
          eyebrow="Beyond Code"
          title="Operator off-duty."
          description="Eight years compounding social reach — and a serious gaming rotation that keeps the craft sharp."
        />

        {/* Social reach band — 3D tilted */}
        <motion.div
          style={{ rotateX: rot, y: yShift, transformStyle: "preserve-3d" }}
          className="relative rounded-3xl glass-strong border-gradient p-8 md:p-10 mb-16 will-change-transform"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(600px circle at 20% 0%, oklch(0.82 0.13 85 / 0.10), transparent 60%)",
            }}
          />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
                <Share2 className="h-3.5 w-3.5" /> Social Media · 8+ Years
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl text-metallic leading-tight">
                Growth-engineered content across every major platform.
              </h3>
              <p className="mt-4 text-sm text-muted-foreground max-w-md">
                From Instagram and X to TikTok, LinkedIn, YouTube and beyond — I run content
                strategy, hooks, and analytics-driven iteration that turns attention into pipeline.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              {socials.map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 30, rotateX: -25 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, rotateX: 6, rotateY: -6 }}
                  style={{ transformStyle: "preserve-3d", perspective: 800 }}
                  className="relative rounded-2xl glass border-gradient p-5 will-change-transform"
                >
                  <s.i className="h-5 w-5 text-[oklch(0.88_0.10_90)]" />
                  <div className="mt-4 font-display text-3xl md:text-4xl text-metallic">
                    <SmartCount value={s.k} />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.v}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gaming rotation */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
              <Gamepad2 className="h-3.5 w-3.5" /> Hobbies · Gaming Rotation
            </div>
            <h3 className="mt-3 font-display text-3xl md:text-5xl text-metallic">
              Currently in the rotation.
            </h3>
          </div>
          <span className="hidden md:inline text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Always two campaigns deep
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {games.map((g, i) => (
            <GameCard key={g.name} {...g} index={i} />
          ))}
        </div>
      </Section>
    </section>
  );
}

function GameCard({
  name,
  tag,
  img,
  index,
}: {
  name: string;
  tag: string;
  img: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 240, damping: 22 });
  const smy = useSpring(my, { stiffness: 240, damping: 22 });
  const rY = useTransform(smx, [-0.5, 0.5], [-16, 16]);
  const rX = useTransform(smy, [-0.5, 0.5], [14, -14]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const r = cardRef.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{
        rotateX: rX,
        rotateY: rY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass border-gradient will-change-transform"
    >
      <img
        src={img}
        alt={`${name} — game cover art`}
        loading="lazy"
        width={1024}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.005_270)] via-[oklch(0.10_0.005_270)/0.25] to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(500px circle at 50% 30%, oklch(0.88 0.10 90 / 0.18), transparent 60%)",
        }}
      />

      <div
        className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)] glass border-gradient rounded-full px-2.5 py-1"
        style={{ transform: "translateZ(40px)" }}
      >
        #{String(index + 1).padStart(2, "0")}
      </div>

      <div className="absolute bottom-0 inset-x-0 p-5" style={{ transform: "translateZ(30px)" }}>
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{tag}</div>
        <div className="mt-1 font-display text-xl md:text-2xl text-metallic leading-tight">
          {name}
        </div>
      </div>
    </motion.div>
  );
}
