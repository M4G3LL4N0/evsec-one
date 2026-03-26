import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Severity, Tone } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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
