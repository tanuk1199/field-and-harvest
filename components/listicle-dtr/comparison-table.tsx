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
    icon: Sparkles,
    label: 'Gathers the debris',
    brand: { text: 'Yes, as you walk', mark: 'check' },
    alt1: { text: 'No, it relocates it', mark: 'x' },
    alt2: { text: 'Yes, slowly', mark: 'check' },
  },
  {
    icon: Droplets,
    label: 'Picks it up off the ground',
    brand: { text: 'Into a 7 cu ft hopper', mark: 'check' },
    alt1: { text: 'Never lifts a thing', mark: 'x' },
    alt2: { text: 'Only your hands do', mark: 'x' },
  },
  {
    icon: ShieldCheck,
    label: 'Bending required',
    brand: { text: 'None', mark: 'check' },
    alt1: { text: 'Still bagging on your knees', mark: 'x' },
    alt2: { text: 'Constant', mark: 'x' },
  },
  {
    icon: Coffee,
    label: 'Gas, cord or battery',
    brand: { text: 'None, you push it', mark: 'check' },
    alt1: { text: 'Yes, and the neighbours know', mark: 'x' },
    alt2: { text: 'None', mark: 'check' },
  },
]

function CellBlock({ cell, strong }: { cell: Cell; strong?: boolean }) {
  return (
    <div className="flex h-full items-start justify-start gap-1 py-2 pl-2 pr-1 text-left md:gap-1.5 md:py-4 md:pl-3 md:pr-2">
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
            The Yeoman Sweep
          </span>
        </div>
        <div className="flex items-end justify-start pb-2 pl-2 pr-1 md:pb-3 md:pl-3 md:pr-2">
          <span className="text-left font-serif text-[11px] leading-tight text-primary sm:text-xl">
            A leaf blower
          </span>
        </div>
        <div className="flex items-end justify-start pb-2 pl-2 pr-1 md:pb-3 md:pl-3 md:pr-2">
          <span className="text-left font-serif text-[11px] leading-tight text-primary sm:text-xl">
            A rakes
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
        Two of these three columns finish in exactly the same place: a pile still on the ground, you kneeling next to it. Only one finishes with the lawn clear.</p>
    </section>
  )
}
