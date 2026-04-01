"use client";

import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Lock, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Account Secured",
    description: "Your protection dashboard is ready",
    icon: <Shield className="w-5 h-5 text-purple-400" />,
  },
  {
    title: "Initial Scan Complete",
    description: "We've identified key exposures",
    icon: <CheckCircle2 className="w-5 h-5 text-green-400" />,
  },
  {
    title: "Encryption Active",
    description: "All data is 256-bit encrypted",
    icon: <Lock className="w-5 h-5 text-blue-400" />,
  },
];

export default function OnboardingPage() {
  return (
    <PageShell
      title="Welcome to EvSec-One"
      description="Your personal security platform is being configured"
      className="max-w-2xl"
    >
      <div className="mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-black/40 to-black/20 p-8 backdrop-blur">
        <div className="space-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-md" />
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-black border border-white/10">
                <BadgeCheck className="w-8 h-8 text-indigo-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Protection Activated
            </h2>
            <p className="text-white/70 mt-2 max-w-md">
              Your EvSec-One platform is ready. Let's complete setup.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
              size="lg"
            >
              <span className="relative">
                Enter Dashboard
                <span className="absolute -right-6 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
