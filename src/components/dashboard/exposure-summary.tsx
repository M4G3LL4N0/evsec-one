import { exposureSummary } from "@/lib/mock-data";
import { StatCard } from "../shared/stat-card";
import type { Tone } from "@/lib/types";

export function ExposureSummary() {
  return (
    <div className="p-4 border border-white/10 rounded-xl">
      <h3 className="text-sm font-medium mb-4">Exposure Summary</h3>
      <div className="grid grid-cols-2 gap-4">
        {exposureSummary.map((item) => (
          <StatCard
            key={item.label}
            title={item.label}
            value={item.value}
            tone={severityToTone(item.tone)}
            compact
          />
        ))}
      </div>
    </div>
  );
}
