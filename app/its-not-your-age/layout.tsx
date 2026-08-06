import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "It Wasn't Your Age. It Was The Handle On Your Trimmer. | Field & Harvest Co.",
  description: "Your back is fine all week. It only locks up the day you trim. 5 reasons that isn't age, it's the grip sitting too low on your trimmer. Save Up To 43% Off + 2 Free Yardwork Guides. Lifetime warranty, 60-day money-back.",
  openGraph: {
    title: "It Wasn't Your Age. It Was The Handle.",
    description: "Your back is fine all week. It only locks up the day you trim. Here is why.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/its-not-your-age",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "It Wasn't Your Age. It Was The Handle.",
    description: "Your back is fine all week. It only locks up the day you trim. Here is why.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
