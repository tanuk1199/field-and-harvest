import type { Metadata } from "next"

const IMG = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/bunkhouse-01-hero-garage-badges.png?v=1792716169&width=1200"

export const metadata: Metadata = {
  title: "Early Access Black Friday Sale · The Bunkhouse Diesel Heater | Field & Harvest Co.",
  description:
    "Early Access Black Friday Sale on The Bunkhouse Diesel Heater: $161 off plus a free 1 year warranty. Dry heat in about 3 minutes, with the exhaust out its own pipe. 30 days to decide, ships free from USA.",
  openGraph: {
    title: "Early Access Black Friday Sale · The Bunkhouse Diesel Heater",
    description: "$161 off The Bunkhouse plus a free 1 year warranty. The fumes go out the pipe, the room gets the heat.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/early-black-friday-bunkhouse",
    images: [{ url: IMG, alt: "The Bunkhouse Diesel Heater in a garage shop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Access Black Friday Sale · The Bunkhouse Diesel Heater",
    description: "$161 off The Bunkhouse plus a free 1 year warranty.",
    images: [IMG],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
