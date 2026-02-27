// ============================================================
// IMAGE ASSET MAP — Grove Starter Set: Skip the Nursery Listicle
// ============================================================
// Upload images then paste the URL between the quotes.
// Empty string ("") = emoji fallback shown on page.
// ============================================================

export const groveImages = {

  // ── HERO SECTION ──────────────────────────────────────────
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260226_2201_Image_Generation_remix_01kjegmwa5evpr9v3k35w8ry28.png?v=1772161440",               // Product hero — tray with dome + LED lights + seedlings

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260226_2208_Image_Generation_remix_01kjeh2hwtfchvdx4xrv7mrkfm.png?v=1772161837",            // Savings — nursery price tags vs seed packets
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0226.gif?v=1772162246",            // Variety — heirloom seeds / rare herbs
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/pomelli-image-4_4d6784ed-4af7-4352-add8-dcea806aa0bb.png?v=1771963468",            // LED lights — dome glowing, seedlings underneath
  reason4Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0226_1.gif?v=1772164830",            // Timing — seedlings indoors while snow outside
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/pomelli-image.png?v=1771896430",            // Reusable — tray returning season after season
  reason6Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260223_2020_ImageGeneration_remix_01kj6kp4f4f2qt0gpnzdfzdw2t_abe14ffa-3ba1-4646-8191-52c309c6eb21.png?v=1771963345",            // Complete system — everything in the box

  // ── PRODUCT SECTION ───────────────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260223_1938_GardeningApronwithBadges_remix_01kj6h8vmjft09j5y0b185ymzz.png?v=1771893583",             // Product main shot — full kit
  productThumb1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260223_2020_ImageGeneration_remix_01kj6kp4f4f2qt0gpnzdfzdw2t.png?v=1771896430",
  productThumb2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260223_2025_ImageGeneration_remix_01kj6kytsgewet2s28pf4msjyy.png?v=1771896430",
  productThumb3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/pomelli-image-4_4d6784ed-4af7-4352-add8-dcea806aa0bb.png?v=1771963468",
  productThumb4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/pomelli-image.png?v=1771896430",
  productThumb5: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260226_2201_Image_Generation_remix_01kjegmwa5evpr9v3k35w8ry28.png?v=1772161440",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const groveFallbacks = {

  heroImage: "🌱",
  reason1Image: "💰",
  reason2Image: "🌿",
  reason3Image: "💡",
  reason4Image: "📅",
  reason5Image: "♻️",
  reason6Image: "📦",
  productMain: "🌱",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",
  productThumb5: "5",

} as const

// ── HELPER ──────────────────────────────────────────────────

type GroveImageKey = keyof typeof groveImages

export function getGroveImage(key: GroveImageKey): string | null {
  return groveImages[key] || null
}

export function getGroveFallback(key: GroveImageKey): string {
  return groveFallbacks[key]
}
