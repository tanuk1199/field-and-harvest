"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SatAsset } from "@/components/sat-asset"
import { SAT_PRODUCT_GALLERY } from "@/lib/sat-images"

const PDP_URL = "https://fieldandharvestco.com/products/grange-carrier-yard-garden-apron"

// Ebook variant IDs — auto-added to checkout alongside the carrier (both $0).
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

// Multi-line cart permalink — drops carrier + both free guides into checkout in one click.
const cartPermalink = (variantId: string) => {
  const items = [`${variantId}:1`, ...EBOOK_VARIANTS.map((id) => `${id}:1`)].join(",")
  return `https://fieldandharvestco.com/cart/${items}?checkout`
}

export default function TheSaturdayToolPage() {
  const [variantIdx, setVariantIdx] = useState<number>(0)
  const [galleryIdx, setGalleryIdx] = useState<number>(0)
  const [hideSticky, setHideSticky] = useState<boolean>(false)
  const buyRef = useRef<HTMLDivElement>(null)

  // Hide the sticky CTA whenever the in-page buy interface is in the viewport,
  // so we don't show two competing CTAs at once. Comes back when the user
  // scrolls past the buy section into the FAQ.
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ============================================
          PROMOTIONAL BANNER — offer-led
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">SAVE UP TO 46%</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 FREE GARDENING GUIDES — LIMITED TIME</span>
        </p>
      </div>

      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <SatAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO — Saturday Tool framing
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <SatAsset name="heroImage" alt="The Grange Carrier hanging by the back door" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Offer badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground">Save Up to 46% + 2 Free Gardening Guides ($33 Value)</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            The Saturday Tool That Lives <span className="text-[#C86F4C]">By Your Back Door</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Yard cleanup, weeding, deadheading, leaf piles, eggs from the coop, the harvest at noon. Pockets that don&apos;t quit. Hands that stay free. The carrier 22,000+ owners stopped putting away after they bought it.
          </p>
        </div>

        {/* Primary CTA — anchors to in-page buy section */}
        <a href="#buy">
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Save Up to 46% + Get 2 Free Guides
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
          LISTICLE — 6 yard+garden+harvest reasons
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">
        {/* Reason 1 — YEAR-ROUND */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              YEAR-ROUND
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            January twigs. October leaves. July tomatoes. Same carrier.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <SatAsset name="reason1Image" alt="Year-round Saturday tool — January twigs, October leaves, July tomatoes" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most garden aprons get pulled out for two months in summer and forgotten the rest of the year. This carrier isn&apos;t built like that. Storm-twigs in March. First weeds in April. Tomatoes and basil in July. Acorns and leaves in October. Kindling runs in December. Same carrier, same pockets, same one-trip-instead-of-five. <span className="font-bold text-foreground">It earns the hook by your back door because it works for whatever the yard hands you that day.</span>
          </p>
        </div>

        {/* Reason 2 — DROP-CHUTE */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              DROP-CHUTE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            One pull. The whole load empties in a second.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <SatAsset name="reason2Image" alt="1-Second Quick-Release Drop-Chute" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most aprons turn into a small wrestling match every time you need to empty them. You squat, you crouch, you tip them out by hand. The Grange Carrier doesn&apos;t. The bottom is a Quick-Release Drop-Chute — pull the strap, the floor opens, the entire load drops in a second. Onto the compost pile. Onto the kitchen counter. Into the yard-waste bag. <span className="font-bold text-foreground">No bending. No tipping. No second trip.</span> It&apos;s the part of the carrier everyone shows their friends first.
          </p>
        </div>

        {/* Reason 3 — HANDS FREE */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              HANDS FREE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Pruners, leash, coffee, eggs. Both hands stay free.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <SatAsset name="reason3Image" alt="Pruners, leash, coffee, eggs — both hands stay free" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The kangaroo-style pouch holds a full peck without collapsing. Built-in tool sheaths keep pruning shears and the weeder within reach. A zippered vault pocket protects your phone from dirt and moisture. Both hands stay free for the gate, the dog, the kid, the rocks you pull out of the bed, the deadheaded blooms on the way back. <span className="font-bold text-foreground">No more juggling a basket, a bucket, and a phone in the same hand.</span>
          </p>
        </div>

        {/* Reason 4 — ALL-DAY COMFORT */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              ALL-DAY COMFORT
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            20 pounds across your shoulders, not your neck
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <SatAsset name="reason4Image" alt="Zero-Gravity Cross-Back Harness — 20 pounds across the shoulders" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most aprons hang everything from your neck. By noon, you&apos;re done — not because the yard is, but because your body is. The Zero-Gravity Cross-Back Harness distributes 20 pounds across the shoulders and back like a hiking pack. <span className="font-bold text-foreground">The Saturday list runs longer than your back used to.</span> Owners from their 30s through their 80s wear it for hours without fatigue.
          </p>
        </div>

        {/* Reason 5 — STAYS CLEAN */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              STAYS CLEAN
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Your pants stop dying in the yard
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <SatAsset name="reason5Image" alt="Dry-Wear water-resistant lining" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Wet leaves, sap, mud, tomato juice, sticky weed roots, the eternal mystery of pinecones in the dryer. Cotton aprons soak through in minutes and transfer everything to the clothes underneath. The Dry-Wear barrier lines the entire pouch and blocks moisture on contact. A quick wipe-down and the carrier is ready for the next session — leaf cleanup at 9, harvest at noon, walking the dog at 6. <span className="font-bold text-foreground">Garden, yard, kitchen. Same shirt.</span>
          </p>
        </div>

        {/* Reason 6 — RISK-FREE */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              RISK-FREE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Lifetime warranty. 60-day trial. If it&apos;s not the one, full refund.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <SatAsset name="reason6Image" alt="Lifetime warranty guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Lifetime warranty covers the canvas, stitching, hardware, and harness against defects in materials and craftsmanship. 60-day trial means you can wear it through a full month of weekends. If it&apos;s not the carrier you want hanging by the door every Saturday, send it back. We cover return shipping. No restocking fee. No fine print. <span className="font-bold text-foreground">Zero risk. Just the carrier.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT + BUY SECTION (combined)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            Up to 46% OFF + 2 Free Gardening Guides — Limited Time
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            The Carrier You&apos;ll Find Ten Years From Now Still Hanging Where You Left It
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            22,000+ owners stopped putting theirs away after they bought it. Used for harvest, weeding, yard cleanup, leaf hauls, kindling runs, pet and chicken chores. Built once. Backed for life.
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-foreground font-medium">
              4.8 stars <span className="text-muted-foreground mx-1.5">|</span> 800+ reviews <span className="text-muted-foreground mx-1.5">|</span> 22,000+ owners
            </p>
          </div>
        </div>

        {/* Product card */}
        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">UP TO 46% OFF + 2 FREE GARDENING GUIDES — WHILE SUPPLIES LAST</p>
          </div>

          <div className="p-5">
            {/* Product image — driven by the selected gallery thumbnail */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <SatAsset
                key={SAT_PRODUCT_GALLERY[galleryIdx]}
                name={SAT_PRODUCT_GALLERY[galleryIdx]}
                alt="The Grange Carrier"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
              />
            </div>

            {/* Product thumbnails — click to swap the main image */}
            <div className="grid grid-cols-6 gap-1.5 mb-5">
              {SAT_PRODUCT_GALLERY.map((name, i) => {
                const selected = i === galleryIdx
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setGalleryIdx(i)}
                    aria-label={`Show product image ${i + 1}`}
                    aria-pressed={selected}
                    className={`relative aspect-square rounded-md border-2 bg-muted overflow-hidden transition-all ${
                      selected
                        ? "border-[#C86F4C] ring-2 ring-[#C86F4C]/30"
                        : "border-border hover:border-foreground/40"
                    }`}
                  >
                    <SatAsset
                      name={name}
                      alt={`Product view ${i + 1}`}
                      className="w-full h-full object-cover"
                      fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold"
                    />
                  </button>
                )
              })}
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <SatAsset name="benefitIcon1" alt="Lightning" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">1-Second Drop-Chute empties the load instantly</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <SatAsset name="benefitIcon2" alt="Feather" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Zero-Gravity Harness carries 20 lbs pain-free</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <SatAsset name="benefitIcon3" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">600D Canvas, thorn-proof and built for decades</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <SatAsset name="benefitIcon4" alt="Water drop" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Water-resistant lining keeps your clothes clean</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border mb-5" />

            {/* ===== BUY INTERFACE =====
                #buy anchor sits here so any CTA lands users with
                the variant picker in focus and a sliver of the
                gallery + benefits visible above the fold. */}
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
                          selected
                            ? "border-[#C86F4C] bg-[#C86F4C]/5 shadow-md"
                            : "border-border bg-background hover:border-foreground/30"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`flex-shrink-0 w-5 h-5 rounded-full border-2 transition-colors ${
                              selected ? "border-[#C86F4C] bg-[#C86F4C]" : "border-border"
                            }`}
                            aria-hidden="true"
                          >
                            {selected && (
                              <span className="block w-1.5 h-1.5 rounded-full bg-white mx-auto mt-[5px]" />
                            )}
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

              {/* Free shipping unlock — appears when subtotal hits $85+ */}
              {freeShippingUnlocked ? (
                <div className="bg-[#E8F1E2] border-2 border-[#5A7A4A] rounded-lg p-3.5 flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5A7A4A] flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#3F5C32] leading-tight">Free Shipping Unlocked</p>
                    <p className="text-[11px] text-[#3F5C32]/80 mt-0.5 leading-relaxed">
                      Your bundle ships free — automatically applied at checkout.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-background border border-dashed border-border rounded-lg p-3.5 flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold text-sm">
                    🚚
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-foreground leading-snug">
                      Add <span className="font-bold">2 Carriers</span> or more to unlock <span className="font-bold">free shipping</span>.
                    </p>
                  </div>
                </div>
              )}

              {/* Subtotal + savings */}
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

              {/* Checkout CTA — fires Meta Pixel AddToCart on click */}
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
                  <p className="text-[11px] uppercase tracking-wider font-bold text-[#4A3F35]">
                    Two Free Guides
                  </p>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/60">Ships with every order</span>
                </div>

                {/* Image row — all 3 horizontally + vertically aligned */}
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 aspect-[3/4] rounded-md overflow-hidden bg-white shadow-md ring-1 ring-[#D4C4B0]">
                    <SatAsset
                      name="ebookEndlessHarvest"
                      alt="The Endless Harvest gardening guide cover"
                      className="absolute inset-0 w-full h-full object-cover"
                      fallbackClassName="absolute inset-0 w-full h-full flex items-center justify-center text-2xl"
                    />
                  </div>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white shadow-sm border border-[#D4C4B0] flex items-center justify-center text-[#4A3F35] font-bold text-sm">
                    +
                  </div>
                  <div className="relative flex-1 aspect-[3/4] rounded-md overflow-hidden bg-white shadow-md ring-1 ring-[#D4C4B0]">
                    <SatAsset
                      name="ebookHarvestKeepers"
                      alt="Harvest Keeper's Handbook cover"
                      className="absolute inset-0 w-full h-full object-cover"
                      fallbackClassName="absolute inset-0 w-full h-full flex items-center justify-center text-2xl"
                    />
                  </div>
                </div>

                {/* Text row — mirrors the image flex so titles sit under the right covers */}
                <div className="flex gap-3 mt-3">
                  <div className="flex-1 px-2 text-center">
                    <p className="text-[11px] font-bold text-foreground leading-tight">The Endless Harvest</p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">$18 value</p>
                  </div>
                  <div className="flex-shrink-0 w-7" aria-hidden="true" />
                  <div className="flex-1 px-2 text-center">
                    <p className="text-[11px] font-bold text-foreground leading-tight">Harvest Keeper&apos;s Handbook</p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">$15 value</p>
                  </div>
                </div>

                <p className="text-[11px] text-foreground/70 mt-3 leading-relaxed text-center">
                  Both digital guides auto-added at checkout. Yours to keep — even if you return.
                </p>
              </div>

              {/* Trust row */}
              <div className="flex items-center justify-center gap-3 flex-wrap text-[11px] text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C86F4C]">✓</span> 60-day trial
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C86F4C]">✓</span> Lifetime warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#C86F4C]">✓</span> Free shipping over $85
                </span>
              </div>

              {/* PDP fallback link */}
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
          REVIEWS — Saturday-tool framed
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Owners Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800+ reviews</p>
        </div>

        <div className="space-y-4">
          {/* Review 1 — back-door integration */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;It hasn&apos;t left the hook by my back door in four months.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I bought it in February for spring planting and figured I&apos;d put it away by July. It&apos;s now June and it&apos;s been on a hook by the back door every single day. I wear it for tomato runs, herb cuts, leaf cleanup, and even just walking through the yard checking on things. The pockets hold everything. I forgot I owned three other aprons.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Sarah M.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — yard cleanup */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Saturday cleanup used to take all morning. Now it&apos;s done in two hours.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I have a half-acre and there&apos;s always something to pick up — sticks after a windy night, weeds from the bed, deadheads, the rocks my kid finds. I used to make five trips to the compost pile and the yard waste bag. Now I do one loop with this thing on, drop-chute everything into the bag, done. The grass doesn&apos;t even know I was out there.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Tom R.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 — comfort */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I&apos;m 68. The harness is the difference between gardening for an hour and gardening all morning.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              My old apron hung everything from my neck. My shoulders would be done by 10. I almost stopped gardening because I thought I was getting too old for it. The Cross-Back Harness puts the weight on my upper back, the way a hiking pack does. I don&apos;t feel the load. I&apos;ve been out there until lunchtime three Saturdays in a row.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Daniel K.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — Saturday tool */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;The only outside tool I own that doesn&apos;t end up in the back of the shed.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Every spring I buy something for the yard and every August it&apos;s in a pile of stuff I forgot I owned. This thing is on a peg by the kitchen door. I see it every time I walk past. I put it on. I use it. It&apos;s been four months and the canvas is just starting to look broken in. I get the feeling I&apos;ll be using it in ten years.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Lisa P.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ — Saturday-tool framed
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know before it shows up at your door.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-0" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is this just for harvest, or can I use it year-round?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Year-round. Most owners use it for far more than harvest — spring weeding, fall leaf and twig cleanup, hauling rocks out of new beds, deadheading, mulching, kindling runs, pet and chicken chores, even general toolbelt duty for property work. The 600D canvas handles thorns, sap, mud, and wet leaves without flinching, and the Drop-Chute empties everything onto the compost pile or yard waste bag in one motion. Owners who buy it in February are still wearing it through November.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-offer" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How does the discount + 2 free guides offer work?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You get up to 46% off the Grange Carrier (39% off a single, 44% off the 2-pack, 46% off the 3-pack) plus two free gardening guides — The Endless Harvest ($18 value) and the Harvest Keeper&apos;s Handbook for produce storage ($15 value). Total $33 in free guides, automatically added at checkout. The discount is already reflected in the price below. The offer runs while supplies last on this season&apos;s inventory. Once it ends, pricing returns to standard.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How long does this actually last?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Field-Weave 600D Canvas is the same fabric used in premium hiking packs — thorn-proof, puncture-resistant, semi-rigid. It doesn&apos;t fray or sag the way cotton aprons do. Most owners report theirs looking better-broken-in (not worn out) at the 3–5 year mark. The lifetime warranty covers material and craftsmanship defects, so if something goes wrong, we replace it.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will the harness fit me?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Cross-Back Harness is fully adjustable and fits most body types. Men, women, petite, broad-shouldered. The straps adjust in seconds and distribute weight evenly whether you&apos;re picking herbs or hauling 20 pounds of leaves. Owners from their 30s through their 80s wear it comfortably. If it doesn&apos;t fit, the 60-day guarantee covers you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How much does it actually hold?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The kangaroo pouch is rated to 20 pounds. That&apos;s a full peck of tomatoes, plus tools, plus your phone, plus a fistful of weeds. Or a Saturday-morning haul of leaves, twigs, and acorns. It holds its shape under load — no collapsing, no sagging. The harness handles the weight on your shoulders and back, not your neck.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if I don&apos;t like it?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Full 60-day money-back guarantee. Wear it for a full month of weekends. If it&apos;s not the carrier you want hanging by the door every Saturday, return it for a complete refund. We cover return shipping. No restocking fee. No forms. No hoops.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What&apos;s included?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Grange Carrier comes with the Zero-Gravity Cross-Back Harness, Quick-Release Drop-Chute, deep tool sheaths for pruning shears, a hidden waterproof phone pocket, The Endless Harvest gardening guide ($18 value), and the Harvest Keeper&apos;s Handbook for produce storage ($15 value). Plus the lifetime warranty on materials and craftsmanship.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
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
          STICKY CTA — anchors to in-page buy section
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
              Save Up to 46% + Get 2 Free Guides
            </Button>
          </a>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
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
