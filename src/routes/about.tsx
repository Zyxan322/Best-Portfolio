import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { TiltCard } from "@/components/site/TiltCard";
import { Brain, Code2, LineChart, Palette, Rocket, Workflow } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Muhammad Zeeshan" },
      { name: "description", content: "About Muhammad Zeeshan: a senior web developer and product designer specializing in SaaS UX, frontend engineering, and AI workflows." },
      { property: "og:title", content: "About — Muhammad Zeeshan" },
      { property: "og:description", content: "Product designer and senior web developer based in Gujranwala, Pakistan." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const disciplines = [
  { i: Palette, t: "UI/UX Design", d: "Systems-level design across web and mobile surfaces." },
  { i: Rocket, t: "SaaS Products", d: "End-to-end SaaS launches with activation focus." },
  { i: Code2, t: "Frontend Development", d: "React, Next.js, TypeScript, motion-rich UI." },
  { i: LineChart, t: "SEO / AEO / GEO", d: "Technical, semantic, and entity-led discoverability." },
  { i: Brain, t: "AI Workflow Automation", d: "GPT pipelines, agents, and integrated ops." },
  { i: Workflow, t: "Social Media Growth", d: "Brand systems and content engines that compound." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About · Profile"
        words={["About", "Me."]}
        title="About Me."
        description="Senior web developer and product designer based in Gujranwala, Pakistan. I help founders ship premium SaaS products with cinematic interfaces and AI-augmented workflows."
        image={heroAbout}
        imageAlt="Abstract obsidian monument with warm gold edges"
        stats={[
          { k: "5+", v: "Years" },
          { k: "40+", v: "Projects" },
          { k: "12+", v: "SaaS" },
        ]}
        ctas={[
          { label: "Hire Me", to: "/contact", primary: true },
          { label: "See Work", to: "/projects" },
        ]}
      />
      <Section>
        <SectionHeader
          eyebrow="About"
          title="Designing the surface, engineering the depth."
          description="I'm Muhammad Zeeshan — a senior web developer and product designer based in Gujranwala, Pakistan. I help founders and teams ship premium SaaS products with cinematic interfaces and AI-augmented workflows."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-7 glass border-gradient rounded-2xl p-8 card-hover relative"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over half a decade I've worked at the seam between design and engineering — building product surfaces that feel inevitable, codebases that scale gracefully, and workflows that turn AI from a novelty into a competitive edge.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My work spans SaaS dashboards, brand systems, training platforms, and AI tooling. The throughline is craft: pixel-perfect, performant, and built to ship.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "5+", v: "Years experience" },
                { k: "40+", v: "Shipped projects" },
                { k: "12+", v: "SaaS launches" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
                  <div className="font-display text-3xl text-metallic">{s.k}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-5 glass-strong border-gradient rounded-2xl p-8 relative overflow-hidden card-hover"
          >
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">Snapshot</div>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Location", "Gujranwala, Pakistan"],
                  ["Email", "m.zyxan322@gmail.com"],
                  ["Focus", "SaaS UX · Frontend · AI"],
                  ["Stack", "Next.js · React · TS · Tailwind"],
                  ["Availability", "Select engagements"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-white/5 pb-2">
                    <dt className="text-muted-foreground uppercase tracking-wider text-xs">{k}</dt>
                    <dd className="text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Disciplines" title="Six surfaces. One operator." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {disciplines.map((d, i) => (
            <motion.div key={d.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <TiltCard className="p-6 h-full">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[oklch(0.30_0.02_80)] to-[oklch(0.18_0.006_270)] inline-flex items-center justify-center border border-white/10">
                  <d.i className="h-5 w-5 text-[oklch(0.88_0.10_90)]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{d.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.d}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
