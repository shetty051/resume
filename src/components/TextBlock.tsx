"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TextBlockProps {
  children: React.ReactNode;
  variant?: "body" | "lead" | "meta" | "quote" | "script";
  className?: string;
  as?: React.ElementType;
}

export const TextBlock: React.FC<TextBlockProps> = ({
  children,
  variant = "body",
  className,
  as: Component = "p",
}) => {
  const variantStyles = {
    lead: "text-lg md:text-xl font-normal text-[var(--text-secondary)] leading-relaxed tracking-wide text-justify",
    body: "text-base text-[var(--text-secondary)] leading-relaxed font-normal text-justify",
    meta: "text-xs uppercase tracking-[0.18em] font-medium text-[var(--text-muted)]",
    quote: "text-xl md:text-2xl font-light italic text-[var(--text-primary)] border-l-2 border-[var(--accent)] pl-6 my-6 text-justify",
    script: "font-serif italic text-lg text-[var(--accent)] tracking-normal",
  };

  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
};
