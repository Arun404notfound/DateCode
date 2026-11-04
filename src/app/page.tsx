import SwipeDeck from "@/components/SwipeDeck";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center gap-6 px-4 py-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Date Code</h1>
        <p className="text-sm text-zinc-500">Answer their coding question to send a like.</p>
      </header>
      <SwipeDeck />
    </main>
  );
}
