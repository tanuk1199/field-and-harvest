// ============================================================
// IMAGE ASSET MAP — Yeoman Handle: The Yeoman Method (Long-form sales page)
// (Route: /the-yeoman-method)
// ============================================================
// Long-form science-led sales page modeled after DR salespage
// architecture but in F&H heritage editorial voice. Hosts the
// biomechanics diagram, mechanism close-ups, and the deeper
// product showcase that the listicle pages don't carry.
//
// Slot mapping shares the Yeoman product imagery with tts/yfd
// (per feedback_listicle-image-slot-reuse) and adds dedicated
// keys for science/diagram/install assets that only exist here.
// ============================================================

export const ymImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // Documentary-style: man using trimmer with Yeoman attached, upright posture
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",

  // ── SCIENCE / BIOMECHANICS SECTION ────────────────────────
  // Three-pose spine-load illustration: standing / 30° / 60° forward flex.
  // Slot empty for now — paste the editorial illustration here when ready.
  // Until then renders the emoji fallback so the section still flows.
  spineDiagram: "",

  // ── MECHANISM CLOSE-UPS ───────────────────────────────────
  // Plumb-Set™ Geometry — annotated technical drawing of the handle angles
  plumbSetDiagram: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991",

  // Hold-Fast™ Grip — close-up of the contoured grip
  holdFastImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333",

  // ── INSTALL STEPS (3-minute install) ──────────────────────
  installStep1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/easytoinstall.png?v=1778558990",
  installStep2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_5.gif?v=1778560234",
  installStep3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_3.gif?v=1778560037",

  // ── PRODUCT SECTION (offer reveal) ────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_053705_702ffc4f-a3cc-4cb1-81e8-c862cccc10d5.png?v=1778564569",
  productSingle: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_053705_702ffc4f-a3cc-4cb1-81e8-c862cccc10d5.png?v=1778564569",
  productPair: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991",
  productQuad: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_054912_54f8385d-d7ae-4ba4-8844-aef29e50a3dc.png?v=1778565243",

  // ── WHAT'S INCLUDED / FLAT LAY ────────────────────────────
  flatLay: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/easytoinstall.png?v=1778558990",

  // ── TESTIMONIAL PORTRAITS (optional — fallback to initials) ─
  // Slots empty until real customer photos with permission are sourced.
  testimonialPortrait1: "",
  testimonialPortrait2: "",
  testimonialPortrait3: "",

  // ── GUARANTEE BADGES ──────────────────────────────────────
  // Empty slots — fallback to text/SVG badges in the page
  badgeWarranty: "",
  badgeMoneyBack: "",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const ymFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",

  spineDiagram: "📐",

  plumbSetDiagram: "📐",
  holdFastImage: "🖐️",

  installStep1: "🔧",
  installStep2: "🔩",
  installStep3: "✅",

  productMain: "📦",
  productSingle: "1",
  productPair: "2",
  productQuad: "4",

  flatLay: "📦",

  testimonialPortrait1: "R",
  testimonialPortrait2: "J",
  testimonialPortrait3: "M",

  badgeWarranty: "🛡️",
  badgeMoneyBack: "✓",

} as const

// ── HELPER ──────────────────────────────────────────────────

type YmImageKey = keyof typeof ymImages

export function getYmImage(key: YmImageKey): string | null {
  return ymImages[key] || null
}

export function getYmFallback(key: YmImageKey): string {
  return ymFallbacks[key]
}
