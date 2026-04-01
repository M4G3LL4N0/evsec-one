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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {exposureSummary.map((item) => (
          <div key={item.label} className="flex flex-col">
            <StatCard
              title={item.label}
              value={item.value}
              description={item.description}
              tone={severityToTone(item.tone)}
              compact
            />
            <div className="mt-1">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getToneBg(item.tone)} rounded-full`}
                  style={{ width: `${Math.min(item.value * 10, 100)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
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
  );
}
