import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardTopbar } from "./dashboard-topbar";
import { cn } from "@/lib/utils";

export function DashboardShell({ 
  children,
  className,
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-black via-black/95 to-black/80 backdrop-blur-lg">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardTopbar />
        <main className={cn("p-6", className)}>
          <div className="mx-auto max-w-[1920px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
