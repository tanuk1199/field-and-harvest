import type { Metadata } from "next"

const OG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/supp-hero-hand-outdoor.png?width=1200"

export const metadata: Metadata = {
  title:
    "5 Ways Turmeric Helps Men Over 50 Work Full Days | Field & Harvest Co.",
  description:
    "5 ways Field & Harvest Turmeric helps men over 50 work full days without losing the next one. A 500mg high-absorption curcumin phytosome with boswellia at 30% AKBA. No black pepper, no proprietary blends, every dose printed. Save Up To 71% Off, 90-day money back guarantee.",
  openGraph: {
    title: "5 Ways Turmeric Helps Men Over 50 Work Full Days",
    description:
      "1,000mg you do not absorb is 0mg. A 500mg high-absorption phytosome, plus boswellia AKBA for the pathway ibuprofen never touches. Save Up To 71% Off + 90-day guarantee.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/two-days-in-a-row",
    images: [
      {
        url: OG_IMAGE,
        alt: "A weathered working hand holding a bottle of Field and Harvest Co Turmeric Curcumin Complex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Ways Turmeric Helps Men Over 50 Work Full Days",
    description:
      "1,000mg you do not absorb is 0mg. A 500mg high-absorption phytosome, plus boswellia AKBA. Save Up To 71% Off + 90-day guarantee.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
