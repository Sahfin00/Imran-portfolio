import { motion } from "motion/react";

import { journey } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Journey"
      title="The path so far — and where it's heading"
      lead="A timeline of study, projects, organizations and goals. New milestones slot straight in."
    >
      <div className="relative">
        <span className="absolute left-[0.55rem] top-3 bottom-3 w-px bg-line md:left-1/2" />
        <div className="space-y-10">
          {journey.map((phase, i) => (
            <Reveal key={phase.year} delay={i * 0.06}>
              <div
                className={`relative pl-9 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <span className="absolute left-0 top-3 h-4 w-4 rounded-full border-2 border-surface [background:var(--gradient-brand)] md:left-1/2 md:-translate-x-1/2" />
                <div className={i % 2 === 1 ? "md:pl-12" : "md:pr-12 md:text-right"}>
                  <p className="font-display text-2xl font-semibold text-gradient-brand">
                    {phase.year}
                  </p>
                </div>
                <div className={i % 2 === 1 ? "md:pr-12 md:text-right" : "md:pl-12"}>
                  <ul className="mt-3 space-y-2 md:mt-0">
                    {phase.items.map((item, j) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: j * 0.05 }}
                        className="surface-card px-4 py-3 text-sm font-medium text-ink"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}