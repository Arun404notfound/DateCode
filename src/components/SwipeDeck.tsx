"use client";

import { useCallback, useEffect, useState } from "react";
import SwipeCard, { type Card } from "./SwipeCard";
import QuestionModal from "./QuestionModal";

export default function SwipeDeck() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [answering, setAnswering] = useState<Card | null>(null);

  const loadFeed = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/feed", { cache: "no-store" });
    const data = await res.json();
    setCards(data.cards);
    setLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadFeed();
  }, [loadFeed]);

  const top = cards[0];

  const dropTop = useCallback(() => {
    setCards((c) => c.slice(1));
  }, []);

  async function handleSwipe(dir: "left" | "right") {
    if (!top) return;
    if (dir === "right") {
      setAnswering(top);
      return;
    }
    dropTop();
    await fetch("/api/swipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ toId: top.id }),
    });
  }

  const visible = cards.slice(0, 2).reverse();

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-[34rem] w-[22rem] max-w-full">
        {visible.map((c) => (
          <SwipeCard key={c.id} card={c} onSwipe={c.id === top.id ? handleSwipe : () => {}} />
        ))}
        {!top && (
          <p className="absolute inset-0 flex items-center justify-center text-center text-zinc-500">
            {loading ? "Loading profiles…" : "That's the batch."}
          </p>
        )}
      </div>
      {!top && !loading && (
        <button onClick={loadFeed} className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900">
          Check for more profiles
        </button>
      )}

      <div className="flex gap-6">
        <button
          onClick={() => handleSwipe("left")}
          disabled={!top}
          aria-label="Pass"
          className="h-14 w-14 rounded-full bg-white text-2xl shadow ring-1 ring-zinc-200 disabled:opacity-40 dark:bg-zinc-900 dark:ring-zinc-800"
        >
          ✕
        </button>
        <button
          onClick={() => handleSwipe("right")}
          disabled={!top}
          aria-label="Answer to like"
          className="h-14 w-14 rounded-full bg-pink-600 text-2xl text-white shadow disabled:opacity-40"
        >
          ♥
        </button>
      </div>

      {answering && (
        <QuestionModal
          profileId={answering.id}
          name={answering.displayName}
          onCancel={() => setAnswering(null)}
          onDone={() => {
            setAnswering(null);
            dropTop();
          }}
        />
      )}
    </div>
  );
}
