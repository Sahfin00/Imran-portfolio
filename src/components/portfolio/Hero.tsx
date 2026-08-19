import { motion } from "motion/react";
import { ArrowDown, Linkedin, Mail } from "lucide-react";

import { heroStats, profile } from "@/data/portfolio";
import { Counter } from "./primitives";

const words = profile.headline.split(" ");
const portraitUrl = "https://i.postimg.cc/Xq6zg2kj/frmlphto.png";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pt-28 pb-2 sm:px-8 md:pt-32 md:pb-4">

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-semibold text-ink-soft"
          >
            <span className="h-2 w-2 rounded-full bg-spark" />
            EEE @ CUET · Batch {profile.batch} · Graduating {profile.graduation}
          </motion.p>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] text-ink sm:text-6xl md:text-[4.1rem]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={i >= words.length - 1 ? "text-gradient-brand inline-block" : "inline-block"}
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              {profile.name}
            </p>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticLink href="#journey" variant="primary">
                Explore My Journey
              </MagneticLink>
              <MagneticLink href="#projects" variant="ghost">
                View Projects
              </MagneticLink>
              <MagneticLink href="#contact" variant="ghost">
                Let&apos;s Connect
              </MagneticLink>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/80 text-ink-soft transition-colors hover:text-brand"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/80 text-ink-soft transition-colors hover:text-brand"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] opacity-30 [background:var(--gradient-brand)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[var(--shadow-lift)]">
            <motion.img
              src={portraitUrl}
              width={1024}
              height={1280}
              alt="Portrait of Md. Imran Hossain, EEE student at CUET"
              className="aspect-4/5 w-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-12 w-full max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="surface-card px-5 py-5"
            >
              <p className="text-3xl font-semibold text-ink">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-brand"
        >
          Scroll to explore
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function MagneticLink({
  href,
  children,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "ghost";
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={
        variant === "primary"
          ? "inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] [background:var(--gradient-brand)]"
          : "inline-flex items-center rounded-full border border-line bg-surface/80 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand-deep"
      }
    >
      {children}
    </motion.a>
  );
}
