import { ArrowDown } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectReadmeHero, ReadmeSection, ReadmeTableOfContents } from "@/components/project-readme-shared";

const tableOfContents = [
  ["overview", "Overview"], ["background", "Background"], ["tech-stack", "Tech Stack"],
  ["my-role", "My Role"], ["workflow", "Workflow"], ["features", "Features"],
  ["retrospective", "Retrospective"], ["project-status", "Project Status"],
] as const;

const readme = {
  title: "Telegram Automation",
  summary: "Python 기반 Telegram Bot과 Google Sheets를 활용한 업무 자동화 프로젝트",
  badges: ["Python", "Telegram Bot API", "Google Sheets API", "Pandas"],
  overview: [
    "Telegram Automation은 Telegram Bot API와 Google Sheets API를 활용하여 반복적인 메시지 처리와 데이터 기록을 자동화하기 위해 만든 개인 프로젝트입니다.",
    "특정 키워드를 감지해 자동으로 응답하고, 필요한 데이터를 Google Sheets에 기록하도록 구현했습니다.",
  ],
  background: [
    "반복적으로 처리하던 메시지 응답과 기록 업무를 줄이기 위해 Python을 활용한 자동화 프로그램을 만들어 보고 싶었습니다.",
    "Telegram Bot과 Google Sheets를 연동하면 메시지 처리와 데이터 기록을 한 번에 자동화할 수 있다고 판단해 프로젝트를 진행했습니다.",
  ],
  techStack: [
    { category: "Automation", items: ["Python", "Pandas"] },
    { category: "External API", items: ["Telegram Bot API", "Google Sheets API"] },
  ],
  roles: ["Python 자동화 로직 구현", "Telegram Bot API 연동", "키워드 감지 및 자동 응답 기능 구현", "Google Sheets API 연동", "메시지 및 데이터 기록 기능 구현"],
  workflow: ["Telegram Message", "Keyword Detection", "Python Processing", "Auto Response", "Google Sheets Record"],
  features: ["키워드 감지", "자동 응답", "Google Sheets 기록", "데이터 누적 관리"],
  retrospective: [
    { title: "잘했던 점", items: ["실제 반복 업무를 자동화했습니다.", "Telegram과 Google Sheets를 하나의 흐름으로 연결했습니다."] },
    { title: "아쉬웠던 점", items: ["예외 처리와 로그 관리가 충분하지 않았습니다."] },
    { title: "앞으로 개선하고 싶은 점", items: ["로그 관리 추가", "예외 처리 보강", "DB 저장 방식 적용", "Docker 환경 구성"] },
  ],
  projectStatus: [{ label: "Status", value: "Completed" }, { label: "Version", value: "v1.0" }, { label: "Type", value: "Personal Project" }],
};

export function TelegramAutomationReadme({ project }: { project: Project }) {
  return (
    <div className="container-page py-12 sm:py-16">
      <ProjectReadmeHero project={project} title={readme.title} summary={readme.summary} badges={readme.badges} />
      <ReadmeTableOfContents items={tableOfContents} />
      <div className="max-w-4xl">
        <ReadmeSection id="overview" title="Overview"><TextParagraphs items={readme.overview} /></ReadmeSection>
        <ReadmeSection id="background" title="Background"><TextParagraphs items={readme.background} /></ReadmeSection>
        <ReadmeSection id="tech-stack" title="Tech Stack">
          <div className="grid gap-4 sm:grid-cols-2">{readme.techStack.map((group) => <article key={group.category} className="rounded-xl border bg-white p-5"><h3 className="font-mono text-sm font-semibold">{group.category}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-md bg-zinc-100 px-2.5 py-1.5 text-xs text-zinc-700">{item}</span>)}</div></article>)}</div>
        </ReadmeSection>
        <ReadmeSection id="my-role" title="My Role">
          <div className="grid gap-3 sm:grid-cols-2">{readme.roles.map((role, index) => <div key={role} className="flex items-start gap-3 rounded-xl border bg-white px-4 py-3.5"><span className="mt-0.5 font-mono text-xs text-zinc-400">{String(index + 1).padStart(2, "0")}</span><p className="text-sm font-medium leading-6 text-zinc-700">{role}</p></div>)}</div>
        </ReadmeSection>
        <ReadmeSection id="workflow" title="Workflow">
          <ol className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">{readme.workflow.map((step, index) => <li key={step} className="contents"><div className="rounded-xl border bg-white px-4 py-5 text-center text-sm font-semibold shadow-card">{step}</div>{index < readme.workflow.length - 1 && <ArrowDown className="mx-auto text-zinc-300 sm:-rotate-90" aria-hidden="true" />}</li>)}</ol>
        </ReadmeSection>
        <ReadmeSection id="features" title="Features">
          <div className="grid gap-4 sm:grid-cols-2">{readme.features.map((feature, index) => <article key={feature} className="rounded-xl border bg-white p-5"><p className="font-mono text-xs text-zinc-400">FEATURE {String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 font-semibold">{feature}</h3></article>)}</div>
        </ReadmeSection>
        <ReadmeSection id="retrospective" title="Retrospective">
          <div className="grid gap-4 lg:grid-cols-3">{readme.retrospective.map((item) => <article key={item.title} className="rounded-xl border bg-white p-5"><h3 className="font-semibold">{item.title}</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">{item.items.map((detail) => <li key={detail} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden="true" /><span>{detail}</span></li>)}</ul></article>)}</div>
        </ReadmeSection>
        <ReadmeSection id="project-status" title="Project Status">
          <dl className="grid gap-3 sm:grid-cols-3">{readme.projectStatus.map((item) => <div key={item.label} className="rounded-xl border bg-white p-5"><dt className="font-mono text-xs font-semibold text-zinc-500">{item.label}</dt><dd className="mt-2 text-base font-semibold text-zinc-900">{item.value}</dd></div>)}</dl>
        </ReadmeSection>
      </div>
    </div>
  );
}

function TextParagraphs({ items }: { items: string[] }) {
  return <div className="max-w-3xl space-y-4 text-sm leading-7 text-zinc-600">{items.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>;
}
