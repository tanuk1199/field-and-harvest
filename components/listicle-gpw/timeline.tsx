import { Package, Droplets, Home, CalendarCheck } from 'lucide-react'

interface Milestone {
  window: string
  title: string
  body: string
  Icon: typeof Package
}

const milestones: Milestone[] = [
  {
    window: 'The Day It Arrives',
    title: 'Screwed together',
    body: 'Thread the stainless sections together at the brass couplers, click the hose onto your washer and clip the six tips to the grip.',
    Icon: Package,
  },
  {
    window: 'The First Dry Day',
    title: 'Gutters flushed',
    body: 'Gutter hook on, stand on the lawn and walk the gutter line end to end while the leaves go over the edge.',
    Icon: Droplets,
  },
  {
    window: 'Same Afternoon',
    title: 'The second story washed',
    body: 'Switch to a wide tip and rinse the siding, soffits and the peak from the same patch of grass.',
    Icon: Home,
  },
  {
    window: 'Every Fall After',
    title: 'Off the garage wall',
    body: 'When the leaves come down again, the wand comes down off the wall. No ladder, no crew, no bill.',
    Icon: CalendarCheck,
  },
]

export function Timeline() {
  return (
    <section className="mx-auto max-w-4xl scroll-mt-24 px-4 py-12 sm:py-16" aria-labelledby="timeline-heading">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
          From The Box To The Second Story
        </span>
        <h2
          id="timeline-heading"
          className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        >
          From The Box To A Clean <span className="text-primary">Second Story</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Every step happens with your feet on the lawn.
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

    </section>
  )
}
