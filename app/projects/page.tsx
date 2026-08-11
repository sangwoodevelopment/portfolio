import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = { title: "프로젝트" };

export default function ProjectsPage() {
  return <div className="container-page py-16"><PageHeader eyebrow="프로젝트" title="프로젝트" description="직접 구현하며 학습한 백엔드 프로젝트입니다. 각 README에서 프로젝트의 배경과 구현 과정, 고민과 회고를 확인할 수 있습니다." /><section className="grid gap-5 py-12 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</section></div>;
}
