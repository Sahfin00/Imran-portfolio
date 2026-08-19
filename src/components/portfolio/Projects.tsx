import { motion } from "motion/react";
import { ArrowUpRight, CircuitBoard } from "lucide-react";

import { projects } from "@/data/portfolio";
import { Reveal, Section, Tag } from "./primitives";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Hands-on engineering work"
      lead="Electronics and design projects built during undergraduate study. Each entry grows as documentation, results and images are added."
    >
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.index} delay={i * 0.08} className="h-full">
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="group surface-card relative flex h-full flex-col overflow-hidden p-7"
            >
              <div className="relative flex items-start justify-between">
                <span className="font-display text-4xl font-semibold text-brand/60">{p.index}</span>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand-deep">
                  <CircuitBoard className="h-5 w-5" />
                </span>
              </div>

              <h3 className="relative mt-5 text-xl font-semibold text-ink">{p.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">{p.tagline}</p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="relative mt-6">
                <ul className="space-y-1.5 border-t border-line pt-4 text-xs text-ink-soft">
                  {p.sections.slice(0, 4).map((s) => (
                    <li key={s.label}>· {s.label}</li>
                  ))}
                </ul>
              </div>

              <a
                href={p.reportUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="relative mt-auto pt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-deep transition-colors hover:text-brand"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}