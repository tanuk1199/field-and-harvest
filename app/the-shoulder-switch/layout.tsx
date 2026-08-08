import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Reasons Why Thousands Of Men Are Using This For Shoulder Support Doing Yardwork",
  description:
    "Every shoulder brace on the shelf was designed for a man who is already hurt. The Yeoman Rig was built for a man who is still working. Adjusts at two points, wears over your shirt, 60-day trial and an unlimited lifetime warranty.",
  alternates: {
    canonical: "https://explore.fieldandharvestco.com/the-shoulder-switch",
  },
  openGraph: {
    title: "5 Reasons Why Thousands Of Men Are Using This For Shoulder Support Doing Yardwork",
    description:
      "Built like a weight belt, not a medical brace. The Yeoman Rig holds the shoulder while the arm is out, not after the job is over.",
    url: "https://explore.fieldandharvestco.com/the-shoulder-switch",
    siteName: "Field & Harvest Co.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Reasons Why Thousands Of Men Are Using This For Shoulder Support Doing Yardwork",
    description:
      "Built like a weight belt, not a medical brace. The Yeoman Rig holds the shoulder while the arm is out, not after the job is over.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
