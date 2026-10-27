'use client'

import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { trackCtaClick } from '@/lib/tracking'
import { PRODUCT_URL } from '@/components/listicle-stph/cta-button'
import { SAVE } from '@/components/listicle-stph/announcement-bar'

// Canonical offer box. Countdown, "Stock Level" and "Sell-Out Risk" removed: nothing on this page
// claims a deadline or a stock count. No price: the only money figure is the banner's dollar saving.
export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-center font-serif text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
        Swap The Propane
        <br />
        Stay Till Dark
      </h2>

      <div className="grid items-stretch gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="https://cdn.shopify.com/s/files/1/0651/8299/0379/files/bunkhouse-03-studio-dark-premium.png?width=800"
            alt="The Bunkhouse Diesel Heater, camo sides, carry handle and built-in fuel tank"
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-2 py-4 text-center sm:px-6">
          <span className="rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Bunkhouse Diesel Heater
          </span>

          <p className="mt-4 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
            {SAVE} Off + Free 1 Year Warranty
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Vented diesel heat for the blind, so you are still in your chair at last light. Warm in about 3 minutes, runs off 12V, fuel tank built in.
          </p>

          <a
            href={PRODUCT_URL}
            onClick={() => trackCtaClick('stph-offer-box', 'Check Availability')}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Check Availability <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>

          <div className="mt-5 flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-wider">Free 1 year warranty included</p>
          </div>

          <p className="mt-4 text-sm font-semibold">30 days to decide &bull; Ships Free From USA</p>
        </div>
      </div>
    </section>
  )
}
