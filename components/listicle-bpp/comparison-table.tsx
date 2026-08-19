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

// Three things on the shelf. Columns describe CATEGORY PRACTICE and no brand is
// named, per the Lanham rule in 3-mechanism.md.
const rows: Row[] = [
  {
    icon: Droplets,
    label: 'How it is meant to get into your blood',
    brand: { text: 'A fat you already absorb', mark: 'check' },
    alt1: { text: 'Pepper slows your clearance', mark: 'x' },
    alt2: { text: 'Nothing at all', mark: 'x' },
  },
  {
    icon: Sparkles,
    label: 'What that rests on',
    brand: { text: 'Published human PK work', mark: 'check' },
    alt1: { text: 'One 1998 study, n=8, never repeated', mark: 'x' },
    alt2: { text: 'Nothing in particular', mark: 'x' },
  },
  {
    icon: Coffee,
    label: 'Covers the second inflammatory pathway',
    brand: { text: 'Boswellia, 30% AKBA', mark: 'check' },
    alt1: { text: 'No', mark: 'x' },
    alt2: { text: 'No', mark: 'x' },
  },
  {
    icon: Smile,
    label: 'Every dose printed on its own line',
    brand: { text: 'All four, separately', mark: 'check' },
    alt1: { text: 'Often one total', mark: 'x' },
    alt2: { text: 'Often one total', mark: 'x' },
  },
]

function CellBlock({ cell, strong }: { cell: Cell; strong?: boolean }) {
  return (
    <div className="flex h-full items-start justify-center gap-1 px-1.5 py-3 text-center md:gap-1 md:px-2 md:py-4">
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
        className={`text-[12.5px] leading-snug sm:text-base ${strong ? 'font-medium text-foreground' : 'text-muted-foreground'}`}
      >
        {cell.text}
      </span>
    </div>
  )
}

export function ComparisonTable() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-8">

      {/* MOBILE. Deliberately NOT the desktop grid squeezed down. The desktop
          layout draws the highlighted column with per-row border-x, which only
          holds together when the header sits directly above it in the same
          4-column grid. Forcing that into 3 columns detaches the header and the
          column reads as fragments. Here the winner column is one tinted block
          with a single border, and the row label gets its own line. */}
      <div className="md:hidden">
        <div className="overflow-hidden rounded-2xl border-2 border-primary">
          <div className="grid grid-cols-[1.15fr_1fr_1fr] bg-primary text-primary-foreground">
            <div className="px-2 py-2 text-center font-serif text-[15px] font-semibold leading-tight">
              This Turmeric
            </div>
            <div className="px-1 py-2 text-center font-serif text-[12px] leading-tight opacity-80">
              With black pepper
            </div>
            <div className="px-1 py-2 text-center font-serif text-[12px] leading-tight opacity-80">
              Plain turmeric
            </div>
          </div>

          {rows.map((row, i) => {
            const Icon = row.icon
            return (
              <div key={row.label} className={i > 0 ? 'border-t border-border' : ''}>
                <div className="flex items-center gap-2 bg-muted/60 px-3 py-1.5">
                  <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-[13px] font-semibold leading-snug">{row.label}</span>
                </div>
                <div className="grid grid-cols-[1.15fr_1fr_1fr] items-stretch">
                  <div className="flex items-start gap-1 bg-card px-2 py-2.5 text-[12.5px] font-medium leading-snug text-foreground">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{row.brand.text}</span>
                  </div>
                  <div className="flex items-start gap-1 px-1.5 py-2.5 text-[12px] leading-snug text-muted-foreground">
                    {row.alt1.mark === 'x' && <X className="mt-0.5 h-3 w-3 shrink-0 opacity-60" aria-hidden="true" />}
                    <span>{row.alt1.text}</span>
                  </div>
                  <div className="flex items-start gap-1 px-1.5 py-2.5 text-[12px] leading-snug text-muted-foreground">
                    {row.alt2.mark === 'x' && <X className="mt-0.5 h-3 w-3 shrink-0 opacity-60" aria-hidden="true" />}
                    <span>{row.alt2.text}</span>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="grid grid-cols-[1.15fr_1fr_1fr] items-center border-t border-border">
            <div className="flex justify-center bg-card py-2.5">
              <Smile className="h-7 w-7 text-primary" aria-label="Great choice" />
            </div>
            <div className="flex justify-center py-2.5">
              <Frown className="h-6 w-6 text-muted-foreground/50" aria-label="Not ideal" />
            </div>
            <div className="flex justify-center py-2.5">
              <Frown className="h-6 w-6 text-muted-foreground/50" aria-label="Not ideal" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-[0.85fr_1fr_1fr_1fr]">
        {/* Header row */}
        <div aria-hidden="true" />
        <div className="rounded-t-2xl border-2 border-b-0 border-primary bg-card py-2 text-center md:py-3">
          <span className="font-serif text-lg font-semibold tracking-tight text-primary sm:text-3xl">
            This Turmeric
          </span>
        </div>
        <div className="flex items-end justify-center px-0.5 pb-2 md:px-1 md:pb-3">
          <span className="text-center font-serif text-[13px] leading-tight text-primary sm:text-xl">
            With black pepper
          </span>
        </div>
        <div className="flex items-end justify-center px-0.5 pb-2 md:px-1 md:pb-3">
          <span className="text-center font-serif text-[13px] leading-tight text-primary sm:text-xl">
            Plain turmeric
          </span>
        </div>

        {/* Data rows */}
        {rows.map((row) => {
          const Icon = row.icon
          return (
            <div key={row.label} className="contents">
              <div className="flex items-center gap-2 border-b border-dashed border-border py-4 pr-2">
                <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary md:mt-0 md:h-5 md:w-5" aria-hidden="true" />
                <span className="text-[13px] font-semibold leading-snug sm:text-base">{row.label}</span>
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
        <div className="flex items-center py-4 pr-2">
          <span className="text-base font-medium">Verdict</span>
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
        The pepper in most turmeric rests on one unreplicated study of eight people. A phytosome changes the curcumin itself, and the boswellia covers a second pathway neither curcumin nor your pain reliever reaches.
      </p>
    </section>
  )
}
