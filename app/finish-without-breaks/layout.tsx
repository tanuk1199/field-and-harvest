import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Yeoman Handle™ — The Weed Wacker Attachment Saving Men Hours On Saturday | Field & Harvest Co.",
  description: "6 reasons this weed wacker attachment cuts 20-30 minutes off Saturday yard work. No water break at minute 25, no hand-switching at 35, no bent-over slowdown at 45. Save Up To 43% Off + 2 Free Yardwork Guides. Lifetime warranty, 60-day money-back.",
  openGraph: {
    title: "The Weed Wacker Attachment Saving Men Hours On Saturday",
    description: "6 reasons this attachment cuts 20-30 minutes off Saturday yard work. Save Up To 43% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/finish-without-breaks",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Weed Wacker Attachment Saving Men Hours On Saturday",
    description: "6 reasons this attachment cuts 20-30 minutes off Saturday yard work. Save Up To 43% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
