import Link from "next/link";
import { IMAGES } from "@/data/images";

export const metadata = {
  title: "Photography Credits | Hotel Airlink Castle",
  description: "Photography credits and attribution for Hotel Airlink Castle.",
};

export default function CreditsPage() {
  const creditsList = [
    { title: "Facade & Tropical Architecture", author: "Roberto Nickson", handle: "@rpnickson", url: "https://unsplash.com/@rpnickson" },
    { title: "Rooftop Pool & Serenity", author: "Edvin Johansson", handle: "@edvinjohansson", url: "https://unsplash.com/@edvinjohansson" },
    { title: "Suites & Kerala Carved Woodwork", author: "Chastity Cortijo", handle: "@chastitycortijo", url: "https://unsplash.com/@chastitycortijo" },
    { title: "Deluxe Accommodations", author: "Point3D Commercial Imaging", handle: "@point3dcommercialimaging", url: "https://unsplash.com/@point3dcommercialimaging" },
    { title: "Comfort & Restful Interiors", author: "Francesca Tosolini", handle: "@francescatosolini", url: "https://unsplash.com/@francescatosolini" },
    { title: "Coastal Dining & Royal Dine", author: "Jason Leung", handle: "@yxladj", url: "https://unsplash.com/@yxladj" },
    { title: "Specialty Coastal Seafood", author: "Amirali Mirhashemian", handle: "@amir_v_ali", url: "https://unsplash.com/@amir_v_ali" },
    { title: "Castle Cafe & 24h Barista", author: "Nathan Dumlao", handle: "@nate_dumlao", url: "https://unsplash.com/@nate_dumlao" },
    { title: "Castle Bar & Evening Lounge", author: "Kobby Mendez", handle: "@kobbymendez", url: "https://unsplash.com/@kobbymendez" },
    { title: "Banquets & Celebration Halls", author: "Sweet Ice Cream Photography", handle: "@sweeticecreamwedding", url: "https://unsplash.com/@sweeticecreamwedding" },
    { title: "Tropical Coconut Groves", author: "Kyran Low", handle: "@kyranlow", url: "https://unsplash.com/@kyranlow" },
    { title: "Sanctuary Rest & Well-being", author: "Rhema Kallianpur", handle: "@rhemakallianpur", url: "https://unsplash.com/@rhemakallianpur" },
  ];

  return (
    <main className="min-h-screen bg-[#3C2816] text-white px-[clamp(20px,4vw,64px)] py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ← Return to Home
          </Link>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mt-6 mb-4"
          >
            Photography & Visual Credits
          </h1>
          <p className="text-base text-white/80 max-w-2xl font-light leading-relaxed">
            Hotel Airlink Castle gratefully acknowledges the visual artists and photographers whose work captures the tranquil aesthetic and warmth of our private sanctuary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/12 pt-8">
          {creditsList.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-between"
            >
              <div>
                <span className="block text-xs uppercase tracking-[0.16em] text-white/60 mb-1">
                  {item.title}
                </span>
                <span className="block text-base text-white font-normal">
                  {item.author}
                </span>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/70 hover:text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {item.handle}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

