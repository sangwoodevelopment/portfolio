import { Award, BookOpen, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata = { title: "학력" };

const education = [
  {
    institution: "세종사이버대학교",
    program: "컴퓨터·AI공학과",
    period: "2024 ~ 현재",
    status: "현재 재학",
    fields: ["운영체제", "데이터베이스", "자료구조", "AI", "클라우드"],
    current: ["AI 기반 백엔드 개발", "Java / Spring", "데이터 분석"],
  },
  {
    institution: "멀티캠퍼스",
    program: "Java 백엔드 개발자 과정",
    period: "6개월",
    fields: ["Spring Boot", "JPA", "Spring Security", "팀 프로젝트"],
    highlight: "최종 프로젝트 우수상",
  },
];

export default function EducationPage() {
  return (
    <div className="container-page py-16">
      <PageHeader
        eyebrow="학력"
        title="세종사이버대학교 컴퓨터·AI공학과에 재학하며 백엔드 개발에 필요한 컴퓨터공학 기초와 AI 기술을 함께 학습하고 있습니다."
        description="멀티캠퍼스 Java 백엔드 과정을 수료하며 Spring Boot 기반 웹 서비스 개발과 팀 프로젝트를 수행했습니다."
      />

      <section className="grid gap-5 py-12 lg:grid-cols-2" aria-label="학력 및 교육 과정">
        {education.map((item, index) => (
          <article key={item.institution} className="flex flex-col rounded-2xl border bg-white p-6 shadow-card sm:p-8">
            <header className="flex items-start justify-between gap-5 border-b pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  {index === 0 ? "대학교" : "교육 과정"}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">{item.institution}</h2>
                <p className="mt-2 font-medium text-zinc-700">{item.program}</p>
              </div>
              <GraduationCap className="shrink-0 text-zinc-400" aria-hidden="true" />
            </header>

            <div className="flex flex-wrap gap-2 border-b py-5 text-sm">
              <span className="rounded-full bg-zinc-100 px-3 py-1.5 font-medium text-zinc-700">{item.period}</span>
              {item.status && <span className="rounded-full bg-black px-3 py-1.5 font-medium text-white">{item.status}</span>}
            </div>

            <div className="py-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold"><BookOpen size={15} /> 주요 학습 분야</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.fields.map((field) => (
                  <li key={field} className="rounded-full border bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700">{field}</li>
                ))}
              </ul>
            </div>

            {item.current && (
              <div className="mt-auto border-t pt-6">
                <h3 className="text-sm font-semibold">현재 진행</h3>
                <ul className="mt-4 grid gap-2 text-sm text-zinc-600">
                  {item.current.map((current) => (
                    <li key={current} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-zinc-400" aria-hidden="true" /> {current}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.highlight && (
              <div className="mt-auto border-t pt-6">
                <p className="inline-flex items-center gap-2 rounded-full border bg-zinc-50 px-3 py-1.5 text-sm font-semibold">
                  <Award size={15} /> {item.highlight}
                </p>
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
