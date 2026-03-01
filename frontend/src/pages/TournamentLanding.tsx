import TournamentHeader from '../components/TournamentHeader';
import TournamentBanner from '../components/TournamentBanner';
import TournamentDetailsCard from '../components/TournamentDetailsCard';
import RulesCard from '../components/RulesCard';
import RegisterButton from '../components/RegisterButton';
import TournamentFooter from '../components/TournamentFooter';

export default function TournamentLanding() {
  return (
    <div className="min-h-screen flex flex-col bg-tournament-bg">
      <TournamentHeader />
      <TournamentBanner />
      <main className="flex-1 flex flex-col items-center px-4 py-8 gap-6 pb-24">
        <TournamentDetailsCard />
        <RulesCard />
        <RegisterButton />
      </main>
      <TournamentFooter />
    </div>
  );
}
