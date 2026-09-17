import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "6 Reasons Thousands Of Homeowners Are Putting Solar Lights On Every Side Of The House This Fall | Field & Harvest Co.",
  description: "Three heads you aim yourself, 270 degrees of cover and 26 feet of motion range from one mounting point. No wiring, no electrician, no trench. Early Fall Sale: save up to 47%, 60 nights to decide, 1-year warranty on all orders.",
  openGraph: { title: "6 Reasons Thousands Of Homeowners Are Putting Solar Lights On Every Side Of The House This Fall", description: "Once one dark spot is handled you notice the next one. Three heads, 270 degrees, four screws and no electrician.", type: "article", url: "https://explore.fieldandharvestco.com/every-side-of-the-house" },
  twitter: { card: "summary_large_image", title: "6 Reasons Thousands Of Homeowners Are Putting Solar Lights On Every Side Of The House This Fall", description: "Once one dark spot is handled you notice the next one. Three heads, 270 degrees, four screws and no electrician." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
