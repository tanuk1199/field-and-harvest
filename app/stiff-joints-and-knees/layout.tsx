import type { Metadata } from "next"

const OG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/supp-hero-hand-outdoor.png?width=1200"

export const metadata: Metadata = {
  title:
    "5 Reasons Men Use Field & Harvest Turmeric For Stiff Joints And Knees | Field & Harvest Co.",
  description:
    "5 reasons men are using Field & Harvest Turmeric to fight stiff joints, knee pain and poor mobility. A 500mg high-absorption curcumin phytosome with boswellia at 30% AKBA. No black pepper, every dose printed on its own line. Save 40% Off, 90-day money back guarantee.",
  openGraph: {
    title: "5 Reasons Men Use Field & Harvest Turmeric For Stiff Joints And Knees",
    description:
      "1,000mg you do not absorb is 0mg. A 500mg high-absorption phytosome, plus boswellia AKBA for the pathway ibuprofen never touches. Save 40% Off + 90-day guarantee.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/stiff-joints-and-knees",
    images: [
      {
        url: OG_IMAGE,
        alt: "A weathered working hand holding a bottle of Field and Harvest Co Turmeric Curcumin Complex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Reasons Men Use Field & Harvest Turmeric For Stiff Joints And Knees",
    description:
      "1,000mg you do not absorb is 0mg. A 500mg high-absorption phytosome, plus boswellia AKBA. Save 40% Off + 90-day guarantee.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
