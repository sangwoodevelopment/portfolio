import { ArrowDown, BrainCircuit, Code2, Factory } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata = { title: "소개" };

const journey = [
  { label: "생산설비", icon: Factory },
  { label: "백엔드 개발", icon: Code2 },
  { label: "AI Backend", icon: BrainCircuit },
];

export default function AboutPage() {
  return (
    <div className="container-page py-16">
      <PageHeader
        eyebrow="About Me"
        title="소개"
        description="생산 현장의 문제 해결 경험을 백엔드 개발로 이어가고 있습니다."
      />

      <section className="grid gap-10 py-12 lg:grid-cols-[220px_1fr]">
        <h2 className="text-xl font-semibold">문제 해결에서 개발로</h2>
        <div className="max-w-2xl space-y-6 text-base leading-8 text-zinc-600">
          <p>
            생산설비를 운영하며<br />
            문제의 원인을 분석하고<br />
            재발을 방지하는 경험을 쌓았습니다.
          </p>
          <p>
            이러한 경험은<br />
            백엔드 개발에서도 그대로 이어졌습니다.
          </p>
          <div>
            <p>현재는 Java와 Spring Boot 기반 서비스를 개발하며</p>
            <ul className="my-4 grid gap-2 font-medium text-zinc-900 sm:grid-cols-3">
              <li className="rounded-lg border bg-white px-4 py-3">안정성</li>
              <li className="rounded-lg border bg-white px-4 py-3">유지보수</li>
              <li className="rounded-lg border bg-white px-4 py-3">확장성</li>
            </ul>
            <p>을 고려한 개발을 지향하고 있습니다.</p>
          </div>
          <p>
            또한 AI와 공공데이터를 활용한 프로젝트를 진행하며<br className="hidden sm:block" />
            생성형 AI를 실제 서비스에 적용하는 경험을 쌓고 있습니다.
          </p>
        </div>
      </section>

      <section className="border-t py-12">
        <p className="eyebrow">Journey</p>
        <h2 className="text-2xl font-semibold tracking-tight">경험의 흐름</h2>
        <ol className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
          {journey.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.label} className="contents">
                <div className="rounded-2xl border bg-white p-6 text-center shadow-card">
                  <Icon className="mx-auto text-zinc-500" aria-hidden="true" />
                  <p className="mt-4 font-semibold">{step.label}</p>
                </div>
                {index < journey.length - 1 && <ArrowDown className="mx-auto text-zinc-300 sm:-rotate-90" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
