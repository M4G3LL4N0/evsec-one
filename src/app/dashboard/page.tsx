import { DashboardShell } from "@/components/layout/dashboard-shell";
import { SubpageVisual } from "@/components/SubpageVisual";
import { PrivacyScoreCard } from "@/components/dashboard/privacy-score-card";
import { ExposureSummary } from "@/components/dashboard/exposure-summary";
import { ActionCenter } from "@/components/dashboard/action-center";
import { AlertsList } from "@/components/dashboard/alerts-list";
import { BrokerRemovalQueue } from "@/components/dashboard/broker-removal-queue";
import { MonitoringCard } from "@/components/dashboard/monitoring-card";
import { DeviceProtectionCard } from "@/components/dashboard/device-protection-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { IdentityRiskCard } from "@/components/dashboard/identity-risk-card";
import { ProtectionLayersCard } from "@/components/dashboard/protection-layers-card";
import { ScanSummaryCard } from "@/components/dashboard/scan-summary-card";

export default function DashboardPage() {
  return (
    <>
    <SubpageVisual variant="dashboard" />
      <DashboardShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrivacyScoreCard />
            <ExposureSummary />
          </div>
          <ActionCenter />
          <AlertsList />
          <BrokerRemovalQueue />
        </div>
        <div className="space-y-6">
          <MonitoringCard />
          <DeviceProtectionCard />
          <RecentActivity />
          <IdentityRiskCard />
          <ProtectionLayersCard />
          <ScanSummaryCard />
        </div>
      </div>
    </DashboardShell>
  </>
  )
}
