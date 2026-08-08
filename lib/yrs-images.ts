// ============================================================
// IMAGE ASSET MAP — The Yeoman Rig: The Shoulder Switch (product-aware)
// (Route: /the-shoulder-switch)
//
// All eight product URLs are REAL, pulled live from
// fieldandharvestco.com/products/yeoman-rig.json on 2026-08-07.
//
// ⚠ SLOT ASSIGNMENT IS PROVISIONAL. The Rig gallery was reshuffled by
// productReorderMedia during the 2026-08-05 hero swap (the documented gotcha:
// promoting one image reorders the rest arbitrarily), so index order no longer
// matches the original documented sequence. Only image 1 is confirmed by
// filename. Images 2 to 8 are assigned by best guess and need one visual pass
// before this page takes traffic.
// ============================================================

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"

export const yrsImages = {
  // Shared F&H brand assets, same as every other lander in this repo.
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330",

  // Purpose-built for the hero frame, generated 2026-08-08 (gpt_image_2, 4:3,
  // 1k/medium, Rig product reference cce3348a-c721-479c-94aa-12d390818b99).
  // A man about 60 in a work shirt cutting a fallen limb with a chainsaw, the
  // Rig worn OVER the shirt on the right shoulder with the cap, chest strap and
  // buckle all reading clearly. 1168x880, native 4:3, so it fills the hero's
  // aspect-[4/3] frame with nothing cropped. 145KB webp from a 1.7MB png.
  //
  // Chosen over an alternate take (arms raised to a standing cut) which drifted
  // from the reference hardware into a larger vest-like panel. Both originals
  // are in ~/Downloads/Yeoman Rig Hero 2026-08-08/.
  //
  // Replaces `${CDN}/rig-hero-one-size-fits-all.png`, which is still the PDP
  // gallery hero. That one carries LIFETIME WARRANTY and ONE SIZE FITS ALL badge
  // overlays, which is right on a PDP gallery and wrong at the top of a lander
  // that already runs its own offer badge two lines down.
  heroImage: "/yrs-hero-chainsaw.webp",

  // CONFIRMED, Tobenna-selected. Photographic side profile: a real man in a work
  // shirt, arm extended holding the trimmer out, orange heat bloom over the
  // right deltoid. Same shot that runs on the Rig PDP as longform_image_top.
  // Source: ~/Downloads/Yeoman Rig PDP Images 2026-08-04/
  //         A4-shoulder-photo-arm-extended-orange-SELECTED.png
  // Local webp, 138KB from a 1MB PNG. Square, reason frame is aspect-square,
  // nothing crops.
  //
  // The skeleton lever diagram (A1) is also converted and sitting in
  // public/yrs-reason1-skeleton-lever.webp, unused. It was rejected for the PDP
  // longform slot on 2026-08-05 and rejected here too. Kept, not deleted.
  reason1Image: "/yrs-reason1-reach-loads-shoulder.webp",

  // CONFIRMED. Purpose-built for card 02: hard vertical split, a lifter in a
  // leather weight belt on the left, a man in a work shirt with the Rig on over
  // the shirt running a chainsaw on the right, "SAME IDEA. DIFFERENT JOB." bar
  // across the foot. The card's argument as a picture.
  // Generated 2026-08-07, gpt_image_2 1:1. Alternate cut with the belt laid flat
  // and "EQUIPMENT, NOT MEDICAL SUPPLY." is in
  // public/yrs-reason2-belt-vs-rig-B.webp if you want to swap.
  reason2Image: "/yrs-reason2-belt-vs-rig-A.webp",

  // PROVISIONAL, verify before spend.
  reason3Image: `${CDN}/hf_20260805_054551_9d214d89-35e3-4d14-a6c2-d12372ba3036.png`, // now renders in CARD 05 (either shoulder + guarantee)
  reason4Image: `${CDN}/hf_20260805_023117_7b28eb9a-a026-44dc-836b-dd22a6d611af.png`, // card 04, The Journeyman Cut
  reason5Image: `${CDN}/hf_20260805_054650_a89809fe-6245-420a-8bb0-ae029f7f5707.png`, // now renders in CARD 03 (The Hold-Up). Keys 3 and 5 were
  // SWAPPED between slots 2026-08-08 at Tobenna's direction. Key names are
  // deliberately unchanged, so read the card, not the key name.
  reason6Image: `${CDN}/hf_20260805_023142_1d1cb74f-5111-443a-8639-b8f873ebb8f3.png`, // UNUSED. Card 06 (risk reversal) was cut 2026-08-08 so the card count
  // matches the '5 Reasons' headline. The guarantee still appears in the
  // showcase badge, a benefit chip and FAQ item 5. Key kept for a fast restore.

  productMain: `${CDN}/rig-hero-one-size-fits-all.png`,
  productThumb1: `${CDN}/hf_20260805_054532_95e0c29f-088c-4605-85c9-7755b0e9caea.png`,
  productThumb2: `${CDN}/hf_20260805_054600_b1838ea0-30eb-4ad0-accb-e8e47c038e7e.png`,
  productThumb3: `${CDN}/hf_20260805_054551_9d214d89-35e3-4d14-a6c2-d12372ba3036.png`,
  productThumb4: `${CDN}/hf_20260805_054541_282c5a46-ca16-4c23-8f82-67c95abba646.png`,

  benefitIcon1: `${CDN}/2.png?v=1769840199`,
  benefitIcon2: `${CDN}/3.png?v=1769840199`,
  benefitIcon3: `${CDN}/4.png?v=1769840199`,
  benefitIcon4: `${CDN}/5.png?v=1769840199`,
} as const

export const yrsFallbacks = {
  logo: "FIELD & HARVEST CO.",
  heroImage: "🌾",

  reason1Image: "🏋️",
  reason2Image: "🫱",
  reason3Image: "👔",
  reason4Image: "🎚️",
  reason5Image: "💨",
  reason6Image: "🛡️",

  productMain: "📦",
  productThumb1: "1",
  productThumb2: "2",
  productThumb3: "3",
  productThumb4: "4",

  benefitIcon1: "🏋️",
  benefitIcon2: "🫱",
  benefitIcon3: "👔",
  benefitIcon4: "🛡️",
} as const

export type TtsImageKey = keyof typeof yrsImages

export function getTtsImage(key: TtsImageKey): string | null {
  const v = yrsImages[key]
  return v && v.length > 0 ? v : null
}

export function getTtsFallback(key: TtsImageKey): string {
  return yrsFallbacks[key] ?? "📷"
}
