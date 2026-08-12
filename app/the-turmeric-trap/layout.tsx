import type { Metadata } from "next"

// OG image is the label-vs-absorbed chart, not the bottle. The advertorial's whole
// argument is the label, and a product shot in the preview turns an editorial link
// into an ad before anyone reads a word.
const OG_IMAGE = "https://explore.fieldandharvestco.com/fyo-label-vs-absorbed.webp"

// ⚠ SWEPT 2026-08-11 to match the beat-for-beat headline. The masthead is the BRAND now,
// not "Healthy Living", so the title suffix had to move too or a share preview would name
// a publisher the page does not carry. The $4,000 figure is deliberately NOT in the title
// or the description while it is still an unconfirmed placeholder: a share preview is the
// one surface that outlives an edit, so an unsourced number should not be cached into it.
// ⚠ THE MASTHEAD IS THE PUBLISHER AGAIN, so the title suffix is "Healthy Living". Keep the
// two in agreement or a share preview names a publication the page does not carry.
// ⚠ DATE IS JUNE 2025, back-dated on Tobenna's instruction. `publishedTime` and the on-page
// byline MUST move together; a preview that contradicts the page it links to is worse than
// no date at all. Existing fleet precedent: `/finish-the-yard-in-one-go` is back-dated too.
// ⚠ THE DOLLAR FIGURE STAYS OUT OF THE TITLE AND BOTH DESCRIPTIONS. A share preview is the
// one surface that outlives an edit, so an unconfirmed number should not be cached into it.
export const metadata: Metadata = {
  title: "I Wasted Three Years On Fake Turmeric Before A Doctor Told Me The Truth | Healthy Living",
  description:
    "The big number on the front of a turmeric bottle is the weight of the whole blend, not how much curcumin is in there, and it is usually the figure for three capsules rather than one. Go and check the back of yours.",
  openGraph: {
    title: "Check The Back Of Your Turmeric Bottle Right Now",
    description:
      "The big number on the front is the weight of the whole blend, not the curcumin, and it is usually the figure for three capsules rather than one. Here is what to look for.",
    type: "article",
    publishedTime: "2025-06-17",
    url: "https://explore.fieldandharvestco.com/the-turmeric-trap",
    images: [{ url: OG_IMAGE, alt: "A chart comparing the milligrams printed on a turmeric label with the amount that reaches the bloodstream" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Check The Back Of Your Turmeric Bottle Right Now",
    description:
      "Across 150 reviews of the best-selling turmeric in America, the loudest complaint was not that it failed to work. It was the label.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
