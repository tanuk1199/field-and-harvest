// ============================================================
// IMAGE ASSET MAP — Grange Carrier: Father's Day Listicle
// ============================================================
// Upload images to Shopify Files then paste the URL between the quotes.
// Empty string ("") = emoji fallback shown on page.
//
// ⚠️ Keys most likely to be swapped for the dad-coded angle:
//   - heroImage     (a man / dad / grandpa wearing the carrier)
//   - reason2Image  (man's back/shoulders carrying load)
//   - reason4Image  (man working hands-free)
//   - reason5Image  (gear in use, wipes-clean angle)
//
// All other keys default to the existing Grange Carrier assets.
// ============================================================

export const fdImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // ⚠️ Swap candidate — upload a dad/grandpa-in-garden hero shot.
  heroImage: "https://cdn.shopify.com/s/files/1/0736/5279/7743/files/20260131_1316_Image_Generation_remix_01kgam7xv8fkavdabc3nxxhjh7.png?v=1769974800",

  // ── TRUST BADGE ICON ──────────────────────────────────────
  trustBadgeIcon: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098",   // Drop-Chute / convenience
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1633_Image_Generation_remix_01kgdhykz1e4pb8gg9pyx1231h.png?v=1769981766",   // Zero-Gravity harness — ⚠️ swap candidate
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1633_Image_Generation_remix_01kgdhzb5nf1g8wz6q6eymvv6m.png?v=1769981770",   // Field-Weave canvas / durability
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Grange_hero_image_1_6.png?v=1769981762",                                              // Capacity — ⚠️ swap candidate
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1641_Image_Generation_remix_01kgdjcqnee5d9w8721g22c54a.png?v=1769982157",   // Wipes-clean — ⚠️ swap candidate
  reason6Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1643_Image_Generation_remix_01kgdjgd8deat9ykzt5zkedtsn.png?v=1769982391",   // Lifetime warranty / guarantee

  // ── PRODUCT SECTION ──────────────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2358_Garden_Harvest_Portrait_remix_01kcqx5km5f8cst2nx2pyssx0q.png?v=1767094820",
  productThumb1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098",
  productThumb2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2356_Abundant_Harvest_Apron_remix_01kcqx1s10fbm81vz1t5emcq6y_9faf4a7b-ae01-41f0-b66a-f4a91ed7c7c2.png?v=1766034113",
  productThumb3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251214_2351_ApronwithGardenBackground_remix_01kcg5gbwne8eb5pketsv0ckyj.png?v=1766034057",
  productThumb4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2356_Gardening_Apron_Wearer_remix_01kcqx0s6rf4w87w4te5qkwqx4.png?v=1767689308",
  productThumb5: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Grange_hero_image_1_1.png?v=1769839875",
  productThumb6: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260131_0256_Gardener_with_Harvest_Apron_remix_01kg9gtw3ce2br6v2wc968yx68_1.png?v=1769846433",

  // ── PRODUCT BENEFIT ICONS ────────────────────────────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const fdFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌿",
  trustBadgeIcon: "🛡️",

  reason1Image: "⚡",
  reason2Image: "🪶",
  reason3Image: "🔩",
  reason4Image: "🎒",
  reason5Image: "💧",
  reason6Image: "🛡️",

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

type FdImageKey = keyof typeof fdImages

export function getFdImage(key: FdImageKey): string | null {
  return fdImages[key] || null
}

export function getFdFallback(key: FdImageKey): string {
  return fdFallbacks[key]
}
