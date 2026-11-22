import type { Metadata } from "next"

// Every route needs its own layout.tsx, or it inherits the root's title.
const OG_IMAGE = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/bunkhouse-16-inuse-carry-across-yard.png?width=1200"
const TITLE = "6 Reasons The Bunkhouse Is The Perfect Gift For The Man Who Asks For Nothing"
const DESCRIPTION = "He says he wants nothing, then spends every cold weekend in a freezing blind, shop or camper. Early Access Black Friday: $161 off, free 1 year warranty, 30 days to decide."

export const metadata: Metadata = {
  title: `${TITLE} | Field & Harvest Co.`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://explore.fieldandharvestco.com/bunkhouse-holiday-gift",
    images: [{ url: OG_IMAGE, alt: "A man carrying the Bunkhouse diesel heater across a snowy yard" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
