import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "40,000 Trimmer Owners Made The Same Switch | Field & Harvest Co.",
  description:
    "One man on a screen is an anecdote. Here are the others: ages 46 to 80, up to 6'7, spinal surgeries, a grounds crew. Same handle, same result, and why it lands the same way on every back.",
  openGraph: {
    title: "40,000 Trimmer Owners Made The Same Switch He Did",
    description: "And this is what it did to the back pain.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/see-who-else-switched",
    images: [
      {
        url: "https://explore.fieldandharvestco.com/twb-poster4.webp",
        alt: "A customer standing upright working a fence line with the Yeoman Handle fitted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "40,000 Trimmer Owners Made The Same Switch He Did",
    description: "And this is what it did to the back pain.",
    images: ["https://explore.fieldandharvestco.com/twb-poster4.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
