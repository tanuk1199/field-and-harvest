import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Weed Eating Doesn’t Have To Wreck Your Back — Here’s Why It Has Been | Field & Harvest Co.",
  description: "Most men think a sore back is just part of weed eating. It isn’t — it’s the position your trimmer forces you into. Why it’s been hurting, and why it doesn’t have to. Save Up To 43% Off + 2 Free Yardwork Guides.",
  openGraph: {
    title: "Weed Eating Doesn’t Have To Wreck Your Back",
    description: "It was never the work. It’s the position your trimmer forces you into — and it doesn’t have to be that way.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/it-doesnt-have-to-hurt",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weed Eating Doesn’t Have To Wreck Your Back",
    description: "It was never the work. It’s the position your trimmer forces you into.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
