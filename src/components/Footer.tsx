"use client";

import React from "react";
import Link from "next/link";
import { studioConfig } from "@/config/studio";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 py-16 px-4 sm:px-6 lg:px-12 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <p className="font-bold text-lg text-[var(--text-primary)]">
            {studioConfig.name}
          </p>
          <p className="text-xs text-[var(--text-muted)] tracking-wider uppercase">
            Designed with high-contrast editorial craft &amp; Framer Motion
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-8 text-xs uppercase tracking-widest text-[var(--text-secondary)] font-medium">
          <a
            href={studioConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={studioConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[var(--border-subtle)] flex justify-between text-[11px] text-[var(--text-muted)]">
        <span>&copy; {new Date().getFullYear()} {studioConfig.name}. All rights reserved.</span>
        <span>Studio Edition v3.2</span>
      </div>
    </footer>
  );
};
