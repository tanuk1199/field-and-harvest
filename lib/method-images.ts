// ============================================================
// IMAGE ASSET MAP — Method Reveal Page (Cold-Traffic)
// ============================================================
// "The Wrong Method vs. The Right Method" — direct payoff
// for the "my neighbor is 72" curiosity ad.
// ============================================================

export const methodImages = {

  // ── HERO ───────────────────────────────────────────────────
  // Lifestyle garden shot — older gardener, warm light.
  // Should match the ad aesthetic. Aspect: 4:3.
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot_2026-01-22_at_12.36.58_AM.webp?v=1773897633",

  // ── "WRONG METHOD" IMAGES ─────────────────────────────────
  // Images showing the old/bad way of harvesting

  // Bucket carry — one-handed, bent over, multiple trips
  wrongBucket: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260121_2311_Image_Generation_simple_compose_01kfhyb8kcek6t39npkjfkrksx.png?v=1769055256",

  // ── "RIGHT METHOD" IMAGES ─────────────────────────────────
  // Images showing the Grange Carrier in use

  // Gardener wearing carrier, hands-free, picking
  rightWearing: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot_2026-01-31_at_12.31.08_PM.png?v=1769880807",

  // Drop-chute releasing harvest
  rightDumping: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.webp?v=1769057601",

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

export const methodFallbacks = {
  heroImage: "🌿",
  wrongBucket: "🪣",
  rightWearing: "🎒",
  rightDumping: "⚡",
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

type MethodImageKey = keyof typeof methodImages

export function getMethodImage(key: MethodImageKey): string | null {
  return methodImages[key] || null
}

export function getMethodFallback(key: MethodImageKey): string {
  return methodFallbacks[key]
}
