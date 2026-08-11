"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { nutriWellScreenshots } from "@/data/nutri-well-screenshots";

type Media = { readonly title: string; readonly src: string };

export function NutriWellScreenshotGallery() {
  return <NutriWellGallery items={nutriWellScreenshots} />;
}

export function NutriWellMediaImage({ item }: { item: Media }) {
  return <NutriWellGallery items={[item]} single />;
}

function NutriWellGallery({ items, single = false }: { items: readonly Media[]; single?: boolean }) {
  const [selected, setSelected] = useState<Media | null>(null);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return <>
    <div className={single ? "grid grid-cols-1" : "grid grid-cols-1 gap-5 md:grid-cols-2"}>
      {items.map((item) => <figure key={item.src}>
        <button type="button" onClick={() => setSelected(item)} className={`w-full cursor-zoom-in overflow-hidden rounded-xl border bg-white transition hover:border-zinc-400 ${single ? "block" : "relative block aspect-video"}`} aria-label={`${item.title} 크게 보기`}>
          {single ? (
            <Image src={item.src} alt={`Nutri-Well ${item.title}`} width={1400} height={900} className="h-auto w-full object-contain" unoptimized />
          ) : (
            <Image src={item.src} alt={`Nutri-Well ${item.title}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" unoptimized />
          )}
        </button>
        {!single && <figcaption className="mt-3 text-sm font-semibold text-zinc-800">{item.title}</figcaption>}
      </figure>)}
    </div>
    {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={`${selected.title} 이미지 크게 보기`} onClick={() => setSelected(null)}>
      <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 rounded-full bg-white p-2 text-black hover:bg-zinc-100" aria-label="닫기"><X size={20} /></button>
      <figure className="flex max-h-full max-w-6xl flex-col items-center gap-3" onClick={(event) => event.stopPropagation()}>
        <Image src={selected.src} alt={`Nutri-Well ${selected.title}`} width={1800} height={1200} className="max-h-[82vh] h-auto w-auto max-w-full rounded-lg object-contain" priority unoptimized />
        <figcaption className="text-sm font-medium text-white">{selected.title}</figcaption>
      </figure>
    </div>}
  </>;
}
