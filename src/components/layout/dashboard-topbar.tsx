export function DashboardTopbar() {
  return (
    <div className="border-b border-white/10 p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm">Welcome back!</div>
        <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 hover:bg-white/5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M8 13.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666ZM8 8v2.667M8 5.333V8"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
