import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "End Of Summer Sale · The Yeoman Handle | Field & Harvest Co.",
  description:
    "40,000 trimmer owners swapped the factory handle for this one. Until September 30 a single is $34.99 and the three-pack is $69.99, both with two free yardwork guides.",
  openGraph: {
    title: "End Of Summer Sale · The Yeoman Handle",
    description:
      "40,000 trimmer owners swapped the handle. Until September 30, yours is $34.99. Fits every major brand, three minutes with an allen key.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/end-of-summer-sale",
    images: [
      {
        url: "https://explore.fieldandharvestco.com/twb-poster4.webp",
        alt: "A customer standing upright working a fence line with the Yeoman Handle fitted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "End Of Summer Sale · The Yeoman Handle",
    description: "Until September 30, yours is $34.99. Fits every major brand.",
    images: ["https://explore.fieldandharvestco.com/twb-poster4.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
