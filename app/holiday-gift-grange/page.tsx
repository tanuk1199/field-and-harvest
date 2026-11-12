"use client"

import { useEffect, useRef, useState } from "react"
import { Young_Serif } from "next/font/google"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Droplets, Gift, Leaf, Play, ShieldCheck, Star, X } from "lucide-react"

// ============================================================
// /holiday-gift-grange : The Grange Carrier, HOLIDAY GIFT angle
// (owner, 2026-11-11). Remake of /early-black-friday-grange (LP17).
//
// Same structure family as the source: the identical Early Access Black
// Friday promo bar, header, hero with price above the fold, hero points,
// proof, questions + comparison table, buy box with the 1 / 2 Carrier
// picker, guarantee, FAQ, closing image, sticky bar. Self-contained.
//
// Differences from the source, all owner-requested:
// - F&H warm palette (terracotta, beige, brick), not near-black and gold.
//   The promo bar keeps its own black/gold look: "same banner on top".
// - Copy re-angled to gifting. The emptying moment is the wow.
// - Real Billo UGC clips (no audio) replace the photo wall: an "emptying"
//   band early and a "worn in the garden" wall later. Clips live in
//   public/hgg/, 432-480px wide h264, muted loops that only get a src once
//   they scroll near the viewport (zero mp4 bytes in the initial HTML; webp
//   posters only). VideoPlay fires once per clip to Pixel + Clarity.
// - NO shipping mention anywhere in the buy section.
// - The buy button goes to the Grange PDP (variant preselected), never to
//   cart or checkout. The click decorator adds lp=hgg + the ad's UTMs.
// ============================================================

const display = Young_Serif({ weight: "400", subsets: ["latin"], display: "swap" })

// ===== CONFIG =====

// LIVE PRICES, read off /products/the-grange-carrier.json 2026-11-11:
//   42574715912235  1 Carrier   $49.00 / $80.00   save $31
//   42574715945003  2 Carriers  $89.00 / $160.00  save $71
// Proof exactly as the source page and the live PDP show it: 4.8/5, 800+
// reviews, 22,000+ gardeners, 60 days, lifetime warranty, 2 free guides.
const LANDER_TAG = "hgg"
const PRODUCT_NAME = "The Grange Carrier"
const PDP_URL = "https://fieldandharvestco.com/products/the-grange-carrier"
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
    sublabel: "For the gardener on your list",
    badge: null,
    price: 49,
    compareAt: 80,
    variantId: "42574715912235",
  },
  {
    key: "2",
    label: "2 Carriers",
    sublabel: "One to give, one to keep",
    badge: "Best Value",
    price: 89,
    compareAt: 160,
    variantId: "42574715945003",
  },
]
const DEFAULT_VARIANT = 0

const INCLUDED = [
  { title: "The Endless Harvest, gardening guide", value: "$18 value, free" },
  { title: "Harvest Keeper's Handbook, produce storage guide", value: "$15 value, free" },
  { title: "Lifetime warranty", value: "included" },
]

const BUY_CHECKS = ["60 days to decide", "Lifetime warranty", "2 free guides"]
const STICKY_SUB = "The holiday gift that gets worn"

const RATING = { score: "4.8", count: "800+" }
const PROOF_LINE = "Rated 4.8 out of 5 from 800+ reviews, worn by 22,000+ gardeners"

const HERO_POINTS = [
  { icon: Leaf, text: "The Quick-Release Drop-Chute empties the whole harvest in one second" },
  { icon: ShieldCheck, text: "The cross-back harness carries a full 20 pound harvest across both shoulders" },
  { icon: Droplets, text: "A water-resistant lined pouch keeps juice, dew and soil off their clothes" },
]

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const IMAGES = {
  logo: `${CDN}/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=240`,
  hero: `${CDN}/20251217_2358_Garden_Harvest_Portrait_remix_01kcqx5km5f8cst2nx2pyssx0q.png?v=1774554667&width=1000`,
  heroAlt: "A gardener wearing The Grange Carrier with the pouch full of carrots and tomatoes",
  q1: `${CDN}/20251215_0105_Quick-ReleaseBadgeDesign_remix_01kcg9qjyre8psjsmn24ardmhq.png?v=1766034098&width=800`,
  q1Alt: "The Quick-Release Drop-Chute emptying a harvest into a wheelbarrow",
  buyBox: `${CDN}/Grange_hero_image_1_1.png?v=1769839875&width=900`,
  buyBoxAlt: "The Grange Carrier, studio view",
  closing: `${CDN}/20251217_2356_Abundant_Harvest_Apron_remix_01kcqx1s10fbm81vz1t5emcq6y.png?v=1774554667&width=1000`,
  closingAlt: "The Grange Carrier laid flat on a potting bench with the day's harvest in the pouch",
}

// Real customer clips (Billo UGC, no audio).
type Clip = { id: string; tag: string; alt: string }
const V = "/hgg"
const EMPTY_CLIPS: Clip[] = [
  { id: "kneeling-unclip-vegetables-drop-onto-plate", tag: "Straight onto the plate", alt: "Kneeling in the grass, she unclips the pouch and the vegetables drop onto a plate" },
  { id: "standing-release-debris-drops-at-feet", tag: "The whole load, at her feet", alt: "Standing in the yard, she releases the pouch and the debris drops at her feet" },
  { id: "seated-unclip-bottom-flap-leaves-fall", tag: "Leaves out the bottom", alt: "Close up of the bottom flap unclipping and leaves falling out" },
  { id: "front-unclip-bottom-flaps-release-pouch", tag: "Two clips, one motion", alt: "From the front, both bottom flaps unclip and the pouch opens" },
]
const WORN_CLIPS: Clip[] = [
  { id: "picking-at-raised-bed-into-pouch", tag: "Picking at the raised bed", alt: "Picking at a raised bed straight into the pouch" },
  { id: "hand-drops-greens-into-pouch", tag: "Both hands free", alt: "A hand drops fresh greens into the pouch" },
  { id: "topdown-greens-inside-pouch", tag: "Room for the whole bed", alt: "Top-down view of greens filling the pouch" },
  { id: "putting-on-carrier-driveway", tag: "On in seconds", alt: "Putting the carrier on in the driveway" },
  { id: "back-view-crossed-straps", tag: "Weight on both shoulders", alt: "The crossed straps from behind" },
]

const WHO_FOR = [
  "The one who comes in from the garden with tomatoes cradled in their shirt.",
  "The one with a bucket on one arm and the shears in the other hand.",
  "The one out raking and clearing every fall weekend.",
  "The one who already owns every tool and says not to get them anything.",
]

const REVIEWS = [
  { quote: "I can finally harvest my entire tomato crop in one session instead of three.", who: "Robert T." },
]

const QUESTIONS = [
  {
    q: "How does it empty?",
    a: "Industrial-grade buckles release instantly and the entire harvest slides into the washing bin in one motion. No bending. No scooping. No bruised tomatoes. Pinch the toggle clips and gravity does the rest.",
  },
  {
    q: "Why not just give them a bucket or a basket?",
    a: "Buckets hold a lot but take constant trips, and every trip ends with bending over to scoop it all out. The Grange Carrier's kangaroo-style pouch holds a full peck of produce, 20 pounds, without collapsing, on a cross-back harness that carries it like a hiking pack. Their hands stay free for picking, and they empty it once, at the sink.",
  },
]

type Row = { label: string; ours: string; other: string }
const ROWS: Row[] = [
  { label: "Their hands", ours: "Both free for picking", other: "One is always on the handle" },
  { label: "Emptying it", ours: "Drop-Chute, one second", other: "Bend over and scoop it out" },
  { label: "The weight", ours: "Across both shoulders", other: "Hanging off one arm" },
  { label: "Trips to the sink", ours: "One, at the end", other: "Back and forth all morning" },
]

const GUARANTEE_BODY = [
  "They get 60 days to wear it in their own garden, with a full refund either way.",
  "The Grange Carrier is backed by a lifetime warranty against defects in materials and craftsmanship. The Field-Weave fabric, the stitching and the buckles are built to hold, and we stand behind them for life.",
]

const SALE_FAQ =
  "The Early Access Black Friday price is already on the product page, so there is no code to type and nothing to remember. Tap the button, pick 1 or 2 Carriers and check out with up to $71 off, and both free guides come with the order."
const FAQS = [
  {
    q: "Who is it for?",
    a: "Anyone who grows food or keeps a yard: the vegetable gardener, the one with the herb beds, the one who does the fall cleanup. It carries the harvest, the weeds and the leaves the same way, and empties all of them in one motion.",
  },
  {
    q: "What fits in the pouch?",
    a: "The expanded kangaroo-style pouch holds a full peck of produce, 20 pounds, without collapsing. Deep utility sheaths keep pruning shears ready, and a zippered pocket keeps a phone out of the soil.",
  },
  {
    q: "What is it made of?",
    a: "Field-Weave 600D canvas, the same weight class as heavy-duty hiking packs, with a water-resistant lining in the pouch. It feels stiff at first and breaks in like a good pair of leather boots.",
  },
  {
    q: "What are the free guides?",
    a: "Two digital guides come free with every order: The Endless Harvest, a gardening guide, and Harvest Keeper's Handbook, a produce storage guide.",
  },
]

// ===== END CONFIG =====

const SALE_NAME = "Early Access Black Friday Sale"
const CTA_LABEL = "Choose their Carrier"
const BUY_LABEL = "Check Availability"

function offOf(v: Variant) {
  return Math.floor(Math.round((v.compareAt - v.price) * 100) / 100)
}
function dollarsOff(v: Variant) {
  return `$${offOf(v)}`
}
const MAX_OFF_NUM = Math.max(...VARIANTS.map(offOf))
const MIN_OFF_NUM = Math.min(...VARIANTS.map(offOf))
const BANNER_OFF = `${MIN_OFF_NUM === MAX_OFF_NUM ? "" : "UP TO "}$${MAX_OFF_NUM} OFF`

// F&H warm palette: linen and parchment grounds, terracotta action colour,
// brick for the one dark band, wheat for highlights, spruce for the ticks.
const BRICK = "#7A3320"
const WHEAT = "#DDA15E"
const SPRUCE = "#3F5B3B"
const PAGE_THEME = {
  "--background": "#F6EEDF",
  "--foreground": "#2E2318",
  "--card": "#FBF6EC",
  "--card-foreground": "#2E2318",
  "--primary": "#A9581C",
  "--primary-foreground": "#FFF8EE",
  "--secondary": "#EFE2CB",
  "--secondary-foreground": "#2E2318",
  "--muted": "#EFE2CB",
  "--muted-foreground": "#65533F",
  "--border": "#DCC8A8",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
} as React.CSSProperties

function money(n: number) {
  return `$${n.toFixed(2)}`
}

function pdpUrl(v: Variant) {
  return `${PDP_URL}?variant=${v.variantId}`
}

const played = new Set<string>()
function reportVideoPlay(id: string, index: number) {
  if (played.has(id)) return
  played.add(id)
  try {
    const w = window as unknown as { fbq?: (...a: unknown[]) => void; clarity?: (...a: unknown[]) => void }
    w.fbq?.("trackCustom", "VideoPlay", { page: LANDER_TAG, clip: id, slot: index + 1 })
    w.clarity?.("set", "video_play", `${LANDER_TAG}-${id}`)
  } catch {
    // Never let analytics break playback.
  }
}

// The PDP promo bar, inline. IDENTICAL to /early-black-friday-grange
// (owner: "same banner on top"): saving, warranty, clock to local midnight.
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

function JumpCta({ note, className = "", onDark = false }: { note?: string; className?: string; onDark?: boolean }) {
  return (
    <div className={className}>
      <div className="flex justify-center">
        <a
          href="#buy"
          className="inline-flex w-full max-w-md items-center justify-center gap-2.5 rounded-md bg-primary px-6 py-5 text-center text-lg font-bold text-primary-foreground shadow-[0_6px_20px_rgba(122,51,32,0.28)] transition-colors hover:bg-[#924B16] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#DDA15E] sm:text-xl"
        >
          <Gift className="h-5 w-5" aria-hidden="true" />
          {CTA_LABEL}
        </a>
      </div>
      {note ? (
        <p className={`mx-auto mt-4 max-w-md text-center text-sm leading-relaxed ${onDark ? "text-[#F3DDBF]" : "text-muted-foreground"}`}>
          {note}
        </p>
      ) : null}
    </div>
  )
}

function Stars({ color = "#B8741F" }: { color?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4" style={{ color, fill: color }} aria-hidden="true" />
      ))}
    </div>
  )
}

// A muted loop that only gets its src once it nears the viewport, plays
// while visible and pauses off screen. Under reduced motion it waits for a tap.
function LoopClip({ clip, index, className = "" }: { clip: Clip; index: number; className?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [armed, setArmed] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)")
    if (mq?.matches) {
      setReduced(true)
      return
    }
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") {
      setArmed(true)
      return
    }
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setArmed(true)
          el.play?.().then(() => reportVideoPlay(clip.id, index)).catch(() => {})
        } else {
          el.pause?.()
        }
      },
      { threshold: 0, rootMargin: "200px 0px" },
    )
    o.observe(el)
    return () => o.disconnect()
  }, [clip.id, index])

  return (
    <div className={`relative overflow-hidden bg-[#2E2318] ${className}`}>
      <video
        ref={ref}
        src={armed ? `${V}/hgg-${clip.id}.mp4` : undefined}
        poster={`${V}/hgg-${clip.id}.webp`}
        muted
        loop
        playsInline
        autoPlay={armed}
        preload="none"
        aria-label={clip.alt}
        className="h-full w-full object-cover"
      />
      {reduced && !armed ? (
        <button
          type="button"
          onClick={() => {
            setArmed(true)
            reportVideoPlay(clip.id, index)
            requestAnimationFrame(() => ref.current?.play?.().catch(() => {}))
          }}
          aria-label={`Play video: ${clip.alt}`}
          className="absolute inset-0 flex items-center justify-center bg-black/15"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBF6EC]/90">
            <Play className="ml-0.5 h-5 w-5 fill-[#7A3320] text-[#7A3320]" aria-hidden="true" />
          </span>
        </button>
      ) : null}
      {/* Gift tag caption */}
      <span className="hgg-tag absolute bottom-2.5 left-2.5 max-w-[85%]">{clip.tag}</span>
    </div>
  )
}

export default function HolidayGiftGrangePage() {
  const anchorRef = useRef<HTMLElement | null>(null)
  const buyRef = useRef<HTMLElement | null>(null)
  const [pastAnchor, setPastAnchor] = useState(false)
  const [buyVisible, setBuyVisible] = useState(false)
  const [vIdx, setVIdx] = useState(DEFAULT_VARIANT)

  const v = VARIANTS[vIdx]

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    const obs: IntersectionObserver[] = []
    if (anchorRef.current) {
      const o = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting && e.boundingClientRect.top < 0) setPastAnchor(true)
        },
        { threshold: 0 },
      )
      o.observe(anchorRef.current)
      obs.push(o)
    }
    if (buyRef.current) {
      const o = new IntersectionObserver(([e]) => setBuyVisible(e.isIntersecting), { threshold: 0 })
      o.observe(buyRef.current)
      obs.push(o)
    }
    return () => obs.forEach((o) => o.disconnect())
  }, [])

  // Carry lp + the ad's UTMs onto every outbound store link.
  useEffect(() => {
    const decorate = (event: Event) => {
      try {
        const anchor = (event.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null
        if (!anchor?.href) return
        const url = new URL(anchor.href, window.location.href)
        if (url.hostname === window.location.hostname) return
        if (!url.hostname.endsWith("fieldandharvestco.com")) return
        if (!url.searchParams.has("lp")) url.searchParams.set("lp", LANDER_TAG)
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
      // Goes to the PDP, which fires its own AddToCart. Only the click here.
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

  const showSticky = pastAnchor && !buyVisible

  return (
    <div style={PAGE_THEME} className="hgg min-h-screen bg-background text-foreground">
      <PromoBar />

      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-4">
          <img src={IMAGES.logo} alt="Field &amp; Harvest Co." className="h-7 w-auto object-contain md:h-9" />
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-4 py-6 sm:px-5 md:py-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-4 lg:order-1">
            <p className={`${display.className} text-center text-base text-[#7A3320] lg:text-left`}>
              A holiday gift for the gardener in your life
            </p>

            <h1
              className={`${display.className} text-balance text-center text-[2.1rem] leading-[1.08] text-foreground sm:text-5xl lg:text-left lg:text-[3.4rem]`}
            >
              The gift they will wear every time they go out to the garden.
            </h1>

            <p className="text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-left">
              The Grange Carrier holds the whole harvest across both shoulders with both hands free for picking. Then one
              pinch of the buckles and everything drops out the bottom, onto the plate, into the bin or the wheelbarrow.
            </p>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Stars />
              <span className="text-sm font-semibold text-foreground">
                {RATING.score} from {RATING.count} reviews
              </span>
            </div>

            <JumpCta className="pt-1" note={PROOF_LINE} />
          </div>

          <div className="lg:order-2">
            <div className="hgg-ribbon relative">
              <img
                src={IMAGES.hero}
                alt={IMAGES.heroAlt}
                fetchPriority="high"
                decoding="async"
                className="relative aspect-square w-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-6 sm:grid-cols-3 sm:gap-6 sm:px-5">
          {HERO_POINTS.map((p) => (
            <div key={p.text} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7A3320] text-[#F3DDBF]">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="pt-1 text-sm leading-snug text-foreground">{p.text}</span>
            </div>
          ))}
        </div>
      </section>

      <main>
        {/* THE EMPTYING BAND: the one dark interrupt on the page */}
        <section ref={anchorRef} className="hgg-band mt-10 px-4 py-12 sm:px-5 sm:py-16" style={{ background: BRICK }}>
          <div className="mx-auto max-w-5xl">
            <h2 className={`${display.className} text-balance text-center text-3xl leading-tight text-[#FBEBD3] sm:text-4xl`}>
              The part they will show everyone.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-base leading-relaxed text-[#F3DDBF] sm:text-lg">
              Pinch the buckles and the whole harvest drops out the bottom. No scooping, no tipping, no bending over a
              bucket. Real customers, real gardens.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {EMPTY_CLIPS.map((c, i) => (
                <LoopClip key={c.id} clip={c} index={i} className="aspect-[9/16] rounded-md ring-1 ring-[#DDA15E]/40" />
              ))}
            </div>
            <JumpCta className="mt-9" note="One pinch, one second, the whole pouch empty." onDark />
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 pt-12 sm:px-5">
          {/* WHO IT IS FOR */}
          <section>
            <h2 className={`${display.className} text-pretty text-3xl leading-snug text-foreground sm:text-4xl`}>
              You know exactly who this is for.
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {WHO_FOR.map((w) => (
                <li key={w} className="flex items-start gap-3 rounded-md bg-card p-4 text-base leading-relaxed text-foreground sm:text-lg">
                  <Check className="mt-1 h-5 w-5 shrink-0" style={{ color: SPRUCE }} aria-hidden="true" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              It is the gift that gets put on, not put away. The first harvest after the holidays, it goes over their
              shoulders, and the first time they pinch the buckles and watch the whole pouch empty, you will hear about it.
              Getting one for yourself too? The 2 Carrier set is one to give and one to keep, at {money(VARIANTS[1].price)}.
            </p>
          </section>

          {/* WORN IN THE GARDEN WALL */}
          <section className="mt-14">
            <h2 className={`${display.className} text-pretty text-3xl leading-snug text-foreground sm:text-4xl`}>
              Worn for picking, weeding and the walk back to the sink.
            </h2>
            <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              {WORN_CLIPS.map((c, i) => (
                <LoopClip
                  key={c.id}
                  clip={c}
                  index={EMPTY_CLIPS.length + i}
                  className="aspect-[9/16] w-[44%] shrink-0 snap-start rounded-md sm:w-[31%]"
                />
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">Swipe for more.</p>
          </section>

          {/* PROOF */}
          <section className="mt-14">
            <h2 className={`${display.className} text-pretty text-3xl leading-snug text-foreground sm:text-4xl`}>
              Why 22,000+ gardeners made the switch
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">Rated 4.8 out of 5 from 800+ reviews.</p>
            <div className="mt-6 grid gap-4">
              {REVIEWS.map((r) => (
                <blockquote key={r.who} className="flex flex-col border-l-4 border-primary bg-card p-5">
                  <Stars />
                  <p className={`${display.className} mt-3 text-xl leading-snug text-foreground sm:text-2xl`}>{r.quote}</p>
                  <footer className="mt-3">
                    <cite className="text-sm font-bold not-italic text-foreground">
                      {r.who}, {REVIEW_SUFFIX}
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* QUESTIONS */}
          <section className="mt-14 border-t border-border pt-10">
            <h2 className={`${display.className} text-pretty text-3xl leading-snug text-foreground sm:text-4xl`}>
              Two things gift buyers check first
            </h2>
            <div className="mt-8 flex flex-col gap-10">
              {QUESTIONS.map((item, i) => (
                <div key={item.q}>
                  <h3 className="text-pretty text-xl font-bold leading-snug text-foreground sm:text-2xl">
                    {i + 1}. {item.q}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{item.a}</p>
                  {i === 0 ? (
                    <img
                      src={IMAGES.q1}
                      alt={IMAGES.q1Alt}
                      loading="lazy"
                      decoding="async"
                      className="mt-5 aspect-square w-full max-w-sm rounded-md object-cover"
                    />
                  ) : null}
                  {i === 1 ? (
                    <div className="mt-5 overflow-x-auto rounded-lg border-2 border-primary/50 bg-card">
                      <table className="w-full min-w-[460px] border-collapse text-left">
                        <thead>
                          <tr className="bg-[#2E2318] text-[#FBF6EC]">
                            <th className="p-3 text-xs font-bold">Look at</th>
                            <th className="bg-primary p-3 text-xs font-bold text-primary-foreground">{PRODUCT_NAME}</th>
                            <th className="p-3 text-xs font-bold">A bucket or basket</th>
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
                                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: SPRUCE }} aria-hidden="true" />
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
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          {/* BUY BOX: picker, what's included, one link to the PDP. */}
          <section ref={buyRef} id="buy" className="mt-14 scroll-mt-4">
            <div className="hgg-gift overflow-hidden rounded-lg border-2 border-[#7A3320] bg-card">
              <div className="px-5 py-3 text-center" style={{ background: BRICK }}>
                <p className="text-sm font-bold text-[#FBEBD3]">
                  {SALE_NAME}, {BANNER_OFF.toLowerCase()}
                </p>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="bg-secondary md:w-2/5 md:shrink-0">
                  <img
                    src={IMAGES.buyBox}
                    alt={IMAGES.buyBoxAlt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                  <p className="px-4 pb-3 pt-2 text-center text-xs font-semibold text-muted-foreground">Selected: {v.label}</p>
                </div>
                <div className="flex flex-col justify-center p-5 md:w-3/5 md:p-6">
                  <p className="text-xs font-semibold text-primary">Field &amp; Harvest Co.</p>
                  <h2 className={`${display.className} mt-1 text-3xl leading-tight text-foreground`}>{PRODUCT_NAME}</h2>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <Stars />
                    <span className="text-sm text-muted-foreground">
                      {RATING.score} from {RATING.count} reviews
                    </span>
                  </div>

                  <fieldset className="mt-5">
                    <legend className="text-sm font-bold text-foreground">How many are you giving?</legend>
                    <div className="mt-3 flex flex-col gap-2.5">
                      {VARIANTS.map((s, i) => {
                        const selected = i === vIdx
                        return (
                          <button
                            key={s.key}
                            type="button"
                            onClick={() => setVIdx(i)}
                            aria-pressed={selected}
                            className={`flex w-full items-center justify-between gap-3 rounded-lg border-2 p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9581C] ${
                              selected ? "border-primary bg-primary/10" : "border-border bg-background hover:border-foreground/40"
                            }`}
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                                  selected ? "border-primary bg-primary" : "border-border"
                                }`}
                                aria-hidden="true"
                              >
                                {selected ? <span className="block h-1.5 w-1.5 rounded-full bg-[#FFF8EE]" /> : null}
                              </span>
                              <span className="min-w-0">
                                <span className="block text-base font-bold leading-tight text-foreground">{s.label}</span>
                                <span className="mt-0.5 block text-xs font-semibold leading-snug text-primary">
                                  {s.badge ? `${s.badge}: ` : ""}
                                  {s.sublabel}
                                </span>
                              </span>
                            </span>
                            <span className="shrink-0 text-right">
                              <span className="block text-base font-bold leading-none text-foreground">{money(s.price)}</span>
                              <span className="mt-1 block text-xs leading-none text-muted-foreground line-through">
                                {money(s.compareAt)}
                              </span>
                              <span className="mt-1 block text-[11px] font-bold text-[#7A3320]">Save {dollarsOff(s)}</span>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>

                  <div className="mt-5 rounded-lg border border-border bg-secondary/60 p-4">
                    <p className="text-sm font-bold text-foreground">Free with every order</p>
                    <ul className="mt-2.5 flex flex-col gap-1.5">
                      {INCLUDED.map((g) => (
                        <li key={g.title} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: SPRUCE }} aria-hidden="true" />
                          <span>
                            <span className="font-semibold text-foreground">{g.title}</span>, {g.value}
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
                      <p className="text-sm font-bold text-[#7A3320]">{dollarsOff(v)} off</p>
                    </div>
                  </div>

                  <a
                    href={pdpUrl(v)}
                    onClick={fireBuyClick}
                    data-hgg-buy={v.variantId}
                    className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-6 py-5 text-center text-lg font-bold text-primary-foreground shadow-[0_6px_20px_rgba(122,51,32,0.28)] transition-colors hover:bg-[#924B16] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#DDA15E]"
                  >
                    <Gift className="h-5 w-5" aria-hidden="true" />
                    {BUY_LABEL}
                  </a>

                  <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
                    Sale price already on the product page, no code needed.
                  </p>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-medium text-muted-foreground">
                    {BUY_CHECKS.map((c) => (
                      <span key={c} className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5" style={{ color: SPRUCE }} aria-hidden="true" /> {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div className="rounded-lg border-2 border-[#DDA15E] bg-card p-5 sm:p-7">
              <h3 className={`${display.className} text-2xl text-foreground sm:text-3xl`}>
                60 days to decide. A lifetime warranty.
              </h3>
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
            <h2 className={`${display.className} text-pretty text-3xl leading-snug text-foreground sm:text-4xl`}>
              Everything else
            </h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              <AccordionItem value="sale" className="border-border">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  How does the {SALE_NAME} work?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{SALE_FAQ}</AccordionContent>
              </AccordionItem>
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <JumpCta className="mt-10" note={PROOF_LINE} />
          </section>

          <section className="mt-12 pb-4">
            <img
              src={IMAGES.closing}
              alt={IMAGES.closingAlt}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-md object-cover sm:aspect-[3/2]"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">{PROOF_LINE}</p>
          </section>
        </article>
      </main>

      {/* Sticky bar carries the price and scrolls to the buy box. */}
      <div
        aria-hidden={!showSticky}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-[#DDA15E]/50 px-4 py-3 shadow-[0_-4px_16px_rgba(46,35,24,0.35)] transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ background: BRICK }}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="flex items-baseline gap-2 text-sm font-bold leading-tight text-[#FBEBD3]">
              <span className="whitespace-nowrap">{money(v.price)}</span>
              <span className="whitespace-nowrap text-xs font-normal text-[#F3DDBF]/80 line-through">{money(v.compareAt)}</span>
            </p>
            <p className="truncate text-xs leading-tight text-[#F3DDBF]">{STICKY_SUB}</p>
          </div>
          <a
            href="#buy"
            tabIndex={showSticky ? 0 : -1}
            className="shrink-0 rounded-md bg-primary px-5 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-md transition-colors hover:bg-[#924B16] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#DDA15E] sm:text-base"
          >
            {CTA_LABEL}
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

      <style>{`
  .hgg-tag { display: inline-block; background: #FBF1E0; color: #4A2A18; font: 600 11px/1.25 ui-sans-serif, system-ui, -apple-system, Arial, sans-serif; padding: 5px 9px 5px 18px; border-radius: 3px 3px 3px 3px; clip-path: polygon(9px 0, 100% 0, 100% 100%, 9px 100%, 0 50%); position: absolute; box-shadow: 0 2px 6px rgba(0,0,0,.25); }
  .hgg-tag::before { content: ""; position: absolute; left: 7px; top: 50%; width: 5px; height: 5px; margin-top: -2.5px; border-radius: 50%; background: #7A3320; }
  .hgg-ribbon { background: #7A3320; padding: 10px; border-radius: 12px; box-shadow: 0 18px 40px -18px rgba(46,35,24,.55); }
  .hgg-ribbon::after { content: ""; position: absolute; inset: 5px; border: 1px solid rgba(221,161,94,.7); border-radius: 9px; pointer-events: none; }
  .hgg-gift { position: relative; }
  @media (prefers-reduced-motion: reduce) { .hgg * { transition: none !important; } }
      `}</style>
    </div>
  )
}
