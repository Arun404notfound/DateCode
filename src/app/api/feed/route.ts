import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/currentUser";

export async function GET() {
  const me = await getCurrentUser();
  const seen = await db.swipe.findMany({ where: { fromId: me.id }, select: { toId: true } });

  const profiles = await db.profile.findMany({
    where: { id: { notIn: [me.id, ...seen.map((s) => s.toId)] } },
    include: { gateQuestion: { select: { difficulty: true } } },
    orderBy: { createdAt: "asc" },
    take: 10,
  });

  return NextResponse.json({
    cards: profiles.map((p) => ({
      id: p.id,
      displayName: p.displayName,
      bio: p.bio,
      avatarSeed: p.avatarSeed,
      techStack: JSON.parse(p.techStack) as string[],
      difficulty: p.gateQuestion?.difficulty ?? null,
    })),
  });
}
