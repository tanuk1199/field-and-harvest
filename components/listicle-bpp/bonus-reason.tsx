import { Star, Droplets, Sprout, Sparkles, Coffee, FlaskConical } from 'lucide-react'
import { CtaButton } from '@/components/listicle-bpp/cta-button'

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
    name: 'Find the curcumin',
    sub: 'Step one',
    does: 'Its own milligram figure, on its own line. Not turmeric. Curcumin.',
    evidence: 'Usually just one total for the whole blend.',
  },
  {
    icon: Sprout,
    name: 'Look for the pepper',
    sub: 'Step two',
    does: 'Piperine or a branded pepper name. Usually about 5 mg.',
    evidence: 'Printed as a feature, not a caution.',
  },
  {
    icon: Sparkles,
    name: 'Check the form',
    sub: 'Step three',
    does: 'A named form with a dossier behind it. Phytosome, not powder.',
    evidence: '95% curcuminoids is still raw curcumin.',
  },
  {
    icon: Coffee,
    name: 'Count the lines',
    sub: 'Step four',
    does: 'Every active listed separately, with its own dose.',
    evidence: 'One combined weight tells you nothing.',
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
            Do This <span className="text-primary">Now</span>
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl">
          Go And Get The Bottle{' '}
          <span className="text-primary">You Already Own</span>
        </h2>

        {/* Intro copy */}
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty">
          Kitchen cupboard, garage shelf, wherever it ended up. Four things to look for on the back, and you do not have to take our word for any of it.
        </p>

        {/* Ingredient table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
          {/* Header. Desktop only: on mobile the rows are a single column, so a
              two-column header labels columns that are not there. */}
          <div className="hidden sm:grid sm:grid-cols-[minmax(7.5rem,1fr)_2fr] bg-secondary text-secondary-foreground">
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
                className={`${i > 0 ? 'border-t border-border' : ''} px-4 py-4 sm:grid sm:grid-cols-[minmax(7.5rem,1fr)_2fr] sm:gap-0 sm:px-0 sm:py-0`}
              >
                <div className="flex items-center gap-2.5 sm:flex-col sm:justify-center sm:gap-2 sm:border-r sm:border-border sm:px-3 sm:py-6 sm:text-center">
                  <Icon className="h-5 w-5 shrink-0 text-primary sm:h-7 sm:w-7" aria-hidden="true" />
                  <span className="font-serif text-[17px] font-semibold leading-tight sm:text-base">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.1em] text-primary uppercase sm:text-[11px]">
                    {item.sub}
                  </span>
                </div>
                <div className="mt-1.5 sm:mt-0 sm:px-4 sm:py-6">
                  <p className="text-[15px] leading-snug text-pretty sm:text-base sm:leading-relaxed">{item.does}</p>
                  <p className="mt-1 text-[12px] leading-snug text-muted-foreground sm:mt-2 sm:text-xs">
                    <span className="font-semibold uppercase tracking-wide">On the label:</span>{' '}
                    {item.evidence}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-7 flex justify-center">
          <CtaButton
            label="See What Is In Ours"
            location="bonus-section"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}
