import * as React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition-colors hover:border-white/20 focus:border-white/30 focus:ring-2 focus:ring-white/10 ${className || ""}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
