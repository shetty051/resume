"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  title?: string;
  scriptAccent?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
  className,
  subtitle,
  title,
  scriptAccent,
}) => {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto", className)}
    >
      {(title || subtitle || scriptAccent) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 space-y-2"
        >
          {scriptAccent && (
            <span className="font-serif italic text-lg md:text-xl text-[var(--accent)] block tracking-normal">
              {scriptAccent}
            </span>
          )}
          {subtitle && (
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight">
              {title}
            </h2>
          )}
          <div className="w-12 h-[2px] bg-[var(--accent)] mt-4 opacity-80" />
        </motion.div>
      )}
      {children}
    </section>
  );
};
