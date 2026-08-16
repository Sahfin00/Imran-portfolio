import { Trophy } from "lucide-react";

import { achievements } from "@/data/portfolio";
import { Counter, Reveal, Section } from "./primitives";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Recognition so far"
      lead="Built to grow: awards, scholarships, competition results and certifications will be added here as they come."
    >
      <div className="grid gap-6">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <div className="relative overflow-hidden rounded-[2rem] border border-brand/15 bg-surface p-7 shadow-[var(--shadow-lift)] sm:p-10">
              <div className="glow-orb absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-70" />
              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-deep">
                    <Trophy className="h-3.5 w-3.5" />
                    Featured
                  </span>
                  <h3 className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">{a.title}</h3>
                  <p className="mt-2 text-base font-medium text-brand">{a.event}</p>
                  <p className="mt-1 text-sm text-ink-soft">{a.org}</p>
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">{a.note}</p>
                </div>

                <div className="shrink-0 rounded-3xl border border-line bg-secondary/60 px-8 py-7 text-center">
                  <p className="text-5xl font-semibold text-gradient-brand">
                    <Counter to={a.metric.value} />
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    {a.metric.label}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}