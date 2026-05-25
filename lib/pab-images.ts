// ============================================================
// IMAGE ASSET MAP — Yeoman Handle: Problem-Aware Back Pain
// (Route: /why-your-back-hurts)
// ============================================================
// Two-part listicle: 3 PROBLEMS (factory handle causes) +
// 3 SOLUTIONS (Yeoman fixes). Slot mapping clones from fwb at
// create-time. Swap any image here when problem-aware-specific
// imagery lands (e.g. hunched-posture diagrams, X-ray of
// spinal flexion, before/after grip-vs-bend illustrations).
// ============================================================

export const pabImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // Hero — animated swap-moment placeholder. Ideal asset: hunched-over
  // operator silhouette / side-profile spinal flexion visualization
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",

  // ── PROBLEM SECTION IMAGES (3 reasons WHY your back hurts) ──
  problem1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260525_033500_a93b36cc-8d18-4160-a529-4340e5732a4a.png?v=1779680355",  // Grip too low — forces forward bend
  problem2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260525_034228_d2c28ec3-bc7f-4420-a8a7-2ff08a52c029.jpg?v=1779680597",      // Round grip — exhausts forearm
  problem3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260525_033500_39b107ae-2e77-4536-9cf5-6fa314074244.png?v=1779681791",            // Limited reach — more passes / compound load

  // ── SOLUTION SECTION IMAGES (3 Yeoman fixes paired to problems) ──
  solution1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260523_052417_b534b17b-378d-4fc6-9106-babc363d4ccd.png?v=1779513919", // Plumb-Set lifts grip 9 inches
  solution2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_5.gif?v=1778560234",            // Hold-Fast oval grip cuts force 40%
  solution3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/easytoinstall.png?v=1778558990",     // Forward extension covers more ground

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

export const pabFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",

  problem1Image: "📉",
  problem2Image: "✋",
  problem3Image: "👣",

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

type PabImageKey = keyof typeof pabImages

export function getPabImage(key: PabImageKey): string | null {
  return pabImages[key] || null
}

export function getPabFallback(key: PabImageKey): string {
  return pabFallbacks[key]
}
