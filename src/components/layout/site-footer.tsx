import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="container flex flex-col items-center py-16">
        <Logo />
        <p className="mt-6 text-center text-sm text-white/60 max-w-lg">
          {siteConfig.description}
        </p>
        <nav className="mt-8 flex gap-6">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="mt-8 text-sm text-white/40">
          © {new Date().getFullYear()} Opsera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
