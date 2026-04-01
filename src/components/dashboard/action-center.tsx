export function ActionCenter() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Action Center</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400">
            {recommendedActions.filter(a => a.priority === 'critical').length} Critical
          </span>
        </div>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          View all
        </button>
      </div>
      <div className="space-y-4">
        {recommendedActions
          .sort((a, b) => a.priority === 'critical' ? -1 : 1)
          .slice(0, 3)
          .map((action) => {
            const priorityColors = {
              critical: 'bg-red-500/10 text-red-400',
              high: 'bg-yellow-500/10 text-yellow-400',
              medium: 'bg-blue-500/10 text-blue-400'
            };

            return (
              <div 
                key={action.id} 
                className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{action.title}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[action.priority]}`}>
                        {action.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 mt-1">{action.description}</p>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-colors">
                    {action.actionLabel}
                  </button>
                </div>
                {action.priority === 'critical' && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-red-400 to-red-500"
                        style={{ width: '100%' }}
                      />
                    </div>
                    <span className="text-xs text-red-400">Complete immediately</span>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 text-center">
        <button className="text-xs px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5 transition-colors">
          View all recommended actions
        </button>
      </div>
    </div>
  );
}
