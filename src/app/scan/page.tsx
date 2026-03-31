"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ScanPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1200);
  }

  return (
    <PageShell
      title="Check your Privacy Score"
      description="Run a simple intake scan to see where your personal data may be exposed and what to fix first."
    >
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-gradient-to-b from-black/40 to-black/20 p-8 backdrop-blur">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Full name" required />
          <Input placeholder="Email address" type="email" required />
          <Input placeholder="Phone number" />
          <Input placeholder="City / state" />

          <Button type="submit" className="w-full">
            {loading ? "Running secure scan..." : "Start Secure Scan"}
          </Button>
        </form>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
          This MVP uses a demo scan flow today. Next we can connect real persistence,
          exposure checks, and account-based monitoring.
        </div>

        <div className="space-y-4 pt-4">
          <Link
            href="/sign-up"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
          >
            Create Account & Protect Yourself
          </Link>

          <Link
            href="/pricing"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-transparent px-5 py-3 font-medium text-white transition hover:bg-white/5"
          >
            View Plans
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
