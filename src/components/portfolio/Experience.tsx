import { Award } from "lucide-react";

import { involvement } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Involvement"
      title="Professional and organizational journey"
      lead="Roles and responsibilities taken on across campus organizations, career events and professional programs."
    >
      <div className="relative">
        <span className="absolute left-4 top-2 bottom-2 hidden w-px bg-line sm:block" />
        <div className="space-y-5">
          {involvement.map((item, i) => (
            <Reveal key={`${item.role}-${item.org}`} delay={i * 0.07}>
              <div className="group relative sm:pl-14">
                <span className="absolute left-[0.63rem] top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-surface [background:var(--gradient-brand)] sm:block" />
                <div className="surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-ink">{item.role}</h3>
                    <span className="text-xs font-semibold tracking-[0.14em] text-brand">
                      {item.period.toUpperCase()}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand-deep">{item.org}</p>
                  {item.meta && <p className="mt-1 text-xs text-ink-soft">{item.meta}</p>}
                  <ul className="mt-4 space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-ink-soft">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-spark" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {item.highlight && (
                    <div className="mt-5 flex items-center gap-3 rounded-2xl border border-brand/20 bg-brand-soft/70 px-4 py-3">
                      <Award className="h-5 w-5 shrink-0 text-brand" />
                      <p className="text-sm font-semibold text-brand-deep">{item.highlight}</p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}