export function DashboardTopbar() {
  return (
    <div className="border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-medium">Dashboard</h1>
          <p className="text-sm text-white/60">Protection active since Mar 15, 2026</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative text-sm">
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-green-400" />
            <svg
              width="18"
              height="18"
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
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600"></div>
            <span className="text-sm hidden md:inline">Account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
