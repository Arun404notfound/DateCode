const KEYWORDS = new Set([
  "def", "return", "for", "while", "if", "else", "elif", "in", "range", "print", "len", "import", "class",
]);

/** Tiny Python-ish highlighter: keywords, numbers, everything else plain. */
export default function CodeBlock({ code }: { code: string }) {
  const parts = code.split(/(\b\w+\b)/g);
  return (
    <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 font-mono text-sm leading-relaxed text-zinc-100">
      <code>
        {parts.map((part, i) => {
          if (KEYWORDS.has(part)) return <span key={i} className="text-pink-400">{part}</span>;
          if (/^\d+$/.test(part)) return <span key={i} className="text-amber-300">{part}</span>;
          return <span key={i}>{part}</span>;
        })}
      </code>
    </pre>
  );
}
