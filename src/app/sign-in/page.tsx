import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignInPage() {
  return (
    <PageShell
      title="Secure Access"
      description="Welcome back to your EvSec-One protection dashboard"
    >
      <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-black/40 to-black/20 p-8 backdrop-blur-lg relative overflow-hidden group">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,31,0.6)_0%,rgba(7,16,31,0)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-10"></div>
        <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl group-hover:opacity-80 transition-opacity"></div>
        <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl group-hover:opacity-80 transition-opacity"></div>
        <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none"></div>
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="w-full"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full"
            required
          />

          <Button 
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 group"
          >
            <span className="relative">
              Secure Sign In
              <span className="absolute -right-5 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </span>
          </Button>

        <div className="flex justify-between items-center mt-4">
          <Button variant="link" size="sm" className="text-sm" asChild>
            <Link href="/sign-up">Create account</Link>
          </Button>
          <Button variant="link" size="sm" className="text-sm" asChild>
            <Link href="/forgot-password">Forgot password?</Link>
          </Button>
        </div>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-black text-white/60">Or continue with</span>
        </div>
      </div>

      <div className="grid gap-4">
        <Button variant="outline" className="w-full" asChild>
          <Link href="#" className="flex items-center gap-2">
            <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor" />
            </svg>
            Continue with GitHub
          </Link>
        </Button>
      </div>
          </div>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-black text-white/60">Or continue with</span>
          </div>
        </div>

        <div className="grid gap-4">
          <Button variant="outline" className="w-full" asChild>
            <Link href="#" className="flex items-center gap-2">
              <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor" />
              </svg>
              Continue with GitHub
            </Link>
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
