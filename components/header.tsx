"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, profile } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-paper/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {profile.brand}
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-3 py-2 text-sm transition ${active ? "bg-black text-white" : "text-zinc-600 hover:bg-zinc-100 hover:text-black"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="container-page grid gap-1 border-t py-3 lg:hidden" aria-label="모바일 내비게이션">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`rounded-lg px-3 py-2.5 text-sm ${pathname === item.href ? "bg-black text-white" : "text-zinc-700 hover:bg-zinc-100"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
