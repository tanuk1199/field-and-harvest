import type { Metadata } from "next"

// Every route needs its own layout.tsx, or it inherits the root's title.
const OG_IMAGE = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ember-grip-demo-relief.png?width=1200"
const TITLE = "5 Reasons The Ember Grip Gloves Are The Perfect Gift For Anyone Whose Hands Are Always Cold"
const DESCRIPTION = "Heat in all five fingers, 5 heat levels, rechargeable. Black Friday: $46 off with 60 days to decide."

export const metadata: Metadata = {
  title: `${TITLE} | Field & Harvest Co.`,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://explore.fieldandharvestco.com/ember-grip-holiday-gift",
    images: [{ url: OG_IMAGE, alt: "Warm hands in the Ember Grip heated gloves" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
