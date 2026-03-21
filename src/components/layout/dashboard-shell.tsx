import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardTopbar } from "./dashboard-topbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-black">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardTopbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
