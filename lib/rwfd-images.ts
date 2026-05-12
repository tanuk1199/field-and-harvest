// ============================================================
// IMAGE ASSET MAP — Rootwork Step Weeder: Father's Day Listicle
// (Route: /dads-stand-tall)
// ============================================================
// Pulled from Shopify on 2026-05-12 — product handle the-rootwork-step-weeder.
// All 6 product images mapped. Bottom gallery uses the first 4
// product images in their Shopify order — clicking a thumb swaps
// the main image (per fh-listicle-product-gallery memory).
// Empty string ("") = emoji fallback shown on page.
// ============================================================

export const rwfdImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // Lead Shopify product shot — clean product render
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Untitleddesign_86.png?v=1774199057",

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar22_2026_11_56_08AM.png?v=1774199057",  // Back-saving — standing posture
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar22_2026_11_54_45AM.png?v=1774199057",  // Durable — reinforced steel detail
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar22_2026_11_55_11AM.png?v=1774199057",  // Time-saving — action shot
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar22_2026_12_14_11PM.png?v=1774199057",  // No kneeling — wide stance/use
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Untitleddesign_85.png?v=1774199057",                  // Guarantee — clean product flat lay

  // ── PRODUCT SECTION (4-thumb gallery matching Shopify gallery order) ──
  // productMain is a dedicated hero shot for the listicle's product showcase —
  // intentionally different from productThumb1 so the default state shows the hero.
  // Clicking any thumb swaps in that thumb's Shopify gallery image.
  productMain:   "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/rootwork_hero.png?v=1778620505",
  productThumb1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Untitleddesign_86.png?v=1774199057",
  productThumb2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Untitleddesign_85.png?v=1774199057",
  productThumb3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar22_2026_11_56_08AM.png?v=1774199057",
  productThumb4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar22_2026_11_54_45AM.png?v=1774199057",

  // ── PRODUCT BENEFIT ICONS (reused F&H icon set) ──────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const rwfdFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",

  reason1Image: "🧍",
  reason2Image: "🔩",
  reason3Image: "⏱️",
  reason4Image: "🦵",
  reason5Image: "🛡️",

  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",

  benefitIcon1: "🦷",
  benefitIcon2: "🧍",
  benefitIcon3: "🛠️",
  benefitIcon4: "🛡️",

} as const

// ── HELPER ──────────────────────────────────────────────────

type RwfdImageKey = keyof typeof rwfdImages

export function getRwfdImage(key: RwfdImageKey): string | null {
  return rwfdImages[key] || null
}

export function getRwfdFallback(key: RwfdImageKey): string {
  return rwfdFallbacks[key]
}
