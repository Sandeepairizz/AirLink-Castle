import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Hotel Airlink Castle",
  description: "Privacy policy for Hotel Airlink Castle, Nedumbassery, Kochi.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <div className="space-y-6 text-base text-white/80 font-light leading-relaxed border-t border-white/12 pt-8">
          <p>
            Hotel Airlink Castle is an independent, privately owned hotel located in Nedumbassery, Kochi, Kerala. We are committed to safeguarding the privacy and confidentiality of our guests and website visitors.
          </p>
          <h2 className="text-xl sm:text-2xl text-white font-bold uppercase tracking-tight pt-4">
            Reservation & Inquiries Data
          </h2>
          <p>
            When booking a stay, reserving dining tables, or submitting inquiries, we collect guest names, contact telephone numbers, and email addresses solely to facilitate bookings, coordinate concierge requests, and maintain reservation records.
          </p>
          <h2 className="text-xl sm:text-2xl text-white font-bold uppercase tracking-tight pt-4">
            Newsletter Subscriptions
          </h2>
          <p>
            Guest email addresses provided for our private journal subscription are used strictly for seasonal announcements and private offers. Subscribers may unsubscribe at any time via the link included in all dispatches.
          </p>
          <p className="text-xs text-white/60 pt-6">
            Last updated: October 2026. For questions regarding your personal information, contact reservations@airlinkcastle.com.
          </p>
        </div>
      </div>
    </main>
  );
}

