import type { Metadata } from "next"

// ⚠ Every route needs its own layout.tsx, or it inherits the root's Grange Carrier title.
const OG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-autumn-full-season.png?width=1200"

const TITLE = "6 Reasons Smart Homeowners Are Grabbing The Yeoman Sweep Before It Sells Out Again This Fall"

export const metadata: Metadata = {
  title: `${TITLE} | Field & Harvest Co.`,
  description:
    "The leaves are about to come down and the 30 inch has already sold out. One walk replaces blow, rake, bend and bag. Save up to 21%, up to $132 of free gear, free shipping from our US warehouse and 60 days to decide.",
  openGraph: {
    title: TITLE,
    description: "One walk replaces blow, rake, bend and bag. Get set up before the first big leaf drop.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/before-it-sells-out",
    images: [{ url: OG_IMAGE, alt: "A man pushing the Yeoman Sweep across a leaf covered lawn in full autumn color" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "One walk replaces blow, rake, bend and bag.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
