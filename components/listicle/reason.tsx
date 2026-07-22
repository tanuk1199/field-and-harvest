import Image from 'next/image'
import { CtaButton } from '@/components/listicle/cta-button'

export interface ReasonData {
  number: number
  title: string
  titleAccent?: string
  paragraphs: string[]
  bullets: string[]
  image: string
  imageAlt: string
  imageAspect?: string
  cta?: string
}

/**
 * Reason block. Desktop: image left, copy right (no alternation).
 * Mobile: number + headline first, then a square image, then copy.
 */
export function Reason({ data }: { data: ReasonData }) {
  const Heading = (
    <>
      {data.number}. {data.title}
      {data.titleAccent ? <span className="text-primary"> {data.titleAccent}</span> : null}
    </>
  )

  return (
    <article
      className="mx-auto grid max-w-5xl scroll-mt-24 items-center gap-4 px-4 py-8 md:grid-cols-2 md:gap-12 md:py-10"
      id={`reason-${data.number}`}
    >
      {/* Mobile-only headline, placed before the image */}
      <h2 className="font-serif text-2xl leading-tight font-semibold text-balance text-foreground md:hidden">
        {Heading}
      </h2>

      <figure className="overflow-hidden rounded-xl border border-border">
        <Image
          src={data.image || '/placeholder.svg'}
          alt={data.imageAlt}
          width={1000}
          height={1000}
          className={`${data.imageAspect ?? 'aspect-square'} h-full w-full object-cover`}
        />
      </figure>

      <div>
        {/* Desktop-only headline */}
        <h2 className="hidden font-serif text-2xl leading-tight font-semibold text-balance text-foreground md:block lg:text-3xl">
          {Heading}
        </h2>

        <div className="space-y-4 text-base leading-relaxed text-pretty text-foreground/90 md:mt-4">
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {data.bullets.length > 0 && (
          <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-primary">
            {data.bullets.map((b, i) => (
              <li key={i} className="text-base leading-relaxed text-foreground/90">
                {b}
              </li>
            ))}
          </ul>
        )}

        {data.cta && (
          <CtaButton
            label={data.cta}
            location={`reason-${data.number}`}
            className="mt-6 w-full sm:w-auto"
          />
        )}
      </div>
    </article>
  )
}
