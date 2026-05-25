import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Your Back Hurts After Weed Eating — And The 3-Minute Fix | Field & Harvest Co.",
  description: "Your weed wacker handle is the problem, not your back. 3 reasons the factory handle is wrecking your back and how the Yeoman fixes all three in a 3-minute bolt-on. Save Up To 43% Off + 2 Free Yardwork Guides.",
  openGraph: {
    title: "Why Your Back Hurts After Weed Eating",
    description: "3 reasons your weed wacker is wrecking your back and the 3-minute fix that ends it. Save Up To 43% Off + 2 Free Yardwork Guides.",
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
    title: "Why Your Back Hurts After Weed Eating",
    description: "3 reasons your weed wacker is wrecking your back and the 3-minute fix that ends it. Save Up To 43% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
