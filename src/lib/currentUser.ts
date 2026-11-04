import { db } from "./db";

/** v0.1 has no login: every request acts as the one seeded demo user. */
export async function getCurrentUser() {
  const user = await db.profile.findFirst({ where: { isDemoUser: true } });
  if (!user) throw new Error("Demo user missing. Run `npx prisma db seed`.");
  return user;
}
