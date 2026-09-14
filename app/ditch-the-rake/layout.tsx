import type { Metadata } from "next"

// ⚠ WITHOUT THIS FILE THE ROUTE INHERITS THE ROOT LAYOUT, and the root is still
// the Grange Carrier. A sibling route shipped for a day with a <title> reading
// "The Grange Carrier™" and a description about 600D canvas. Every new route
// needs its own layout.tsx.
const OG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-guarantee.png?width=1200"

export const metadata: Metadata = {
  title: "5 Reasons Homeowners Are Ditching The Rake This Fall | Field & Harvest Co.",
  description:
    "A rake gathers and a blower relocates. Neither one picks anything up, which is why both end with you on your knees holding a bag open. Here is what a push lawn sweeper does instead, including the acorns and pine needles a mower cannot mulch. Save up to 22%, 60-day money back guarantee.",
  openGraph: {
    title: "5 Reasons Homeowners Are Ditching The Rake This Fall",
    description:
      "A rake gathers. A blower moves. Neither picks anything up. What the Yeoman Sweep does instead, in one walk.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/ditch-the-rake",
    images: [{ url: OG_IMAGE, alt: "A man standing with the Yeoman Sweep on a cleared lawn at golden hour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Reasons Homeowners Are Ditching The Rake This Fall",
    description: "A rake gathers. A blower moves. Neither picks anything up.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
