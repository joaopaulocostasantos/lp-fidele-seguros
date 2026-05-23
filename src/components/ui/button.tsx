import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#21A621] text-white shadow-lg shadow-[#21A621]/25 hover:bg-[#1a8c1a] hover:shadow-[#21A621]/30 active:scale-[0.98] focus-visible:ring-[#21A621]",
        premium:
          "bg-[#21A621] text-white shadow-lg shadow-[#21A621]/30 hover:bg-[#1a8c1a] hover:shadow-[#21A621]/40 active:scale-[0.98] focus-visible:ring-[#21A621]",
        brand:
          "bg-[#111948] text-white shadow-lg shadow-[#111948]/25 hover:bg-[#0d1438] hover:shadow-[#111948]/30 active:scale-[0.98] focus-visible:ring-[#111948]",
        outline:
          "border-2 border-[#111948] bg-transparent text-[#111948] hover:bg-[#111948] hover:text-white active:scale-[0.98] focus-visible:ring-[#111948]",
        "outline-light":
          "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 active:scale-[0.98] focus-visible:ring-white",
        ghost: "text-[#111948] hover:bg-[#111948]/8 hover:text-[#111948]",
        destructive: "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-500",
        accent:
          "bg-[#FFCC00] text-[#111948] font-bold shadow-lg shadow-[#FFCC00]/30 hover:bg-[#e6b800] active:scale-[0.98] focus-visible:ring-[#FFCC00]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
