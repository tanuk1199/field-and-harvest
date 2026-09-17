import type { CSSProperties } from 'react'
import { AnnouncementBar } from '@/components/listicle-nwl/announcement-bar'
import { ArticleHeader } from '@/components/listicle-nwl/article-header'
import { ComparisonTable } from '@/components/listicle-nwl/comparison-table'
import { Reason } from '@/components/listicle-nwl/reason'
import { Timeline } from '@/components/listicle-nwl/timeline'
import { FinalCta } from '@/components/listicle-nwl/final-cta'
import { Guarantee } from '@/components/listicle-nwl/guarantee'
import { Reviews } from '@/components/listicle-nwl/reviews'
import { EmailSignup } from '@/components/listicle-nwl/email-signup'
import { SiteFooter } from '@/components/listicle-nwl/site-footer'
import { reasons } from '@/lib/nwl-reasons'

// ============================================================
// /light-the-whole-corner : THE NIGHTWATCH SOLAR LIGHT
// Built on the CANONICAL comparison-above-fold listicle template, the same one
// behind /the-only-trimmer-handle, /the-black-pepper-problem and
// /ditch-the-rake.
//
// ⭐ CLONED FROM THE TEMPLATE, NOT FROM A LIVE PAGE. Components came from
// Funnels/templates/listicle-comparison-above-fold/components/listicle/*, the
// placeholdered originals. The app's own components/listicle/* has drifted and
// now holds Yeoman Handle copy, so it is NOT a safe clone source. Verified
// after the copy: comparison-table.tsx is 130 lines with 0 data-col markers,
// which is the canonical desktop table and not the black-pepper fork.
//
// ⭐ PER-PAGE COMPONENT ISOLATION IS MANDATORY WITH THIS TEMPLATE. Its
// components hold their copy INTERNALLY and take almost no props, so importing
// another product's set would render that product. This route ships a full
// isolated copy at components/listicle-nwl/* plus lib/nwl-reasons.ts.
//
// ⭐ PRODUCT-AWARE AND BROAD, on the owner's instruction. He already knows solar
// motion lights exist. Each reason is therefore a DISTINCT ANGLE rather than
// five angles on one theme: coverage, off-grid placement, the season, the
// install, and the risk reversal. The above-fold table is the decision he is
// actually having, which is this against a wired floodlight and against a
// cheap single-head solar light.
//
// FIVE TEMPLATE DEVICES DELIBERATELY REMOVED:
//   1. The announcement-bar countdown. Nothing on this page expires.
//   2. "Deal Ending In" and "Bottles Left" in the offer box.
//   3. The "Sell-Out Risk: High" bar and its gift line. INVENTORY RUNS
//      CONTINUE, so it never shows out of stock and a stock claim could not be
//      true. There are also no gifts: the gift ladder is modelled, not built.
//   4. The "Verified Buyer" review wall and its aggregate rating. THIS SKU HAS
//      ZERO ORDERS. Replaced with verbatim published reviews of OTHER
//      three-head solar lights, labeled as such in the heading, the card
//      footers and the site footer.
//   5. The bonus clinical-ingredient table. Nothing here needs it.
//
// CLAIMS HELD OFF THE PAGE, per Solar Flood Light/sourcing/SOURCE-2026-09-15.md:
// no runtime or all-night claim, no battery capacity, no remote on/off, no
// replaceable battery, no waterproof (IP65 is stated as weatherproof). The
// 10-to-20-second hold is disclosed honestly in reason 3's bullets, where mode 3
// is offered as the answer for anyone who wants it to stay on.
//
// ⚠ THE PDP IS STILL DRAFT, so PRODUCT_URL 404s until it is published.
// ============================================================

// Palette borrowed from the Nightwatch PDP: cool paper, cool ink, sodium-vapor
// amber. Deliberately NOT the Sweep's warm cream and terracotta, so the two
// pages do not read as the same product.
const theme = {
  '--background': 'oklch(0.972 0.003 106)',
  '--foreground': 'oklch(0.215 0.012 265)',
  '--card': 'oklch(1 0 0)',
  '--card-foreground': 'oklch(0.215 0.012 265)',
  '--primary': 'oklch(0.688 0.135 72)',
  '--primary-foreground': 'oklch(0.185 0.018 68)',
  '--secondary': 'oklch(0.238 0.017 262)',
  '--secondary-foreground': 'oklch(0.962 0.004 106)',
  '--muted': 'oklch(0.941 0.004 106)',
  '--muted-foreground': 'oklch(0.472 0.016 262)',
  '--accent': 'oklch(0.925 0.043 79)',
  '--accent-foreground': 'oklch(0.238 0.017 262)',
  '--border': 'oklch(0.886 0.005 106)',
  '--input': 'oklch(0.886 0.005 106)',
  '--ring': 'oklch(0.688 0.135 72)',
  '--font-serif': "'Cormorant Garamond', ui-serif, Georgia, serif",
} as CSSProperties

const headline = (
  <>
    5 Reasons Homeowners Are Putting This Solar Light On The One Corner{' '}
    <span className="text-primary">Nobody Can See Into</span>.
  </>
)

const intro = (
  <>
    <strong>You can name the dark part of your property without going outside.</strong> The side
    gate. The far end of the drive. Past where the porch light gives up. Most houses are not unlit,
    they are lit in the places that were easy to wire, and dark everywhere a cable could not
    sensibly go.
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
        <EmailSignup />
      </main>

      <SiteFooter />
    </div>
  )
}
