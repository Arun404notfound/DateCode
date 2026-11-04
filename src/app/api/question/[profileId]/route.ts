import { NextResponse } from "next/server";
import { db } from "@/lib/db";

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function GET(_req: Request, ctx: { params: Promise<{ profileId: string }> }) {
  const { profileId } = await ctx.params;
  const profile = await db.profile.findUnique({
    where: { id: profileId },
    include: { gateQuestion: true },
  });
  const q = profile?.gateQuestion;
  if (!profile || !q) return NextResponse.json({ error: "No gate question" }, { status: 404 });

  const options = (JSON.parse(q.options) as string[]).map((text, index) => ({ index, text }));

  // answerIndex is deliberately not included.
  return NextResponse.json({
    id: q.id,
    difficulty: q.difficulty,
    tags: JSON.parse(q.tags) as string[],
    prompt: q.prompt,
    code: q.code,
    options: shuffle(options),
  });
}
