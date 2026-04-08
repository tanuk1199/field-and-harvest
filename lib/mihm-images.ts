// ============================================================
// IMAGE ASSET MAP — Grange Carrier: Made In His Memory
// ============================================================
// Upload images then paste the URL between the quotes.
// Empty string ("") = emoji fallback shown on page.
// ============================================================

export const mihmImages = {

  // ── HERO SECTION ──────────────────────────────────────────
  heroImage: "",            // Grange Carrier in use — warm/evocative, older hands preferred

  // ── STORY INTRO ───────────────────────────────────────────
  eleanorPortrait: "",      // Photo of "Eleanor" — older woman in garden, warm smile, morning light

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "",         // Drop-Chute — harvest sliding out of the bottom
  reason2Image: "",         // Harness — cross-back straps, weight distribution
  reason3Image: "",         // Canvas — close-up of 600D weave / reinforced stitching
  reason4Image: "",         // Capacity — full pouch + tool sheaths, hands free
  reason5Image: "",         // Water-resistance — clean apron after wet harvest
  reason6Image: "",         // Guarantee — branded badge / lifetime warranty visual

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const mihmFallbacks = {

  heroImage: "🌻",
  eleanorPortrait: "👵",
  reason1Image: "🧺",
  reason2Image: "🎒",
  reason3Image: "🛡️",
  reason4Image: "🌿",
  reason5Image: "💧",
  reason6Image: "🏅",

} as const

// ── HELPER ──────────────────────────────────────────────────

type MihmImageKey = keyof typeof mihmImages

export function getMihmImage(key: MihmImageKey): string | null {
  return mihmImages[key] || null
}

export function getMihmFallback(key: MihmImageKey): string {
  return mihmFallbacks[key]
}
