import { PageHeader } from "@/components/page-header";
import { skills } from "@/data/site";

export const metadata = { title: "기술" };

export default function SkillsPage() {
  return <div className="container-page py-16"><PageHeader eyebrow="기술" title="기술 스택" description="학습과 프로젝트에서 사용한 기술과 관심 분야입니다." /><section className="grid gap-5 py-12 sm:grid-cols-2">{skills.map((group) => <article key={group.category} className="rounded-2xl border bg-white p-6"><h2 className="text-lg font-semibold">{group.category}</h2><ul className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <li key={item} className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700">{item}</li>)}</ul></article>)}</section></div>;
}
