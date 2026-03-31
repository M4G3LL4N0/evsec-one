export function IdentityRiskCard() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <h3 className="text-lg font-semibold mb-4">Identity Risk</h3>
      <div className="space-y-3">
        <div className="text-sm text-white/70">{identityRisk.description}</div>
        <div className="space-y-2">
          {identityRisk.factors.map((factor, i) => (
            <div key={i} className="flex items-center text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2"></span>
              {factor}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
