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
      <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-black/40 to-black/20 p-8 backdrop-blur-lg relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,31,0.6)_0%,rgba(7,16,31,0)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-10"></div>
        <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
        {/* Header with progress indicator */}
        <div className="mb-8">
          <div className="w-full bg-white/5 rounded-full h-1.5 mb-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1.5 rounded-full transition-all duration-300" 
              style={{ width: loading ? '85%' : '100%' }}
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              {loading ? 'Scan In Progress' : 'Privacy Scan'}
            </h2>
            <p className="text-white/70">
              {loading ? 
                'Checking 200+ sources for exposures' : 
                'Enter your details to check for exposures'}
            </p>
          </div>
        </div>

        {/* Dynamic content based on loading state */}
        {loading ? (
          <div className="animate-fade-in">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
                <div className="absolute inset-1 rounded-full border-t-2 border-purple-400 animate-spin"></div>
                <ShieldCheckIcon className="absolute inset-3 w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Securely scanning...</h3>
              <p className="text-sm text-white/60">This usually takes about 30 seconds</p>
              
              <div className="w-full mt-8 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Data brokers</span>
                  <Loader2 className="w-3 h-3 text-purple-400 animate-spin" />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Breach archives</span>
                  <span className="text-purple-400">Checking...</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Public records</span>
                  <span className="text-purple-400">Checking...</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input 
                  placeholder="Full name" 
                  required
                  startIcon={<UserIcon className="w-4 h-4" />}
                />
                <Input
                  placeholder="Email address"
                  type="email"
                  required
                  startIcon={<EnvelopeIcon className="w-4 h-4" />}
                />
                <Input
                  placeholder="Phone number"
                  startIcon={<PhoneIcon className="w-4 h-4" />}
                />
                <Input
                  placeholder="City / state"
                  startIcon={<MapPinIcon className="w-4 h-4" />}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
              >
                Start Secure Scan
              </Button>
            </form>

            {/* Trust indicators */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2 text-white/60">
                <LockClosedIcon className="w-3 h-3 text-green-400" />
                <span>256-bit encryption</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <ClockIcon className="w-3 h-3 text-blue-400" />
                <span>30-second scan</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <EyeSlashIcon className="w-3 h-3 text-purple-400" />
                <span>No data storage</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <BadgeCheckIcon className="w-3 h-3 text-green-400" />
                <span>Secure connection</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-md bg-blue-500/10">
                  <InformationCircleIcon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">What happens next?</h3>
                  <p className="mt-1 text-white/60">
                    We'll securely check for exposures across brokers, breaches, and public records.
                    Results appear in your dashboard with clear next steps.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {!loading && (
          <div className="mt-8 space-y-3">
            <Link
              href="/sign-up"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-3 text-sm font-medium text-white transition hover:from-purple-600 hover:to-indigo-600"
            >
              <UserPlusIcon className="w-4 h-4" />
              Create Secure Account
            </Link>
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
            >
              <CurrencyDollarIcon className="w-4 h-4" />
              View Protection Plans
            </Link>
          </div>
        )}
      </div>
    </PageShell>
  );
}
