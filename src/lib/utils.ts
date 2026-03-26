import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Severity } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function severityToTone(severity: Severity): "neutral" | "warning" | "danger" | "success" {
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
