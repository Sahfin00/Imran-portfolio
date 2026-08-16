import { motion } from "motion/react";
import { ArrowUpRight, CircuitBoard } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/data/portfolio";
import { Reveal, Section, Tag } from "./primitives";

export function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Hands-on engineering work"
      lead="Electronics and design projects built during undergraduate study. Each entry grows as documentation, results and images are added."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.index} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="group surface-card relative flex h-full flex-col overflow-hidden p-7"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:var(--gradient-glow)]" />
              <div className="relative flex items-start justify-between">
                <span className="font-display text-4xl font-semibold text-brand/25">{p.index}</span>
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

              <div className="relative mt-6 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-focus-within:max-h-40 group-focus-within:opacity-100">
                <ul className="space-y-1.5 border-t border-line pt-4 text-xs text-ink-soft">
                  {p.sections.slice(0, 4).map((s) => (
                    <li key={s.label}>· {s.label}</li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setOpenProject(p)}
                className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand-deep"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!openProject} onOpenChange={(o) => !o && setOpenProject(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {openProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Project {openProject.index} — {openProject.title}
                </DialogTitle>
                <DialogDescription>{openProject.tagline}</DialogDescription>
              </DialogHeader>
              <dl className="mt-4 space-y-4">
                {openProject.sections.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-line bg-secondary/50 p-4">
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand">
                      {s.label}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}