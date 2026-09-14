import { ShieldCheck } from 'lucide-react'

export function Guarantee() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-2xl border border-border bg-secondary px-6 py-10 text-center text-secondary-foreground">
        <ShieldCheck className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <h2 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">Use it for a full fall before you decide</h2>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-secondary-foreground/80">
          If it has not taken the bending out of your yard cleanup, tell us inside 60 days and we will refund you in
          full. Free shipping both ways. Keep the bags and the guides either way.
        </p>
      </div>
    </section>
  )
}
