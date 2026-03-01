export default function TournamentFooter() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'ludo-champion-tournament'
  );

  return (
    <footer className="bg-gray-900 text-gray-300 py-5 px-4 text-center fixed bottom-0 left-0 right-0 z-50 shadow-[0_-4px_16px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-sm">
        <span className="font-semibold text-white">
          &copy; {year} Ludo Champions
        </span>
        <span className="hidden sm:inline text-gray-600">|</span>
        <span className="text-gray-400">
          Built with{' '}
          <span className="text-tournament-red" aria-label="love">♥</span>{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tournament-gold hover:text-yellow-300 font-semibold transition-colors duration-150 underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </span>
      </div>
    </footer>
  );
}
