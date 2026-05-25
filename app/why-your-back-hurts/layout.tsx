import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Your Back Hurts After Weed Eating — And The 3-Minute Fix | Field & Harvest Co.",
  description: "Your back doesn't hurt because you're getting old. It hurts because your weed wacker is built wrong. 3 reasons why factory handles wreck your back and how the Yeoman fixes all three. Save Up To 43% Off + 2 Free Yardwork Guides.",
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
