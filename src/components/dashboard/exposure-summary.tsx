import { exposureSummary } from "@/lib/mock-data";
import { StatCard } from "../shared/stat-card";
import { severityToTone } from "@/lib/utils";

export function ExposureSummary() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <h3 className="text-lg font-semibold mb-4">Exposure Summary</h3>
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
