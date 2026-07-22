import type { CSSProperties } from 'react'
import { AnnouncementBar } from '@/components/listicle/announcement-bar'
import { ArticleHeader } from '@/components/listicle/article-header'
import { ComparisonTable } from '@/components/listicle/comparison-table'
import { Reason } from '@/components/listicle/reason'
import { BonusReason } from '@/components/listicle/bonus-reason'
import { Timeline } from '@/components/listicle/timeline'
import { FinalCta } from '@/components/listicle/final-cta'
import { HoursCalculator } from '@/components/listicle/hours-calculator'
import { Guarantee } from '@/components/listicle/guarantee'
import { Reviews } from '@/components/listicle/reviews'
import { EmailSignup } from '@/components/listicle/email-signup'
import { SiteFooter } from '@/components/listicle/site-footer'
import { reasons } from '@/lib/reasons'

// Scope the template's warm F&H palette (cream / terracotta / espresso) to this
// page only, so it renders as designed regardless of the host app's tokens.
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

export default function Page() {
  return (
    <div style={theme} className="min-h-screen bg-background font-sans text-foreground">
      <AnnouncementBar />

      <main>
        <ArticleHeader />
        <ComparisonTable />

        {reasons.map((reason) => (
          <div key={reason.number}>
            <Reason data={reason} />
            {reason.number === 2 && <BonusReason />}
          </div>
        ))}

        <Timeline />
        <FinalCta />
        <HoursCalculator />
        <Guarantee />
        <Reviews />
        <EmailSignup />
      </main>

      <SiteFooter />
    </div>
  )
}
