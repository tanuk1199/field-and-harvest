import type { Metadata } from "next"

// Every route needs its own layout.tsx, or it inherits the root's title.
const OG_IMAGE = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/gable-14-couple-on-the-lawn.png?width=1200"
const TITLE = "5 Reasons The Gable Wand Is The Perfect Gift For The Man Who Still Climbs The Ladder"
const DESCRIPTION = "Gutters, siding and peaks from the lawn. Black Friday: $101 off, free 1 year warranty, 30 days to decide, free shipping."

export const metadata: Metadata = {
  title: `${TITLE} | Field & Harvest Co.`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://explore.fieldandharvestco.com/gable-holiday-gift",
    images: [{ url: OG_IMAGE, alt: "A man washing the second story of his house from the lawn with The Gable wand" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
