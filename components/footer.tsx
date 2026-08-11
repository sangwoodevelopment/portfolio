export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container-page flex flex-col gap-3 py-8 text-sm text-zinc-500 sm:flex-row sm:items-end sm:justify-between">
        <p>감사합니다.</p>
        <div className="space-y-1 sm:text-right">
          <p className="text-xs text-zinc-400">This portfolio was built with Next.js, React, TypeScript and Tailwind CSS.</p>
          <p>© 2026 Sangwoo.</p>
        </div>
      </div>
    </footer>
  );
}
