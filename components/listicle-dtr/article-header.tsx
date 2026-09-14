import type { ReactNode } from 'react'

// Defaults are overridden by the page. Kept Sweep-safe so a future route that
// forgets to pass props cannot render another product's copy.
const defaultHeadline: ReactNode = (
  <>
    5 Reasons Homeowners Are Switching To This Lawn Tool{' '}
    <span className="text-primary">And Ditching The Rake</span>
  </>
)

const defaultIntro: ReactNode = (
  <>
    <span className="font-bold">You already own a rake and probably a blower, and the yard still takes you all
    weekend.</span> Neither of them picks anything up. That is the part nobody solves.
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
          <p className="text-muted-foreground">Last Updated Sep 14, 2026</p>
        </div>
      </div>

      <blockquote className="mt-6 border-l-4 border-primary pl-4 text-lg font-medium sm:mt-8 sm:text-xl">
        {intro}
      </blockquote>
    </header>
  )
}
