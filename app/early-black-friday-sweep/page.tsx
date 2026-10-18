"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Leaf, Play, ShieldCheck, Star, Wind, X } from "lucide-react"
import { SALE_END, SALE_END_SHORT } from "./sale"

// ============================================================
// /early-black-friday-sweep : The Yeoman Sweep
// DRAFT. NOT DEPLOYED. NOT IN THE GIT REPO. Local preview only.
//
// A section-for-section copy of /end-of-summer-sale (the Yeoman Handle
// seasonal funnel with the buy box on the page), resold for the SWEEP.
// Section order is unchanged: banner, header, hero, hero points, video
// wall, "why now" band, reviews, two questions + comparison, buy box,
// guarantee, FAQ, closing image, sticky bar, footer.
//
// Two forced structural changes, both because the product is different:
//   1. The color picker is gone. The Sweep has one option, Size.
//   2. The pack picker became a SIZE picker with two buyable sizes.
//      The 30 in is SOLD OUT and is not offered anywhere on this page.
//
// OFFER (owner, Tobe, 2026-10-17 10:40 PM ET, verbatim):
//   "Nope, no discount. Just advertise the existing difference between the
//    compare-at price and the current price as the early access Black
//    Friday sale discount."
// So: no code, no new Shopify discount, no price change. The sale price is
// the live price, the "was" price is the live compare-at.
//
// LIVE PRICES, read off the-yeoman-sweep.js on 2026-10-17 by the CMO:
//   21 in  45323703779371  $229.99 / $289.99   save $60.00 (20.7%)
//   26 in  45323396120619  $299.99 / $379.99   save $80.00 (21.1%)  Most popular
//   30 in  45323396153387  SOLD OUT ($349.99 / $449.99)  not shown
// Savings are shown in WHOLE DOLLARS off (owner, Tobe, 2026-10-18), FLOORED,
// never rounded up, so the 21 in reads $60 off and the 26 in reads $80 off.
// "Up to $80 off" rests on the 26 in only.
//
// FACTS: GrowthEngine/data/cmo/brain/FH-yeoman-sweep-2026-10-17.md
//   Free gear $77 on every size (3 x 300L bags $50, One-Pass Yard $15,
//   Tool Audit $12). 60 days to decide, free shipping both ways. Ships free
//   from a US warehouse. Delivery estimate is today + 5 days, nothing else.
//   Rating 4.7 / 3,783+ is owner-locked on the Sweep PDP.
//
// THE SALE END DATE IS THE OWNER'S CALL and lives in ./sale.ts. Every date
// on this page reads from SALE_END.
//
// IMAGERY: public/ holds no Sweep imagery. Every image and clip below is a
// Sweep asset already on the Shopify CDN and already wired into the live
// Sweep pages (/before-it-sells-out, /leaf-cleanup-wrecks-your-back). No
// Handle image survives on this page and nothing was generated.
//
// BUY LINK: STRAIGHT TO CHECKOUT (owner, Tobe, 2026-10-18: "it goes straight
// to checkout. It doesn't go to the product page"). A Shopify cart permalink,
// /cart/<sweep variant>:1,<yard bags variant>:1, adds the chosen Sweep AND the
// free yard bags and opens checkout. The bags line is zeroed by the store's
// automatic discount. Verified at a real checkout 2026-10-18: 26 in totals
// $299.99 and 21 in totals $229.99, "3 Bags" shown Free on both.
// ============================================================

const LANDER_TAG = "ebfs"
const SALE_NAME = "Early Black Friday Access"
const CTA_LABEL = "CLAIM EARLY BLACK FRIDAY ACCESS >>"
const STORE_URL = "https://fieldandharvestco.com"
const BAGS_VARIANT = "45281541652523" // 3 x 300L yard bags, the gift_always_variant on the Sweep PDP
const ETA_DAYS = 5

const RATING = "4.7"
const REVIEW_COUNT = "3,783+"

// ---------- SIZES (the buyable ones only) ----------
type Size = {
  key: string
  label: string
  sublabel: string
  badge: string | null
  price: number
  compareAt: number
  variantId: string
}

const SIZES: Size[] = [
  {
    key: "21",
    label: "21 in",
    sublabel: "For a smaller lawn and tight beds",
    badge: null,
    price: 229.99,
    compareAt: 289.99,
    variantId: "45323703779371",
  },
  {
    key: "26",
    label: "26 in",
    sublabel: "The size most yards take",
    badge: "Most Popular",
    price: 299.99,
    compareAt: 379.99,
    variantId: "45323396120619",
  },
]

const DEFAULT_SIZE = 1 // the 26 in: most popular, and the size that carries "up to $80 off"

const GIFTS = [
  { title: "3 x 300L Yard Bags", value: "$50 value" },
  { title: "The One-Pass Yard Guide", value: "$15 value" },
  { title: "The Yard Tool Audit Checklist", value: "$12 value" },
]
const FREE_GEAR = "$77"

const SHIPPING_NOTE = "Ships free from our US warehouse."

// Whole dollars off, floored. Rounded to cents first so float noise
// (379.99 - 299.99 = 79.99999...) cannot floor $80 down to $79.
function dollarsOff(price: number, compareAt: number) {
  return `$${Math.floor(Math.round((compareAt - price) * 100) / 100)}`
}

const MAX_OFF = `$${Math.max(...SIZES.map((s) => Math.floor(Math.round((s.compareAt - s.price) * 100) / 100)))}`

// ---------- SEASON: everything that names the sale ----------
const SEASON = {
  name: SALE_NAME,
  bannerHeadline: "EARLY BLACK FRIDAY ACCESS",
  bannerOffer: `UP TO ${MAX_OFF} OFF + ${FREE_GEAR} OF FREE GEAR`,
  endsShort: `Ends ${SALE_END}`,
  endsLong: SALE_END,
  jobLine: "The leaves come down once a year, and the big drop is here now.",
  whyEarly:
    "We're opening our Black Friday sale early because we'll sell out well before Black Friday, and we want you to get the biggest sale of the year.",
} as const

// ---------- HERO ----------
const HEADLINE_EYEBROW = `The Yeoman Sweep · ${SEASON.name}`
const HEADLINE_MAIN = "Early Black Friday Access Is Open On The Yeoman Sweep."
const HEADLINE_ACCENT = `Up To ${MAX_OFF} Off Until ${SALE_END}.`
const HERO_SUB =
  "One walk across the lawn and the leaves are in the hopper, not in a pile you bend over all Saturday. The wheels drive the brushes, so there is nothing to start, fuel or charge."
const HERO_PROOF = `${RATING} · ${REVIEW_COUNT} reviews`
const SOCIAL_PROOF = `${RATING} stars • ${REVIEW_COUNT} reviews • ${FREE_GEAR} of free gear with every size`

const HERO_POINTS = [
  { icon: Leaf, text: "Lifts leaves, pine needles and sweetgum balls into a 7 cu ft hopper as you walk" },
  { icon: Wind, text: "No motor. The wheels drive the brushes, so there is nothing to fuel or charge" },
  { icon: ShieldCheck, text: "60 days to decide on your own lawn. Free shipping both ways" },
]

const PAGE_THEME = {
  "--background": "oklch(1 0 0)",
  "--foreground": "oklch(0.21 0.008 60)",
  "--card": "oklch(1 0 0)",
  "--card-foreground": "oklch(0.21 0.008 60)",
  "--primary": "oklch(0.58 0.196 42)",
  "--primary-foreground": "oklch(1 0 0)",
  "--secondary": "oklch(0.965 0.004 70)",
  "--secondary-foreground": "oklch(0.21 0.008 60)",
  "--muted": "oklch(0.965 0.004 70)",
  "--muted-foreground": "oklch(0.492 0.012 62)",
  "--border": "oklch(0.905 0.005 70)",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
} as React.CSSProperties

// Sweep assets already live on the Shopify CDN (see header comment).
const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const VID = "https://cdn.shopify.com/videos/c/vp"
const IMAGES = {
  logo: `${CDN}/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=240`,
  heroLoop: {
    src: `${VID}/c9bd6065364f43f6b82be7185e42f2bb/c9bd6065364f43f6b82be7185e42f2bb.HD-1080p-3.3Mbps-94336178.mp4`,
    poster: `${CDN}/preview_images/c9bd6065364f43f6b82be7185e42f2bb.thumbnail.0000000000.jpg?v=1789378677`,
  },
  sweetgum: `${CDN}/ysp-sweetgum-real-lawn.png?v=1789416734&width=900`,
  tipHopper: `${CDN}/hf_20260913_083634_da088230-c66f-464c-8f68-ca03117a3a8d.png?v=1789288880&width=800`,
  buyBox: `${CDN}/hf_20260913_102755_b739b898-2a79-427a-beb1-a85a19e1dc69.png?v=1789295464&width=900`,
  closing: `${CDN}/ysp-autumn-full-season.png?v=1789416096&width=1000`,
}

// The Sweep PDP's "See It In Action" clips, same three, same order.
const CLIPS = [
  {
    poster: "https://fieldandharvestco.com/cdn/shop/files/ysp-demo-1-poster.png?v=1789360142&width=600",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/694788af887245f98d6c8d1a65691279/694788af887245f98d6c8d1a65691279.HD-1080p-4.8Mbps-94313908.mp4?v=0",
    alt: "A push lawn sweeper moving down a driveway with a hopper full of clippings",
  },
  {
    poster: "https://fieldandharvestco.com/cdn/shop/files/ysp-demo-2-poster.png?v=1789360147&width=600",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/7765ff1154124270bfebc1cd2e3fe423/7765ff1154124270bfebc1cd2e3fe423.HD-720p-2.1Mbps-94313911.mp4?v=0",
    alt: "The hopper filling with leaves and debris along a path",
  },
  {
    poster: "https://fieldandharvestco.com/cdn/shop/files/ysp-demo-3-poster.png?v=1789360152&width=600",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/aae359d037e54f179299f0a4b25e1dd1/aae359d037e54f179299f0a4b25e1dd1.HD-720p-4.5Mbps-94313912.mp4?v=0",
    alt: "A full hopper of fall leaves lifted off the lawn in a single pass",
  },
]

// Verbatim from Push Lawn Sweeper/research/voc (the same white-label unit),
// the same quotes already live on /before-it-sells-out and
// /leaf-cleanup-wrecks-your-back. Chosen so none names the sold-out 30 in and
// none claims a condition: every back line is about raking and bending.
const REVIEWS = [
  {
    chip: "Magnolia cones",
    tag: "Bought the 21 in",
    quote:
      "Go this to clean up my yard in the fall when the leaves fall and the magnolia tree in my front yard is dropping cones. It has significantly shortened the time to clean my yard. One of the best yard care items I've bought.",
  },
  {
    chip: "Pine needles, big yard",
    tag: "Bought the 26 in",
    quote:
      "Best purchase of my life lol. I have a big yard and pine needles and dead grass clippings took days to rake and clean but this thing rocks. Easy assembly and picks pine needles, cones, sticks, leaves, and grass clippings up no problem. I set it on the lowest setting and cruise. Wish i bought sooner.",
  },
  {
    chip: "Gave up the blower",
    tag: "Bought the 21 in",
    quote:
      "I am very impressed with this lawn sweeper! It works way better than a rake or leaf blower. The collection basket comes off easily and pops back into place with ease. The adjustable deck height is extremely handy whether working with tall grass, short grass, or no grass at all. Highly recommended!",
  },
  {
    chip: "Started out skeptical",
    tag: "Started out skeptical",
    quote:
      "I had this on my wishlist for over a year, after an aching back from from raking and then picking up leaves. I decided to try it, works well. ... It cut my yardwork time down my over half.",
  },
  {
    chip: "A quarter acre lot",
    tag: "Quarter acre lot",
    quote:
      "I absolutely love this product. It saves me so much time and the pain of raking the leaves. ... It only takes me 15 minutes to clean my front yard on 1/4 acre lot. It used to take me hours of blowing then raking and bending to pick up the piles.",
  },
  {
    chip: "Age 65",
    tag: "Age 65",
    quote:
      "Saw ad for this. Thought will it really work? Well it does and so much easier than raking. Easy assembly. Easy to take off the bag. ... I’m 65 and no problem.",
  },
  {
    chip: "Done with the rake",
    tag: "Done with the rake",
    quote:
      "If you hate raking leaves or like me can’t because it’s too painful. This Lawn Sweeper is amazing. 5 min for a chunk of the back yard and that’s me going slow! Worth every penny!!",
  },
]

type Row = { label: string; yeoman: string; other: string }
// Same rows as the /ditch-the-rake comparison, so the two pages agree.
const ROWS: Row[] = [
  { label: "Gathers the debris", yeoman: "Yes, as you walk", other: "No, it relocates it" },
  { label: "Picks it up off the ground", yeoman: "Into a 7 cu ft hopper", other: "Never lifts a thing" },
  { label: "Bending required", yeoman: "None", other: "Still bagging on your knees" },
  { label: "Gas, cord or battery", yeoman: "None, you push it", other: "Yes, and the neighbors know" },
]

// The two objections an OFFER page creates for this product: will it handle
// what falls in my yard, and why add it when I already own a blower.
const QUESTIONS = [
  {
    q: "Will it handle what falls in my yard?",
    a: "Leaves, pine needles, grass clippings, cones and sweetgum balls all go into the hopper. Sweetgum balls and pods are hard and round, so they roll away from a rake and a mower blade just moves them. The Sweep's three V-brushes flick them up into a 7 cu ft hopper, and ten brush heights on a handle at the side let you set it for whatever is on the ground.",
  },
  {
    q: "I already own a leaf blower. Why add this?",
    a: "A blower moves the leaves into a pile, and then you still bend over that pile to bag it. The Sweep lifts the leaves into its hopper as you walk, so the pile never exists. The hopper lifts off on four buckles and you tip it into a yard bag standing up.",
  },
]

function money(n: number) {
  return `$${n.toFixed(2)}`
}

function buyUrl(size: Size) {
  return `${STORE_URL}/cart/${size.variantId}:1,${BAGS_VARIANT}:1`
}

function useEta() {
  const [eta, setEta] = useState<string | null>(null)
  useEffect(() => {
    const d = new Date(Date.now() + ETA_DAYS * 86400000)
    setEta(d.toLocaleDateString("en-US", { month: "long", day: "numeric" }))
  }, [])
  return eta
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

// Every in-page CTA scrolls to the buy box. The buy box link to the Sweep PDP
// is the only outbound link on the page.
function JumpCta({ note, className = "" }: { note?: string; className?: string }) {
  return (
    <div className={className}>
      <div className="flex justify-center">
        <a
          href="#buy"
          className="inline-block w-full max-w-md rounded-md bg-primary px-8 py-5 text-center text-lg font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:text-xl"
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
    <section ref={innerRef} className="mt-8 rounded-lg bg-[#3D332A] px-5 py-8 sm:px-7">
      <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#E8DFD2]">
        See It On Real Lawns
      </h2>
      <p className="mt-2 text-center text-sm text-[#B8AA98]">Real yards, real leaf drop. Nothing staged.</p>
      <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CLIPS.map((clip, i) => (
          <div key={clip.poster} className="relative aspect-[9/16] w-[46%] shrink-0 snap-start overflow-hidden rounded-md bg-black sm:w-[31%]">
            {playing === i ? (
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
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-lg">
                    <Play className="ml-0.5 h-6 w-6 fill-[#3D332A] text-[#3D332A]" aria-hidden="true" />
                  </span>
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-[#8F8375]">Tap any clip to play. Swipe for more.</p>
    </section>
  )
}

export default function EarlyBlackFridaySweep() {
  const wallRef = useRef<HTMLElement | null>(null)
  const buyRef = useRef<HTMLElement | null>(null)
  const [pastWall, setPastWall] = useState(false)
  const [buyVisible, setBuyVisible] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [sizeIdx, setSizeIdx] = useState(DEFAULT_SIZE)
  const eta = useEta()

  const size = SIZES[sizeIdx]
  const savingsUsd = dollarsOff(size.price, size.compareAt)
  const heroSize = SIZES[DEFAULT_SIZE]

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
        new URLSearchParams(window.location.search).forEach((v, k) => {
          if (k.startsWith("utm_") && !url.searchParams.has(k)) url.searchParams.set(k, v)
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
        content_ids: [size.variantId],
        content_type: "product",
        content_name: `The Yeoman Sweep / ${size.label}`,
        value: size.price,
        currency: "USD",
      })
      w.fbq?.("trackCustom", "BuyBoxClick", {
        page: LANDER_TAG,
        content_ids: [size.variantId],
        content_name: `The Yeoman Sweep / ${size.label}`,
        value: size.price,
        currency: "USD",
      })
      w.clarity?.("set", `${LANDER_TAG}_buy`, size.key)
      w.clarity?.("upgrade", `${LANDER_TAG}-buy-click`)
    } catch {
      // Never let analytics block the click.
    }
  }

  const showSticky = pastWall && !buyVisible

  return (
    <div style={PAGE_THEME} className="min-h-screen bg-background text-foreground">
      {/* SEASONAL TOUCHPOINT 1: the banner. */}
      <div className="bg-foreground py-2.5 text-center">
        <p className="px-4 text-[11px] font-bold uppercase leading-snug tracking-[0.12em] text-background sm:text-sm">
          <span className="text-primary">{SEASON.bannerHeadline}</span>{" "}
          <span className="opacity-60">·</span> {SEASON.bannerOffer}
        </p>
      </div>

      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-4">
          <img src={IMAGES.logo} alt="Field &amp; Harvest Co." className="h-7 w-auto object-contain md:h-9" />
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-6 md:py-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-4 lg:order-1">
            {/* SEASONAL TOUCHPOINT 2: eyebrow carries the sale name and end date. */}
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary lg:text-left">
              {HEADLINE_EYEBROW} · {SEASON.endsShort}
            </p>

            <h1 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-left lg:text-5xl">
              {HEADLINE_MAIN} <span className="text-primary">{HEADLINE_ACCENT}</span>
            </h1>

            <p className="text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-left">
              {HERO_SUB}
            </p>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Stars />
              <span className="text-sm font-semibold text-foreground">{HERO_PROOF}</span>
            </div>

            {/* SEASONAL TOUCHPOINT 3: the price line, above the fold. */}
            <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 lg:justify-start">
              <span className="text-3xl font-bold text-foreground">{money(heroSize.price)}</span>
              <span className="text-lg text-muted-foreground line-through">{money(heroSize.compareAt)}</span>
              <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-primary">
                Save {dollarsOff(heroSize.price, heroSize.compareAt)}
              </span>
            </div>

            <JumpCta className="pt-1" note={`60 days to decide · Ships free · Sale ends ${SEASON.endsLong}`} />
          </div>

          <div className="lg:order-2">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={IMAGES.heroLoop.poster}
              aria-label="The Yeoman Sweep lifting a lawn full of leaves into the hopper at walking pace"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lg lg:aspect-square"
            >
              <source src={IMAGES.heroLoop.src} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-5xl gap-4 px-5 py-6 sm:grid-cols-3 sm:gap-6">
          {HERO_POINTS.map((p) => (
            <div key={p.text} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card text-primary">
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

          {/* SEASONAL TOUCHPOINT 4: the timing argument, stated once, as a reason. */}
          <section className="mt-8 rounded-lg border-2 border-primary bg-primary/5 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Why now</p>
            <p className="mt-2 text-base leading-relaxed text-foreground sm:text-lg">
              {SEASON.whyEarly} {SEASON.jobLine} Get the Sweep in the garage now and every leaf left this fall goes into the hopper
              instead of into a pile. The {SEASON.name} price runs until {SEASON.endsLong}, or until we sell out, if that comes first.
            </p>
            <JumpCta className="mt-5" />
            <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>
          </section>

          <section className="mt-14">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Seven Owners, In Their Own Words
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Verified buyers, picked because their yards have nothing in common with each other.
            </p>

            <div className="mt-6 rounded-lg border border-border bg-muted p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">The owners quoted below</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {REVIEWS.map((r) => (
                  <span
                    key={r.chip}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground"
                  >
                    {r.chip}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Different yards, one sweeper.</p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {(showAllReviews ? REVIEWS : REVIEWS.slice(0, 4)).map((r) => (
                <blockquote key={r.chip} className="flex flex-col border-l-4 border-primary bg-muted p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{r.tag}</p>
                  <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground sm:text-base">{r.quote}</p>
                  <footer className="mt-3 flex flex-wrap items-center gap-2">
                    <cite className="text-xs font-bold not-italic text-foreground">Verified Buyer</cite>
                    <Stars />
                  </footer>
                </blockquote>
              ))}
            </div>

            {!showAllReviews ? (
              <button
                type="button"
                onClick={() => setShowAllReviews(true)}
                className="mt-5 w-full rounded-md border-2 border-foreground bg-card px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
              >
                Read {REVIEWS.length - 4} More &darr;
              </button>
            ) : null}
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Two Things People Check Before They Order
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
                      src={IMAGES.sweetgum}
                      alt="A real lawn carpeted end to end with sweetgum balls under a bare gum tree"
                      loading="lazy"
                      decoding="async"
                      className="mt-5 aspect-[3/2] w-full rounded-sm object-cover"
                    />
                  ) : null}

                  {i === 1 ? (
                    <>
                      <img
                        src={IMAGES.tipHopper}
                        alt="Tipping a full hopper of leaves into a yard bag, standing up"
                        loading="lazy"
                        decoding="async"
                        className="mt-5 aspect-square w-full max-w-sm rounded-sm object-cover"
                      />
                      <div className="mt-5 overflow-x-auto rounded-lg border-2 border-foreground">
                        <table className="w-full min-w-[460px] border-collapse text-left">
                          <thead>
                            <tr className="bg-foreground text-background">
                              <th className="p-3 text-xs font-bold uppercase tracking-wide">Look at</th>
                              <th className="bg-primary p-3 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                                The Yeoman Sweep
                              </th>
                              <th className="p-3 text-xs font-bold uppercase tracking-wide">A leaf blower</th>
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
                                    <span className="font-semibold text-foreground">{r.yeoman}</span>
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
              THE BUY BOX. Size picker, free gear, subtotal, then one link
              straight to checkout with the chosen size and the free yard bags.
              ============================================================ */}
          <section ref={buyRef} id="buy" className="mt-14 scroll-mt-4">
            <div className="overflow-hidden rounded-lg border-2 border-foreground">
              {/* SEASONAL TOUCHPOINT 5: the buy box wears the sale. */}
              <div className="bg-foreground px-5 py-3 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-background sm:text-sm">
                  <span className="text-primary">{SEASON.bannerHeadline}</span> · {SEASON.endsShort}
                </p>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="bg-muted md:w-2/5 md:shrink-0">
                  <img
                    src={IMAGES.buyBox}
                    alt="The Yeoman Sweep, three-quarter studio view"
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                  <p className="px-4 pb-3 pt-2 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Selected: {size.label} &middot; 3 free yard bags included
                  </p>
                </div>
                <div className="flex flex-col justify-center p-5 md:w-3/5 md:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Field &amp; Harvest Co.</p>
                  <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                    The Yeoman Sweep
                  </h2>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <Stars />
                    <span className="text-sm text-muted-foreground">
                      {RATING} from {REVIEW_COUNT} reviews
                    </span>
                  </div>

                  {/* Size picker */}
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Choose your size</p>
                    <div className="mt-3 flex flex-col gap-2.5">
                      {SIZES.map((s, i) => {
                        const selected = i === sizeIdx
                        return (
                          <button
                            key={s.key}
                            type="button"
                            onClick={() => setSizeIdx(i)}
                            aria-pressed={selected}
                            className={`flex w-full items-center justify-between gap-3 rounded-lg border-2 p-4 text-left transition-all ${
                              selected
                                ? "border-primary bg-primary/5 shadow-md"
                                : "border-border bg-background hover:border-foreground/30"
                            }`}
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                                  selected ? "border-primary bg-primary" : "border-border"
                                }`}
                                aria-hidden="true"
                              >
                                {selected ? <span className="block h-1.5 w-1.5 rounded-full bg-white" /> : null}
                              </span>
                              <span className="min-w-0">
                                <span className="block text-base font-bold leading-tight text-foreground">{s.label}</span>
                                <span className="mt-0.5 block truncate text-xs font-semibold text-primary">
                                  {s.badge ? `${s.badge} · ` : ""}
                                  {s.sublabel}
                                </span>
                              </span>
                            </span>
                            <span className="shrink-0 text-right">
                              <span className="block text-base font-bold leading-none text-foreground">
                                {money(s.price)}
                              </span>
                              <span className="mt-1 block text-xs leading-none text-muted-foreground line-through">
                                {money(s.compareAt)}
                              </span>
                              <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-primary">
                                Save {dollarsOff(s.price, s.compareAt)}
                              </span>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Free gear, exactly as the PDP states it */}
                  <div className="mt-5 rounded-lg border border-border bg-muted p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-foreground">
                        {FREE_GEAR} Of Free Gear
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        With every size
                      </span>
                    </div>
                    <ul className="mt-2.5 flex flex-col gap-1.5">
                      {GIFTS.map((g) => (
                        <li key={g.title} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>
                            <span className="font-semibold text-foreground">{g.title}</span> · {g.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Subtotal */}
                  <div className="mt-5 border-t border-border pt-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-muted-foreground">The Yeoman Sweep, {size.label}</p>
                      <p className="text-right">
                        <span className="mr-2 text-sm text-muted-foreground line-through">{money(size.compareAt)}</span>
                        <span className="text-2xl font-bold text-foreground">{money(size.price)}</span>
                      </p>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">You save</p>
                      <p className="text-sm font-bold text-primary">
                        {savingsUsd} off
                      </p>
                    </div>
                  </div>

                  <a
                    href={buyUrl(size)}
                    onClick={fireBuyClick}
                    className="mt-5 block rounded-md bg-primary px-6 py-5 text-center text-lg font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
                  >
                    Get The {size.label} &middot; {money(size.price)}
                  </a>

                  <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
                    {SHIPPING_NOTE} Sale price already applied.
                    {eta ? ` Order today, estimated delivery ${eta}.` : ""}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> 60 days to decide
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Free shipping both ways
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> No gas, cord or battery
                    </span>
                  </div>
                </div>
              </div>

              {/* SEASONAL TOUCHPOINT 6: the footer of the buy box. */}
              <p className="border-t-2 border-foreground bg-foreground px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-background">
                {SEASON.name} price holds until {SEASON.endsLong}
              </p>
            </div>
          </section>

          <section className="mt-12">
            <div className="border-4 border-foreground p-5 sm:p-7">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">60 Days On Your Own Lawn</h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  You have watched it on real lawns and read seven owners. That is still their yard. Take it through the
                  heaviest weeks of leaf drop the way you normally would and see it on yours.
                </p>
                {/* SEASONAL TOUCHPOINT 7: the trial outlives the sale. */}
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  You have 60 days to decide, with a full refund either way and free shipping both ways. The sale price
                  ends {SEASON.endsLong}. Your 60 days start the day it arrives, so the deadline is on the price and never
                  on the decision.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Everything Else
            </h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              {/* SEASONAL TOUCHPOINT 8: the sale gets its own FAQ. */}
              <AccordionItem value="sale">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  How long does {SEASON.name} run?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Until {SEASON.endsLong}, or sooner if we sell out first. The sale price is the price on this page, so there is no code to type in and
                  nothing to remember at checkout. That is up to {MAX_OFF} off, plus the yard bags and both guides free
                  with every size.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="setup">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  How much setup is there?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  The core arrives assembled. You attach the push frame and the hopper with a screwdriver, and it is ready
                  for the lawn.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="push">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  Is it hard to push?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  It pushes like a walk-behind mower, and the brush height sets the feel. Ten heights on a handle at the
                  side let you dial it in for your grass: one notch up and it rolls. If you can push a walk-behind mower,
                  you can push this. One of our verified buyers is 65 and put it in four words: no problem.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  What does shipping cost and when will it get here?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {SHIPPING_NOTE}
                  {eta ? ` Order today and the estimated delivery is ${eta}.` : ""} Returns ship free too.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <JumpCta className="mt-10" note={`${SEASON.name} · Ends ${SEASON.endsLong}`} />
          </section>

          <section className="mt-12 pb-4">
            <img
              src={IMAGES.closing}
              alt="A man pushing the Yeoman Sweep across a leaf covered lawn in full autumn color"
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full rounded-sm object-cover"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>
          </section>
        </article>
      </main>

      {/* Sticky bar carries the price and scrolls to the buy box, so the buyer
          always picks his own size. */}
      <div
        aria-hidden={!showSticky}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] backdrop-blur transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="flex items-baseline gap-2 text-sm font-bold leading-tight text-foreground">
              <span className="whitespace-nowrap">{money(size.price)}</span>
              <span className="whitespace-nowrap text-xs font-normal text-muted-foreground line-through">
                {money(size.compareAt)}
              </span>
            </p>
            <p className="truncate text-[11px] leading-tight text-muted-foreground">
              {SEASON.name} · Ends {SALE_END_SHORT}
            </p>
          </div>
          <a
            href="#buy"
            tabIndex={showSticky ? 0 : -1}
            className="shrink-0 rounded-md bg-primary px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:text-base"
          >
            Get It &middot; {money(size.price)}
          </a>
        </div>
      </div>

      <footer className="border-t border-border pb-28 pt-8 sm:pb-8">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            &copy; 2026 Field &amp; Harvest Co. {SEASON.name} pricing ends {SEASON.endsLong}.
          </p>
        </div>
      </footer>
    </div>
  )
}
