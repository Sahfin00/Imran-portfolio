import { motion } from "motion/react";
import { Factory, MapPin } from "lucide-react";
import { useState } from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { industrialTours } from "@/data/portfolio";
import { Reveal } from "./primitives";

export function IndustrialTours() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="mt-14">
      <Reveal className="mb-8 max-w-2xl">
        <p className="eyebrow">Industrial Tours / Industry Exposure</p>
        <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
          Learning engineering where it is actually built
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Industry visits that connect classroom theory with manufacturing floors, machinery and
          real production environments.
        </p>
      </Reveal>

      <div className="space-y-6">
        {industrialTours.map((tour, i) => (
          <Reveal key={tour.org} delay={i * 0.08}>
            <div className="surface-card p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep">
                    <Factory className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-ink">{tour.org}</h4>
                    {tour.location && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-soft">
                        <MapPin className="h-3.5 w-3.5" />
                        {tour.location}
                      </p>
                    )}
                  </div>
                </div>
                {tour.date && (
                  <span className="text-xs font-semibold tracking-[0.14em] text-brand">
                    {tour.date.toUpperCase()}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{tour.summary}</p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {tour.photos.map((src, idx) => {
                  const alt = `${tour.org} industrial tour photo ${idx + 1}`;
                  return (
                    <motion.button
                      key={src}
                      type="button"
                      onClick={() => setLightbox({ src, alt })}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 280, damping: 24 }}
                      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-secondary/40"
                    >
                      <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                      />
                      <span className="absolute inset-0 bg-brand-deep/0 transition-colors duration-300 group-hover:bg-brand-deep/15" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-4xl border-line bg-surface/95 p-3 backdrop-blur-xl sm:p-4">
          <DialogTitle className="sr-only">{lightbox?.alt ?? "Tour photo"}</DialogTitle>
          {lightbox && (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
