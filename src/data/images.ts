/**
 * Image Registry for Hotel Airlink Castle
 *
 * All images are curated in 4K resolution with warm tones matching the Dark Coffee (#3C2816)
 * and Alabaster (#E8E8E8) luxury palette.
 */

export interface ImageItem {
  id: string;
  src: string;
  alt: string;
  credit: {
    photographer: string;
    unsplashHandle: string;
    profileUrl: string;
  };
  blurDataURL?: string;
}

export const IMAGES = {
  hero: {
    poster: {
      id: "hero-poster",
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2560&q=85",
      alt: "Hotel Airlink Castle luxury rooftop pool and tropical evening ambiance",
      credit: {
        photographer: "Roberto Nickson",
        unsplashHandle: "@rpnickson",
        profileUrl: "https://unsplash.com/@rpnickson",
      },
    },
    thumbnail: {
      id: "hero-thumb",
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      alt: "Airlink Castle signature suite detail",
      credit: {
        photographer: "Edvin Johansson",
        unsplashHandle: "@edvinjohansson",
        profileUrl: "https://unsplash.com/@edvinjohansson",
      },
    },
  },
  welcome: {
    exterior: {
      id: "welcome-gardens",
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2560&q=85",
      alt: "Scenic lush coconut palm groves surrounding Hotel Airlink Castle Nedumbassery",
      credit: {
        photographer: "Edvin Johansson",
        unsplashHandle: "@edvinjohansson",
        profileUrl: "https://unsplash.com/@edvinjohansson",
      },
    },
    facade: {
      id: "welcome-facade",
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2560&q=85",
      alt: "Hotel Airlink Castle illuminated entryway at twilight",
      credit: {
        photographer: "Roberto Nickson",
        unsplashHandle: "@rpnickson",
        profileUrl: "https://unsplash.com/@rpnickson",
      },
    },
  },
  rooms: {
    premiumSuite: {
      id: "room-premium-suite",
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85",
      alt: "Premium Suite with carved wood furnishings and king-size bed at Hotel Airlink Castle",
      credit: {
        photographer: "Chastity Cortijo",
        unsplashHandle: "@chastitycortijo",
        profileUrl: "https://unsplash.com/@chastitycortijo",
      },
    },
    deluxeRoom: {
      id: "room-deluxe",
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85",
      alt: "Deluxe Room with warm ambient lighting and garden view",
      credit: {
        photographer: "Point3D Commercial Imaging",
        unsplashHandle: "@point3dcommercialimaging",
        profileUrl: "https://unsplash.com/@point3dcommercialimaging",
      },
    },
    standardRoom: {
      id: "room-standard",
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=85",
      alt: "Standard Room featuring plush bedding and contemporary comforts",
      credit: {
        photographer: "Francesca Tosolini",
        unsplashHandle: "@francescatosolini",
        profileUrl: "https://unsplash.com/@francescatosolini",
      },
    },
    presidentialSuite: {
      id: "room-presidential-suite",
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85",
      alt: "Presidential Suite with spacious lounge, carved woodwork, and private panoramic view",
      credit: {
        photographer: "Edvin Johansson",
        unsplashHandle: "@edvinjohansson",
        profileUrl: "https://unsplash.com/@edvinjohansson",
      },
    },
  },
  offers: {
    transitStay: {
      id: "offer-transit",
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=85",
      alt: "Transit guest relaxing in luxury room between flights",
      credit: {
        photographer: "Rhema Kallianpur",
        unsplashHandle: "@rhemakallianpur",
        profileUrl: "https://unsplash.com/@rhemakallianpur",
      },
    },
    dayUse: {
      id: "offer-day-use",
      src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=2000&q=85",
      alt: "Day-use guest suite with dedicated workspace and natural light",
      credit: {
        photographer: "Spacejoy",
        unsplashHandle: "@spacejoy",
        profileUrl: "https://unsplash.com/@spacejoy",
      },
    },
    flightDelay: {
      id: "offer-flight-delay",
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85",
      alt: "Flight delay comfort package with fresh refreshments",
      credit: {
        photographer: "Sasha Kaunas",
        unsplashHandle: "@sashakaunas",
        profileUrl: "https://unsplash.com/@sashakaunas",
      },
    },
    pickupDrop: {
      id: "offer-pickup-drop",
      src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=85",
      alt: "Airport luxury transfer shuttle service directly outside Cochin Airport",
      credit: {
        photographer: "Campbell",
        unsplashHandle: "@campbell3399",
        profileUrl: "https://unsplash.com/@campbell3399",
      },
    },
  },
  dining: {
    castleCafe: {
      id: "dining-castle-cafe",
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85",
      alt: "Castle Cafe 24-hour artisanal coffees, fresh pastries and light fare",
      credit: {
        photographer: "Nathan Dumlao",
        unsplashHandle: "@nate_dumlao",
        profileUrl: "https://unsplash.com/@nate_dumlao",
      },
    },
    royalDine: {
      id: "dining-royal-dine",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85",
      alt: "Royal Dine multi-cuisine restaurant with sophisticated tables and warm chandeliers",
      credit: {
        photographer: "Jason Leung",
        unsplashHandle: "@yxladj",
        profileUrl: "https://unsplash.com/@yxladj",
      },
    },
    horizon: {
      id: "dining-horizon",
      src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=85",
      alt: "Horizon rooftop open-air restaurant overlooking coconut palm canopy",
      credit: {
        photographer: "Manuel Cosentino",
        unsplashHandle: "@manuelcosentino",
        profileUrl: "https://unsplash.com/@manuelcosentino",
      },
    },
    simplyFish: {
      id: "dining-simply-fish",
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=85",
      alt: "Simply Fish coastal seafood delicacies and authentic Kerala fish curry",
      credit: {
        photographer: "Amirali Mirhashemian",
        unsplashHandle: "@amir_v_ali",
        profileUrl: "https://unsplash.com/@amir_v_ali",
      },
    },
    bar: {
      id: "dining-bar",
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85",
      alt: "The Castle Bar lounge with curated spirits and hand-crafted cocktails",
      credit: {
        photographer: "Kobby Mendez",
        unsplashHandle: "@kobbymendez",
        profileUrl: "https://unsplash.com/@kobbymendez",
      },
    },
  },
  banquets: {
    grandBallroom: {
      id: "banquet-ballroom",
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2560&q=85",
      alt: "Grand banquet hall setup for wedding receptions and galas",
      credit: {
        photographer: "Sweet Ice Cream Photography",
        unsplashHandle: "@sweeticecreamwedding",
        profileUrl: "https://unsplash.com/@sweeticecreamwedding",
      },
    },
    conferenceHall: {
      id: "banquet-conference",
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2560&q=85",
      alt: "Corporate boardroom and seminar conference hall",
      credit: {
        photographer: "Alex Kotliarskyi",
        unsplashHandle: "@frantic",
        profileUrl: "https://unsplash.com/@frantic",
      },
    },
    celebrationLawn: {
      id: "banquet-lawn",
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2560&q=85",
      alt: "Open-air celebratory garden lawn setup with ambient lights",
      credit: {
        photographer: "Al Elmes",
        unsplashHandle: "@alelmes",
        profileUrl: "https://unsplash.com/@alelmes",
      },
    },
  },
  gallery: [
    {
      id: "gal-1",
      category: "Lobby",
      title: "Grand Castle Reception",
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=2160&q=85",
      alt: "Spacious luxury hotel lobby with warm lighting and marble accents",
      credit: {
        photographer: "Visual Stories",
        unsplashHandle: "@visualstories",
        profileUrl: "https://unsplash.com/@visualstories",
      },
    },
    {
      id: "gal-2",
      category: "Pool",
      title: "Rooftop Swimming Pool",
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2160&q=85",
      alt: "Rooftop pool deck with sunbeds and panoramic skyline views",
      credit: {
        photographer: "Sasha Kaunas",
        unsplashHandle: "@sashakaunas",
        profileUrl: "https://unsplash.com/@sashakaunas",
      },
    },
    {
      id: "gal-3",
      category: "Rooms",
      title: "Master Suite Sanctuary",
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2160&q=85",
      alt: "Spacious master bedroom suite with crafted woodwork",
      credit: {
        photographer: "Chastity Cortijo",
        unsplashHandle: "@chastitycortijo",
        profileUrl: "https://unsplash.com/@chastitycortijo",
      },
    },
    {
      id: "gal-4",
      category: "Dining",
      title: "Royal Dine Restaurant",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2160&q=85",
      alt: "Intimate table setting at Royal Dine restaurant",
      credit: {
        photographer: "Jason Leung",
        unsplashHandle: "@yxladj",
        profileUrl: "https://unsplash.com/@yxladj",
      },
    },
    {
      id: "gal-5",
      category: "Banquets",
      title: "Regal Banquet Hall",
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2160&q=85",
      alt: "Festive banquet banquet hall setup with floral decor",
      credit: {
        photographer: "Sweet Ice Cream Photography",
        unsplashHandle: "@sweeticecreamwedding",
        profileUrl: "https://unsplash.com/@sweeticecreamwedding",
      },
    },
    {
      id: "gal-6",
      category: "Rooms",
      title: "Deluxe Twin Comfort",
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2160&q=85",
      alt: "Deluxe accommodation with bespoke furnishings",
      credit: {
        photographer: "Point3D Commercial Imaging",
        unsplashHandle: "@point3dcommercialimaging",
        profileUrl: "https://unsplash.com/@point3dcommercialimaging",
      },
    },
    {
      id: "gal-7",
      category: "Dining",
      title: "Castle Cafe 24h Barista",
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2160&q=85",
      alt: "Artisan espresso and pastries at Castle Cafe",
      credit: {
        photographer: "Nathan Dumlao",
        unsplashHandle: "@nate_dumlao",
        profileUrl: "https://unsplash.com/@nate_dumlao",
      },
    },
    {
      id: "gal-8",
      category: "Pool",
      title: "Sunset by the Waters",
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2160&q=85",
      alt: "Poolside twilight serenity with evening illumination",
      credit: {
        photographer: "Edvin Johansson",
        unsplashHandle: "@edvinjohansson",
        profileUrl: "https://unsplash.com/@edvinjohansson",
      },
    },
    {
      id: "gal-9",
      category: "Lobby",
      title: "Coconut Garden Walkway",
      src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2160&q=85",
      alt: "Lush tropical green landscapes around the property",
      credit: {
        photographer: "Kyran Low",
        unsplashHandle: "@kyranlow",
        profileUrl: "https://unsplash.com/@kyranlow",
      },
    },
  ],
};
