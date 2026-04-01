export function AlertsList() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Security Alerts</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400">
            {alerts.filter(a => a.severity === 'critical').length} Critical
          </span>
        </div>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          View all
        </button>
      </div>
      <div className="space-y-3">
        {alerts
          .sort((a, b) => a.severity === 'critical' ? -1 : 1)
          .slice(0, 5)
          .map(alert => {
            const severityColors = {
              critical: "bg-red-500/10 text-red-400",
              high: "bg-red-500/10 text-red-400",
              medium: "bg-yellow-500/10 text-yellow-400",
              low: "bg-white/5 text-white/80"
            };

            const severityIcons = {
              critical: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              high: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              medium: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              low: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            };

            return (
              <div 
                key={alert.id} 
                className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md ${severityColors[alert.severity]}`}>
                    {severityIcons[alert.severity]}
                    {alert.severity.toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <p className="text-xs text-white/60 mt-1">{alert.source}</p>
                  </div>
                  <div className="text-xs text-white/50">
                    {alert.time}
                  </div>
                </div>
                {alert.severity === 'critical' && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-red-400 to-red-500"
                        style={{ width: '100%' }}
                      />
                    </div>
                    <span className="text-xs text-red-400">Requires immediate attention</span>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 text-center">
        <button className="text-xs px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5 transition-colors">
          View all security alerts
        </button>
      </div>
    </div>
  );
}
