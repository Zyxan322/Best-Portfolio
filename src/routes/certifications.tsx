import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { TiltCard } from "@/components/site/TiltCard";
import { Award } from "lucide-react";
import heroCerts from "@/assets/hero-certifications.jpg";

export const Route = createFileRoute("/certifications")({
  component: CertsPage,
  head: () => ({
    meta: [
      { title: "Certifications — Muhammad Zeeshan" },
      { name: "description", content: "Professional certifications across UX, frontend, SEO, and AI." },
      { property: "og:title", content: "Certifications — Muhammad Zeeshan" },
      { property: "og:description", content: "Recognized credentials across product, design, and engineering." },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
});

const certs = [
  { t: "Python Essentials 1", o: "Cisco Networking Academy", y: "2024" },
  { t: "Python Essentials 2", o: "Cisco Networking Academy", y: "2024" },
  { t: "Machine Learning Specialization", o: "DeepLearning.AI / Coursera", y: "2024" },
  { t: "Advanced React & Next.js", o: "Vercel Learn", y: "2024" },
  { t: "Product Design Specialization", o: "CalArts / Coursera", y: "2023" },
  { t: "SEO Foundations & Technical SEO", o: "SEMrush Academy", y: "2024" },
  { t: "AI for Product Teams", o: "Reforge", y: "2024" },
  { t: "Design Systems with Tokens", o: "Frontend Masters", y: "2023" },
  { t: "Odoo Functional", o: "Odoo Inc.", y: "2022" },
];

function CertsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Credentials · Verified"
        words={["Certifications."]}
        title="Certifications."
        description="A non-exhaustive list of formal credentials across product, design, frontend, SEO and AI. Practical track record on the Projects page."
        image={heroCerts}
        imageAlt="Stacked obsidian and gold medallion certifications"
        stats={[
          { k: "9", v: "Credentials" },
          { k: "5", v: "Domains" },
          { k: "2024", v: "Latest" },
        ]}
        ctas={[
          { label: "Hire Me", to: "/contact", primary: true },
          { label: "See Skills", to: "/skills" },
        ]}
      />
      <Section>
        <SectionHeader eyebrow="Credentials" title="Certifications & continued craft." description="A non-exhaustive list of formal credentials. Practical track record on the Projects page." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div key={c.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <TiltCard className="p-6 h-full">
                <Award className="h-6 w-6 text-[oklch(0.88_0.10_90)]" />
                <h3 className="mt-4 text-lg font-semibold leading-snug">{c.t}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{c.o}</div>
                <div className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.y}</div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
