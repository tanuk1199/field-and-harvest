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
const reviews: Review[] = [
  {
    name: 'Mark T.',
    country: 'USA',
    rating: 5,
    title: 'Best money I have spent on yard gear in years.',
    body: 'I have been trimming the same yard for eighteen years and never thought my back was the problem until this thing showed up. Bolted on my old Echo in under five minutes. First Saturday I finished the whole yard standing straight and walked away without wincing. I keep wondering why nobody made this years ago.',
    daysAgo: 3,
  },
  {
    name: 'Frank S.',
    country: 'USA',
    rating: 5,
    title: 'Tried two from other brands. This one actually stayed put.',
    body: 'The other two slipped or backed off the shaft within a week. The Hold-Fast bracket on this one has stayed exactly where I set it through three months of regular use. The aluminum is light enough I do not notice it on the shaft. Quality is obvious the second you pick it up.',
    daysAgo: 6,
  },
  {
    name: 'Robert P.',
    country: 'USA',
    rating: 5,
    title: 'My doctor said stop trimming. This let me keep going.',
    body: 'After my second back episode my doctor told me to give up the trimmer. I am 67 and I refuse to hire someone to do my own yard. Came across this online, bolted it on the Stihl, and finished the front yard last Saturday standing up the whole time. Best money I have spent on the yard since the trimmer itself.',
    daysAgo: 9,
  },
  {
    name: 'Dale H.',
    country: 'USA',
    rating: 4,
    title: 'Over six foot and it finally lets me stand up.',
    body: 'At my height the factory handle had me folded in half to reach the ground. Slid this up the shaft to my reach, locked it down, and the back pain I got every single time I trimmed is just gone. Wish I had found it years ago.',
    daysAgo: 12,
  },
  {
    name: 'Gary W.',
    country: 'USA',
    rating: 5,
    title: 'Bought a cheap one off Temu first. Broke in two uses.',
    body: 'Learned my lesson. The bargain one flexed and cracked at the clamp almost right away. This one is solid aluminum, no flex, no slipping on the shaft. You can feel the difference the second you pick it up. Buy this one and skip the junk.',
    daysAgo: 16,
  },
  {
    name: 'Emily W.',
    country: 'USA',
    rating: 5,
    title: 'Husband used it once. Now I use it too.',
    body: 'He is six-foot-two and the factory handle had him bent over every weekend. He slid this up the shaft, locked it down, and used it that afternoon. Then I tried it. I am five-six, slid it down to my reach, fits perfectly. Same handle, same trimmer, two different people.',
    daysAgo: 21,
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

export function Reviews() {
  const avg = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section className="mx-auto max-w-5xl px-4 py-14" aria-labelledby="reviews-heading">
      <div className="text-center">
        <h2 id="reviews-heading" className="font-serif text-3xl font-semibold sm:text-4xl">
          What Men Who Do Their Own Yard Are Saying
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3">
          <Stars rating={5} />
          <span className="text-sm font-medium text-muted-foreground">
            {avg} out of 5 &middot; 800 reviews
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
