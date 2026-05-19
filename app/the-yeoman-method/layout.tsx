import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Yeoman Method™ — The 3-Minute Fix For Trimmer Back That 30 Years Of Yard Work Never Taught You | Field & Harvest Co.",
  description: "The engineered auxiliary trimmer handle that returns your spine to neutral posture during operation. Plumb-Set™ Geometry, Hold-Fast™ Grip, lifetime warranty, 60-day money-back. For yardsmen over 50 who still do their own yard.",
  openGraph: {
    title: "The 3-Minute Fix For Trimmer Back",
    description: "Bolt-on auxiliary handle that returns your spine to neutral posture. Engineered for yardsmen over 50. Lifetime warranty, 60-day money-back.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/the-yeoman-method",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 3-Minute Fix For Trimmer Back",
    description: "Bolt-on auxiliary handle that returns your spine to neutral posture. Engineered for yardsmen over 50.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
