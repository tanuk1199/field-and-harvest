import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Early Access Black Friday Sale · The Gable Pressure Washer Wand | Field & Harvest Co.",
  description:
    "Clean the gutters and the second story from the lawn. 24 ft of reach on the pressure washer you already own. $101 off in the Early Access Black Friday Sale.",
  openGraph: {
    title: "Early Access Black Friday Sale · $101 Off The Gable",
    description: "Clean the gutters and the second story without the ladder. Both feet on the grass.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/black-friday-gable",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/gable-01-hero-gable-badges.png?width=1200",
        alt: "Cleaning a second-story gutter from the lawn with the Gable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Access Black Friday Sale · $101 Off The Gable",
    description: "Clean the gutters and the second story without the ladder.",
    images: ["https://cdn.shopify.com/s/files/1/0651/8299/0379/files/gable-01-hero-gable-badges.png?width=1200"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
