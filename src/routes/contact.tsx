import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { Github, Linkedin, Mail, MapPin, Send, Globe } from "lucide-react";
import heroContact from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Muhammad Zeeshan" },
      { name: "description", content: "Get in touch with Muhammad Zeeshan for SaaS UX, frontend engineering, and AI workflow engagements." },
      { property: "og:title", content: "Contact — Muhammad Zeeshan" },
      { property: "og:description", content: "Reach out for premium product and engineering engagements." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Connect · Available"
        words={["Let's", "Talk."]}
        title="Let's Talk."
        description="Tell me about your product, timeline, and team — I read every message and reply within 24 hours."
        image={heroContact}
        imageAlt="Obsidian envelope and signal waves with warm gold accents"
        stats={[
          { k: "24h", v: "Reply" },
          { k: "9", v: "Time zones" },
          { k: "100%", v: "Senior" },
        ]}
        ctas={[
          { label: "Email Me", href: "mailto:m.zyxan322@gmail.com", primary: true },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/zeeshan322/" },
        ]}
      />
      <Section>
        <SectionHeader eyebrow="Connect" title="Let's design what's next." description="Tell me about your product, timeline, and team — I read every message." />

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 glass-strong border-gradient rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
            <div className="relative grid gap-5">
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</label>
                <textarea
                  required minLength={10} maxLength={2000}
                  rows={5}
                  placeholder="Tell me about your project…"
                  className="mt-2 w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[oklch(0.82_0.13_85/0.6)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.82_0.13_85/0.2)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-b from-[oklch(0.92_0.10_90)] to-[oklch(0.62_0.12_75)] text-[oklch(0.14_0.005_270)] shadow-[var(--shadow-gold)] hover:brightness-110 transition-all"
              >
                {sent ? "Message sent" : "Send message"}
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              {sent && <div className="text-xs text-[oklch(0.88_0.10_90)]">Thanks — I'll reply within 24 hours.</div>}
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="lg:col-span-2 grid gap-4"
          >
            <Info icon={Mail} label="Email" value="m.zyxan322@gmail.com" href="mailto:m.zyxan322@gmail.com" />
            <Info icon={MapPin} label="Location" value="Gujranwala, Pakistan" />
            <Info icon={Github} label="GitHub" value="zyxan322" href="https://github.com/zyxan322" />
            <Info icon={Linkedin} label="LinkedIn" value="zeeshan322" href="https://www.linkedin.com/in/zeeshan322/" />
            <Info icon={Globe} label="Portfolio" value="muhammadzeeshanportfolio.vercel.app" href="https://muhammadzeeshanportfolio.vercel.app/" />

            <div className="glass border-gradient rounded-2xl p-6 mt-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">Response time</div>
              <div className="mt-2 text-2xl font-display text-metallic">Under 24 hours</div>
              <p className="text-sm text-muted-foreground mt-2">Weekdays, Asia/Karachi.</p>
            </div>
          </motion.aside>
        </div>
      </Section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        id={name} name={name} type={type} required maxLength={255}
        placeholder={placeholder}
        className="mt-2 w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[oklch(0.82_0.13_85/0.6)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.82_0.13_85/0.2)] transition-all"
      />
    </div>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Body = (
    <div className="glass border-gradient rounded-2xl p-5 flex items-start gap-4 card-hover relative">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[oklch(0.30_0.02_80)] to-[oklch(0.18_0.006_270)] inline-flex items-center justify-center border border-white/10 shrink-0">
        <Icon className="h-4 w-4 text-[oklch(0.88_0.10_90)]" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{Body}</a> : Body;
}
