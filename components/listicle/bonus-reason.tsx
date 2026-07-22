import { Star, Droplets, Sprout, Sparkles, Coffee, FlaskConical } from 'lucide-react'
import { CtaButton } from '@/components/listicle/cta-button'

type Ingredient = {
  icon: typeof Droplets
  name: string
  sub: string
  does: string
  evidence: string
}

const ingredients: Ingredient[] = [
  {
    icon: Droplets,
    name: 'Grip Geometry',
    sub: 'The Plumb-Set™',
    does: 'Extends your grip out to the angle where your spine stays vertical and you stop bending.',
    evidence: 'The factory loop sits low and pulls you into the bend.',
  },
  {
    icon: Sprout,
    name: 'Bracket',
    sub: 'The Hold-Fast™',
    does: 'Reinforced dual-contact steel locks onto the shaft and holds where you set it, all season.',
    evidence: 'You are stuck with the single grip it came with.',
  },
  {
    icon: Sparkles,
    name: 'Fit',
    sub: '26 to 28mm',
    does: 'Slides up or down the shaft so you set it to your own height and reach.',
    evidence: 'Fixed in one spot, built for nobody in particular.',
  },
  {
    icon: Coffee,
    name: 'Build',
    sub: 'Aluminum-Alloy',
    does: 'Light at 1.65 lb with no flex, backed by a lifetime warranty.',
    evidence: 'No upgrade, and no warranty on your posture.',
  },
]

export function BonusReason() {
  return (
    <section className="border-y-2 border-primary bg-accent text-accent-foreground">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-secondary-foreground">
          <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
          <span className="text-sm font-semibold tracking-[0.15em] uppercase">
            Bonus <span className="text-primary">Reason</span>
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl">
          What The Handle On Your Trimmer{' '}
          <span className="text-primary">Never Had</span>
        </h2>

        {/* Intro copy */}
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty">
          The handle your trimmer shipped with was built to be cheap, not comfortable. Here is the engineering that changes how your back feels after the yard.
        </p>

        {/* Ingredient table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-[minmax(7.5rem,1fr)_2fr] bg-secondary text-secondary-foreground">
            <div className="px-4 py-3 text-xs font-semibold tracking-[0.15em] uppercase sm:text-sm">
              Component
            </div>
            <div className="px-4 py-3 text-xs font-semibold tracking-[0.15em] uppercase sm:text-sm">
              What It Does
            </div>
          </div>

          {/* Rows */}
          {ingredients.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.name}
                className={`grid grid-cols-[minmax(7.5rem,1fr)_2fr] ${
                  i > 0 ? 'border-t border-border' : ''
                }`}
              >
                <div className="flex flex-col items-center justify-center gap-2 border-r border-border px-3 py-6 text-center">
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  <span className="font-serif text-base font-semibold leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-primary uppercase">
                    {item.sub}
                  </span>
                </div>
                <div className="px-4 py-6">
                  <p className="text-base leading-relaxed text-pretty">{item.does}</p>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">
                    <span className="font-semibold uppercase tracking-wide">Factory handle:</span>{' '}
                    {item.evidence}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Peer-reviewed badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-card px-5 py-2 text-card-foreground">
            <FlaskConical className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
              Engineered, Not Stamped.
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <CtaButton
            label="See How It Works"
            location="bonus-section"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}
