'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { CountdownInline } from '@/components/listicle/countdown-timer'
import { trackCtaClick } from '@/lib/tracking'

const PRODUCT_URL = 'https://fieldandharvestco.com/products/the-yeoman-handle'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-center font-serif text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
        Make The Switch
        <br />
        Your Back Will Thank You For
      </h2>

      <div className="grid items-stretch gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_053705_702ffc4f-a3cc-4cb1-81e8-c862cccc10d5.png?v=1778564569"
            alt="The Yeoman Handle mounted on a string trimmer"
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-2 py-4 text-center sm:px-6">
          <span className="rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Limited Restock
          </span>

          <p className="mt-4 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
            Save Up To 43% + 2 Free Yardwork Guides
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            One handle, two free guides, and a lifetime warranty. Bolts onto the trimmer you already own.
          </p>

          <a
            href={PRODUCT_URL}
            onClick={() => trackCtaClick('offer-box', 'Check Availability')}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Check Availability <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>

          <div className="mt-6 space-y-1">
            <p className="text-sm font-semibold uppercase tracking-wide">
              Deal Ending In: <CountdownInline />
            </p>
            <p className="text-sm font-semibold uppercase tracking-wide">
              Stock Level: <span className="text-primary">Running Low</span>
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-border px-4 py-2 text-sm">
            Sell-Out Risk: <span className="font-semibold text-primary">High</span>
            <span className="text-muted-foreground"> | Free One-Pass Yard Guide + Yard Tool Audit Checklist</span>
          </div>

          <p className="mt-4 text-sm italic text-muted-foreground">
            Try it on your own yard with a 60-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}
