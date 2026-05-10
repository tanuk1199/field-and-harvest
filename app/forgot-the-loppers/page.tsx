"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FtlAsset } from "@/components/ftl-asset"
import { FTL_PRODUCT_GALLERY } from "@/lib/ftl-images"

const PDP_URL = "https://fieldandharvestco.com/products/grange-carrier-yard-garden-apron"

const EBOOK_VARIANTS = [
  "42576239296555", // The Endless Harvest
  "42576214949931", // Harvest Keeper's Handbook
] as const

const VARIANTS = [
  {
    id: "44046982414379",
    label: "1 Carrier",
    price: 49,
    compareAt: 80,
    badge: "Most Popular",
  },
  {
    id: "44046982447147",
    label: "2 Carriers",
    price: 89,
    compareAt: 160,
    badge: "Best Value — Save 44%",
  },
  {
    id: "44047033663531",
    label: "3 Carriers",
    price: 129,
    compareAt: 240,
    badge: "Family Stack — Save 46%",
  },
] as const

const FREE_SHIPPING_THRESHOLD = 85

const cartPermalink = (variantId: string) => {
  const items = [`${variantId}:1`, ...EBOOK_VARIANTS.map((id) => `${id}:1`)].join(",")
  return `https://fieldandharvestco.com/cart/${items}?checkout`
}

// The 12 trips — ordered from "everyone's done this" → "uncomfortably specific" → "callback to the lol"
const TRIPS = [
  "Going back for the loppers.",
  "Going back for the loppers. Again.",
  "Going back for the gloves you took off to scratch your nose.",
  "Going back for the coffee.",
  "Going back for the basket you didn't bring.",
  "Going back for the eggs you forgot to grab from the coop.",
  "Going back for the phone, which is somehow on the porch.",
  "Going back for the rake you put down ten minutes ago and lost.",
  "Going back for the mail.",
  "Going back to find the kid who wandered off three trips ago.",
  "Going back to grab the second pair of pruners. (You don't own a second pair.)",
  "Going back for nothing. You just forgot why you went inside.",
] as const

export default function ForgotTheLoppersPage() {
  const [variantIdx, setVariantIdx] = useState<number>(0)
  const [galleryIdx, setGalleryIdx] = useState<number>(0)
  const [hideSticky, setHideSticky] = useState<boolean>(false)
  const buyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!buyRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setHideSticky(entry.isIntersecting),
      { rootMargin: "0px 0px -120px 0px" }
    )
    observer.observe(buyRef.current)
    return () => observer.disconnect()
  }, [])

  const variant = VARIANTS[variantIdx]
  const subtotal = variant.price
  const compareSubtotal = variant.compareAt
  const savings = compareSubtotal - subtotal
  const savingsPct = Math.round(((compareSubtotal - subtotal) / compareSubtotal) * 100)
  const freeShippingUnlocked = subtotal >= FREE_SHIPPING_THRESHOLD

  return (
    <div className="min-h-screen bg-[#FAF6EC] overflow-x-hidden">
      {/* ============================================
          PROMOTIONAL BANNER
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">SAVE UP TO 46%</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 FREE YARDWORK GUIDES</span>
        </p>
      </div>

      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <FtlAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          COMIC HERO — continues the ad
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-4">
        <div className="text-center mb-6">
          <p className="text-[11px] uppercase tracking-widest font-bold text-foreground/60 mb-3">If you saw the comic…</p>
          <h1 className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] text-balance tracking-tight uppercase">
            One Pass Through The Yard. <span className="text-[#C86F4C]">Instead Of Five.</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/70 mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            The carrier that holds the loppers, the gloves, the coffee, the basket, the eggs, the rake, and whatever else your yard&apos;s about to make you walk back for.
          </p>
        </div>

        {/* Hero anchor image — the comic itself, no gallery stack */}
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F4EDD9] border-2 border-[#2D150B]/15 shadow-md">
          <FtlAsset
            name="heroPanel1"
            alt="One pass through the yard instead of five"
            className="w-full h-full object-cover"
            fallbackClassName="w-full h-full flex items-center justify-center text-6xl"
          />
        </div>

        {/* Hero CTA */}
        <a href="#buy" className="block mt-8">
          <Button
            size="lg"
            className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Stop Doing Laps — Save Up to 46%
          </Button>
        </a>

        {/* Social proof */}
        <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-foreground font-medium">
            4.8 stars <span className="text-muted-foreground mx-1">&bull;</span> 800+ reviews <span className="text-muted-foreground mx-1">&bull;</span> 22,000+ owners
          </p>
        </div>
      </section>

      {/* ============================================
          THE LIST — 12 trips you'll stop making
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight text-balance uppercase">
            12 Trips You&apos;ll Stop Making
          </h2>
          <p className="text-sm text-foreground/70 mt-3 leading-relaxed max-w-md mx-auto">
            Be honest. You&apos;ve done at least eight of these.
          </p>
        </div>

        <ol className="space-y-2">
          {TRIPS.map((copy, i) => (
            <li
              key={i}
              className="bg-card border-2 border-[#2D150B]/12 rounded-xl shadow-sm overflow-hidden flex items-stretch"
            >
              {/* Trip number — stamped */}
              <div className="flex-shrink-0 w-16 sm:w-20 bg-[#FFF6E0] border-r-2 border-[#2D150B]/10 flex flex-col items-center justify-center py-3">
                <span className="text-[9px] uppercase tracking-widest font-bold text-foreground/50">Trip</span>
                <span className="text-3xl sm:text-4xl font-black text-foreground leading-none mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Copy column */}
              <div className="flex-1 px-4 py-4 flex items-center">
                <p className="text-base sm:text-lg text-foreground leading-snug font-bold text-pretty">
                  {copy}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Closer line under the list */}
        <p className="text-center text-base text-foreground/80 mt-8 font-medium leading-relaxed max-w-sm mx-auto">
          Or you put on the carrier once, and your Saturday list <span className="font-bold">shrinks by half.</span>
        </p>
      </section>

      {/* ============================================
          THE REVEAL — what goes in the pocket instead
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-6">
          <p className="text-[11px] uppercase tracking-widest font-bold text-[#C86F4C] mb-2">The Carrier</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight text-balance uppercase">
            Here&apos;s What Goes <span className="text-[#C86F4C]">In The Pocket Instead.</span>
          </h2>
        </div>

        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F4EDD9] border-2 border-[#2D150B]/15 shadow-lg">
          <FtlAsset
            name="revealPanel"
            alt="The Grange Carrier with all twelve items in its pockets"
            className="w-full h-full object-cover"
            fallbackClassName="w-full h-full flex items-center justify-center text-6xl"
          />
        </div>

        <p className="text-center text-base text-foreground/80 mt-6 leading-relaxed max-w-md mx-auto">
          Loppers. Gloves. Coffee. Basket. Eggs. Rake. Mail. Phone.
          <br className="hidden sm:inline" />{" "}
          <span className="font-bold">All of it. One trip.</span>
        </p>
      </section>

      {/* ============================================
          BUY SECTION — same conversion stack as /the-saturday-tool
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 leading-tight text-balance uppercase">
            One Carrier. <span className="text-[#C86F4C]">Twelve Fewer Laps.</span>
          </h2>
          <p className="text-base text-foreground/70 leading-relaxed max-w-md mx-auto">
            22,000+ owners. 4.8 stars. Backed for life. The thing that earns its hook by the back door.
          </p>
        </div>

        <div className="bg-card border-2 border-[#2D150B]/12 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">UP TO 46% OFF + 2 FREE YARDWORK GUIDES — WHILE SUPPLIES LAST</p>
          </div>

          <div className="p-5">
            {/* Product image — driven by selected thumbnail */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <FtlAsset
                key={FTL_PRODUCT_GALLERY[galleryIdx]}
                name={FTL_PRODUCT_GALLERY[galleryIdx]}
                alt="The Grange Carrier"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
              />
            </div>

            {/* Product thumbnails — clickable */}
            <div className="grid grid-cols-6 gap-1.5 mb-5">
              {FTL_PRODUCT_GALLERY.map((name, i) => {
                const selected = i === galleryIdx
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setGalleryIdx(i)}
                    aria-label={`Show product image ${i + 1}`}
                    aria-pressed={selected}
                    className={`relative aspect-square rounded-md border-2 bg-muted overflow-hidden transition-all ${
                      selected ? "border-[#C86F4C] ring-2 ring-[#C86F4C]/30" : "border-border hover:border-foreground/40"
                    }`}
                  >
                    <FtlAsset
                      name={name}
                      alt={`Product view ${i + 1}`}
                      className="w-full h-full object-cover"
                      fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold"
                    />
                  </button>
                )
              })}
            </div>

            {/* Benefit chips */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <FtlAsset name="benefitIcon1" alt="Lightning" className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" fallbackClassName="text-base flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground font-semibold leading-snug">1-Second Drop-Chute empties the load instantly</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <FtlAsset name="benefitIcon2" alt="Feather" className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" fallbackClassName="text-base flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground font-semibold leading-snug">Zero-Gravity Harness carries 20 lbs pain-free</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <FtlAsset name="benefitIcon3" alt="Shield" className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" fallbackClassName="text-base flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground font-semibold leading-snug">600D Canvas, thorn-proof and built for decades</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <FtlAsset name="benefitIcon4" alt="Water drop" className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" fallbackClassName="text-base flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground font-semibold leading-snug">Water-resistant lining keeps your clothes clean</p>
              </div>
            </div>

            <div className="border-t border-border mb-5" />

            {/* ===== BUY INTERFACE ===== */}
            <div ref={buyRef} id="buy" className="space-y-5 scroll-mt-[280px] md:scroll-mt-[320px]">
              {/* Variant selector */}
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3">Choose Your Bundle</p>
                <div className="space-y-2.5">
                  {VARIANTS.map((v, i) => {
                    const selected = i === variantIdx
                    const pct = Math.round(((v.compareAt - v.price) / v.compareAt) * 100)
                    return (
                      <button
                        key={v.id}
                        onClick={() => setVariantIdx(i)}
                        className={`w-full text-left rounded-lg border-2 transition-all p-4 flex items-center justify-between gap-3 ${
                          selected ? "border-[#C86F4C] bg-[#C86F4C]/5 shadow-md" : "border-border bg-background hover:border-foreground/30"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`flex-shrink-0 w-5 h-5 rounded-full border-2 transition-colors ${
                              selected ? "border-[#C86F4C] bg-[#C86F4C]" : "border-border"
                            }`}
                            aria-hidden="true"
                          >
                            {selected && <span className="block w-1.5 h-1.5 rounded-full bg-white mx-auto mt-[5px]" />}
                          </span>
                          <div className="min-w-0">
                            <p className="font-bold text-foreground text-base leading-tight">{v.label}</p>
                            <p className="text-xs text-[#C86F4C] font-semibold mt-0.5 truncate">{v.badge}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-bold text-foreground text-base leading-none">${v.price}</p>
                          <p className="text-xs text-muted-foreground line-through leading-none mt-1">${v.compareAt}</p>
                          <p className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] mt-1">Save {pct}%</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Free shipping unlock */}
              {freeShippingUnlocked ? (
                <div className="bg-[#E8F1E2] border-2 border-[#5A7A4A] rounded-lg p-3.5 flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5A7A4A] flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#3F5C32] leading-tight">Free Shipping Unlocked</p>
                    <p className="text-[11px] text-[#3F5C32]/80 mt-0.5 leading-relaxed">
                      Your bundle ships free — automatically applied at checkout.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-background border border-dashed border-border rounded-lg p-3.5 flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold text-sm">🚚</div>
                  <div className="min-w-0">
                    <p className="text-xs text-foreground leading-snug">
                      Add <span className="font-bold">2 Carriers</span> or more to unlock <span className="font-bold">free shipping</span>.
                    </p>
                  </div>
                </div>
              )}

              {/* Subtotal */}
              <div className="border-t border-border pt-5">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-muted-foreground">Subtotal</p>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground line-through mr-2">${compareSubtotal}</span>
                    <span className="text-2xl font-bold text-foreground">${subtotal}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">You save</p>
                  <p className="text-sm font-bold text-[#C86F4C]">${savings} ({savingsPct}% off)</p>
                </div>
              </div>

              {/* Add to Cart — fires Meta Pixel AddToCart on click */}
              <a
                href={cartPermalink(variant.id)}
                className="block"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as { fbq?: (...args: unknown[]) => void }).fbq) {
                    (window as { fbq: (...args: unknown[]) => void }).fbq("track", "AddToCart", {
                      content_ids: [variant.id, ...EBOOK_VARIANTS],
                      content_type: "product",
                      content_name: `Grange Carrier — ${variant.label}`,
                      contents: [
                        { id: variant.id, quantity: 1, item_price: variant.price },
                        ...EBOOK_VARIANTS.map((id) => ({ id, quantity: 1, item_price: 0 })),
                      ],
                      value: variant.price,
                      currency: "USD",
                    })
                  }
                }}
              >
                <Button
                  size="lg"
                  className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
                >
                  Add to Cart — ${subtotal}
                </Button>
              </a>

              {/* Two free guides — bonus reinforcement after CTA */}
              <div className="bg-[#F4EFE3] rounded-2xl border border-[#D4C4B0] p-4 md:p-5">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-[#4A3F35]">Two Free Guides</p>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/60">Ships with every order</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative flex-1 aspect-[3/4] rounded-md overflow-hidden bg-white shadow-md ring-1 ring-[#D4C4B0]">
                    <FtlAsset name="ebookEndlessHarvest" alt="The One-Pass Yard cover" className="absolute inset-0 w-full h-full object-cover" fallbackClassName="absolute inset-0 w-full h-full flex items-center justify-center text-2xl" />
                  </div>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white shadow-sm border border-[#D4C4B0] flex items-center justify-center text-[#4A3F35] font-bold text-sm">+</div>
                  <div className="relative flex-1 aspect-[3/4] rounded-md overflow-hidden bg-white shadow-md ring-1 ring-[#D4C4B0]">
                    <FtlAsset name="ebookHarvestKeepers" alt="The Yard Tool Audit cover" className="absolute inset-0 w-full h-full object-cover" fallbackClassName="absolute inset-0 w-full h-full flex items-center justify-center text-2xl" />
                  </div>
                </div>

                <div className="flex gap-3 mt-3">
                  <div className="flex-1 px-2 text-center">
                    <p className="text-[11px] font-bold text-foreground leading-tight">The One-Pass Yard</p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">$18 value</p>
                  </div>
                  <div className="flex-shrink-0 w-7" aria-hidden="true" />
                  <div className="flex-1 px-2 text-center">
                    <p className="text-[11px] font-bold text-foreground leading-tight">The Yard Tool Audit</p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">$15 value</p>
                  </div>
                </div>

                <p className="text-[11px] text-foreground/70 mt-3 leading-relaxed text-center">
                  Both digital guides auto-added at checkout. Yours to keep — even if you return.
                </p>
              </div>

              {/* Trust row */}
              <div className="flex items-center justify-center gap-3 flex-wrap text-[11px] text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5"><span className="text-[#C86F4C]">✓</span> 60-day trial</span>
                <span className="flex items-center gap-1.5"><span className="text-[#C86F4C]">✓</span> Lifetime warranty</span>
                <span className="flex items-center gap-1.5"><span className="text-[#C86F4C]">✓</span> Free shipping over $85</span>
              </div>

              {/* PDP fallback */}
              <div className="text-center">
                <a href={PDP_URL} className="text-xs text-muted-foreground underline hover:text-foreground">
                  See full product details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          3 SHORT REASONS — abbreviated closers
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-5">
        <div className="text-center mb-2">
          <p className="text-[11px] uppercase tracking-widest font-bold text-[#C86F4C] mb-2">If you&apos;re still scrolling</p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight text-balance uppercase">
            Three things you should know
          </h2>
        </div>

        {[
          {
            badge: "DROP-CHUTE",
            head: "One pull. The whole load empties in a second.",
            img: "reason1Image" as const,
            body: "The bottom of the carrier is a Quick-Release Drop-Chute. Pull the strap, the floor opens, the entire load drops in a second — onto the compost pile, the kitchen counter, or the yard-waste bag. No bending. No tipping.",
          },
          {
            badge: "600D CANVAS",
            head: "Won't bail on you next season.",
            img: "reason2Image" as const,
            body: "Field-Weave 600D canvas — the same fabric premium hiking packs are built from. Thorn-proof, puncture-resistant, semi-rigid. Most owners report theirs looks better-broken-in (not worn out) at the 3–5 year mark.",
          },
          {
            badge: "60-DAY TRIAL",
            head: "If it's not the one, full refund.",
            img: "reason3Image" as const,
            body: "Wear it for a full month of weekends. If it's not the carrier you want hanging by the back door every Saturday, send it back. Lifetime warranty on canvas, stitching, hardware, and harness. We cover return shipping. No restocking fee.",
          },
        ].map((r, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/60">{r.badge}</span>
              <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance leading-tight">{r.head}</h3>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4 shadow-md">
              <FtlAsset name={r.img} alt={r.head} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
            </div>
            <p className="text-foreground/80 text-pretty leading-relaxed text-base">{r.body}</p>
          </div>
        ))}
      </section>

      {/* ============================================
          REVIEWS — voice-of-trips
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2 leading-tight uppercase">What Owners Say</h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800+ reviews</p>
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />)}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Saturday cleanup used to take all morning. Now it&apos;s done in two hours.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I have a half-acre and there&apos;s always something to pick up — sticks after a windy night, weeds from the bed, deadheads, the rocks my kid finds. I used to make five trips to the compost pile. Now I do one loop with this thing on, drop-chute everything into the bag, done.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Tom R.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />)}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;It hasn&apos;t left the hook by my back door in four months.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I bought it for spring planting and figured I&apos;d put it away by July. It&apos;s now June and it&apos;s on a hook by the back door every single day. I wear it for tomato runs, herb cuts, leaf cleanup, and even just walking the dog while I check on things. The pockets hold everything.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Sarah M.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />)}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;The only outside tool I own that doesn&apos;t end up in the back of the shed.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Every spring I buy something for the yard and every August it&apos;s in a pile of stuff I forgot I owned. This thing is on a peg by the kitchen door. I see it every time I walk past. I put it on. I use it.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Lisa P.</span>
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
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 leading-tight uppercase">Common Questions</h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know before it shows up at your door.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="q1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is this just for harvest, or can I use it year-round?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Year-round. Most owners use it for far more than harvest — spring weeding, fall leaf and twig cleanup, hauling rocks out of new beds, deadheading, mulching, kindling runs, pet and chicken chores, even general toolbelt duty for property work. The Drop-Chute empties everything onto the compost pile or yard-waste bag in one motion.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q-offer" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How does the discount + 2 free guides offer work?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You get up to 46% off the Grange Carrier (39% off a single, 44% off the 2-pack, 46% off the 3-pack) plus two free yardwork guides — The One-Pass Yard ($18 value), the routes and pocket loadouts that turn five Saturday trips into one, and The Yard Tool Audit ($15 value), the once-a-season tool check that catches dull blades, loose handles, and gear about to fail. Total $33 in free guides, automatically added at checkout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How long does this actually last?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Field-Weave 600D Canvas is the same fabric used in premium hiking packs — thorn-proof, puncture-resistant, semi-rigid. Most owners report theirs looking better-broken-in (not worn out) at the 3–5 year mark. The lifetime warranty covers material and craftsmanship defects.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will the harness fit me?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Cross-Back Harness is fully adjustable and fits most body types. Men, women, petite, broad-shouldered. Owners from their 30s through their 80s wear it comfortably. If it doesn&apos;t fit, the 60-day guarantee covers you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How much does it actually hold?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The kangaroo pouch is rated to 20 pounds. That&apos;s a full peck of tomatoes, plus tools, plus your phone, plus a fistful of weeds. Or a Saturday-morning haul of leaves, twigs, and acorns. Holds its shape under load — no collapsing, no sagging.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if I don&apos;t like it?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Full 60-day money-back guarantee. Wear it for a full month of weekends. If it&apos;s not the carrier you want hanging by the door every Saturday, return it for a complete refund. We cover return shipping. No restocking fee.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How fast does it ship?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders are processed within 1 business day. Standard shipping is 3–5 business days. Free shipping on orders over $85.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============================================
          STICKY CTA
          ============================================ */}
      <div
        aria-hidden={hideSticky}
        className={`fixed bottom-0 left-0 right-0 bg-[#4A3F35]/95 backdrop-blur-md border-t-2 border-[#4A3F35] py-4 px-4 z-50 shadow-2xl transition-all duration-300 ease-out ${
          hideSticky ? "translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-lg mx-auto">
          <a href="#buy">
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg mb-2.5 shadow-lg transition-all hover:shadow-xl"
            >
              Stop Doing Laps — Save Up to 46%
            </Button>
          </a>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />)}
            </div>
            <p className="text-xs text-white/80 font-semibold">
              4.8/5 (800+ Reviews) <span className="text-muted-foreground mx-1">&bull;</span> 22,000+ Owners
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
