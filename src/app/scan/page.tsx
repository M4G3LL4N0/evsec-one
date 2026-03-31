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
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-3">
            Privacy Scan
          </h2>
          <p className="text-white/70">Enter your details to check for exposures</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input 
              placeholder="Full name" 
              required
              className="hover:border-white/20 focus:border-white/30"
            />
            <Input
              placeholder="Email address"
              type="email"
              required
              className="hover:border-white/20 focus:border-white/30"
            />
            <Input
              placeholder="Phone number"
              className="hover:border-white/20 focus:border-white/30"
            />
            <Input
              placeholder="City / state"
              className="hover:border-white/20 focus:border-white/30"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                Running secure scan...
              </div>
            ) : (
              "Start Secure Scan"
            )}
          </Button>
        </form>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
          <div className="flex items-center gap-2 mb-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/70"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="8" />
            </svg>
            <span>What happens next?</span>
          </div>
          <p className="text-white/60">
            We'll securely check for exposures across brokers, breaches, and public records.
            Results appear in your dashboard with clear next steps.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Link
            href="/sign-up"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-3 font-medium text-white transition hover:from-purple-600 hover:to-indigo-600"
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
