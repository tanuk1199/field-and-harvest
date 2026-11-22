import type { Metadata } from "next"

// Every route needs its own layout.tsx, or it inherits the root's title.
const OG_IMAGE = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/plow36-driveway.jpg?width=1200"
const TITLE = "6 Reasons The Yeoman Plow Is The Perfect Gift For The Man Who Still Shovels His Own Driveway"
const DESCRIPTION = "Push, not lift, in half the time. Early Access Black Friday: $113 off, free 1 year warranty, 30 days to decide, free US shipping."

export const metadata: Metadata = {
  title: `${TITLE} | Field & Harvest Co.`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://explore.fieldandharvestco.com/plow-holiday-gift",
    images: [{ url: OG_IMAGE, alt: "A man pushing the Yeoman Plow down a snowy driveway" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
