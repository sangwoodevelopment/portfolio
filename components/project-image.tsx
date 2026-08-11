"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

export function ProjectImage({ src, alt, emptyLabel }: { src: string; alt: string; emptyLabel: string }) {
  const [available, setAvailable] = useState(true);

  if (!available) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center rounded-xl border border-dashed bg-zinc-50 px-6 text-center text-zinc-400">
        <ImageIcon size={32} strokeWidth={1.5} aria-hidden="true" />
        <p className="mt-4 text-sm font-medium text-zinc-600">{emptyLabel}</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        className="h-auto w-full"
        onError={() => setAvailable(false)}
      />
    </div>
  );
}
