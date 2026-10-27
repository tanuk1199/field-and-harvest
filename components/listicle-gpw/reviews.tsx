import { Star } from 'lucide-react'

type Country = 'USA' | 'UK' | 'Australia' | 'New Zealand' | 'Canada'

type Review = {
  name: string
  country: Country
  rating: number
  title: string
  body: string
  date: string
}

const flags: Record<Country, string> = {
  USA: '🇺🇸',
  UK: '🇬🇧',
  Australia: '🇦🇺',
  'New Zealand': '🇳🇿',
  Canada: '🇨🇦',
}

// 6 verbatim 5-star Verified Purchase reviews, real names and real dates, from
// Pressure Washer Wand/research/amazon/reviews.csv (main listing). None mentions a part the Gable
// does not ship. Same corpus the PDP uses.
const reviews: Review[] = [
  {
    name: 'Theo',
    country: 'USA',
    rating: 5,
    title: 'So Happy it Kept Me Off a Ladder',
    body: "Fantastic product. well made. high quality. performs beyond how I expected. Can't say enough. Good high pressure at full extension. Kept my feet on the ground and off a ladder. I have no negatives to report back. Great product at a very good value. Again, really well made. Will last for years. Highly recommend",
    date: 'September 24, 2025',
  },
  {
    name: 'Christopher J.',
    country: 'USA',
    rating: 5,
    title: 'Made washing the house almost pleasant',
    body: "Just finished washing the house using this extended wand. All I can say is why didn't I get this 20 years ago. So much safer than a ladder to reach the gables, and does a better job than just pointing the short wand at it and hoping for the best. I highly recommend. The gutter attachment will be handy too, I just don't have any trees and leaves to deal with.",
    date: 'June 2, 2024',
  },
  {
    name: 'john morris',
    country: 'USA',
    rating: 5,
    title: 'Built very very sturdy',
    body: 'I was a little skeptical when I purchased this, but after assembling it, which was very minimal and turn the pressure washer on what a difference it can extend to 24 feet and the pressure coming out the end is amazing, clean gutters from the ground without using a ladder. Would recommend it for anyone.',
    date: 'September 8, 2024',
  },
  {
    name: 'Christopher Rolbiecki',
    country: 'USA',
    rating: 5,
    title: 'Works great',
    body: 'This pressure washer wand was as expected. Allows me to reach the gutters and siding on the backside of my home which is 22ft tall to the eves without using a ladder.',
    date: 'September 11, 2025',
  },
  {
    name: 'Taz',
    country: 'USA',
    rating: 5,
    title: 'It works',
    body: 'I use it to clean the gutters and it was very high cause I’m in a townhouse and my room is on top of the garage and it did a great job. A lot of dirt came down. My husband was not on a ladder and it was very safe to do.',
    date: 'August 24, 2026',
  },
  {
    name: 'paula eperesi',
    country: 'USA',
    rating: 5,
    title: 'It works!!',
    body: 'Cleaned siding, soffit &fascia & gutters. It worked. No ladder involved.',
    date: 'September 7, 2024',
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14" aria-labelledby="reviews-heading">
      <div className="text-center">
        <h2 id="reviews-heading" className="font-serif text-3xl font-semibold sm:text-4xl">
          What Homeowners Say After The First Wash
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3">
          <Stars rating={5} />
          <span className="text-sm font-medium text-muted-foreground">
            Verified Purchase reviews
          </span>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {reviews.map((r, i) => (
          <article key={i} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-lg leading-none" aria-hidden="true">
                  {flags[r.country]}
                </span>
                <span className="font-semibold">{r.name}</span>
                <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-medium text-accent-foreground">
                  Verified Purchase
                </span>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{r.date}</span>
            </div>

            <div className="mt-3">
              <Stars rating={r.rating} />
            </div>

            <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-pretty">
              {r.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-pretty text-foreground/85">{r.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
