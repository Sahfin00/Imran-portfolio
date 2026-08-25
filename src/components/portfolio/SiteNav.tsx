import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navSections, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.3;
      let current: string = navSections[0].id;
      for (const s of navSections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= line) current = s.id;
      }
      // At the very bottom, highlight the last available section.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        const last = [...navSections].reverse().find((s) => document.getElementById(s.id));
        if (last) current = last.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex w-[min(72rem,calc(100%-1.5rem))] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled ? "surface-card" : "border border-transparent",
        )}
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src="/profile.png"
            alt="Md. Imran Hossain"
            width={72}
            height={72}
            className="h-9 w-9 shrink-0 rounded-full border border-line object-cover object-top shadow-[var(--shadow-soft)] sm:h-10 sm:w-10"
          />
        <span className="hidden text-sm font-semibold text-ink sm:block">{profile.name}</span>
        </a>

        <div className="flex-1 px-2 md:hidden">
          <span className="block truncate text-center text-sm font-semibold text-ink">
            {profile.name}
          </span>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {navSections.map((s) => (
            <li key={s.id} className="relative">
              <a
                href={`#${s.id}`}
                className={cn(
                  "relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active === s.id ? "text-brand-deep" : "text-ink-soft hover:text-ink",
                )}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full [background:var(--gradient-brand)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 md:inline-flex [background:var(--gradient-brand)]"
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/80 text-ink md:hidden"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="grid place-items-center"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-2 w-[min(72rem,calc(100%-1.5rem))] md:hidden"
          >
            <ul className="surface-card flex flex-col gap-1 p-3">
              {navSections.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      active === s.id
                        ? "bg-brand-soft text-brand-deep"
                        : "text-ink-soft hover:bg-secondary",
                    )}
                  >
                    {s.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}