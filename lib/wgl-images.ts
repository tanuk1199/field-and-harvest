// ============================================================
// IMAGE ASSET MAP — Grove Starter Set: Why Gardeners Love These
// ============================================================
// Upload images then paste the URL between the quotes.
// Empty string ("") = emoji fallback shown on page.
// ============================================================

export const wglImages = {

  // ── HERO SECTION ──────────────────────────────────────────
  heroImage: "",               // Product hero — tray with dome + LED lights + seedlings

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "",            // Light — built-in LEDs glowing, seedlings underneath
  reason2Image: "",            // Capacity — 80 cells filled, full garden started
  reason3Image: "",            // Control — humidity dome with vents, close-up
  reason4Image: "",            // Reusable — silicone tray flexing, clean and ready
  reason5Image: "",            // Timing — seedlings indoors, ready for transplant
  reason6Image: "",            // Offer — risk-free, guarantee, unboxing

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const wglFallbacks = {

  heroImage: "🌱",
  reason1Image: "💡",
  reason2Image: "🌿",
  reason3Image: "🌡️",
  reason4Image: "♻️",
  reason5Image: "📅",
  reason6Image: "🛡️",

} as const

// ── HELPER ──────────────────────────────────────────────────

type WglImageKey = keyof typeof wglImages

export function getWglImage(key: WglImageKey): string | null {
  return wglImages[key] || null
}

export function getWglFallback(key: WglImageKey): string {
  return wglFallbacks[key]
}
