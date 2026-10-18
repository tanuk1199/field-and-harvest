import type { Metadata } from "next"

// DRAFT, NOT DEPLOYED. Metadata is deliberately date-free: the sale end date
// is the owner's call (see ./sale.ts) and a share preview outlives an edit.
export const metadata: Metadata = {
  title: "Early Black Friday Access · The Yeoman Sweep | Field & Harvest Co.",
  description:
    "Early Black Friday Access on The Yeoman Sweep: up to $80 off, plus 3 free 300L yard bags and two free yard guides with every size. Ships free from our US warehouse, 60 days to decide.",
  openGraph: {
    title: "Early Black Friday Access · The Yeoman Sweep",
    description:
      "Up to $80 off The Yeoman Sweep, with $77 of free gear on every size. One walk across the lawn and the leaves are in the hopper.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/early-black-friday-sweep",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-autumn-full-season.png?v=1789416096&width=1200",
        alt: "A man pushing the Yeoman Sweep across a leaf covered lawn in full autumn color",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Black Friday Access · The Yeoman Sweep",
    description: "Up to $80 off The Yeoman Sweep, with $77 of free gear on every size.",
    images: ["https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-autumn-full-season.png?v=1789416096&width=1200"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
