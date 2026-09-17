import { Sparkles, Droplets, TrendingUp, Trophy } from 'lucide-react'

interface Milestone {
  window: string
  title: string
  body: string
  Icon: typeof Sparkles
}

const milestones: Milestone[] = [
  {
    window: 'Day one',
    title: 'Charge it before it goes up',
    body: 'Leave it somewhere in full sun for two to three days before the first night, so it starts the first evening with a full charge rather than half of one.',
    Icon: Droplets,
  },
  {
    window: 'Day three',
    title: 'Four screws',
    body: 'Pick the wall, check the spot gets sun in the middle of the day, and drive the four screws. Six and a half to eight feet is the range the sensor was built for.',
    Icon: Sparkles,
  },
  {
    window: 'The first night',
    title: 'You find out where to aim',
    body: 'Walk the approach and watch where the light lands. This is the part worth ten minutes: the three heads move independently, so you can cover the path and the approach at the same time.',
    Icon: TrendingUp,
  },
  {
    window: 'The first week',
    title: 'You stop thinking about it',
    body: 'It charges itself in the day and comes on when something moves. The corner you bought it for stops being a thing you notice on the way in.',
    Icon: Trophy,
  },
]

export function Timeline() {
  return (
    <section className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12 sm:py-16" aria-labelledby="timeline-heading">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
          What the first week looks like
        </span>
        <h2
          id="timeline-heading"
          className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        >
          From the box to  <span className="text-primary">a corner that lights itself</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          No wiring stage, so most of this is deciding where it goes.
        </p>
      </div>

      <ol className="relative mt-10">
        {/* Vertical spine */}
        <div
          className="absolute left-6 top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
          aria-hidden="true"
        />

        {milestones.map(({ window, title, body, Icon }, i) => (
          <li
            key={window}
            className={`relative mb-8 last:mb-0 pl-16 sm:w-1/2 sm:pl-0 ${
              i % 2 === 0
                ? 'sm:mr-auto sm:pr-12 sm:text-right'
                : 'sm:ml-auto sm:pl-12'
            }`}
          >
            {/* Node */}
            <span
              className={`absolute left-6 top-1 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-card text-primary shadow-sm sm:top-2 ${
                i % 2 === 0 ? 'sm:left-full' : 'sm:left-0'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>

            <div className="rounded-xl border border-border bg-card p-5 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                {window}
              </span>
              <h3 className="mt-1 font-serif text-xl font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-foreground/85">{body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mx-auto mt-8 max-w-lg text-center text-sm italic text-muted-foreground">
        Charging times vary with the season, the weather and where the panel sits.
      </p>
    </section>
  )
}
