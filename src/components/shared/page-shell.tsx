import { Logo } from "./logo";
import { Button } from "../ui/button";
import Link from "next/link";

export function PageShell({
  children,
  title,
  description,
  className,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black/80 text-white font-sans">
      <div className="container px-6 pb-12">
        <header className="py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo />
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-green-400" />
                <span>Secure Connection</span>
              </div>
              <div className="h-3 w-px bg-white/20"></div>
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-blue-400" />
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>
        </header>

        <div className={cn("max-w-xl mx-auto", className)}>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-3">
              {title}
            </h1>
            {description && (
              <p className="text-white/70 mx-auto text-lg leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>

          {children}

          <div className="mt-8 text-center text-sm text-white/60">
            Need help?{' '}
            <Button 
              variant="link" 
              className="text-sm hover:text-indigo-400 transition-colors" 
              asChild
            >
              <Link href="/about">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
