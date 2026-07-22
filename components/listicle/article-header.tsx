import type { ReactNode } from 'react'

// Headline: 5 Reasons Men Over 50 Who Do Their Own Yard Are + colored Ditching the Factory Trimmer Handle + 
const defaultHeadline: ReactNode = (
  <>
    5 Reasons Men Over 50 Who Do Their Own Yard Are{' '}
    <span className="text-primary">Ditching the Factory Trimmer Handle</span>{' '}
  </>
)

const defaultIntro: ReactNode = (
  <>
    <span className="font-bold">If you’re over 50 and still do your own trimming, read this before your next Saturday.</span> Your back does not lock up because of your age. It is the handle the trimmer came with, and there is a fix most guys have never heard of.
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
