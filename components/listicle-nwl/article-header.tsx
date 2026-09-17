import type { ReactNode } from 'react'

// Headline: 5 Reasons Homeowners Are Putting This Solar Light On  + colored The One Corner Nobody Can See Into + .
const defaultHeadline: ReactNode = (
  <>
    5 Reasons Homeowners Are Putting This Solar Light On {' '}
    <span className="text-primary">The One Corner Nobody Can See Into</span>{' '}.
  </>
)

const defaultIntro: ReactNode = (
  <>
    <span className="font-bold">You can name the dark part of your property without going outside.</span>  The side gate. The far end of the drive. Past where the porch light gives up. Most houses are not unlit, they are lit in the places that were easy to wire, and dark everywhere a cable could not sensibly go.
  </>
)

export function ArticleHeader({
  headline = defaultHeadline,
  intro = defaultIntro,
}: {
  headline?: ReactNode
  intro?: ReactNode
} = {}) {
  return (
    <header className="mx-auto max-w-5xl px-4 pt-6 pb-5 sm:pt-12 sm:pb-6">
      <h1 className="text-balance text-center font-serif text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl sm:leading-[1.1] sm:tracking-tight md:text-6xl">
        {headline}
      </h1>

      <div className="mt-6 flex items-center gap-3 sm:mt-8">
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-secondary font-serif text-lg font-semibold text-secondary-foreground">WB</span>
        <div className="text-sm leading-snug">
          <p>
            By <span className="font-bold">Walt Brenner</span>
          </p>
          <p className="text-muted-foreground">Last Updated Sep 16, 2026</p>
        </div>
      </div>

      <blockquote className="mt-6 border-l-4 border-primary pl-4 text-lg font-medium sm:mt-8 sm:text-xl">
        {intro}
      </blockquote>
    </header>
  )
}
