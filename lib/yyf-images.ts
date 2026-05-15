// ============================================================
// IMAGE ASSET MAP — Yeoman Yoke: Father's Day Listicle
// (Route: /dads-trimmer-harness)
// ============================================================
// Product gid: 7914277142571 (The Yeoman Yoke, ACTIVE).
// Empty string ("") = emoji fallback shown on page.
//
// Most product/reason images ship EMPTY — Yoke photography
// has not been shot yet. Swap CDN URLs in as images are
// uploaded to Shopify Files (https://admin.shopify.com/store/
// field-harvest-co/content/files). Logo + benefit icons
// reused from the Handle's yfd-images.ts.
// ============================================================

export const yyfImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO SECTION ──────────────────────────────────────────
  // Hero: dad wearing the Yoke with trimmer hanging from Quick-Hitch
  heroImage: "",

  // ── LISTICLE REASON IMAGES ────────────────────────────────
  reason1Image: "",  // Back-saving / Crossbeam — load split across both shoulders
  reason2Image: "",  // Durability / Quick-Hitch + Oxford-weave nylon
  reason3Image: "",  // Three-second clip-in install
  reason4Image: "",  // Adjustable — strap range on multiple body types
  reason5Image: "",  // Guarantee / lifetime — flat lay

  // ── PRODUCT SECTION ──────────────────────────────────────
  productMain: "",
  productThumb1: "",
  productThumb2: "",
  productThumb3: "",
  productThumb4: "",

  // ── PRODUCT BENEFIT ICONS (reused from yfd-images) ───────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const yyfFallbacks = {

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

type YyfImageKey = keyof typeof yyfImages

export function getYyfImage(key: YyfImageKey): string | null {
  return yyfImages[key] || null
}

export function getYyfFallback(key: YyfImageKey): string {
  return yyfFallbacks[key]
}
