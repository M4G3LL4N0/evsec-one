export function IdentityRiskCard() {
  const identityRisk = {
    description:
      "Public identity exposure is elevated because multiple signals are present across search, broker, and account surfaces.",
    factors: [
      "Personal identifiers found in broker-style listings",
      "Recovery information should be reviewed for reuse",
      "Public-profile details may make impersonation easier",
    ],
  };

  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Identity Risk</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400">
          High Risk
        </span>
      </div>
      <div className="space-y-3">
        <div className="text-sm text-white/70">{identityRisk.description}</div>
        <div className="space-y-3">
          {identityRisk.factors.map((factor, i) => (
            <div 
              key={i} 
              className="flex items-start gap-3 p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-center p-1 rounded-full bg-red-500/10">
                <svg 
                  className="w-3 h-3 text-red-400" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
              <div className="text-sm">{factor}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-4 w-full text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-colors">
        View Protection Options
      </button>
    </div>
  );
}
