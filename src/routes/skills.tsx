import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import heroSkills from "@/assets/hero-skills.jpg";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Skills — Muhammad Zeeshan" },
      { name: "description", content: "Skill matrix: Next.js, TypeScript, React, Tailwind, UI/UX, SEO, AI tools, Framer Motion, Odoo, Product Design." },
      { property: "og:title", content: "Skills — Muhammad Zeeshan" },
      { property: "og:description", content: "A precision toolkit for shipping premium SaaS products." },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
});

const skills = [
  { t: "HTML", v: 98 },
  { t: "CSS", v: 96 },
  { t: "JavaScript", v: 94 },
  { t: "Python", v: 88 },
  { t: "Figma", v: 95 },
  { t: "Canva", v: 96 },
  { t: "Adobe Suite", v: 90 },
  { t: "Social Media Marketing", v: 100 },
  { t: "Product Management", v: 92 },
  { t: "Machine Learning", v: 85 },
];

function SkillsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Toolkit · Stack"
        words={["Skills."]}
        title="Skills."
        description="A precision stack for premium products — sharpened across years of shipping production SaaS, brand sites, and AI tooling."
        image={heroSkills}
        imageAlt="Chrome and obsidian instrument cluster with gold accents"
        stats={[
          { k: "12+", v: "Core tools" },
          { k: "5+", v: "Years" },
          { k: "96", v: "% React" },
        ]}
        ctas={[
          { label: "Hire Me", to: "/contact", primary: true },
          { label: "See Work", to: "/projects" },
        ]}
      />
      <Section>
        <SectionHeader
          eyebrow="Toolkit"
          title="A precision stack for premium products."
          description="Sharpened across years of shipping production SaaS, brand sites, and AI tooling."
        />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative"
            >
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium">{s.t}</span>
                <span className="font-mono text-xs text-muted-foreground">{s.v}%</span>
              </div>
              <div className="mt-2 h-[3px] rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.v}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.03 }}
                  className="h-full bg-gradient-to-r from-[oklch(0.88_0.10_90)] via-[oklch(0.78_0.14_80)] to-[oklch(0.55_0.10_75)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
