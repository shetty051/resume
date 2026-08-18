"use client";

import React from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { TextBlock } from "@/components/TextBlock";
import { studioConfig } from "@/config/studio";
import {
  Mail,
  MapPin,
  Phone,
  ArrowLeft,
  ArrowUpRight,
  GitBranch,
  Share2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <SectionContainer
      scriptAccent="Initiate Dialogue"
      subtitle="Direct Channels"
      title="Let's Connect"
    >
      <div className="space-y-12 max-w-5xl mx-auto">
        {/* TOP NAVIGATION & AVAILABILITY BANNER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] bg-[var(--bg-secondary)] text-xs font-semibold text-[var(--text-primary)] transition-all"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>

          {/* Availability Note */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for new opportunities &amp; collaborations</span>
          </div>
        </div>

        {/* INTRODUCTORY BRIEF */}
        <div className="space-y-3 max-w-2xl">
          <TextBlock variant="lead" className="text-lg md:text-xl font-medium text-[var(--text-primary)]">
            Whether you have a full-stack engineering initiative, an AI integration project, or simply want to connect — my inbox and channels are wide open.
          </TextBlock>
        </div>

        {/* PROMINENT CONTACT METHOD CARDS (3 CARDS GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LINKEDIN CARD */}
          <motion.a
            href={studioConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="group"
          >
            <Card className="h-full flex flex-col justify-between space-y-6 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all duration-200 border-t-2 border-t-[#0A66C2]">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[#0A66C2] flex items-center justify-center">
                  <Share2 size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0A66C2]">
                    PROFESSIONAL NETWORK
                  </span>
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    LinkedIn
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)] font-medium">
                  Connect with me on LinkedIn for professional updates and networking.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                <span>linkedin.com/in/aakash-b-shetty</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Card>
          </motion.a>

          {/* GITHUB CARD */}
          <motion.a
            href={studioConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="group"
          >
            <Card className="h-full flex flex-col justify-between space-y-6 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all duration-200 border-t-2 border-t-[var(--text-primary)]">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] flex items-center justify-center">
                  <GitBranch size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    CODE REPOSITORIES
                  </span>
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    GitHub
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)] font-medium">
                  Check out my open-source projects, full-stack apps, and code repositories.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                <span>github.com/shetty051</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Card>
          </motion.a>

          {/* EMAIL CARD */}
          <motion.a
            href={`mailto:${studioConfig.email}`}
            whileHover={{ y: -3 }}
            className="group"
          >
            <Card className="h-full flex flex-col justify-between space-y-6 bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all duration-200 border-t-2 border-t-[var(--accent)]">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent)] flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                    DIRECT INQUIRY
                  </span>
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    Send Email
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)] font-medium">
                  Send me a direct email for inquiries, project proposals, or quick messages.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                <span className="truncate">{studioConfig.email}</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1" />
              </div>
            </Card>
          </motion.a>
        </div>

        {/* ADDITIONAL DETAILS BAR (PHONE & LOCATION) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <Card hoverEffect={false} className="flex items-center gap-4 bg-[var(--bg-secondary)]">
            <div className="p-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--accent)]">
              <Phone size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] font-bold block">
                Direct Telephone
              </span>
              <a
                href={`tel:${studioConfig.phone}`}
                className="text-sm font-mono font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                +91 {studioConfig.phone}
              </a>
            </div>
          </Card>

          <Card hoverEffect={false} className="flex items-center gap-4 bg-[var(--bg-secondary)]">
            <div className="p-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--accent)]">
              <MapPin size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] font-bold block">
                Studio Location
              </span>
              <p className="text-sm font-mono font-bold text-[var(--text-primary)]">
                {studioConfig.location}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
