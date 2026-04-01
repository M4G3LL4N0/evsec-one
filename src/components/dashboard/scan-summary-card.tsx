export function ScanSummaryCard() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Scan History</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
          Automated
        </span>
      </div>
      <div className="space-y-4">
        {/* Last Scan */}
        <div className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-md bg-green-500/10">
                <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-sm">Last Scan</div>
                <div className="text-xs text-white/60">Completed with findings</div>
              </div>
            </div>
            <div className="text-sm font-medium">2:22 PM</div>
          </div>
        </div>

        {/* Next Scan */}
        <div className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-md bg-blue-500/10">
                <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-sm">Next Scan</div>
                <div className="text-xs text-white/60">Scheduled by system</div>
              </div>
            </div>
            <div className="text-sm font-medium">2:00 AM</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
            <div className="text-xs text-white/60">Exposures</div>
            <div className="text-xl font-bold mt-1">42</div>
            <div className="h-1 mt-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-purple-400 rounded-full" style={{ width: '68%' }} />
            </div>
          </div>
          <div className="p-3 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
            <div className="text-xs text-white/60">High Risk</div>
            <div className="text-xl font-bold text-red-400 mt-1">8</div>
            <div className="h-1 mt-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-red-400 rounded-full" style={{ width: '19%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        <button className="flex-1 text-xs px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-1">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Results
        </button>
        <button className="flex-1 text-xs px-3 py-1.5 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-colors flex items-center justify-center gap-1">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Run Scan
        </button>
      </div>
    </div>
  );
}
