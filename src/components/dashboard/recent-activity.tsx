import Link from "next/link";

type ActivityType = "scan" | "user" | "report";

export function RecentActivity() {
  const recentActivity: Array<{
    id: string;
    type: ActivityType;
    text: string;
    timestamp: string;
  }> = [
    { id: "act_1", type: "scan", text: "Identity exposure scan completed", timestamp: "12m ago" },
    { id: "act_2", type: "report", text: "Broker-removal queue updated", timestamp: "41m ago" },
    { id: "act_3", type: "user", text: "Recovery contact review recommended", timestamp: "Today" },
    { id: "act_4", type: "scan", text: "Device posture check refreshed", timestamp: "Yesterday" },
    { id: "act_5", type: "report", text: "Public profile risk summary generated", timestamp: "Yesterday" },
  ];

  const getActivityIcon = (type: ActivityType) => {
    switch(type) {
      case 'scan':
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'user': 
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 8v6m3-3h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 2v7h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  const getActivityColor = (type: ActivityType) => {
    switch(type) {
      case 'scan': return 'bg-purple-500/10 text-purple-400';
      case 'user': return 'bg-green-500/10 text-green-400';
      default: return 'bg-blue-500/10 text-blue-400';
    }
  };

  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          View all
        </button>
      </div>
      <div className="space-y-3">
        {recentActivity.slice(0, 5).map((activity) => (
          <div 
            key={activity.id} 
            className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className={`p-1 mt-0.5 rounded-md ${getActivityColor(activity.type)}`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <div className="text-sm">{activity.text}</div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs text-white/60">{activity.timestamp}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-white/5">
                    {activity.type.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 text-center">
        <Link 
          href="/activity" 
          className="text-xs px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5 transition-colors inline-block"
        >
          View full activity log
        </Link>
      </div>
    </div>
  );
}
