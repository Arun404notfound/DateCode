import Image from "next/image";
import Link from "next/link";

const PURPLE = "#6B5CE7";
const CORAL = "#E8395A";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">

        {/* ── HERO (untouched) ── */}
        <section className="w-full h-screen relative overflow-hidden">
          <Image
            src="/hero_img.png"
            alt="DateCode Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <Image
              src="/logo_head.png"
              alt="DateCode Logo"
              width={64}
              height={64}
              className="mb-6"
              style={{ filter: "drop-shadow(0 2px 16px rgba(107,92,231,0.5))" }}
            />
            <h1
              className="font-extrabold leading-[1.0] tracking-[-0.03em]"
              style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}
            >
              <span
                className="block"
                style={{ color: PURPLE, textShadow: "0 2px 24px rgba(107,92,231,0.4)" }}
              >
                Date
              </span>
              <span
                className="block"
                style={{ color: CORAL, textShadow: "0 2px 24px rgba(232,57,90,0.4)" }}
              >
                Code
              </span>
            </h1>
            <p
              className="mt-5 text-base md:text-lg font-medium tracking-wide max-w-[22rem]"
              style={{ color: "#2d2d2d", textShadow: "0 1px 8px rgba(255,255,255,0.9)" }}
            >
              An open source dating app made for developers.
            </p>
            <a
              href="/api/auth/github"
              className="mt-9 inline-flex items-center gap-3 font-semibold px-8 py-[14px] rounded-full text-[15px] tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: `linear-gradient(135deg, ${PURPLE}, ${CORAL})`,
                color: "#fff",
                boxShadow: "0 4px 24px rgba(107,92,231,0.4), 0 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Login with GitHub
            </a>
          </div>
        </section>

        {/* ── SECTION 1: HOW IT WORKS ── */}
        <section className="w-full py-24 md:py-32" style={{ background: "linear-gradient(160deg, #f5f3ff 0%, #fff5f7 50%, #f0f4ff 100%)" }}>
          <div className="max-w-6xl mx-auto px-6">

            {/* eyebrow */}
            <div className="flex justify-center mb-8">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full border"
                style={{ background: "rgba(107,92,231,0.07)", borderColor: "rgba(107,92,231,0.2)", color: PURPLE }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l1.6 4.8L14.4 6l-4.8 1.6L8 12l-1.6-4.4L1.6 6l4.8-1.2z"/></svg>
                How DateCode Works
              </span>
            </div>

            {/* headline */}
            <div className="text-center mb-4">
              <h2
                className="font-extrabold tracking-tight leading-[1.08]"
                style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", color: "#111" }}
              >
                We made dating difficult
              </h2>
              <h2
                className="font-extrabold tracking-tight leading-[1.08]"
                style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", background: `linear-gradient(100deg, ${PURPLE} 30%, ${CORAL} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                for Good.
              </h2>
              {/* heart underline */}
              <div className="flex justify-center mt-1">
                <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
                  <path d="M4 10 Q40 18 76 10" stroke={CORAL} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
                  <path d="M40 16 C40 16 43 12 46 14 C48 15.5 46 18 44 16.5 C42 15 40 16 40 16 C40 16 38 15 36 16.5 C34 18 32 15.5 34 14 C37 12 40 16 40 16Z" fill={CORAL} opacity="0.7"/>
                </svg>
              </div>
            </div>
            <p className="text-center text-lg text-gray-400 mb-16 font-medium">Efforts matter.</p>

            {/* timeline connector */}
            <div className="relative hidden md:flex items-center justify-between mb-10 px-12">
              <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 border-t-2 border-dashed" style={{ borderColor: "rgba(107,92,231,0.25)" }} />
              {[
                { icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>, bg: PURPLE, label: "Explore" },
                { icon: <path d="M8 3L4 12h3v9l9-12h-5l3-6z" strokeLinejoin="round"/>, bg: "#9D8DF5", label: "Solve" },
                { icon: <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>, bg: CORAL, label: "Drop" },
                { icon: <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>, bg: "#E8395A", label: "Match" },
              ].map(({ icon, bg, label }) => (
                <div key={label} className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md" style={{ background: bg }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">{icon}</svg>
                  </div>
                </div>
              ))}
            </div>

            {/* cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* Card 1: Explore */}
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: PURPLE }}>Step 01</span>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Explore</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">Browse developer profiles — photos, GitHub projects, bio, and what they&apos;re currently building.</p>
                </div>
                {/* profile mockup */}
                <div className="rounded-xl border border-gray-100 p-4 mt-1" style={{ background: "#fafafa" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: `linear-gradient(135deg, ${PURPLE}, ${CORAL})` }}>P</div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-gray-900">Priya Singh</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill={PURPLE}><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                      </div>
                      <p className="text-xs text-gray-400">Full Stack Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    Bengaluru, India
                  </div>
                  <div className="flex items-center gap-1 text-xs mb-3" style={{ color: PURPLE }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
                    priya.dev
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {["Next.js", "TypeScript", "Rust", "PostgreSQL"].map(t => (
                      <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-gray-200 text-gray-500">{t}</span>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: PURPLE }}>Building</p>
                    <p className="text-xs text-gray-600">AI study companion for developers 🚀</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Solve */}
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#9D8DF5" }}>Step 02</span>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Solve</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">You liked a profile and want to right-swipe? Go ahead — but Ctrl+C and Ctrl+V are disabled. A little extra effort required.</p>
                </div>
                {/* challenge mockup */}
                <div className="rounded-xl border border-gray-100 p-4 mt-1 flex flex-col gap-3" style={{ background: "#fafafa" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="#9D8DF5"><path d="M8 3L4 12h3v9l9-12h-5l3-6z"/></svg>
                      <span className="text-xs text-gray-500">Challenge from <span style={{ color: "#9D8DF5" }} className="font-semibold">Priya</span></span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "#dcfce7", color: "#16a34a" }}>Easy</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Reverse a linked list.</p>
                    <p className="text-xs text-gray-400 mt-1.5"><span className="font-medium text-gray-600">Input:</span> head of a singly linked list</p>
                    <p className="text-xs text-gray-400 mt-0.5"><span className="font-medium text-gray-600">Output:</span> head of reversed list</p>
                    <p className="text-xs text-gray-400 mt-1.5">Constraints: O(n) time, O(1) space</p>
                  </div>
                  <button className="w-full text-xs font-semibold py-2 rounded-lg border transition-colors" style={{ borderColor: "rgba(107,92,231,0.3)", color: PURPLE, background: "rgba(107,92,231,0.05)" }}>
                    Open in Editor →
                  </button>
                </div>
              </div>

              {/* Card 3: Drop */}
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: CORAL }}>Step 03</span>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Drop</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">Challenge complete? Drop a single message. If they&apos;re interested, they&apos;ll solve your challenge back.</p>
                </div>
                {/* code editor mockup */}
                <div className="rounded-xl overflow-hidden border border-gray-800 mt-1" style={{ background: "#0d1117" }}>
                  <div className="flex gap-1.5 px-3 py-2.5 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-70" />
                  </div>
                  <div className="p-3 font-mono text-[11px] leading-5">
                    {[
                      ["1", "// Solution", "#8b949e"],
                      ["2", "function reverse(head) {", "#c9d1d9"],
                      ["3", "  let prev = null;", "#c9d1d9"],
                      ["4", "  let curr = head;", "#c9d1d9"],
                      ["5", "  while (curr) {", "#c9d1d9"],
                      ["6", "    const next = curr.next;", "#a5b4fc"],
                      ["7", "    curr.next = prev;", "#a5b4fc"],
                      ["8", "    prev = curr;", "#a5b4fc"],
                      ["9", "    curr = next;", "#a5b4fc"],
                      ["10", "  }", "#c9d1d9"],
                      ["11", "  return prev;", "#c9d1d9"],
                      ["12", "}", "#c9d1d9"],
                    ].map(([ln, code, color]) => (
                      <div key={ln} className="flex gap-3">
                        <span className="text-white/20 select-none w-4 text-right shrink-0">{ln}</span>
                        <span style={{ color }}>{code}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "#16a34a" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                  Challenge completed!
                </div>
              </div>

              {/* Card 4: Match */}
              <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 border border-gray-100 shadow-sm">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#E8395A" }}>Step 04</span>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Match</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">Enjoyy.. we wish you a prosperous future. 🎉</p>
                </div>
                {/* match mockup */}
                <div className="rounded-xl border border-pink-100 p-5 flex flex-col items-center gap-3 mt-1" style={{ background: "linear-gradient(135deg, #fff5f7, #faf5ff)" }}>
                  {/* overlapping avatars */}
                  <div className="flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-lg shadow-md z-10" style={{ background: `linear-gradient(135deg, ${PURPLE}, #9D8DF5)` }}>P</div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center -mx-2 z-20 shadow-md border-2 border-white" style={{ background: CORAL }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/></svg>
                    </div>
                    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-lg shadow-md z-10" style={{ background: `linear-gradient(135deg, ${CORAL}, #f87171)` }}>Y</div>
                  </div>
                  <div className="text-center">
                    <p className="font-extrabold text-gray-900 text-lg tracking-tight">It&apos;s a match!</p>
                    <p className="text-xs text-gray-400 mt-0.5">You and Priya liked each other.</p>
                  </div>
                  <button
                    className="w-full text-sm font-semibold py-2.5 rounded-full text-white transition-opacity hover:opacity-90"
                    style={{ background: CORAL }}
                  >
                    Start Conversation
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 2: BUILDERS ATTRACT BUILDERS ── */}
        <section className="w-full py-28 md:py-36" style={{ background: "#F7F6FF" }}>
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-20">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: CORAL }}>
                Discover builders
              </p>
              <h2
                className="font-extrabold tracking-tight leading-[1.05] max-w-2xl mx-auto"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#111" }}
              >
                Sometimes the best connection starts with a shared project.
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                Browse what people are building. Find someone whose work makes you curious.
              </p>
            </div>

            {/* project cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "AI Research Assistant",
                  desc: "Exploring long-context reasoning and memory architectures for personal use.",
                  stack: ["Next.js", "OpenAI", "PostgreSQL"],
                  color: PURPLE,
                  dot: "#a5b4fc",
                },
                {
                  title: "Indie Game",
                  desc: "A puzzle-platformer with procedurally generated levels and hand-drawn art.",
                  stack: ["Unity", "C#"],
                  color: CORAL,
                  dot: "#fca5a5",
                },
                {
                  title: "Open Source Analytics",
                  desc: "Privacy-first analytics built on open standards. Self-hostable.",
                  stack: ["React", "Supabase", "ClickHouse"],
                  color: "#0ea5e9",
                  dot: "#7dd3fc",
                },
                {
                  title: "Personal Finance App",
                  desc: "Helping people understand where their money actually goes.",
                  stack: ["Flutter", "Firebase"],
                  color: "#10b981",
                  dot: "#6ee7b7",
                },
                {
                  title: "MCP Server Toolkit",
                  desc: "A collection of MCP servers for common developer workflows.",
                  stack: ["TypeScript", "Node.js"],
                  color: "#f59e0b",
                  dot: "#fcd34d",
                },
                {
                  title: "Dev Portfolio Builder",
                  desc: "Generate a stunning portfolio from your GitHub activity automatically.",
                  stack: ["Next.js", "GitHub API"],
                  color: PURPLE,
                  dot: "#a5b4fc",
                },
                {
                  title: "Open Source CRM",
                  desc: "CRM that developers actually enjoy using. Keyboard-first.",
                  stack: ["React", "Supabase"],
                  color: CORAL,
                  dot: "#fca5a5",
                },
                {
                  title: "CLI Productivity Tool",
                  desc: "Smart terminal aliases and context-aware commands for faster workflows.",
                  stack: ["Rust", "Shell"],
                  color: "#8b5cf6",
                  dot: "#c4b5fd",
                },
              ].map(({ title, desc, stack, color, dot }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}18` }}
                  >
                    <span className="w-3 h-3 rounded-full" style={{ background: dot }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px] leading-snug group-hover:text-[#6B5CE7] transition-colors">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {stack.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                        style={{ background: `${color}12`, color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center mt-10 text-sm text-gray-400">
              Real projects from real builders. Every profile is a conversation waiting to happen.
            </p>
          </div>
        </section>

        {/* ── SECTION 3: OPEN SOURCE ── */}
        <section className="w-full py-28 md:py-36 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* left: copy */}
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: PURPLE }}>
                  Open Source
                </p>
                <h2
                  className="font-extrabold tracking-tight leading-[1.05]"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", color: "#111" }}
                >
                  Built in public.
                </h2>
                <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-sm">
                  This project belongs to the community as much as it belongs to us. No subscriptions. No premium swipes. No paywalls.
                </p>

                {/* stats */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {[
                    { label: "GitHub Stars", value: "1.2k", icon: "★" },
                    { label: "Forks", value: "148", icon: "⑂" },
                    { label: "Contributors", value: "34", icon: "◎" },
                    { label: "Open Issues", value: "12", icon: "◈" },
                  ].map(({ label, value, icon }) => (
                    <div
                      key={label}
                      className="rounded-xl p-4 border border-gray-100"
                      style={{ background: "#fafafa" }}
                    >
                      <span className="text-lg" style={{ color: PURPLE }}>{icon}</span>
                      <p className="mt-1 text-2xl font-extrabold text-gray-900 tracking-tight">{value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://github.com/Arun404notfound/DateCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2.5 font-semibold px-7 py-3.5 rounded-full text-sm tracking-wide border-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    borderColor: "#111",
                    color: "#111",
                    background: "transparent",
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>

              {/* right: commit feed */}
              <div
                className="rounded-2xl border border-gray-100 overflow-hidden"
                style={{ background: "#111" }}
              >
                {/* window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-70" />
                  <span className="ml-3 text-xs font-mono text-white/40">git log --oneline</span>
                </div>
                <div className="p-5 font-mono text-xs space-y-4">
                  {[
                    { hash: "a3f82c1", msg: "feat: add challenge submission flow", author: "priya-d", time: "2h ago", color: "#a5b4fc" },
                    { hash: "9d14e7b", msg: "fix: match unlock race condition", author: "arun404", time: "5h ago", color: "#6ee7b7" },
                    { hash: "c2b91a0", msg: "feat: project card hover interactions", author: "mxwell", time: "1d ago", color: "#a5b4fc" },
                    { hash: "77fce33", msg: "docs: update contributing guide", author: "sana-k", time: "2d ago", color: "#fcd34d" },
                    { hash: "e5a2d88", msg: "chore: migrate to App Router", author: "arun404", time: "3d ago", color: "#6ee7b7" },
                    { hash: "bb30c12", msg: "feat: GitHub OAuth integration", author: "priya-d", time: "4d ago", color: "#fca5a5" },
                  ].map(({ hash, msg, author, time, color }) => (
                    <div key={hash} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5 font-mono text-[11px]" style={{ color }}>{hash}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/80 truncate">{msg}</p>
                        <p className="text-white/30 text-[11px] mt-0.5">{author} · {time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-5">
                  <div className="rounded-lg p-3" style={{ background: "#1a1a2e" }}>
                    <p className="text-[11px] font-mono" style={{ color: "#a5b4fc" }}>
                      $ git clone https://github.com/Arun404notfound/DateCode
                    </p>
                    <p className="text-[11px] font-mono mt-1 text-white/30">
                      Cloning into &apos;DateCode&apos;... <span style={{ color: "#6ee7b7" }}>✓</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo_head.png" alt="DateCode" width={22} height={22} />
            <span className="text-sm font-semibold text-gray-700">DateCode</span>
            <span className="text-xs text-gray-400 ml-1">© 2026 · MIT License</span>
          </div>
          <nav className="flex gap-6">
            <Link className="text-xs text-gray-400 hover:text-gray-700 transition-colors" href="#">Terms</Link>
            <Link className="text-xs text-gray-400 hover:text-gray-700 transition-colors" href="#">Privacy</Link>
            <a
              className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
              href="https://github.com/Arun404notfound/DateCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
