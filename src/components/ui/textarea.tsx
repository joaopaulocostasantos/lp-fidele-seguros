import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1C1C1C] ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111948]/40 focus-visible:border-[#111948] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
            error
              ? "border-red-400"
              : "border-[#E4E7F0] hover:border-[#111948]/30",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
