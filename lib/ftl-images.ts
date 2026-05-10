// ============================================================
// IMAGE ASSET MAP — Grange Carrier: /forgot-the-loppers
// ============================================================
// Comic-continuation lander, message-matched to the
// "ONE PASS THROUGH THE YARD INSTEAD OF FIVE" comic ad.
// Visual continuity is the whole point — all hero/trip/reveal
// panels MUST share the same illustrated style as the ad.
// Empty string ("") = emoji fallback (so we can ship before
// every illustration is in place).
// ============================================================

export const ftlImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // ── HERO COMIC PANELS ───────────────────────────────────
  // heroPanel1 should be the ad creative itself (or a tight
  // crop of it) so the lander LITERALLY continues the ad.
  // heroPanel2-6 are extension panels that finish the joke
  // and lead into the offer/CTA.
  heroPanel1: "",  // ⚠️ paste the ad image URL here for instant continuity
  heroPanel2: "",  // Extension: "TRIP 5: forgot the coffee."
  heroPanel3: "",  // Extension: "TRIP 6: forgot the eggs."
  heroPanel4: "",  // Extension: hand reaching into apron pocket finding the loppers
  heroPanel5: "",  // Extension: full apron — everything in pockets, hands free
  heroPanel6: "",  // Extension: the apron on the back-door peg, end of day

  // ── 12 TRIP ICONS ───────────────────────────────────────
  // Tiny illustrated objects — each one is what the trip was FOR.
  // Drawing style should match the comic.
  tripIcon1:  "",  // loppers
  tripIcon2:  "",  // loppers (again — same icon is fine)
  tripIcon3:  "",  // garden gloves
  tripIcon4:  "",  // coffee mug
  tripIcon5:  "",  // basket
  tripIcon6:  "",  // brown egg(s)
  tripIcon7:  "",  // smartphone
  tripIcon8:  "",  // garden rake
  tripIcon9:  "",  // mail / envelopes
  tripIcon10: "",  // small kid silhouette
  tripIcon11: "",  // pruners
  tripIcon12: "",  // shrug / question mark / lightbulb

  // ── REVEAL PANEL ────────────────────────────────────────
  // The Grange Carrier worn — pockets bulging with EVERY
  // item from the trips list. Tiny callout labels point to
  // each item. This is the page's payoff visual.
  revealPanel: "",

  // ── 3 SHORT REASONS (after the buy section) ─────────────
  reason1Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098", // Drop-Chute
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1633_Image_Generation_remix_01kgdhzb5nf1g8wz6q6eymvv6m.png?v=1769981770",       // 600D Canvas
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260201_1643_Image_Generation_remix_01kgdjgd8deat9ykzt5zkedtsn.png?v=1769982391",       // Lifetime warranty

  // ── PRODUCT GALLERY (for the buy section card) ──────────
  // Photographic — the conversion section transitions out of
  // the comic style for credibility. Reusing the sat-images
  // gallery URLs by default; swap for ftl-specific shots later.
  productImage1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260509_050908_126f7e8a-ba44-4b74-ad59-1ae8fdb4c7a1.png?v=1778304065",
  productImage2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098",
  productImage3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2356_Abundant_Harvest_Apron_remix_01kcqx1s10fbm81vz1t5emcq6y_9faf4a7b-ae01-41f0-b66a-f4a91ed7c7c2.png?v=1766034113",
  productImage4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251214_2351_ApronwithGardenBackground_remix_01kcg5gbwne8eb5pketsv0ckyj.png?v=1766034057",
  productImage5: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Grange_hero_image_1_1.png?v=1769839875",
  productImage6: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20260131_0256_Gardener_with_Harvest_Apron_remix_01kg9gtw3ce2br6v2wc968yx68_1.png?v=1769846433",

  // ── PRODUCT BENEFIT ICONS ────────────────────────────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199",   // Lightning — Drop-Chute
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199",   // Feather — Zero-Gravity
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199",   // Shield — durability
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199",   // Water drop — Dry-Wear

  // ── FREE EBOOK COVERS ────────────────────────────────────
  ebookEndlessHarvest: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Screenshot2025-12-16at4.44.33PM.png?v=1765921684",
  ebookHarvestKeepers: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251216_1649_HarvestGuideDisplay_simple_compose_01kcmj6ptjeb3afvd79hez40np.png?v=1765922044",

} as const

// ── PRODUCT GALLERY ORDER ───────────────────────────────────
export const FTL_PRODUCT_GALLERY = [
  "productImage1",
  "productImage2",
  "productImage3",
  "productImage4",
  "productImage5",
  "productImage6",
] as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const ftlFallbacks = {

  logo: "FIELD & HARVEST CO.",

  heroPanel1: "🚶",
  heroPanel2: "🚶",
  heroPanel3: "🚶",
  heroPanel4: "🪢",
  heroPanel5: "🦘",
  heroPanel6: "🚪",

  tripIcon1:  "🪚",
  tripIcon2:  "🪚",
  tripIcon3:  "🧤",
  tripIcon4:  "☕",
  tripIcon5:  "🧺",
  tripIcon6:  "🥚",
  tripIcon7:  "📱",
  tripIcon8:  "🧹",
  tripIcon9:  "📮",
  tripIcon10: "🧒",
  tripIcon11: "✂️",
  tripIcon12: "🤷",

  revealPanel: "🦘",

  reason1Image: "⚡",
  reason2Image: "🛡️",
  reason3Image: "✅",

  productImage1: "1",
  productImage2: "2",
  productImage3: "3",
  productImage4: "4",
  productImage5: "5",
  productImage6: "6",

  benefitIcon1: "⚡",
  benefitIcon2: "🪶",
  benefitIcon3: "🛡️",
  benefitIcon4: "💧",

  ebookEndlessHarvest: "📘",
  ebookHarvestKeepers: "📗",

} as const

// ── HELPERS ─────────────────────────────────────────────────

export type FtlImageKey = keyof typeof ftlImages

export function getFtlImage(key: FtlImageKey): string | null {
  return ftlImages[key] || null
}

export function getFtlFallback(key: FtlImageKey): string {
  return ftlFallbacks[key]
}
