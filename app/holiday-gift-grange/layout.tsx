import type { Metadata } from "next"

const IMG = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2358_Garden_Harvest_Portrait_remix_01kcqx5km5f8cst2nx2pyssx0q.png?v=1774554667&width=1200"

export const metadata: Metadata = {
  title: "The Holiday Gift For The Gardener · The Grange Carrier | Field & Harvest Co.",
  description:
    "The holiday gift every gardener wears: The Grange Carrier holds the whole harvest hands free and empties it in one second. Early Access Black Friday, up to $71 off, 2 free guides and a lifetime warranty.",
  openGraph: {
    title: "The Holiday Gift For The Gardener · The Grange Carrier",
    description: "Hands free in the garden, empty in one second. Up to $71 off for Early Access Black Friday.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/holiday-gift-grange",
    images: [{ url: IMG, alt: "A gardener wearing The Grange Carrier" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Holiday Gift For The Gardener · The Grange Carrier",
    description: "Up to $71 off The Grange Carrier, plus 2 free guides.",
    images: [IMG],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
