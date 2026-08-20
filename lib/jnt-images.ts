// ============================================================
// IMAGE ASSET MAP : Turmeric Curcumin Complex: Two Days In A Row
// (Route: /two-days-in-a-row)
// ============================================================
// First lander for the SUPPLEMENT, so nothing here is cloned from
// the Yeoman fleet. Every asset comes from the supplement library
// uploaded to Shopify Files as supp-*.png on 2026-08-07/08.
//
// ⚠ RATIOS. Almost every asset in the supplement library is 1:1
// (the infographics) and the field photography is 9:16. NOTHING is
// 3:2, which is the ratio the sibling listicle templates use for
// their reason frames. Dropping a 1:1 diagram into a 3:2 cover frame
// crops a third of the height and takes the chart headline and the
// axis labels with it.
//
// So THIS PAGE USES SQUARE FRAMES for the hero, every reason and both
// dark-band figures. The assets are exactly 1024x1024, so cover fills
// edge to edge with zero crop and zero letterboxing. It briefly used
// a 4:3 frame with `contain`, which worked but padded every diagram
// with dead ground down both sides for no reason.
//
// TdrAsset still takes a `fit` prop and the logo still needs
// `contain`. If you ever put a non-square asset in a reason slot,
// either crop it to 1:1 first or set fit="contain" on that one.
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

export const jntImages = {

  // ── NAVIGATION ──────────────────────────────────────────
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=400",

  // ── HERO ────────────────────────────────────────────────
  // Weathered working hand holding the bottle outdoors. Avatar and
  // product in one frame, which is what a product-aware fold needs.
  //
  // ⚠ PACK VARIANT. The renders in the library carry TWO different
  // label lockups and only one is right. The correct pack sets the
  // actives on ONE line, "BOSWELLIA · GINGER · VITAMIN D3". Several
  // renders stack them on three lines instead, which is not the pack.
  // supp-hand-bottle.png is one of the stacked ones and shipped here
  // by mistake. Vertical stack, do NOT use as a hero: supp-hand-bottle,
  // supp-window-mug, supp-truck-dash, supp-workbench, supp-three-bottles.
  // Horizontal and correct: supp-hero-hand-outdoor, supp-bottle-clean,
  // supp-benefit-panel, supp-callout.
  heroImage: `${CDN}supp-hero-hand-outdoor.png?width=900`,

  // ── REASONS ─────────────────────────────────────────────
  // 01 the man at the line where he stopped. PHOTO.
  //
  // ⚠ THIS SLOT IS DELIBERATELY THE ONLY PHOTOGRAPH IN THE ARGUMENT
  // RUN, AND IT USED TO BE A CHART. Reasons 01, 02, the dark band and
  // 03 all carried full-width diagrams back to back, so the page went
  // hero photo, chart, chart, diagram, diagram with nothing but body
  // copy between them. Meanwhile the only five photographs of men
  // actually doing the work (field1 to field5) render as 56px chips in
  // the almanac. The humans were there, they were just thumbnails.
  //
  // 01 is the RECOGNITION reason ("It works on the reason you stop
  // before the job is done"). 02, 03 and the band are MECHANISM
  // reasons and legitimately need diagrams. So this is the slot that
  // gives, and swapping it breaks the four-square wall.
  //
  // Cast to the register of the winning FIN statics: traces of the
  // work and the unfinished job, no smiling model, no bottle in frame.
  // Generated gpt_image_2 1:1 1k/medium 2026-08-09, originals in
  // ~/Downloads/FH Turmeric Reason01 2026-08-09/.
  //
  // ⛔ A generated person may sit under a RECOGNITION claim and never
  // under a PROOF claim. This product has zero orders, so there are no
  // real customers to photograph. Never put an invented face beside a
  // review, a count or a testimonial.
  //
  // The r01-d-porch-step alternate was rejected on copy grounds, not
  // craft: the man reads defeated and the page says "The job has not
  // beaten you" two screens above it.
  //
  // supp-recovery-tax.png (the 35 vs 62 chart this replaced) still
  // runs on the PDP as ump_image, where it has room to be read.
  reason1Image: `/jnt-r1-getting-up-from-the-bed-1x1.png`,
  // 02 milligrams on the label are not milligrams in your blood. DIAGRAM.
  reason2Image: `${CDN}supp-mg-chart.png?width=800`,
  // 03 inflammation runs down two roads, COX and 5-LOX. DIAGRAM.
  // v2, supplied by Tobenna 2026-08-08. Cleaner illustration and the labels
  // are sharper: "where common pain relievers work" against "where boswellia
  // AKBA works". Same asset runs as lox_image on the PDP so the two surfaces
  // show the same diagram. supp-two-roads.png (v1) is superseded.
  reason3Image: `/jnt-r4-truck-cab-1x1.png`,
  // 04 two capsules in a working hand at the kitchen window. PHOTO.
  reason4Image: `${CDN}supp-palm-hand-capsules.png?width=800`,
  // 05 two actives, two timelines. DIAGRAM.
  // ⚠ CURRENTLY UNUSED. The ten week ladder inside reason 04 took this
  // job and does it better, because it also says what to DO in each
  // stretch. Kept mapped in case a future variant wants the diagram.
  reason5Image: `${CDN}supp-two-timelines.png?width=800`,
  // 06 the four actives called out against the bottle, with doses. DIAGRAM.
  reason6Image: `/jnt-r5-back-on-his-knees-1x1.png`,

  // ── DARK BAND ───────────────────────────────────────────
  // The wedge, proved twice. Sits immediately after reason 02
  // because 02 is the claim these two images are the proof of.
  bandImage1: `${CDN}supp-form-matters.png?width=800`,
  // ⚠ CURRENTLY UNUSED. The band was cut to one diagram; this one argues a
  // broader category point than the reason it sat under, and it was the
  // second full scroll of a section that was already too long. Kept mapped
  // in case it earns a slot of its own later. It IS the corrected table
  // (v2), not the one with the false 10mg piperine row.
  bandImage2: `${CDN}supp-vs-table-v2.png?width=800`,

  // ── CLOSING STRIP ───────────────────────────────────────
  // Headcount and context on the way into the buy box. All 9:16.
  field1: `/jnt-r3-stairs-1x1.png`,
  field2: `/jnt-r2-first-step-of-the-morning-1x1.png`,
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

export type JntImageKey = keyof typeof jntImages

// Emoji fallbacks so an unset or broken slot degrades to something
// legible rather than a broken-image icon.
const fallbacks: Record<JntImageKey, string> = {
  logo: "Field & Harvest Co.",
  heroImage: "🫙",
  reason1Image: "🪓",
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

export function getJntImage(name: JntImageKey): string {
  return jntImages[name] ?? ""
}

export function getJntFallback(name: JntImageKey): string {
  return fallbacks[name] ?? "▫️"
}
