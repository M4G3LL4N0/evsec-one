import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Severity, Tone } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getToneBg(tone: Tone): string {
  switch(tone) {
    case 'danger': return 'bg-red-400';
    case 'warning': return 'bg-yellow-400';
    case 'success': return 'bg-green-400';
    default: return 'bg-white/40';
  }
}

export function getToneText(tone: Tone): string {
  switch(tone) {
    case 'danger': return 'text-red-400';
    case 'warning': return 'text-yellow-400';
    case 'success': return 'text-green-400';
    default: return 'text-white/80';
  }
}

export function severityToTone(severity: Severity | Tone): Tone {
  // If already a Tone value, return it directly
  if (["neutral", "warning", "danger", "success"].includes(severity)) {
    return severity as Tone;
  }
  
  // Map Severity to Tone
  switch (severity) {
    case "low":
      return "neutral";
    case "medium":
      return "warning";
    case "high":
    case "critical":
      return "danger";
    default:
      return "neutral";
  }
}
