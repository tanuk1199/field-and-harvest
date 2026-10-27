import type { CSSProperties } from 'react'
import { PromoBar } from '@/components/listicle-gpw/promo-bar'
import { ArticleHeader } from '@/components/listicle-gpw/article-header'
import { ComparisonTable } from '@/components/listicle-gpw/comparison-table'
import { Reason } from '@/components/listicle-gpw/reason'
import { Timeline } from '@/components/listicle-gpw/timeline'
import { FinalCta } from '@/components/listicle-gpw/final-cta'
import { Guarantee } from '@/components/listicle-gpw/guarantee'
import { Reviews } from '@/components/listicle-gpw/reviews'
import { EmailSignup } from '@/components/listicle-gpw/email-signup'
import { SiteFooter } from '@/components/listicle-gpw/site-footer'
import { reasons } from '@/lib/gpw-reasons'

// ============================================================
// /no-ladder-no-crew : THE GABLE PRESSURE WASHER WAND (solution-aware, LP12, PREVIEW)
// Built on the CANONICAL comparison-above-fold template: components/listicle/* copied verbatim
// into an isolated set at components/listicle-gpw/* + lib/gpw-reasons.ts, then only the copy,
// images and links changed. The table is The Gable vs a ladder vs hiring a pro.
//
// Template sections changed, all deliberate:
//   1. Announcement bar replaced by the PDP's Halloween promo bar (components/listicle-gpw/
//      promo-bar.tsx, sale name in components/listicle-gpw/sale.ts so it renames in one place).
//   2. Bonus reason (clinical ingredient table) dropped: there is no formula to tabulate, and the
//      comparison table already carries the contrast.
//   3. Countdown, "Stock Level" and "Sell-Out Risk" removed from the offer box. No scarcity.
//   4. Review masthead count removed and dates are the real review dates.
//   5. Timeline disclaimer and footer disclaimer removed (no-hedging rule).
// ============================================================

// The Gable PDP palette (same as the Sweep/Bunkhouse family): cream, espresso, terracotta.
const theme = {
  '--background': 'oklch(0.966 0.013 79)',
  '--foreground': 'oklch(0.235 0.021 56)',
  '--card': 'oklch(0.992 0.007 82)',
  '--card-foreground': 'oklch(0.235 0.021 56)',
  '--primary': 'oklch(0.565 0.142 41)',
  '--primary-foreground': 'oklch(0.985 0.009 82)',
  '--secondary': 'oklch(0.285 0.035 46)',
  '--secondary-foreground': 'oklch(0.957 0.015 79)',
  '--muted': 'oklch(0.932 0.016 77)',
  '--muted-foreground': 'oklch(0.475 0.026 52)',
  '--accent': 'oklch(0.903 0.047 72)',
  '--accent-foreground': 'oklch(0.285 0.035 46)',
  '--border': 'oklch(0.872 0.019 71)',
  '--input': 'oklch(0.872 0.019 71)',
  '--ring': 'oklch(0.565 0.142 41)',
  '--font-serif': "'Cormorant Garamond', ui-serif, Georgia, serif",
} as CSSProperties

// The accent span stays the short half.
const headline = (
  <>
    6 Reasons Homeowners Are Cleaning Their Gutters With The Gable{' '}
    <span className="text-primary">Instead Of A Ladder Or A Crew</span>
  </>
)

const intro = (
  <>
    <span className="font-bold">Read this before you drag the ladder out this fall.</span> The second-story gutters
    still need flushing and the siding still needs washing. A ladder puts you up there with the washer in your hands. A crew
    sends a bill every year. The Gable does both jobs from the lawn.
  </>
)

export default function Page() {
  return (
    <div style={theme} className="min-h-screen bg-background font-sans text-foreground">
      <PromoBar />

      <main>
        <ArticleHeader headline={headline} intro={intro} />
        <ComparisonTable />

        {reasons.map((reason) => (
          <div key={reason.number}>
            <Reason data={reason} />
          </div>
        ))}

        <Timeline />
        <FinalCta />
        <Guarantee />
        <Reviews />
        <EmailSignup />
      </main>

      <SiteFooter />
    </div>
  )
}
