"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TtsAsset } from "@/components/tts-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"

// Test 2, arm A (control). Middleware serves this file at /the-trimmer-switch for half of
// visitors and rewrites the other half to /the-trimmer-switch-r1. Hardcoded per file rather
// than read from the cookie, so the tag can never disagree with the layout actually rendered.
// Test 1 (the above-the-fold layout test) was killed; its arms were test1-a / test1-b.
const LAYOUT_VARIANT = "test2-a"

// Intelligems context block. On the Shopify store this is set by the theme snippet's
// Liquid <script> that ships alongside the bundle; that Liquid can't run on this Vercel
// lander, so we set the equivalent page-context globals statically (non-product page).
// Without these the bundle still buckets + applies edits, but has no session context to
// fire its tracking/exposure events against. Must run before the bundle (afterInteractive) loads.
if (typeof window !== "undefined") {
  const w = window as unknown as Record<string, unknown>
  w.Shopify = w.Shopify || { theme: { id: 136737161259, role: "main" } }
  w._template = w._template || { directory: "", name: "index", suffix: "" }
  w.__productIdFromTemplate = w.__productIdFromTemplate ?? null
  w.__plpCollectionIdFromTemplate = w.__plpCollectionIdFromTemplate ?? null
  w.igProductData = w.igProductData || {}
}

const PRODUCT_THUMBS = ["productThumb1", "productThumb2", "productThumb3", "productThumb4"] as const
type GalleryKey = "productMain" | (typeof PRODUCT_THUMBS)[number]

export default function LandingPage() {
  const [activeImage, setActiveImage] = useState<GalleryKey>("productMain")

  // Cross-domain identity carry for Intelligems.
  // The org runs with cookies OFF (`should_use_cookies: false`), so the visitor id lives in
  // localStorage, which is origin-scoped: explore.fieldandharvestco.com and the apex store do
  // NOT share it. The bundle only auto-appends its `igId` / `igTg` params on its OWN cross-host
  // redirect experiences, never on ordinary CTA links, so store-side sessions started from this
  // page were being issued a FRESH visitor id and every product view / ATC / checkout / order
  // fell outside the test. Decorate store-bound links at click time (capture phase runs before
  // the browser reads href for navigation) so the store adopts the same visitor id.
  // Tag the session so Clarity can filter recordings, scroll depth and click maps by arm.
  // Both arms serve at the same URL, so this tag is the only thing that separates them.
  // The queue stub mirrors Clarity's own snippet, so this call is buffered if it runs before
  // the Clarity script has loaded.
  useEffect(() => {
    try {
      const w = window as unknown as { clarity?: { (...args: unknown[]): void; q?: unknown[] } }
      if (!w.clarity) {
        const stub = function (...args: unknown[]) {
          ;(stub.q = stub.q || []).push(args)
        } as { (...args: unknown[]): void; q?: unknown[] }
        w.clarity = stub
      }
      w.clarity("set", "layout_variant", LAYOUT_VARIANT)
    } catch {
      // Tagging must never break the page.
    }
  }, [])

  useEffect(() => {
    const decorate = (event: Event) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null
      if (!anchor?.href) return

      let url: URL
      try {
        url = new URL(anchor.href, window.location.href)
      } catch {
        return
      }
      if (url.hostname === window.location.hostname) return
      if (!url.hostname.endsWith("fieldandharvestco.com")) return

      // Carry the test arm through to the store so Shopify order data reads per arm.
      if (!url.searchParams.has("lt")) url.searchParams.set("lt", LAYOUT_VARIANT)

      const igId = (window as unknown as { igData?: { user?: { igId?: string } } }).igData?.user?.igId
      if (igId && !url.searchParams.has("igId")) url.searchParams.set("igId", igId)

      anchor.href = url.href
    }

    document.addEventListener("click", decorate, true)
    document.addEventListener("auxclick", decorate, true)
    return () => {
      document.removeEventListener("click", decorate, true)
      document.removeEventListener("auxclick", decorate, true)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMOTIONAL BANNER (no seasonal/occasion frame)
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">Save Up To 43% Off</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 Free Yardwork Guides</span>
        </p>
      </div>

      {/* ============================================
          HEADER | Logo
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <TtsAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO | The age reframe
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <TtsAsset name="heroImage" alt="The Yeoman Handle attached to a string trimmer" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save Up To 43% + 2 Free Yardwork Guides</span>
        </div>

        <div className="mt-5 text-center">
          <h2
            id="hero-headline"
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight"
          >
            It Wasn&apos;t Your Age. It Was The Handle. <span className="text-[#C86F4C]">Here&apos;s What 40,000 Trimmers Switched To.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Whatever shape your back is in, notice what keeps setting it back: the one afternoon a week you spend folded over a trimmer. Twenty minutes bent over a grip that sits too low, and the bend never lets your back settle.
          </p>
        </div>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Make The Switch &rarr;
          </Button>
        </a>

        <div className="mt-5 text-center">
          <div className="flex justify-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-foreground font-medium">
            4.8 stars <span className="text-muted-foreground mx-1">&bull;</span> 800 reviews <span className="text-muted-foreground mx-1">&bull;</span> 40,000+ trimmers upgraded
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE | 1 cause block + 4 product points (PRODUCT-AWARE)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 */}
        <div id="reason-1" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Cause
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Every brand puts the grip below your reach
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            STIHL. Echo. Ryobi. EGO. Husqvarna.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <img src="/its-not-your-age-reason1.jpg" alt="Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft" className="w-full h-full object-cover" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            It doesn&apos;t matter which one is in your shed. Every brand mounts the loop handle low on the shaft, well below where your hand naturally sits, so you fold forward to reach it and stay folded for the whole pass. Hinge at the hips and hold it, and your lower back carries your whole upper body on a long lever. That is why you can feel fine all week and one afternoon puts you straight back to the start. <span className="font-bold text-foreground">You never chose that posture. The tool chose it for you, the day you bought it.</span>
          </p>
        </div>

        {/* Reason 2 */}
        <div id="reason-2" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Fix
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Change the handle, not what you expect from your body
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Plumb-Set&trade; grip angle
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TtsAsset name="reason1Image" alt="Side by side: folded over the trimmer with the low factory grip, then standing upright with the Yeoman Handle fitted" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Yeoman clamps onto the same shaft and extends the grip out to meet your hand where it already is, so there is nothing left to bend down to. That fixed angle is the Plumb-Set&trade;. <span className="font-bold text-foreground">The bend is gone, so there is nothing left loading your lower back.</span>
          </p>
        </div>

        {/* Reason 3 */}
        <div id="reason-3" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Built To Hold
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Machined aluminum, built to outlast the trimmer
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Stronger than the tool it clamps to
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <img src="/its-not-your-age-reason3.jpg" alt="Close view of the machined aluminum Hold-Fast bracket clamped to a trimmer shaft, with callouts for machined aluminum, reinforced bracket, stays put and lifetime warranty" className="w-full h-full object-cover" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Hold-Fast&trade; bracket is machined aluminum with a reinforced clamp that grips the shaft on two opposite faces, so the holding pressure spreads across the shaft instead of loading a single point. No creep, no rattle, no stopping mid-job to re-tighten it. <span className="font-bold text-foreground">Move it to your next machine ten years from now and it will still hold.</span>
          </p>
        </div>

        {/* Reason 4 */}
        <div id="reason-4" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Three Minutes
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            It goes on the trimmer already in your shed
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            26mm and 28mm . gas or battery
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TtsAsset name="reason3Image" alt="Tightening the Yeoman Handle onto a trimmer shaft with the included allen key" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            It fits 26mm and 28mm shafts across STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER, gas or battery. The bracket slides to wherever your hand naturally falls, which is why two people of different heights can share one. <span className="font-bold text-foreground">Three minutes with the included allen key. No drilling, no cutting, and nothing you have to do differently.</span>
          </p>
        </div>

        {/* Reason 5 */}
        <div id="reason-5" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Proof
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            An hour of trimming, and his back was fine
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            60-day trial &amp; lifetime warranty
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <img src="/its-not-your-age-reason5.png" alt="A verified buyer standing upright after an hour of trimming with the Yeoman Handle, review overlaid" className="w-full h-full object-cover" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            That is a verified buyer, and he did not change anything about himself. He changed the handle. Bolt it on, work a full Saturday, and if your back doesn&apos;t feel the difference you get a full refund, and you don&apos;t even have to send it back. <span className="font-bold text-foreground">You are not being asked to believe anything about your back. Only to test a handle.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SHOWCASE
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            Lifetime Warranty + 60-Day Guarantee
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            The Handle That Took The Bend Out Of The Job
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            It bolts onto the trimmer you already own and extends the grip out to your hand. Nothing about your body has to change.
          </p>

          <div className="mb-8 text-center">
            <div className="flex justify-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-foreground font-medium">
              4.8 stars <span className="text-muted-foreground mx-1.5">|</span> 800 reviews <span className="text-muted-foreground mx-1.5">|</span> 40,000+ trimmers upgraded
            </p>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">Today: Save Up To 43% + 2 Free Yardwork Guides</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <TtsAsset name={activeImage} alt="The Yeoman Handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-5">
              {PRODUCT_THUMBS.map((name, i) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveImage(name)}
                  aria-label={`Show product view ${i + 1}`}
                  aria-pressed={activeImage === name}
                  className={`relative aspect-square rounded-md border-2 bg-muted transition-colors cursor-pointer overflow-hidden p-0 ${activeImage === name ? "border-primary" : "border-border hover:border-primary/60"}`}
                >
                  <TtsAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TtsAsset name="benefitIcon1" alt="Posture" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Plumb-Set&trade; extends the grip out to your hand</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TtsAsset name="benefitIcon2" alt="Clamp" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Hold-Fast&trade; bracket grips and holds, every pass</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TtsAsset name="benefitIcon3" alt="Install" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Three-minute install on the trimmer you already own</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TtsAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">60-day trial + lifetime warranty, switch with confidence</p>
              </div>
            </div>

            <a href={PDP_URL}>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-foreground text-foreground font-bold hover:bg-muted bg-transparent py-6 rounded-lg"
              >
                See Full Product Details
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          REVIEWS | verbatim Voice Bank quotes, all age-anchored
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            They All Thought It Was Their Age Too
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800 reviews</p>
        </div>

        <div className="space-y-4">

          {/* Review 1 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My back is just fine!&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I am 72 years old, using my big still weed eater hurt my back after about 20 minutes. I just finished about 1 hr. And my back is just fine! Wish I would have bought this years ago.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Verified Buyer, 72</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Why did I wait to order this?&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Why did I wait to order this? I have 3-4 hours of mowing and edging every week. Edging at 65 was a painful experience, being bent over for an hour. Not anymore!
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Verified Buyer, 65</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;At 46 it&apos;s not going to get easier.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              6 hours of string trimming this week, crippled me for days. At 46 it&apos;s not going to get easier. Solve a problem you get my money.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Verified Buyer, 46</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I&apos;m 80 and still take care of my 1.5 acre property.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;m 80 years old and still take care of my 1.5 acre property. This will help me immensely.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Verified Buyer, 80</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know before you blame another summer on your back.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it fit my trimmer?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If you have a string trimmer, weed eater, or weed wacker with a straight or curved shaft and a loop handle, it fits. The Hold-Fast&trade; bracket adjusts for 26mm and 28mm shafts, the standard range covering most STIHL, Echo, Husqvarna, Ryobi, EGO, Greenworks, and BLACK+DECKER models, gas or battery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How hard is it to install?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Three minutes with the included allen key. Slide the Yeoman onto the shaft where your hand naturally falls, tighten the bolt. No drilling, no cutting, no zip ties. You don&apos;t even have to remove the factory handle if you don&apos;t want to. If you can change a battery, you can install this.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              I&apos;m in my 40s. Is this only for older guys?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              No. The bend is the same bend whatever age you are, and so is the load on your lower back. What changes with age is how long you feel it afterwards, which is why older buyers notice the difference fastest. Plenty of buyers are in their thirties and forties and bought it after one bad weekend. One of them put it plainly: six hours of string trimming crippled him for days, and at 46 he could see where that was heading.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it turns out it really was my age?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Then you keep your money, and you keep the handle. You have 60 days to test it on your own yard, on your own trimmer. If your back feels exactly the same, we refund you in full and you don&apos;t even have to ship it back. The only way to find out which one it was is to remove the bend and see what happens.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What does the lifetime warranty cover?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If the Hold-Fast&trade; bracket wears, the grip separates, or the aluminum shaft bends under normal use, we replace it. No fine print. No expiration. We built this to be the last trimmer handle you buy.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============================================
          STICKY CTA
          ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#4A3F35]/95 backdrop-blur-md border-t-2 border-[#4A3F35] py-4 px-4 z-50 shadow-2xl">
        <div className="max-w-lg mx-auto">
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 text-base rounded-lg shadow-lg transition-all"
            >
              Save Up To 43% + 2 Free Yardwork Guides &rarr;
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
