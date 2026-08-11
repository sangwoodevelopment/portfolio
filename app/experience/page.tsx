import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata = { title: "경험" };

const experiences = [
  {
    organization: "Samsung SDI",
    period: "2022.06 ~ 2022.11",
    role: "CELL 제조",
    type: "경력",
    items: ["생산설비 운영", "공정 모니터링", "품질 관리", "설비 이상 원인 분석"],
  },
  {
    organization: "CJ제일제당",
    period: "2022.11 ~ 2023.06",
    role: "생산설비 운영",
    type: "경력",
    items: ["생산설비 운영", "생산·품질 협업", "공정 모니터링", "설비 이상 대응"],
  },
  {
    organization: "멀티캠퍼스",
    period: "6개월",
    role: "Java Backend 과정",
    type: "교육",
    items: ["Java", "Spring Boot", "JPA", "Spring Security", "REST API"],
    highlight: "최종 프로젝트 우수상",
  },
];

export default function ExperiencePage() {
  return (
    <div className="container-page py-16">
      <PageHeader
        eyebrow="경험"
        title="현장의 경험을 개발로 이어갑니다"
        description="생산 현장에서의 역할과 문제 해결 경험, Java Backend 교육 과정을 정리했습니다."
      />

      <section className="py-12" aria-label="경력 및 교육 Timeline">
        <div className="relative">
          <div className="absolute bottom-5 left-[15px] top-5 w-px bg-zinc-300 sm:left-[23px]" aria-hidden="true" />
          <ol className="space-y-10 sm:space-y-12">
            {[...experiences].reverse().map((experience) => {
              const Icon = experience.type === "교육" ? GraduationCap : BriefcaseBusiness;

              return (
                <li key={experience.organization} className="relative grid grid-cols-[32px_1fr] gap-5 sm:grid-cols-[48px_1fr] sm:gap-8">
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-paper sm:h-12 sm:w-12">
                    <Icon size={16} className="text-zinc-700 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>

                  <article className="rounded-2xl border bg-white p-6 shadow-card sm:p-8">
                    <header className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{experience.type}</p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{experience.organization}</h2>
                        <p className="mt-2 font-medium text-zinc-700">{experience.role}</p>
                      </div>
                      <time className="w-fit rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-600">
                        {experience.period}
                      </time>
                    </header>

                    <div className="py-6">
                      <h3 className="text-sm font-semibold">{experience.type === "교육" ? "학습" : "담당 업무"}</h3>
                      <ul className="mt-4 grid gap-3 text-sm text-zinc-600 sm:grid-cols-2">
                        {experience.items.map((item) => (
                          <li key={item} className="flex gap-3 leading-6">
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {experience.highlight && (
                      <div className="border-t pt-6">
                        <h3 className="mb-3 text-sm font-semibold">성과</h3>
                        <p className="inline-flex rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-sm font-semibold text-zinc-800">
                          {experience.highlight}
                        </p>
                      </div>
                    )}
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}
