import { Logo } from "../shared/logo";

export function DashboardSidebar() {
  return (
    <div className="w-64 border-r border-white/10 p-6">
      <Logo />
      <nav className="mt-8 space-y-1">
        <a href="#" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/5">
          Dashboard
        </a>
        <a href="#" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/5">
          Scans
        </a>
        <a href="#" className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-white/5">
          Settings
        </a>
      </nav>
    </div>
  );
}
