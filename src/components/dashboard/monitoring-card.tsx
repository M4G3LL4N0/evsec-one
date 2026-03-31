export function MonitoringCard() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <h3 className="text-lg font-semibold mb-4">Monitoring Status</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm">Status</div>
          <div className="flex items-center text-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Active
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">Last Scan</div>
          <div className="text-sm text-white/70">{monitoringStatus.lastScan}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">Next Scan</div>
          <div className="text-sm text-white/70">{monitoringStatus.nextScan}</div>
        </div>
      </div>
    </div>
  );
}
