import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Info } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  description?: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  tone?: "neutral" | "warning" | "danger" | "success";
  compact?: boolean;
  className?: string;
  tooltip?: string;
}

export function StatCard({
  title,
  value,
  description,
  change,
  trend = "neutral",
  tone = "neutral",
  compact = false,
  className,
  tooltip,
}: StatCardProps) {
  const toneColors = {
    neutral: "text-white",
    warning: "text-yellow-400",
    danger: "text-red-400",
    success: "text-green-400",
  };

  const trendColors = {
    up: "text-green-400",
    down: "text-red-400",
    neutral: "text-white/60",
  };

  const trendIcons = {
    up: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    down: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6", 
    neutral: "M8 7h8m-8 4h8m-8 4h8",
  };

  return (
    <div className={cn(
      "p-4 border border-white/10 rounded-xl hover:border-white/20 transition-colors bg-gradient-to-b from-black/50 to-black/20 backdrop-blur",
      className
    )}>
      <div className={cn("flex items-center justify-between", compact ? "gap-2" : "mb-2")}>
        <div className="flex items-center gap-2">
          <h3 className={cn("text-sm", compact ? "truncate" : "")}>{title}</h3>
          {tooltip && (
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-3.5 w-3.5 text-white/40 hover:text-white/60 transition-colors" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[200px] text-sm">
                {tooltip}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        {change && (
          <div className={cn(
            "text-xs px-2 py-1 rounded-full flex items-center gap-1",
            trend === "up" ? "bg-green-400/10" : trend === "down" ? "bg-red-400/10" : "bg-white/5"
          )}>
            {trend !== "neutral" && (
              <svg 
                className={cn("h-3 w-3", trendColors[trend])}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={trendIcons[trend]} />
              </svg>
            )}
            {change}
          </div>
        )}
      </div>
      <div className={cn(
        "font-semibold", 
        toneColors[tone], 
        compact ? "text-lg" : "text-2xl",
        "flex items-center gap-2"
      )}>
        {value}
      </div>
      {description && (
        <p className={cn(
          "text-sm", 
          compact ? "truncate" : "mt-1", 
          "text-white/60"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
