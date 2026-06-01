// ============================================================
// IMAGE ASSET MAP — Yeoman Handle: Why Trimming Sucks
// (Route: /why-trimming-sucks)
// ============================================================
// Task-aversion LP. Cloned from pab-images at create-time —
// same Yeoman product imagery + problem/solution slot map,
// since the underlying mechanism is identical to /why-your-back-hurts
// (just a different psychological entry point).
//
// Swap any image here when task-aversion-specific imagery lands:
// - heroImage → consider "man staring at trimmer with disdain"
// - problem1Image → "frustrated bent posture" instead of clinical
// ============================================================

export const wtsImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260525_043355_27a0bd97-130c-4349-b236-fc334383f7de.png?v=1779683808",

  // ── PROBLEM SECTION IMAGES (3 reasons trimming sucks) ──
  problem1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260525_040825_da04a560-eb1e-4805-8514-5027004a9a2f.png?v=1779682310",  // The bend
  problem2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260525_034228_d2c28ec3-bc7f-4420-a8a7-2ff08a52c029.jpg?v=1779680597",  // The hand-killer grip
  problem3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260525_033500_39b107ae-2e77-4536-9cf5-6fa314074244.png?v=1779681791",  // The endless passes

  // ── SOLUTION SECTION IMAGES (3 Yeoman fixes) ──
  solution1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_5.gif?v=1778560234", // Plumb-Set lifts grip 9 inches
  solution2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127", // Hold-Fast oval grip cuts force 40%
  solution3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_3.gif?v=1778560037", // Forward extension covers more ground

  // ── PRODUCT SECTION ──────────────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_053705_702ffc4f-a3cc-4cb1-81e8-c862cccc10d5.png?v=1778564569",
  productThumb1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333",
  productThumb2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_3.gif?v=1778560037",
  productThumb3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991",
  productThumb4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/easytoinstall.png?v=1778558990",

  // ── GUARANTEE / FINAL TRUST ───────────────────────────────
  guaranteeImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_054912_54f8385d-d7ae-4ba4-8844-aef29e50a3dc.png?v=1778565243",

  // ── PRODUCT BENEFIT ICONS (reused) ───────────────────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const wtsFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "😤",

  problem1Image: "📉",
  problem2Image: "✋",
  problem3Image: "🔁",

  solution1Image: "🧍",
  solution2Image: "✊",
  solution3Image: "📏",

  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",

  guaranteeImage: "🛡️",

  benefitIcon1: "🧍",
  benefitIcon2: "✊",
  benefitIcon3: "📏",
  benefitIcon4: "🛡️",

} as const

// ── HELPER ──────────────────────────────────────────────────

type WtsImageKey = keyof typeof wtsImages

export function getWtsImage(key: WtsImageKey): string | null {
  return wtsImages[key] || null
}

export function getWtsFallback(key: WtsImageKey): string {
  return wtsFallbacks[key]
}
