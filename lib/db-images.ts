// ============================================================
// IMAGE ASSET MAP — Ditching Buckets (Cold-Traffic Listicle)
// ============================================================
// Pre-filled with existing images from the shared library.
// Replace any URLs you want to change for this page specifically.
// This file is isolated — changes here won't affect other pages.
// ============================================================

export const dbImages = {

  // ── AUTHOR AVATAR ───────────────────────────────────────────
  // Small circular photo of the "writer". Friendly, older gardener.
  // Aspect: 1:1 square (displayed as circle via rounded-full).
  authorAvatar: "",

  // ── HERO ───────────────────────────────────────────────────
  // SWAP CANDIDATE: current is a product shot. For cold traffic,
  // a lifestyle garden scene (older gardener, warm light, buckets
  // visible) would match the ad aesthetic better. Aspect: 4:3.
  heroImage: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/20260131_1316_Image_Generation_remix_01kgam7xv8fkavdabc3nxxhjh7.png?v=1769974800",

  // ── REASON CARD IMAGES (1:1 aspect ratio) ──────────────────

  // 01 — THE BENDING PROBLEM (Drop-Chute)
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098",

  // 02 — THE WEIGHT PROBLEM (Cross-Back Harness)
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1633_Image_Generation_remix_01kgdhykz1e4pb8gg9pyx1231h.png?v=1769981766",

  // 03 — THE TRIPS PROBLEM (Capacity / hands-free)
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Grange_hero_image_1_6.png?v=1769981762",

  // 04 — THE REPLACEMENT CYCLE (Canvas durability)
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1633_Image_Generation_remix_01kgdhzb5nf1g8wz6q6eymvv6m.png?v=1769981770",

  // 05 — THE MESS PROBLEM (Water resistance)
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1641_Image_Generation_remix_01kgdjcqnee5d9w8721g22c54a.png?v=1769982157",

  // 06 — THE RISK QUESTION (Warranty / guarantee)
  reason6Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1643_Image_Generation_remix_01kgdjgd8deat9ykzt5zkedtsn.png?v=1769982391",

  // ── PRODUCT REVEAL (between cards 2 & 3) ───────────────────
  // SWAP CANDIDATE: this is the "What they switched to" moment.
  // A clean, neutral-background product photo would work best here.
  // Aspect: 4:3.
  productReveal: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2358_Garden_Harvest_Portrait_remix_01kcqx5km5f8cst2nx2pyssx0q.png?v=1767094820",

  // ── PRODUCT SHOWCASE SECTION ───────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2358_Garden_Harvest_Portrait_remix_01kcqx5km5f8cst2nx2pyssx0q.png?v=1767094820",

  productThumb1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098",
  productThumb2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2356_Abundant_Harvest_Apron_remix_01kcqx1s10fbm81vz1t5emcq6y_9faf4a7b-ae01-41f0-b66a-f4a91ed7c7c2.png?v=1766034113",
  productThumb3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251214_2351_ApronwithGardenBackground_remix_01kcg5gbwne8eb5pketsv0ckyj.png?v=1766034057",
  productThumb4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2356_Gardening_Apron_Wearer_remix_01kcqx0s6rf4w87w4te5qkwqx4.png?v=1767689308",
  productThumb5: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Grange_hero_image_1_1.png?v=1769839875",
  productThumb6: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260131_0256_Gardener_with_Harvest_Apron_remix_01kg9gtw3ce2br6v2wc968yx68_1.png?v=1769846433",

  // ── BENEFIT ICONS (small, ~20x20px) ────────────────────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",    // Lightning — Drop-Chute
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",    // Feather — Zero-Gravity
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",    // Shield — durability
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",    // Water drop — Dry-Wear

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const dbFallbacks = {

  authorAvatar: "👩‍🌾",
  heroImage: "🌿",

  reason1Image: "⚡",
  reason2Image: "🪶",
  reason3Image: "🎒",
  reason4Image: "🔩",
  reason5Image: "💧",
  reason6Image: "🛡️",

  productReveal: "📦",
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

// ── HELPER ──────────────────────────────────────────────────

type DbImageKey = keyof typeof dbImages

export function getDbImage(key: DbImageKey): string | null {
  return dbImages[key] || null
}

export function getDbFallback(key: DbImageKey): string {
  return dbFallbacks[key]
}
