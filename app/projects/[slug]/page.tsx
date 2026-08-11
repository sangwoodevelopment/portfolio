import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Monitor } from "lucide-react";
import { AiHealthcareReadme } from "@/components/ai-healthcare-readme";
import { NutriWellReadme } from "@/components/nutri-well-readme";
import { TelegramAutomationReadme } from "@/components/telegram-automation-readme";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: project?.title ?? "프로젝트" };
}

function ReadmeSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="grid gap-4 border-t py-9 md:grid-cols-[64px_180px_1fr]"><span className="font-mono text-xs text-zinc-400">{number}</span><h2 className="font-semibold">{title}</h2><div className="max-w-2xl text-sm leading-7 text-zinc-600">{children}</div></section>;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  if (project.slug === "ai-healthcare") return <AiHealthcareReadme project={project} />;
  if (project.slug === "nutri-well") return <NutriWellReadme project={project} />;
  if (project.slug === "telegram-automation") return <TelegramAutomationReadme project={project} />;
  const s = project.sections;
  return <div className="container-page py-12 sm:py-16"><Link href="/projects" className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-black"><ArrowLeft size={16} /> 전체 프로젝트</Link><header className="pb-12"><p className="eyebrow">프로젝트 README</p><h1 className="page-title">{project.title}</h1><p className="lead">{project.description}</p><div className="mt-7 flex gap-3">{project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary"><Github size={16} /> GitHub</a> : <span className="button-disabled"><Github size={16} /> GitHub 비공개</span>}{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button-secondary"><Monitor size={16} /> Demo</a>}</div></header><div className="border-b"><ReadmeSection number="01" title="개요"><p>{s.overview}</p></ReadmeSection><ReadmeSection number="02" title="배경"><p>{s.background}</p></ReadmeSection><ReadmeSection number="03" title="담당 역할"><p>{s.role}</p></ReadmeSection><ReadmeSection number="04" title="Tech Stack"><div className="flex flex-wrap gap-2">{s.techStack.map((tech) => <span key={tech} className="rounded-full border bg-white px-3 py-1 text-xs text-zinc-700">{tech}</span>)}</div></ReadmeSection><ReadmeSection number="05" title="아키텍처"><p>{s.architecture}</p></ReadmeSection><ReadmeSection number="06" title="주요 기능"><ul className="list-disc space-y-1 pl-4">{s.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></ReadmeSection><ReadmeSection number="07" title="문제와 해결"><p>{s.problemSolution}</p></ReadmeSection><ReadmeSection number="08" title="회고"><p>{s.retrospective}</p></ReadmeSection></div></div>;
}
