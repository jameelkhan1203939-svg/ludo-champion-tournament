import { useState } from "react";
import RegistrationModal from "./RegistrationModal";

export default function RegisterButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full max-w-2xl flex flex-col items-center gap-3 py-4">
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-display font-black text-xl sm:text-2xl uppercase tracking-widest text-white bg-tournament-green shadow-cta cursor-pointer opacity-100 transition-all duration-200 select-none hover:scale-105 hover:brightness-110 active:scale-95"
        aria-label="Register Now for Ludo Champion Tournament"
      >
        <span className="text-2xl">🎮</span>
        Register Now!
        <span className="text-2xl">🎮</span>
        {/* Shimmer overlay */}
        <span className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
        </span>
      </button>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
