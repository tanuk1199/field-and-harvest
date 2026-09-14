import { Sparkles, Droplets, TrendingUp, Trophy } from 'lucide-react'

interface Milestone {
  window: string
  title: string
  body: string
  Icon: typeof Sparkles
}

const milestones: Milestone[] = [
  {
    window: 'Day it arrives',
    title: 'Fifteen minutes in the garage',
    body: 'The core comes assembled. You attach the push frame and the hopper with a screwdriver, and that is the whole build.',
    Icon: Droplets,
  },
  {
    window: 'First pass',
    title: 'Push ten feet and look behind you',
    body: 'A clean stripe means the brush height is right. Most people find their setting inside a minute, and it adjusts from a handle at the side.',
    Icon: Sparkles,
  },
  {
    window: 'The walk',
    title: 'The hopper fills behind you',
    body: 'No pile to come back to and no second pass. The job ends the moment you stop walking.',
    Icon: TrendingUp,
  },
  {
    window: 'Emptying it',
    title: 'Four buckles, standing up',
    body: 'It lifts off by a padded handle straight into one of the 300 liter bags that came in the box. A full hopper does not even fill one.',
    Icon: Trophy,
  },
]

export function Timeline() {
  return (
    <section className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12 sm:py-16" aria-labelledby="timeline-heading">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
          From The Box To The First Clean Lawn
        </span>
        <h2
          id="timeline-heading"
          className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        >
          One Build, <span className="text-primary">Then One Walk</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          There is no motor, nothing to start and nothing to refuel. The wheels turn the brushes, so the only thing you supply is the walk.
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
        Individual results vary. This is a dietary supplement, not a treatment.
      </p>
    </section>
  )
}
