"use client";

import { useMemo } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { avatarUri } from "@/lib/avatar";

export type Card = {
  id: string;
  displayName: string;
  bio: string;
  avatarSeed: string;
  techStack: string[];
  difficulty: string | null;
};

const BADGE: Record<string, string> = {
  simple: "bg-emerald-100 text-emerald-800",
  medium: "bg-amber-100 text-amber-800",
  hard: "bg-rose-100 text-rose-800",
};

const THRESHOLD = 120;

export default function SwipeCard({
  card,
  onSwipe,
}: {
  card: Card;
  onSwipe: (dir: "left" | "right") => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const likeOpacity = useTransform(x, [20, THRESHOLD], [0, 1]);
  const passOpacity = useTransform(x, [-THRESHOLD, -20], [1, 0]);
  const src = useMemo(() => avatarUri(card.avatarSeed), [card.avatarSeed]);

  return (
    <motion.div
      className="absolute inset-0 cursor-grab touch-none select-none rounded-3xl bg-white p-6 shadow-xl ring-1 ring-zinc-200 active:cursor-grabbing dark:bg-zinc-900 dark:ring-zinc-800"
      style={{ x, rotate }}
      drag="x"
      dragSnapToOrigin
      dragElastic={0.7}
      onDragEnd={(_, info) => {
        if (info.offset.x > THRESHOLD) onSwipe("right");
        else if (info.offset.x < -THRESHOLD) onSwipe("left");
      }}
    >
      <motion.span
        style={{ opacity: likeOpacity }}
        className="absolute left-5 top-5 rotate-[-12deg] rounded border-2 border-emerald-500 px-2 py-1 text-sm font-bold text-emerald-500"
      >
        ANSWER TO LIKE
      </motion.span>
      <motion.span
        style={{ opacity: passOpacity }}
        className="absolute right-5 top-5 rotate-[12deg] rounded border-2 border-rose-500 px-2 py-1 text-sm font-bold text-rose-500"
      >
        PASS
      </motion.span>

      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" draggable={false} className="h-40 w-40 rounded-full bg-zinc-100 dark:bg-zinc-800" />
        <h2 className="text-2xl font-semibold">{card.displayName}</h2>
        <p className="text-zinc-600 dark:text-zinc-400">{card.bio}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {card.techStack.map((t) => (
            <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
              {t}
            </span>
          ))}
        </div>
        {card.difficulty && (
          <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${BADGE[card.difficulty] ?? ""}`}>
            Gate: {card.difficulty}
          </span>
        )}
      </div>
    </motion.div>
  );
}
