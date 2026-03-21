import { privacyScore } from "@/lib/mock-data";
import { StatCard } from "../shared/stat-card";

export function PrivacyScoreCard() {
  return (
    <StatCard
      title="Privacy Score"
      value={privacyScore.score}
      description={privacyScore.status}
      change={privacyScore.change}
      className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10"
    />
  );
}
