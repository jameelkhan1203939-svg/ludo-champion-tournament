interface DetailItem {
  icon: string;
  label: string;
  value: string;
}

const details: DetailItem[] = [
  { icon: '📅', label: 'Date', value: '15 March 2026' },
  { icon: '⏰', label: 'Time', value: '06:00 PM IST' },
  { icon: '💰', label: 'Entry Fee', value: '₹50' },
  { icon: '🏆', label: 'Winner Prize', value: '₹1000' },
];

export default function TournamentDetailsCard() {
  return (
    <section className="w-full max-w-2xl">
      <div className="bg-white rounded-2xl shadow-card border border-tournament-red/10 overflow-hidden">
        {/* Card header */}
        <div className="bg-tournament-red px-6 py-4">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wide text-center">
            Tournament Details
          </h2>
        </div>
        {/* Details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {details.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 px-6 py-5 ${
                idx < 2 ? 'sm:border-b border-gray-100' : ''
              } hover:bg-red-50 transition-colors duration-150`}
            >
              <span className="text-3xl flex-shrink-0" role="img" aria-label={item.label}>
                {item.icon}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {item.label}
                </p>
                <p className="text-lg sm:text-xl font-black text-gray-800 leading-tight">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
