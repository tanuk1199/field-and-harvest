import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why You Hate Weed Eating — And The 3-Minute Fix | Field & Harvest Co.",
  description: "If you hate weed eating, it isn't you. It's the handle. 3 reasons the factory trimmer handle makes the job miserable, and the 3-minute bolt-on that fixes all of them. Save Up To 43% Off + 2 Free Yardwork Guides. Lifetime warranty.",
  openGraph: {
    title: "If You Hate Weed Eating, This Is Why.",
    description: "3 reasons the factory handle makes trimming miserable. And the 3-minute fix.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/why-trimming-sucks",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260525_043355_27a0bd97-130c-4349-b236-fc334383f7de.png?v=1779683808",
        alt: "Why trimming sucks — the factory handle is the cause",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "If You Hate Weed Eating, This Is Why.",
    description: "3 reasons trimming sucks. And the 3-minute fix.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260525_043355_27a0bd97-130c-4349-b236-fc334383f7de.png?v=1779683808",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
