// ============================================================
// IMAGE ASSET MAP : Turmeric Curcumin Complex: Two Days In A Row
// (Route: /two-days-in-a-row)
// ============================================================
// First lander for the SUPPLEMENT, so nothing here is cloned from
// the Yeoman fleet. Every asset comes from the supplement library
// uploaded to Shopify Files as supp-*.png on 2026-08-07/08.
//
// ⚠ RATIOS, and this is the trap on this page. Almost every asset
// in the supplement library is 1:1 (the infographics) and the field
// photography is 9:16. NOTHING is 3:2, which is the ratio the
// sibling listicle templates use for their reason frames. Dropping
// a 1:1 diagram into a 3:2 object-cover frame crops roughly a third
// of the height and takes the headline and the axis labels with it.
//
// So this page uses a 4:3 reason frame and TdrAsset takes a `fit`
// prop: diagrams render `contain` on a warm ground so the whole
// chart survives, photographs render `cover`. If you swap an asset
// into a slot, check which of the two it is.
//
// ⚠ Every URL carries &width=. Do not remove it. It is what makes
// Shopify negotiate webp, and it is the difference between this
// page and the ~8.4MB problem documented in CLAUDE.md.
//
// ⛔ TWO ASSETS ARE BANNED FROM THIS PAGE AND FROM THE PDP. Both are
// AI renders that invented product facts, and both were caught only
// by reading them at full size after they were already live:
//
//   supp-vs-table.png     states "PIPERINE CONTENT / Field and
//     Harvest Co. / 10 mg per dose". We contain zero piperine, and
//     the figure is DOUBLE the competitor column, so the table argued
//     the exact opposite of the page it sat on. Replaced by
//     supp-vs-table-v2.png, which was verified cell by cell against
//     the native HTML table on the PDP.
//
//   supp-facts-panel.png  prints an Other Ingredients line of
//     "Hypromellose, Microcrystalline Cellulose, Rice Flour,
//     Magnesium Stearate, Silicon Dioxide" against copy that says
//     "vegetarian capsule, rice flour, that is the entire list", and
//     puts Vitamin D3 2000 IU at 100% DV when it is roughly 250%.
//     There is no locked formula and no supplier, so no rendered
//     Supplement Facts panel can be trusted. Reason 06 uses
//     supp-callout.png instead, which was checked against
//     2-formulation.md and is accurate.
//
// RULE: a diagram may illustrate a CONCEPT (two pathways, powder vs
// phytosome, the recovery curve). It may not assert a SPEC until
// there is a real label to check it against.
// ============================================================

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/"

export const tdrImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=400",

  // ── HERO ────────────────────────────────────────────────
  // Weathered working hand holding the bottle. Avatar and product
  // in one frame, which is what a product-aware fold needs.
  heroImage: `${CDN}supp-hand-bottle.png?width=900`,

  // ── REASONS ─────────────────────────────────────────────
  // 01 the recovery tax chart: same work at 35 vs at 62. DIAGRAM.
  reason1Image: `${CDN}supp-recovery-tax.png?width=800`,
  // 02 milligrams on the label are not milligrams in your blood. DIAGRAM.
  reason2Image: `${CDN}supp-mg-chart.png?width=800`,
  // 03 inflammation runs down two roads, COX and 5-LOX. DIAGRAM.
  reason3Image: `${CDN}supp-two-roads.png?width=800`,
  // 04 two capsules in a working hand at the kitchen window. PHOTO.
  reason4Image: `${CDN}supp-palm-hand-capsules.png?width=800`,
  // 05 two actives, two timelines. DIAGRAM.
  reason5Image: `${CDN}supp-two-timelines.png?width=800`,
  // 06 the four actives called out against the bottle, with doses. DIAGRAM.
  reason6Image: `${CDN}supp-callout.png?width=800`,

  // ── DARK BAND ───────────────────────────────────────────
  // The wedge, proved twice. Sits immediately after reason 02
  // because 02 is the claim these two images are the proof of.
  bandImage1: `${CDN}supp-form-matters.png?width=800`,
  bandImage2: `${CDN}supp-vs-table-v2.png?width=800`,

  // ── CLOSING STRIP ───────────────────────────────────────
  // Headcount and context on the way into the buy box. All 9:16.
  field1: `${CDN}supp-field-trimming.png?width=420`,
  field2: `${CDN}supp-field-firewood.png?width=420`,
  field3: `${CDN}supp-field-blower.png?width=420`,
  field4: `${CDN}supp-field-garden.png?width=420`,
  field5: `${CDN}supp-field-snow.png?width=420`,

  // ── PRODUCT SHOWCASE ────────────────────────────────────
  productMain: `${CDN}supp-benefit-panel.png?width=800`,
  productThumb1: `${CDN}supp-bottle-clean.png?width=260`,
  productThumb2: `${CDN}supp-callout.png?width=260`,
  productThumb3: `${CDN}supp-ladder.png?width=260`,
  productThumb4: `${CDN}supp-trust-grid.png?width=260`,

  // ── GUARANTEE ───────────────────────────────────────────
  guaranteeSeal: `${CDN}supp-guarantee-seal.png?width=320`,

} as const

export type TdrImageKey = keyof typeof tdrImages

// Emoji fallbacks so an unset or broken slot degrades to something
// legible rather than a broken-image icon.
const fallbacks: Record<TdrImageKey, string> = {
  logo: "Field & Harvest Co.",
  heroImage: "🫙",
  reason1Image: "📉",
  reason2Image: "📊",
  reason3Image: "🛣️",
  reason4Image: "💊",
  reason5Image: "🗓️",
  reason6Image: "🧾",
  bandImage1: "🔬",
  bandImage2: "📋",
  field1: "🌾",
  field2: "🪵",
  field3: "🍂",
  field4: "🌱",
  field5: "❄️",
  productMain: "🫙",
  productThumb1: "🫙",
  productThumb2: "🧪",
  productThumb3: "📦",
  productThumb4: "✅",
  guaranteeSeal: "🛡️",
}

export function getTdrImage(name: TdrImageKey): string {
  return tdrImages[name] ?? ""
}

export function getTdrFallback(name: TdrImageKey): string {
  return fallbacks[name] ?? "▫️"
}
