# Hotel Airlink Castle — Home Page (Next.js 16 + Tailwind CSS)

A modern, elegant, and classic hotel web experience for **Hotel Airlink Castle**, Nedumbassery, directly at the gates of Cochin International Airport (CIAL), Kerala, India.

---

## 1. Quick Start

### Prerequisites
- Node.js 18+ (tested on Node v20/v26)
- npm 9+

### Installation & Running Locally
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000

# 4. Production Build Verification
npm run build
npm run start
```

---

## 2. Design System & Brand Palette

The project strictly abides by the **60 / 30 / 10** design ratio:

| Role | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **60%** | **Cream** | `#FBF5E9` | Main page background, card surfaces, section backdrops |
| **30%** | **Castle Brown** | `#4A2E22` | Headings, header text, footer, outline buttons, borders |
| **10%** | **Antique Gold**| `#B8893B` | Primary CTAs, star accents, progress hairline, badges |
| *Tint* | **Soft Brown** | `#6B5A4E` | Body copy and secondary metadata (WCAG AA contrast) |

- **Typography**:
  - Headings: `Cormorant Garamond` (400, 500) via `next/font/google`
  - Body & Labels: `Inter` (300, 400, 500) via `next/font/google`
- **Buttons**:
  - Primary: Pill shape, Antique Gold `#B8893B` background with Castle Brown `#4A2E22` text.
  - Secondary: Pill shape, Castle Brown `#4A2E22` outline, fills with brown on hover.

---

## 3. How to Update Content & Images

### A. Updating Text & Operational Data
All site content is centralized in **[`src/data/content.ts`](src/data/content.ts)**:
- **`HOTEL_INFO`**: Hotel address, telephone numbers, WhatsApp links, and emails.
- **`ROOMS_DATA`**: Room titles, descriptions, square footage, bed configurations, rates, and amenities.
- **`AIRPORT_OFFERS`**: Transit packages, day-use rooms, flight delay packages, airport shuttle transfers.
- **`DINING_DATA`**: Dining outlet descriptions, service timings, and culinary highlights.
- **`BANQUETS_DATA`**: Banquet hall capacities, types, and occasion suitability.
- **`DISTANCES_DATA`**: Key road transit distances and estimated travel times.
- **`FAQ_DATA`**: Accordion answers for check-in/out, shuttles, parking, cancellations, and policies.

### B. Updating Images
All photography references are located in **[`src/data/images.ts`](src/data/images.ts)**:
- Each image item includes `id`, `src`, `alt`, and `credit`.
- To swap an Unsplash placeholder for an official high-resolution hotel photo, simply replace the `src` with your local path (e.g. `/images/rooms/suite.jpg`) or official CDN URL.

### C. Replacing & Encoding the Hero Video
- The hero background video is served from **[`public/hero.mp4`](public/hero.mp4)** (with fallback to Dark Coffee `#3C2816` if absent or failing).
- **Target Specifications**:
  - Resolution: 1920×1080 (16:9 widescreen)
  - Length: 8–12 seconds seamless loop
  - Codec: H.264 video (`libx264`), profile High, level 4.1
  - Audio: None (`-an`, no audio track)
  - Pixel Format: `yuv420p`
  - Optimization: Faststart flag (`-movflags +faststart`) to allow instant progressive playback
  - File Size: Under 8 MB
  - Visual Pacing: Calm, cinematic, slow camera movements (no rapid cuts or strobe effects)
- **Recommended FFmpeg Command**:
  ```bash
  ffmpeg -i source_video.mov -an \
    -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p \
    -movflags +faststart \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
    public/hero.mp4
  ```
- **Poster Image**:
  - Optional still fallback image can be assigned to `POSTER_SRC` in `src/components/HeroSection.tsx`. By default, it is empty and gracefully reveals the Dark Coffee `#3C2816` canvas.

### D. Updating the Logo
- The official logo is placed at **[`public/logo.png`](public/logo.png)**.
- The logo sits on a soft cream/white pill in both the header and footer to guarantee zero visual patches or rectangular borders.

---

## 4. `TODO` Values Registry (Client Confirmation Required)

Every unknown operational figure has been explicitly marked with a `TODO` comment in [`src/data/content.ts`](src/data/content.ts). Before deploying to production, please verify:

1. **Official Star Rating Classification**:
   - `STAR_RATING`: Currently set to `4` with a note awaiting official classification certification.
   - Note: The historic logo displays 5 stars and remains unaltered per instructions.
2. **Room Tariffs**:
   - `startingRate` for Premium Suite (placeholder ₹6,500), Deluxe Room (placeholder ₹4,800), Standard Room (placeholder ₹3,500), and Presidential Suite (placeholder ₹12,000).
3. **Room Dimensions**:
   - Square footage placeholders (`520 sq. ft.`, `380 sq. ft.`, `300 sq. ft.`, `850 sq. ft.`).
4. **Contact Numbers & Emails**:
   - Primary landline: `+91 484 261 2233`
   - WhatsApp concierge: `+91 94470 54000`
   - Reservations email: `reservations@airlinkcastle.com`
5. **Restaurant Timings**:
   - Castle Cafe (24 Hours)
   - Royal Dine (12:00 PM – 3:30 PM | 7:00 PM – 11:00 PM)
   - Horizon Rooftop (5:30 PM – 11:30 PM)
   - Simply Fish (12:30 PM – 3:30 PM | 7:00 PM – 10:30 PM)
   - The Castle Bar (11:00 AM – 11:00 PM)
6. **Hall Capacities**:
   - The Regal Grand Ballroom (up to 500 guests placeholder)
   - The Executive Boardroom (30 to 120 guests placeholder)
   - The Castle Garden Lawn (up to 350 guests placeholder)
7. **Road Distances**:
   - Cochin International Airport: ~2.5 km (4 – 6 mins)
   - Angamaly Railway Station: ~6.5 km (10 – 12 mins)
   - Kochi City Center: ~28 km (45 – 55 mins)
   - Munnar: ~112 km (3 – 3.5 hours)
   - Alleppey: ~82 km (2 – 2.5 hours)

---

## 5. Technology Architecture

- **Next.js 16 (App Router)** with TypeScript
- **Tailwind CSS v4** with custom design tokens in `globals.css`
- **Framer Motion** for reveal animations, scroll transforms, and interactive modals
- **Lenis** smooth scrolling with `lerp: 0.1` and `prefers-reduced-motion` compliance
- **Lucide React** for lightweight, accessible SVG iconography
- **JSON-LD Schema**: Embedded `Hotel` and `LocalBusiness` structured data for search engine optimization.
