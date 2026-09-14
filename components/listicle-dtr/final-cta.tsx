'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { trackCtaClick } from '@/lib/tracking'

const PRODUCT_URL = 'https://fieldandharvestco.com/products/the-yeoman-sweep'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      {/* ⚠ A BLOCK SPAN STILL WRAPS. Explicit breaks control where a line STARTS,
          not how wide it may get, so the first attempt declared three lines and
          rendered four: a long middle line was marginally too wide at 2rem and
          broke again. Lines shortened AND the mobile size dropped, and each span
          is nowrap so a future copy edit fails loudly instead of silently
          re-wrapping. */}
      <h2 className="mb-8 text-center font-serif text-[1.85rem] font-semibold uppercase leading-[1.06] tracking-tight sm:text-5xl sm:leading-tight">
        <span className="block whitespace-nowrap">Clear The Yard</span>
        <span className="block whitespace-nowrap">Without The</span>
        <span className="block whitespace-nowrap">Rake</span>
      </h2>

      <div className="grid items-stretch gap-6 rounded-2xl border border-border bg-card p-4 sm:p-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-guarantee.png?v=1789377996"
            alt="The Yeoman Sweep on a cut lawn at golden hour"
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
            60 Day Money Back Guarantee
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
No gas, no cord and no motor. Ten brush heights, a 7 cu ft hopper and sixty days to decide.
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
              Free with every Sweep: <span className="text-primary">$77 of gear</span>
            </p>
            <p className="text-sm font-semibold uppercase tracking-wide">
              Shipping: <span className="text-primary">Free, from the USA</span>
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-border px-4 py-2 text-sm">
            Three 300 liter yard bags, the One-Pass Yard guide and the Tool Audit checklist
            <span className="text-muted-foreground"> | 21, 26 and 30 inch</span>
          </div>

          <p className="mt-4 text-sm italic text-muted-foreground">
            Sixty days to decide. Keep the bags and the guides either way.
          </p>
        </div>
      </div>
    </section>
  )
}
