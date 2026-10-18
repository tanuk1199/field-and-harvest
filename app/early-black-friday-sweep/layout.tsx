import type { Metadata } from "next"
import { SALE_END } from "./sale"

// DRAFT, NOT DEPLOYED. The end date comes from ./sale.ts (owner set it
// 2026-10-18: October 31, ending early if stock sells out first).
export const metadata: Metadata = {
  title: "Early Black Friday Access · The Yeoman Sweep | Field & Harvest Co.",
  description: `Early Black Friday Access on The Yeoman Sweep: up to 21% off, plus 3 free 300L yard bags and two free yard guides with every size. Ends ${SALE_END}, or sooner if stock sells out. Ships free from our US warehouse, 60 days to decide.`,
  openGraph: {
    title: "Early Black Friday Access · The Yeoman Sweep",
    description: `Up to 21% off The Yeoman Sweep, with $77 of free gear on every size. The Black Friday price, opened early before it sells out. Ends ${SALE_END}.`,
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
    description: `Up to 21% off The Yeoman Sweep, with $77 of free gear on every size. Ends ${SALE_END}.`,
    images: ["https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-autumn-full-season.png?v=1789416096&width=1200"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
