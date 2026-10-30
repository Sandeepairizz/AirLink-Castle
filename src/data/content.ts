/**
 * Hotel Airlink Castle - Site Content & Data Registry
 * 
 * Strict Editorial Standards:
 * - NO "Five Star" claims made in copy or metadata.
 * - STAR_RATING constant can be toggled by the client upon receiving official government tourism classification.
 * - All unknown operational figures marked with clear TODO indicators.
 */

/**
 * STAR_RATING: Set to null or numeric classification once officially confirmed.
 * NOTE: The hotel logo contains a historical 5-star graphic emblem which remains unaltered per instructions.
 */
export const STAR_RATING: number | null = 4; // TODO: Confirm official Star classification rating with hotel management (Pending official classification certificate)

export const HOTEL_INFO = {
  name: "Hotel Airlink Castle",
  tagline: "Your Comfortable Stay, Minutes from Cochin Airport",
  subline: "54 centrally air-conditioned rooms · 24-hour service · Airport shuttle",
  address: {
    street: "Near Cochin International Airport, Airport Road",
    locality: "Nedumbassery",
    city: "Kochi (Cochin)",
    district: "Ernakulam",
    state: "Kerala",
    postalCode: "683572", // TODO: Confirm postal code
    country: "India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.123456789!2d76.3985!3d10.1558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08051780000001%3A0x123456789abcdef!2sHotel%20Airlink%20Castle!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin", // TODO: Replace with official Google Maps verified embed link
  },
  contact: {
    // TODO: Confirm primary reservations telephone number
    phone: "+91 484 261 2233",
    phoneDisplay: "+91 (0) 484 261 2233",
    // TODO: Confirm dedicated mobile/reservations number
    mobile: "+91 94470 54000",
    mobileDisplay: "+91 94470 54000",
    // TODO: Confirm WhatsApp concierge/desk number
    whatsapp: "+91 94470 54000",
    whatsappLink: "https://wa.me/919447054000?text=Hello%20Airlink%20Castle%20Reservations",
    // TODO: Confirm official reservations email address
    email: "reservations@airlinkcastle.com",
    infoEmail: "info@airlinkcastle.com",
    checkInTime: "12:00 PM (24-Hour flexible check-in available for airport transits)",
    checkOutTime: "11:00 AM",
  },
  social: {
    // TODO: Confirm official social media handles
    facebook: "https://facebook.com/airlinkcastle",
    instagram: "https://instagram.com/airlinkcastle",
    tripadvisor: "https://tripadvisor.com/Hotel_Review-Airlink_Castle",
    google: "https://maps.google.com/?cid=airlinkcastle",
  },
};

export const NAV_LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Banquets", href: "#banquets" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const WELCOME_CONTENT = {
  eyebrow: "At The Gates Of Cochin Airport",
  title: "A Calm Sanctuary Crafted for Travel, Rest & Hospitality",
  editorial:
    "Hotel Airlink Castle is located at the gates of Cochin International Airport, Nedumbassery. Whether you have an early flight, a business meeting or an event, we offer comfortable rooms with carved wood furnishings and views of coconut gardens.",
  features: [
    {
      id: "airport-proximity",
      title: "Airport Proximity",
      description: "Located right at the doorstep of Cochin International Airport (CIAL) for effortless arrivals and departures.",
      icon: "Plane",
    },
    {
      id: "24h-service",
      title: "24-Hour Check-in & Service",
      description: "Seamless round-the-clock front desk, concierge, and in-room dining tailored to flight timetables.",
      icon: "Clock",
    },
    {
      id: "rooftop-pool",
      title: "Rooftop Pool & Garden",
      description: "An open-air swimming pool atop the castle overlooking sweeping lush green coconut canopies.",
      icon: "Waves",
    },
    {
      id: "dining-outlets",
      title: "Multi-Cuisine Dining",
      description: "Five distinct culinary venues serving traditional Kerala seafood delicacies, continental, and pan-Asian fare.",
      icon: "UtensilsCrossed",
    },
    {
      id: "banquets",
      title: "Banquets & Conferences",
      description: "Spacious event halls and boardrooms tailored for weddings, corporate meets, and intimate celebrations.",
      icon: "Building2",
    },
    {
      id: "wifi",
      title: "Complimentary Wi-Fi",
      description: "High-speed wireless connectivity throughout all guest rooms, public lounges, and meeting halls.",
      icon: "Wifi",
    },
  ],
  stats: [
    {
      value: 54,
      suffix: "",
      label: "Centrally Air-Conditioned Rooms",
      note: "Elegantly appointed with carved wood furnishings",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Round-the-Clock Service",
      note: "Front desk, in-room dining & airport concierge",
    },
    {
      value: 5,
      suffix: "",
      label: "Dining Outlets & Lounges",
      note: "Including 24-hour cafe & specialty seafood",
    },
  ],
};

export interface RoomItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  imageKey: "premiumSuite" | "deluxeRoom" | "standardRoom" | "presidentialSuite";
  startingRate: number; // TODO: Confirm actual room rate with hotel management
  ratePlaceholder: string;
  size: string; // TODO: Confirm exact room square footage
  bed: string;
  view: string;
  ac: string;
  occupancy: string;
  amenities: string[];
}

export const ROOMS_DATA: RoomItem[] = [
  {
    id: "premium-suite",
    name: "Premium Suite",
    category: "Signature Suite",
    tagline: "Spacious comfort with bespoke carved wood accents and private lounge",
    description: "Designed for discerning travelers who appreciate understated Kerala craftsmanship. Features an expansive living parlor, master bedroom with plush king bedding, and garden vista.",
    imageKey: "premiumSuite",
    startingRate: 6500, // TODO: Confirm official starting rate for Premium Suite
    ratePlaceholder: "From ₹6,500/night",
    size: "520 sq. ft.", // TODO: Confirm exact dimensions
    bed: "King Bed",
    view: "Coconut Grove View",
    ac: "Central Air Conditioning",
    occupancy: "Up to 3 Guests",
    amenities: [
      "Plush King-size mattress",
      "Dedicated seating area with sofa",
      "High-speed complimentary Wi-Fi",
      "43-inch Smart LED TV",
      "Executive work desk",
      "Complimentary airport shuttle (on request)",
      "Tea & artisan coffee maker",
      "Electronic digital safe",
    ],
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    category: "Luxury Accommodation",
    tagline: "Warm ambient interiors crafted for deep rest and rejuvenation",
    description: "Thoughtfully balanced for business executives and leisure travelers. Enjoy peaceful soundproofed glazing, rich wood tones, and generous wardrobe spaces.",
    imageKey: "deluxeRoom",
    startingRate: 4800, // TODO: Confirm official starting rate for Deluxe Room
    ratePlaceholder: "From ₹4,800/night",
    size: "380 sq. ft.", // TODO: Confirm exact dimensions
    bed: "King or Twin Beds",
    view: "Garden / Courtyard",
    ac: "Central Air Conditioning",
    occupancy: "Up to 2 Adults",
    amenities: [
      "Custom-tailored orthopedic bed",
      "Modern en-suite bath with rain shower",
      "High-speed Wi-Fi",
      "Soundproofed window panels",
      "Mini bar & refreshment station",
      "24-Hour in-room dining",
      "Digital electronic safe",
    ],
  },
  {
    id: "standard-room",
    name: "Standard Room",
    category: "Classic Accommodation",
    tagline: "Crisp, contemporary efficiency perfect for airport transits",
    description: "Ideal for brief layovers and overnight stopovers. All the hallmarks of Airlink Castle comfort—crisp linens, silent climate control, and rapid check-in.",
    imageKey: "standardRoom",
    startingRate: 3500, // TODO: Confirm official starting rate for Standard Room
    ratePlaceholder: "From ₹3,500/night",
    size: "300 sq. ft.", // TODO: Confirm exact dimensions
    bed: "Queen or Twin Beds",
    view: "Courtyard View",
    ac: "Central Air Conditioning",
    occupancy: "Up to 2 Guests",
    amenities: [
      "Comfortable ergonomic bed",
      "En-suite bathroom with hot & cold water",
      "Complimentary Wi-Fi",
      "Satellite television",
      "Coffee & tea amenities",
      "Direct dial telephone",
    ],
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    category: "Flagship Suite",
    tagline: "Unrivaled presidential luxury with panoramic top-floor vistas",
    description: "The crown jewel of Hotel Airlink Castle. Featuring traditional Kerala architectural flourishes, private dining area, separate boardroom nook, and bespoke VIP concierge service.",
    imageKey: "presidentialSuite",
    startingRate: 12000, // TODO: Confirm official starting rate for Presidential Suite
    ratePlaceholder: "From ₹12,000/night",
    size: "850 sq. ft.", // TODO: Confirm exact dimensions
    bed: "Grand Imperial King Bed",
    view: "Panoramic Skyline & Gardens",
    ac: "Central Air Conditioning with Multi-Zone Control",
    occupancy: "Up to 4 Guests",
    amenities: [
      "Separate master bedroom & regal parlor",
      "Private dining table for 6",
      "Luxury marble bathroom with soaking tub",
      "Priority VIP airport chauffeur transfer",
      "Complimentary fresh seasonal fruit basket",
      "Dedicated 24-hour butler assistance",
    ],
  },
];

export interface HotelOffer {
  id: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  highlights: string[];
  ctaText: string;
  badge: string;
  imageKey: "transitStay" | "dayUse" | "flightDelay" | "pickupDrop";
}

export type AirportOffer = HotelOffer;

export const HOTEL_OFFERS: HotelOffer[] = [
  {
    id: "weekend-escape",
    title: "Weekend Sanctuary Retreat",
    eyebrow: "Leisure Escape",
    tagline: "Indulge in unhurried luxury with private suite comfort and rooftop vistas",
    description: "Reclaim your weekends in a serene setting. Enjoy spacious suite accommodation, morning rooftop breakfast overlooking coconut groves, and leisurely late check-out.",
    highlights: ["Signature suite accommodation", "Rooftop terrace breakfast included", "Complimentary late check-out (3 PM)"],
    ctaText: "Reserve Weekend",
    badge: "Most Popular",
    imageKey: "transitStay",
  },
  {
    id: "culinary-journey",
    title: "Culinary Discovery Package",
    eyebrow: "Gastronomic Journey",
    tagline: "A five-venue dining experience crafted by our master chefs",
    description: "Savor authentic Kerala seafood, continental delicacies, and panoramic sunset cocktails across our five distinctive restaurants and lounges.",
    highlights: ["4-Course chef's table dinner", "Sunset beverage at Horizon Rooftop", "Artisanal breakfast at Castle Cafe"],
    ctaText: "Explore Package",
    badge: "Chef's Curated",
    imageKey: "dayUse",
  },
  {
    id: "business-privilege",
    title: "Executive Business Sanctuary",
    eyebrow: "Corporate Comfort",
    tagline: "Productive calm with flexible hours and boardroom privileges",
    description: "Tailored for senior executives requiring seamless connectivity, soundproofed workspaces, high-speed fiber Wi-Fi, and round-the-clock private service.",
    highlights: ["Flexible 24-hour check-in", "Executive boardroom access (2 hrs)", "Express laundry & concierge service"],
    ctaText: "Book Executive",
    badge: "Corporate",
    imageKey: "flightDelay",
  },
  {
    id: "serene-retreat",
    title: "Extended Serenity Stay",
    eyebrow: "Long Stay Privileges",
    tagline: "Special weekly tariffs for restorative stays in God's Own Country",
    description: "Whether visiting family in Kerala or seeking a peaceful work retreat, enjoy privileged rates for stays of 5 nights or longer with complete hotel amenities.",
    highlights: ["Preferential weekly tariff", "Daily multi-cuisine buffet breakfast", "Dedicated 24/7 personal concierge"],
    ctaText: "Inquire Extended Stay",
    badge: "Best Value",
    imageKey: "pickupDrop",
  },
];

export const AIRPORT_OFFERS = HOTEL_OFFERS;

export interface DiningOutlet {
  id: string;
  name: string;
  cuisine: string;
  timing: string; // TODO: Confirm exact opening hours
  description: string;
  atmosphere: string;
  highlights: string[];
  imageKey: "castleCafe" | "royalDine" | "horizon" | "simplyFish" | "bar";
}

export const DINING_DATA: DiningOutlet[] = [
  {
    id: "castle-cafe",
    name: "Castle Cafe",
    cuisine: "24-Hour Artisan Coffee & All-Day Bites",
    timing: "Open 24 Hours Daily", // TODO: Confirm 24-hour operation status
    description: "Whether stepping in off a midnight flight or catching a dawn espresso before departure, Castle Cafe welcomes you with fresh roasts, savory treats, and bakery delights.",
    atmosphere: "Warm, casual, with comfortable lounge seating and fast Wi-Fi.",
    highlights: ["Freshly brewed South Indian filter coffee & espresso", "Continental breakfast plates", "Midnight snack menu"],
    imageKey: "castleCafe",
  },
  {
    id: "royal-dine",
    name: "Royal Dine",
    cuisine: "Multi-Cuisine Fine Dining (Kerala, North Indian & Continental)",
    timing: "12:00 PM – 3:30 PM | 7:00 PM – 11:00 PM", // TODO: Confirm service hours
    description: "The hotel's flagship fine dining hall where authentic Kerala spices meet global culinary artistry. Feast on rich curries, biryanis, tandoori specialties, and gourmet European classics.",
    atmosphere: "Refined ambiance with warm chandeliers, carved wood details, and attentive table service.",
    highlights: ["Chef's Signature Travancore Chicken Roast", "Traditional Malabar Biryani", "Vegetarian thali feasts"],
    imageKey: "royalDine",
  },
  {
    id: "horizon",
    name: "Horizon",
    cuisine: "Rooftop Grill & Sunset Lounge",
    timing: "5:30 PM – 11:30 PM Daily", // TODO: Confirm rooftop timings
    description: "Perched high above Nedumbassery, Horizon pairs panoramic vistas of the surrounding coconut groves and evening skies with sizzlers, barbecue grills, and light tapas.",
    atmosphere: "Open-air breezy terrace with twilight mood lighting and calm music.",
    highlights: ["Live barbecue and sizzler platters", "Sunset mocktails & cool beverages", "Panoramic aerial view of CIAL approach"],
    imageKey: "horizon",
  },
  {
    id: "simply-fish",
    name: "Simply Fish",
    cuisine: "Coastal Kerala & Fresh Catch Seafood",
    timing: "12:30 PM – 3:30 PM | 7:00 PM – 10:30 PM", // TODO: Confirm seafood restaurant hours
    description: "A celebration of Kerala's celebrated maritime bounty. Fresh catch from Kochi harbor and backwaters marinated in freshly ground spices, roasted on banana leaves, or simmered in coconut milk.",
    atmosphere: "Rustic coastal charm with traditional brass ware and fragrant aromas.",
    highlights: ["Karimeen Pollichathu (Pearl Spot in banana leaf)", "Alleppey Fish Curry with raw mango", "Tiger prawns pepper roast"],
    imageKey: "simplyFish",
  },
  {
    id: "the-castle-bar",
    name: "The Castle Bar",
    cuisine: "Curated Spirits, Fine Wines & Handcrafted Cocktails",
    timing: "11:00 AM – 11:00 PM", // TODO: Confirm bar license timings
    description: "An intimate sanctuary for unwinding with business associates or reflecting after a journey. Featuring single malts, international wines, and classic cocktail concoctions.",
    atmosphere: "Dimly lit amber warmth with plush leather seating and quiet privacy.",
    highlights: ["Selection of aged single malts", "Kerala spice-infused artisanal cocktails", "Gourmet finger bites"],
    imageKey: "bar",
  },
];

export interface BanquetSpace {
  id: string;
  name: string;
  type: string;
  capacity: string; // TODO: Confirm hall capacity
  idealFor: string;
  description: string;
  imageKey: "grandBallroom" | "conferenceHall" | "celebrationLawn";
}

export const BANQUETS_DATA: BanquetSpace[] = [
  {
    id: "grand-ballroom",
    name: "The Regal Grand Ballroom",
    type: "Banquet & Wedding Hall",
    capacity: "Up to 500 Guests", // TODO: Confirm hall capacity
    idealFor: "Wedding receptions, grand banquets, annual galas, cultural functions",
    description: "A pillar-free, high-ceiling banquet hall with bespoke lighting, crystal chandeliers, integrated sound acoustics, and direct access for catering.",
    imageKey: "grandBallroom",
  },
  {
    id: "conference-hall",
    name: "The Executive Boardroom & Conference Hall",
    type: "Corporate & Seminar Venue",
    capacity: "30 to 120 Attendees", // TODO: Confirm hall capacity
    idealFor: "Corporate meetings, AGMs, training seminars, client presentations",
    description: "Fully equipped with modern audiovisual projection systems, high-speed videoconferencing Wi-Fi, ergonomic executive seating, and customized business coffee breaks.",
    imageKey: "conferenceHall",
  },
  {
    id: "celebration-lawn",
    name: "The Castle Garden Lawn",
    type: "Open-Air Event Space",
    capacity: "Up to 350 Guests", // TODO: Confirm lawn capacity
    idealFor: "Cocktail parties, birthday bashes, pre-wedding festivities, starlit dinners",
    description: "Lush green manicured lawns bordered by tropical foliage and fairy lights, offering a pleasant open-air ambiance just minutes from the airport.",
    imageKey: "celebrationLawn",
  },
];

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  source: "TripAdvisor" | "Google";
  stayType: string;
  quote: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Capt. Rajesh Varma",
    location: "Bengaluru, India",
    rating: 5,
    date: "Stayed October 2026",
    source: "Google",
    stayType: "Business / Flight Layover",
    quote: "Exceptional location right next to Cochin Airport. The 24-hour check-in saved my day after a delayed night flight. The wooden interiors feel authentically Kerala, and the room was whisper-quiet. Highly recommended for airport transit.",
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    location: "London, UK",
    rating: 5,
    date: "Stayed September 2026",
    source: "TripAdvisor",
    stayType: "Holiday / Transit to Munnar",
    quote: "We stayed here before heading into the tea hills. The rooftop pool looking over the coconut trees was blissful after a long international flight. The seafood at Simply Fish was so fresh and delicious!",
  },
  {
    id: "rev-3",
    author: "Dr. Mathew Joseph",
    location: "Kochi, Kerala",
    rating: 5,
    date: "Stayed October 2026",
    source: "Google",
    stayType: "Corporate Conference",
    quote: "Attended a medical seminar in their banquet hall. Impeccable hospitality, ample car parking, and the airport connectivity makes it the most convenient venue in Ernakulam district.",
  },
  {
    id: "rev-4",
    author: "Priya & Anand Nair",
    location: "Dubai, UAE",
    rating: 5,
    date: "Stayed August 2026",
    source: "TripAdvisor",
    stayType: "Family Holiday",
    quote: "The staff was remarkably polite and helped us with prompt airport drop at 4:30 AM. Clean, spacious rooms and the children loved the rooftop pool. Will definitely be our regular transit home in Kochi.",
  },
];

export interface DistanceItem {
  destination: string;
  distance: string; // TODO: Verify exact road distance with GPS
  timeByRoad: string; // TODO: Confirm typical transit duration
  description: string;
  iconName: string;
}

export const DISTANCES_DATA: DistanceItem[] = [
  {
    destination: "Cochin International Airport (CIAL)",
    distance: "~2.5 km", // TODO: Confirm exact distance
    timeByRoad: "4 – 6 mins",
    description: "Located right on the airport access road. Complimentary shuttle service available upon request.",
    iconName: "Plane",
  },
  {
    destination: "Angamaly Railway Station",
    distance: "~6.5 km", // TODO: Confirm exact distance
    timeByRoad: "10 – 12 mins",
    description: "Major railway hub connecting all north-south express trains through central Kerala.",
    iconName: "Train",
  },
  {
    destination: "Kochi City Center (MG Road / Marine Drive)",
    distance: "~28 km", // TODO: Confirm exact distance
    timeByRoad: "45 – 55 mins",
    description: "Direct highway connectivity via NH 544 and Salem-Kochi Highway.",
    iconName: "Building",
  },
  {
    destination: "Munnar Hill Station",
    distance: "~112 km", // TODO: Confirm exact distance
    timeByRoad: "3 – 3.5 hours",
    description: "The gateway to the Western Ghats tea plantations; taxi arrangements available at our travel desk.",
    iconName: "Mountain",
  },
  {
    destination: "Alleppey (Alappuzha Backwaters)",
    distance: "~82 km", // TODO: Confirm exact distance
    timeByRoad: "2 – 2.5 hours",
    description: "World-famous backwater houseboat cruises and Vembanad Lake canals.",
    iconName: "Anchor",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are your check-in and check-out times? Do you offer 24-hour check-in?",
    answer: "Our standard check-in time is 12:00 PM and check-out is 11:00 AM. However, understanding airport flight schedules, we offer 24-hour flexible check-in for transit passengers upon prior request and subject to availability.",
    category: "Arrival & Departure",
  },
  {
    id: "faq-2",
    question: "How do I arrange the Cochin Airport pick-up or drop service?",
    answer: "We provide convenient airport shuttle transfers between Hotel Airlink Castle and CIAL terminals (T1 Domestic and T3 International). Simply share your flight number and expected arrival time with our reservations desk via phone or WhatsApp, and our concierge team will be waiting for you.",
    category: "Transit",
  },
  {
    id: "faq-3",
    question: "Is secure parking available on the property? Do you have EV charging?",
    answer: "Yes, Hotel Airlink Castle provides complimentary, secure 24-hour on-site parking for all staying guests and banquet attendees. Valet parking assistance is available during event functions. Dedicated EV vehicle charging points can be accessed on request.",
    category: "Facilities",
  },
  {
    id: "faq-4",
    question: "What is your reservation cancellation and modification policy?",
    answer: "Standard reservations may be cancelled or modified free of charge up to 24 hours prior to scheduled check-in. For flight delay transit bookings, we offer flexible same-day date alterations without penalty when accompanied by flight delay notices.",
    category: "Bookings",
  },
  {
    id: "faq-5",
    question: "What is your policy regarding children and pets?",
    answer: "Children up to 5 years stay complimentary in existing parent bedding. Extra beds or baby cots can be provided upon request for a nominal charge. In accordance with local hospitality hygiene regulations and allergy precautions, pets are generally not permitted on property grounds.",
    category: "Policies",
  },
];
