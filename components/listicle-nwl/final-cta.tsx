'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { trackCtaClick } from '@/lib/tracking'

const PRODUCT_URL = 'https://fieldandharvestco.com/products/the-nightwatch-solar-light'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-center font-serif text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
        Light The
        <br />
        Whole Corner
      </h2>

      <div className="grid items-stretch gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-18-hero-ba-driveway_1a7a23ff-3832-4c4f-a38b-f5e4624df232.png"
            alt="The same driveway at night, dark on the left and lit by the solar security light on the right"
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-2 py-4 text-center sm:px-6">
          <span className="rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Multi-packs save up to 28%
          </span>

          <p className="mt-4 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
            From $59, or $42.25 each on the four-pack
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Most houses need more than one dark corner covered. The four-pack is the cheapest way to get every approach lit at once.
          </p>

          <a
            href={PRODUCT_URL}
            onClick={() => trackCtaClick('offer-box', 'Check Availability')}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Check Availability <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Sixty nights to decide, and a full year of warranty after that.
          </p>
        </div>
      </div>
    </section>
  )
}
