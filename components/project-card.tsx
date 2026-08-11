import Link from "next/link";
import { ArrowUpRight, BookOpen, Github, Monitor } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-zinc-400">
      <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm font-medium text-zinc-600">{project.type} · {project.period}</p>
      <p className="mt-3 text-xs leading-5 text-zinc-500">
        <span className="font-semibold text-zinc-700">담당 역할</span> · {project.cardRoles.join(" · ")}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.cardTechStack.map((tech) => (
          <span key={tech} className="rounded-full border bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600">
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-5 flex-1 text-sm leading-6 text-zinc-600">{project.description}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        <Link href={`/projects/${project.slug}`} className="button-primary"><BookOpen size={16} /> README</Link>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
        ) : (
          <span className="button-disabled" title="GitHub 링크 비공개"><Github size={16} /> GitHub</span>
        )}
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button-secondary"><Monitor size={16} /> Demo <ArrowUpRight size={14} /></a>}
      </div>
    </article>
  );
}
