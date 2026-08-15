"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/config/studio";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { TextBlock } from "@/components/TextBlock";
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  Tag,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  FlaskConical,
  BookOpen,
} from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;

  const project =
    projectsData.find((p) => p.id === projectId) || projectsData[0];

  return (
    <SectionContainer
      scriptAccent="Artifact Study"
      subtitle={project.category}
      title={project.title}
    >
      <div className="space-y-10">
        {/* BREADCRUMB & NAVIGATION BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[var(--border-subtle)]">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[var(--text-muted)]">
            <Link
              href="/#projects"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Projects
            </Link>
            <span>/</span>
            <span className="text-[var(--text-primary)] font-semibold">
              {project.title}
            </span>
          </nav>

          {/* Top Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] bg-[var(--bg-secondary)] text-xs font-semibold text-[var(--text-primary)] transition-all"
            >
              <ArrowLeft size={14} />
              <span>Back to Projects</span>
            </Link>

            {project.deployedUrl && (
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--accent)] text-white text-xs font-semibold tracking-wide shadow-md hover:brightness-110 transition-all"
              >
                <span>View Project App</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* LARGE EDITORIAL IMAGE / COVER HEADER */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] border border-[var(--border-subtle)] p-8 flex flex-col justify-between shadow-[var(--shadow-layered)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />

          {/* TOP COVER BADGES */}
          <div className="flex justify-between items-start z-10">
            <span className="text-xs uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full bg-[var(--bg-primary)]/90 backdrop-blur-md border border-[var(--border-subtle)] text-[var(--accent)]">
              {project.category}
            </span>

            {project.status === "In Development" ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400">
                <Clock size={14} />
                <span>In Development (Research Phase)</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={14} />
                <span>Completed</span>
              </span>
            )}
          </div>

          {/* BOTTOM COVER TITLE */}
          <div className="z-10 space-y-2">
            <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
              EST. {project.year}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base font-medium text-[var(--text-secondary)]">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT 8-COLUMN MAIN BRIEF */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                Overview &amp; Architecture
              </h2>

              <TextBlock variant="lead">
                {project.summary}
              </TextBlock>

              <TextBlock variant="body">
                {project.description}
              </TextBlock>

              {/* RESEARCH PHASE NOTICE IF APPLICABLE */}
              {project.researchNote && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium space-y-1">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-amber-800 dark:text-amber-200">
                    <FlaskConical size={16} />
                    <span>Research Phase Note</span>
                  </div>
                  <TextBlock variant="body" className="text-amber-800 dark:text-amber-200">
                    {project.researchNote}
                  </TextBlock>
                </div>
              )}
            </Card>

            {/* KEY FEATURES LIST */}
            {project.features && project.features.length > 0 && (
              <Card className="space-y-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Sparkles size={20} className="text-[var(--accent)]" />
                  Key System Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] font-medium leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-[var(--accent)] font-bold text-base">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* DESIGN GAP SECTION */}
            {project.designGap && (
              <Card className="space-y-4 border-l-4 border-l-amber-500">
                <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Layers size={20} className="text-amber-500" />
                  Design Gap &amp; Need for v2.0
                </h3>
                <TextBlock variant="body">
                  {project.designGap}
                </TextBlock>
              </Card>
            )}

            {/* VERSION COMPARISON (COLLABOWRITE) */}
            {project.versionComparison && (
              <Card className="space-y-4 border-l-4 border-l-[var(--accent)]">
                <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <Layers size={20} className="text-[var(--accent)]" />
                  Architectural Evolution (v1.0 vs v2.0)
                </h3>
                <TextBlock variant="body">
                  {project.versionComparison}
                </TextBlock>
                <div className="pt-2">
                  <Link
                    href="/projects/collabowrite-1"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[var(--accent)] hover:underline"
                  >
                    <BookOpen size={14} />
                    <span>Inspect CollaboWrite 1.0 Prototype Brief</span>
                  </Link>
                </div>
              </Card>
            )}
          </div>

          {/* RIGHT 4-COLUMN TECH SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="space-y-6 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)]">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <Tag size={18} />
                <h3 className="font-bold text-base text-[var(--text-primary)]">
                  Tech Stack
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.metrics && (
                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold block">
                    PERFORMANCE METRIC
                  </span>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    {project.metrics}
                  </p>
                </div>
              )}

              {/* SIDEBAR ACTION LINKS */}
              <div className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
                {project.deployedUrl && (
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-bold tracking-wide hover:bg-[var(--accent)] hover:text-white transition-colors"
                  >
                    <span>Launch Live Application</span>
                    <ExternalLink size={15} />
                  </a>
                )}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-5 py-3 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-xs font-bold tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span>View GitHub Repository</span>
                    <GitBranch size={15} />
                  </a>
                ) : (
                  <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] text-center font-medium">
                    Repository under academic review
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
