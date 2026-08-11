import Link from "next/link";
import { ExternalLink, Github, Globe2, Mail } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { profile } from "@/data/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container-page py-16">
      <PageHeader
        eyebrow="Contact"
        title="함께 이야기하고 싶습니다."
        description="채용과 프로젝트에 관한 연락을 기다리고 있습니다."
      />

      <section className="grid gap-5 py-12 sm:grid-cols-2">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border bg-white p-6 transition hover:border-black">
          <Github />
          <p className="mt-8 text-xs uppercase tracking-wider text-zinc-500">GitHub</p>
          <p className="mt-2 flex items-center gap-2 font-medium group-hover:underline">sangwoodevelopment <ExternalLink size={14} /></p>
        </a>

        <a href={`mailto:${profile.email}`} className="group rounded-2xl border bg-white p-6 transition hover:border-black">
          <Mail />
          <p className="mt-8 text-xs uppercase tracking-wider text-zinc-500">Email</p>
          <p className="mt-2 font-medium group-hover:underline">{profile.email}</p>
        </a>

        <Link href="/" className="group rounded-2xl border bg-white p-6 transition hover:border-black">
          <Globe2 />
          <p className="mt-8 text-xs uppercase tracking-wider text-zinc-500">Portfolio</p>
          <p className="mt-2 flex items-center gap-2 font-medium group-hover:underline">현재 포트폴리오 <ExternalLink size={14} /></p>
        </Link>

      </section>
    </div>
  );
}
