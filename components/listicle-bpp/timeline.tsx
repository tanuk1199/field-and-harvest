import { Sparkles, Droplets, TrendingUp, Trophy } from 'lucide-react'

interface Milestone {
  window: string
  title: string
  body: string
  Icon: typeof Sparkles
}

const milestones: Milestone[] = [
  {
    window: 'Day 1',
    title: 'Two capsules, with breakfast',
    body: 'That is the whole routine. No second dose, no organiser, nothing that makes you feel like a patient.',
    Icon: Droplets,
  },
  {
    window: 'Weeks 1 to 2',
    title: 'Boswellia is the fast one',
    body: 'This is the stretch where most men decide turmeric does not work and stop. Do not be one of them.',
    Icon: Sparkles,
  },
  {
    window: 'Weeks 3 to 6',
    title: 'The curcumin is the slow one',
    body: 'A phytosome builds with consistency. Stop watching for a single good morning.',
    Icon: TrendingUp,
  },
  {
    window: 'Weeks 7 to 10',
    title: 'Now you can compare',
    body: 'The published work runs to eight weeks, not eight days. You have a real stretch to hold against last season.',
    Icon: Trophy,
  },
]

export function Timeline() {
  return (
    <section className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12 sm:py-16" aria-labelledby="timeline-heading">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
          What The First Ten Weeks Look Like
        </span>
        <h2
          id="timeline-heading"
          className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        >
          Two Actives, <span className="text-primary">Two Different Speeds</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Nobody can tell you what you will feel by a given week. What we can tell you is what the actives are doing, and when most men quit.
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
