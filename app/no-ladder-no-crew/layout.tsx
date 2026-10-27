import type { Metadata } from "next"

// Own layout so the route does not inherit the Grange Carrier root metadata.
const OG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/gable-16-info-ladder-vs-ground.png?width=1200"

export const metadata: Metadata = {
  title: "6 Reasons Homeowners Clean Their Gutters With The Gable Instead Of A Ladder Or A Crew | Field & Harvest Co.",
  description:
    "A ladder puts you up there with a pressure washer in your hands. A crew sends a bill every fall. The Gable is a 24 ft wand for the pressure washer you already own, so you flush the gutters and wash the second story from the lawn. Halloween Sale: $101 off + free 1 year warranty.",
  openGraph: {
    title: "6 Reasons Homeowners Are Putting Away The Ladder And Skipping The Crew",
    description: "Second-story gutters and siding from the lawn, on the pressure washer you already own.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/no-ladder-no-crew",
    images: [{ url: OG_IMAGE, alt: "The same gutter cleaned from a ladder and from the lawn with the Gable wand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "6 Reasons Homeowners Are Putting Away The Ladder And Skipping The Crew",
    description: "Second-story gutters and siding from the lawn.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
