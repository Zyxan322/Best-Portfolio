import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { TiltCard } from "@/components/site/TiltCard";
import { Quote } from "lucide-react";
import heroTestimonials from "@/assets/hero-testimonials.jpg";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials — Muhammad Zeeshan" },
      { name: "description", content: "What clients and collaborators say about working with Muhammad Zeeshan." },
      { property: "og:title", content: "Testimonials — Muhammad Zeeshan" },
      { property: "og:description", content: "Selected client and collaborator quotes." },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

const quotes = [
  { q: "Zeeshan ships product design with the rigor of an engineer and the eye of an art director. Rare combination.", n: "Hamza R.", r: "CTO, Progmize" },
  { q: "He rebuilt our entire web presence in weeks. The launch felt like a film trailer for our company.", n: "Sara K.", r: "Founder, GST International" },
  { q: "Our LMS finally feels premium. Students stay longer and complete more — the UX is doing the work.", n: "Adeel M.", r: "Director, Sentax" },
  { q: "Embedded with our team and lifted the bar overnight. I'd hire him again in a heartbeat.", n: "Daniyal A.", r: "PM, TechInn" },
];

function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Receipts · Five Star"
        words={["Testimonials."]}
        title="Testimonials."
        description="Selected quotes from founders, PMs, and engineering leads I've worked alongside — the work speaks, but the partners speak louder."
        image={heroTestimonials}
        imageAlt="Obsidian quote plaques with gold star accents"
        stats={[
          { k: "30+", v: "Clients" },
          { k: "100%", v: "5-star" },
          { k: "12+", v: "Repeat" },
        ]}
        ctas={[
          { label: "Work With Me", to: "/contact", primary: true },
          { label: "See Projects", to: "/projects" },
        ]}
      />
      <Section>
        <SectionHeader eyebrow="Receipts" title="What partners say." description="Selected quotes from founders, PMs, and engineering leads I've worked alongside." />
        <div className="grid md:grid-cols-2 gap-5">
          {quotes.map((q, i) => (
            <motion.div key={q.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <TiltCard className="p-8 h-full">
                <Quote className="h-7 w-7 text-[oklch(0.88_0.10_90)] opacity-70" />
                <p className="mt-5 text-lg leading-relaxed text-foreground/90">{q.q}</p>
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{q.n}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{q.r}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">★★★★★</div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
