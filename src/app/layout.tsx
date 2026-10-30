import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Hotel Airlink Castle | Nedumbassery, Kochi",
  description:
    "An independent, privately owned luxury hotel in Nedumbassery, Kochi. 54 air-conditioned rooms, five restaurants, and a rooftop pool.",
  keywords: [
    "Hotel Airlink Castle",
    "Nedumbassery hotels",
    "Luxury hotel Nedumbassery",
    "Hotel in Nedumbassery Kochi",
    "Airlink Castle Kochi",
    "Luxury banquet halls Nedumbassery",
  ],
  authors: [{ name: "Hotel Airlink Castle" }],
  openGraph: {
    title: "Hotel Airlink Castle | Nedumbassery, Kochi",
    description:
      "An independent, privately owned luxury hotel in Nedumbassery, Kochi. 54 air-conditioned rooms, five restaurants, and a rooftop pool.",
    url: "https://www.airlinkcastle.com",
    siteName: "Hotel Airlink Castle",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Hotel Airlink Castle Rooftop Pool and Suites",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Airlink Castle | Nedumbassery, Kochi",
    description:
      "An independent, privately owned luxury hotel in Nedumbassery, Kochi. 54 air-conditioned rooms, five restaurants, and a rooftop pool.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  name: "Hotel Airlink Castle",
  description:
    "An independent, privately owned luxury hotel in Nedumbassery, Kochi. 54 air-conditioned rooms, five restaurants, and a rooftop pool.",
  image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
  url: "https://www.airlinkcastle.com",
  telephone: "+914842612233",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Airport Road",
    addressLocality: "Nedumbassery",
    addressRegion: "Kerala",
    postalCode: "683572",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.16897,
    longitude: 76.3987,
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Rooftop Swimming Pool",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Free High-Speed Wi-Fi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "24-Hour Front Desk and Room Service",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Multi-Cuisine Dining and 24h Cafe",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Banquets and Conference Halls",
      value: true,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-white text-coffee antialiased font-sans" suppressHydrationWarning>
        {/* Skip navigation link for keyboard / screen-reader users */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
