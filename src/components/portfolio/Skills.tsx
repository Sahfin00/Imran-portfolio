import { motion } from "motion/react";

import { skillGroups } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Skills & Competencies"
      lead="What I currently work with, explore and continue to improve."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.06} className="surface-card p-6">
            <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
            <motion.div
              key={group.title}
              className="mt-5 flex flex-wrap gap-3"
            >
              {group.items.map((item, i) => (
                <motion.span
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-secondary/70 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:bg-brand-soft"
                >
                  {item.name}
                </motion.span>
              ))}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

