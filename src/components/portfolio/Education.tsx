import { ChevronDown, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { education } from "@/data/portfolio";
import { Reveal, Section, Tag } from "./primitives";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation"
      lead="Formal engineering education at CUET, with room to grow as coursework, labs and academic milestones accumulate."
    >
      <div className="space-y-6">
        {education.map((e, i) => (
          <Reveal key={e.institution} delay={i * 0.08} className="surface-card overflow-hidden">
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-primary-foreground [background:var(--gradient-brand)]">
                  <Zap className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{e.degree}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{e.institution}</p>
                  <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-brand">
                    {e.period.toUpperCase()}
                  </p>
                </div>
              </div>
              <Tag>{e.status}</Tag>
            </div>

            <Accordion type="single" collapsible className="border-t border-line px-6 sm:px-8">
              <AccordionItem value="details" className="border-none">
                <AccordionTrigger className="py-4 text-sm font-semibold text-ink-soft hover:text-ink hover:no-underline [&>svg]:hidden">
                  <span className="flex items-center gap-2">
                    Academic details
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <dl className="grid gap-3 sm:grid-cols-2">
                    {e.details.map((d) => (
                      <div key={d.label} className="rounded-xl border border-line bg-secondary/60 px-4 py-3">
                        <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                          {d.label}
                        </dt>
                        <dd className="mt-1 text-sm text-ink">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}