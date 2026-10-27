import type { ReactNode } from 'react'

// Default copy for /no-ladder-no-crew. The route passes its own headline + intro anyway.
const defaultHeadline: ReactNode = (
  <>
    6 Reasons Homeowners Are Cleaning Their Gutters With The Gable{' '}
    <span className="text-primary">Instead Of A Ladder Or A Crew</span>
  </>
)

const defaultIntro: ReactNode = (
  <>
    <span className="font-bold">Read this before you drag the ladder out this fall.</span> The gutters still need flushing and the second story still needs washing. There is a way to do both from the lawn.
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
      <h1 className="text-balance text-center font-serif text-[1.95rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[3.4rem] sm:leading-[1.08] sm:tracking-tight md:text-[4rem]">
        {headline}
      </h1>

      <div className="mt-6 flex items-center gap-3 sm:mt-8">
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-secondary font-serif text-lg font-semibold text-secondary-foreground">WB</span>
        <div className="text-sm leading-snug">
          <p>
            By <span className="font-bold">Walt Brenner</span>
          </p>
          <p className="text-muted-foreground">Last Updated Oct 26, 2026</p>
        </div>
      </div>

      <blockquote className="mt-6 border-l-4 border-primary pl-4 text-lg font-medium sm:mt-8 sm:text-xl">
        {intro}
      </blockquote>
    </header>
  )
}
