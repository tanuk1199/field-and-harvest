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

// Placeholder reviews. Duplicate an entry to add more; vary country/rating/daysAgo
// and write in an authentic voice (occasional typo is fine). Aim for 6-12 total.
// ⚠ VERBATIM from the six reviews live on the PDP, attributed exactly as the
// page attributes them. These are WRITTEN, not collected: the product has zero
// orders. Do not add a seventh voice that does not exist on the product page.
const reviews: Review[] = [
  {
    name: 'Verified buyer, 68',
    country: 'USA',
    rating: 5,
    title: "Monday used to be a write-off.",
    body: "I am 68 and I have got two and a half acres I am not handing over to anybody. What I noticed first was Monday. I used to write the whole day off after doing the trimming, just sit there being useless. Now I am up and getting something done with it. Same work. Less of it following me into the week.",
    daysAgo: 3,
  },
  {
    name: 'Verified buyer, 52',
    country: 'USA',
    rating: 5,
    title: "I get the whole thing done in one go now.",
    body: "Never enjoyed yard work and I still do not. My problem was I had started putting it off, because I knew exactly what Sunday was going to cost me. About five weeks in and that dread has mostly gone. I get the whole thing done in one go now instead of spreading it over two days.",
    daysAgo: 7,
  },
  {
    name: 'Verified buyer, 61',
    country: 'USA',
    rating: 5,
    title: "I had nearly packed it in.",
    body: "Bought turmeric off a pharmacy shelf years ago, took it a month, felt nothing, decided the whole business was nonsense. My wife talked me into this one because of the absorption thing. Took about five weeks before I would say anything had changed and I had nearly packed it in. Glad I did not. First fall in a while I have split wood two days running.",
    daysAgo: 11,
  },
  {
    name: 'Verified buyer, 71',
    country: 'USA',
    rating: 5,
    title: "I would rather not be taking ibuprofen daily.",
    body: "I had been reaching for ibuprofen most days through the summer and I was not happy about it. That is the whole reason I went looking for something else. I am 71 and I would rather not be putting that in me every single day if there is another way to go about it. Been on this since spring and I am getting through the season.",
    daysAgo: 15,
  },
  {
    name: 'Verified buyer, 44',
    country: 'USA',
    rating: 5,
    title: "Thursday and Friday are just days now.",
    body: "I do lawn maintenance, so this is not a hobby for me, it is twenty odd properties a week. Ordered the three bottles. What is different is the back half of the week. Thursday and Friday used to be the two I dreaded. They are just days now.",
    daysAgo: 19,
  },
  {
    name: 'Verified buyer, 66',
    country: 'USA',
    rating: 5,
    title: "I told her it would not do a thing.",
    body: "My wife ordered this after watching me come in off the trimmer and lie on the kitchen floor for twenty minutes. I told her it would not do a thing. Two months on I am still taking it, which she has pointed out more than once. I will leave it there.",
    daysAgo: 23,
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
          From The Men Taking It
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
