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
    <div className="p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold">Privacy Score</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-white/5">
              {privacyScore.status}
            </span>
          </div>
          <p className="text-sm text-white/70">{privacyScore.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-end gap-2">
            <span className={cn("text-5xl font-bold tracking-tight", getScoreColor(privacyScore.score))}>
              {privacyScore.score}
            </span>
            <div className="pb-1 flex flex-col items-center">
              <span className="text-xs text-green-400">{privacyScore.change}</span>
              <span className="text-xs text-white/60">{privacyScore.percentile}% percentile</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <svg className="w-20 h-20">
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
