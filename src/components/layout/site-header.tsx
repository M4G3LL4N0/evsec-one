import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" size="sm" asChild>
            <a href="/scan">Check Your Privacy Score</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
