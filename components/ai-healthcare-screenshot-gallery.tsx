"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { aiHealthcareScreenshots } from "@/data/ai-healthcare-screenshots";

type Screenshot = (typeof aiHealthcareScreenshots)[number];

export function AiHealthcareScreenshotGallery() {
  const [selected, setSelected] = useState<Screenshot | null>(null);

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {aiHealthcareScreenshots.map((screenshot) => (
          <figure key={screenshot.src}>
            <button
              type="button"
              onClick={() => setSelected(screenshot)}
              className="block w-full cursor-zoom-in overflow-hidden rounded-xl border bg-white transition hover:border-zinc-400 focus-visible:ring-offset-4"
              aria-label={`${screenshot.title} 크게 보기`}
            >
              <Image
                src={screenshot.src}
                alt={`AI Healthcare ${screenshot.title}`}
                width={1400}
                height={900}
                className="h-auto w-full object-contain"
              />
            </button>
            <figcaption className="mt-3 text-sm font-semibold text-zinc-800">{screenshot.title}</figcaption>
          </figure>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} 이미지 크게 보기`}
          onClick={() => setSelected(null)}
        >
          <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 rounded-full bg-white p-2 text-black transition hover:bg-zinc-100 sm:right-7 sm:top-7" aria-label="닫기">
            <X size={20} />
          </button>
          <figure className="flex max-h-full max-w-6xl flex-col items-center gap-3" onClick={(event) => event.stopPropagation()}>
            <Image src={selected.src} alt={`AI Healthcare ${selected.title}`} width={1800} height={1200} className="max-h-[82vh] h-auto w-auto max-w-full rounded-lg object-contain" priority />
            <figcaption className="text-sm font-medium text-white">{selected.title}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
