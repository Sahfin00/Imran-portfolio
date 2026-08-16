import { stillBuilding } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function StillBuilding() {
  return (
    <Section id="building" className="bg-secondary/40">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Future</p>
          <h2 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            Still <span className="text-gradient-brand">Building.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            I'm continuously learning, experimenting, building projects, developing leadership
            experience and preparing for future professional and academic opportunities. This page
            will keep changing — that's the point.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {stillBuilding.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06} className="surface-card p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brand">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">{item.value}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}