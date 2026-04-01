export function BrokerRemovalQueue() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Broker Removal</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400">
            {brokerQueue.filter(b => b.status === 'processing').length} Active
          </span>
        </div>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          View dashboard
        </button>
      </div>
      <div className="space-y-4">
        {brokerQueue
          .sort((a, b) => {
            // Sort by status: processing first, then queued, then completed
            if (a.status === b.status) return 0;
            if (a.status === 'processing') return -1;
            if (b.status === 'processing') return 1;
            if (a.status === 'queued') return -1;
            return 1;
          })
          .map((broker) => {
            const statusColors = {
              queued: "bg-yellow-500/10 text-yellow-400",
              processing: "bg-blue-500/10 text-blue-400",
              completed: "bg-green-500/10 text-green-400",
              failed: "bg-red-500/10 text-red-400"
            };

            const statusIcons = {
              queued: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              processing: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              completed: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              failed: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            };

            return (
              <div 
                key={broker.id} 
                className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{broker.broker}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md ${statusColors[broker.status]}`}>
                        {statusIcons[broker.status]}
                        {broker.status.toUpperCase()}
                      </div>
                      {broker.status === 'processing' && (
                        <div className="text-xs px-2 py-1 rounded-md bg-white/5">
                          {broker.progress}%
                        </div>
                      )}
                    </div>
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
                            ? "bg-gradient-to-r from-green-400 to-green-500" 
                            : broker.status === "failed"
                            ? "bg-gradient-to-r from-red-400 to-red-500"
                            : "bg-gradient-to-r from-blue-400 to-blue-500"
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
      <div className="mt-4 pt-4 border-t border-white/5 text-center">
        <button className="text-xs px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5 transition-colors">
          View all broker removals
        </button>
      </div>
    </div>
  );
}
