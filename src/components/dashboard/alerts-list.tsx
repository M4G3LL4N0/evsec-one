export function AlertsList() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Security Alerts</h3>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          View all
        </button>
      </div>
      <div className="space-y-3">
        {alerts.slice(0, 5).map(alert => {
          const severityColors = {
            critical: "bg-red-500/10 text-red-400",
            high: "bg-red-500/10 text-red-400",
            medium: "bg-yellow-500/10 text-yellow-400",
            low: "bg-white/5 text-white/80"
          };

          return (
            <div 
              key={alert.id} 
              className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className={`text-xs px-2 py-1 rounded-md ${severityColors[alert.severity]}`}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
