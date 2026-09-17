import { Coffee, Droplets, Sparkles, ShieldCheck, Smile, Frown, Check, X } from 'lucide-react'

type Mark = 'check' | 'x' | undefined
type Cell = { text: string; mark?: Mark }
type Row = {
  icon: typeof Droplets
  label: string
  brand: Cell
  alt1: Cell
  alt2: Cell
}

// Comparison rows: brand column vs two alternatives. Add/remove rows as needed.
const rows: Row[] = [
  {
    icon: Coffee,
    label: 'What one fixture covers',
    brand: { text: '270°, on three heads you aim yourself', mark: 'check' },
    alt1: { text: 'One fixed beam, one direction', mark: 'check' },
    alt2: { text: 'One fixed beam, one direction', mark: 'x' },
  },
  {
    icon: Droplets,
    label: 'What putting it up takes',
    brand: { text: 'Four screws and a screwdriver' },
    alt1: { text: 'An electrician and a spare circuit' },
    alt2: { text: 'Four screws and a screwdriver' },
  },
  {
    icon: Sparkles,
    label: 'Where you are allowed to put it',
    brand: { text: 'Anywhere the sun reaches at midday' },
    alt1: { text: 'Only where a cable already runs' },
    alt2: { text: 'Anywhere the sun reaches at midday' },
  },
  {
    icon: ShieldCheck,
    label: 'If it stops working in month seven',
    brand: { text: 'Replaced free, for a full year', mark: 'check' },
    alt1: { text: 'Call the electrician back out', mark: 'x' },
    alt2: { text: 'Whatever that seller happens to offer', mark: 'x' },
  },
]

function CellBlock({ cell, strong }: { cell: Cell; strong?: boolean }) {
  return (
    <div className="flex h-full items-start justify-center gap-0.5 px-0.5 py-2 text-center md:gap-1 md:px-2 md:py-4">
      {cell.mark === 'check' && (
        <Check className="mt-0.5 h-3 w-3 shrink-0 text-primary md:h-4 md:w-4" aria-hidden="true" />
      )}
      {cell.mark === 'x' && (
        <X
          className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground/60 md:h-4 md:w-4"
          aria-hidden="true"
        />
      )}
      <span
        className={`text-[11px] leading-tight sm:text-base ${strong ? 'font-medium text-foreground' : 'text-muted-foreground'}`}
      >
        {cell.text}
      </span>
    </div>
  )
}

export function ComparisonTable() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-8">
      <div className="grid grid-cols-[0.85fr_1fr_1fr_1fr]">
        {/* Header row */}
        <div aria-hidden="true" />
        <div className="rounded-t-2xl border-2 border-b-0 border-primary bg-card py-2 text-center md:py-3">
          <span className="font-serif text-lg font-semibold tracking-tight text-primary sm:text-3xl">
            nightwatch
          </span>
        </div>
        <div className="flex items-end justify-center px-0.5 pb-2 md:px-1 md:pb-3">
          <span className="text-center font-serif text-[11px] leading-tight text-primary sm:text-xl">
            A wired floodlight
          </span>
        </div>
        <div className="flex items-end justify-center px-0.5 pb-2 md:px-1 md:pb-3">
          <span className="text-center font-serif text-[11px] leading-tight text-primary sm:text-xl">
            A single-head solar light
          </span>
        </div>

        {/* Data rows */}
        {rows.map((row) => {
          const Icon = row.icon
          return (
            <div key={row.label} className="contents">
              <div className="flex items-start gap-1 border-b border-dashed border-border py-2 pr-1 md:items-center md:gap-2 md:py-4 md:pr-2">
                <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary md:mt-0 md:h-5 md:w-5" aria-hidden="true" />
                <span className="text-[11px] font-medium leading-tight sm:text-base">{row.label}</span>
              </div>
              <div className="border-x-2 border-primary bg-card">
                <CellBlock cell={row.brand} strong />
              </div>
              <div className="border-b border-dashed border-border">
                <CellBlock cell={row.alt1} />
              </div>
              <div className="border-b border-dashed border-border">
                <CellBlock cell={row.alt2} />
              </div>
            </div>
          )
        })}

        {/* Verdict / face row */}
        <div className="flex items-center py-3 pr-1 md:py-4 md:pr-2">
          <span className="text-xs font-medium sm:text-base">Verdict</span>
        </div>
        <div className="flex items-center justify-center rounded-b-2xl border-2 border-t-0 border-primary bg-card py-3 md:py-4">
          <Smile className="h-6 w-6 text-primary md:h-8 md:w-8" aria-label="Great choice" />
        </div>
        <div className="flex items-center justify-center py-3 md:py-4">
          <Frown className="h-6 w-6 text-muted-foreground/50 md:h-8 md:w-8" aria-label="Not ideal" />
        </div>
        <div className="flex items-center justify-center py-3 md:py-4">
          <Frown className="h-6 w-6 text-muted-foreground/50 md:h-8 md:w-8" aria-label="Not ideal" />
        </div>
      </div>

      <p className="mt-5 text-sm text-muted-foreground sm:text-base">
        Two of these three columns end the same way: a corner still dark, or a bill from an electrician to light it.
      </p>
    </section>
  )
}
