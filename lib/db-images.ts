// ============================================================
// IMAGE ASSET MAP — Ditching Buckets (Cold-Traffic Listicle)
// ============================================================
// This page gets its own image file so you can use different
// photos that match the Facebook ad aesthetic (lifestyle,
// garden scenes, older gardeners) without affecting other pages.
//
// Replace empty strings with Shopify CDN URLs or /public paths.
// Empty string ("") = emoji fallback shown on page.
// ============================================================

export const dbImages = {

  // ── HERO ───────────────────────────────────────────────────
  // Lifestyle garden image matching ad aesthetic (older gardener
  // harvesting, warm light, bucket/basket visible in scene).
  // Aspect: 4:3. Should feel editorial, not product-forward.
  heroImage: "",

  // ── REASON CARD IMAGES (1:1 aspect ratio) ──────────────────

  // 01 — THE BENDING PROBLEM
  // Show: someone bending over bucket, or the drop-chute feature
  reason1Image: "",

  // 02 — THE WEIGHT PROBLEM
  // Show: cross-back harness on a gardener, weight distribution
  reason2Image: "",

  // 03 — THE TRIPS PROBLEM
  // Show: hands-free harvesting, full pouch, both hands picking
  reason3Image: "",

  // 04 — THE REPLACEMENT CYCLE
  // Show: canvas close-up, durability, worn-out old tools contrast
  reason4Image: "",

  // 05 — THE MESS PROBLEM
  // Show: clean clothes after gardening, water-resistant lining
  reason5Image: "",

  // 06 — THE RISK QUESTION
  // Show: warranty/guarantee badge, or happy gardener with product
  reason6Image: "",

  // ── PRODUCT REVEAL (between cards 2 & 3) ───────────────────
  // Main product shot for the "What they switched to" section.
  // Aspect: 4:3. Clean product photo on neutral background.
  productReveal: "",

  // ── PRODUCT SHOWCASE SECTION ───────────────────────────────
  // Main product image (1:1) for the buy section lower on page
  productMain: "",

  // 6 thumbnail images for the product gallery grid
  productThumb1: "",
  productThumb2: "",
  productThumb3: "",
  productThumb4: "",
  productThumb5: "",
  productThumb6: "",

  // ── BENEFIT ICONS (small, ~20x20px) ────────────────────────
  benefitIcon1: "",    // Lightning — Drop-Chute
  benefitIcon2: "",    // Feather — Zero-Gravity
  benefitIcon3: "",    // Shield — durability
  benefitIcon4: "",    // Water drop — Dry-Wear

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const dbFallbacks = {

  heroImage: "🌿",

  reason1Image: "⚡",
  reason2Image: "🪶",
  reason3Image: "🎒",
  reason4Image: "🔩",
  reason5Image: "💧",
  reason6Image: "🛡️",

  productReveal: "📦",
  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",
  productThumb5: "5",
  productThumb6: "6",

  benefitIcon1: "⚡",
  benefitIcon2: "🪶",
  benefitIcon3: "🛡️",
  benefitIcon4: "💧",

} as const

// ── HELPER ──────────────────────────────────────────────────

type DbImageKey = keyof typeof dbImages

export function getDbImage(key: DbImageKey): string | null {
  return dbImages[key] || null
}

export function getDbFallback(key: DbImageKey): string {
  return dbFallbacks[key]
}
