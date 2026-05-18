import type {
  PrivacyScore,
  ExposureItem,
  RecommendedAction,
  Alert,
  BrokerRemoval,
  DeviceCheck,
  MonitoringStatus,
  IdentityRisk,
  ProtectionLayer,
  ActivityItem,
} from "./types";

export const privacyScore: PrivacyScore = {
  score: 72,
  status: "Moderate Risk",
  description: "Better than 58% of scanned users",
  change: "+8 this month",
  percentile: 58,
};

export const exposureSummary: ExposureItem[] = [
  {
    label: "Data Brokers",
    value: 18,
    tone: "high",
    description: "Broker databases currently exposing identity-linked data.",
  },
  {
    label: "Breach Records",
    value: 6,
    tone: "critical",
    description: "Known breach-linked credential exposure.",
  },
  {
    label: "Public Profiles",
    value: 11,
    tone: "medium",
    description: "Searchable public identity surfaces.",
  },
  {
    label: "Tracking Signals",
    value: 23,
    tone: "low",
    description: "Advertising and behavioral tracking vectors.",
  },
];

export const recommendedActions: RecommendedAction[] = [
  {
    id: "1",
    title: "Remove broker listings",
    description: "Begin automated removal requests for exposed listings.",
    priority: "critical",
    status: "Recommended",
    cta: "Start Removal",
  },
  {
    id: "2",
    title: "Enable stronger MFA",
    description: "Upgrade account authentication posture.",
    priority: "high",
    status: "Important",
    cta: "Review Accounts",
  },
];

export const alerts: Alert[] = [
  {
    id: "1",
    title: "Credential pair discovered in breach dataset",
    severity: "critical",
    description: "An email/password combination was found in a known breach.",
  },
  {
    id: "2",
    title: "New broker exposure detected",
    severity: "high",
    description: "A broker indexed a new address-linked record.",
  },
];

export const brokerQueue: BrokerRemoval[] = [
  {
    id: "1",
    broker: "PeopleFind Hub",
    status: "processing",
    progress: 75,
    lastUpdated: "Today",
  },
  {
    id: "2",
    broker: "Address Atlas",
    status: "queued",
    progress: 0,
    lastUpdated: "Today",
  },
];

export const deviceChecks: DeviceCheck[] = [
  {
    name: "Password Manager",
    status: "enabled",
    recommendation: "Good coverage",
  },
  {
    name: "2FA Coverage",
    status: "partial",
    recommendation: "Enable on all important accounts",
  },
  {
    name: "Tracking Protection",
    status: "disabled",
    recommendation: "Browser protection recommended",
  },
];

export const monitoringStatus: MonitoringStatus = {
  lastScan: "2 hours ago",
  nextScan: "In 12 hours",
};

export const identityRisk: IdentityRisk = {
  level: "high",
  description:
    "Identity exposure is elevated due to broker indexing, breached credentials, and persistent public discoverability.",
  factors: [
    "Broker databases contain address-linked records",
    "Credentials found in historical breaches",
    "Search engines expose identity-linked references",
  ],
};

export const protectionLayers: ProtectionLayer[] = [
  {
    name: "Broker Removal Layer",
    status: "active",
    description: "Removes exposed records from known broker ecosystems.",
  },
  {
    name: "Credential Monitoring",
    status: "active",
    description: "Tracks breach-linked credential exposure.",
  },
  {
    name: "Device Hardening",
    status: "partial",
    description: "Security posture guidance for personal devices.",
  },
];

export const recentActivity: ActivityItem[] = [
  {
    id: "1",
    type: "scan",
    description: "Exposure scan completed successfully.",
  },
  {
    id: "2",
    type: "alert",
    description: "New breach-linked credential alert detected.",
  },
  {
    id: "3",
    type: "removal",
    description: "Broker removal request submitted.",
  },
];
