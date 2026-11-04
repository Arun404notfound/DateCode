"use client";

import { useEffect, useState } from "react";
import CodeBlock from "./CodeBlock";

type Question = {
  id: string;
  difficulty: string;
  prompt: string;
  code: string | null;
  options: { index: number; text: string }[];
};

type Result = { correct: boolean; matched: boolean };

export default function QuestionModal({
  profileId,
  name,
  onCancel,
  onDone,
}: {
  profileId: string;
  name: string;
  /** Closed before answering: nothing is recorded, the card returns to the deck. */
  onCancel: () => void;
  /** Closed after an answer was recorded. */
  onDone: () => void;
}) {
  const [question, setQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    fetch(`/api/question/${profileId}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("Could not load question"))))
      .then((q) => live && setQuestion(q))
      .catch((e) => live && setError(e.message));
    return () => {
      live = false;
    };
  }, [profileId]);

  async function submit() {
    if (selected === null) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toId: profileId, optionIndex: selected }),
      });
      if (res.status === 409) {
        setError("You already attempted this profile.");
        return;
      }
      if (!res.ok) throw new Error("Something went wrong");
      setResult(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-h-full w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900">
        {result ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            {result.correct ? (
              <>
                <p className="text-2xl font-bold">{result.matched ? "It's a match! 💚" : "Correct! Like sent."}</p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {result.matched ? `You and ${name} liked each other.` : `${name} will see your like.`}
                </p>
              </>
            ) : (
              <p className="text-2xl font-bold">Wrong answer, no like sent.</p>
            )}
            <button onClick={onDone} className="rounded-full bg-zinc-900 px-6 py-2 font-semibold text-white dark:bg-white dark:text-zinc-900">
              Next profile
            </button>
          </div>
        ) : (
          <>
            <p className="mb-1 text-xs font-semibold uppercase text-zinc-500">
              {name}&apos;s gate {question && `· ${question.difficulty}`}
            </p>
            {!question && !error && <p className="py-8 text-center text-zinc-500">Loading question…</p>}
            {question && (
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">{question.prompt}</h3>
                {question.code && <CodeBlock code={question.code} />}
                <div className="flex flex-col gap-2">
                  {question.options.map((o) => (
                    <button
                      key={o.index}
                      onClick={() => setSelected(o.index)}
                      className={`rounded-lg border px-4 py-3 text-left font-mono text-sm transition ${
                        selected === o.index
                          ? "border-pink-500 bg-pink-50 dark:bg-pink-950"
                          : "border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                      }`}
                    >
                      {o.text}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}
            <div className="mt-5 flex justify-end gap-3">
              <button onClick={onCancel} className="rounded-full px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400">
                Cancel
              </button>
              <button
                onClick={submit}
                disabled={selected === null || busy}
                className="rounded-full bg-pink-600 px-6 py-2 font-semibold text-white disabled:opacity-40"
              >
                {busy ? "Checking…" : "Submit"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
