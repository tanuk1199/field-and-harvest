// ============================================================
// IMAGE ASSET MAP — Grange Carrier: Made In His Memory
// ============================================================
// Upload images then paste the URL between the quotes.
// Empty string ("") = emoji fallback shown on page.
// ============================================================

export const mihmImages = {

  // ── HERO SECTION ──────────────────────────────────────────
  // ⚠️ This is the ONE image being swapped for this angle.
  // Upload a warm/evocative image (older hands or Eleanor in garden) and paste the URL here.
  heroImage: "",

  // ── STORY INTRO ───────────────────────────────────────────
  // Photo of "Eleanor" — older woman in garden, warm smile, morning light.
  eleanorPortrait: "",

  // ── LISTICLE REASON IMAGES (existing Grange Carrier assets) ──
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098",
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1633_Image_Generation_remix_01kgdhykz1e4pb8gg9pyx1231h.png?v=1769981766",
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1633_Image_Generation_remix_01kgdhzb5nf1g8wz6q6eymvv6m.png?v=1769981770",
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Grange_hero_image_1_6.png?v=1769981762",
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1641_Image_Generation_remix_01kgdjcqnee5d9w8721g22c54a.png?v=1769982157",
  reason6Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1643_Image_Generation_remix_01kgdjgd8deat9ykzt5zkedtsn.png?v=1769982391",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const mihmFallbacks = {

  heroImage: "🌻",
  eleanorPortrait: "👵",
  reason1Image: "⚡",
  reason2Image: "🪶",
  reason3Image: "🔩",
  reason4Image: "🎒",
  reason5Image: "💧",
  reason6Image: "🛡️",

} as const

// ── HELPER ──────────────────────────────────────────────────

type MihmImageKey = keyof typeof mihmImages

export function getMihmImage(key: MihmImageKey): string | null {
  return mihmImages[key] || null
}

export function getMihmFallback(key: MihmImageKey): string {
  return mihmFallbacks[key]
}
