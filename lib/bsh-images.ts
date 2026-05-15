// ============================================================
// IMAGE ASSET MAP — Yeoman Yoke: Evergreen Back-Pain Listicle
// (Route: /the-back-saver-harness)
// ============================================================
// Cloned from yyf-images.ts (FD listicle) on 2026-05-15.
// Same URLs at clone time; intentionally separate file so the
// evergreen page can diverge from the FD page (different hero,
// different lifestyle shots) without affecting either route.
// Per F&H per-page image isolation convention.
// ============================================================

export const bshImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Using_Harness.gif?v=1778815786",

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/before_and_after.png?v=1778817805",
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/bladeonblackcoverpad.png?v=1778737547",
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Attaching_clip.gif?v=1778815787",
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/attaching_harness.gif?v=1778815786",
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260515_040736_c8eaa8f8-751f-4243-a117-143df4747283.png?v=1778818841",

  // ── PRODUCT SECTION ──────────────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/YeomanYokeHero.png?v=1778815824",
  productThumb1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/FlatLay3.png?v=1778733592",
  productThumb2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/bladeonblackcoverpad.png?v=1778737547",
  productThumb3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/brokentwigonpadding.png?v=1778737545",
  productThumb4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/FlatLay1.png?v=1778733579",

  // ── PRODUCT BENEFIT ICONS (reused) ───────────────────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const bshFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",

  reason1Image: "🧍",
  reason2Image: "🔗",
  reason3Image: "🪝",
  reason4Image: "📏",
  reason5Image: "🛡️",

  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",

  benefitIcon1: "🧍",
  benefitIcon2: "🪝",
  benefitIcon3: "⚡",
  benefitIcon4: "🛡️",

} as const

// ── HELPER ──────────────────────────────────────────────────

type BshImageKey = keyof typeof bshImages

export function getBshImage(key: BshImageKey): string | null {
  return bshImages[key] || null
}

export function getBshFallback(key: BshImageKey): string {
  return bshFallbacks[key]
}
