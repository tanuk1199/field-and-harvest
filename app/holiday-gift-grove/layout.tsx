import type { Metadata } from "next"

const IMG = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/pomelli-image.png?v=1771896430&width=1200"

export const metadata: Metadata = {
  title: "The Holiday Gift For The Gardener · The Grove Starter Set | Field & Harvest Co.",
  description:
    "The holiday gift for the gardener who starts seeds every spring: The Grove Starter Set, two trays, 80 cells, full spectrum LED grow lights and humidity domes in one box. Early Access Black Friday, up to $141 off, 2 free guides and a lifetime warranty.",
  openGraph: {
    title: "The Holiday Gift For The Gardener · The Grove Starter Set",
    description: "Their whole garden, started indoors before spring. Up to $141 off for Early Access Black Friday.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/holiday-gift-grove",
    images: [{ url: IMG, alt: "A gardener with two Grove seed starting trays by a window" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Holiday Gift For The Gardener · The Grove Starter Set",
    description: "Up to $141 off The Grove Starter Set, plus 2 free guides.",
    images: [IMG],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
