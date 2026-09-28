import type { Metadata } from "next"

// ⚠ Every route needs its own layout.tsx, or it inherits the root's Grange Carrier title.
const OG = "https://explore.fieldandharvestco.com/lcw-hand-on-back.webp"

export const metadata: Metadata = {
  title: "3 Reasons Your Back Hurts After Fall Leaf Cleanup | Field & Harvest Co.",
  description:
    "It is not just your age. Three reasons fall leaf cleanup wrecks your lower back, why the blower and the brace never fixed it, and the one part of the job that causes all of it.",
  openGraph: {
    title: "3 Reasons Your Back Hurts After Fall Leaf Cleanup",
    description: "Why it is not just your age, and what actually stops it.",
    type: "article",
    url: "https://explore.fieldandharvestco.com/leaf-cleanup-wrecks-your-back",
    images: [{ url: OG, alt: "A man straightening up in his fall yard with a hand pressed to his lower back beside a pile of raked leaves" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Reasons Your Back Hurts After Fall Leaf Cleanup",
    description: "Why it is not just your age, and what actually stops it.",
    images: [OG],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
