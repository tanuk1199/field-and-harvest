import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Reasons Men Over 50 Are Ditching the Factory Trimmer Handle | Field & Harvest Co.",
  description:
    "5 reasons men over 50 who do their own yard are switching off the factory trimmer handle. Extend your grip out, stand up straight, and finish without the next-day ache. Bolts onto the trimmer you already own. Save Up To 43% + 2 Free Yardwork Guides. Lifetime warranty, 60-day money-back.",
  openGraph: {
    title: "Ditching the Factory Trimmer Handle",
    description:
      "Men over 50 who do their own yard are switching. Save Up To 43% Off + 2 Free Yardwork Guides. Lifetime warranty, 60-day money-back.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/the-only-trimmer-handle",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ditching the Factory Trimmer Handle",
    description: "Men over 50 who do their own yard are switching. Save Up To 43% + 2 Free Yardwork Guides.",
    images: ["https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
