import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { profile } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${profile.name} — 백엔드 개발자`, template: `%s — ${profile.name}` },
  description: `${profile.role} ${profile.name}의 포트폴리오입니다.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Header /><main>{children}</main><Footer /></body></html>;
}
