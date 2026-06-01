import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Yardsman Gift — The Trimmer Handle He'll Use Every Saturday | Field & Harvest Co.",
  description: "6 reasons this is the perfect gift for any man who works in his own yard. Fits any trimmer, 3-minute install, lifetime warranty. Save Up To 43% Off + 2 Free Yardwork Guides. 60-day money-back.",
  openGraph: {
    title: "The Perfect Gift For Any Man Who Works In The Yard",
    description: "6 reasons he'll use this every Saturday. Fits any trimmer. Lifetime warranty. Save Up To 43% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/the-yardsman-gift",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Perfect Gift For Any Man Who Works In The Yard",
    description: "6 reasons he'll use this every Saturday. Fits any trimmer. Lifetime warranty.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
