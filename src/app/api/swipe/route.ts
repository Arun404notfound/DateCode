import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/currentUser";

/** Records a left swipe (a pass). Right swipes go through /api/answer. */
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const toId = body?.toId;
  if (typeof toId !== "string") {
    return NextResponse.json({ error: "toId required" }, { status: 400 });
  }

  const me = await getCurrentUser();
  if (toId === me.id) {
    return NextResponse.json({ error: "Cannot swipe yourself" }, { status: 400 });
  }
  const target = await db.profile.findUnique({ where: { id: toId }, select: { id: true } });
  if (!target) return NextResponse.json({ error: "Profile not found" }, { status: 404 });

  await db.swipe.upsert({
    where: { fromId_toId: { fromId: me.id, toId } },
    update: {},
    create: { fromId: me.id, toId, direction: "left" },
  });

  return NextResponse.json({ ok: true });
}
