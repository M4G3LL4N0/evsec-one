export function ProtectionLayersCard() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <h3 className="text-lg font-semibold mb-4">Protection Layers</h3>
      <div className="space-y-3">
        {protectionLayers.map(layer => {
          const statusColors = {
            active: "text-green-400",
            inactive: "text-red-400",
            pending: "text-yellow-400"
          };

          return (
            <div key={layer.name} className="flex items-center gap-3 p-3 rounded-lg border border-white/10">
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">{layer.name}</div>
                <div className="text-xs text-white/60">{layer.description}</div>
              </div>
              <div className={`text-xs ${statusColors[layer.status]}`}>
                {layer.status.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-4 w-full text-xs px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/10 transition-colors">
        Configure Protection
      </button>
    </div>
  );
}
