import { Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-soft">
            Electrical &amp; Electronic Engineering — CUET
          </p>
          <p className="mt-4 text-sm italic text-brand">Documenting the journey, one milestone at a time.</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
          <p className="text-xs text-ink-soft/80">© {year} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
