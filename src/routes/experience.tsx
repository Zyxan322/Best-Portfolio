import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import heroExperience from "@/assets/hero-experience.jpg";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Experience — Muhammad Zeeshan" },
      { name: "description", content: "Professional experience: Progmize Software Systems, GST International, Sentax Training Institute, TechInn Solutions." },
      { property: "og:title", content: "Experience — Muhammad Zeeshan" },
      { property: "og:description", content: "Senior web developer experience across SaaS, training, and brand platforms." },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
});

const timeline = [
  {
    co: "Progmize Software Systems",
    role: "Senior Web Developer & Product Designer",
    when: "2024 — Present",
    notes: [
      "Led design and frontend for multi-tenant SaaS dashboards",
      "Established a design-token system across product surfaces",
      "Shipped AI-assisted workflows that cut ops cycles by 40%",
    ],
  },
  {
    co: "GST International",
    role: "Web Developer & UI Designer",
    when: "2023 — 2024",
    notes: [
      "Rebuilt corporate platform with cinematic brand storytelling",
      "Improved Lighthouse performance from 58 to 96",
      "Designed lead capture flows lifting conversion by 27%",
    ],
  },
  {
    co: "Sentax Training Institute",
    role: "Frontend Developer & UX Designer",
    when: "2022 — 2023",
    notes: [
      "Designed an adaptive learning UI for cohort-based programs",
      "Built course catalog with optimized search and filters",
      "Owned design system across marketing and product",
    ],
  },
  {
    co: "TechInn Solutions",
    role: "Frontend Developer",
    when: "2021 — 2022",
    notes: [
      "Delivered client websites with strict performance budgets",
      "Implemented motion-rich landing pages and microinteractions",
      "Standardized component library across project teams",
    ],
  },
];

function ExperiencePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Trajectory · 2021—2026"
        words={["Experience."]}
        title="Experience."
        description="Five years compounding across SaaS, training platforms, and brand systems — shipping product surfaces that feel inevitable and codebases that scale."
        image={heroExperience}
        imageAlt="Cascading obsidian timeline slabs in volumetric haze"
        stats={[
          { k: "4", v: "Companies" },
          { k: "5+", v: "Years" },
          { k: "40+", v: "Releases" },
        ]}
        ctas={[
          { label: "Hire Me", to: "/contact", primary: true },
          { label: "See Projects", to: "/projects" },
        ]}
      />
      <Section>
        <SectionHeader
          eyebrow="Trajectory"
          title="A timeline of craft."
          description="Selected positions across product, design, and frontend engineering."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-12">
            {timeline.map((t, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={t.co}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-6 ${right ? "md:[&>*:first-child]:col-start-2" : ""}`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-3 w-3 rounded-full bg-[oklch(0.88_0.10_90)] shadow-[0_0_0_6px_oklch(0.82_0.13_85/0.15)]" />
                  <div className={`pl-12 md:pl-0 ${right ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="glass border-gradient rounded-2xl p-6 card-hover relative">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">{t.when}</div>
                      <h3 className="mt-2 text-xl font-semibold">{t.role}</h3>
                      <div className="text-sm text-muted-foreground">{t.co}</div>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {t.notes.map((n) => (
                          <li key={n} className="flex gap-2"><span className="text-[oklch(0.88_0.10_90)]">▸</span>{n}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
