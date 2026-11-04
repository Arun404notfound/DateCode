import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
import path from "node:path";

const prisma = new PrismaClient();

type SeedQuestion = {
  id: string;
  difficulty: string;
  tags: string[];
  prompt: string;
  code: string | null;
  options: string[];
  answerIndex: number;
  explanation: string;
};

type SeedProfile = {
  displayName: string;
  bio: string;
  avatarSeed: string;
  techStack: string[];
  gateQuestionId: string;
  likesDemoUser: boolean;
};

function load<T>(file: string): T {
  return JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", file), "utf8"));
}

async function main() {
  const questions = load<SeedQuestion[]>("questions.json");
  const profiles = load<SeedProfile[]>("profiles.json");

  for (const q of questions) {
    if (q.options.length !== 4 || q.answerIndex < 0 || q.answerIndex > 3) {
      throw new Error(`Bad question ${q.id}: needs 4 options and an answerIndex of 0-3`);
    }
  }

  // Clean slate so the seed can be re-run.
  await prisma.match.deleteMany();
  await prisma.swipe.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.question.deleteMany();

  for (const q of questions) {
    await prisma.question.create({
      data: {
        id: q.id,
        difficulty: q.difficulty,
        tags: JSON.stringify(q.tags),
        prompt: q.prompt,
        code: q.code,
        options: JSON.stringify(q.options),
        answerIndex: q.answerIndex,
        explanation: q.explanation,
      },
    });
  }

  const demo = await prisma.profile.create({
    data: {
      displayName: "You (Demo)",
      bio: "The demo account. Everything you swipe happens as this profile.",
      avatarSeed: "demo-user",
      techStack: JSON.stringify(["TypeScript", "Python"]),
      isDemoUser: true,
      gateQuestionId: questions[0].id,
    },
  });

  for (const p of profiles) {
    const created = await prisma.profile.create({
      data: {
        displayName: p.displayName,
        bio: p.bio,
        avatarSeed: p.avatarSeed,
        techStack: JSON.stringify(p.techStack),
        gateQuestionId: p.gateQuestionId,
      },
    });
    // Pre-like the demo user so a correct answer can produce a match.
    if (p.likesDemoUser) {
      await prisma.swipe.create({
        data: { fromId: created.id, toId: demo.id, direction: "right", correct: true },
      });
    }
  }

  console.log(`Seeded ${questions.length} questions, ${profiles.length} profiles + demo user (${demo.id})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
