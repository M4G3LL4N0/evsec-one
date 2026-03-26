import * as React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none ${className || ""}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
