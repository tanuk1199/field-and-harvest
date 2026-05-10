import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'One Pass Through The Yard. Instead Of Five. | The Grange Carrier',
  description:
    "The carrier that holds the loppers, the gloves, the coffee, the basket, the eggs, the rake, and whatever else your yard's about to make you walk back for. Save up to 46% + 2 free yardwork guides.",
  openGraph: {
    title: 'One Pass Through The Yard. Instead Of Five.',
    description:
      "The 12 trips you'll stop making. The carrier the loppers were in the whole time. Save up to 46%.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
