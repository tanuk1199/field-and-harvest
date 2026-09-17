import { ShieldCheck } from 'lucide-react'

export function Guarantee() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-2xl border border-border bg-secondary px-6 py-10 text-center text-secondary-foreground">
        <ShieldCheck className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <h2 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">The 60-Night Guarantee</h2>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-secondary-foreground/80">
          Use it through a full season. If it has not closed the dark corner you bought it for, tell us inside sixty days and we will refund you. Beyond that, every light is covered for a full year from delivery: if it stops working in that time, we replace it.
        </p>
      </div>
    </section>
  )
}
