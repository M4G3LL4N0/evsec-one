import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {startIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
            {startIcon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition-all",
            "hover:border-white/20 focus:border-white/30 focus:ring-2 focus:ring-white/10",
            "placeholder:text-white/40",
            startIcon ? "pl-10" : "",
            endIcon ? "pr-10" : "",
            className
          )}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
            {endIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
