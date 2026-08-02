import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "4 Reasons His Trimmer Is Causing The Back Pain He Never Mentions | Field & Harvest Co.",
  description:
    "Why his back locks up after the yard, why it is the handle rather than his age, and the one gift he will actually use on the trimmer he already owns.",
  openGraph: {
    title: "4 Reasons His Trimmer Is Causing The Back Pain He Never Mentions",
    description: "And the gift that fixes it.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/the-gift-he-will-actually-use",
    images: [
      {
        url: "https://explore.fieldandharvestco.com/bhwt-hand-on-back.webp",
        alt: "Older man straightening up with a hand pressed to his lower back after trimming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4 Reasons His Trimmer Is Causing The Back Pain He Never Mentions",
    description: "And the gift that fixes it.",
    images: ["https://explore.fieldandharvestco.com/bhwt-hand-on-back.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
