// ============================================================
// IMAGE ASSET MAP — Yeoman Handle: Finish Without Breaks (Speed/Efficiency)
// (Route: /finish-without-breaks)
// ============================================================
// Slot mapping mirrors lib/tts-images.ts exactly (same product,
// same Shopify CDN imagery — only the listicle copy/angle changes).
// Dedicated per-page file for future divergence: swap any reason
// image here when a speed-angle-specific asset is generated.
// ============================================================

export const fwbImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // Animated swap-moment hero — same as trimmer-switch
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",

  // ── LISTICLE REASON IMAGES (6 reasons) ────────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991",      // Grip — Hold-Fast (hands don't quit)
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/check_mark.png?v=1778562973",       // Posture — Plumb-Set (back doesn't quit)
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_3.gif?v=1778560037",           // Reach extension — cover more per swing
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333", // One continuous pass — no breaks
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/easytoinstall.png?v=1778558990",    // Three-minute install — start today
  reason6Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_054912_54f8385d-d7ae-4ba4-8844-aef29e50a3dc.png?v=1778565243", // Guarantee / lifetime warranty

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

export const fwbFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",

  reason1Image: "✋",
  reason2Image: "🧍",
  reason3Image: "📏",
  reason4Image: "⏱️",
  reason5Image: "🔧",
  reason6Image: "🛡️",

  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",

  benefitIcon1: "✋",
  benefitIcon2: "🧍",
  benefitIcon3: "⏱️",
  benefitIcon4: "🛡️",

} as const

// ── HELPER ──────────────────────────────────────────────────

type FwbImageKey = keyof typeof fwbImages

export function getFwbImage(key: FwbImageKey): string | null {
  return fwbImages[key] || null
}

export function getFwbFallback(key: FwbImageKey): string {
  return fwbFallbacks[key]
}
