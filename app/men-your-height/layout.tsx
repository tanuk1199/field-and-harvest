import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Men From 6'1 To 6'11 Made The Same Switch | Field & Harvest Co.",
  description:
    "The grip on your trimmer is bolted where it suits an average frame. Every inch over that, you make it up with your back. Here are nine men taller than average on the same part, and what it did to the back pain.",
  openGraph: {
    title: "Men From 6'1 To 6'11 Swapped The Handle",
    description: "It was never your height. It was where the grip is bolted.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/men-your-height",
    images: [
      {
        url: "https://explore.fieldandharvestco.com/twb-poster4.webp",
        alt: "A customer standing fully upright working a fence line with the Yeoman Handle fitted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Men From 6'1 To 6'11 Swapped The Handle",
    description: "It was never your height. It was where the grip is bolted.",
    images: ["https://explore.fieldandharvestco.com/twb-poster4.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
