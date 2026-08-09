import type { Metadata } from "next"

// OG image is deliberately the DIAGRAM, not the bottle. This route withholds
// the product until the reveal, and a bottle in the link preview breaks that
// before the reader ever lands. Per the pack-lockup trap in the store
// CLAUDE.md, the OG image is the second place a wrong bottle render hides;
// using a chart sidesteps the question entirely.
const OG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/supp-recovery-tax.png?width=1200"

export const metadata: Metadata = {
  title:
    "5 Reasons Men Over 50 Can No Longer Finish The Job In One Go | Field & Harvest Co.",
  description:
    "Most men over 50 have stopped finishing the job in one go, and almost none of them ask why. We asked 1,085 men who do their own physical work how long it takes to get right afterwards. Here is what the answers said, and the simple fix almost none of them have tried.",
  openGraph: {
    title: "5 Reasons Men Over 50 Can No Longer Finish The Job In One Go",
    description:
      "Of 1,085 men asked how long it takes to get right after a long session, 515 said a day or two and 83 said most of the week. The single largest thing they do about it is nothing at all.",
    type: "article",
    // Kept in step with the visible byline date. If one moves, move both, or a
    // share preview contradicts the page it links to.
    publishedTime: "2026-03-14",
    url: "https://explore.fieldandharvestco.com/finish-the-yard-in-one-go",
    images: [
      {
        url: OG_IMAGE,
        alt: "A chart showing how much longer the day after a long working session costs than it used to",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Reasons Men Over 50 Can No Longer Finish The Job In One Go",
    description:
      "515 of 1,085 men said a day or two. 83 said most of the week. The largest single answer for what they do about it was nothing at all.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
