import type { Metadata } from "next"

const IMG = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/20251217_2358_Garden_Harvest_Portrait_remix_01kcqx5km5f8cst2nx2pyssx0q.png?v=1774554667&width=1200"

export const metadata: Metadata = {
  title: "Early Access Black Friday Sale · The Grange Carrier | Field & Harvest Co.",
  description:
    "Early Access Black Friday Sale on The Grange Carrier: up to $71 off, 2 free guides and a lifetime warranty. Harvest hands-free and empty it in one second. 60 days to decide.",
  openGraph: {
    title: "Early Access Black Friday Sale · The Grange Carrier",
    description: "Up to $71 off The Grange Carrier, plus 2 free guides and a lifetime warranty.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/early-black-friday-grange",
    images: [{ url: IMG, alt: "A gardener wearing The Grange Carrier" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Access Black Friday Sale · The Grange Carrier",
    description: "Up to $71 off The Grange Carrier, plus 2 free guides.",
    images: [IMG],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
