import { ArrowUpRight } from "lucide-react";
import type { Project, ProblemSolutionItem } from "@/data/projects";
import { aiHealthcareReadme } from "@/data/projects";
import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ProjectImage } from "@/components/project-image";
import { AiHealthcareScreenshotGallery } from "@/components/ai-healthcare-screenshot-gallery";
import { ProjectReadmeHero, ReadmeSection, ReadmeTableOfContents } from "@/components/project-readme-shared";

const tableOfContents = [
  ["overview", "Overview"],
  ["background", "Background"],
  ["my-role", "My Role"],
  ["tech-stack", "Tech Stack"],
  ["architecture", "Architecture"],
  ["erd", "ERD"],
  ["api-preview", "API Preview"],
  ["folder-structure", "Folder Structure"],
  ["screenshots", "Screenshots"],
  ["features", "Features"],
  ["problem-solution", "Problem & Solution"],
  ["troubleshooting", "Troubleshooting"],
  ["retrospective", "Retrospective"],
  ["project-status", "Project Status"],
] as const;

export function ProblemSolution({ item, index }: { item: ProblemSolutionItem; index: number }) {
  const fields = [
    ["Problem", item.problem],
    ["Cause", item.cause],
    ["Solution", item.solution],
    ["Result", item.result],
    ["What I Learned", item.learned],
  ];

  return (
    <article id={item.id} className="scroll-mt-24 overflow-hidden rounded-xl border bg-white">
      <header className="border-b bg-zinc-50 px-5 py-5 sm:px-7 sm:py-6">
        <p className="font-mono text-xs font-semibold tracking-wider text-zinc-500">Case {String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{item.title}</h3>
      </header>
      <dl className="space-y-7 px-5 py-7 sm:px-7 sm:py-8">
        {fields.filter(([, value]) => value).map(([label, value]) => (
          <div key={label}>
            <dt>
              <span className="inline-flex rounded-full border bg-zinc-50 px-3 py-1 font-mono text-xs font-semibold text-zinc-700">{label}</span>
            </dt>
            <dd className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function AiHealthcareReadme({ project }: { project: Project }) {
  const readme = aiHealthcareReadme;

  return (
    <div className="container-page py-12 sm:py-16">
      <ProjectReadmeHero project={project} title={readme.title} summary={readme.summary} badges={readme.badges} />
      <ReadmeTableOfContents items={tableOfContents} />

      <div className="max-w-4xl">
        <ReadmeSection id="overview" title="Overview">
          <div className="max-w-3xl space-y-4 text-sm leading-7 text-zinc-600">
            {readme.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </ReadmeSection>

        <ReadmeSection id="background" title="Background">
          <div className="max-w-3xl space-y-4 text-sm leading-7 text-zinc-600">
            {readme.background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </ReadmeSection>

        <ReadmeSection id="my-role" title="My Role">
          <p className="text-sm leading-7 text-zinc-600">{readme.roleSummary}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {readme.roles.map((role, index) => (
              <div key={role} className="flex items-start gap-3 rounded-xl border bg-white px-4 py-3.5">
                <span className="mt-0.5 font-mono text-xs text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm font-medium leading-6 text-zinc-700">{role}</p>
              </div>
            ))}
          </div>
        </ReadmeSection>

        <ReadmeSection id="tech-stack" title="Tech Stack">
          <div className="grid gap-4 sm:grid-cols-2">
            {readme.techStack.map((group) => (
              <article key={group.category} className="rounded-xl border bg-white p-5">
                <h3 className="font-mono text-sm font-semibold">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="rounded-md bg-zinc-100 px-2.5 py-1.5 text-xs text-zinc-700">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </ReadmeSection>

        <ReadmeSection id="architecture" title="Architecture">
          <MermaidDiagram chart={readme.architectureDiagram} label="AI Healthcare Architecture Diagram" />
          <div className="mt-7">
            <h3 className="text-base font-semibold">Architecture Description</h3>
            <div className="mt-4 max-w-3xl space-y-3 text-sm leading-7 text-zinc-600">
              {readme.architectureDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </ReadmeSection>

        <ReadmeSection id="erd" title="ERD">
          <ProjectImage src={readme.erdImage} alt="AI Healthcare ERD" emptyLabel="ERD 준비 중" />
        </ReadmeSection>

        <ReadmeSection id="api-preview" title="API Preview">
          <div className="overflow-x-auto rounded-xl border bg-white">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead className="border-b bg-zinc-50 text-zinc-700">
                <tr>
                  <th className="px-5 py-4 font-semibold">Method</th>
                  <th className="px-5 py-4 font-semibold">Endpoint</th>
                  <th className="px-5 py-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y text-zinc-600">
                {readme.apiPreview.map((api) => (
                  <tr key={`${api.method}-${api.endpoint}`}>
                    <td className="px-5 py-4"><span className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-xs font-semibold text-zinc-800">{api.method}</span></td>
                    <td className="px-5 py-4 font-mono text-xs text-zinc-800">{api.endpoint}</td>
                    <td className="px-5 py-4">{api.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ReadmeSection>

        <ReadmeSection id="folder-structure" title="Folder Structure">
          <pre className="overflow-x-auto rounded-xl border bg-zinc-950 p-5 font-mono text-sm leading-7 text-zinc-200 sm:p-6">
            <code>{readme.folderStructure}</code>
          </pre>
        </ReadmeSection>

        <ReadmeSection id="screenshots" title="Screenshots">
          <AiHealthcareScreenshotGallery />
          <div className="hidden">
            {false && readme.screenshots.map((screenshot) => (
              <article key={screenshot.title}>
                <h3 className="mb-3 text-sm font-semibold">{screenshot.title}</h3>
                <ProjectImage src={screenshot.src} alt={`AI Healthcare ${screenshot.title} 화면`} emptyLabel="이미지 준비 중" />
              </article>
            ))}
          </div>
        </ReadmeSection>

        <ReadmeSection id="features" title="Features">
          <div className="grid gap-4 sm:grid-cols-2">
            {readme.features.map((feature, index) => (
              <article key={feature.title} className="rounded-xl border bg-white p-5">
                <p className="font-mono text-xs text-zinc-400">FEATURE {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-semibold">{feature.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  {feature.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </ReadmeSection>

        <ReadmeSection id="problem-solution" title="Problem & Solution">
          <div className="space-y-5">
            {readme.problems.map((item, index) => <ProblemSolution key={`${item.title}-${index}`} item={item} index={index} />)}
          </div>
        </ReadmeSection>

        <ReadmeSection id="troubleshooting" title="Troubleshooting">
          <nav aria-label="Troubleshooting 사례 바로가기">
            <ul className="grid gap-3 sm:grid-cols-2">
              {readme.troubleshooting.map((item, index) => (
                <li key={item.caseId}>
                  <a href={`#${item.caseId}`} className="group flex items-center justify-between rounded-xl border bg-white px-4 py-4 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-black">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                      {item.label}
                    </span>
                    <ArrowUpRight size={15} className="text-zinc-400 transition group-hover:text-black" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </ReadmeSection>

        <ReadmeSection id="retrospective" title="Retrospective">
          <div className="grid gap-4 lg:grid-cols-3">
            {readme.retrospective.map((item) => (
              <article key={item.title} className="rounded-xl border bg-white p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                  {item.items.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </ReadmeSection>

        <ReadmeSection id="project-status" title="Project Status">
          <dl className="grid gap-3 sm:grid-cols-2">
            {readme.projectStatus.map((item) => (
              <div key={item.label} className="rounded-xl border bg-white p-5">
                <dt className="font-mono text-xs font-semibold text-zinc-500">{item.label}</dt>
                <dd className="mt-2 text-base font-semibold text-zinc-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </ReadmeSection>
      </div>
    </div>
  );
}
