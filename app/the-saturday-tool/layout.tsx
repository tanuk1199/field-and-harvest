import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Saturday Tool That Lives By Your Back Door | Field & Harvest Co.',
  description:
    "The carrier for the yard chores nobody photographs — weeding, leaf piles, eggs from the coop, deadheading, twigs after a storm. Pockets that don't quit. Hands that stay free. Save up to 46% + 2 free yardwork guides.",
  openGraph: {
    title: 'The Saturday Tool That Lives By Your Back Door',
    description:
      "Yard cleanup, weeding, deadheading, leaf piles, eggs, the harvest at noon. Pockets that don't quit. Hands that stay free.",
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
