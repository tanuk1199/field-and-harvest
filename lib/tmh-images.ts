// ============================================================
// IMAGE ASSET MAP — Yeoman Handle: Built For Tall Men (Identity)
// (Route: /built-for-tall-men)
// ============================================================
// Slot mapping mirrors lib/fwb-images.ts at create-time (same
// product, same Shopify CDN imagery). Swap any reason image
// here when tall-men-specific assets are generated (e.g. a
// 6'4 model holding the trimmer for the hero, side-by-side
// posture comparison between a 5'9 and 6'2 operator, etc.).
// ============================================================

export const tmhImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // Animated swap-moment hero — placeholder until a tall-coded model lands
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",

  // ── LISTICLE REASON IMAGES (6 reasons) ────────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333",  // Identity — built for someone else (man on trimmer)
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260523_052417_b534b17b-378d-4fc6-9106-babc363d4ccd.png?v=1779513919", // Stop bending — Plumb-Set posture
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_3.gif?v=1778560037",            // Reach extension — built for your arms
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_5.gif?v=1778560234",            // Adjustability — dials in to your height
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991",     // Build / Hold-Fast bracket
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

export const tmhFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",

  reason1Image: "📏",
  reason2Image: "🧍",
  reason3Image: "💪",
  reason4Image: "⚙️",
  reason5Image: "🔩",
  reason6Image: "🛡️",

  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",

  benefitIcon1: "📏",
  benefitIcon2: "🧍",
  benefitIcon3: "⚙️",
  benefitIcon4: "🛡️",

} as const

// ── HELPER ──────────────────────────────────────────────────

type TmhImageKey = keyof typeof tmhImages

export function getTmhImage(key: TmhImageKey): string | null {
  return tmhImages[key] || null
}

export function getTmhFallback(key: TmhImageKey): string {
  return tmhFallbacks[key]
}
