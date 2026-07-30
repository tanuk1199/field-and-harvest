// ============================================================
// IMAGE ASSET MAP — Yeoman Handle: The Trimmer Switch (Evergreen)
// (Route: /the-trimmer-switch)
// ============================================================
// Slot mapping mirrors lib/yfd-images.ts exactly (per
// feedback_listicle-image-slot-reuse.md — same product, same
// slots, same images; only the listicle copy changes).
// ============================================================

export const ttsImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // Man holding the trimmer with the Yeoman attached — animated swap-moment hero
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/check_mark.png?v=1778562973",      // Back-saving
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991", // Durability / Hold-Fast bracket
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_5.gif?v=1778560234", // 3-minute install
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_3.gif?v=1778560037", // Adjustable
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_054912_54f8385d-d7ae-4ba4-8844-aef29e50a3dc.png?v=1778565243", // Guarantee / lifetime

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

export const ttsFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",

  reason1Image: "🧍",
  reason2Image: "🔩",
  reason3Image: "🔧",
  reason4Image: "📐",
  reason5Image: "🛡️",

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

type TtsImageKey = keyof typeof ttsImages

export function getTtsImage(key: TtsImageKey): string | null {
  return ttsImages[key] || null
}

export function getTtsFallback(key: TtsImageKey): string {
  return ttsFallbacks[key]
}
