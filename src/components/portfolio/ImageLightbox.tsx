import { motion } from "motion/react";
import { useState } from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type Props = {
  src: string;
  label: string;
  className?: string;
};

export function ImageLightbox({ src, label, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className={`group relative block overflow-hidden rounded-2xl border border-line bg-secondary/40 ${className ?? ""}`}
        aria-label={`Open larger view: ${label}`}
      >
        <img
          src={src}
          alt={label}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <span className="absolute inset-0 bg-brand-deep/0 transition-colors duration-300 group-hover:bg-brand-deep/15" />
      </motion.button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl border-line bg-surface/95 p-3 backdrop-blur-xl sm:p-4">
          <DialogTitle className="sr-only">{label}</DialogTitle>
          <img
            src={src}
            alt={label}
            className="max-h-[80vh] w-full rounded-2xl object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
