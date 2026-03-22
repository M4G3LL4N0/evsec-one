"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ScanPage() {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setCompleted(true);
      setLoading(false);
    }, 1200);
  }

  return (
    <PageShell
      title={completed ? "Your privacy scan is complete" : "Check your Privacy Score"}
      description={
        completed
          ? "Create an account to track your progress and get personalized protection."
          : "Get your free privacy assessment in seconds."
      }
    >
      {completed ? (
        <div className="space-y-4">
          <div className="p-6 border border-white/10 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
            <h3 className="font-medium mb-2">Your privacy score</h3>
            <div className="flex items-end gap-4">
              <span className="text-4xl font-bold">72</span>
              <span className="text-sm pb-1">Moderate Risk</span>
            </div>
          </div>

          <p className="text-white/60 text-sm">
            Your scan found 24 privacy risks across data brokers, breaches,
            and exposed personal information.
          </p>

          <div className="space-y-4 pt-4">
            <Button asChild className="w-full">
              <Link href="/sign-up">Create Account & Protect Yourself</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/dashboard">View Results Without Saving</Link>
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            required
            placeholder="Full Name"
            className="w-full"
          />
          <Input
            required
            type="email"
            placeholder="Email"
            className="w-full"
          />
          <Input
            placeholder="Phone (optional)"
            className="w-full"
          />

          <Button className="w-full" loading={loading}>
            {loading ? "Scanning..." : "Start Scan"}
          </Button>

          <p className="text-sm text-center text-white/60">
            Already scanned before?{' '}
            <Button variant="link" size="sm" className="text-sm" asChild>
              <Link href="/sign-in">Sign in to see your results</Link>
            </Button>
          </p>
        </form>
      )}
    </PageShell>
  );
}
