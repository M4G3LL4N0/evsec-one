import { exposureSummary } from "@/lib/mock-data";
import { StatCard } from "../shared/stat-card";
import { severityToTone } from "@/lib/utils";

export function ExposureSummary() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Exposure Summary</h3>
        <button className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          View details
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,31,0.4)_0%,rgba(7,16,31,0)_100%)] pointer-events-none" />
        {exposureSummary.map((item) => {
          const maxValue = Math.max(...exposureSummary.map(i => i.value));
          const widthPercentage = Math.min((item.value / maxValue) * 100, 100);
          
          return (
            <div key={item.label} className="group">
              <div className="p-3 border border-white/10 rounded-xl hover:border-white/20 transition-colors bg-gradient-to-b from-black/30 to-black/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium">{item.label}</h4>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${getToneBg(item.tone)}/10 ${getToneText(item.tone)}`}>
                    {item.value}
                  </span>
                </div>
                <p className="text-xs text-white/60 mb-3">{item.description}</p>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${getToneBg(item.tone)}`}
                    style={{ width: `${widthPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getToneBg(tone: string) {
  switch(tone) {
    case 'danger': return 'bg-red-400';
    case 'warning': return 'bg-yellow-400';
    default: return 'bg-white/40';
  }
}

function getToneText(tone: string) {
  switch(tone) {
    case 'danger': return 'text-red-200';
    case 'warning': return 'text-yellow-200';
    default: return 'text-white/70';
  }
}
