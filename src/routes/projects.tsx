import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { TiltCard } from "@/components/site/TiltCard";
import { ArrowUpRight } from "lucide-react";
import heroProjects from "@/assets/hero-projects.jpg";
import imgProgmize from "@/assets/project-progmize.jpg";
import imgGst from "@/assets/project-gst.jpg";
import imgSentax from "@/assets/project-sentax.jpg";
import imgAurum from "@/assets/project-aurum.jpg";
import imgAi from "@/assets/project-ai.jpg";
import imgTechinn from "@/assets/project-techinn.jpg";
import imgPulse from "@/assets/project-pulse.jpg";
import imgLumen from "@/assets/project-lumen.jpg";
import imgHelix from "@/assets/project-helix.jpg";

const categories = [
  "All",
  "SaaS",
  "UI/UX",
  "Web Apps",
  "Branding",
  "Dashboards",
  "AI Tools",
] as const;
type Cat = (typeof categories)[number];

const projects: { t: string; c: Exclude<Cat, "All">; d: string; tag: string; img: string }[] = [
  {
    t: "Progmize Ops Cloud",
    c: "SaaS",
    d: "Multi-tenant operations dashboard with role-aware analytics.",
    tag: "Live",
    img: imgProgmize,
  },
  {
    t: "GST International",
    c: "Web Apps",
    d: "Cinematic corporate platform with bespoke brand system.",
    tag: "2024",
    img: imgGst,
  },
  {
    t: "Sentax LMS",
    c: "UI/UX",
    d: "Adaptive learning platform for cohort-based programs.",
    tag: "Case",
    img: imgSentax,
  },
  {
    t: "Aurum Analytics",
    c: "Dashboards",
    d: "Realtime KPI cockpit with custom data viz primitives.",
    tag: "Beta",
    img: imgAurum,
  },
  {
    t: "PrismAI Studio",
    c: "AI Tools",
    d: "GPT workflow builder with composable agent blocks.",
    tag: "v2",
    img: imgAi,
  },
  {
    t: "TechInn Brand",
    c: "Branding",
    d: "Full brand system, identity, and motion language.",
    tag: "2022",
    img: imgTechinn,
  },
  {
    t: "Pulse SaaS",
    c: "SaaS",
    d: "Subscription analytics with churn intelligence.",
    tag: "Live",
    img: imgPulse,
  },
  {
    t: "Lumen UI Kit",
    c: "UI/UX",
    d: "Premium component library for dark luxury surfaces.",
    tag: "Open",
    img: imgLumen,
  },
  {
    t: "Helix Agent",
    c: "AI Tools",
    d: "Custom autonomous research agent for product teams.",
    tag: "R&D",
    img: imgHelix,
  },
];

export default function ProjectsPage() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? projects : projects.filter((p) => p.c === cat);

  return (
    <PageShell>
      <Helmet>
        <title>Projects — Muhammad Zeeshan</title>
        <meta
          name="description"
          content="Selected SaaS, UI/UX, web app, branding, dashboard, and AI tool projects."
        />
        <meta property="og:title" content="Projects — Muhammad Zeeshan" />
        <meta
          property="og:description"
          content="Cinematic case studies across SaaS, UI/UX, dashboards, and AI."
        />
        <link rel="canonical" href="https://github.com/Zyxan322/Best-Portfolio/projects" />
      </Helmet>
      <PageHero
        eyebrow="Archive · 2026"
        words={["Selected", "Work."]}
        title="Selected Work."
        description="Cinematic case studies across SaaS, UI/UX, dashboards, and AI tools — designed, engineered, and shipped end-to-end."
        image={heroProjects}
        imageAlt="Floating premium product UI cards in obsidian glass"
        stats={[
          { k: "40+", v: "Shipped" },
          { k: "12+", v: "SaaS" },
          { k: "9", v: "Industries" },
        ]}
        ctas={[
          { label: "Hire Me", to: "/contact", primary: true },
          { label: "Read About", to: "/about" },
        ]}
      />
      <Section>
        <SectionHeader
          eyebrow="Archive"
          title="Projects, surfaces, and shipped products."
          description="Filter by category. Each case study highlights design intent, engineering decisions, and measurable outcomes."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`relative text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
                cat === c
                  ? "border-[oklch(0.82_0.13_85/0.6)] text-[oklch(0.92_0.10_90)] bg-[oklch(0.82_0.13_85/0.08)]"
                  : "border-white/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              layout
              key={p.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.55 }}
            >
              <TiltCard className="p-1.5 h-full">
                <div className="rounded-xl bg-gradient-to-br from-[oklch(0.22_0.008_270)] to-[oklch(0.15_0.006_270)] p-5 h-full">
                  <div className="aspect-[16/10] rounded-lg relative overflow-hidden mb-5 border border-white/5 group/img">
                    <img
                      src={p.img}
                      alt={p.t}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/img:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute inset-0 shimmer opacity-40" />
                    <div className="absolute top-3 right-3 text-[10px] uppercase tracking-widest glass rounded-full px-2 py-0.5">
                      {p.tag}
                    </div>
                    <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {p.c}
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{p.t}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-[oklch(0.88_0.10_90)] transition-colors" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </PageShell>
  );
}
