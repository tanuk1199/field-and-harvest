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
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot_2026-01-22_at_12.36.58_AM.png?v=1769060225",

  // ── SPINAL COMPENSATION IMAGE ───────────────────────────────
  // Horizontal image showing how the body compensates when
  // carrying uneven weight (tilted spine, dropped shoulder).
  // Goes between "your neck tilts to keep you balanced" and
  // "you do this 30, 40, 50 times". Wide/landscape aspect.
  spinalCompensation: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260121_2311_Image_Generation_simple_compose_01kfhyb8kcek6t39npkjfkrksx.png?v=1769055256",

  // ── SPINE COMPARISON DIAGRAM ───────────────────────────────
  // Side-by-side showing spinal load: bucket (curved spine)
  // vs Grange Carrier (straight spine). The "before/after" visual.
  spineComparison: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260121_2231_Image_Generation_simple_compose_01kfhw1ketfgtsscrbxnt8s1e0.png?v=1769054798",

  // ── PRODUCT HERO ───────────────────────────────────────────
  // Clean product shot in "The Solution" section.
  // Gardener wearing the carrier, front view, in garden setting.
  productHero: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot_2026-01-31_at_12.31.08_PM.png?v=1769880807",

  // ── 3 FEATURE IMAGES ──────────────────────────────────────
  // Horizontal images for the feature cards (h ~208px on mobile, taller on desktop).

  // #1 — Cross-back harness close-up, showing strap routing
  featureCrossBack: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260121_2336_Image_Generation_remix_01kfhzrp1yexc83w9xykv2809a.png?v=1769056680",

  // #2 — Full kangaroo pouch loaded with produce
  featureCapacity: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot_2026-01-21_at_11.40.36_PM.png?v=1769056845",

  // #3 — Drop-chute releasing harvest into bin/colander
  featureDropChute: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.webp?v=1769057601",

  // ── TESTIMONIAL IMAGE ──────────────────────────────────────
  // Photo of a real gardener / customer (optional, used in sidebar on desktop)
  testimonialImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260121_2324_Image_Generation_remix_01kfhz3qcjezetk4scgbsz0ax0.png?v=1769055934",

  // ── SIDEBAR PRODUCT IMAGE ──────────────────────────────────
  // Small product shot for the desktop sticky sidebar card
  sidebarProduct: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Grange_hero_image_1_1.png?v=1769839875",

  // ── AUTHOR AVATAR ──────────────────────────────────────────
  // Small circular photo of "Maria Noman" (garden health writer)
  authorAvatar: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_19_2026_01_04_57_AM.png?v=1773896717",

} as const

export const spineFallbacks = {
  heroImage: "🌿",
  spinalCompensation: "🦴",
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
