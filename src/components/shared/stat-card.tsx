import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number | string;
  description?: string;
  change?: string;
  tone?: "neutral" | "warning" | "danger" | "success";
  compact?: boolean;
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  change,
  tone = "neutral",
  compact = false,
  className,
}: StatCardProps) {
  const toneColors = {
    neutral: "text-white",
    warning: "text-yellow-400",
    danger: "text-red-400",
    success: "text-green-400",
  };

  return (
    <div className={cn("p-4 border border-white/10 rounded-xl", className)}>
      <div className={cn("flex items-center justify-between", compact ? "gap-2" : "mb-2")}>
        <h3 className={cn("text-sm", compact ? "truncate" : "")}>{title}</h3>
        {change && (
          <div className="text-xs px-2 py-1 rounded-full bg-white/5">{change}</div>
        )}
      </div>
      <div className={cn("font-semibold", toneColors[tone], compact ? "text-lg" : "text-2xl")}>
        {value}
      </div>
      {description && (
        <p className={cn("text-sm", compact ? "truncate" : "mt-1", "text-white/60")}>
          {description}
        </p>
      )}
    </div>
  );
}
