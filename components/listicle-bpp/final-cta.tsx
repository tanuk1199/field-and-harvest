'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { trackCtaClick } from '@/lib/tracking'

const PRODUCT_URL = 'https://fieldandharvestco.com/products/turmeric-curcumin-complex'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      {/* three explicit lines. Left to wrap on its own at 390px this broke into
          four with "IN" orphaned on the last one. */}
      <h2 className="mb-8 text-center font-serif text-[2rem] font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl sm:leading-tight">
        <span className="block">Turmeric That Was</span>
        <span className="block">Built To Actually</span>
        <span className="block">Get In</span>
      </h2>

      <div className="grid items-stretch gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="https://cdn.shopify.com/s/files/1/0651/8299/0379/files/supp-callout.png"
            alt="The four actives called out by name and dose"
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-2 py-4 text-center sm:px-6">
          <span className="rounded-full border border-primary px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Save 40% Off
          </span>

          <p className="mt-4 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
            90 Day Money Back Guarantee
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
Four actives, every dose printed on its own line, and ninety days to decide. No black pepper in it.
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
              Curcumin: <span className="text-primary">500 mg phytosome</span>
            </p>
            <p className="text-sm font-semibold uppercase tracking-wide">
              Black pepper: <span className="text-primary">None</span>
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-border px-4 py-2 text-sm">
            Every dose printed on its own line
            <span className="text-muted-foreground"> | Boswellia 30 percent AKBA, ginger, vitamin D3</span>
          </div>

          <p className="mt-4 text-sm italic text-muted-foreground">
            Ninety days to decide. Keep the bottles either way.
          </p>
        </div>
      </div>
    </section>
  )
}
