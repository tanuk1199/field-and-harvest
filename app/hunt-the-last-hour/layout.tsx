import type { Metadata } from "next"

// Every route needs its own layout.tsx, or it inherits the root's Grange Carrier title.
const OG_IMAGE = "https://explore.fieldandharvestco.com/htlh-hero-blind.webp"

const TITLE = "7 Reasons The Bunkhouse Lets You Hunt The Last Hour Instead Of Driving Home Cold"

export const metadata: Metadata = {
  title: `${TITLE} | Field & Harvest Co.`,
  description:
    "Warm, dry air in the blind about three minutes after you start it. The exhaust goes outside, it runs off 12V, and the fuel tank is built in. Free 1 year warranty and 30 days to decide.",
  openGraph: {
    title: TITLE,
    description: "Warm, dry air in the blind, so you are still in your chair when the deer start moving.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/hunt-the-last-hour",
    images: [{ url: OG_IMAGE, alt: "The Bunkhouse Diesel Heater on a snowy rock outside a camo hunting blind, warm air hose running into the blind" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Warm, dry air in the blind, so you stay till dark.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
