import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Yeoman Handle™ — The Weed Wacker Attachment Built For Tall Men | Field & Harvest Co.",
  description: "6 reasons men 6 feet and up are bolting this onto their weed wacker. Standard handles are calibrated for the 5'9 average; tall guys end up bending further and hurting more. The Yeoman Plumb-Set extension fixes it. Save Up To 43% Off + 2 Free Yardwork Guides. Lifetime warranty, 60-day money-back.",
  openGraph: {
    title: "The Weed Wacker Attachment Built For Tall Men",
    description: "6 reasons men 6 feet and up are switching trimmer handles. Save Up To 43% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/built-for-tall-men",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Weed Wacker Attachment Built For Tall Men",
    description: "6 reasons men 6 feet and up are switching trimmer handles. Save Up To 43% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
