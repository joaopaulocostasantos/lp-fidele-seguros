"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

export function GlowCard({
  children,
  className,
  glowColor = "blue",
  delay = 0,
}: GlowCardProps) {
  const glowMap: Record<string, string> = {
    blue: "hover:shadow-blue-500/10",
    indigo: "hover:shadow-indigo-500/10",
    emerald: "hover:shadow-emerald-500/10",
    amber: "hover:shadow-amber-500/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm",
        "shadow-xl transition-all duration-300",
        "hover:border-white/15 hover:bg-white/[0.05] hover:shadow-2xl",
        glowMap[glowColor] ?? "hover:shadow-blue-500/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
