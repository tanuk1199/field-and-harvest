import type { Metadata } from "next"

// Without this file the route inherits the root layout (the Grange Carrier). Keep the reason
// count here in sync with lib/stph-reasons.ts and the H1.
const OG_IMAGE = "https://explore.fieldandharvestco.com/htlh-hero-blind.webp"
const TITLE = "7 Reasons Hunters Are Swapping The Propane Heater For Diesel And Staying In The Blind Till Dark"

export const metadata: Metadata = {
  title: `${TITLE} | Field & Harvest Co.`,
  description:
    "A propane heater burns inside the blind with you. A vented diesel heater burns outside and sends in only warm, dry air. Warm in about 3 minutes, runs off 12V, fuel tank built in. Free 1 year warranty, 30 days to decide.",
  openGraph: {
    title: TITLE,
    description: "Real heat in the blind, dry walls, and you are still in your chair at last light.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/swapping-the-propane-heater",
    images: [{ url: OG_IMAGE, alt: "The Bunkhouse Diesel Heater outside a hunting blind, a warm-air hose running in" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "The heater sits outside the blind. Only the warm air comes in.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
