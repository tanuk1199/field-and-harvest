import type { Metadata } from "next"

const IMG = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/snowpusher-hero.jpg?v=1793065828&width=1200"

export const metadata: Metadata = {
  title: "Early Access Black Friday Sale · The Yeoman Plow | Field & Harvest Co.",
  description:
    "Early Access Black Friday Sale on The Yeoman Plow: $91 off plus a free 1 year warranty. A 38-inch blade on wheels clears the driveway in half the time. 30 days to decide, free shipping.",
  openGraph: {
    title: "Early Access Black Friday Sale · The Yeoman Plow",
    description: "$91 off The Yeoman Plow plus a free 1 year warranty. Push the driveway clear, never lift it.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/early-black-friday-plow",
    images: [{ url: IMG, alt: "The Yeoman Plow on a cleared driveway" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Access Black Friday Sale · The Yeoman Plow",
    description: "$91 off The Yeoman Plow plus a free 1 year warranty.",
    images: [IMG],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
