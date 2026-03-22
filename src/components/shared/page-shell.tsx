import { Logo } from "./logo";
import { Button } from "../ui/button";
import Link from "next/link";

export function PageShell({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="min-h-screen bg-black text-white px-6 pb-12">
      <div className="container">
        <header className="py-8">
          <Link href="/">
            <Logo />
          </Link>
        </header>

        <div className="max-w-md mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            {description && (
              <p className="text-white/60 mx-auto max-w-sm">{description}</p>
            )}
          </div>

          {children}

          <p className="mt-8 text-center text-sm text-white/60">
            Need help?{' '}
            <Button variant="link" className="text-sm" asChild>
              <Link href="/about">Contact Support</Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
