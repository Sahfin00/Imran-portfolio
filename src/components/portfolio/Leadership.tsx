import { motion } from "motion/react";
import { Users } from "lucide-react";

import { leadership, leadershipSkills } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="Leadership & Community"
      title="Growing through people, not just circuits"
      lead="Organizational and community roles that build communication, coordination and responsibility alongside technical study."
      className="bg-secondary/40"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((l, i) => (
          <Reveal key={l.org} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="surface-card h-full p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand-deep">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink">{l.org}</h3>
              <p className="mt-1 text-sm font-medium text-brand">{l.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{l.note}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Skills demonstrated
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {leadershipSkills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand-deep"
            >
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}