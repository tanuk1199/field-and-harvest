import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "3 Reasons Your Shoulder Hurts When Trimming | Field & Harvest Co.",
  description:
    "It is not just your age. Three reasons trimming wrecks your shoulder, why every brace on the shelf was built for someone else, and the one thing about how you hold the machine that causes all of it.",
  openGraph: {
    title: "3 Reasons Your Shoulder Hurts When Trimming",
    description: "Why it is not just your age, and what actually stops it.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/trimming-wrecks-your-shoulder",
    images: [
      {
        url: "https://explore.fieldandharvestco.com/bhwt-hand-on-back.webp",
        alt: "Older man working a string trimmer with his arm held out in front of him",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Reasons Your Shoulder Hurts When Trimming",
    description: "Why it is not just your age, and what actually stops it.",
    images: ["https://explore.fieldandharvestco.com/bhwt-hand-on-back.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
