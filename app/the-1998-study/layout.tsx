import type { Metadata } from "next"

// OG image is the label-vs-absorbed chart, not the bottle. A product shot in the preview turns an
// editorial link into an ad before anyone reads a word, and this page's whole standing is that it
// is reporting something.
const OG_IMAGE = "https://explore.fieldandharvestco.com/fyo-label-vs-absorbed.webp"

// ⚠ NO NUMBER IN THE TITLE BEYOND THE ONES THAT ARE SOURCED. "Eight people" and "1998" both come
// straight from the paper's abstract, so both are safe in a share preview, which is the one surface
// that outlives an edit. There is no invented figure anywhere in this metadata.
// ⚠ Publisher masthead means the title suffix is the publication, not the brand. Keep them in
// agreement or a share preview names a publication the page does not carry.
// ⚠ DATE: the on-page byline and publishedTime must move together or a preview contradicts the
// page it links to.
export const metadata: Metadata = {
  title: "I Read The Study Behind Every Black Pepper Turmeric. It Had Eight People In It. | Healthy Living",
  description:
    "The 2000% absorption figure on turmeric bottles traces back to a single 1998 paper with eight volunteers in its human arm. Here is what that paper actually says, who was on it, and what the twenty-seven years since have and have not confirmed.",
  openGraph: {
    title: "The Study Behind Every Black Pepper Turmeric Had Eight People In It",
    description:
      "Two grams of curcumin on its own produced serum levels described as undetectable or very low. That half of the finding has never been in dispute, and it is the half nobody quotes.",
    type: "article",
    publishedTime: "2026-03-18",
    url: "https://explore.fieldandharvestco.com/the-1998-study",
    images: [
      {
        url: OG_IMAGE,
        alt: "A chart comparing the milligrams printed on a turmeric label with the amount that reaches the bloodstream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Study Behind Every Black Pepper Turmeric Had Eight People In It",
    description:
      "One 1998 paper, eight volunteers, and a figure that ended up on half the shelf. Here is what it actually says.",
    images: [OG_IMAGE],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
