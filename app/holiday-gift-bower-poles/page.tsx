"use client"

import { useEffect, useRef, useState } from "react"
import { Young_Serif } from "next/font/google"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Gift, Layers, Play, Spline, Sprout, Star, X } from "lucide-react"

// ============================================================
// /holiday-gift-bower-poles : Bower Poles, HOLIDAY GIFT angle
// (owner, 2026-11-11: "do the same thing for the bower poles ... in this
// exact same format"). Cloned from /holiday-gift-grange; only the product
// content changes.
//
// Same format as /holiday-gift-grange: the identical Early Access Black
// Friday promo bar, header, hero with price above the fold, hero points,
// the one dark brick band, who it is for, the swipe wall, proof, questions
// + comparison table, buy box with the length x pack picker (all 4
// variants), guarantee, FAQ, closing image, sticky bar. Self-contained.
//
// Media: no video of this product exists yet, so the two clip slots (the
// brick "bend" band and the set-up wall) carry 9:16 stills cropped from the
// live PDP gallery and the existing Bower lander images, served from
// public/hgbp/. MediaTile renders the same box a clip would: to swap in
// video later, drop hgbp-<id>.mp4 next to hgbp-<id>.webp and set
// video: true on that entry. Nothing in the layout changes. Clips then
// behave exactly like the Grange page (muted loops, src only near the
// viewport, VideoPlay once per clip to Pixel + Clarity).
// - NO shipping mention anywhere.
// - The buy button goes to the Bower PDP (variant preselected), never to
//   cart or checkout. The click decorator adds lp=hgbp + the ad's UTMs.
// ============================================================

const display = Young_Serif({ weight: "400", subsets: ["latin"], display: "swap" })

// ===== CONFIG =====

// LIVE PRICES, read off /products/bower-poles.json 2026-11-11:
//   43841199276075  24" / 2-Pack  $39.00 / $60.00   save $21
//   43841199308843  24" / 4-Pack  $69.00 / $120.00  save $51
//   43841199341611  32" / 2-Pack  $49.00 / $70.00   save $21
//   43841199374379  32" / 4-Pack  $89.00 / $140.00  save $51
// Proof exactly as the live PDP shows it (2026-11-11): 4.9/5, 2,400+
// reviews, 2,400+ plant parents, 60-day money back guarantee, lifetime
// warranty, 2 free guides (Aesthetic Plant Guide $11, Vertical Growth
// Guide $11). The PDP's locked "Order 2 to Unlock" bonus is not named on
// the PDP, so it is not promised here.
const LANDER_TAG = "hgbp"
const PRODUCT_NAME = "Bower Poles"
const PDP_URL = "https://fieldandharvestco.com/products/bower-poles"
const WARRANTY_LINE = "LIFETIME WARRANTY"
const REVIEW_SUFFIX = "Verified Buyer"

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
    key: "24-2",
    label: '24" Pole, 2-Pack',
    sublabel: "For the plant parent on your list",
    badge: null,
    price: 39,
    compareAt: 60,
    variantId: "43841199276075",
  },
  {
    key: "24-4",
    label: '24" Pole, 4-Pack',
    sublabel: "Two to give, two to keep",
    badge: "Best Value",
    price: 69,
    compareAt: 120,
    variantId: "43841199308843",
  },
  {
    key: "32-2",
    label: '32" Pole, 2-Pack',
    sublabel: "More pole for the bigger Monstera",
    badge: null,
    price: 49,
    compareAt: 70,
    variantId: "43841199341611",
  },
  {
    key: "32-4",
    label: '32" Pole, 4-Pack',
    sublabel: "Room to stack as it keeps climbing",
    badge: null,
    price: 89,
    compareAt: 140,
    variantId: "43841199374379",
  },
]
const DEFAULT_VARIANT = 0

const INCLUDED = [
  { title: "Aesthetic Plant Guide", value: "$11 value, free" },
  { title: "Vertical Growth Guide", value: "$11 value, free" },
  { title: "Lifetime warranty", value: "included" },
]

const BUY_CHECKS = ["60 days to decide", "Lifetime warranty", "2 free guides"]
const STICKY_SUB = "The holiday gift their plants will climb"

const RATING = { score: "4.9", count: "2,400+" }
const PROOF_LINE = "Rated 4.9 out of 5 from 2,400+ reviews by plant parents"

const HERO_POINTS = [
  { icon: Spline, text: "A bendable metal core: shape it by hand into a curve, an arch or a spiral, and it holds" },
  { icon: Sprout, text: "A coco coir wrap with the texture of tree bark, so aerial roots latch on and climb" },
  { icon: Layers, text: "Stacks pole to pole with the included Velcro ties as the plant keeps growing" },
]

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const IMAGES = {
  logo: `${CDN}/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=240`,
  hero: `${CDN}/Monstera_in_a_bright_living_room.png?v=1775182648&width=1000`,
  heroAlt: "A Monstera climbing a Bower Pole bent into a hoop and spiral, in a bright living room",
  q1: `${CDN}/ChatGPTImageMar28_2026_06_26_12PM.png?v=1774738367&width=800`,
  q1Alt: "The same Monstera sprawling on its own, then standing upright on a Bower Pole",
  buyBox: `${CDN}/ChatGPTImageMar28_2026_06_52_31PM.png?v=1774738367&width=900`,
  buyBoxAlt: "Bower Poles with the box and the green Velcro plant ties",
  closing: `${CDN}/ChatGPT_Image_Apr_2_2026_04_53_08_AM.png?v=1775120001&width=1200`,
  closingAlt: "A shelf of houseplants climbing spiral Bower Poles",
}

// The two clip slots. No video of this product exists yet, so every entry
// is a still (9:16, cropped from the live PDP gallery and the Bower lander
// images). To use a clip, add public/hgbp/hgbp-<id>.mp4 and set video: true.
type Clip = { id: string; tag: string; alt: string; video?: boolean }
const V = "/hgbp"
const BEND_CLIPS: Clip[] = [
  { id: "straight-pole-climber-white", tag: "Straight up", alt: "A straight Bower Pole with a Monstera climbing it" },
  { id: "s-curve-pole-climber-white", tag: "A slow curve", alt: "A Bower Pole bent into a gentle curve with a pothos climbing it" },
  { id: "spiral-pole-climber-white", tag: "A full spiral", alt: "A Bower Pole bent into a tight spiral with a pothos climbing it" },
  { id: "hoop-spiral-pole-monstera-room", tag: "Bent into a hoop", alt: "A Bower Pole bent into a hoop and spiral with a Monstera climbing it" },
]
const WALL_CLIPS: Clip[] = [
  { id: "insert-spike-into-soil", tag: "The spike goes in the soil", alt: "A hand pushing a Bower Pole into the soil beside a Monstera" },
  { id: "tie-stem-to-pole", tag: "Tie the stems on", alt: "Hands tying a Monstera stem to a Bower Pole" },
  { id: "bend-pole-to-plant", tag: "Bend it to the plant", alt: "Hands bending a Bower Pole into a curve around a young Monstera" },
  { id: "stem-on-coir-macro", tag: "Bark-like coir to grab", alt: "Close up of a stem and new leaf against the coco coir wrap" },
  { id: "shelf-spiral-pole-pothos", tag: "Climbing on the shelf", alt: "A pothos climbing a spiral Bower Pole in a terracotta pot on a shelf" },
]

const WHO_FOR = [
  "The one with a Monstera leaning off a bamboo stake in the corner.",
  "The one propping stems up with tape and twist ties from the kitchen drawer.",
  "The one whose pothos trails across every shelf in the house.",
  "The one who already has every plant and says not to get them anything.",
]

const REVIEWS = [
  { quote: "Got these for my partner. They text me photos of their Monstera every couple weeks now.", who: "Hannah G." },
]

const QUESTIONS = [
  {
    q: "Will it work for their plant?",
    a: "It is made for climbers: Monstera deliciosa, pothos, philodendron, syngonium, scindapsus and every climbing aroid. The bendable core is rigid enough to support a fully grown Monstera deliciosa and flexible enough to follow the way their plant already grows. When the plant reaches the top, a second pole goes in right beside the first, overlapped and tied on with the Velcro ties, and it keeps climbing.",
  },
  {
    q: "Why not just give them a stake or a moss pole?",
    a: "A plant does not grow straight, so a straight stake leaves it sprawling sideways off the one stick it is tied to. Bower Poles bend to the plant's own curve and stay there, and the coco coir works even when it is bone dry, so there is no daily misting. They push it in, tie it on and forget about it while the plant climbs.",
  },
]

type Row = { label: string; ours: string; other: string }
const ROWS: Row[] = [
  { label: "The shape", ours: "Bent by hand, holds any shape", other: "Straight, and stays straight" },
  { label: "Aerial roots", ours: "Grip the bark-like coir", other: "Slide off plastic or bare wood" },
  { label: "Upkeep", ours: "Works dry, no misting", other: "Sphagnum wants regular misting" },
  { label: "More height", ours: "Stack a second pole on", other: "Pull it out and start over" },
]

const GUARANTEE_BODY = [
  "They get 60 days to watch their Monstera, pothos or philodendron climb it, with a full refund either way and nothing to send back.",
  "Bower Poles are backed by a lifetime warranty against defects in materials and workmanship. The metal core, the coir wrap and the pole itself are built to be the last plant support they buy, and we stand behind them for life.",
]

const SALE_FAQ =
  "The Early Access Black Friday price is already on the product page, so there is no code to type and nothing to remember. Tap the button, pick the length and the pack and check out with up to $51 off, and both free guides come with the order."
const FAQS = [
  {
    q: "Which plants is it for?",
    a: "Every climbing aroid: Monstera deliciosa, pothos (Golden, Marble Queen, Neon), philodendron (Brasil, Micans, Heartleaf), syngonium, scindapsus and rhaphidophora. The coir texture gives aerial roots something to grab across all of them.",
  },
  {
    q: "24 inch or 32 inch?",
    a: "Both lengths bend the same way and come in a 2-Pack or a 4-Pack. The 32 inch gives a bigger plant more pole to climb from the first day, and either length stacks with a second pole as the plant keeps going.",
  },
  {
    q: "How do they set it up?",
    a: "Push the bottom spike into the soil beside the stem (repotting day is the easiest time), bend the pole to match the way the plant grows, then tie the stems on with the Velcro ties from the bottom up, with a little slack for growth. No tools and no assembly.",
  },
  {
    q: "What is it made of?",
    a: "A flexible metal core wrapped in premium coco coir, a natural byproduct of the coconut industry, with a surface like real tree bark. It holds its structure season after season, and reusable Velcro plant ties come with it.",
  },
  {
    q: "What are the free guides?",
    a: "Two guides come free with the order: the Aesthetic Plant Guide and the Vertical Growth Guide.",
  },
]

// ===== END CONFIG =====

const SALE_NAME = "Early Access Black Friday Sale"
const CTA_LABEL = "Choose their Bower Poles"

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

// The clip slot. With video: true it is the Grange LoopClip unchanged: a muted
// loop that only gets its src once it nears the viewport, plays while visible
// and pauses off screen, and under reduced motion waits for a tap. Without
// it, the same box shows the still. Same size, same gift tag, either way.
function MediaTile({ clip, index, className = "" }: { clip: Clip; index: number; className?: string }) {
  if (!clip.video) {
    return (
      <div className={`relative overflow-hidden bg-[#2E2318] ${className}`}>
        <img
          src={`${V}/hgbp-${clip.id}.webp`}
          alt={clip.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <span className="hgg-tag absolute bottom-2.5 left-2.5 max-w-[85%]">{clip.tag}</span>
      </div>
    )
  }
  return <LoopClip clip={clip} index={index} className={className} />
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
        src={armed ? `${V}/hgbp-${clip.id}.mp4` : undefined}
        poster={`${V}/hgbp-${clip.id}.webp`}
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

export default function HolidayGiftBowerPolesPage() {
  const anchorRef = useRef<HTMLElement | null>(null)
  const buyRef = useRef<HTMLElement | null>(null)
  const [pastAnchor, setPastAnchor] = useState(false)
  const [buyVisible, setBuyVisible] = useState(false)
  const [vIdx, setVIdx] = useState(DEFAULT_VARIANT)

  const v = VARIANTS[vIdx]
  const heroV = VARIANTS[DEFAULT_VARIANT]

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
              A holiday gift for the plant parent
            </p>

            <h1
              className={`${display.className} text-balance text-center text-[2.1rem] leading-[1.08] text-foreground sm:text-5xl lg:text-left lg:text-[3.4rem]`}
            >
              The gift their Monstera will climb for years.
            </h1>

            <p className="text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-left">
              Bower Poles bend by hand into a curve, an arch or a spiral and hold the shape, so their plant climbs the way it
              grows instead of leaning off a straight stick. The coco coir feels like tree bark, so the aerial roots grab on
              and pull the plant upward.
            </p>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Stars />
              <span className="text-sm font-semibold text-foreground">
                {RATING.score} from {RATING.count} reviews
              </span>
            </div>

            <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 lg:justify-start">
              <span className="text-sm font-semibold text-muted-foreground">From</span>
              <span className="text-3xl font-extrabold text-foreground">{money(heroV.price)}</span>
              <span className="text-lg text-muted-foreground line-through">{money(heroV.compareAt)}</span>
              <span className="rounded bg-[#7A3320] px-2 py-0.5 text-xs font-bold text-[#FBEBD3]">
                Save {dollarsOff(heroV)}
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
        {/* THE BEND BAND: the one dark interrupt on the page */}
        <section ref={anchorRef} className="hgg-band mt-10 px-4 py-12 sm:px-5 sm:py-16" style={{ background: BRICK }}>
          <div className="mx-auto max-w-5xl">
            <h2 className={`${display.className} text-balance text-center text-3xl leading-tight text-[#FBEBD3] sm:text-4xl`}>
              The part they will play with first.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-base leading-relaxed text-[#F3DDBF] sm:text-lg">
              A bendable metal core runs through every pole. Bend it once and it holds: straight up the middle, a slow
              curve, a full spiral, a hoop. They can reshape it any time the plant grows.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {BEND_CLIPS.map((c, i) => (
                <MediaTile key={c.id} clip={c} index={i} className="aspect-[9/16] rounded-md ring-1 ring-[#DDA15E]/40" />
              ))}
            </div>
            <JumpCta className="mt-9" note="Bend it once, it holds. Reshape it whenever the plant asks." onDark />
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
              It is the gift that goes straight into the pot, not into a drawer. It goes in beside the stem the first time
              they repot, and the first new leaf that climbs it instead of flopping, you will get a photo. Getting a set for
              your own plants too? The 24&quot; 4-Pack is two to give and two to keep, at {money(VARIANTS[1].price)}.
            </p>
          </section>

          {/* SET-UP WALL */}
          <section className="mt-14">
            <h2 className={`${display.className} text-pretty text-3xl leading-snug text-foreground sm:text-4xl`}>
              Push it in, tie it on, bend it to the plant.
            </h2>
            <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              {WALL_CLIPS.map((c, i) => (
                <MediaTile
                  key={c.id}
                  clip={c}
                  index={BEND_CLIPS.length + i}
                  className="aspect-[9/16] w-[44%] shrink-0 snap-start rounded-md sm:w-[31%]"
                />
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">Swipe for more.</p>
          </section>

          {/* PROOF */}
          <section className="mt-14">
            <h2 className={`${display.className} text-pretty text-3xl leading-snug text-foreground sm:text-4xl`}>
              Why 2,400+ plant parents ditched rigid poles
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">Rated {RATING.score} out of 5 from {RATING.count} reviews.</p>
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
                            <th className="p-3 text-xs font-bold">A stake or a moss pole</th>
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
                    <legend className="text-sm font-bold text-foreground">Pick their length and pack</legend>
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
                    data-hgbp-buy={v.variantId}
                    className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-6 py-5 text-center text-lg font-bold text-primary-foreground shadow-[0_6px_20px_rgba(122,51,32,0.28)] transition-colors hover:bg-[#924B16] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#DDA15E]"
                  >
                    <Gift className="h-5 w-5" aria-hidden="true" />
                    Give It For {money(v.price)}
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
            className="shrink-0 rounded-md px-5 py-3.5 text-center text-sm font-bold text-[#2E2318] shadow-md transition-colors hover:brightness-95 sm:text-base"
            style={{ background: WHEAT }}
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
