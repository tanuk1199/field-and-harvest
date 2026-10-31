import type { Metadata } from "next"

const IMG = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/gable-01-hero-gable-badges.png?v=1792810386&width=1200"

export const metadata: Metadata = {
  title: "Early Access Black Friday Sale · The Gable Pressure Washer Wand | Field & Harvest Co.",
  description:
    "Early Access Black Friday Sale on The Gable Pressure Washer Wand: $101 off plus a free 1 year warranty. Clean second-story gutters and siding from the lawn. 30 days to decide, free shipping.",
  openGraph: {
    title: "Early Access Black Friday Sale · The Gable Pressure Washer Wand",
    description: "$101 off The Gable plus a free 1 year warranty. Clean the gutters from the lawn, not the ladder.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/early-black-friday-gable",
    images: [{ url: IMG, alt: "Washing the gable peak of a house from the lawn with The Gable Pressure Washer Wand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Access Black Friday Sale · The Gable Pressure Washer Wand",
    description: "$101 off The Gable plus a free 1 year warranty.",
    images: [IMG],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
