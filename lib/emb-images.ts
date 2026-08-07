// ============================================================
// IMAGE ASSET MAP : Yeoman Handle: Every Major Brand
// (Route: /every-major-brand)
// ============================================================
// Slot mapping deliberately DIVERGES from tts-images.ts. This
// angle is carried by the imagery, so the slots were picked for
// what each frame argues, not cloned from the sibling page:
//
//   reason1  = the brand rack. Three different makes, every
//              factory loop mounted low. This is the whole angle
//              in one photograph and nothing else in the library
//              says it.
//   reason4  = the labelled clamp infographic. Renders the
//              knock-off argument instead of illustrating it,
//              which matters on an offer page where "I bet it is
//              cheaper elsewhere" is the live objection.
//   proofGrid = the six-photo collage. It does headcount only, and
//              it sits at the BOTTOM, after the video wall has already
//              done the demo job. Collage and wall are not substitutes:
//              a collage proves how many, a wall proves that it works.
//              Static traffic needs the second one first.
//
// ⚠ RATIOS. reason1Image is 3:2 and proofGrid is 4:3; their frames
// on the page are set to match. Everything else is 1:1 and sits in
// the square reason frame. Do NOT drop a 3:2 into a square frame,
// the callout labels crop.
//
// ⚠ &width= does NOT work on the animated GIFs. Shopify ignores it
// and serves them as animated webp at full weight. heroImage and
// reason3Image are both GIFs, so this page carries that cost by
// design (they are the demo assets and nothing still replaces them).
// ============================================================

export const embImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=400",

  // ── HERO ────────────────────────────────────────────────
  // The swap-moment demo GIF, same hero the rest of the fleet runs.
  heroImage: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",

  // ── LISTICLE REASON IMAGES ──────────────────────────────
  reason1Image: "/bhwt-brand-rack.webp",                                                                    // 3:2 : three makes, every factory loop low
  reason2Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/check_mark.png?v=1778562973",       // 1:1 : bent + red pain glow vs upright + green check
  reason3Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_5.gif?v=1778560234",           // 1:1 : man tightening the clamp with the allen key
  reason4Image: "/emb-built-to-stay.webp",                                                                  // 1:1 : "Built To Stay. Built To Last." labelled clamp
  reason5Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_3.gif?v=1778560037",           // 1:1 : slides to your height
  reason6Image: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_054912_54f8385d-d7ae-4ba4-8844-aef29e50a3dc.png?v=1778565243&width=800", // 1:1 : lifetime warranty seal

  // ── CLOSING COLLAGE ─────────────────────────────────────
  // Headcount proof, and ONLY headcount proof. The demo job is done
  // by the video wall up after reason 02; by the time he reaches this
  // he has already watched it work, so all this has to do is say "and
  // a lot of other people did too" on the way into the buy box.
  proofGrid: "/gift-ugc-grid.webp",                                                                           // 4:3 : six real customers, six machines

  // ── PRODUCT SECTION ─────────────────────────────────────
  productMain: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/productimage.png?v=1778558991&width=800",
  productThumb1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_053705_702ffc4f-a3cc-4cb1-81e8-c862cccc10d5.png?v=1778564569&width=300",
  productThumb2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333&width=300",
  productThumb3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/easytoinstall.png?v=1778558990&width=300",
  productThumb4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_054912_54f8385d-d7ae-4ba4-8844-aef29e50a3dc.png?v=1778565243&width=300",

  // ── PRODUCT BENEFIT ICONS ───────────────────────────────
  benefitIcon1: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/2.png?v=1769840199&width=200",
  benefitIcon2: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/3.png?v=1769840199&width=200",
  benefitIcon3: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/4.png?v=1769840199&width=200",
  benefitIcon4: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/5.png?v=1769840199&width=200",

} as const

// ── EMOJI FALLBACKS ─────────────────────────────────────────

export const embFallbacks = {

  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",

  reason1Image: "🏷️",
  reason2Image: "🧍",
  reason3Image: "🔧",
  reason4Image: "🔩",
  reason5Image: "📐",
  reason6Image: "🛡️",

  proofGrid: "👥",

  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",

  benefitIcon1: "🏷️",
  benefitIcon2: "🧍",
  benefitIcon3: "🔧",
  benefitIcon4: "🛡️",

} as const

// ── HELPER ──────────────────────────────────────────────────

type EmbImageKey = keyof typeof embImages

export function getEmbImage(key: EmbImageKey): string | null {
  return embImages[key] || null
}

export function getEmbFallback(key: EmbImageKey): string {
  return embFallbacks[key]
}
