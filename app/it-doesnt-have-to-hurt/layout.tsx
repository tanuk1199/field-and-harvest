import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The back pain from weed eating you have learned to live with might not have to be permanent | Field & Harvest Co.",
  description: "Most back pain from weed eating is not what you think it is. It is one specific design flaw in the trimmer. Here is what we know about how to fix it. Save Up To 43% Off + 2 Free Yardwork Guides.",
  openGraph: {
    title: "The back pain from weed eating you have learned to live with might not have to be permanent.",
    description: "Most back pain from weed eating is not what you think it is. It is one specific design flaw in the trimmer.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/its-not-aging",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
        alt: "The Yeoman Handle attached to a string trimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The back pain from weed eating you have learned to live with might not have to be permanent.",
    description: "Most back pain from weed eating is not what you think it is.",
    images: [
      "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
