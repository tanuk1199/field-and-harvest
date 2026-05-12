import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Yeoman Handle™ — Father's Day Gift That Saves Dad's Back | Field & Harvest Co.",
  description: "Skip the tie. The trimmer handle that lets dad stand upright the whole pass. Save Up To 43% Off + 2 Free Yardwork Guides for Father's Day. Lifetime warranty, 60-day money-back.",
  openGraph: {
    title: "The Yeoman Handle — The Father's Day Gift That's Saving Dad's Back",
    description: "5 reasons this is the Father's Day gift he'll actually use every weekend. Save Up To 43% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/dads-back-saver",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle on a trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Yeoman Handle — The Father's Day Gift That's Saving Dad's Back",
    description: "5 reasons this is the Father's Day gift he'll actually use every weekend. Save Up To 43% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
