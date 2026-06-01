// ============================================================
// IMAGE ASSET MAP — Yeoman Handle: The Yardsman Gift (Evergreen)
// (Route: /the-yardsman-gift)
// ============================================================
// Evergreen gifting listicle, dual-audience (wife-buying + general
// gift-buying, no female-identification required).
// Slot mapping mirrors lib/tts-images.ts (same product, same slots).
// Swap to gift-coded imagery (wrapped product, smiling recipient,
// father-and-son or partner-and-partner shots) when those assets land.
// ============================================================

export const tygImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // Man holding the trimmer with the Yeoman attached — animated swap-moment hero
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",

  // ── LISTICLE REASON IMAGES (6 reasons) ───────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/check_mark.png?v=1778562973",        // Saves his back (Plumb-Set — primary purchase driver, image mirrored from /the-trimmer-switch reason1)
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333", // He'll actually use it (anti-generic-gift)
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/easytoinstall.png?v=1778558990",     // Fits his trimmer (compatibility reassurance)
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_5.gif?v=1778560234",            // 3-minute install
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991",      // Built to last / Hold-Fast
  reason6Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_054912_54f8385d-d7ae-4ba4-8844-aef29e50a3dc.png?v=1778565243", // 60-day trial guarantee

  // ── PRODUCT SECTION ──────────────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_053705_702ffc4f-a3cc-4cb1-81e8-c862cccc10d5.png?v=1778564569",
  productThumb1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333",
  productThumb2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_3.gif?v=1778560037",
  productThumb3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991",
  productThumb4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/easytoinstall.png?v=1778558990",

  // ── PRODUCT BENEFIT ICONS (reused) ───────────────────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const tygFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🎁",

  reason1Image: "🧍",
  reason2Image: "🧍",
  reason3Image: "🔧",
  reason4Image: "⏱️",
  reason5Image: "🔩",
  reason6Image: "🛡️",

  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",

  benefitIcon1: "🧍",
  benefitIcon2: "🔩",
  benefitIcon3: "🔧",
  benefitIcon4: "🛡️",

} as const

// ── HELPER ──────────────────────────────────────────────────

type TygImageKey = keyof typeof tygImages

export function getTygImage(key: TygImageKey): string | null {
  return tygImages[key] || null
}

export function getTygFallback(key: TygImageKey): string {
  return tygFallbacks[key]
}
