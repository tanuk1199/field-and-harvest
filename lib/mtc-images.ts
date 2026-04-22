/**
 * /meant-to-climb page image registry
 * Dedicated per-page file — do NOT share with bower-images.ts or other lib/*-images.ts files.
 *
 * Each key maps to a specific slot on the page. Update src (Shopify CDN URL) to
 * replace an image. Leave src empty ("") to show the emoji fallback.
 */

const mtcImages: Record<string, { src: string; fallback: string }> = {
  // ───────────────────────────────────────────────────────────
  // HERO — main "after" shot under the headline
  // ───────────────────────────────────────────────────────────
  heroImage: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Apr_2_2026_04_53_08_AM.png?v=1775120001",
    fallback: "🌿",
  },

  // ───────────────────────────────────────────────────────────
  // BEFORE / AFTER — transformation section
  // beforeImage: sad sprawling juvenile Monstera (NO pole, unsplit leaves)
  // afterImage: climbing mature Monstera (WITH pole, big fenestrated leaves)
  // ───────────────────────────────────────────────────────────
  beforeImage: {
    src: "", // leave empty until you have a real "before" photo — fallback emoji will show
    fallback: "🌱",
  },
  afterImage: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Monstera_in_a_bright_living_room.png?v=1775182648",
    fallback: "🌿",
  },

  // ───────────────────────────────────────────────────────────
  // UGC GRID — 3×3 collage of plant parents using the product
  // Replace each with real UGC as it comes in.
  // ───────────────────────────────────────────────────────────
  ugc1: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_26_12PM.png?v=1774738367",
    fallback: "🪴",
  },
  ugc2: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Apr_2_2026_04_58_08_AM.png?v=1775120309",
    fallback: "🌱",
  },
  ugc3: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Monstera_in_a_bright_living_room.png?v=1775182648",
    fallback: "📏",
  },
  ugc4: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_52_31PM.png?v=1774738367",
    fallback: "📦",
  },
  ugc5: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Apr_2_2026_04_53_08_AM.png?v=1775120001",
    fallback: "🌿",
  },
  ugc6: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Apr_2_2026_04_58_37_AM.png?v=1775120442",
    fallback: "💧",
  },
  ugc7: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Apr_2_2026_08_17_48_PM.png?v=1775175482",
    fallback: "♻️",
  },
  ugc8: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Apr_2_2026_08_31_50_PM.png?v=1775176341",
    fallback: "✅",
  },
  ugc9: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_52_31PM.png?v=1774738367",
    fallback: "🪴",
  },

  // ───────────────────────────────────────────────────────────
  // PRODUCT CARD — main shot + 6 thumbnails
  // ───────────────────────────────────────────────────────────
  productMain: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_52_31PM.png?v=1774738367",
    fallback: "🪴",
  },
  productThumb1: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_28_2026_06_35_39_PM.png?v=1774738367",
    fallback: "1",
  },
  productThumb2: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_28_2026_06_35_16_PM.png?v=1774738367",
    fallback: "2",
  },
  productThumb3: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_26_04PM.png?v=1774738367",
    fallback: "3",
  },
  productThumb4: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_26_12PM.png?v=1774738367",
    fallback: "4",
  },
  productThumb5: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_28_2026_08_08_03_PM.png?v=1774742955",
    fallback: "5",
  },
  productThumb6: {
    src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_28_2026_08_16_44_PM.png?v=1774743426",
    fallback: "6",
  },

  // ───────────────────────────────────────────────────────────
  // BENEFIT ICONS — 4 chips in the product card benefits grid
  // Leave src empty to show emoji. Use small transparent PNGs if you upload icons.
  // ───────────────────────────────────────────────────────────
  benefitIcon1: { src: "", fallback: "🌀" }, // Bendable
  benefitIcon2: { src: "", fallback: "🌿" }, // Roots latch on
  benefitIcon3: { src: "", fallback: "📏" }, // Stackable
  benefitIcon4: { src: "", fallback: "🛡️" }, // Guarantee
}

export type MtcImageKey = keyof typeof mtcImages

export function getMtcImage(name: MtcImageKey): string {
  return mtcImages[name]?.src || ""
}

export function getMtcFallback(name: MtcImageKey): string {
  return mtcImages[name]?.fallback || ""
}
