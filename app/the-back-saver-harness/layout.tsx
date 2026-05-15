import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Yeoman Yoke™ — The Trimmer Harness That Saves Your Back | Field & Harvest Co.",
  description: "If your trimmer wrecks your back by the time the front yard's done, it's not the trimmer — it's the way you're carrying it. 5 reasons homeowners are switching to the Yeoman Yoke. Save Up To 41% Off + 2 Free Yardwork Guides. Lifetime warranty, 60-day money-back.",
  openGraph: {
    title: "The Trimmer Harness That Saves Your Back",
    description: "5 reasons your back stops hurting the moment you strap this on. Save Up To 41% Off + 2 Free Yardwork Guides.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/the-back-saver-harness",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Using_Harness.gif?v=1778815786",
        alt: "The Yeoman Yoke harness carrying a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Trimmer Harness That Saves Your Back",
    description: "5 reasons your back stops hurting the moment you strap this on. Save Up To 41% Off + 2 Free Yardwork Guides.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Using_Harness.gif?v=1778815786",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
