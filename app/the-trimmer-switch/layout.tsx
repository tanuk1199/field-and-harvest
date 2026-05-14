import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Yeoman Handle™ — The Aftermarket Trimmer Handle Homeowners Are Switching To | Field & Harvest Co.",
  description: "5 reasons trimmer owners are bolting the Yeoman onto their existing weed eaters. Stand upright, finish in one pass, save your back. Save Up To 43% Off + 2 Free Yardwork Guides. Lifetime warranty, 60-day money-back.",
  openGraph: {
    title: "The Trimmer Handle Homeowners Are Switching To",
    description: "5 reasons trimmer owners are making the switch. Save Up To 43% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/the-trimmer-switch",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Trimmer Handle Homeowners Are Switching To",
    description: "5 reasons trimmer owners are making the switch. Save Up To 43% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
