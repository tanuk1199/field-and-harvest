import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Reasons Your Back Hurts When Trimming | Field & Harvest Co.",
  description:
    "It is not just your age. Five reasons trimming wrecks your lower back, why the brace and the stretches never fixed it, and the one part of the tool that causes all of it.",
  openGraph: {
    title: "5 Reasons Your Back Hurts When Trimming",
    description:
      "Why it is not just your age, and what actually stops it.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/back-hurts-when-trimming",
    images: [
      {
        url: "https://explore.fieldandharvestco.com/bhwt-hand-on-back.png",
        alt: "Older man straightening up with a hand pressed to his lower back after trimming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Reasons Your Back Hurts When Trimming",
    description: "Why it is not just your age, and what actually stops it.",
    images: ["https://explore.fieldandharvestco.com/bhwt-hand-on-back.png"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
