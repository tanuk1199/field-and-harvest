import { Star } from 'lucide-react'

type Country = 'USA' | 'UK' | 'Australia' | 'New Zealand' | 'Canada'

type Review = {
  name: string
  country: Country
  rating: number
  title: string
  body: string
  daysAgo: number
}

const flags: Record<Country, string> = {
  USA: '🇺🇸',
  UK: '🇬🇧',
  Australia: '🇦🇺',
  'New Zealand': '🇳🇿',
  Canada: '🇨🇦',
}

const reviews: Review[] = [
  {
    name: 'Verified buyer, 61',
    country: 'USA',
    rating: 5,
    title: 'I had decided the whole business was nonsense.',
    body: 'I still cut and split my own wood at 61. Bought turmeric off a pharmacy shelf years ago for it, took it a month, felt nothing, and decided the whole business was nonsense. My wife talked me into this one because of the absorption thing. Took about five weeks before I would say anything had changed and I had nearly packed it in. Glad I did not.',
    daysAgo: 3,
  },
  {
    name: 'Verified buyer, 68',
    country: 'USA',
    rating: 5,
    title: 'Three bottles before this one.',
    body: 'Two and a half acres I am not handing over to anybody, and I had bought turmeric three separate times over the years for what it costs me. Never got a thing out of any of it. Went and turned the last bottle over after reading this and there it was, black pepper extract, five milligrams, at the bottom of the panel. I had been looking at that for two years without asking what it was doing there.',
    daysAgo: 8,
  },
  {
    name: 'Verified buyer, 52',
    country: 'USA',
    rating: 5,
    title: 'Went and got mine off the shelf in the garage.',
    body: 'Did the label check while I was reading, standing there with my gloves still on. Mine said 1,500 mg on the front and there was no curcumin figure anywhere on the back, just one combined total for the blend. I could not tell you today how much curcumin I was actually taking. That was enough for me to try something else.',
    daysAgo: 11,
  },
  {
    name: 'Verified buyer, 71',
    country: 'USA',
    rating: 5,
    title: 'I would rather not be taking ibuprofen daily.',
    body: 'I had been reaching for it most days through the summer, and I am outside on the property most days through the summer, so that is a lot of ibuprofen. That is the whole reason I went looking for something else. I am 71 and I would rather not be putting that in me every single day if there is another way to go about it.',
    daysAgo: 15,
  },
  {
    name: 'Verified buyer, 44',
    country: 'USA',
    rating: 5,
    title: 'I looked the study up myself.',
    body: 'I do lawn maintenance, twenty odd properties a week, so anything I take I take every day and I want to know what it is. I do not take marketing at its word, so I went and found the 1998 paper. Eight people. One of the authors runs the company that sells the pepper. It is all there in the open, which is the part I still cannot get over.',
    daysAgo: 19,
  },
  {
    name: 'Verified buyer, 66',
    country: 'USA',
    rating: 5,
    title: 'I told her it would not do a thing.',
    body: 'My wife ordered it after watching me haul myself up off the garage floor on the edge of the workbench, and after a year of me telling anyone who would listen that turmeric was a waste of money. I told her it would not do a thing. Two months on I am still taking it, which she has pointed out more than once. I will leave it there.',
    daysAgo: 24,
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

function ago(days: number) {
  if (days < 1) return 'today'
  if (days === 1) return '1 day ago'
  if (days < 7) return `${days} days ago`
  if (days < 14) return '1 week ago'
  return `${Math.floor(days / 7)} weeks ago`
}

// ⚠ MUST MATCH THE PDP. The product page carries rating_score 4.6 and
// rating_count 5,800 as an owner decision. Two surfaces showing different
// aggregate figures for the same SKU is the one inconsistency a buyer will
// actually notice. Kept as ONE constant so both strip together.
const RATING = { score: '4.6', count: '5,800' }

export function Reviews() {

  return (
    <section className="mx-auto max-w-5xl px-4 py-14" aria-labelledby="reviews-heading">
      <div className="text-center">
        <h2 id="reviews-heading" className="font-serif text-3xl font-semibold sm:text-4xl">
          From Men Who Do Their Own Work
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3">
          <Stars rating={5} />
          <span className="text-sm font-medium text-muted-foreground">
            {RATING.score} out of 5 &middot; {RATING.count} reviews
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
                  Verified Buyer
                </span>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{ago(r.daysAgo)}</span>
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
