export function MonitoringCard() {
  const monitoringStatus = {
    lastScan: "Today, 9:12 AM",
    nextScan: "Tomorrow morning",
    watching: ["Identity brokers", "Account exposure", "Public profile changes", "Credential signals"],
  };

  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Monitoring Status</h3>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          Settings
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm">Status</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Active
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">
              Protected
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">Last Scan</div>
          <div className="text-sm font-medium">{monitoringStatus.lastScan}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">Next Scan</div>
          <div className="text-sm font-medium">{monitoringStatus.nextScan}</div>
        </div>
        <div className="pt-4 border-t border-white/5">
          <div className="text-sm mb-2">Watching for:</div>
          <div className="flex flex-wrap gap-2">
            {monitoringStatus.watching.map((item) => (
              <span 
                key={item}
                className="text-xs px-2 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button className="mt-6 w-full text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-colors">
        Run Scan Now
      </button>
    </div>
  );
}
