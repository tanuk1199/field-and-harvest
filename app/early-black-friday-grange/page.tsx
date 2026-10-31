"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Clock, Droplets, Flame, Leaf, Play, Ruler, ShieldCheck, Snowflake, Star, Truck, X } from "lucide-react"

// ============================================================
// /early-black-friday-grange : The Grange Carrier
// EARLY ACCESS BLACK FRIDAY SALE (owner, 2026-10-31).
//
// Same page as /early-black-friday-gable with the Grange's content: a
// section-for-section copy of /early-black-friday-sweep. Banner, header,
// hero (price above the fold), hero points, photo wall (the Grange PDP has
// no video clips), "why now" band, proof, two questions + comparison table,
// BUY BOX ON THE PAGE with the 1 / 2 Carrier picker, guarantee, FAQ,
// closing image, sticky bar, footer. Self-contained. Near-black, gold.
//
// BANNER: inline port of snippets/fh-bunkhouse-promo-bar.liquid (compare-at
// minus price, "UP TO" when the tiers differ, clock to local midnight),
// reworded for Black Friday. The Grange carries a LIFETIME warranty, so the
// banner says so instead of "1 year". No fixed end date anywhere.
//
// BUY LINK: Shopify cart permalink straight to checkout, with BOTH free
// digital guides on the same link (variants 42576239296555 The Endless
// Harvest and 42576214949931 Harvest Keeper's Handbook, both $0.00, checked
// live 2026-10-31). Shipping is $9.95 and free only over $85: 2 Carriers
// ($89) ship free, 1 Carrier pays $9.95. Never claimed as unconditional.
// ============================================================

// ===== CONFIG (everything product-specific lives in this block) =====

// LIVE PRICES, read off /products/the-grange-carrier.js 2026-10-31:
//   42574715912235  1 Carrier   $49.00 / $80.00   save $31
//   42574715945003  2 Carriers  $89.00 / $160.00  save $71
// Proof as the live Grange PDP shows it: 4.8/5, 800+ reviews, 22,000+
// gardeners, 60-day money back, lifetime warranty, 2 free guides.
// REVIEWS: no Grange review corpus exists in the store files. The one
// customer quote the live PDP prints (Robert T., Verified Customer) is the
// only one used; nothing was written to fill the slot.
const LANDER_TAG = "ebfgr"
const PRODUCT_NAME = "The Grange Carrier"
const PRODUCT_SHORT = "The Grange Carrier"
const WARRANTY_LINE = "LIFETIME WARRANTY"
const REVIEW_SUFFIX = "Verified Customer"

type Variant = {
  key: string
  label: string
  sublabel: string
  badge: string | null
  price: number
  compareAt: number
  variantId: string
}

const VARIANTS: Variant[] = [
  {
    key: "1",
    label: "1 Carrier",
    sublabel: "The full harvest system",
    badge: null,
    price: 49,
    compareAt: 80,
    variantId: "42574715912235",
  },
  {
    key: "2",
    label: "2 Carriers",
    sublabel: "Ships free. One to wear, one to give",
    badge: "Best Value",
    price: 89,
    compareAt: 160,
    variantId: "42574715945003",
  },
]
const DEFAULT_VARIANT = 0
const PICKER_LABEL = "Choose your bundle"

// Both free digital guides ride on the same checkout link.
const GIFT_VARIANTS: string[] = ["42576239296555", "42576214949931"]

const INCLUDED = [
  { title: "The Endless Harvest, gardening guide", value: "$18 value, free" },
  { title: "Harvest Keeper's Handbook, produce storage guide", value: "$15 value, free" },
  { title: "Lifetime warranty", value: "included" },
]
const INCLUDED_TITLE = "Free With Every Order"

const SHIPPING_NOTE = "Shipping is $9.95, free on orders over $85."
const BUY_CHECKS = ["60 days to decide", "Lifetime warranty", "2 free guides"]
const STICKY_SUB = "Lifetime warranty · 60 days to decide"

const RATING: { score: string; count: string } | null = { score: "4.8", count: "800+" } // as the live Grange PDP shows it
const PROOF_LINE = "Rated 4.8 out of 5 · 800+ reviews · 22,000+ gardeners"

const HEADLINE_MAIN = "Early Access Black Friday Is Open On The Grange Carrier."
const HEADLINE_ACCENT = "Up To $71 Off, Plus 2 Free Guides."
const HERO_SUB =
  "Harvest into the pouch with both hands free, then pinch the buckles and the whole harvest slides into the washing bin in one motion. No bucket, no scooping, no trips back to the sink."

const HERO_POINTS = [
  { icon: Leaf, text: "The Quick-Release Drop-Chute empties your whole harvest in one second" },
  { icon: ShieldCheck, text: "The cross-back harness carries a full 20 pound harvest across both shoulders" },
  { icon: Droplets, text: "A water-resistant lined pouch keeps juice, dew and soil off your clothes" },
]

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const SHOP = "https://fieldandharvestco.com/cdn/shop"
const IMAGES = {
  logo: `${CDN}/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=240`,
  hero: `${CDN}/20251217_2358_Garden_Harvest_Portrait_remix_01kcqx5km5f8cst2nx2pyssx0q.png?v=1774554667&width=1000`,
  heroAlt: "A gardener wearing The Grange Carrier with the pouch full of carrots and tomatoes",
  q1: `${CDN}/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098&width=800`,
  q1Alt: "The Quick-Release Drop-Chute emptying a harvest into a wheelbarrow",
  q2: `${CDN}/20251214_2351_ApronwithGardenBackground_remix_01kcg5gbwne8eb5pketsv0ckyj.png?v=1766034057&width=800`,
  q2Alt: "The cross-back harness with adjustable straps and durable clips",
  buyBox: `${CDN}/Grange_hero_image_1_1.png?v=1769839875&width=900`,
  buyBoxAlt: "The Grange Carrier, studio view",
  closing: `${CDN}/20251217_2356_Abundant_Harvest_Apron_remix_01kcqx1s10fbm81vz1t5emcq6y.png?v=1774554667&width=1000`,
  closingAlt: "The Grange Carrier laid flat on a potting bench with the day's harvest in the pouch",
}
const Q1_IMAGE_CLASS = "mt-5 aspect-square w-full max-w-sm rounded-sm object-cover"
const Q2_IMAGE_CLASS = "mt-5 aspect-square w-full max-w-sm rounded-sm object-cover"
const CLOSING_IMAGE_CLASS = "aspect-square w-full rounded-sm object-cover sm:aspect-[3/2]"

// The Grange PDP has no video clips, so the wall carries photographs.
type Clip = { poster: string; src: string | null; alt: string }
const WALL_TITLE = "See It In The Garden"
const WALL_SUB = "Worn for picking, weeding and the walk back to the sink."
const CLIPS: Clip[] = [
  { poster: `${CDN}/Grange_hero_image_1_6.png?v=1769981762&width=600`, src: null, alt: "Picking tomatoes straight into the pouch with both hands free" },
  { poster: `${CDN}/20251217_2356_Gardening_Apron_Wearer_remix_01kcqx0s6rf4w87w4te5qkwqx4.png?v=1767689308&width=600`, src: null, alt: "A gardener wearing the Grange Carrier with a pouch full of vegetables" },
  { poster: `${CDN}/20260201_1633_Image_Generation_remix_01kgdhykz1e4pb8gg9pyx1231h.png?v=1769981766&width=600`, src: null, alt: "The cross-back harness from behind, in the garden" },
  { poster: `${CDN}/20260201_1641_Image_Generation_remix_01kgdjcqnee5d9w8721g22c54a.png?v=1769982157&width=600`, src: null, alt: "Water beading off the lined pouch" },
  { poster: `${CDN}/20260131_0256_Gardener_with_Harvest_Apron_remix_01kg9gtw3ce2br6v2wc968yx68_1.png?v=1769846433&width=600`, src: null, alt: "A gardener at the raised beds with the Grange Carrier on" },
  { poster: `${CDN}/20260201_1643_Image_Generation_remix_01kgdjgd8deat9ykzt5zkedtsn.png?v=1769982391&width=600`, src: null, alt: "The Grange Carrier with tools in the sheaths, backed by a lifetime warranty" },
]

const WHY_NOW =
  "We opened our Black Friday price early, while the fall harvest and the cleanup are still in full swing and before the holidays get here. Wear it for the last of the tomatoes and the fall cleanup now, or set one aside as a gift for the gardener in your life. Quantities are limited, and the Early Access price is on this page right now."

// The one customer quote the live Grange PDP prints, verbatim.
type Review = { title: string; quote: string; who: string }
const REVIEWS_TITLE = "Why 22,000+ Gardeners Made The Switch"
const REVIEWS_SUB = "Rated 4.8 out of 5 from 800+ reviews."
const REVIEWS: Review[] = [
  {
    title: "",
    quote: "I can finally harvest my entire tomato crop in one session instead of three.",
    who: "Robert T.",
  },
]

const QUESTIONS_TITLE = "Two Things People Check Before They Order"
const QUESTIONS = [
  {
    q: "How does it empty?",
    a: "Industrial-grade buckles release instantly and your entire harvest slides into the washing bin in one motion. No bending. No scooping. No bruised tomatoes. One second, one motion, done. Pinch the toggle clips and gravity does the rest.",
  },
  {
    q: "Why not just use a bucket or a basket?",
    a: "Buckets hold a lot but take constant trips, and every trip ends with you bending over to scoop it all out. The Grange Carrier's kangaroo-style pouch holds a full peck of produce, 20 pounds, without collapsing, on a cross-back harness that carries it like a hiking pack. Your hands stay free for picking, and you empty it once, at the sink.",
  },
]

type Row = { label: string; ours: string; other: string }
const TABLE_OURS = "The Grange Carrier"
const TABLE_OTHER = "A bucket or basket"
const ROWS: Row[] = [
  { label: "Your hands", ours: "Both free for picking", other: "One is always on the handle" },
  { label: "Emptying it", ours: "Drop-Chute, one second", other: "Bend over and scoop it out" },
  { label: "The weight", ours: "Across both shoulders", other: "Hanging off one arm" },
  { label: "Trips to the sink", ours: "One, at the end", other: "Back and forth all morning" },
]

const GUARANTEE_TITLE = "60 Days To Decide. A Lifetime Warranty."
const GUARANTEE_BODY = [
  "Try it for 60 days in your own garden. If you're not completely satisfied, return it for a full refund, and we cover the return shipping.",
  "The Grange Carrier is backed by a lifetime warranty against defects in materials and craftsmanship. The Field-Weave fabric, the stitching and the buckles are built to hold, and we stand behind them for life.",
]

const SALE_FAQ =
  "The Early Access Black Friday price is the price on this page, so there is no code to type and nothing to remember. The buy button takes you straight to checkout with up to $71 off already applied, and both free guides are on the order."
const FAQS = [
  {
    q: "What fits in the pouch?",
    a: "The expanded kangaroo-style pouch holds a full peck of produce, 20 pounds, without collapsing. Deep utility sheaths keep your pruning shears ready, and a zippered pocket keeps your phone out of the soil.",
  },
  {
    q: "What is it made of?",
    a: "Field-Weave 600D canvas, the same weight class as heavy-duty hiking packs, with a water-resistant lining in the pouch. It feels stiff at first and breaks in like a good pair of leather boots.",
  },
  {
    q: "What are the free guides?",
    a: "Two digital guides come free with every order: The Endless Harvest, a gardening guide, and Harvest Keeper's Handbook, a produce storage guide. Both are added to your order automatically.",
  },
  {
    q: "What does shipping cost?",
    a: "Shipping is $9.95, and free on orders over $85, so 2 Carriers ship free.",
  },
]

// ===== END CONFIG =====

const SALE_NAME = "Early Access Black Friday Sale"
const CTA_LABEL = "CLAIM THE BLACK FRIDAY PRICE >>"
const STORE_URL = "https://fieldandharvestco.com"

// Whole dollars off, floored. Rounded to cents first so float noise cannot
// floor a whole-dollar saving down by one.
function offOf(v: Variant) {
  return Math.floor(Math.round((v.compareAt - v.price) * 100) / 100)
}
function dollarsOff(v: Variant) {
  return `$${offOf(v)}`
}
const MAX_OFF_NUM = Math.max(...VARIANTS.map(offOf))
const MIN_OFF_NUM = Math.min(...VARIANTS.map(offOf))
// Same rule as the PDP promo bar: "UP TO" only when the variants differ.
const BANNER_OFF = `${MIN_OFF_NUM === MAX_OFF_NUM ? "" : "UP TO "}$${MAX_OFF_NUM} OFF`

const PAGE_THEME = {
  "--background": "oklch(0.145 0.004 60)",
  "--foreground": "oklch(0.965 0.006 85)",
  "--card": "oklch(0.19 0.005 60)",
  "--card-foreground": "oklch(0.965 0.006 85)",
  "--primary": "oklch(0.83 0.155 80)",
  "--primary-foreground": "oklch(0.15 0.004 60)",
  "--secondary": "oklch(0.21 0.005 60)",
  "--secondary-foreground": "oklch(0.965 0.006 85)",
  "--muted": "oklch(0.205 0.005 60)",
  "--muted-foreground": "oklch(0.76 0.012 75)",
  "--border": "oklch(0.33 0.008 60)",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
} as React.CSSProperties

function money(n: number) {
  return `$${n.toFixed(2)}`
}

function buyUrl(v: Variant) {
  const gifts = GIFT_VARIANTS.map((g) => `,${g}:1`).join("")
  return `${STORE_URL}/cart/${v.variantId}:1${gifts}`
}

function reportVideoPlay(index: number) {
  try {
    const w = window as unknown as { fbq?: (...a: unknown[]) => void; clarity?: (...a: unknown[]) => void }
    w.fbq?.("trackCustom", "VideoPlay", { page: LANDER_TAG, clip: index + 1 })
    w.clarity?.("set", "video_play", `${LANDER_TAG}-clip-${index + 1}`)
  } catch {
    // Never let analytics break playback.
  }
}

// The PDP promo bar, inline. Same function: the saving, the warranty and the
// clock to the visitor's local midnight. Reworded for Black Friday.
function PromoBar() {
  const [t, setT] = useState({ h: "00", m: "00", s: "00" })
  useEffect(() => {
    const pad = (n: number) => (n < 10 ? "0" : "") + n
    const tick = () => {
      const now = new Date()
      const end = new Date(now)
      end.setHours(24, 0, 0, 0)
      const sec = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000))
      setT({ h: pad(Math.floor(sec / 3600)), m: pad(Math.floor((sec % 3600) / 60)), s: pad(sec % 60) })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="ebf-promo" role="region" aria-label="Sale">
      <div className="ebf-promo-in">
        <span className="ebf-promo-txt">
          <b>EARLY ACCESS BLACK FRIDAY SALE</b>
          <i>|</i>
          <span className="ebf-promo-sub">
            {BANNER_OFF} + {WARRANTY_LINE}
          </span>
        </span>
        <span className="ebf-promo-clock" data-ebf-clock>
          <span className="ebf-u">
            <b>00</b>
            <small>DAYS</small>
          </span>
          <em>:</em>
          <span className="ebf-u">
            <b>{t.h}</b>
            <small>HRS</small>
          </span>
          <em>:</em>
          <span className="ebf-u">
            <b>{t.m}</b>
            <small>MIN</small>
          </span>
          <em>:</em>
          <span className="ebf-u">
            <b>{t.s}</b>
            <small>SEC</small>
          </span>
        </span>
      </div>
      <style>{`
  .ebf-promo { background: linear-gradient(90deg, #000 0%, #17120a 50%, #4a3208 100%); color: #FBF6EC; border-bottom: 1px solid rgba(242,181,58,.35); }
  .ebf-promo-in { max-width: 1200px; margin: 0 auto; padding: 8px 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .ebf-promo-txt { font: 600 13px/1.3 ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; letter-spacing: .04em; text-align: left; min-width: 0; }
  .ebf-promo-txt b { font-weight: 800; letter-spacing: .06em; color: #F2B53A; }
  .ebf-promo-txt i { font-style: normal; opacity: .6; margin: 0 10px; }
  .ebf-promo-clock { flex: none; display: inline-flex; align-items: flex-start; gap: 4px; }
  .ebf-promo-clock em { font-style: normal; font-weight: 700; line-height: 26px; opacity: .8; }
  .ebf-u { display: inline-flex; flex-direction: column; align-items: center; }
  .ebf-u b { background: rgba(242,181,58,.14); border: 1px solid rgba(242,181,58,.45); border-radius: 4px; min-width: 32px; padding: 3px 4px; text-align: center; font: 700 15px/1.2 ui-sans-serif, system-ui, -apple-system, Arial, sans-serif; font-variant-numeric: tabular-nums; color: #FBF6EC; }
  .ebf-u small { font-size: 8px; letter-spacing: .1em; opacity: .75; margin-top: 2px; }
  @media (max-width: 749px) { .ebf-promo-in { gap: 8px; padding: 8px 10px; } .ebf-promo-txt { flex: 1 1 auto; text-align: center; font-size: 10px; letter-spacing: 0; white-space: nowrap; } .ebf-promo-txt b { display: block; font-size: 12px; margin-bottom: 2px; } .ebf-promo-txt i { display: none; } .ebf-promo-sub { display: block; } .ebf-promo-clock { gap: 3px; } .ebf-u b { min-width: 23px; font-size: 11px; padding: 3px 2px; } .ebf-promo-clock em { line-height: 22px; } .ebf-u small { font-size: 7px; } }
      `}</style>
    </div>
  )
}

// Every in-page CTA scrolls to the buy box. The checkout permalink in the
// buy box is the only outbound link on the page.
function JumpCta({ note, className = "" }: { note?: string; className?: string }) {
  return (
    <div className={className}>
      <div className="flex justify-center">
        <a
          href="#buy"
          className="inline-block w-full max-w-md rounded-md bg-primary px-6 py-5 text-center text-lg font-extrabold uppercase tracking-wide text-primary-foreground shadow-[0_6px_24px_rgba(242,181,58,0.25)] transition-colors hover:bg-primary/90 sm:text-xl"
        >
          {CTA_LABEL}
        </a>
      </div>
      {note ? (
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-muted-foreground">{note}</p>
      ) : null}
    </div>
  )
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
      ))}
    </div>
  )
}

function VideoWall({ innerRef }: { innerRef: React.RefObject<HTMLElement | null> }) {
  const [playing, setPlaying] = useState<number | null>(null)
  return (
    <section ref={innerRef} className="mt-8 rounded-lg border border-border bg-black px-5 py-8 sm:px-7">
      <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-primary">{WALL_TITLE}</h2>
      <p className="mt-2 text-center text-sm text-muted-foreground">{WALL_SUB}</p>
      <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CLIPS.map((clip, i) => (
          <div
            key={clip.poster}
            className="relative aspect-[9/16] w-[46%] shrink-0 snap-start overflow-hidden rounded-md bg-black sm:w-[31%]"
          >
            {clip.src === null ? (
              <img src={clip.poster} alt={clip.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            ) : playing === i ? (
              <video src={clip.src} controls autoPlay playsInline preload="none" className="h-full w-full object-cover" />
            ) : (
              <button
                type="button"
                onClick={() => {
                  reportVideoPlay(i)
                  setPlaying(i)
                }}
                aria-label={`Play video: ${clip.alt}`}
                className="group h-full w-full"
              >
                <img src={clip.poster} alt={clip.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/30">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 shadow-lg">
                    <Play className="ml-0.5 h-6 w-6 fill-black text-black" aria-hidden="true" />
                  </span>
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        {CLIPS.some((c) => c.src) ? "Tap any clip to play. Swipe for more." : "Swipe for more."}
      </p>
    </section>
  )
}

export default function EarlyBlackFridayPage() {
  const wallRef = useRef<HTMLElement | null>(null)
  const buyRef = useRef<HTMLElement | null>(null)
  const [pastWall, setPastWall] = useState(false)
  const [buyVisible, setBuyVisible] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [vIdx, setVIdx] = useState(DEFAULT_VARIANT)

  const v = VARIANTS[vIdx]
  const heroV = VARIANTS[DEFAULT_VARIANT]

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    const obs: IntersectionObserver[] = []
    if (wallRef.current) {
      const o = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting && e.boundingClientRect.top < 0) setPastWall(true)
        },
        { threshold: 0 },
      )
      o.observe(wallRef.current)
      obs.push(o)
    }
    if (buyRef.current) {
      const o = new IntersectionObserver(([e]) => setBuyVisible(e.isIntersecting), { threshold: 0.15 })
      o.observe(buyRef.current)
      obs.push(o)
    }
    return () => obs.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const decorate = (event: Event) => {
      try {
        const anchor = (event.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null
        if (!anchor?.href) return
        const url = new URL(anchor.href, window.location.href)
        if (url.hostname === window.location.hostname) return
        if (!url.hostname.endsWith("fieldandharvestco.com")) return
        if (!url.searchParams.has("lp")) url.searchParams.set("lp", LANDER_TAG)
        // Carry the ad's UTMs through to checkout.
        new URLSearchParams(window.location.search).forEach((val, k) => {
          if (k.startsWith("utm_") && !url.searchParams.has(k)) url.searchParams.set(k, val)
        })
        anchor.href = url.href
      } catch {
        // Tagging must never break navigation.
      }
    }
    document.addEventListener("click", decorate, true)
    document.addEventListener("auxclick", decorate, true)
    return () => {
      document.removeEventListener("click", decorate, true)
      document.removeEventListener("auxclick", decorate, true)
    }
  }, [])

  function fireBuyClick() {
    try {
      const w = window as unknown as { fbq?: (...a: unknown[]) => void; clarity?: (...a: unknown[]) => void }
      // The PDP is skipped, so its AddToCart never fires: fire it here. The
      // store checkout fires InitiateCheckout and Purchase itself.
      w.fbq?.("track", "AddToCart", {
        content_ids: [v.variantId],
        content_type: "product",
        content_name: `${PRODUCT_NAME} / ${v.label}`,
        value: v.price,
        currency: "USD",
      })
      w.fbq?.("trackCustom", "BuyBoxClick", {
        page: LANDER_TAG,
        content_ids: [v.variantId],
        content_name: `${PRODUCT_NAME} / ${v.label}`,
        value: v.price,
        currency: "USD",
      })
      w.clarity?.("set", `${LANDER_TAG}_buy`, v.key)
      w.clarity?.("upgrade", `${LANDER_TAG}-buy-click`)
    } catch {
      // Never let analytics block the click.
    }
  }

  const showSticky = pastWall && !buyVisible
  const multi = VARIANTS.length > 1

  return (
    <div style={PAGE_THEME} className="min-h-screen bg-background text-foreground">
      <PromoBar />

      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-4">
          <img
            src={IMAGES.logo}
            alt="Field &amp; Harvest Co."
            className="h-7 w-auto object-contain [filter:invert(1)_hue-rotate(180deg)] md:h-9"
          />
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-6 md:py-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-4 lg:order-1">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-primary lg:text-left">
              {SALE_NAME} · {PRODUCT_SHORT}
            </p>

            <h1 className="text-balance text-center text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-left lg:text-5xl">
              {HEADLINE_MAIN} <span className="text-primary">{HEADLINE_ACCENT}</span>
            </h1>

            <p className="text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-left">
              {HERO_SUB}
            </p>

            {RATING ? (
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <Stars />
                <span className="text-sm font-semibold text-foreground">
                  {RATING.score} · {RATING.count} reviews
                </span>
              </div>
            ) : null}

            <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 lg:justify-start">
              {multi ? <span className="text-sm font-semibold text-muted-foreground">From</span> : null}
              <span className="text-3xl font-extrabold text-foreground">{money(heroV.price)}</span>
              <span className="text-lg text-muted-foreground line-through">{money(heroV.compareAt)}</span>
              <span className="rounded bg-primary px-2 py-0.5 text-xs font-extrabold uppercase tracking-wide text-primary-foreground">
                Save {dollarsOff(heroV)}
              </span>
            </div>

            <JumpCta className="pt-1" note={PROOF_LINE} />
          </div>

          <div className="lg:order-2">
            <img
              src={IMAGES.hero}
              alt={IMAGES.heroAlt}
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-5xl gap-4 px-5 py-6 sm:grid-cols-3 sm:gap-6">
          {HERO_POINTS.map((p) => (
            <div key={p.text} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-primary">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="pt-1 text-sm leading-snug text-foreground">{p.text}</span>
            </div>
          ))}
        </div>
      </section>

      <main>
        <article className="mx-auto max-w-3xl px-5 pt-10">
          <VideoWall innerRef={wallRef} />

          <section className="mt-8 rounded-lg border-2 border-primary bg-primary/10 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Why now</p>
            <p className="mt-2 text-base leading-relaxed text-foreground sm:text-lg">{WHY_NOW}</p>
            <JumpCta className="mt-5" />
            <p className="mt-4 text-center text-sm text-muted-foreground">{PROOF_LINE}</p>
          </section>

          {REVIEWS.length ? (
            <section className="mt-14">
              <h2 className="text-pretty text-2xl font-extrabold leading-snug tracking-tight text-foreground sm:text-3xl">
                {REVIEWS_TITLE}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{REVIEWS_SUB}</p>

              <div className={`mt-7 grid gap-4 ${REVIEWS.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {(showAllReviews ? REVIEWS : REVIEWS.slice(0, 4)).map((r) => (
                  <blockquote key={r.who + r.title} className="flex flex-col border-l-4 border-primary bg-muted p-4">
                    <Stars />
                    {r.title ? <p className="mt-2 text-sm font-bold text-foreground sm:text-base">{r.title}</p> : null}
                    <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground sm:text-base">{r.quote}</p>
                    <footer className="mt-3">
                      <cite className="text-xs font-bold not-italic text-foreground">{r.who} · {REVIEW_SUFFIX}</cite>
                    </footer>
                  </blockquote>
                ))}
              </div>

              {!showAllReviews && REVIEWS.length > 4 ? (
                <button
                  type="button"
                  onClick={() => setShowAllReviews(true)}
                  className="mt-5 w-full rounded-md border-2 border-foreground bg-transparent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
                >
                  Read {REVIEWS.length - 4} More &darr;
                </button>
              ) : null}
            </section>
          ) : null}

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-extrabold leading-snug tracking-tight text-foreground sm:text-3xl">
              {QUESTIONS_TITLE}
            </h2>

            <div className="mt-8 flex flex-col gap-10">
              {QUESTIONS.map((item, i) => (
                <div key={item.q}>
                  <h3 className="text-pretty text-xl font-bold leading-snug text-foreground sm:text-2xl">
                    {i + 1}. {item.q}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{item.a}</p>

                  {i === 0 ? (
                    <img src={IMAGES.q1} alt={IMAGES.q1Alt} loading="lazy" decoding="async" className={Q1_IMAGE_CLASS} />
                  ) : null}

                  {i === 1 ? (
                    <>
                      <img src={IMAGES.q2} alt={IMAGES.q2Alt} loading="lazy" decoding="async" className={Q2_IMAGE_CLASS} />
                      <div className="mt-5 overflow-x-auto rounded-lg border-2 border-primary/60">
                        <table className="w-full min-w-[460px] border-collapse text-left">
                          <thead>
                            <tr className="bg-black text-foreground">
                              <th className="p-3 text-xs font-bold uppercase tracking-wide">Look at</th>
                              <th className="bg-primary p-3 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                                {TABLE_OURS}
                              </th>
                              <th className="p-3 text-xs font-bold uppercase tracking-wide">{TABLE_OTHER}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ROWS.map((r) => (
                              <tr key={r.label} className="border-t border-border align-top">
                                <th scope="row" className="p-3 text-sm font-bold text-foreground">
                                  {r.label}
                                </th>
                                <td className="bg-primary/10 p-3 text-sm">
                                  <span className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                                    <span className="font-semibold text-foreground">{r.ours}</span>
                                  </span>
                                </td>
                                <td className="p-3 text-sm text-muted-foreground">
                                  <span className="flex items-start gap-2">
                                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
                                    <span>{r.other}</span>
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================
              THE BUY BOX. Picker (where the product has variants), what is
              included, subtotal, then one link straight to checkout.
              ============================================================ */}
          <section ref={buyRef} id="buy" className="mt-14 scroll-mt-4">
            <div className="overflow-hidden rounded-lg border-2 border-primary">
              <div className="bg-black px-5 py-3 text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary sm:text-sm">
                  {SALE_NAME} · {BANNER_OFF}
                </p>
              </div>

              <div className="flex flex-col bg-card md:flex-row">
                <div className="bg-black md:w-2/5 md:shrink-0">
                  <img
                    src={IMAGES.buyBox}
                    alt={IMAGES.buyBoxAlt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                  <p className="px-4 pb-3 pt-2 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Selected: {v.label}
                  </p>
                </div>
                <div className="flex flex-col justify-center p-5 md:w-3/5 md:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Field &amp; Harvest Co.</p>
                  <h2 className="mt-1.5 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
                    {PRODUCT_NAME}
                  </h2>
                  {RATING ? (
                    <div className="mt-2.5 flex flex-wrap items-center gap-2">
                      <Stars />
                      <span className="text-sm text-muted-foreground">
                        {RATING.score} from {RATING.count} reviews
                      </span>
                    </div>
                  ) : null}

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{PICKER_LABEL}</p>
                    <div className="mt-3 flex flex-col gap-2.5">
                      {VARIANTS.map((s, i) => {
                        const selected = i === vIdx
                        return (
                          <button
                            key={s.key}
                            type="button"
                            onClick={() => setVIdx(i)}
                            aria-pressed={selected}
                            className={`flex w-full items-center justify-between gap-3 rounded-lg border-2 p-4 text-left transition-all ${
                              selected
                                ? "border-primary bg-primary/10 shadow-md"
                                : "border-border bg-background hover:border-foreground/40"
                            }`}
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                                  selected ? "border-primary bg-primary" : "border-border"
                                }`}
                                aria-hidden="true"
                              >
                                {selected ? <span className="block h-1.5 w-1.5 rounded-full bg-black" /> : null}
                              </span>
                              <span className="min-w-0">
                                <span className="block text-base font-bold leading-tight text-foreground">{s.label}</span>
                                <span className="mt-0.5 block text-xs font-semibold leading-snug text-primary">
                                  {s.badge ? `${s.badge} · ` : ""}
                                  {s.sublabel}
                                </span>
                              </span>
                            </span>
                            <span className="shrink-0 text-right">
                              <span className="block text-base font-bold leading-none text-foreground">{money(s.price)}</span>
                              <span className="mt-1 block text-xs leading-none text-muted-foreground line-through">
                                {money(s.compareAt)}
                              </span>
                              <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-primary">
                                Save {dollarsOff(s)}
                              </span>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-5 rounded-lg border border-border bg-muted p-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-foreground">{INCLUDED_TITLE}</p>
                    <ul className="mt-2.5 flex flex-col gap-1.5">
                      {INCLUDED.map((g) => (
                        <li key={g.title} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>
                            <span className="font-semibold text-foreground">{g.title}</span> · {g.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-border pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-muted-foreground">{v.label}</p>
                      <p className="shrink-0 text-right">
                        <span className="mr-2 text-sm text-muted-foreground line-through">{money(v.compareAt)}</span>
                        <span className="text-2xl font-extrabold text-foreground">{money(v.price)}</span>
                      </p>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">You save</p>
                      <p className="text-sm font-bold text-primary">{dollarsOff(v)} off</p>
                    </div>
                  </div>

                  <a
                    href={buyUrl(v)}
                    onClick={fireBuyClick}
                    data-ebf-buy={v.variantId}
                    className="mt-5 block rounded-md bg-primary px-6 py-5 text-center text-lg font-extrabold uppercase tracking-wide text-primary-foreground shadow-[0_6px_24px_rgba(242,181,58,0.25)] transition-colors hover:bg-primary/90"
                  >
                    Get It Now &middot; {money(v.price)}
                  </a>

                  <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
                    {SHIPPING_NOTE} Sale price already applied, no code needed.
                  </p>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] font-medium text-muted-foreground">
                    {BUY_CHECKS.map((c) => (
                      <span key={c} className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="border-t-2 border-primary bg-black px-5 py-2.5 text-center text-xs font-extrabold uppercase tracking-wide text-primary">
                {SALE_NAME} price applied at checkout
              </p>
            </div>
          </section>

          <section className="mt-12">
            <div className="border-4 border-primary p-5 sm:p-7">
              <h3 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">{GUARANTEE_TITLE}</h3>
              <div className="mt-4 flex flex-col gap-4">
                {GUARANTEE_BODY.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-extrabold leading-snug tracking-tight text-foreground sm:text-3xl">
              Everything Else
            </h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="sale">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  How does the {SALE_NAME} work?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{SALE_FAQ}</AccordionContent>
              </AccordionItem>
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <JumpCta className="mt-10" note={PROOF_LINE} />
          </section>

          <section className="mt-12 pb-4">
            <img src={IMAGES.closing} alt={IMAGES.closingAlt} loading="lazy" decoding="async" className={CLOSING_IMAGE_CLASS} />
            <p className="mt-4 text-center text-sm text-muted-foreground">{PROOF_LINE}</p>
          </section>
        </article>
      </main>

      {/* Sticky bar carries the price and scrolls to the buy box. */}
      <div
        aria-hidden={!showSticky}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-primary/40 bg-black/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.5)] backdrop-blur transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="flex items-baseline gap-2 text-sm font-bold leading-tight text-foreground">
              <span className="whitespace-nowrap">{money(v.price)}</span>
              <span className="whitespace-nowrap text-xs font-normal text-muted-foreground line-through">
                {money(v.compareAt)}
              </span>
            </p>
            <p className="truncate text-[11px] leading-tight text-muted-foreground">{STICKY_SUB}</p>
          </div>
          <a
            href="#buy"
            tabIndex={showSticky ? 0 : -1}
            className="shrink-0 rounded-md bg-primary px-5 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:text-base"
          >
            Get {dollarsOff(v)} Off
          </a>
        </div>
      </div>

      <footer className="border-t border-border pb-28 pt-8 sm:pb-8">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            &copy; 2026 Field &amp; Harvest Co. {SALE_NAME}.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Icons kept imported for the product configs that use them.
void [Clock, Flame, Leaf, Snowflake, Truck]
