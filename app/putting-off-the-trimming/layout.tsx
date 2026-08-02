import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Reasons You Keep Putting Off The Trimming | Field & Harvest Co.",
  description:
    "You still mow. It is the trimming that keeps sliding to next weekend. Five reasons why it is that one job, why the brace and the breaks never helped, and the one part of the tool that causes all of it.",
  openGraph: {
    title: "5 Reasons You Keep Putting Off The Trimming",
    description: "And why your back was never the problem.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/putting-off-the-trimming",
    images: [
      {
        url: "https://explore.fieldandharvestco.com/bhwt-hand-on-back.webp",
        alt: "A man standing up out of a bent position in his yard, one hand pressed into his lower back",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Reasons You Keep Putting Off The Trimming",
    description: "And why your back was never the problem.",
    images: ["https://explore.fieldandharvestco.com/bhwt-hand-on-back.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
