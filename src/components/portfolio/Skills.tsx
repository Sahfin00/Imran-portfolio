import { useState } from "react";
import { motion } from "motion/react";

import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, Section } from "./primitives";

export function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active] ?? skillGroups[0]!;

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Capability, grouped honestly"
      lead="No invented percentages — just the areas I work in, with a proficiency label where it is meaningful."
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="flex flex-col gap-2">
          {skillGroups.map((g, i) => (
            <button
              key={g.title}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative flex items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all",
                active === i
                  ? "border-brand/30 bg-brand-soft text-brand-deep shadow-[var(--shadow-soft)]"
                  : "border-line bg-surface text-ink-soft hover:text-ink",
              )}
            >
              {g.title}
              <span className="text-xs font-medium text-ink-soft">{g.items.length}</span>
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.08} className="surface-card p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
          <motion.div key={group.title} className="mt-6 flex flex-wrap gap-3">
            {group.items.map((item, i) => (
              <motion.span
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-secondary/70 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:bg-brand-soft"
              >
                {item.name}
                {"level" in item && item.level && (
                  <span className="rounded-full bg-brand/12 px-2 py-0.5 text-[0.68rem] font-semibold text-brand-deep">
                    {item.level}
                  </span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </Section>
  );
}