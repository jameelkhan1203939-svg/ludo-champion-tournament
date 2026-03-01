const rules = [
  {
    icon: '📱',
    text: 'All matches will be played on the Ludo King App.',
  },
  {
    icon: '📸',
    text: 'The winner must submit a screenshot of the game result.',
  },
  {
    icon: '⏱️',
    text: 'Players not present on time will be disqualified.',
  },
];

export default function RulesCard() {
  return (
    <section className="w-full max-w-2xl">
      <div className="bg-white rounded-2xl shadow-card border border-tournament-red/10 overflow-hidden">
        {/* Card header */}
        <div className="bg-gray-800 px-6 py-4">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wide text-center">
            📜 Tournament Rules
          </h2>
        </div>
        {/* Rules list */}
        <ol className="divide-y divide-gray-100">
          {rules.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-4 px-6 py-5 hover:bg-gray-50 transition-colors duration-150">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-tournament-red text-white font-black text-sm flex items-center justify-center shadow-sm">
                {idx + 1}
              </span>
              <div className="flex items-start gap-3 flex-1">
                <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-label="">
                  {rule.icon}
                </span>
                <p className="text-gray-700 font-medium leading-relaxed text-base">
                  {rule.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
