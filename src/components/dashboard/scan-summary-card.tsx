export function ScanSummaryCard() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <h3 className="text-lg font-semibold mb-4">Scan Summary</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm">Last Scan</div>
          <div className="text-sm font-medium">Today at 2:22 PM</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">Next Scan</div>
          <div className="text-sm font-medium">Tomorrow at 2:00 AM</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">Total Exposures</div>
          <div className="text-sm font-medium">42</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">High Risk</div>
          <div className="text-sm font-medium text-red-400">8</div>
        </div>
      </div>
      <button className="mt-6 w-full text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-colors">
        Run New Scan
      </button>
    </div>
  );
}
