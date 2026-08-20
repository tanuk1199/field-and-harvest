import type { Metadata } from "next"

// ⚠ WITHOUT THIS FILE THE ROUTE INHERITS THE ROOT LAYOUT, and the root is still
// the Grange Carrier. This page shipped for a day with a <title> reading
// "The Grange Carrier™ — The Last Harvest Carrier You'll Ever Buy" and a
// description about 600D canvas. Every new route needs its own layout.tsx.
const OG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/supp-hero-hand-outdoor.png?width=1200"

export const metadata: Metadata = {
  title: "5 Reasons This Turmeric Absorbs When The One You Tried Did Not | Field & Harvest Co.",
  description:
    "The absorption claim on almost every turmeric traces back to one 1998 study of eight people, funded by the company that sells the black pepper. Here is what to check on your own label, and what a curcumin phytosome does instead. Save 40% Off, 90-day money back guarantee.",
  openGraph: {
    title: "5 Reasons This Turmeric Absorbs When The One You Tried Did Not",
    description:
      "One 1998 study. Eight people. Never replicated. What to check on the back of the bottle you already own.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/the-black-pepper-problem",
    images: [{ url: OG_IMAGE, alt: "A weathered working hand holding a bottle of Field and Harvest Co Turmeric Curcumin Complex" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Reasons This Turmeric Absorbs When The One You Tried Did Not",
    description: "One 1998 study. Eight people. Never replicated. Check the back of your own bottle.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
