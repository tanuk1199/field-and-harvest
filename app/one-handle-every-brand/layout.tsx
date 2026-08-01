import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Reasons One Handle Ends The Back Pain Caused By Every Trimmer Brand | Field & Harvest Co.",
  description:
    "STIHL, Echo, Ryobi, EGO and Husqvarna all mount the grip in the same low place. Here is the comparison between bolting on a handle, keeping what you have, and buying another trimmer.",
  openGraph: {
    title: "5 Reasons One Handle Ends The Back Pain Caused By Every Trimmer Brand",
    description: "And why buying another trimmer will not.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/one-handle-every-brand",
    images: [
      {
        url: "https://explore.fieldandharvestco.com/bhwt-brand-rack.webp",
        alt: "Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Reasons One Handle Ends The Back Pain Caused By Every Trimmer Brand",
    description: "And why buying another trimmer will not.",
    images: ["https://explore.fieldandharvestco.com/bhwt-brand-rack.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
