"use client"

import { useEffect, useRef, useState } from "react"
import { Young_Serif } from "next/font/google"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Droplets, Gift, Lightbulb, Play, Sprout, Star, X } from "lucide-react"

// ============================================================
// /holiday-gift-grove : The Grove Starter Set, HOLIDAY GIFT angle
// (owner, 2026-11-11: "do the same thing for ... the seedling trays in
// this exact same format"). A FORMAT CLONE of /holiday-gift-grange: same
// promo bar, header, hero with price above the fold, hero points, brick
// media band, who-it-is-for, swipe wall, proof, questions + comparison
// table, buy box with the 1 Set / 2 Set picker, guarantee, FAQ, closing
// image, sticky bar. Self-contained; shares nothing with other Grove pages.
//
// - Gift framing: the gardener on your list who starts seeds every spring.
//   Holiday gift, spring payoff.
// - No video of this product exists yet. The media slots are the Grange
//   clip slots with a still fallback: each tile is a 9:16 webp in
//   public/hggrove/. To drop in a clip later, add hggrove-<id>.mp4 next to
//   hggrove-<id>.webp (the webp becomes its poster) and set video: true on
//   that tile. Layout does not change. VideoPlay fires only for video tiles.
// - NO shipping mention anywhere.
// - The buy button goes to the Grove PDP (US Plug variant preselected),
//   never to cart or checkout. The click decorator adds lp=hggrove + UTMs.
// ============================================================

const display = Young_Serif({ weight: "400", subsets: ["latin"], display: "swap" })

// ===== CONFIG =====

// LIVE PRICES, read off /products/the-grove-starter-set.json 2026-11-11,
// US Plug variants only (AUS/UK are not offered on this page):
//   43097694044203  US Plug / 1 Set (2 Trays)  $99.00 / $150.00  save $51
//   43097694076971  US Plug / 2 Set (4 Trays)  $159.00 / $300.00 save $141
// Proof exactly as the live PDP shows it: 4.8/5, 450+ reviews, 22,000+
// gardeners, 60-day money back guarantee, lifetime warranty, 2 free guides.
// 160 cells on the 2 Set = 4 trays x 40 cells (both on the PDP).
const LANDER_TAG = "hggrove"
const PRODUCT_NAME = "The Grove Starter Set"
const PDP_URL = "https://fieldandharvestco.com/products/the-grove-starter-set"
const WARRANTY_LINE = "LIFETIME WARRANTY"

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
    label: "1 Set (2 Trays)",
    sublabel: "80 cells for the gardener on your list",
    badge: null,
    price: 99,
    compareAt: 150,
    variantId: "43097694044203",
  },
  {
    key: "2",
    label: "2 Set (4 Trays)",
    sublabel: "160 cells, one set to give, one to keep",
    badge: "Best Value",
    price: 159,
    compareAt: 300,
    variantId: "43097694076971",
  },
]
const DEFAULT_VARIANT = 0

const INCLUDED = [
  { title: "The Endless Harvest, gardening guide", value: "free" },
  { title: "Harvest Keeper's Handbook, produce storage guide", value: "free" },
  { title: "Lifetime warranty", value: "included" },
]

const BUY_CHECKS = ["60 days to decide", "Lifetime warranty", "2 free guides"]
const STICKY_SUB = "The holiday gift that starts their spring"

const RATING = { score: "4.8", count: "450+" }
const PROOF_LINE = "Rated 4.8 out of 5 from 450+ reviews, trusted by 22,000+ gardeners"

const HERO_POINTS = [
  { icon: Lightbulb, text: "Full spectrum LED grow lights sit right over the cells, so seedlings grow strong indoors" },
  { icon: Droplets, text: "Clear humidity domes with adjustable vents lock in warmth and moisture for germination" },
  { icon: Sprout, text: "80 cells across 2 trays, room for tomatoes, peppers, herbs and flowers" },
]

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const IMAGES = {
  logo: `${CDN}/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=240`,
  hero: `${CDN}/pomelli-image.png?v=1771896430&width=1000`,
  heroAlt: "A gardener by a sunny window opening the vent on one of two Grove seed starting trays",
  q1: `${CDN}/20260223_2020_Image_Generation_remix_01kj6kp4f5ezj88zpzjvn85tps.png?v=1772509003&width=800`,
  q1Alt: "Everything in the box: two LED grow light bars, the clear humidity dome, the 40-cell tray, the base tray, hand tools, a marker and plant labels",
  buyBox: `${CDN}/20260226_2201_Image_Generation_remix_01kjegmwa5evpr9v3k35w8ry28.png?v=1772161440&width=900`,
  buyBoxAlt: "The Grove Starter Set with the grow lights on over a tray of seedlings",
  closing: `${CDN}/20260223_1938_GardeningApronwithBadges_remix_01kj6h8vmjft09j5y0b185ymzz.png?v=1771893583&width=1000`,
  closingAlt: "A gardener in a greenhouse opening the vent on a lit Grove tray of seedlings",
}

// Media tiles. Same slots as the Grange clip bands. Stills today (no video
// of this product exists); set video: true once hggrove-<id>.mp4 is added.
type Clip = { id: string; tag: string; alt: string; video?: boolean }
const V = "/hggrove"
const EMPTY_CLIPS: Clip[] = [
  { id: "lights-on-over-the-cells", tag: "Lights on, right over the cells", alt: "The grow lights glowing inside the dome over a tray of seedlings" },
  { id: "plugged-in-on-the-counter", tag: "Plugged in on the counter", alt: "Hands setting a lit tray on a kitchen counter by the window, plugged into the wall" },
  { id: "twist-of-the-vent", tag: "A twist of the vent", alt: "A gardener turning a vent on the humidity dome in a greenhouse" },
  { id: "two-trays-to-a-set", tag: "Two trays to a set", alt: "Two Grove trays side by side on a potting bench" },
]
const WORN_CLIPS: Clip[] = [
  { id: "step-1-fill-the-cells", tag: "1. Fill the cells", alt: "Soil filled into each of the 40 cells" },
  { id: "step-2-seeds-and-labels", tag: "2. Seeds and labels in", alt: "A seed packet and soil on the bench, ready to sow" },
  { id: "step-3-dome-on", tag: "3. Dome on", alt: "The clear humidity dome set over the tray" },
  { id: "step-4-vents-and-lights", tag: "4. Vents and lights", alt: "A hand turning the vent on the dome with the grow light on" },
  { id: "step-5-first-sprouts", tag: "5. First sprouts", alt: "Seedlings coming up in every cell under the dome" },
  { id: "step-6-out-to-the-garden", tag: "6. Out to the garden", alt: "Hands setting a seedling into the garden bed" },
]

const WHO_FOR = [
  "The one with seed catalogs on the kitchen table by January.",
  "The one who saves seeds in envelopes and labels every one.",
  "The one who wants the tomatoes they picked, not whatever the garden center has in May.",
  "The one who already owns every tool and says not to get them anything.",
]

const QUESTIONS = [
  {
    q: "What comes in the box?",
    a: "Two trays of 40 cells each, clear humidity domes with adjustable vents, full spectrum LED grow light bars, plant labels, a marker and hand tools. Everything is made to work together from germination to transplant. One box, one setup, nothing left to source.",
  },
  {
    q: "Why not just a seed tray on the windowsill?",
    a: "Indoor light is rarely enough. Seedlings that do not get the right light stretch toward whatever they can find and reach the garden leggy and weak. The Grove puts full spectrum LED grow light bars directly over the cells and a humidity dome over the soil, so their seedlings come up strong, with nothing else to buy.",
  },
]

type Row = { label: string; ours: string; other: string }
const ROWS: Row[] = [
  { label: "The light", ours: "Full spectrum LEDs over the cells", other: "Whatever comes through the glass" },
  { label: "The seedlings", ours: "Strong stems, grown under the light", other: "Stretch and lean toward the window" },
  { label: "Warmth and moisture", ours: "Domes with adjustable vents", other: "Open to the room" },
  { label: "Setting it up", ours: "One box, nothing to source", other: "A tray, a light and a dome, bought separately" },
]

const GUARANTEE_BODY = [
  "They get 60 days to grow with it, from the first seed to the first transplant, with a full refund either way.",
  "The Grove Starter Set is backed by a lifetime warranty. The trays and domes are built to come back out every spring, and we stand behind them for life.",
]

const SALE_FAQ =
  "The Early Access Black Friday price is already on the product page, so there is no code to type and nothing to remember. Tap the button, pick 1 or 2 Sets and check out with up to $141 off, and both free guides come with the order."
const FAQS = [
  {
    q: "Who is it for?",
    a: "Anyone who starts seeds every spring, or has been meaning to: tomatoes, peppers, herbs and flowers. It sits on a kitchen counter, a shelf or a potting bench, anywhere near an outlet.",
  },
  {
    q: "When will they use it?",
    a: "In late winter, when seeds go under lights indoors ahead of the last frost. Give it for the holidays and it is ready on the counter the day the seed packets come out.",
  },
  {
    q: "Can they use it again next year?",
    a: "Yes. Rinse the trays, stack them and start again next season, every season. The Grove Starter Set is backed by a lifetime warranty.",
  },
  {
    q: "What plug does it have?",
    a: "Both sets on this page come with a standard US plug.",
  },
  {
    q: "What are the free guides?",
    a: "Two digital guides come free with every order: The Endless Harvest, a gardening guide, and Harvest Keeper's Handbook, a produce storage guide.",
  },
]

// ===== END CONFIG =====

const SALE_NAME = "Early Access Black Friday Sale"
const CTA_LABEL = "Choose their Starter Set"

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

// The PDP promo bar, inline. IDENTICAL to /holiday-gift-grange (and so to
// /early-black-friday-grange): saving, warranty, clock to local midnight.
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

// The Grange clip slot, with a still fallback. A tile with video: true is a
// muted loop that only gets its src once it nears the viewport, plays while
// visible and pauses off screen (under reduced motion it waits for a tap).
// A tile without it renders its 9:16 webp (the future poster) in the same box.
function LoopClip({ clip, index, className = "" }: { clip: Clip; index: number; className?: string }) {
  if (!clip.video) {
    return (
      <div className={`relative overflow-hidden bg-[#2E2318] ${className}`}>
        <img
          src={`${V}/hggrove-${clip.id}.webp`}
          alt={clip.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {/* Gift tag caption */}
        <span className="hgg-tag absolute bottom-2.5 left-2.5 max-w-[85%]">{clip.tag}</span>
      </div>
    )
  }
  return <VideoClip clip={clip} index={index} className={className} />
}

function VideoClip({ clip, index, className = "" }: { clip: Clip; index: number; className?: string }) {
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
        src={armed ? `${V}/hggrove-${clip.id}.mp4` : undefined}
        poster={`${V}/hggrove-${clip.id}.webp`}
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

export default function HolidayGiftGrovePage() {
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
              A holiday gift for the gardener in your life
            </p>

            <h1
              className={`${display.className} text-balance text-center text-[2.1rem] leading-[1.08] text-foreground sm:text-5xl lg:text-left lg:text-[3.4rem]`}
            >
              The gift that starts their whole garden before spring.
            </h1>

            <p className="text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-left">
              Two trays, 80 cells, full spectrum LED grow lights and humidity domes in one box. When the seed packets come
              out in late winter, the trays go on the counter, the lights go on, and their garden is already growing while
              it is still cold outside.
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
        {/* THE EMPTYING BAND: the one dark interrupt on the page */}
        <section ref={anchorRef} className="hgg-band mt-10 px-4 py-12 sm:px-5 sm:py-16" style={{ background: BRICK }}>
          <div className="mx-auto max-w-5xl">
            <h2 className={`${display.className} text-balance text-center text-3xl leading-tight text-[#FBEBD3] sm:text-4xl`}>
              The first green of the year, on their counter.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-base leading-relaxed text-[#F3DDBF] sm:text-lg">
              Lights right over the cells, a dome over the soil, two trays to a set. Their garden starts indoors, weeks
              before the ground is ready.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {EMPTY_CLIPS.map((c, i) => (
                <LoopClip key={c.id} clip={c} index={i} className="aspect-[9/16] rounded-md ring-1 ring-[#DDA15E]/40" />
              ))}
            </div>
            <JumpCta className="mt-9" note="Everything in one box. Nothing left to source." onDark />
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
              It is the gift that waits for spring, then gets used every day. The week the seed packets come out, the trays
              go on the counter and the lights go on, and the morning the first sprouts come up, you will hear about it.
              Giving to two gardeners, or keeping one? The 2 Set is four trays, 160 cells, at {money(VARIANTS[1].price)}.
            </p>
          </section>

          {/* STEP WALL (the Grange "worn" swipe wall) */}
          <section className="mt-14">
            <h2 className={`${display.className} text-pretty text-3xl leading-snug text-foreground sm:text-4xl`}>
              From the seed packet to the garden bed.
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
            <div className="mt-6 flex flex-col items-start border-l-4 border-primary bg-card p-5">
              <Stars />
              <p className={`${display.className} mt-3 text-xl leading-snug text-foreground sm:text-2xl`}>
                Rated {RATING.score} out of 5 from {RATING.count} reviews.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Two trays, 80 cells, the lights and the domes, all made to work together from germination to transplant
                day.
              </p>
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
                            <th className="p-3 text-xs font-bold">A tray on the windowsill</th>
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
                    data-hggrove-buy={v.variantId}
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
