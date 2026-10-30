import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Rooms from "@/components/sections/Rooms";
import Offers from "@/components/sections/Offers";
import Dining from "@/components/sections/Dining";
import Banquets from "@/components/sections/Banquets";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-white text-coffee">
        {/* Initial Page Preloader */}
        <Loader />

        {/* Navigation */}
        <Navbar />

        <main id="main">
          {/* 1. Hero with full-bleed video */}
          <HeroSection />

          {/* 2. Sticky Scroll About Section */}
          <About />

          {/* 3. Rooms & Signature Suites */}
          <Rooms />

          {/* 4. Curated Guest Packages & Offers */}
          <Offers />

          {/* 5. Dining (5 Distinct Venues) */}
          <Dining />

          {/* 6. Banquets & Conferences */}
          <Banquets />

          {/* 7. Property Visual Gallery */}
          <Gallery />

          {/* 8. Verified Guest Reviews & Rating Badges */}
          <Reviews />

          {/* 9. Location & Regional Access */}
          <Location />

          {/* 10. Frequently Asked Questions */}
          <FAQ />
        </main>

        {/* 11. Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
