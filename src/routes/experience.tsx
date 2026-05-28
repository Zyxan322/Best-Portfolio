import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import heroExperience from "@/assets/hero-experience.jpg";

const timeline = [
  {
    co: "Progmize",
    role: "IT Product Manager",
    when: "2024 — Present",
    notes: [
      "Define clear product strategy and roadmap in line with business objectives",
      "Plan sprints, workflows, and tasks with ClickUp to enhance team productivity",
      "Collaborate with developers to design scalable and maintainable product architecture",
      "Automate processes with AI tools to enhance productivity and accelerate delivery",
    ],
  },
  {
    co: "Progmize",
    role: "UI UX Product Designer & Developer",
    when: "2023 — Present",
    notes: [
      "Design user-friendly SaaS interfaces, enhancing overall usability and experience",
      "Develop wireframes, prototypes, and scalable design systems in Figma",
      "Boost user interaction by approximately 20% through progressive UX enhancements",
      "Work closely with developers and product teams to deliver high-quality digital products",
    ],
  },
  {
    co: "Progmize (Dubai)",
    role: "Social Media Manager",
    when: "2022 — Present",
    notes: [
      "Planned and executed multi-platform social media plans across key channels",
      "Managed X, LinkedIn, Facebook, and Instagram page presences",
      "Produced high-quality reel, post, and video content to drive engagement",
      "Optimized digital content for SEO, AEO, and GEO strategy",
    ],
  },
  {
    co: "Unique School System",
    role: "Social Media Manager",
    when: "2023 — 2025",
    notes: [
      "Developed and maintained social media content plans for an educational facility",
      "Created and published reels, videos, and daily content on Facebook, Instagram, and YouTube",
      "Managed, uploaded, and optimized YouTube channel content",
      "Designed print media materials including brochures, magazines, and promotional items",
    ],
  },
  {
    co: "Freelance",
    role: "UI/UX Designer",
    when: "2020 — 2023",
    notes: [
      "Provided end-to-end product design services to international clients",
      "Customized landing pages, administrative dashboards, and mobile interfaces",
      "Created clean, responsive front-end interfaces using HTML and CSS",
      "Utilized basic Python and SQL to assist with backend logic and databases",
    ],
  },
  {
    co: "TechInn Solution",
    role: "Social Media Manager",
    when: "2020 — 2022",
    notes: [
      "Developed and implemented content strategies across multiple social platforms",
      "Created and published reels, static posts, and creative marketing materials",
      "Managed content scheduling, posting pipelines, and analytics monitoring",
      "Fostered growth in brand awareness and audience involvement",
    ],
  },
  {
    co: "Independent",
    role: "Social Media Manager",
    when: "2016 — 2026",
    notes: [
      "Managed personal YouTube, Facebook, Instagram, and Discord communities",
      "Produced gaming content, reels, and video production materials",
      "Developed and engaged the audience through trend-based digital strategies",
      "Optimized media content to maximize audience reach and engagement",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <PageShell>
      <Helmet>
        <title>Experience — Muhammad Zeeshan</title>
        <meta
          name="description"
          content="Professional experience: Progmize Software Systems, GST International, Sentax Training Institute, TechInn Solutions."
        />
        <meta property="og:title" content="Experience — Muhammad Zeeshan" />
        <meta
          property="og:description"
          content="Senior web developer experience across SaaS, training, and brand platforms."
        />
        <link rel="canonical" href="https://github.com/Zyxan322/Best-Portfolio/experience" />
      </Helmet>
      <PageHero
        eyebrow="Trajectory · 2016—2026"
        words={["Experience."]}
        title="Experience."
        description="A decade compounding across SaaS development, UI/UX product design, and digital content strategy — shipping intuitive product surfaces and growing brand engagement."
        image={heroExperience}
        imageAlt="Cascading obsidian timeline slabs in volumetric haze"
        stats={[
          { k: "5", v: "Companies/Clients" },
          { k: "10+", v: "Years" },
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
                  className="relative grid md:grid-cols-2 gap-6"
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-3 w-3 rounded-full bg-[oklch(0.88_0.10_90)] shadow-[0_0_0_6px_oklch(0.82_0.13_85/0.15)]" />
                  <div
                    className={`pl-12 md:pl-0 ${right ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pr-12"}`}
                  >
                    <div className="glass border-gradient rounded-2xl p-6 card-hover relative">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-[oklch(0.88_0.10_90)]">
                        {t.when}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold">{t.role}</h3>
                      <div className="text-sm text-muted-foreground">{t.co}</div>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {t.notes.map((n) => (
                          <li key={n} className="flex gap-2">
                            <span className="text-[oklch(0.88_0.10_90)]">▸</span>
                            {n}
                          </li>
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
