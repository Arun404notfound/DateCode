<div align="center">

<!-- Add your logo to public/logo.png in the repo and it will appear here -->
<img src="https://raw.githubusercontent.com/Arun404notfound/DateCode/main/public/logo.png" alt="DateCode Logo" width="180"/>

<br/>

**Solve. Connect. Build.**

A developer-first dating platform where meaningful connections are built through code, creativity, and shared ambitions.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Supabase-Postgres-green)](https://supabase.com)
[![Status](https://img.shields.io/badge/Status-Not%20Started-red)]()

</div>

---

## What is DateCode?

Most dating apps filter by appearance. DateCode filters by how you think.

Instead of endless swiping, every profile contains a **coding challenge** chosen by that person. To express interest, you solve it. This creates a natural signal — not of perfection, but of curiosity, effort, and problem-solving style.

Beyond challenges, DateCode helps developers discover people working on **similar projects, tech stacks, and ideas**. Connect around what you're building, not just how you look.

> *Compatibility is more than a profile picture — it's how people think, create, and build together.*

---

## How It Works

```
1. Sign in with GitHub
2. Build your developer profile — stack, projects, interests
3. Add a coding challenge of your choice to your profile
4. Browse others' profiles
5. Solve someone's challenge to express interest
6. Match if they solve yours back
7. Chat and build together
```

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | Next.js 15 (App Router) | Full-stack React, fast MVP, great DX |
| **UI** | Tailwind CSS + shadcn/ui | Consistent, accessible components |
| **Auth** | Supabase Auth | GitHub OAuth out of the box |
| **Database** | Supabase Postgres | Postgres + Realtime in one layer |
| **Realtime Chat** | Supabase Realtime | WebSocket-based messaging without extra infra |
| **Code Editor** | Monaco Editor | Same editor as VS Code |
| **Code Execution** | Judge0 / Piston | Sandboxed multi-language execution |
| **Hosting** | Vercel + Supabase | Zero-config deploys |

---

## MVP Roadmap

> 🚧 This project has not started yet. Nothing is assigned. All contributions and ideas are welcome.

- [ ] Project scaffold & repo setup
- [ ] Landing page
- [ ] GitHub OAuth login
- [ ] Developer profile (stack, bio, projects, goals)
- [ ] Add a coding challenge to your profile
- [ ] Browse profiles
- [ ] Solve a challenge to express interest
- [ ] Match system
- [ ] Basic real-time chat
- [ ] Project-based discovery (find people by tech/domain)
- [ ] PWA support
- [ ] Mobile-responsive polish

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project (free tier works fine)
- A [Judge0](https://judge0.com) or [Piston](https://github.com/engineer-man/piston) instance for code execution

### Local Setup

```bash
# Clone the repo
git clone https://github.com/Arun404notfound/DateCode.git
cd DateCode

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

Fill in `.env.local` with your own credentials. Each contributor runs their own Supabase project and code execution instance — DateCode does not have a shared development database.

```env
# Get these from your Supabase project dashboard → Settings → API
NEXT_PUBLIC_SUPABASE_URL=          # e.g. https://xyzxyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=     # public anon key
SUPABASE_SERVICE_ROLE_KEY=         # secret service role key (never expose this)

# Code execution — pick one and fill in its values
JUDGE0_API_URL=                    # https://judge0-ce.p.rapidapi.com
JUDGE0_API_KEY=                    # from RapidAPI dashboard
# or self-hosted Piston:
PISTON_API_URL=                    # e.g. http://localhost:2000
```

```bash
# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Database Setup

Apply the migrations to your own Supabase project:

```bash
npx supabase db push
```

Or run them manually via the Supabase SQL editor — see `/supabase/migrations/`.

---

## Project Structure

```
DateCode/
├── app/                   # Next.js App Router
│   ├── (auth)/            # Auth routes (login, callback)
│   ├── (app)/             # Protected app routes
│   │   ├── profile/       # User profile & challenge setup
│   │   ├── browse/        # Profile discovery
│   │   ├── solve/[id]/    # Challenge solving screen
│   │   └── chat/          # Real-time messaging
│   └── page.tsx           # Landing page
├── components/            # Shared UI components
│   ├── editor/            # Monaco Editor wrapper
│   ├── profile/           # Profile cards, challenge display
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilities & clients
│   ├── supabase/          # Supabase client (browser + server)
│   └── judge0/            # Code execution helpers
├── supabase/
│   └── migrations/        # SQL migrations
└── types/                 # TypeScript types
```

---

## Contributing

DateCode is pre-development and completely open — this is the best time to jump in and shape it.

### Before you start

- Check [open issues](https://github.com/Arun404notfound/DateCode/issues) for something to pick up
- For larger changes, open an issue first to discuss the approach
- Read [CONTRIBUTING.md](CONTRIBUTING.md) for code style and PR conventions

### Good first issues

Look for issues tagged [`good first issue`](https://github.com/Arun404notfound/DateCode/issues?q=label%3A%22good+first+issue%22) — they're scoped to be approachable without deep context.

### Running checks

```bash
npm run test
npm run lint
npm run type-check
```

---

## Design Principles

1. **Effort over appearance** — the challenge mechanic is the core filter. Keep it prominent and frictionless.
2. **Developers first** — GitHub login, Monaco editor, stack-based discovery. Every decision should feel native to how developers work.
3. **No gamification gimmicks** — no streaks, no "super solves", no dark patterns. Respect users' time.
4. **Privacy by default** — profiles are opt-in discoverable. Users control what they show.
5. **Web first, mobile responsive** — the MVP is a Next.js web app. PWA and native app come later, after proving the concept.

---

## Deployment

### Vercel (recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Arun404notfound/DateCode)

Add the same environment variables from `.env.local` in your Vercel project settings before deploying.

### Self-hosted

Any Node.js host works:

```bash
npm run build
npm start
```

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

## Community

- **Discussions**: [GitHub Discussions](https://github.com/Arun404notfound/DateCode/discussions) — ideas, questions, feedback
- **Issues**: [GitHub Issues](https://github.com/Arun404notfound/DateCode/issues) — bugs and feature requests

---

<div align="center">
  <sub>Built by developers, for developers. Contributions welcome.</sub>
</div>
