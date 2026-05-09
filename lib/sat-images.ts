// ============================================================
// IMAGE ASSET MAP — Grange Carrier: /the-saturday-tool
// ============================================================
// Year-round yard + garden + harvest utility lander.
// Upload images to Shopify Files (or any CDN) then paste the URL
// between the quotes. Empty string ("") = emoji fallback.
//
// ⚠️ Most likely keys to swap for the Saturday-tool angle (year-
// round / yard cleanup framing — not just harvest):
//   - heroImage      (apron hanging by the back door, peg shot)
//   - reason1Image   (year-round / multi-season collage or shot)
//   - reason3Image   (pruners + leash + coffee — hands-free combo)
//   - reason5Image   (yard-cleanup mid-action: sticks/leaves/etc.)
//
// All other keys default to the existing Grange Carrier assets.
// ============================================================

export const satImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // ⚠️ Swap candidate — apron on the back-door peg, boots underneath, morning light.
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260509_041128_83a39649-befb-46c3-9dd2-da072c3073d8.png?v=1778302264",

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260509_041140_7982c5b4-a70c-4a0b-a41f-4f424d79a655.png?v=1778300941",       // Year-round — ⚠️ swap candidate (4-season collage or fall/winter shot)
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098", // One trip — drop-chute / convenience
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260509_043122_38b8a2cf-2458-4f05-888e-3a9d88fa5a28.png?v=1778301179",                                                  // Hands free — ⚠️ swap candidate (leash + coffee + pruners combo)
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1633_Image_Generation_remix_01kgdhykz1e4pb8gg9pyx1231h.png?v=1769981766",        // All-day comfort — Zero-Gravity harness
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1641_Image_Generation_remix_01kgdjcqnee5d9w8721g22c54a.png?v=1769982157",        // Stays clean — ⚠️ swap candidate (yard cleanup, wet leaves, etc.)
  reason6Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1643_Image_Generation_remix_01kgdjgd8deat9ykzt5zkedtsn.png?v=1769982391",        // Risk-free — lifetime warranty

  // ── PRODUCT GALLERY (6 images — first one shown by default;
  //                     click any thumbnail to swap into main) ──
  productImage1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2358_Garden_Harvest_Portrait_remix_01kcqx5km5f8cst2nx2pyssx0q.png?v=1767094820",
  productImage2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098",
  productImage3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2356_Abundant_Harvest_Apron_remix_01kcqx1s10fbm81vz1t5emcq6y_9faf4a7b-ae01-41f0-b66a-f4a91ed7c7c2.png?v=1766034113",
  productImage4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251214_2351_ApronwithGardenBackground_remix_01kcg5gbwne8eb5pketsv0ckyj.png?v=1766034057",
  productImage5: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Grange_hero_image_1_1.png?v=1769839875",
  productImage6: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260131_0256_Gardener_with_Harvest_Apron_remix_01kg9gtw3ce2br6v2wc968yx68_1.png?v=1769846433",

  // ── PRODUCT BENEFIT ICONS ────────────────────────────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",   // Lightning — Drop-Chute
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",   // Feather — Zero-Gravity
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",   // Shield — durability
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",   // Water drop — Dry-Wear

  // ── FREE EBOOK COVERS (auto-added at checkout) ───────────
  ebookEndlessHarvest: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot2025-12-16at4.44.33PM.png?v=1765921684",
  ebookHarvestKeepers: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251216_1649_HarvestGuideDisplay_simple_compose_01kcmj6ptjeb3afvd79hez40np.png?v=1765922044",

} as const

// ── PRODUCT GALLERY ORDER ───────────────────────────────────
// The order images appear in the gallery + thumbnails. Re-order
// here to change which image is shown by default (first one wins).

export const SAT_PRODUCT_GALLERY = [
  "productImage1",
  "productImage2",
  "productImage3",
  "productImage4",
  "productImage5",
  "productImage6",
] as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const satFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌿",

  reason1Image: "🍂",
  reason2Image: "⚡",
  reason3Image: "🤲",
  reason4Image: "🪶",
  reason5Image: "💧",
  reason6Image: "🛡️",

  productImage1: "1",
  productImage2: "2",
  productImage3: "3",
  productImage4: "4",
  productImage5: "5",
  productImage6: "6",

  benefitIcon1: "⚡",
  benefitIcon2: "🪶",
  benefitIcon3: "🛡️",
  benefitIcon4: "💧",

  ebookEndlessHarvest: "📘",
  ebookHarvestKeepers: "📗",

} as const

// ── HELPERS ─────────────────────────────────────────────────

export type SatImageKey = keyof typeof satImages

export function getSatImage(key: SatImageKey): string | null {
  return satImages[key] || null
}

export function getSatFallback(key: SatImageKey): string {
  return satFallbacks[key]
}
