import type { Metadata } from "next"

const IMG = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Monstera_in_a_bright_living_room.png?v=1775182648&width=1200"

export const metadata: Metadata = {
  title: "The Holiday Gift For The Plant Parent · Bower Poles | Field & Harvest Co.",
  description:
    "The holiday gift for the plant parent: Bower Poles bend by hand into any shape and hold it, and the bark-like coco coir gives aerial roots something to climb. Early Access Black Friday, up to $51 off, 2 free guides and a lifetime warranty.",
  openGraph: {
    title: "The Holiday Gift For The Plant Parent · Bower Poles",
    description: "Bend it by hand, it holds the shape, their plant climbs it. Up to $51 off for Early Access Black Friday.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/holiday-gift-bower-poles",
    images: [{ url: IMG, alt: "A Monstera climbing a Bower Pole bent into a hoop and spiral" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Holiday Gift For The Plant Parent · Bower Poles",
    description: "Up to $51 off Bower Poles, plus 2 free guides.",
    images: [IMG],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
