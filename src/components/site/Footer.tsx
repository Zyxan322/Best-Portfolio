import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-0 -z-10 [background:var(--gradient-radial-spot)] opacity-50" />
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl text-metallic">Muhammad Zeeshan</div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Senior Web Developer, Product Designer, and SaaS UX expert crafting cinematic digital
              products.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {["Home", "About", "Projects", "Skills", "Services", "Contact"].map((l) => (
              <Link
                key={l}
                to={`/${l === "Home" ? "" : l.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
          <div className="flex md:justify-end items-start gap-2">
            <SocialLink href="https://github.com/zyxan322" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/zeeshan322/" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://muhammadzeeshanportfolio.vercel.app/" label="Portfolio">
              <Globe className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="mailto:m.zyxan322@gmail.com" label="Email">
              <Mail className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Muhammad Zeeshan. Crafted with precision.</span>
          <span>Gujranwala, Pakistan · m.zyxan322@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass border-gradient hover:text-[oklch(0.88_0.10_90)] hover:-translate-y-0.5 transition-all"
    >
      {children}
    </a>
  );
}
