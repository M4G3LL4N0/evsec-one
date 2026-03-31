export function DashboardTopbar() {
  return (
    <div className="border-b border-white/10 px-6 py-4 backdrop-blur bg-black/50">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-medium">Dashboard</h1>
          <div className="flex items-center mt-1 text-sm text-white/60">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Protection active since Mar 15, 2026
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors">
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-green-400" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21a2 2 0 0 1-3.46 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-sm font-medium">
              A
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm">Account</span>
              <span className="text-xs text-white/60">Premium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
