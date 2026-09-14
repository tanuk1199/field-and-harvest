import type { CSSProperties } from 'react'
import { AnnouncementBar } from '@/components/listicle-dtr/announcement-bar'
import { ArticleHeader } from '@/components/listicle-dtr/article-header'
import { ComparisonTable } from '@/components/listicle-dtr/comparison-table'
import { Reason } from '@/components/listicle-dtr/reason'
import { BonusReason } from '@/components/listicle-dtr/bonus-reason'
import { Timeline } from '@/components/listicle-dtr/timeline'
import { FinalCta } from '@/components/listicle-dtr/final-cta'
import { Guarantee } from '@/components/listicle-dtr/guarantee'
import { Reviews } from '@/components/listicle-dtr/reviews'
import { EmailSignup } from '@/components/listicle-dtr/email-signup'
import { SiteFooter } from '@/components/listicle-dtr/site-footer'
import { reasons } from '@/lib/dtr-reasons'

// ============================================================
// /ditch-the-rake : THE YEOMAN SWEEP
// Built on the CANONICAL comparison-above-fold listicle template, the same one
// behind /the-only-trimmer-handle and /the-black-pepper-problem. Not rebuilt
// from scratch: the template's components were copied verbatim and only the
// copy, palette and images were changed.
//
// ⭐ PER-PAGE COMPONENT ISOLATION IS MANDATORY WITH THIS TEMPLATE. Its
// components hold their copy INTERNALLY and take almost no props, so importing
// `components/listicle/*` would render Yeoman HANDLE content and
// `components/listicle-bpp/*` would render turmeric. This route ships a full
// isolated copy at `components/listicle-dtr/*` plus `lib/dtr-reasons.ts`.
// Never point a second product at another product's set.
//
// ⭐ SOLUTION-AWARE, and the comparison is the reason the template was chosen.
// The buyer already owns a rake and a blower and is deciding between tools, not
// learning that leaves exist. The above-fold table is Sweep vs blower vs rake,
// which is exactly the argument he is already having with himself.
//
// ⚠ THE PDP MAKES THE SAME ARGUMENT AND THAT IS FINE. Tobenna's call. The page
// he lands on afterwards confirms rather than repeats, because the listicle
// closes on the comparison and the PDP opens on the offer.
//
// FOUR TEMPLATE DEVICES DELIBERATELY REMOVED OR REPLACED:
//   1. The countdown in the announcement bar. Nothing here expires.
//   2. The "Verified Buyer" review wall and its 4.6 / 5,800 masthead. THIS SKU
//      HAS ZERO COLLECTED REVIEWS. Replaced with verbatim published reviews of
//      OTHER push lawn sweepers, labelled as such in the heading, in the card
//      footers and in the site footer.
//   3. The bonus section's "go get your bottle" check, reaimed at his own lawn.
//      Still a guided check of something he already owns, still zero claims.
//   4. Scarcity language in the final CTA. Inventory runs CONTINUE; it never
//      shows out of stock, so a stock claim could not be true.
//
// CLAIMS: pain is scoped to the MOTION and paired with the disqualifier, per
// rule 1 of `Push Lawn Sweeper/README.md`. "Easy" never appears in a promise.
// Dog waste is never claimed. No brand is named in the comparison.
// ============================================================

// The Yeoman Sweep PDP palette: cream ground, espresso ink, terracotta accent.
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

// ⚠ THE ACCENT SPAN IS THE SHORT HALF, ALWAYS. The template colours whatever
// sits in the span, so a long accent inverts the emphasis and reads as a broken
// layout rather than a highlight. Tobenna's line named the rake, the blower and
// the bending; all three are kept, with the accent held to the closing clause.
const headline = (
  <>
    5 Reasons Homeowners Are Switching To This Lawn Tool And Ditching The Rake,{' '}
    <span className="text-primary">The Blower And The Bending</span>
  </>
)

const intro = (
  <>
    <span className="font-bold">
      You already own a rake, and probably a blower, and the yard still takes the whole weekend.
    </span>{' '}
    Neither of them picks anything up. One gathers and one relocates, and both of them end the same way, with you
    on your knees holding a bag open.
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
            {/* The guided lawn check lands after reason 2, once the blower is
                dead and before the bending argument, so he goes and looks at the
                pile the blower left. */}
            {reason.number === 2 && <BonusReason />}
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
