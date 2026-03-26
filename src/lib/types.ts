export type Severity = "critical" | "high" | "medium" | "low";
export type RemovalStatus = "queued" | "processing" | "completed" | "failed" | "verified";

export interface ExposureItem {
  label: string;
  value: number;
  tone: Severity;
  description?: string;
}

export interface PrivacyScore {
  score: number;
  status: string;
  description: string;
  change: string;
  percentile: number;
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

export interface ExposureItem {
  label: string;
  value: number;
  tone: Severity;
  description?: string;
  icon?: string;
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

export interface DeviceCheck {
  name: string;
  status: "enabled" | "disabled" | "partial";
  recommendation: string;
}

export interface IdentityRisk {
  level: Severity;
  description: string;
  factors: string[];
}

export interface ProtectionLayer {
  name: string;
  status: "active" | "inactive" | "pending";
  description: string;
}

export interface ActivityItem {
  id: string;
  text: string;
  timestamp: string;
  type: "system" | "user" | "scan";
}
