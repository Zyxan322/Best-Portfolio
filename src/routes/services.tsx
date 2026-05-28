import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { TiltCard } from "@/components/site/TiltCard";
import { Bot, Brush, Code2, Megaphone, Search, Sparkles } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Muhammad Zeeshan" },
      { name: "description", content: "Services: SaaS UI/UX, frontend development, product design, SEO optimization, AI automation, social media strategy." },
      { property: "og:title", content: "Services — Muhammad Zeeshan" },
      { property: "og:description", content: "Premium engagements across SaaS UX, frontend engineering, and AI workflows." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { i: Brush, t: "SaaS UI/UX Design", d: "Activation-focused product surfaces, design systems, and motion language." },
  { i: Code2, t: "Frontend Development", d: "Type-safe React/Next.js builds with performance budgets and motion." },
  { i: Sparkles, t: "Product Design", d: "End-to-end product partnership from research to launch." },
  { i: Search, t: "SEO Optimization", d: "Technical SEO, AEO and GEO strategy, content systems." },
  { i: Bot, t: "AI Automation", d: "Custom GPT pipelines, agents, and ops integrations." },
  { i: Megaphone, t: "Social Media Strategy", d: "Brand voice, content engines, and compounding distribution." },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Engagements · 2026"
        words={["Services."]}
        title="Services."
        description="Project-based or embedded retainers across SaaS UX, frontend engineering, and AI workflows. Always senior, hands-on, and outcome-driven."
        image={heroServices}
        imageAlt="Six obsidian totems with warm gold edge lighting"
        stats={[
          { k: "6", v: "Disciplines" },
          { k: "40+", v: "Shipped" },
          { k: "100%", v: "Senior" },
        ]}
        ctas={[
          { label: "Start a Project", to: "/contact", primary: true },
          { label: "View Work", to: "/projects" },
        ]}
      />
      <Section>
        <SectionHeader
          eyebrow="Engagements"
          title="Six ways we can work together."
          description="Project-based or embedded retainers. Always senior, hands-on, and outcome-driven."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <TiltCard className="p-6 h-full">
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[oklch(0.30_0.02_80)] to-[oklch(0.18_0.006_270)] inline-flex items-center justify-center border border-white/10 shadow-[var(--shadow-gold)]">
                  <s.i className="h-5 w-5 text-[oklch(0.88_0.10_90)]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                <div className="mt-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">0{i + 1} · Service</div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
