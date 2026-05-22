import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Yeoman Handle™ — Finish Your Yard Without Taking A Break | Field & Harvest Co.",
  description: "6 reasons trimmer owners are finishing the whole yard in one continuous pass. No water break at minute 35, no hand-switching, no bent-over slowdown. Save Up To 43% Off + 2 Free Yardwork Guides. Lifetime warranty, 60-day money-back.",
  openGraph: {
    title: "Finish Your Yard Without Taking A Break",
    description: "6 reasons trimmer owners are finishing in one continuous pass. Save Up To 43% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/finish-without-breaks",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finish Your Yard Without Taking A Break",
    description: "6 reasons trimmer owners are finishing in one continuous pass. Save Up To 43% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
