import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#1C1C1C] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111948]/40 focus-visible:border-[#111948] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            error
              ? "border-red-400 focus-visible:ring-red-400/30"
              : "border-[#E4E7F0] hover:border-[#111948]/30",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
