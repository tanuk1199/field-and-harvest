import { Star, Quote } from 'lucide-react'

// ⛔⛔ THE YEOMAN SWEEP HAS ZERO COLLECTED REVIEWS. No invented testimonial and
// no aggregate rating appears on this page. The template ships a wall of named
// "Verified Buyer" cards plus a 4.6 / 5,800 masthead; both are unusable here and
// both were removed.
//
// ⭐ THE HONEST SUBSTITUTION, same one /the-turmeric-trap made: fill the slot
// with REAL words from REAL people about the CATEGORY rather than invented words
// about our product. These are verbatim published reviews of push lawn sweepers
// written by buyers of OTHER machines, quoted from the 400-review corpus in
// `Push Lawn Sweeper/research/voc/`.
//
// ⚠ THE HEADING IS THE LOAD-BEARING PART. It says what owners of THESE MACHINES
// say, not what our customers say. Change the heading and this becomes a fake
// review wall. The attribution line and the footer disclosure say it again.
// ⚠ No brand is named in any quote, and none mentions dog waste, which this
// store does not claim.
type CategoryReview = { stars: number; title: string; body: string }

const reviews: CategoryReview[] = [
  {
    stars: 5,
    title: 'This is awesome!',
    body: 'If you hate raking leaves or like me can’t because it’s too painful. This Lawn Sweeper is amazing. 5 min for a chunk of the back yard and that’s me going slow! Worth every penny!!',
  },
  {
    stars: 5,
    title: 'Worth the Money – Saved My Back!',
    body: 'The amount of leaves covering our grass was overwhelming. I was absolutely not about to rake or blow all of that, it’s exhausting and back-breaking work. So I went looking for an easier alternative and found this leaf sweeper.',
  },
  {
    stars: 5,
    title: 'Much better than raking leaves and grass clippings.',
    body: 'Does a great job picking up leaves and grass clippings. Reduces the time and effort compared to raking. It just takes a few minutes to figure out what the height should be and how fast to walk.',
  },
  {
    stars: 5,
    title: 'I absolutely love this thing!',
    body: 'I ordered this thing almost on a whim… I was raking and bagging leaves like a Neanderthal, took a break, and wouldn’t you know it: an ad for one of these went by my instagram feed!',
  },
  {
    stars: 5,
    title: 'Works with pine cones!',
    body: 'I live in Washington state and I have more pinecone than I know what to do with. I have small round cones from Australian pine trees, medium cones from a giant blue spruce tree and very large cones from long needle pines.',
  },
  {
    stars: 5,
    title: 'Great buy!',
    body: 'Works well. Much better than raking.',
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
          What People Who Own One <span className="text-primary">Say About Sweeping Instead Of Raking</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The Yeoman Sweep is new and has no reviews of its own yet, so we are not going to show you any. These are
          published reviews of push lawn sweepers, written by people who bought a different machine.
        </p>
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
              Published review of a push lawn sweeper
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
