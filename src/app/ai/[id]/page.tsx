"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { aiProjectsData } from "@/config/studio";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { TextBlock } from "@/components/TextBlock";
import {
  ArrowLeft,
  ExternalLink,
  Award,
  Heart,
  Sparkles,
  Bookmark,
  Share2,
} from "lucide-react";

export default function AiDetailPage() {
  const params = useParams();
  const aiId = params.id as string;

  const item =
    aiProjectsData.find((a) => a.id === aiId) || aiProjectsData[0];

  return (
    <SectionContainer
      scriptAccent="Personal Endeavors"
      subtitle={item.category}
      title={item.title}
    >
      <div className="space-y-10">
        {/* TOP NAVIGATION BAR & BREADCRUMB */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[var(--text-muted)]">
            <Link
              href="/#ai"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Achievements &amp; Interests
            </Link>
            <span>/</span>
            <span className="text-[var(--text-primary)] font-semibold">
              {item.title}
            </span>
          </nav>

          <Link
            href="/#ai"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] bg-[var(--bg-secondary)] text-xs font-semibold text-[var(--text-primary)] transition-all"
          >
            <ArrowLeft size={14} />
            <span>Back to Section (#ai)</span>
          </Link>
        </div>

        {/* LARGE EDITORIAL HEADER COVER */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] border border-[var(--border-subtle)] p-8 flex flex-col justify-between shadow-[var(--shadow-layered)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-indigo)]/10 rounded-full blur-3xl" />

          {/* TOP CATEGORY BADGE */}
          <div className="flex justify-between items-start z-10">
            <span className="text-xs uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--bg-primary)]/90 backdrop-blur-md border border-[var(--border-subtle)] text-[var(--accent-indigo)]">
              {item.category}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              STUDIO ARCHIVE
            </span>
          </div>

          {/* COVER TITLE & TAGLINE */}
          <div className="z-10 space-y-2">
            <h1 className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight">
              {item.title}
            </h1>
            <TextBlock variant="script" className="text-lg sm:text-xl">
              {item.tagline}
            </TextBlock>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT 8-COLUMN DETAILS */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                Context &amp; Narrative
              </h2>

              <TextBlock variant="lead">
                {item.description}
              </TextBlock>

              {item.additionalInfo && (
                <TextBlock variant="body">
                  {item.additionalInfo}
                </TextBlock>
              )}
            </Card>

            {/* KEY HIGHLIGHTS LIST */}
            <Card className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Sparkles size={20} className="text-[var(--accent-indigo)]" />
                Key Highlights &amp; Milestones
              </h3>
              <ul className="space-y-3">
                {item.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] font-medium leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-[var(--accent-indigo)] font-bold text-base">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* RELATED EXTERNAL LINKS */}
            {item.links && item.links.length > 0 && (
              <Card className="space-y-6 border-l-4 border-l-[var(--accent-indigo)]">
                <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Share2 size={20} className="text-[var(--accent-indigo)]" />
                  Related Links &amp; External Profiles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-indigo)] text-xs font-bold text-[var(--text-primary)] hover:text-[var(--accent-indigo)] transition-all flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* RIGHT 4-COLUMN HIGHLIGHTS SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="space-y-6 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)]">
              {/* ACHIEVEMENT BOX */}
              <div className="space-y-2 pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 text-[var(--accent-indigo)] font-bold text-xs uppercase tracking-wider">
                  <Award size={16} />
                  <span>Featured Honor</span>
                </div>
                <p className="text-sm font-bold text-[var(--text-primary)]">
                  {item.achievement}
                </p>
              </div>

              {/* INTEREST BOX */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--accent)] font-bold text-xs uppercase tracking-wider">
                  <Heart size={16} />
                  <span>Personal Focus</span>
                </div>
                <p className="text-sm font-medium text-[var(--text-secondary)]">
                  {item.interest}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
