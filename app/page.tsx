import Link from "next/link";
import { ArrowRight, Code2, Github, MapPin } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { profile } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="container-page grid min-h-[72vh] items-center gap-12 py-20 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="eyebrow">Java · Spring Backend Developer</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-7xl">문제를 분석하고<br />안정적인 서비스를 만드는 <span className="whitespace-nowrap">백엔드 개발자</span></h1>
          <div className="lead space-y-4"><p>생산 현장에서 문제의 원인을 분석하고 해결한 경험을 바탕으로<br className="hidden sm:block" /> Java와 Spring Boot 기반 백엔드 역량을 쌓아왔습니다.</p><p>안정성과 유지보수를 고려한 개발을 지향하며,<br className="hidden sm:block" /> AI와 공공데이터를 활용한 프로젝트를 통해<br className="hidden sm:block" /> 실제 서비스 구현 경험을 넓혀가고 있습니다.</p></div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="button-primary">프로젝트 보기 <ArrowRight size={16} /></Link>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="button-secondary"><Github size={16} /> GitHub</a>
          </div>
        </div>
        <aside className="rounded-2xl border bg-white p-6 shadow-card">
          <Code2 size={28} />
          <h2 className="mt-8 text-lg font-semibold">{profile.role}</h2>
          <p className="mt-3 flex items-center gap-2 text-sm text-zinc-500"><MapPin size={15} /> {profile.location}</p>
          <dl className="mt-8 grid gap-4 border-t pt-6 text-sm">
            <div><dt className="text-zinc-500">관심 기술</dt><dd className="mt-1 font-medium">Java · Spring Boot<br />REST API · AI Backend</dd></div>
            <div><dt className="text-zinc-500">현재</dt><dd className="mt-1 font-medium">세종사이버대학교<br />컴퓨터·AI공학과 재학</dd></div>
          </dl>
        </aside>
      </section>
      <section className="border-y bg-white py-20">
        <div className="container-page">
          <div className="mb-10 flex items-end justify-between gap-6"><div><p className="eyebrow">프로젝트</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">프로젝트</h2></div><Link href="/projects" className="hidden items-center gap-2 text-sm font-medium sm:flex">전체 프로젝트 <ArrowRight size={16} /></Link></div>
          <div className="grid gap-5 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>
    </>
  );
}
