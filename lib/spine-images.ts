// ============================================================
// IMAGE ASSET MAP — Spine Advertorial Page
// ============================================================
// Replace placeholder URLs with your actual Shopify CDN URLs.
// Empty string ("") = placeholder div shown on page.
// ============================================================

export const spineImages = {

  // ── HERO IMAGE ─────────────────────────────────────────────
  // Wide lifestyle shot of gardener carrying buckets/baskets in garden.
  // Do NOT show the product here — this is the "problem" image.
  // Aspect: wide (max-h ~480px, full width). Editorial feel.
  heroImage: "",

  // ── SPINE COMPARISON DIAGRAM ───────────────────────────────
  // Side-by-side showing spinal load: bucket (curved spine)
  // vs Grange Carrier (straight spine). The "before/after" visual.
  spineComparison: "",

  // ── PRODUCT HERO ───────────────────────────────────────────
  // Clean product shot in "The Solution" section.
  // Gardener wearing the carrier, front view, in garden setting.
  productHero: "",

  // ── 3 FEATURE IMAGES ──────────────────────────────────────
  // Horizontal images for the feature cards (h ~208px on mobile, taller on desktop).

  // #1 — Cross-back harness close-up, showing strap routing
  featureCrossBack: "",

  // #2 — Full kangaroo pouch loaded with produce
  featureCapacity: "",

  // #3 — Drop-chute releasing harvest into bin/colander
  featureDropChute: "",

  // ── TESTIMONIAL IMAGE ──────────────────────────────────────
  // Photo of a real gardener / customer (optional, used in sidebar on desktop)
  testimonialImage: "",

  // ── SIDEBAR PRODUCT IMAGE ──────────────────────────────────
  // Small product shot for the desktop sticky sidebar card
  sidebarProduct: "",

  // ── AUTHOR AVATAR ──────────────────────────────────────────
  // Small circular photo of "Maria Noman" (garden health writer)
  authorAvatar: "",

} as const

export const spineFallbacks = {
  heroImage: "🌿",
  spineComparison: "🦴",
  productHero: "📦",
  featureCrossBack: "🎒",
  featureCapacity: "🥬",
  featureDropChute: "⚡",
  testimonialImage: "👩‍🌾",
  sidebarProduct: "📦",
  authorAvatar: "MN",
} as const

type SpineImageKey = keyof typeof spineImages

export function getSpineImage(key: SpineImageKey): string | null {
  return spineImages[key] || null
}

export function getSpineFallback(key: SpineImageKey): string {
  return spineFallbacks[key]
}
