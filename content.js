/**
 * SISTERHOOD EXPERIENCE CONFIGURATION & CONTENT
 * 10+ Year Journey - Real, Honest, & Unfiltered
 * 
 * Edit any text, photos, captions, and memories below.
 */

const STORY_CONFIG = {
  // Personal Details
  recipientName: "Disha",
  relationshipLabel: "Sister & Best Friend",
  yearsTogether: "10+",
  
  // Audio Settings - Background Music
  audio: {
    songTitle: "Until I Found You - Stephen Sanchez",
    sources: [
      "bg-music.mp3",
      "Until I Found You - Stephen Sanchez and Em Beihold (Lyrics)  #untilifoundyou #stephensanchez - Melomaniac.mp3",
      "disha/bg-music.mp3"
    ]
  },

  // 1. Opening Screen
  opening: {
    greeting: "Hey Sister...",
    subtext: "Our 10+ year journey has never been a fairytale. And that's exactly why it's special.",
    buttonText: "Open Our Story ✨"
  },

  // 2. Hero Section
  hero: {
    image: "disha/photo_02.jpg",
    badge: "Special Edition • 10+ Years of Sisterhood",
    title: "Our story wasn't perfect. That's what makes it ours.",
    subtitle: "To the sister who has seen me at my best, my worst, and every phase in between.",
    scrollPrompt: "Scroll down to relive our chapters ↓"
  },

  // 3. Section: "We Were Never Perfect"
  neverPerfect: {
    heading: "We were never perfect.",
    lines: [
      "We annoyed each other.",
      "We misunderstood each other.",
      "We changed.",
      "We grew.",
      "Sometimes together.",
      "Sometimes separately.",
      "But through all of it..."
    ],
    climax: "We remained sisters."
  },

  // 4. Chapter 05 — Not Every Chapter Was Easy
  chapterNotEasy: {
    title: "Chapter 05 — Not Every Chapter Was Easy",
    part1: [
      "We've had our good days.",
      "Really, really good days."
    ],
    part2: [
      "And we've had days when we didn't understand each other at all.",
      "We've fought.",
      "We've disagreed.",
      "We've been annoyed.",
      "We've sometimes needed space.",
      "And there were phases where things just didn't feel the same."
    ],
    pause: "But somehow...",
    reconnect: "We always had a way of finding our way back."
  },

  // 5. Memory Timeline (Good Days vs Hard Days)
  timeline: {
    title: "10+ Years of Moments & Phases",
    subtitle: "Click between Good Days and Hard Days to explore our full story.",
    items: [
      {
        id: 1,
        type: "good",
        year: "2015 - 2016",
        title: "The Unstoppable Phase",
        photo: "disha/photo_01.jpg",
        caption: "Where it all began — laughing until our stomachs hurt.",
        message: "The early days where everything was a joke and we realized we shared the exact same wavelength of madness."
      },
      {
        id: 2,
        type: "hard",
        year: "2017",
        title: "The First Misunderstandings",
        photo: "disha/photo_03.jpg",
        caption: "Learning how to navigate our differences.",
        message: "Not every chapter needs to be beautiful to be important. We fought and learned that being sisters means working through silence."
      },
      {
        id: 3,
        type: "good",
        year: "2018 - 2019",
        title: "Late Night Secrets & Deep Talks",
        photo: "disha/photo_04.jpg",
        caption: "3 AM conversations that saved us.",
        message: "The phase where we knew every secret, every crushed dream, and every stupid hope we carried."
      },
      {
        id: 4,
        type: "hard",
        year: "2020",
        title: "The Distance Phase",
        photo: "disha/photo_05.jpg",
        caption: "Life changed around us and we needed space.",
        message: "Some moments taught us how to understand each other better. Distance tested us, but it couldn't erase what we built."
      },
      {
        id: 5,
        type: "good",
        year: "2021 - 2022",
        title: "Reconnection & Unfiltered Joy",
        photo: "disha/photo_06.jpg",
        caption: "Picking right back up without missing a beat.",
        message: "No matter how long we went without talking properly, one phone call made it feel like yesterday."
      },
      {
        id: 6,
        type: "hard",
        year: "2023",
        title: "Growing Up & Differing Views",
        photo: "disha/photo_07.jpg",
        caption: "Different priorities, same core bond.",
        message: "We realized we were growing into different people, but remaining anchored to the same sisterhood."
      },
      {
        id: 7,
        type: "good",
        year: "2024 - Present",
        title: "Forever In My Corner",
        photo: "disha/photo_08.jpg",
        caption: "The maturity of knowing we've survived everything.",
        message: "Looking back at 10+ years and realizing you are still the first person I want to call with good news."
      }
    ]
  },

  // 6. The "But We Came Back" Moment
  cameBack: {
    quote1: "Because the best part wasn't that we never had difficult moments.",
    quote2: "It was that the difficult moments didn't get to write the ending.",
    boldLines: [
      "We kept growing.",
      "We kept learning.",
      "And we kept finding our way back."
    ]
  },

  // 7. Growing Together
  growingTogether: {
    title: "Maybe That's What Growing Up Together Really Means.",
    text: [
      "Growing up together doesn't mean never changing.",
      "It means learning how to love each other through the changes.",
      "We weren't the same people 10 years ago.",
      "And we won't be the same people 10 years from now.",
      "But I'll always be grateful that I got to grow up alongside you."
    ]
  },

  // 8. Photo Gallery / Memory Vault
  gallery: {
    title: "The Unfiltered Memory Vault",
    subtitle: "13 candid snapshots of 10+ years of sisterhood.",
    photos: [
      { url: "disha/photo_01.jpg", caption: "Pure candid chaos" },
      { url: "disha/photo_02.jpg", caption: "The signature smile" },
      { url: "disha/photo_03.jpg", caption: "Quiet reflective moment" },
      { url: "disha/photo_04.jpg", caption: "Unbreakable energy" },
      { url: "disha/photo_05.jpg", caption: "Through every phase" },
      { url: "disha/photo_06.jpg", caption: "Making memories effortless" },
      { url: "disha/photo_07.jpg", caption: "Golden hour talks" },
      { url: "disha/photo_08.jpg", caption: "Sisterhood at its finest" },
      { url: "disha/photo_09.jpg", caption: "Unapologetically us" },
      { url: "disha/photo_10.jpg", caption: "No filter needed" },
      { url: "disha/photo_11.jpg", caption: "10 years of laughter" },
      { url: "disha/photo_12.jpg", caption: "Partner in crime" },
      { url: "disha/photo_13.jpg", caption: "Here's to forever" }
    ]
  },

  // 9. Final Real Letter
  finalLetter: {
    title: "A Letter To My Sister",
    paragraphs: [
      "Looking back at these 10+ years, I don't only remember the perfect moments.",
      "I remember everything.",
      "The laughter. The fights. The stupid arguments. The days we couldn't understand each other. The days we couldn't stop laughing. The phases where we were inseparable. The phases where we needed distance.",
      "And somehow, all of those moments became our story.",
      "I wouldn't erase the difficult chapters.",
      "Because without them, we wouldn't have learned how to appreciate the good ones.",
      "Our story isn't perfect. It's real. And it's ours."
    ]
  },

  // 10. Climax Sisterhood Wish
  finalWish: {
    lines: [
      "Whatever the next 10 years bring...",
      "More laughter.",
      "More arguments.",
      "More crazy memories.",
      "More changes.",
      "More good days.",
      "Maybe a few difficult ones too.",
      "But whatever happens..."
    ],
    coreWish: "I hope we always find our way back to each other.",
    finalTitle: "Forever My Sister. ❤️",
    footerQuote1: "Here's to every chapter we've lived...",
    footerQuote2: "...and every chapter still waiting for us."
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STORY_CONFIG;
}
