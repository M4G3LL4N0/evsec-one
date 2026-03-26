export type Severity = "critical" | "high" | "medium" | "low";
export type RemovalStatus = "queued" | "processing" | "completed" | "failed" | "verified";
export type ProtectionStatus = "active" | "inactive" | "pending";
export type DeviceStatus = "enabled" | "disabled" | "partial";
export type ActivityType = "system" | "user" | "scan";
export type Tone = "neutral" | "warning" | "danger" | "success";

export interface BrokerRemoval {
  id: string;
  broker: string;
  status: RemovalStatus;
  progress: number;
  lastUpdated: string;
}

export interface MonitoringStatus {
  active: boolean;
  lastScan: string;
  nextScan: string;
  watching: string[];
}

export interface ExposureItem {
  label: string;
  value: number;
  tone: Tone;
  description?: string;
}

export interface PrivacyScore {
  score: number;
  status: string;
  description: string;
  change: string;
  percentile: number;
}

export interface RecommendedAction {
  id: string;
  title: string;
  description: string;
  priority: Severity;
  actionLabel: string;
  completed?: boolean;
}

export interface Alert {
  id: string;
  title: string;
  source: string;
  time: string;
  severity: Severity;
  investigated?: boolean;
}

export interface DeviceCheck {
  name: string;
  status: DeviceStatus;
  recommendation: string;
}

export interface IdentityRisk {
  level: Severity;
  description: string;
  factors: string[];
}

export interface ProtectionLayer {
  name: string;
  status: ProtectionStatus;
  description: string;
}

export interface ActivityItem {
  id: string;
  text: string;
  timestamp: string;
  type: ActivityType;
}

export interface ScanSummary {
  lastScan: string;
  nextScan: string;
  totalExposures: number;
  highRiskExposures: number;
}
