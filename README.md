# Date Code

A swipe-style matching app where a right swipe only counts if you answer the other person's coding question correctly. Each profile has a "gate" question on time or space complexity, tagged simple, medium or hard. Answer right and your like is sent. Answer wrong and it isn't.

Status: **v0.1 skeleton**. Seeded dummy profiles, a swipe deck, and a question modal with server-side answer checking.

> **Synthetic data only.** All profiles are made up, avatars are generated offline by DiceBear, and there are no sign-ups, photos of real people, API keys or paid services.

<!-- TODO: add screenshots (deck, question modal, match) to docs/ and link them here -->

## Stack

Next.js (App Router) + TypeScript, Tailwind CSS, Framer Motion, SQLite via Prisma 6, DiceBear avatars. The UI and API live in one repo so correct answers never leave the server.

## Setup

```bash
npm install
cp .env.example .env          # DATABASE_URL="file:./dev.db"
npx prisma migrate dev        # creates the SQLite db
npx prisma db seed            # 30 profiles, 16 questions, demo user, a few pre-likes
npm run dev                   # http://localhost:3000
```

Re-running `npx prisma db seed` resets all swipes and matches.

## How it works

- Every request acts as the seeded demo user (no login in v0.1), see `src/lib/currentUser.ts`.
- Swipe left to pass. Swipe right (or press the heart) to open the profile's gate question.
- `GET /api/question/[profileId]` returns shuffled options with their original indexes and never the answer.
- `POST /api/answer` checks the answer, stores the swipe, and creates a match if that profile already liked you.
- One attempt per profile: a second attempt returns 409.
- About a third of the dummy profiles pre-like the demo user, so a correct answer on them gives "It's a match!".

| Route | Does |
| --- | --- |
| `GET /api/feed` | Up to 10 unswiped profiles |
| `POST /api/swipe` | Records a left swipe `{ toId }` |
| `GET /api/question/[profileId]` | The profile's gate question, without `answerIndex` |
| `POST /api/answer` | Checks `{ toId, optionIndex }`, returns `{ correct, matched }` |

## Roadmap

1. Match list page and `/api/matches`
2. Show the explanation after a wrong answer
3. Question pool admin; grow the pool to 50
4. Let a profile pick its gate question
5. 24-hour cooldown and rate limiting
6. Feed filters (difficulty, tag, tech stack)
7. Streaks, leaderboard, coding compatibility score
8. Chat after a match
9. Team-up mode for hackathons
10. Sandboxed code questions
11. Tests, CI, mobile PWA polish

Questions are written in-house, not copied from other sites.

## License

MIT
