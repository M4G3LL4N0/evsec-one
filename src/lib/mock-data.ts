export const privacyScore = {
  score: 72,
  status: "Moderate Risk",
  change: "+8 this month",
};

export const exposureSummary = [
  { label: "Data brokers", value: 18, tone: "warning" },
  { label: "Breach records", value: 6, tone: "danger" },
  { label: "Leaked emails", value: 3, tone: "danger" },
  { label: "Leaked phones", value: 1, tone: "warning" },
];

export const recommendedActions = [
  {
    title: "Remove records from 12 data brokers",
    description: "Start opt-out and suppression requests now.",
    priority: "High",
  },
  {
    title: "Rotate 3 compromised passwords",
    description: "Credentials linked to old breaches were found.",
    priority: "High",
  },
  {
    title: "Enable masked email forwarding",
    description: "Reduce future tracking and exposure.",
    priority: "Medium",
  },
  {
    title: "Harden social account privacy settings",
    description: "2 public profiles expose personal metadata.",
    priority: "Medium",
  },
];

export const alerts = [
  {
    title: "Credential pair found in breach archive",
    source: "Historic leak dataset",
    time: "2 hours ago",
    severity: "High",
  },
  {
    title: "Phone number indexed by broker network",
    source: "People-search broker scan",
    time: "Today",
    severity: "Medium",
  },
  {
    title: "Address-linked profile discovered",
    source: "Aggregator listing",
    time: "Yesterday",
    severity: "Medium",
  },
];

export const brokerQueue = [
  { broker: "PeopleFind Hub", status: "Ready to remove" },
  { broker: "Address Atlas", status: "Processing" },
  { broker: "ContactTrace", status: "Queued" },
  { broker: "ProfileIndex", status: "Suppressed" },
];

export const recentActivity = [
  "Privacy score improved by 8 points.",
  "2 broker removals completed.",
  "1 new exposure detected.",
  "Monitoring scan finished successfully.",
];
