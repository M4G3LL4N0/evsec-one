export function DeviceProtectionCard() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <h3 className="text-lg font-semibold mb-4">Device Protection</h3>
      <div className="space-y-3">
        {deviceChecks.map((check) => (
          <div key={check.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div className="text-sm">{check.name}</div>
            <div className={`text-sm ${
              check.status === 'enabled' ? 'text-green-400' : 
              check.status === 'partial' ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {check.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
