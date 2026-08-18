"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projectsData } from "@/config/studio";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { TextBlock } from "@/components/TextBlock";
import { ArrowLeft, ArrowUpRight, GitBranch, Construction, CheckCircle2, Clock } from "lucide-react";

export default function AllProjectsPage() {
  const router = useRouter();

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
            <div
              key={project.id}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="block h-full cursor-pointer group focus:outline-none"
            >
              <Card className="h-full flex flex-col justify-between border-[var(--border-subtle)] hover:border-[var(--accent)] bg-[var(--bg-card)] transition-all duration-200 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                      {project.category}
                    </span>

                    {project.status === "Under Construction" ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        <Construction size={11} />
                        <span>Under Construction</span>
                      </span>
                    ) : project.status === "In Development" ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                        <Clock size={11} />
                        <span>In Dev</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        <CheckCircle2 size={11} />
                        <span>Completed</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight
                        size={18}
                        className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    </h3>
                    <p className="text-xs font-semibold text-[var(--text-muted)] mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <TextBlock variant="body" className="text-xs sm:text-sm">
                    {project.summary}
                  </TextBlock>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                      }}
                      className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors shrink-0 cursor-pointer"
                      title="View GitHub Repository"
                    >
                      <GitBranch size={15} />
                    </button>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
