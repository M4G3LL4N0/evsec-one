export function ProtectionLayersCard() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Protection Layers</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-xs">
            <span className="relative flex h-2 w-2 mr-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            3/5 Active
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {protectionLayers.map(layer => {
          const statusColors = {
            active: "bg-green-500/10 text-green-400",
            inactive: "bg-red-500/10 text-red-400", 
            pending: "bg-yellow-500/10 text-yellow-400"
          };

          const statusIcons = {
            active: (
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            inactive: (
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>  
            ),
            pending: (
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )
          };

          return (
            <div 
              key={layer.name} 
              className="p-3 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-1 rounded-md ${statusColors[layer.status]}`}>
                    {statusIcons[layer.status]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{layer.name}</div>
                    <div className="text-xs text-white/60">{layer.description}</div>
                  </div>
                </div>
                {layer.status === 'pending' ? (
                  <button className="text-xs px-2 py-1 rounded-md border border-white/10 hover:bg-white/5 transition-colors">
                    Enable
                  </button>
                ) : (
                  <div className={`text-xs px-2 py-1 rounded-md ${statusColors[layer.status]}`}>
                    {layer.status.toUpperCase()}
                  </div>
                )}
              </div>
              {layer.status !== 'active' && (
                <div className="mt-3 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${layer.status === 'pending' ? 'bg-yellow-400' : 'bg-red-400'}`}
                    style={{ width: `${layer.status === 'pending' ? '50%' : '20%'}` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button className="mt-6 w-full text-sm px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-colors">
        Upgrade Protection
      </button>
    </div>
  );
}
