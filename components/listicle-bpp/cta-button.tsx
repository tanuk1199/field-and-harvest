'use client'

import { ArrowRight } from 'lucide-react'
import { trackCtaClick } from '@/lib/tracking'

export const PRODUCT_URL = 'https://fieldandharvestco.com/products/turmeric-curcumin-complex'

export function CtaButton({
  label = 'Make The Switch',
  location = 'unknown',
  className = '',
}: {
  label?: string
  location?: string
  className?: string
}) {
  return (
    <a
      href={PRODUCT_URL}
      onClick={() => trackCtaClick(location, label)}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90 sm:text-base ${className}`}
    >
      {label} <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    </a>
  )
}
