import { Star, Quote } from 'lucide-react'

// ⛔⛔ THE NIGHTWATCH SOLAR LIGHT HAS ZERO COLLECTED REVIEWS AND ZERO ORDERS.
// No invented testimonial and no aggregate rating appears on this page. The
// template ships a wall of named "Verified Buyer" cards plus a star masthead;
// both are unusable here and both were removed.
//
// ⭐ THE HONEST SUBSTITUTION, the same one /ditch-the-rake and /the-turmeric-trap
// made: fill the slot with REAL words from REAL people about the CATEGORY rather
// than invented words about our product. These are verbatim published reviews of
// three-head solar motion lights written by buyers of OTHER units, quoted from
// the 387-review corpus in `Solar Flood Light/research/`.
//
// ⚠ THE HEADING IS THE LOAD-BEARING PART. It says what owners of THESE LIGHTS
// say, not what our customers say. Change the heading and this becomes a fake
// review wall. The card footer and the site footer disclosure say it again.
//
// ⚠ Review 6 carries a real criticism of the hold time on purpose. The corpus
// says it is the loudest complaint in the category, the PDP discloses it in the
// same words, and a wall of unqualified raves reads false to this buyer.
type CategoryReview = { stars: number; title: string; body: string }

const reviews: CategoryReview[] = [
  {
    stars: 5,
    title: 'Covers every blind spot',
    body: 'I love that the heads are adjustable as the 3-head design makes it super easy to cover every blind spot in the yard.',
  },
  {
    stars: 5,
    title: 'Suitable as security light',
    body: 'Installed for front and back patio. Easy to. Install just screw in the best location for sun light. Motion sensor worked fine. So bright helped for security awareness. Zero noise, so far use it for over 12 months, no issue.',
  },
  {
    stars: 4,
    title: 'Where there is no power',
    body: 'Perfect solution for lighting the back yard where there is no power. So far the light has worked perfectly and shines very brightly. Product better than anticipated!',
  },
  {
    stars: 5,
    title: 'We can see when we let our dogs out',
    body: 'These solar lights are absolutely perfect. They are bright, and very simple to install. We got the two pack to put in our backyard because it is very dark back there, and this way we can see when we let our dogs out.',
  },
  {
    stars: 5,
    title: 'Easy to install and very bright',
    body: 'Awesome bought years ago but these are updated with a remote. Easy to install/mount and very bright. Great value',
  },
  {
    stars: 5,
    title: 'They work even in winter',
    body: 'These are bright! We use them for our dog pen. They are set to come on when the dogs trigger it. I only wished they stayed on for longer. Maybe for 2 minutes instead of 30 seconds. We’ve had them for over a year and they work even in winter.',
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
          What Solar Motion Light Owners Say{' '}
          <span className="text-primary">About Lighting The Dark Corner</span>
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {reviews.map((r, i) => (
          <article key={i} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between gap-2">
              <Stars rating={r.stars} />
              <Quote className="h-4 w-4 text-muted-foreground/40" aria-hidden="true" />
            </div>
            <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-pretty">{r.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-pretty text-foreground/85">{r.body}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-muted-foreground/70">
              Published review of a three-head solar motion light
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
