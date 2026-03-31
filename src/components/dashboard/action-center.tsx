export function ActionCenter() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Action Center</h3>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          View all
        </button>
      </div>
      <div className="space-y-4">
        {recommendedActions.slice(0, 3).map((action) => (
          <div key={action.id} className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{action.title}</h4>
                <p className="text-sm text-white/60 mt-1">{action.description}</p>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-colors">
                {action.actionLabel}
              </button>
            </div>
            {action.priority === 'critical' && (
              <div className="flex items-center mt-3">
                <span className="inline-flex h-2 w-2 rounded-full bg-red-400 mr-2"></span>
                <span className="text-xs text-red-400">High Priority</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
