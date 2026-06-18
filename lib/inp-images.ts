// ============================================================
// IMAGE ASSET MAP — Yeoman Handle: It's Not Aging (Cold-Traffic Warming Page)
// (Route: /its-not-aging)
// ============================================================
// Stage 2 awareness cohort: buyers who have "learned to live with"
// back pain from weed eating. Page architecture: problem-framing
// headline + 500-700 word UMP/UMS lead-in ABOVE the existing
// trimmer-switch listicle body.
//
// Slot mapping mirrors lib/tts-images.ts exactly (shared listicle
// body across the angled-headline page fleet — per the bridge-page
// architecture decision 2026-06-18).
// ============================================================

export const inpImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // Atmospheric image of a man holding the trimmer with the Yeoman attached
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",

  // ── EDITORIAL HERO IMAGE (SINGLE-IMAGE OVERRIDE) ──────────
  // When set, the page renders a single full-width 16:10 image
  // INSTEAD of the Polaroid grid below. Leave empty to use the
  // 6-shot Polaroid grid (TWS recognition-imagery pattern).
  editorialHero: "",

  // ── POLAROID GRID (DEFAULT HERO VISUAL) ────────────────────
  // 6 yardsman recognition shots — same library used by the TWS
  // advertorial's hero grid. Replace any individual URL to swap.
  yardsman1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260516_063011_2872d290-64fc-44a3-9637-1fd2e2796126.png?v=1778913146",
  yardsman2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260516_060133_4a6e7ef6-0020-48a5-83b4-261acd637816.png?v=1778912387",
  yardsman3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260516_060339_178c24b4-18bc-4e23-88cc-f3d1424ae77a.png?v=1778912387",
  yardsman4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260516_060531_f824b12d-f79f-43ed-ae17-23cc0bebb492.png?v=1778912386",
  yardsman5: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260516_062652_e50e7e76-973b-4064-8a34-bc3b0500d150.png?v=1778913146",
  yardsman6: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260516_062730_c936964c-e537-4e28-af1c-7b687905c004.png?v=1778913299",

  // ── LISTICLE REASON IMAGES (shared with /the-trimmer-switch) ────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/check_mark.png?v=1778562973",
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991",
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_5.gif?v=1778560234",
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_3.gif?v=1778560037",
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_054912_54f8385d-d7ae-4ba4-8844-aef29e50a3dc.png?v=1778565243",

  // ── PRODUCT SECTION (shared with /the-trimmer-switch) ───────
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

export const inpFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",
  editorialHero: "🌿",
  yardsman1: "🧑‍🌾",
  yardsman2: "🧑‍🌾",
  yardsman3: "🧑‍🌾",
  yardsman4: "🧑‍🌾",
  yardsman5: "🧑‍🌾",
  yardsman6: "🧑‍🌾",

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

type InpImageKey = keyof typeof inpImages

export function getInpImage(key: InpImageKey): string | null {
  return inpImages[key] || null
}

export function getInpFallback(key: InpImageKey): string {
  return inpFallbacks[key]
}
