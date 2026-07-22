import { track } from '@vercel/analytics'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Fires a CTA click event to both Vercel Web Analytics and the Meta Pixel.
 * `location` identifies which CTA was clicked (e.g. "reason-3", "offer-box").
 */
export function trackCtaClick(location: string, label: string) {
  // Vercel Web Analytics custom event
  track('cta_click', { location, label })

  // Meta Pixel custom event (only fires if the pixel has loaded)
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'CtaClick', { location, label })
    // Standard "Lead"-style intent event for ad optimization
    window.fbq('track', 'InitiateCheckout', { content_name: location })
  }
}
