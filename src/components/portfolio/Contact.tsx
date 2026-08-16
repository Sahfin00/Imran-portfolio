import { Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { profile } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Have an opportunity, idea, or collaboration in mind? Let's connect."
      lead="The fastest way to reach me is email or LinkedIn. I read everything."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex flex-col gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="surface-card group flex items-center gap-4 p-5 transition-transform hover:-translate-y-1"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-deep">
              <Mail className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Professional email
              </span>
              <span className="block text-sm font-medium text-ink">{profile.email}</span>
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="surface-card group flex items-center gap-4 p-5 transition-transform hover:-translate-y-1"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-deep">
              <Linkedin className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                LinkedIn
              </span>
              <span className="block text-sm font-medium text-ink">Connect professionally</span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.08} className="surface-card p-6 sm:p-8">
          <form
            className="grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              setSending(true);
              const data = new FormData(form);
              const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
              const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              toast.success("Opening your email client…");
              setSending(false);
            }}
          >
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <label className="sm:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about the opportunity or idea."
                className="mt-2 w-full resize-none rounded-2xl border border-line bg-secondary/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-brand/50"
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 [background:var(--gradient-brand)] sm:col-span-2"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-line bg-secondary/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-brand/50"
      />
    </label>
  );
}