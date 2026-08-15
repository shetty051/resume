"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/config/studio";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { TextBlock } from "@/components/TextBlock";
import { ArrowLeft, ArrowUpRight, GitBranch, Construction, CheckCircle2, Clock } from "lucide-react";

export default function AllProjectsPage() {
  return (
    <SectionContainer
      scriptAccent="Full Repository & Archive"
      subtitle="Complete Portfolio"
      title="All Projects"
    >
      <div className="space-y-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors font-semibold"
        >
          <ArrowLeft size={16} />
          Back to Featured Projects
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="h-full flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent)]">
                    {project.category}
                  </span>

                  {project.status === "Under Construction" ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
                      <Construction size={11} />
                      <span>Under Construction</span>
                    </span>
                  ) : project.status === "In Development" ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                      <Clock size={11} />
                      <span>In Dev</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={11} />
                      <span>Completed</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--text-muted)] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <TextBlock variant="body" className="text-xs sm:text-sm">
                  {project.summary}
                </TextBlock>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    href={`/projects/${project.id}`}
                    variant="ghost"
                    size="sm"
                    className="flex-1 justify-between text-xs"
                  >
                    <span>Inspect Brief</span>
                    <ArrowUpRight size={14} />
                  </Button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                      title="View GitHub"
                    >
                      <GitBranch size={15} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
