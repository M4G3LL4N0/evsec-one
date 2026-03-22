import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <PageShell
      title="Start protecting your privacy"
      description="Create your account to begin securing your digital identity."
    >
      <form className="space-y-4 mt-6">
        <div className="grid gap-2">
          <Input
            type="text"
            placeholder="Full name"
            className="w-full"
          />
          <Input
            type="email"
            placeholder="Email"
            className="w-full"
            required
          />
          <Input
            type="password"
            placeholder="Password (min 8 characters)"
            className="w-full"
            minLength={8}
            required
          />
        </div>

        <Button className="w-full">Create Account</Button>

        <p className="text-sm text-white/60 text-center">
          By signing up, you agree to our{' '}
          <Button variant="link" size="sm" className="text-sm" asChild>
            <Link href="/terms">Terms of Service</Link>
          </Button>{' '}
          and{' '}
          <Button variant="link" size="sm" className="text-sm" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>.
        </p>

        <p className="text-center text-sm mt-4 text-white/60">
          Already have an account?{' '}
          <Button variant="link" size="sm" className="text-sm" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </p>
      </form>
    </PageShell>
  );
}
