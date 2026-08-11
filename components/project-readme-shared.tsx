import Link from "next/link";
import { ArrowLeft, BookOpen, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export type TocItem = readonly [id: string, label: string];

export function ProjectReadmeHero({ project, title, summary, badges }: { project: Project; title: string; summary: string; badges: string[] }) {
  return <>
    <Link href="/projects" className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black"><ArrowLeft size={16} /> 전체 프로젝트</Link>
    <header className="pb-12">
      <p className="eyebrow">프로젝트 README</p><h1 className="page-title">{title}</h1><p className="lead">{summary}</p>
      <p className="mt-5 text-sm font-medium text-zinc-600">{project.type} · {project.period}</p>
      <div className="mt-7 flex max-w-3xl flex-wrap gap-2">{badges.map((badge) => <span key={badge} className="rounded-full border bg-white px-3 py-1.5 text-xs font-medium text-zinc-700">{badge}</span>)}</div>
      <div className="mt-8 flex flex-wrap gap-3">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary"><Github size={16} /> GitHub <ExternalLink size={14} /></a>}<a href="#table-of-contents" className="button-primary"><BookOpen size={16} /> README 목차로 이동</a></div>
    </header>
  </>;
}

export function ReadmeTableOfContents({ items }: { items: readonly TocItem[] }) {
  return <nav id="table-of-contents" className="scroll-mt-24 border-y py-7" aria-label="README 목차"><p className="mb-4 text-sm font-semibold">Table of Contents</p><ol className="grid gap-x-8 gap-y-2 text-sm text-zinc-600 sm:grid-cols-2 lg:grid-cols-3">{items.map(([id, label], index) => <li key={id}><a href={`#${id}`} className="group inline-flex gap-2 hover:text-black"><span className="font-mono text-xs text-zinc-400">{String(index + 1).padStart(2, "0")}</span><span className="group-hover:underline">{label}</span></a></li>)}</ol></nav>;
}

export function ReadmeSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-24 border-t py-10 sm:py-12"><h2 className="text-2xl font-semibold tracking-tight">{title}</h2><div className="mt-6">{children}</div></section>;
}

export function ReadmePlaceholder({ children = "내용 준비 중" }: { children?: React.ReactNode }) {
  return <div className="rounded-xl border border-dashed bg-zinc-50 px-5 py-8 text-sm text-zinc-500">{children}</div>;
}
