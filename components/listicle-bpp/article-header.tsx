import type { ReactNode } from 'react'

// Defaults are overridden by the page. Kept turmeric-safe so a future route
// that forgets to pass props cannot render Yeoman Handle copy.
const defaultHeadline: ReactNode = (
  <>
    5 Reasons Field &amp; Harvest Turmeric{' '}
    <span className="text-primary">Absorbs When The Last One You Tried Did Not</span>
  </>
)

const defaultIntro: ReactNode = (
  <>
    <span className="font-bold">If you took turmeric for a month and felt nothing, it was probably not the turmeric.</span> Almost every bottle on the shelf adds a few milligrams of black pepper and prints a very large absorption number on the front. Both of those come from the same place.
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
          <p className="text-muted-foreground">Last Updated Jul 21, 2026</p>
        </div>
      </div>

      <blockquote className="mt-6 border-l-4 border-primary pl-4 text-lg font-medium sm:mt-8 sm:text-xl">
        {intro}
      </blockquote>
    </header>
  )
}
