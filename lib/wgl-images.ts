// ============================================================
// IMAGE ASSET MAP — Grove Starter Set: Why Gardeners Love These
// ============================================================
// Upload images then paste the URL between the quotes.
// Empty string ("") = emoji fallback shown on page.
// ============================================================

export const wglImages = {

  // ── HERO SECTION ──────────────────────────────────────────
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260226_2201_Image_Generation_remix_01kjegmwa5evpr9v3k35w8ry28.png?v=1772161440",               // Product hero — tray with dome + LED lights + seedlings

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/pomelli-image-4_4d6784ed-4af7-4352-add8-dcea806aa0bb.png?v=1771963468",            // Light — built-in LEDs glowing, seedlings underneath
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260223_2020_ImageGeneration_remix_01kj6kp4f4f2qt0gpnzdfzdw2t_abe14ffa-3ba1-4646-8191-52c309c6eb21.png?v=1771963345",            // Capacity — 80 cells filled, full garden started
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0226.gif?v=1772162246",            // Control — humidity dome with vents, close-up
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/pomelli-image.png?v=1771896430",            // Reusable — silicone tray flexing, clean and ready
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0226_1.gif?v=1772164830",            // Timing — seedlings indoors, ready for transplant
  reason6Image: "",            // Offer — risk-free, guarantee, unboxing (no image by default)

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
