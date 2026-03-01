export default function TournamentHeader() {
  return (
    <header className="bg-tournament-red text-white py-8 px-4 text-center shadow-lg relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-2 left-4 text-6xl rotate-[-15deg]">🎲</div>
        <div className="absolute top-1 right-6 text-5xl rotate-[20deg]">🎲</div>
        <div className="absolute bottom-1 left-1/4 text-4xl rotate-[10deg]">🎯</div>
        <div className="absolute bottom-2 right-1/4 text-4xl rotate-[-10deg]">🎯</div>
      </div>
      <div className="relative z-10">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase drop-shadow-md">
          🏆 Ludo Champion Tournament 🏆
        </h1>
        <p className="mt-2 text-lg sm:text-xl font-semibold text-tournament-gold tracking-widest uppercase">
          Become the King of Ludo!
        </p>
      </div>
    </header>
  );
}
