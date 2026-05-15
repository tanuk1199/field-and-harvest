import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Yeoman Yoke™ — The Father's Day Gift That Takes The Trimmer Off His Arms | Field & Harvest Co.",
  description: "Skip the tie. If the man in your life spends his Saturdays trimming his own yard, this is the harness that puts the trimmer's weight on his shoulders instead of his arms. 5 reasons it's the Father's Day gift he'll use every Saturday. Save Up To 41% Off + 2 Free Yardwork Guides. Lifetime warranty, 60-day money-back.",
  openGraph: {
    title: "The Father's Day Gift That Takes The Trimmer Off His Arms",
    description: "5 reasons it's saving dads' backs all summer. Save Up To 41% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/dads-trimmer-harness",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Using_Harness.gif?v=1778815786",
        alt: "The Yeoman Yoke harness carrying a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Father's Day Gift That Takes The Trimmer Off His Arms",
    description: "5 reasons it's saving dads' backs all summer. Save Up To 41% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Using_Harness.gif?v=1778815786",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
