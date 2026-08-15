"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      onClick={onClick}
      className={cn(
        "relative rounded-2xl border p-6 md:p-8 backdrop-blur-md transition-colors duration-300",
        "bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]",
        "shadow-[var(--shadow-layered)]",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
