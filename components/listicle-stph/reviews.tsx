import { Star } from 'lucide-react'

type Review = {
  name: string
  rating: number
  title: string
  body: string
}

// Verbatim 5 star reviews from Diesel Heater/research/voc/heater-1-amazon-reviews-raw.txt, real names,
// all Verified Purchase. Any review whose title or text names a brand is left out.
const reviews: Review[] = [
  {
    name: 'Herbert Eggleston Jr',
    rating: 5,
    title: 'Good heater',
    body: 'Great heater. Heat my tent when camping in the tens on low with no problem. It is good on fuel.',
  },
  {
    name: 'Bruce Belles',
    rating: 5,
    title: 'reliable, easy to use and set up.',
    body: 'Fairly easy install, and works flawlessly. On low it can run over a day.. Great option and low cost to operate. quieter when on high temp setting. Remote works well.',
  },
  {
    name: 'Mike m',
    rating: 5,
    title: 'Sips fuel and great heat',
    body: "Best little heater I ever bought and it's my first one and will be buying another one I love this thing puts out great heat and sips fuel!!",
  },
  {
    name: 'Jason',
    rating: 5,
    title: 'This little heater is HOT!',
    body: 'Awesome little heater for the money. It was easy to set up and get running. Just fill with diesel and your set.',
  },
  {
    name: 'Pam Lewis',
    rating: 5,
    title: 'Great product',
    body: "It's fantastic...just what we were looking for My husband uses it in his work shed and we can transfer it to our side by side when needed",
  },
  {
    name: 'Jordan',
    rating: 5,
    title: 'I’d buy another one',
    body: 'Works great using to heat my small house. Nice compact unit. Works great on the app.',
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
          What Owners Are Saying
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3">
          <Stars rating={5} />
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {reviews.map((r, i) => (
          <article key={i} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{r.name}</span>
                <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-medium text-accent-foreground">
                  Verified Purchase
                </span>
              </div>
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
