import { privacyScore } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function PrivacyScoreCard() {
  const getScoreColor = (score: number) => {
    if (score < 50) return "text-red-400";
    if (score < 80) return "text-yellow-400";
    return "text-green-400";
  };

  const getRingColor = (score: number) => {
    if (score < 50) return "stroke-red-400";
    if (score < 80) return "stroke-yellow-400";
    return "stroke-green-400";
  };

  const circumference = 2 * Math.PI * 40;

  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur-lg relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-indigo-500/10 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-10"></div>
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl group-hover:opacity-80 transition-opacity"></div>
      <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl group-hover:opacity-80 transition-opacity"></div>
      <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold">Privacy Score</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
                {privacyScore.status}
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-[240px]">{privacyScore.description}</p>
          </div>
          <button className="text-xs p-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 16v-4m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-end gap-3">
              <span className={cn("text-5xl font-bold tracking-tight", getScoreColor(privacyScore.score))}>
                {privacyScore.score}
              </span>
              <div className="pb-1 flex flex-col items-start gap-0.5">
                <span className="text-xs font-medium text-green-400 flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                    <path d="M5 10l7-7m0 0l7 7m-7-7v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {privacyScore.change}
                </span>
                <span className="text-xs text-white/60">Top {privacyScore.percentile}%</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <svg className="w-24 h-24">
            <circle
              className="text-white/10"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r="32"
              cx="50%"
              cy="50%"
            />
            <circle
              className={getRingColor(privacyScore.score)}
              strokeWidth="6"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={circumference - (privacyScore.score / 100) * circumference}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="32"
              cx="50%"
              cy="50%"
              transform="rotate(-90 40 40)"
              style={{
                transition: 'stroke-dashoffset 1s ease-out'
              }}
            />
          </svg>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <StatCard 
          title="Broker Removal" 
          value="25%" 
          description="In progress"
          tone={privacyScore.score < 50 ? "danger" : "warning"}
          compact
        />
        <StatCard 
          title="Breach Impact" 
          value="Medium" 
          description="Moderate risk"
          tone="warning"
          compact
        />
        <StatCard 
          title="Tracking Blocked" 
          value="86%" 
          description="Good coverage"
          tone="success"
          compact
        />
      </div>

      <div className="mt-8 flex justify-between gap-3">
        <Button 
          variant="outline" 
          className="w-full text-sm bg-white/5 hover:bg-white/10"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
            <path d="M13 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V11" stroke="currentColor" strokeWidth="2" />
            <path d="M18 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V2" stroke="currentColor" strokeWidth="2" />
            <path d="M7 11v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 11v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          View Report
        </Button>
        <Button 
          className="w-full text-sm bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
            <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Scan Again
        </Button>
      </div>
    </div>
  );
}
