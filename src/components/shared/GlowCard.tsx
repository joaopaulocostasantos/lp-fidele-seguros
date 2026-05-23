"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "brand";
  delay?: number;
}

export function GlowCard({
  children,
  className,
  variant = "light",
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl border p-6 transition-all duration-300",
        variant === "light"
          ? "bg-white border-[#E4E7F0] shadow-sm hover:shadow-md hover:border-[#111948]/20"
          : "bg-[#F7F8FC] border-[#E4E7F0] shadow-sm hover:shadow-md hover:border-[#111948]/25",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
