import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "The Yeoman Handle™: One Handle Fits Every Major Trimmer Brand | Field & Harvest Co.",
  description:
    "6 reasons one handle fixes what every major brand got wrong. Fits 26 and 28mm shafts across STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER, gas or battery. Save Up To 43% Off + 2 Free Yardwork Guides. Lifetime warranty, 60-day trial.",
  openGraph: {
    title: "One Handle Fixes What Every Major Brand Got Wrong",
    description:
      "6 reasons 40,000 trimmer owners bolted one on. Fits every major brand. Save Up To 43% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/every-major-brand",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333&width=1200",
        alt: "A man standing fully upright while trimming with the Yeoman Handle fitted to his trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Handle Fixes What Every Major Brand Got Wrong",
    description:
      "6 reasons 40,000 trimmer owners bolted one on. Fits every major brand. Save Up To 43% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333&width=1200",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
