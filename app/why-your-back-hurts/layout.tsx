import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Standard Weed Wacker Handle Is Wrecking Your Back. Here's The Fix. | Field & Harvest Co.",
  description: "The standard handle on your weed wacker is wrecking your back. 3 reasons it's the cause and how the Yeoman fixes all three in a 3-minute bolt-on. Save Up To 43% Off + 2 Free Yardwork Guides.",
  openGraph: {
    title: "The Standard Weed Wacker Handle Is Wrecking Your Back",
    description: "3 reasons it's the cause and the 3-minute bolt-on that fixes all of them. Save Up To 43% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/why-your-back-hurts",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Standard Weed Wacker Handle Is Wrecking Your Back",
    description: "3 reasons it's the cause and the 3-minute bolt-on that fixes all of them. Save Up To 43% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
