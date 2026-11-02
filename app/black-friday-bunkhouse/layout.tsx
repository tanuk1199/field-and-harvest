import type { Metadata } from "next"

const OG = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/bunkhouse-13-inuse-hunting-blind.png?v=1792716169&width=1200"

export const metadata: Metadata = {
  title: "Early Access Black Friday Sale · The Bunkhouse Diesel Heater | Field & Harvest Co.",
  description:
    "Dry heat in about 3 minutes, with the fumes sent outside. An 8 kW diesel heater that pipes its exhaust out. $161 off in the Early Access Black Friday Sale.",
  openGraph: {
    title: "Early Access Black Friday Sale · $161 Off The Bunkhouse",
    description: "Dry heat in about 3 minutes, with the fumes sent outside.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/black-friday-bunkhouse",
    images: [{ url: OG, alt: "A warm hunting blind with the Bunkhouse beside the hunter" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Access Black Friday Sale · $161 Off The Bunkhouse",
    description: "Dry heat in about 3 minutes, with the fumes sent outside.",
    images: [OG],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
