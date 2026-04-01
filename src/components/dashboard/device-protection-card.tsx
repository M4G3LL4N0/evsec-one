export function DeviceProtectionCard() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Device Protection</h3>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          Settings
        </button>
      </div>
      <div className="space-y-3">
        {deviceChecks.map((check) => {
          const statusColors = {
            enabled: "bg-green-500/10 text-green-400",
            partial: "bg-yellow-500/10 text-yellow-400",
            disabled: "bg-red-500/10 text-red-400"
          };

          const statusIcons = {
            enabled: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            partial: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            disabled: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )
          };

          return (
            <div 
              key={check.name} 
              className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg ${statusColors[check.status]}`}>
                    {statusIcons[check.status]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{check.name}</div>
                    <div className="text-xs text-white/60">{check.recommendation}</div>
                  </div>
                </div>
                <button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:bg-white/5 transition-colors">
                  Fix
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 text-center">
        <button className="text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-colors">
          Run Device Scan
        </button>
      </div>
    </div>
  );
}
