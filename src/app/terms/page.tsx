import Link from "next/link";

export const metadata = {
  title: "Terms of Service & Guest Guidelines | Hotel Airlink Castle",
  description: "Terms of service and guest guidelines for Hotel Airlink Castle, Nedumbassery, Kochi.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#3C2816] text-white px-[clamp(20px,4vw,64px)] py-20 lg:py-32">
      <div className="max-w-[840px] mx-auto">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          ← Return to Home
        </Link>
        <h1
          className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-6 mb-6"
        >
          Terms of Service & Guest Guidelines
        </h1>
        <div className="space-y-6 text-base text-white/80 font-light leading-relaxed border-t border-white/12 pt-8">
          <p>
            Welcome to Hotel Airlink Castle, an independent, privately owned luxury hotel in Nedumbassery, Kochi, Kerala. By using our website and reservation services, you agree to these terms.
          </p>
          <h2 id="guidelines" className="text-xl sm:text-2xl text-white font-bold uppercase tracking-tight pt-4">
            Guest Guidelines
          </h2>
          <p>
            Standard check-in begins at 12:00 PM and check-out is at 11:00 AM. Government-issued photo identification is required for all adult guests upon arrival. Our property is a tranquil sanctuary; we request that all guests observe reasonable quiet hours in accommodation corridors after 10:00 PM.
          </p>
          <h2 className="text-xl sm:text-2xl text-white font-bold uppercase tracking-tight pt-4">
            Reservations & Cancellations
          </h2>
          <p>
            Direct reservations may be modified or cancelled according to the rate tier selected during booking. For guaranteed arrangements, please contact our concierge team at reservations@airlinkcastle.com or +91 (0) 484 261 2233.
          </p>
          <p className="text-xs text-white/60 pt-6">
            Last updated: October 2026 · Hotel Airlink Castle, Airport Road, Nedumbassery, Kochi, Kerala 683572.
          </p>
        </div>
      </div>
    </main>
  );
}

