// ============================================================
// IMAGE ASSET MAP — "A Day in Her Garden" Story Page
// ============================================================
// First-person narrative from the neighbor's perspective.
// Images should feel candid/lifestyle — not product shots.
// ============================================================

export const gardenImages = {

  // ── HERO ───────────────────────────────────────────────────
  // Wide shot of an older woman in her garden, early morning light.
  // Candid, warm, editorial. Aspect: 4:3.
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot_2026-01-22_at_12.36.58_AM.webp?v=1773897633",

  // ── AUTHOR AVATAR ──────────────────────────────────────────
  // Circular photo of "Margaret" — the neighbor character.
  authorAvatar: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_19_2026_01_04_57_AM.png?v=1773896717",

  // ── STORY IMAGES (placed between paragraphs) ───────────────

  // Putting on the carrier in the morning — getting ready
  storyPutOn: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260121_2336_Image_Generation_remix_01kfhzrp1yexc83w9xykv2809a.png?v=1769056680",

  // Walking through rows, hands-free picking
  storyPicking: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot_2026-01-31_at_12.31.08_PM.png?v=1769880807",

  // Full pouch loaded with produce
  storyFullPouch: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot_2026-01-21_at_11.40.36_PM.png?v=1769056845",

  // Drop-chute dumping harvest
  storyDump: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.webp?v=1769057601",

  // ── PRODUCT SECTION ────────────────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260121_2324_Image_Generation_remix_01kfhz3qcjezetk4scgbsz0ax0.png?v=1769055934",

  productThumb1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098",
  productThumb2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2356_Abundant_Harvest_Apron_remix_01kcqx1s10fbm81vz1t5emcq6y_9faf4a7b-ae01-41f0-b66a-f4a91ed7c7c2.png?v=1766034113",
  productThumb3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251214_2351_ApronwithGardenBackground_remix_01kcg5gbwne8eb5pketsv0ckyj.png?v=1766034057",
  productThumb4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2356_Gardening_Apron_Wearer_remix_01kcqx0s6rf4w87w4te5qkwqx4.png?v=1767689308",
  productThumb5: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Grange_hero_image_1_1.png?v=1769839875",
  productThumb6: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260131_0256_Gardener_with_Harvest_Apron_remix_01kg9gtw3ce2br6v2wc968yx68_1.png?v=1769846433",

  // ── BENEFIT ICONS ──────────────────────────────────────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",

} as const

export const gardenFallbacks = {
  heroImage: "🌿",
  authorAvatar: "👩‍🌾",
  storyPutOn: "🎒",
  storyPicking: "🌱",
  storyFullPouch: "🥬",
  storyDump: "⚡",
  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",
  productThumb5: "5",
  productThumb6: "6",
  benefitIcon1: "⚡",
  benefitIcon2: "🪶",
  benefitIcon3: "🛡️",
  benefitIcon4: "💧",
} as const

type GardenImageKey = keyof typeof gardenImages

export function getGardenImage(key: GardenImageKey): string | null {
  return gardenImages[key] || null
}

export function getGardenFallback(key: GardenImageKey): string {
  return gardenFallbacks[key]
}
