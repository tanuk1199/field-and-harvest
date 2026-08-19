import type { CSSProperties } from 'react'
import { AnnouncementBar } from '@/components/listicle-bpp/announcement-bar'
import { ArticleHeader } from '@/components/listicle-bpp/article-header'
import { ComparisonTable } from '@/components/listicle-bpp/comparison-table'
import { Reason } from '@/components/listicle-bpp/reason'
import { BonusReason } from '@/components/listicle-bpp/bonus-reason'
import { Timeline } from '@/components/listicle-bpp/timeline'
import { FinalCta } from '@/components/listicle-bpp/final-cta'
import { Guarantee } from '@/components/listicle-bpp/guarantee'
import { Reviews } from '@/components/listicle-bpp/reviews'
import { EmailSignup } from '@/components/listicle-bpp/email-signup'
import { SiteFooter } from '@/components/listicle-bpp/site-footer'
import { reasons } from '@/lib/bpp-reasons'

// ============================================================
// /the-black-pepper-problem : TURMERIC CURCUMIN COMPLEX
// Built on the CANONICAL comparison-above-fold listicle template, the same one
// behind /the-only-trimmer-handle. Draft, local only, not pushed.
//
// ⭐ PER-PAGE COMPONENT ISOLATION. The template's components hold their copy
// INTERNALLY and take almost no props, so a second page importing
// `components/listicle/*` would render Yeoman Handle content. This route uses
// `components/listicle-bpp/*` and `lib/bpp-reasons.ts`, a full isolated copy,
// the same convention as the per-page `lib/[prefix]-images.ts` files. Never
// point a second product at the shared set.
//
// ⚠ WHO THIS IS FOR. `1-positioning.md` is explicit that the COLD avatar is
// solution-UNAWARE, and records that the last listicle failed (nobody past 15%
// on /finish-the-yard-in-one-go) and that all 82 ads were repointed at the PDP.
// This page is NOT for cold traffic. It is for the segment the LAB and
// absorption creative manufactures: a man who has just been told by the ad he
// clicked that the absorption claim on his own bottle rests on one 1998 study.
// Measure it on that traffic only.
//
// ⭐ THE SPINE IS NOT "WE ABSORB BETTER". `5-competitive-teardown.md` §2 kills
// that: BioRoot 20x, TurmericXL 45x, Thorne 29x, and Qunol already owns the
// anti-black-pepper position nationally. High absorption is TABLE STAKES.
// The unowned ground is Layer 2b of `3-mechanism.md`: piperine works by
// inhibiting glucuronidation, a drug-metabolizing pathway, and the median buyer
// is 62 and frequently on BP medication, a statin or a blood thinner. Reason 4
// is the page. It states a MECHANISM and sends him to his doctor; it never says
// a product is dangerous and never tells him to stop taking anything.
//
// THREE TEMPLATE DEVICES DELIBERATELY REMOVED, each load-bearing there:
//   1. The countdown in the announcement bar. Nothing here expires, and a timer
//      aimed at a 62-year-old is the dark-pattern fact pattern regulators read.
//   2. "Deal Ending In", "Stock Level: Running Low", "Sell-Out Risk: High" in
//      the final CTA. Manufactured scarcity. Refilled with the real dose facts.
//   3. HoursCalculator. It computes yard hours saved and has no analogue here.
//
// CLAIMS: structure-function only, no brand named anywhere including the table,
// every number footnoted in the site footer, FDA disclaimer present, no em-dashes.
// ============================================================

const theme = {
  '--background': 'oklch(0.965 0.014 78)',
  '--foreground': 'oklch(0.245 0.02 55)',
  '--card': 'oklch(0.99 0.008 80)',
  '--card-foreground': 'oklch(0.245 0.02 55)',
  '--primary': 'oklch(0.56 0.15 38)',
  '--primary-foreground': 'oklch(0.98 0.01 80)',
  '--secondary': 'oklch(0.3 0.04 40)',
  '--secondary-foreground': 'oklch(0.96 0.014 78)',
  '--muted': 'oklch(0.93 0.016 76)',
  '--muted-foreground': 'oklch(0.48 0.025 50)',
  '--accent': 'oklch(0.9 0.05 70)',
  '--accent-foreground': 'oklch(0.3 0.04 40)',
  '--border': 'oklch(0.87 0.02 70)',
  '--input': 'oklch(0.87 0.02 70)',
  '--ring': 'oklch(0.56 0.15 38)',
  '--font-serif': "'Cormorant Garamond', ui-serif, Georgia, serif",
} as CSSProperties

// Tobenna's direction: make the headline our advantage, not their failure.
// ⚠ His draft read "better absorption than any other turmeric you've tried".
// "Any other turmeric" is a BROAD comparative claim and 3-mechanism.md requires
// human PK on our specific form at our dose to carry one, which needs a supplier
// dossier we do not have. Narrowed to the bottle HE tried, which keeps the
// superiority framing, is personal rather than categorical, and is defensible.
// ⚠ THE ACCENT SPAN IS THE SHORT HALF, ALWAYS. The template colours whatever
// sits in the span, so a long accent inverts the emphasis: the first draft put
// 5 words in dark and 8 in terracotta, which made the accent three of five lines
// and read as a broken layout rather than a highlight. Keep the accent to a
// clause, not a sentence.
const headline = (
  <>
    5 Reasons Field &amp; Harvest Turmeric Absorbs{' '}
    <span className="text-primary">When The One You Tried Did Not</span>
  </>
)

// Cut from 55 words to 30. The blockquote is the last thing before the
// comparison table and it was running eight lines on a phone.
const intro = (
  <>
    <span className="font-bold">
      If you took turmeric for a month and felt nothing, it was probably not the turmeric.
    </span>{' '}
    Nearly every bottle adds a few milligrams of black pepper and prints a very large absorption number. Both
    come from the same place.
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
            {/* the bonus block lands right after reason 2, where he has just been
                told the dose is 1% and wants to know what the study actually said */}
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
