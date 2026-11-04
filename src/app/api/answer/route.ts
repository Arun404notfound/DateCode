import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/currentUser";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const toId = body?.toId;
  const optionIndex = body?.optionIndex;
  if (typeof toId !== "string" || !Number.isInteger(optionIndex) || optionIndex < 0 || optionIndex > 3) {
    return NextResponse.json({ error: "toId and optionIndex (0-3) required" }, { status: 400 });
  }

  const me = await getCurrentUser();
  if (toId === me.id) {
    return NextResponse.json({ error: "Cannot swipe yourself" }, { status: 400 });
  }

  const target = await db.profile.findUnique({
    where: { id: toId },
    include: { gateQuestion: { select: { answerIndex: true } } },
  });
  if (!target?.gateQuestion) return NextResponse.json({ error: "Profile not found" }, { status: 404 });

  const correct = target.gateQuestion.answerIndex === optionIndex;

  // One attempt per profile: the unique [fromId, toId] pair rejects a second try.
  try {
    await db.swipe.create({
      data: { fromId: me.id, toId, direction: "right", correct },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return NextResponse.json({ error: "Already attempted this profile" }, { status: 409 });
    }
    throw e;
  }

  let matched = false;
  if (correct) {
    const theirLike = await db.swipe.findFirst({
      where: { fromId: toId, toId: me.id, direction: "right", correct: true },
    });
    if (theirLike) {
      const [profileAId, profileBId] = [me.id, toId].sort();
      await db.match.upsert({
        where: { profileAId_profileBId: { profileAId, profileBId } },
        update: {},
        create: { profileAId, profileBId },
      });
      matched = true;
    }
  }

  return NextResponse.json({ correct, matched });
}
