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
    does: 'It should have its own milligram figure, on its own line. Not turmeric. Curcumin.',
    evidence: 'Often only a combined total for the whole blend.',
  },
  {
    icon: Sprout,
    name: 'Look for the pepper',
    sub: 'Step two',
    does: 'Piperine, black pepper extract, or a branded pepper name. Usually about 5 mg.',
    evidence: 'Printed as a feature, not as a caution.',
  },
  {
    icon: Sparkles,
    name: 'Check the form',
    sub: 'Step three',
    does: 'Look for a named form. Phytosome, or a branded ingredient with a dossier behind it.',
    evidence: 'Powder, extract and 95% curcuminoids are all raw curcumin.',
  },
  {
    icon: Coffee,
    name: 'Count the lines',
    sub: 'Step four',
    does: 'Every active should be listed separately with its own dose beside it.',
    evidence: 'One combined weight tells you nothing about what is in there.',
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
          Seriously, go and get it. It takes about a minute and you do not have to take our word for any of this. Four things to look for on the back.
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
                    <span className="font-semibold uppercase tracking-wide">On the label:</span>{' '}
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
              Check Yours, Then Check Ours.
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
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
