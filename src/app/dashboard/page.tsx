import { DashboardShell } from "@/components/layout/dashboard-shell";
import { PrivacyScoreCard } from "@/components/dashboard/privacy-score-card";
import { ExposureSummary } from "@/components/dashboard/exposure-summary";
import { ActionCenter } from "@/components/dashboard/action-center";
import { AlertsList } from "@/components/dashboard/alerts-list";
import { BrokerRemovalQueue } from "@/components/dashboard/broker-removal-queue";
import { MonitoringCard } from "@/components/dashboard/monitoring-card";
import { DeviceProtectionCard } from "@/components/dashboard/device-protection-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <PrivacyScoreCard />
        <ExposureSummary />
        <ActionCenter />
        <AlertsList />
        <BrokerRemovalQueue />
        <MonitoringCard />
        <DeviceProtectionCard />
        <RecentActivity />
      </div>
    </DashboardShell>
  );
}
