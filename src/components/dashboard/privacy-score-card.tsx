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
    <div className="p-6 border border-white/10 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium">Your Privacy Score</h3>
          <div className="mt-1 flex items-center space-x-2">
            <span className={cn("text-4xl font-bold tracking-tight", getScoreColor(privacyScore.score))}>
              {privacyScore.score}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-white/5">
              {privacyScore.status}
            </span>
          </div>
          <p className="mt-2 text-sm text-white/60">{privacyScore.description}</p>
          <div className="mt-4 flex space-x-3">
            <button className="text-xs px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
              Improve score
            </button>
            <button className="text-xs px-3 py-1.5 rounded-md bg-indigo-500/80 hover:bg-indigo-500 transition-colors">
              Review exposures
            </button>
          </div>
        </div>
        
        <div className="relative">
          <svg className="w-24 h-24">
            <circle
              className="text-white/5"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r="40"
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
              r="40"
              cx="50%"
              cy="50%"
              transform="rotate(-90 45 45)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-xs text-white/60">{privacyScore.percentile}% percentile</span>
            <span className="text-[10px] text-green-400">{privacyScore.change}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-3 gap-4 text-xs">
        <div>
          <div className="text-white/60">Broker Removal</div>
          <div className="font-medium">25%</div>
        </div>
        <div>
          <div className="text-white/60">Breach Impact</div>
          <div className="font-medium">Medium</div>
        </div>
        <div>
          <div className="text-white/60">Tracking Blocked</div>
          <div className="font-medium">86%</div>
        </div>
      </div>
    </div>
  );
}
