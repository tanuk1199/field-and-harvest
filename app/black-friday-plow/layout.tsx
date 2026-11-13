import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Early Access Black Friday Sale · The Yeoman Plow | Field & Harvest Co.",
  description:
    "Clear the driveway with less back pain and less effort. A 36-inch blade on wheels you push, never lift. $113 off in the Early Access Black Friday Sale.",
  openGraph: {
    title: "Early Access Black Friday Sale · $113 Off The Yeoman Plow",
    description: "A 36-inch blade on wheels. Push the snow, never lift it.",
    type: "website",
    url: "https://explore.fieldandharvestco.com/black-friday-plow",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/plow36-driveway.jpg?v=1794550754&width=1200",
        alt: "Pushing a driveway clear with the Yeoman Plow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Access Black Friday Sale · $113 Off The Yeoman Plow",
    description: "A 36-inch blade on wheels. Push the snow, never lift it.",
    images: ["https://cdn.shopify.com/s/files/1/0651/8299/0379/files/plow36-driveway.jpg?v=1794550754&width=1200"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
