# DateCode 💻❤️

> **A dating app for developers, by developers.**  
> Swipe right by solving code. Connect through projects. Build relationships through shared passion for coding.

---

## What is DateCode?

DateCode is a unique dating platform that combines **romantic connection** with **coding challenges**. Instead of swiping blindly, you prove your interest (and coding skills) by solving a problem handpicked by the person whose profile you're viewing.

**Core Philosophy:** Why match with strangers when you can match with developers who solve similar problems, build cool projects, and think like you?

---

## Key Features (Current & Planned)

### ✅ Live Features
- **Coding-Gated Swiping** — Every profile comes with a coding challenge set by that person. Solve it to swipe right.
- **Copy-Paste Disabled** — Vanilla code editor with syntax highlighting. No shortcuts. No ChatGPT workarounds. Real skills only.
- **Profile Showcasing** — Display your tech stack, favorite languages, and current/past projects.

### 🚀 In Ideation (Coming Soon)
- **Project-Based Matching** — Connect with developers working on similar projects or technologies. Dating, but for co-builders.
- **Coding Difficulty Levels** — Choose challenge difficulty (Easy/Medium/Hard) to signal your skill level and match with similarly-skilled partners.
- **Code Review Comments** — Exchange feedback on solutions submitted during the swiping process. Get to know someone through their coding style.
- **Collaborative Project Rooms** — After matching, co-create a small open-source project together as a first date alternative.
- **Tech Stack Discovery** — Filter by languages, frameworks, and domains (Web3, ML, Mobile, Backend, etc.).
- **Leaderboards & Badges** — Earn badges for solving problems consistently. Show off your coding prowess.
- **Live Coding Interviews** — Optional video call where you solve a problem together in real-time.

---

## How It Works

1. **Create Your Profile** — Sign up, add your bio, tech stack, and a link to your GitHub.

2. **Set Your Challenge** — Pick or create a coding problem that represents you. It can be a classic LeetCode problem, a personal puzzle, or a take-home challenge from your company.

3. **Browse Profiles** — Scroll through other developers' profiles.

4. **Solve to Swipe** — See someone you're interested in? Solve their coding problem. Write real, working code (no copy-paste allowed).

5. **Submit & Swipe** — Submit your solution. If it passes the test cases, you can swipe right.

6. **Match & Message** — If they swipe right on you too, you match. Start chatting via the in-app messenger.

7. **Connect on Projects** — Chat about the coding problems you solved, collaborate on projects, or plan a real-life coffee date to pair-program.

---

## Tech Stack

- **Frontend:** [React / Vue / Next.js — to be finalized]
- **Backend:** [Node.js / Python / Go — to be finalized]
- **Code Execution:** [Judge0 API / Piston / Custom Docker — to be finalized]
- **Database:** [PostgreSQL / MongoDB — to be finalized]
- **Authentication:** JWT + OAuth2 (GitHub login encouraged)
- **Real-Time Chat:** WebSocket / Socket.io
- **Code Editor:** [Monaco / CodeMirror with sandboxed execution]

---

## Project Structure

```
datecode/
├── frontend/                 # React/Vue/Next.js UI
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── styles/
├── backend/                  # API server
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── utils/
├── code-executor/            # Sandboxed code execution service
│   └── judge.js / judge.py
├── database/                 # Schema migrations
│   └── migrations/
├── docs/                     # Documentation
└── README.md
```

---

## Installation & Setup

### Prerequisites
- Node.js 16+ (or Python 3.9+)
- PostgreSQL / MongoDB
- Git

### Local Development

```bash
# Clone the repo
git clone https://github.com/yourusername/datecode.git
cd datecode

# Install dependencies
npm install  # or yarn install

# Set up environment variables
cp .env.example .env
# Edit .env with your config (DB, API keys, etc.)

# Run database migrations
npm run migrate

# Start the development server
npm run dev

# Backend (in a separate terminal)
cd backend
npm install
npm run dev

# Frontend (in another terminal)
cd frontend
npm run dev
```

Server will be live at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

---

## API Endpoints (Draft)

### Authentication
- `POST /auth/signup` — Register a new user
- `POST /auth/login` — Log in
- `POST /auth/logout` — Log out
- `GET /auth/profile` — Get current user profile

### Profiles
- `GET /profiles` — Browse profiles (with filters)
- `GET /profiles/:id` — Get single profile with challenge
- `PUT /profiles/:id` — Update your profile
- `POST /profiles/:id/set-challenge` — Set your coding challenge

### Challenges
- `GET /challenges/:id` — Get challenge details
- `POST /challenges/:id/submit` — Submit a solution
- `GET /challenges/:id/testcases` — Get test cases (after submission)

### Swipes
- `POST /swipes` — Swipe right on a profile
- `GET /matches` — Get all matches
- `POST /messages` — Send a message to a match

### Projects (Ideation)
- `GET /projects` — Browse collaborative projects
- `POST /projects` — Create a new project room
- `POST /projects/:id/join` — Join a project

---

## Feature Roadmap

### Phase 1 (MVP) — Weeks 1-6
- [ ] User authentication & profiles
- [ ] Challenge submission & code execution
- [ ] Swiping mechanic with test case validation
- [ ] Basic matching & messaging
- [ ] Copy-paste detection

### Phase 2 — Weeks 7-10
- [ ] Project-based filtering & discovery
- [ ] Difficulty levels for challenges
- [ ] Leaderboards & badges system
- [ ] Code review comments on solutions

### Phase 3 — Weeks 11-14
- [ ] Collaborative project rooms
- [ ] Live coding video calls
- [ ] Advanced analytics & matching algorithm
- [ ] Social features (follow, upvote, share)

### Phase 4 (Long-term)
- [ ] Mobile app (React Native)
- [ ] Community events & hackathon integration
- [ ] Sponsorships & job board integration
- [ ] AI-powered matching recommendations

---

## Contributing

We're in active ideation! Have a feature idea? Found a bug? Want to jump in?

1. **Fork the repo**
2. **Create a feature branch:** `git checkout -b feature/your-idea`
3. **Commit your changes:** `git commit -m "Add: your feature description"`
4. **Push to branch:** `git push origin feature/your-idea`
5. **Open a Pull Request** with a clear description

**Contribution Ideas:**
- Design new coding challenge types
- Improve the code execution sandbox
- Build matching algorithm improvements
- Design UI/UX mockups
- Write test cases for challenges
- Suggest new features in Discussions

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## FAQ

**Q: Can I use any programming language?**  
A: MVP supports Python, JavaScript, Java, C++. More coming soon.

**Q: What if I fail someone's coding challenge?**  
A: You can try again. No penalty. Or move on to the next profile.

**Q: Is this a real dating app?**  
A: Yes! It's a genuine dating platform with a coding twist. Real connections, real profiles, real feelings. The coding challenge is just the fun gatekeeping mechanism.

**Q: Can I use my own coding problems or must I pick from a library?**  
A: Both! You can create custom challenges or pick from curated LeetCode/HackerRank problems.

**Q: Will my code/solutions be public?**  
A: Only visible to the person whose challenge you solved, unless you opt into showcasing solutions on your profile.

**Q: Can I connect via GitHub?**  
A: Yes, OAuth2 GitHub login is built in. Link your GitHub to auto-populate your tech stack and projects.

---

## License

DateCode is open source under the [MIT License](./LICENSE).

---

## Contact & Community

- **Email:** [hello@datecode.dev]
- **Twitter/X:** [@datecode_app]
- **Discord Server:** [Join our community](https://discord.gg/datecode)
- **GitHub Discussions:** Ask questions, brainstorm features, and connect with contributors

---

## Inspiration & Credits

Inspired by the unique cultures of:
- Developer communities (Stack Overflow, GitHub, Dev.to)
- Modern dating apps (Tinder, Bumble, Hinge) — minus the swiping fatigue
- Open-source collaboration (GitHub, GitLab)
- Coding interview prep culture

Built with ❤️ by developers, for developers.

---

**Status:** 🚀 **In Active Development**  
Last Updated: June 2026  
Contributors: [Add your name here]
