export type Tone = "neutral" | "warning" | "danger" | "success";

export type Severity =
  | "low"
  | "medium"
  | "high"
  | "critical"
  | "success"
  | "warning"
  | "danger";

export interface PrivacyScore {
  score: number;
  status: string;
  description: string;
  change: string;
  percentile: number;
}

export interface ExposureItem {
  label: string;
  value: number;
  tone: Severity;
  description?: string;
}

export interface RecommendedAction {
  id: string;
  title: string;
  description: string;
  priority: Severity;
  status?: string;
  cta?: string;
}

export interface Alert {
  id: string;
  title: string;
  severity: Severity;
  description?: string;
}

export interface BrokerRemoval {
  id: string;
  broker: string;
  status: "queued" | "processing" | "completed";
  progress: number;
  lastUpdated: string;
}

export interface DeviceCheck {
  name: string;
  status: "enabled" | "partial" | "disabled";
  recommendation: string;
}

export interface MonitoringStatus {
  lastScan: string;
  nextScan: string;
}

export interface IdentityRisk {
  level: Severity;
  description: string;
  factors: string[];
}

export interface ProtectionLayer {
  name: string;
  status: "active" | "partial" | "inactive";
  description: string;
}

export type ActivityType =
  | "scan"
  | "alert"
  | "removal"
  | "improvement";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  description: string;
}
