import type { CSSProperties } from 'react'
import { AnnouncementBar } from '@/components/listicle-stph/announcement-bar'
import { ArticleHeader } from '@/components/listicle-stph/article-header'
import { ComparisonTable } from '@/components/listicle-stph/comparison-table'
import { Reason } from '@/components/listicle-stph/reason'
import { Timeline } from '@/components/listicle-stph/timeline'
import { FinalCta } from '@/components/listicle-stph/final-cta'
import { Guarantee } from '@/components/listicle-stph/guarantee'
import { Reviews } from '@/components/listicle-stph/reviews'
import { SiteFooter } from '@/components/listicle-stph/site-footer'
import { reasons } from '@/lib/stph-reasons'

// ============================================================
// /swapping-the-propane-heater : THE BUNKHOUSE DIESEL HEATER, SOLUTION AWARE (LANDER_TAG "stph")
// The reader already sits a deer blind with a propane heater (or nothing) and is shopping for a
// better kind. Fed from a third-party Facebook Page with Learn More and propane-comparison creative.
// Job: make the swap from propane to vented diesel, then hand off to the Bunkhouse PDP.
// Sibling, product aware: /hunt-the-last-hour (LP10).
//
// Built on the CANONICAL comparison-above-fold template (components/listicle/*), copied into an
// isolated set at components/listicle-stph/* + lib/stph-reasons.ts. The shared set holds Yeoman
// Handle copy internally, so never point this page at it.
//
// Removed from the template: countdown timer, hours calculator, bonus reason, email signup
// (it promised a discount it could not send), the timeline and footer disclaimers, the
// "Stock Level / Sell-Out Risk" lines and the invented review wall.
// Banner = the PDP promo bar, ported (SALE_NAME in announcement-bar.tsx, rename after Oct 31).
// NO PRICES. The only money figure is the banner's $161 saving.
// Comparison columns are categories only. No brand is named anywhere.
// ============================================================

// The F&H PDP palette: cream ground, espresso ink, terracotta accent (same as /ditch-the-rake).
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

// The accent span is the short half, always (a long accent reads as a broken layout).
// Reason count lives here AND in layout.tsx metadata: keep them in sync with lib/stph-reasons.ts.
const headline = (
  <>
    {reasons.length} Reasons Hunters Are Swapping The Propane Heater For Diesel And{' '}
    <span className="text-primary">Staying In The Blind Till Dark</span>
  </>
)

const intro = (
  <>
    <span className="font-bold">If you already sit with a propane heater, read this before your next cold sit.</span>{' '}
    The heat was never the problem. Where it burns is. A vented diesel heater burns outside the blind and sends in
    only warm, dry air, so you are still in your chair at last light, when the deer move.
  </>
)

export default function Page() {
  return (
    <div style={theme} className="min-h-screen bg-background font-sans text-foreground">
      <AnnouncementBar />

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
      </main>

      <SiteFooter />
    </div>
  )
}
