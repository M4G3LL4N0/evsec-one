"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export function HomeHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#07101fcc]/90 backdrop-blur-xl">
      <div className="shell flex items-center justify-between gap-3 px-5 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white" onClick={() => setOpen(false)}>
          EvSec-One
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/68 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/scan"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-3 py-2 text-sm font-medium text-white/92 transition hover:bg-white/10 sm:px-4"
            onClick={() => setOpen(false)}
          >
            Scan
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 text-white md:hidden"
            aria-expanded={open}
            aria-controls="evsec-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="evsec-mobile-nav"
          className="shell flex flex-col gap-2 border-t border-white/10 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-xl px-3 py-3 text-sm text-white/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <p className="px-3 pt-2 text-xs text-white/45">Informational privacy tools — not legal advice. Human review for removals.</p>
        </nav>
      )}
    </header>
  );
}
