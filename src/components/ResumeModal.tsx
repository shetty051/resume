"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* MODAL DIALOG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-md bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-layered)] z-10 space-y-6"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* HEADER ICON & TITLE */}
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shadow-sm">
                <FileText size={24} />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent)] flex items-center gap-1.5">
                  <Sparkles size={12} />
                  <span>Resume Status Update</span>
                </span>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  Resume Coming Soon!
                </h3>
              </div>
            </div>

            {/* MESSAGE CONTENT */}
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
              I&apos;m currently updating my formal resume with my latest full-stack projects, AI detection models, and metrics. For now, check out my featured projects and achievements on this website!
            </p>

            {/* ACTIONS */}
            <div className="pt-2 flex justify-end">
              <Button
                variant="primary"
                size="sm"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold tracking-wider"
              >
                <span>Got It!</span>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
