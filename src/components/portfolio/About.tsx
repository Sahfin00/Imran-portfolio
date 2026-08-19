import { Compass, GraduationCap, Sparkles } from "lucide-react";

import { aboutMilestones, currentlyExploring, profile } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A young engineer in the process of becoming something bigger."
      lead={`${profile.name} is an EEE undergraduate at CUET, developing across engineering, technology, leadership, professional activities and continuous learning. This portfolio is an ongoing journey — not a finished profile.`}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="surface-card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand-deep">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{profile.institution}</p>
              <p className="text-xs text-ink-soft">
                Batch {profile.batch} · Expected graduation {profile.graduation}
              </p>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            Alongside coursework in electrical and electronic engineering, I spend my time on
            hands-on electronics and design projects, career-focused student organizations and
            professional development programs. Each experience adds another layer to how I think
            as an engineer and work with people.
          </p>

          <ol className="relative mt-8 space-y-5 border-l border-line pl-6">
            {aboutMilestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-surface [background:var(--gradient-brand)]" />
                <p className="text-xs font-semibold tracking-[0.14em] text-brand">{m.year}</p>
                <p className="text-sm font-medium text-ink">{m.title}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.1} className="surface-card p-6 sm:p-8">
            <div className="flex items-center gap-2 text-brand-deep">
              <Compass className="h-4.5 w-4.5" />
              <h3 className="text-lg font-semibold">Currently Exploring</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {currentlyExploring.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-spark" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-ink-soft">
              This list is updated as interests, courses and goals evolve.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="relative overflow-hidden rounded-3xl p-6 text-primary-foreground sm:p-8 [background:var(--gradient-brand)]">
            <p className="text-lg font-semibold leading-snug">
              &ldquo;Engineering is learned by building, failing, adjusting and building again.&rdquo;
            </p>
            <p className="mt-4 text-sm opacity-95">
              A living portfolio documenting that process, year by year.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}