'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { PRODUCT_URL } from '@/components/listicle-gpw/cta-button'
import { SALE_NAME, SAVE, PRICE, COMPARE_AT } from '@/components/listicle-gpw/sale'
import { trackCtaClick } from '@/lib/tracking'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-center font-serif text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
        Keep Both Feet
        <br />
        On The Grass
      </h2>

      <div className="grid items-stretch gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="https://cdn.shopify.com/s/files/1/0651/8299/0379/files/gable-21-info-whats-included.png?width=800"
            alt="Everything in the Gable box: the 24 ft wand, trigger gun and hose, gutter hook, two angled extensions and six spray tips"
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-2 py-4 text-center sm:px-6">
          <span className="rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {SALE_NAME}
          </span>

          <p className="mt-4 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
            {SAVE} Off + Free 1 Year Warranty
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {PRICE}, down from {COMPARE_AT}. The wand, trigger gun, hose, gutter hook, two angled extensions and six spray tips, for the pressure washer you already own.
          </p>

          <a
            href={PRODUCT_URL}
            onClick={() => trackCtaClick('offer-box', 'Check Availability')}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Check Availability <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>

          <div className="mt-6 rounded-lg border border-border px-4 py-2 text-sm">
            Free shipping <span className="text-muted-foreground">|</span> Free 1 year warranty
          </div>

          <p className="mt-4 text-sm italic text-muted-foreground">
            Take it up to your own gutters with a 30 day money back guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}
