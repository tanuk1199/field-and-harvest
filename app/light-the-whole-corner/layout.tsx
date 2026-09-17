import type { Metadata } from "next"

// ⚠ WITHOUT THIS FILE THE ROUTE INHERITS THE ROOT LAYOUT, and the root is still
// the Grange Carrier. Every new route needs its own layout.tsx.
// ⚠ "5 Reasons" appears in the H1 and in all three titles below. A reason-count
// change has to sweep all four.
const OG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-18-hero-ba-driveway_1a7a23ff-3832-4c4f-a38b-f5e4624df232.png?width=1200"

export const metadata: Metadata = {
  title:
    "5 Reasons Homeowners Are Replacing Wired Floodlights With This Solar Light | Field & Harvest Co.",
  description:
    "How much ground one fixture covers, where you are allowed to put it, what putting it up costs, and who is still standing behind it in month seven. Three heads, 270 degrees of coverage, no electrician. 60 nights to decide, 1-year warranty, multi-packs up to 28% off.",
  openGraph: {
    title: "5 Reasons Homeowners Are Replacing Wired Floodlights With This Solar Light",
    description:
      "Three heads you aim yourself, 270 degrees of coverage, and four screws instead of an electrician.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/light-the-whole-corner",
    images: [
      {
        url: OG_IMAGE,
        alt: "The same driveway at night, dark on the left and lit by the solar security light on the right",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Reasons Homeowners Are Replacing Wired Floodlights With This Solar Light",
    description: "Three heads you aim yourself. 270 degrees. No electrician.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
