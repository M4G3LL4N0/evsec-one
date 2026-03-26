import { PrivacyScore, ExposureItem, Severity, RecommendedAction, Alert } from "./types";

export const privacyScore: PrivacyScore = {
  score: 72,
  status: "Moderate Risk",
  description: "Better than 58% of users",
  change: "+8 this month",
  percentile: 58,
};

export const exposureSummary: ExposureItem[] = [
  { label: "Data Brokers", value: 18, tone: "high", description: "Selling your data" },
  { label: "Breach Records", value: 6, tone: "critical", description: "Password leaks" },
  { label: "Exposed Emails", value: 3, tone: "high", description: "Spam targets" },
  { label: "Public Profiles", value: 4, tone: "medium", description: "Privacy risks" },
  { label: "Leaked IDs", value: 1, tone: "critical", description: "Identity theft" },
  { label: "Trackers Found", value: 21, tone: "low", description: "Ad targeting" },
];

export const recommendedActions: RecommendedAction[] = [
  {
    id: "1",
    title: "Remove records from 12 data brokers",
    description: "Start opt-out and suppression requests to reduce spam and scams.",
    priority: "high",
    actionLabel: "Begin Removal",
  },
  {
    id: "2",
    title: "Rotate 3 compromised passwords",
    description: "These credentials were found in recent breach archives.",
    priority: "critical",
    actionLabel: "Change Passwords",
  },
  {
    id: "3",
    title: "Enable masked email forwarding",
    description: "Hide your real email when signing up for services.",
    priority: "medium",
    actionLabel: "Enable Protection",
  },
  {
    id: "4",
    title: "Lock down social profiles",
    description: "2 public profiles are exposing personal metadata.",
    priority: "medium",
    actionLabel: "Adjust Settings",
  },
];

export const alerts: Alert[] = [
  {
    id: "1",
    title: "Credential pair found in leak dataset",
    source: "Breach scan: 03/18/2026",
    time: "2 hours ago",
    severity: "critical",
  },
  {
    id: "2",
    title: "Phone number indexed by broker network",
    source: "PeopleFinder lookup",
    time: "Today",
    severity: "high",
  },
  {
    id: "3",
    title: "Address-linked profile rediscovered",
    source: "Public records sweep",
    time: "Yesterday",
    severity: "medium",
  },
  {
    id: "4",
    title: "New tracking cookie detected",
    source: "Browser scan",
    time: "45 minutes ago",
    severity: "low",
  },
];

export const brokerQueue: BrokerRemoval[] = [
  { id: "1", broker: "PeopleFind Hub", status: "processing", progress: 75, lastUpdated: "10 min ago" },
  { id: "2", broker: "Address Atlas", status: "queued", progress: 0, lastUpdated: "Today" },
  { id: "3", broker: "ContactTrace", status: "completed", progress: 100, lastUpdated: "Yesterday" },
  { id: "4", broker: "ProfileIndex", status: "processing", progress: 30, lastUpdated: "1 hour ago" },
];

export const monitoringStatus: MonitoringStatus = {
  active: true,
  lastScan: "Today at 2:22 PM",
  nextScan: "Tomorrow at 2:00 AM",
  watching: ["Breaches", "Brokers", "Dark Web", "Public Records"],
};

export const deviceChecks: DeviceCheck[] = [
  { name: "Password Manager", status: "enabled", recommendation: "Good" },
  { name: "2FA Enabled", status: "partial", recommendation: "Enable everywhere" },
  { name: "Tracking Prevention", status: "disabled", recommendation: "Activate" },
];

export const identityRisk: IdentityRisk = {
  level: "high",
  description: "Several high-risk exposures could enable identity theft",
  factors: [
    "Government ID exposure",
    "Multiple breached passwords",
    "Public address listings"
  ],
};

export const protectionLayers: ProtectionLayer[] = [
  { name: "Continuous Monitoring", status: "active", description: "24/7 exposure detection" },
  { name: "Automatic Removals", status: "active", description: "For high-risk brokers" },
  { name: "Privacy Hardening", status: "pending", description: "Guided setup recommended" },
];

export const recentActivity: ActivityItem[] = [
  { id: "1", text: "Privacy score improved by 8 points", timestamp: "Today", type: "system" },
  { id: "2", text: "2 broker removals completed", timestamp: "Yesterday", type: "scan" },
  { id: "3", text: "New critical alert detected", timestamp: "2 hours ago", type: "scan" },
  { id: "4", text: "Enabled email masking", timestamp: "3 days ago", type: "user" },
];
