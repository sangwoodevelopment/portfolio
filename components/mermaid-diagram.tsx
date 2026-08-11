"use client";

import { useEffect, useId, useState } from "react";

export function MermaidDiagram({ chart, label }: { chart: string; label: string }) {
  const reactId = useId();
  const [svg, setSvg] = useState("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    const diagramId = `mermaid-${reactId.replace(/:/g, "")}`;

    async function renderDiagram() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "neutral",
          fontFamily: "Pretendard, sans-serif",
        });
        const result = await mermaid.render(diagramId, chart);
        if (active) setSvg(result.svg);
      } catch {
        if (active) setFailed(true);
      }
    }

    renderDiagram();
    return () => { active = false; };
  }, [chart, reactId]);

  if (failed) {
    return <div className="rounded-xl border border-dashed bg-zinc-50 px-5 py-10 text-center text-sm text-zinc-500">Architecture Diagram을 불러오지 못했습니다.</div>;
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white p-4 sm:p-6" aria-label={label}>
      {svg ? (
        <div className="min-w-[680px] [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="flex min-h-64 items-center justify-center text-sm text-zinc-400">Architecture Diagram을 불러오는 중입니다.</div>
      )}
    </div>
  );
}
