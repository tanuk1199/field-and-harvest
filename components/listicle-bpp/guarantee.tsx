import { ShieldCheck } from 'lucide-react'

export function Guarantee() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-2xl border border-border bg-secondary px-6 py-10 text-center text-secondary-foreground">
        <ShieldCheck className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
        <h2 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl">Try it on a season of your own work</h2>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-secondary-foreground/80">
          Take it every day for two months. If you get to the end of the second bottle and your working weeks do not
          feel any different, email us inside ninety days and we will refund you. Keep the bottles. We do not want
          them back.
        </p>
      </div>
    </section>
  )
}
