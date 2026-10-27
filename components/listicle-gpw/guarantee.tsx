import { ShieldCheck } from 'lucide-react'

export function Guarantee() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-2xl border border-border bg-secondary px-6 py-10 text-center text-secondary-foreground">
        <ShieldCheck className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <h2 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">The Field & Harvest Guarantee</h2>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-secondary-foreground/80">
          Thirty days to wash your own gutters, siding and peaks with it, with your money back either way. And a free 1 year warranty on the wand from the day it arrives.
        </p>
      </div>
    </section>
  )
}
