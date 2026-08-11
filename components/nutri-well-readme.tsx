import type { Project } from "@/data/projects";
import { nutriWellMedia } from "@/data/nutri-well-screenshots";
import { NutriWellMediaImage, NutriWellScreenshotGallery } from "@/components/nutri-well-image-gallery";
import { ProjectReadmeHero, ReadmeSection, ReadmeTableOfContents } from "@/components/project-readme-shared";

const tableOfContents = [
  ["overview", "Overview"], ["background", "Background"], ["tech-stack", "Tech Stack"], ["my-role", "My Role"],
  ["architecture", "Architecture"], ["erd", "ERD"], ["features", "Features"], ["screenshots", "Screenshots"],
  ["problem-solution", "Problem & Solution"], ["award", "Award"], ["retrospective", "Retrospective"], ["project-status", "Project Status"],
] as const;

const techStack = [
  { category: "Backend", items: ["Java 17", "Spring Boot 3.1.6", "Spring Security 6.1.5"] },
  { category: "Database", items: ["Oracle XE 11g", "Oracle RDS"] },
  { category: "View & API", items: ["Thymeleaf", "Naver Login API", "Google Login API"] },
  { category: "Infrastructure", items: ["AWS EC2", "RDS", "S3"] },
];

const features = [
  { title: "회원 및 인증", items: ["회원가입", "일반 로그인", "Google·Naver 소셜 로그인"] },
  { title: "식품 탐색", items: ["식품명·카테고리·영양소 범위 검색", "검색 결과 페이지네이션", "식품 상세 영양정보와 그래프"] },
  { title: "영양 기록", items: ["일일 섭취 식품 기록", "영양소별 권장량과 섭취량 표시", "캘린더 기반 기록 관리"] },
  { title: "개인화 기능", items: ["즐겨찾기와 제외 식품", "기초대사량 계산", "회원정보 수정 및 식품 추가 요청"] },
];

export function NutriWellReadme({ project }: { project: Project }) {
  return <div className="container-page py-12 sm:py-16">
    <ProjectReadmeHero project={{ ...project, type: "팀 프로젝트" as Project["type"], period: "2024.05.30 ~ 2024.07.15" }} title="Nutri-Well" summary="식품 영양정보 제공과 개인 영양정보 기록·관리를 위한 Spring Boot 기반 웹 애플리케이션" badges={["Java", "Spring Boot", "Spring Security", "Oracle", "Thymeleaf", "AWS"]} />
    <ReadmeTableOfContents items={tableOfContents} />
    <div className="max-w-4xl">
      <ReadmeSection id="overview" title="Overview"><Text items={["Nutri-Well은 식품의 영양정보를 제공하고 사용자가 매일 섭취한 영양소를 기록·관리할 수 있도록 만든 팀 프로젝트입니다.", "다양한 식품의 영양정보와 개인의 영양 상태를 한곳에서 확인하여 건강한 식생활을 돕는 것을 목표로 했습니다."]} /></ReadmeSection>
      <ReadmeSection id="background" title="Background"><Text items={["식품 영양정보 검색부터 일일 섭취 기록까지 이어지는 서비스를 구현하며 Spring Boot 웹 개발과 팀 협업을 경험하기 위해 진행했습니다.", "팀원별로 회원, 식품 검색, 영양 기록, 배포 영역을 나누고 GitHub를 통해 기능을 통합했습니다."]} /></ReadmeSection>
      <ReadmeSection id="tech-stack" title="Tech Stack"><div className="grid gap-4 sm:grid-cols-2">{techStack.map((group) => <article key={group.category} className="rounded-xl border bg-white p-5"><h3 className="font-mono text-sm font-semibold">{group.category}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-md bg-zinc-100 px-2.5 py-1.5 text-xs text-zinc-700">{item}</span>)}</div></article>)}</div></ReadmeSection>
      <ReadmeSection id="my-role" title="My Role"><Text items={["회원가입 기능과 회원가입 페이지의 UI/UX, 입력값 실시간 유효성 검사를 담당했습니다. OAuth2 소셜 로그인과 마이페이지는 다른 팀원이 담당했습니다."]} /><div className="mt-5 grid gap-3 sm:grid-cols-2">{["회원가입 기능 구현", "회원가입 페이지 UI/UX 구현", "회원가입 입력값 실시간 유효성 검사", "GitHub 기반 기능 통합 및 협업"].map((role, index) => <div key={role} className="flex items-start gap-3 rounded-xl border bg-white px-4 py-3.5"><span className="mt-0.5 font-mono text-xs text-zinc-400">{String(index + 1).padStart(2, "0")}</span><p className="text-sm font-medium leading-6 text-zinc-700">{role}</p></div>)}</div></ReadmeSection>
      <ReadmeSection id="architecture" title="Architecture"><NutriWellMediaImage item={nutriWellMedia.architecture} /></ReadmeSection>
      <ReadmeSection id="erd" title="ERD"><NutriWellMediaImage item={nutriWellMedia.erd} /></ReadmeSection>
      <ReadmeSection id="features" title="Features"><div className="grid gap-4 sm:grid-cols-2">{features.map((feature, index) => <article key={feature.title} className="rounded-xl border bg-white p-5"><p className="font-mono text-xs text-zinc-400">FEATURE {String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 font-semibold">{feature.title}</h3><BulletList items={feature.items} /></article>)}</div></ReadmeSection>
      <ReadmeSection id="screenshots" title="Screenshots"><NutriWellScreenshotGallery /></ReadmeSection>
      <ReadmeSection id="problem-solution" title="Problem & Solution"><div className="space-y-5"><Case title="회원가입 입력 오류를 제출 전에 알기 어려운 문제" problem="사용자가 모든 정보를 입력하고 제출한 뒤에야 오류를 확인하면 입력 경험이 불편해질 수 있었습니다." solution="회원가입 폼에서 입력값을 실시간으로 검사하고 각 필드 가까이에 상태를 안내하도록 UI를 구성했습니다." result="사용자가 제출 전에 잘못된 입력을 바로 수정할 수 있는 회원가입 흐름을 구현했습니다." /><Case title="팀 단위 기능 통합" problem="팀원이 각자 구현한 회원, 식품, 마이페이지 기능을 하나의 서비스로 합쳐야 했습니다." solution="담당 범위를 명확히 나누고 GitHub를 통해 변경사항을 공유하며 회원가입 기능을 전체 흐름에 맞춰 통합했습니다." result="다른 팀원의 담당 기능을 침범하지 않으면서 회원가입 영역을 서비스에 연결했습니다." /></div></ReadmeSection>
      <ReadmeSection id="award" title="Award"><NutriWellMediaImage item={nutriWellMedia.award} /></ReadmeSection>
      <ReadmeSection id="retrospective" title="Retrospective"><div className="grid gap-4 lg:grid-cols-3"><Review title="잘했던 점" items={["담당 범위를 회원가입 기능에 집중해 완성했습니다.", "실시간 유효성 검사로 사용자 경험을 개선했습니다."]} /><Review title="배운 점" items={["여러 기능이 동시에 개발되는 팀 프로젝트의 통합 과정을 경험했습니다.", "UI 피드백과 검증 로직을 함께 설계하는 중요성을 배웠습니다."]} /><Review title="아쉬웠던 점" items={["개발 속도가 느려 팀원에게 도움을 받은 부분이 있었습니다.", "테스트와 예외 상황 검증을 더 체계화하지 못했습니다."]} /></div></ReadmeSection>
      <ReadmeSection id="project-status" title="Project Status"><dl className="grid gap-3 sm:grid-cols-3">{[["Status", "Completed"], ["Period", "2024.05.30 ~ 2024.07.15"], ["Type", "Team Project"]].map(([label, value]) => <div key={label} className="rounded-xl border bg-white p-5"><dt className="font-mono text-xs font-semibold text-zinc-500">{label}</dt><dd className="mt-2 text-base font-semibold text-zinc-900">{value}</dd></div>)}</dl></ReadmeSection>
    </div>
  </div>;
}

function Text({ items }: { items: string[] }) { return <div className="max-w-3xl space-y-4 text-sm leading-7 text-zinc-600">{items.map((item) => <p key={item}>{item}</p>)}</div>; }
function BulletList({ items }: { items: string[] }) { return <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" /><span>{item}</span></li>)}</ul>; }
function Case({ title, problem, solution, result }: { title: string; problem: string; solution: string; result: string }) { return <article className="overflow-hidden rounded-xl border bg-white"><header className="border-b bg-zinc-50 px-5 py-5 sm:px-7"><h3 className="text-lg font-semibold">{title}</h3></header><dl className="space-y-6 px-5 py-7 sm:px-7">{[["Problem", problem], ["Solution", solution], ["Result", result]].map(([label, value]) => <div key={label}><dt className="inline-flex rounded-full border bg-zinc-50 px-3 py-1 font-mono text-xs font-semibold">{label}</dt><dd className="mt-3 text-sm leading-7 text-zinc-600">{value}</dd></div>)}</dl></article>; }
function Review({ title, items }: { title: string; items: string[] }) { return <article className="rounded-xl border bg-white p-5"><h3 className="font-semibold">{title}</h3><BulletList items={items} /></article>; }
