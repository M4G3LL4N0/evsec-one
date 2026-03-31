export function BrokerRemovalQueue() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Broker Removal</h3>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          View dashboard
        </button>
      </div>
      <div className="space-y-4">
        {brokerQueue.map((broker) => {
          const statusColors = {
            queued: "text-yellow-400",
            processing: "text-blue-400", 
            completed: "text-green-400",
            failed: "text-red-400"
          };

          return (
            <div key={broker.id} className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{broker.broker}</h4>
                  <p className={`text-xs mt-1 ${statusColors[broker.status]}`}>
                    {broker.status.toUpperCase()}
                  </p>
                </div>
                <div className="text-xs text-white/50">
                  {broker.lastUpdated}
                </div>
              </div>
              {broker.status !== "queued" && (
                <div className="mt-3">
                  <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        broker.status === "completed" 
                          ? "bg-green-400" 
                          : "bg-blue-400"
                      }`}
                      style={{ width: `${broker.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
