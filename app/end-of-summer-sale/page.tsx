"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Play, Star, X } from "lucide-react"

// ============================================================
// /end-of-summer-sale — The Yeoman Handle
// SEASONAL OFFER FUNNEL WITH THE BUY BOX ON THE PAGE.
//
// Two things make this route different from everything else in the fleet, and
// both are the point of it.
//
// 1. IT IS SEASONAL. The sale is named, dated and referenced at eight points
//    down the page. Every seasonal string lives in the SEASON object below, so
//    cloning this to /fall-cleanup-sale in October is a five-line edit and not
//    a rebuild.
//
// 2. THE BUY BOX IS ON THE PAGE. Every other Yeoman lander hands the buyer off
//    to the PDP, which costs a page transition and a second sell cycle. Here
//    the CTAs scroll to #buy and the only outbound link in the whole file is
//    the checkout permalink itself.
//
// It is built on /see-who-else-switched (proof-led, deliberately NOT a
// listicle) because the traffic is the same shape: product-aware, arriving off
// heavy offer statics, already sold on what the thing is. What they have not
// done is act. So the heavy convincing came out and the proof stayed in.
//
// KEPT from the parent: the video wall, the eight verbatim reviews, the
// cheap-copies comparison, the guarantee.
// CUT from the parent: the biomechanics/leverage section, the "my back is
// worse than his" question, and the closing mechanism essay. Somebody who has
// already seen a price does not need a lecture on levers.
//
// PRICES ARE LOWER HERE THAN ON THE CONTROL PDP AND THAT IS DELIBERATE. It
// sells its own Shopify product (yeoman-handle-eos) rather than discounting
// the control, so there is no coupon code for anyone to scrape. See PRICING.
// ============================================================

// ---------- SEASON: everything that changes when the season does ----------
const SEASON = {
  name: "End Of Summer Sale",
  bannerHeadline: "END OF SUMMER SALE",
  bannerOffer: "UP TO 61% OFF + 2 FREE YARDWORK GUIDES",
  endsShort: "Ends Sept 21",
  endsLong: "September 21",
  // Used in running prose. Keep it a real calendar fact, never a countdown.
  endsClause: "when summer does, on September 21",
  jobLine: "There is one more month of growth in the yard, and then it stops.",
} as const

const LANDER_TAG = "eos"
const CTA_LABEL = "SHOP THE END OF SUMMER SALE >>"

// ---------- PRICING ----------
//
// ⭐ THIS PAGE SELLS ITS OWN SHOPIFY PRODUCT, NOT THE CONTROL, AND THAT IS THE
// WHOLE MECHANISM. The seasonal price is the product's real price, so there is
// no discount code anywhere in this funnel.
//
//   CONTROL   the-yeoman-handle   7914273374251   $39.99 / $79.99   untouched
//   THIS PAGE yeoman-handle-eos   8078522122283   $34.99 / $69.99
//
// A code was the obvious first answer and it is the wrong one. A Shopify
// discount code is global: put SUMMEREND in a URL and the coupon extensions
// (Honey, Capital One Shopping, Coupert, RetailMeNot) scrape it within days and
// then inject it at checkout for ALL traffic, including the control funnels
// running at $39.99. You would be cutting 12.5% off every order in the account
// to run a test on one page. A separate product has nothing to find.
//
// It also removes a flinch: with a code the buyer sees $34.99 on the page and
// $39.99 in his cart until the code resolves. Here the price is just the price.
//
// The duplicate is ACTIVE, published to Online Store ONLY (deliberately
// unpublished from Facebook & Instagram so it cannot undercut the control in a
// catalogue ad), and in ZERO collections, so it never appears in browse or in
// /collections/the-yeoman-series. Same six images, same templateSuffix
// (the-yeoman-handle-usp), same SKUs, so fulfilment routing is unchanged.
//
// ⚠️ WHEN THE SALE ENDS: draft the duplicate, or raise its prices. Do NOT leave
// it live at $34.99, because the page tells the buyer the price goes back up on
// September 21 and that has to be true the next time this runs.
//
// ⚠️ Its SKUs are IDENTICAL to the control's on purpose (fulfilment safety), so
// a SKU-level report merges the two funnels. Read this funnel by PRODUCT, by the
// distinct title, or by the lp=eos param.

type Pack = {
  key: string
  label: string
  sublabel: string
  badge: string | null
  price: number
  compareAt: number
  handles: number
  ids: { Silver: string; White: string }
}

const PACKS: Pack[] = [
  {
    key: "single",
    label: "1 Handle",
    sublabel: "One trimmer, one handle",
    badge: null,
    price: 34.99,
    compareAt: 60,
    handles: 1,
    ids: { Silver: "45187739844651", White: "45187739910187" },
  },
  {
    key: "bogo",
    label: "Buy 2, Get 1 Free",
    sublabel: "Three handles. Keep one, gift two.",
    badge: "Best Value",
    price: 69.99,
    compareAt: 180,
    handles: 3,
    ids: { Silver: "45187739877419", White: "45187739942955" },
  },
]

const COLORS = ["Silver", "White"] as const
type Color = (typeof COLORS)[number]

// Display-only, exactly as the PDP states them. These are NOT cart line items:
// the Handle PDP carries them as gift blocks and they are delivered with the
// order, so this page claims what that page claims and nothing more.
const GIFTS = [
  { title: "The One-Pass Yard Guide", value: "$15 value" },
  { title: "The Yard Tool Audit Checklist", value: "$12 value" },
]

const SHIPPING_NOTE = "Flat $9.95 shipping. Free on orders over $85."

// ---------- HERO ----------
const HEADLINE_EYEBROW = `The Yeoman Handle™ · ${SEASON.name}`
const HEADLINE_MAIN = "40,000 Trimmer Owners Swapped The Handle."
const HEADLINE_ACCENT = "Until Summer Ends, Yours Is $34.99."
const HERO_SUB =
  "The factory grip sits too low on every brand, and that is what puts your back in the bend. This one moves the grip out to where your hand already is. Three minutes with an allen key."
const HERO_PROOF = "4.8 · 800 reviews"
const SOCIAL_PROOF = "4.8 stars • 800 reviews • 40,000+ trimmers upgraded"

const HERO_POINTS = [
  { icon: "🧍", text: "Extends the grip out to your hand so you stand upright, no bend" },
  { icon: "🔧", text: "Three minutes with the allen key. Fits 26 and 28mm, gas or battery" },
  { icon: "🛡️", text: "60-day trial on your own yard. Lifetime warranty on the hardware" },
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

const IMAGES = {
  logo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=240",
  trimmingGif: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
  brandRack: "/bhwt-brand-rack.webp",
  flatlay: "/bhwt-flatlay.webp",
  buildDetail: "/emb-built-to-stay.webp",
}

// ⭐ THE BUY BOX IMAGE IS MAPPED TO THE SELECTED VARIANT, not fixed. Pick the
// three-pack and you see three handles; pick White and the handle is white.
// A picker that says "Buy 2, Get 1 Free" above a photograph of ONE handle is
// quietly arguing against its own upsell, which is the tier this page most
// wants him on.
//
// The store already owns three of the four cells and they are the same
// flat-lay composition shot three ways, so the swap reads as one object
// changing rather than four unrelated photographs.
//
// The store owned three of the four cells. The fourth, three WHITE handles, did
// not exist anywhere in Shopify Files and was generated 2026-08-29 to match:
// gpt_image_2, 1:1, 1k/medium, TWO references, the silver three-pack for
// COMPOSITION and the white single for COLOUR AND HARDWARE (its clamp is black,
// the silver one's is bare alloy, so a colour-only prompt would have got the
// clamp wrong). Live as `yeoman-3pack-white-flatlay.png`.
//
// The `packImage` fallback is kept anyway. If a cell ever goes missing it
// resolves to the same COLOUR at a different count, never the same count in the
// wrong colour: colour is the attribute he just clicked, so a silver photo after
// he picks White is the more jarring miss. The caption reads off `shows`, so it
// describes the photograph and cannot claim three over a picture of one.
const SHOPIFY_CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
// `shows` is how many handles are IN THE PHOTOGRAPH, which is not always how
// many are in the pack. The caption is derived from it rather than from the
// tier, so a fallback can never caption "3 handles" over a picture of one.
const PACK_IMAGES: Record<string, Partial<Record<Color, { src: string; alt: string; shows: number }>>> = {
  single: {
    Silver: {
      src: `${SHOPIFY_CDN}/productimage.png?v=1778558991&width=900`,
      alt: "One silver Yeoman Handle laid on a concrete path beside worn leather gloves, secateurs and a pot of basil",
      shows: 1,
    },
    White: {
      src: `${SHOPIFY_CDN}/white_potted_flat_lay.png?v=1778560029&width=900`,
      alt: "One white Yeoman Handle laid on a concrete path beside worn leather gloves, secateurs and a pot of basil",
      shows: 1,
    },
  },
  bogo: {
    Silver: {
      src: `${SHOPIFY_CDN}/hf_20260622_220908_74d442b0-c853-4884-b264-f6a17d824157.png?v=1782166765&width=900`,
      alt: "Three silver Yeoman Handles laid side by side on a concrete path beside worn leather gloves and secateurs",
      shows: 3,
    },
    White: {
      src: `${SHOPIFY_CDN}/yeoman-3pack-white-flatlay.png?v=1788044200&width=900`,
      alt: "Three white Yeoman Handles laid side by side on a concrete path beside worn leather gloves and secateurs",
      shows: 3,
    },
  },
}

function packImage(pack: Pack, color: Color) {
  return (
    PACK_IMAGES[pack.key]?.[color] ??
    PACK_IMAGES.single[color] ??
    PACK_IMAGES.single.Silver!
  )
}

const CLIPS = [
  { poster: "/twb-poster1.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/1966caf46d5a417885bf9fc6106ba477/1966caf46d5a417885bf9fc6106ba477.HD-1080p-4.8Mbps-83902302.mp4?v=0", alt: "A customer using a string trimmer fitted with the Yeoman Handle" },
  { poster: "/twb-poster2.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/70fb239499c4492dba1212ba56855684/70fb239499c4492dba1212ba56855684.HD-1080p-2.5Mbps-83902306.mp4?v=0", alt: "A customer standing upright while trimming with the Yeoman Handle fitted" },
  { poster: "/twb-poster3.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/dbdac73c19ad4877bf61135ac7dd70fe/dbdac73c19ad4877bf61135ac7dd70fe.HD-1080p-4.8Mbps-83902300.mp4?v=0", alt: "Close view of the Yeoman Handle clamped to a trimmer shaft in use" },
  { poster: "/twb-poster4.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/e5d5501b962642339683e5d3f68853cd/e5d5501b962642339683e5d3f68853cd.HD-1080p-3.3Mbps-83902297.mp4?v=0", alt: "An older customer working a fence line with the Yeoman Handle fitted" },
  { poster: "/twb-poster5.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/f0f18bb534b4427dad4f3a2f4419a301/f0f18bb534b4427dad4f3a2f4419a301.HD-1080p-4.8Mbps-83902299.mp4?v=0", alt: "A customer demonstrating the raised grip position on his own trimmer" },
]

// Verbatim from the Customer Voice Bank, carried over from the parent page.
// Chosen for RANGE: ages 46 to 80, heights to 6'7, spinal surgeries, a grounds
// crew, a declared skeptic. Nothing in common but the part.
const REVIEWS = [
  {
    chip: "Age 72",
    tag: "Age 72",
    quote:
      "I am 72 years old, using my big still weed eater hurt my back after about 20 minutes. I just finished about 1 hr. And my back is just fine! Wish I would have bought this years ago.",
  },
  {
    chip: "6 ft 4, back surgery",
    tag: "6'4, back surgery in 2005",
    quote:
      "This thing is a lifesaver. 6'4 and this thing kept me from bending over. Major back surgery in 2005 and first time I could weed eat with no pain. Easy to install. Took 3 minutes.",
  },
  {
    chip: "Age 46",
    tag: "Age 46",
    quote:
      "6 hours of string trimming this week, crippled me for days. At 46 it's not going to get easier. Solve a problem you get my money.",
  },
  {
    chip: "Works a grounds crew",
    tag: "Grounds crew, large property",
    quote:
      "Should have bought this a long time ago. Definitely makes weed eating a breeze. No more slouching and hurting my back. I use this all the time on a grounds crew on a large scale property.",
  },
  {
    chip: "Started out skeptical",
    tag: "Started out skeptical",
    quote:
      "I was skeptical that anything could make weedeating easier. I was wrong. I was able to weedeat my entire yard including around my pond, (2 hrs of weedeating) and my back did not get tight or hurt. I usually do half one day then half another.",
  },
  {
    chip: "6 ft 7",
    tag: "6'7",
    quote:
      "I am 6'7 and this has saved my back. Ever since they quit making extended shaft weed eaters. I've suffered from intense back pain. But this simple device is awesome.",
  },
  {
    chip: "Multiple back surgeries",
    tag: "Multiple back surgeries",
    quote:
      "I've had multiple back surgeries this part. such a backsaver. Don't dread doing the weed eating now.",
  },
  {
    chip: "Age 65",
    tag: "Age 65, edging weekly",
    quote:
      "Why did I wait to order this? I have 3-4 hours of mowing and edging every week. Edging at 65 was a painful experience, being bent over for an hour. Not anymore!",
  },
]

type Row = { label: string; yeoman: string; cheap: string }
const ROWS: Row[] = [
  { label: "The clamp", yeoman: "Machined, grips two opposite faces", cheap: "Stamped steel, grips one" },
  { label: "After a season of vibration", yeoman: "Holds where you set it", cheap: "Creeps down the shaft mid-job" },
  { label: "The arm", yeoman: "Aluminum alloy, no flex", cheap: "Thin tube" },
  { label: "If it ever fails", yeoman: "Lifetime warranty, replaced", cheap: "You buy another one" },
]

// Two questions, not three. The parent's third ("my back is worse than his")
// is the heavy-convincing one and came out. These two survive because they are
// the objections an OFFER page actually creates: does it fit mine, and can I
// find it cheaper somewhere else.
const QUESTIONS = [
  {
    q: "Will it fit mine?",
    a: "Almost certainly. It fits 26mm and 28mm shafts, which is what STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER put on their straight and curved-shaft machines, gas and battery alike. Measure your shaft once if you want to be sure. If you own two trimmers it comes off one and onto the other in about a minute.",
  },
  {
    q: "I have seen cheaper ones. Are they the same thing?",
    a: "No, and the difference is the clamp rather than the bar. If you do find one cheaper, look at how it grips the shaft. A single stamped face holds for a few weekends and then the vibration finds it and it creeps down mid-job. That is the part you are paying for, along with the lifetime warranty behind it.",
  },
]

function money(n: number) {
  return n % 1 === 0 ? `$${n}` : `$${n.toFixed(2)}`
}

function pct(price: number, compareAt: number) {
  return Math.round(((compareAt - price) / compareAt) * 100)
}

function checkoutUrl(pack: Pack, color: Color) {
  // Verified on the live store 2026-08-29: the bare /cart/<id>:1 permalink
  // edge-redirects straight to checkout here, so ?checkout is not needed.
  return `https://fieldandharvestco.com/cart/${pack.ids[color]}:1`
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

// Every in-page CTA scrolls to the buy box. The checkout permalink is the only
// outbound link on the page, which is the whole reason this route exists.
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
        Five Of Them, Filming Their Own Yards
      </h2>
      <p className="mt-2 text-center text-sm text-[#B8AA98]">Their own trimmers. Nothing staged.</p>
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

export default function EndOfSummerSale() {
  const wallRef = useRef<HTMLElement | null>(null)
  const buyRef = useRef<HTMLElement | null>(null)
  const [pastWall, setPastWall] = useState(false)
  const [buyVisible, setBuyVisible] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [packIdx, setPackIdx] = useState(0)
  const [color, setColor] = useState<Color>("Silver")

  const pack = PACKS[packIdx]
  const savings = pack.compareAt - pack.price
  const savingsPct = pct(pack.price, pack.compareAt)
  const perHandle = pack.price / pack.handles
  const art = packImage(pack, color)

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

  function fireAddToCart() {
    try {
      const w = window as unknown as { fbq?: (...a: unknown[]) => void; clarity?: (...a: unknown[]) => void }
      w.fbq?.("track", "AddToCart", {
        content_ids: [pack.ids[color]],
        content_type: "product",
        content_name: `The Yeoman Handle — ${pack.label} / ${color}`,
        contents: [{ id: pack.ids[color], quantity: 1, item_price: pack.price }],
        value: pack.price,
        currency: "USD",
      })
      w.clarity?.("set", `${LANDER_TAG}_checkout`, pack.key)
      w.clarity?.("upgrade", `${LANDER_TAG}-checkout-click`)
    } catch {
      // Never let analytics block checkout.
    }
  }

  const showSticky = pastWall && !buyVisible

  return (
    <div style={PAGE_THEME} className="min-h-screen bg-background text-foreground">
      {/* SEASONAL TOUCHPOINT 1 — the banner. */}
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
            {/* SEASONAL TOUCHPOINT 2 — eyebrow carries the sale name and date. */}
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

            {/* SEASONAL TOUCHPOINT 3 — the price line, above the fold, because
                this traffic arrives off a static that already showed it. */}
            <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 lg:justify-start">
              <span className="text-3xl font-bold text-foreground">{money(PACKS[0].price)}</span>
              <span className="text-lg text-muted-foreground line-through">{money(PACKS[0].compareAt)}</span>
              <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-primary">
                Save {pct(PACKS[0].price, PACKS[0].compareAt)}%
              </span>
            </div>

            <JumpCta className="pt-1" note={`60-day trial · Lifetime warranty · Sale ends ${SEASON.endsLong}`} />
          </div>

          <div className="lg:order-2">
            <img
              src={IMAGES.trimmingGif}
              alt="A man trimming the edge of a mulch bed standing fully upright, hand out on the Yeoman grip"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lg lg:aspect-square"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-5xl gap-4 px-5 py-6 sm:grid-cols-3 sm:gap-6">
          {HERO_POINTS.map((p) => (
            <div key={p.text} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card text-base">
                {p.icon}
              </span>
              <span className="pt-1 text-sm leading-snug text-foreground">{p.text}</span>
            </div>
          ))}
        </div>
      </section>

      <main>
        <article className="mx-auto max-w-3xl px-5 pt-10">
          <VideoWall innerRef={wallRef} />

          {/* SEASONAL TOUCHPOINT 4 — the timing argument, stated once, as a
              reason rather than a countdown. Nothing here expires except the
              price, and the price genuinely does. */}
          <section className="mt-8 rounded-lg border-2 border-primary bg-primary/5 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Why now</p>
            <p className="mt-2 text-base leading-relaxed text-foreground sm:text-lg">
              {SEASON.jobLine} Fit it this weekend and it takes the bend out of every trim left in the season, then it
              is sitting on the shaft ready for spring. The sale price runs until {SEASON.endsClause}.
            </p>
            <JumpCta className="mt-5" />
            <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>
          </section>

          <section className="mt-14">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Eight Of The 40,000
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              All verified buyers, picked because they have nothing in common with each other.
            </p>

            <div className="mt-6 rounded-lg border border-border bg-muted p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">The eight men quoted below</p>
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
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Nothing in common except the handle.</p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {(showAllReviews ? REVIEWS : REVIEWS.slice(0, 4)).map((r) => (
                <blockquote key={r.tag} className="flex flex-col border-l-4 border-primary bg-muted p-4">
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
                      src={IMAGES.brandRack}
                      alt="Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft"
                      loading="lazy"
                      decoding="async"
                      className="mt-5 aspect-[3/2] w-full rounded-sm object-cover"
                    />
                  ) : null}

                  {i === 1 ? (
                    <>
                      <img
                        src={IMAGES.buildDetail}
                        alt="Close view of the machined Yeoman clamp block against a stamped-steel alternative"
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
                                The Yeoman
                              </th>
                              <th className="p-3 text-xs font-bold uppercase tracking-wide">A cheap bolt-on</th>
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
                                    <span>{r.cheap}</span>
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
              THE BUY BOX. This is what makes the route different from the
              rest of the fleet: the sale closes here rather than on the PDP.
              ============================================================ */}
          <section ref={buyRef} id="buy" className="mt-14 scroll-mt-4">
            <div className="overflow-hidden rounded-lg border-2 border-foreground">
              {/* SEASONAL TOUCHPOINT 5 — the buy box wears the sale. */}
              <div className="bg-foreground px-5 py-3 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-background sm:text-sm">
                  <span className="text-primary">{SEASON.bannerHeadline}</span> · {SEASON.endsShort}
                </p>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="bg-muted md:w-2/5 md:shrink-0">
                  <img
                    key={art.src}
                    src={art.src}
                    alt={art.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                  <p className="px-4 pb-3 pt-2 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {art.shows === 1 ? "1 handle" : `${art.shows} handles`} &middot; {color}
                  </p>
                </div>
                <div className="flex flex-col justify-center p-5 md:w-3/5 md:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Field &amp; Harvest Co.</p>
                  <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                    The Yeoman Handle&trade;
                  </h2>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <Stars />
                    <span className="text-sm text-muted-foreground">4.8 from 800 reviews</span>
                  </div>

                  {/* Pack picker */}
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Choose your pack</p>
                    <div className="mt-3 flex flex-col gap-2.5">
                      {PACKS.map((p, i) => {
                        const selected = i === packIdx
                        return (
                          <button
                            key={p.key}
                            type="button"
                            onClick={() => setPackIdx(i)}
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
                                <span className="block text-base font-bold leading-tight text-foreground">{p.label}</span>
                                <span className="mt-0.5 block truncate text-xs font-semibold text-primary">
                                  {p.badge ? `${p.badge} · ` : ""}
                                  {p.sublabel}
                                </span>
                              </span>
                            </span>
                            <span className="shrink-0 text-right">
                              <span className="block text-base font-bold leading-none text-foreground">
                                {money(p.price)}
                              </span>
                              <span className="mt-1 block text-xs leading-none text-muted-foreground line-through">
                                {money(p.compareAt)}
                              </span>
                              <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-primary">
                                Save {pct(p.price, p.compareAt)}%
                              </span>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Colour picker */}
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Colour <span className="font-semibold normal-case tracking-normal text-foreground">· {color}</span>
                    </p>
                    <div className="mt-2.5 flex gap-2.5">
                      {COLORS.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setColor(c)}
                          aria-pressed={color === c}
                          className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-bold transition-all ${
                            color === c
                              ? "border-primary bg-primary/5 text-foreground"
                              : "border-border bg-background text-muted-foreground hover:border-foreground/30"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Free gifts, display only, exactly as the PDP states them */}
                  <div className="mt-5 rounded-lg border border-border bg-muted p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-foreground">
                        2 Free Yardwork Guides
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        With every order
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
                      <p className="text-sm font-medium text-muted-foreground">
                        {pack.handles === 1 ? "1 handle" : `${pack.handles} handles`}
                      </p>
                      <p className="text-right">
                        <span className="mr-2 text-sm text-muted-foreground line-through">{money(pack.compareAt)}</span>
                        <span className="text-2xl font-bold text-foreground">{money(pack.price)}</span>
                      </p>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        {pack.handles > 1 ? `${money(Number(perHandle.toFixed(2)))} a handle` : "You save"}
                      </p>
                      <p className="text-sm font-bold text-primary">
                        {money(Number(savings.toFixed(2)))} off ({savingsPct}%)
                      </p>
                    </div>
                  </div>

                  <a
                    href={checkoutUrl(pack, color)}
                    onClick={fireAddToCart}
                    className="mt-5 block rounded-md bg-primary px-6 py-5 text-center text-lg font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
                  >
                    Checkout &middot; {money(pack.price)}
                  </a>

                  <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
                    {SHIPPING_NOTE} Sale price applied at checkout.
                  </p>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> 60-day trial
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Lifetime warranty
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Fits every major brand
                    </span>
                  </div>
                </div>
              </div>

              {/* SEASONAL TOUCHPOINT 6 — the footer of the buy box. */}
              <p className="border-t-2 border-foreground bg-foreground px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-background">
                {SEASON.name} price holds until {SEASON.endsLong}
              </p>
            </div>
          </section>

          <section className="mt-12">
            <div className="border-4 border-foreground p-5 sm:p-7">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">60 Days On Your Own Yard</h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  You have watched five people tell you it worked and read eight more. That is still other people. Bolt
                  it on, work a full Saturday the way you normally would, and find out on your own back.
                </p>
                {/* SEASONAL TOUCHPOINT 7 — the trial outlives the sale, which
                    is the honest way to run a deadline. */}
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  If it cannot tell the difference within 60 days we refund you in full and you do not have to send it
                  back. The sale price ends {SEASON.endsClause}. Your 60 days start the day it arrives and run well past
                  it, so the deadline is on the price and never on the decision.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Everything Else
            </h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              {/* SEASONAL TOUCHPOINT 8 — the sale gets its own FAQ, because on
                  an offer page it is the first thing a careful buyer checks. */}
              <AccordionItem value="sale">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  How long does the {SEASON.name} run?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Until {SEASON.endsLong}, which is the last day of summer. The sale price is the price on this page, so
                  there is no code to type in and nothing to remember at checkout. After that the handle goes back to
                  its regular price of {money(39.99)} for a single and {money(79.99)} for the three-pack.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="install">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  How long does it really take to fit?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Three minutes with the allen key that comes in the box. The bracket clamps around the shaft and slides
                  to wherever your hand naturally falls, then tightens down. No drilling, no cutting, no permanent change
                  to the trimmer, and the factory handle stays where it is.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="height">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  I am shorter or taller than average. Does it still set right?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  It slides up and down the shaft and locks wherever you set it, which is the whole point. The buyers
                  above run from around five foot six to six foot seven on the same part. If two people in the house use
                  the trimmer, loosen the bolt and slide it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  What does shipping cost and when will it get here?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {SHIPPING_NOTE} Orders leave the warehouse the next working day. If you want it on the trimmer for the
                  last stretch of the season, order early in the week rather than late.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <JumpCta className="mt-10" note={`${SEASON.name} · Ends ${SEASON.endsLong}`} />
          </section>

          <section className="mt-12 pb-4">
            <img
              src={IMAGES.flatlay}
              alt="The Yeoman Handle laid on a concrete path beside worn leather gloves and secateurs"
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full rounded-sm object-cover"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>
          </section>
        </article>
      </main>

      {/* Sticky bar carries the price, which is what makes the page read as
          somewhere you can buy rather than somewhere you can read. It scrolls
          to the buy box rather than jumping to checkout, so the buyer always
          picks his own pack. */}
      <div
        aria-hidden={!showSticky}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] backdrop-blur transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="flex items-baseline gap-2 text-sm font-bold leading-tight text-foreground">
              <span className="whitespace-nowrap">{money(pack.price)}</span>
              <span className="whitespace-nowrap text-xs font-normal text-muted-foreground line-through">
                {money(pack.compareAt)}
              </span>
            </p>
            <p className="truncate text-[11px] leading-tight text-muted-foreground">
              {SEASON.name} · {SEASON.endsShort}
            </p>
          </div>
          <a
            href="#buy"
            tabIndex={showSticky ? 0 : -1}
            className="shrink-0 rounded-md bg-primary px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:text-base"
          >
            Get It &middot; {money(pack.price)}
          </a>
        </div>
      </div>

      <footer className="border-t border-border pb-28 pt-8 sm:pb-8">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            &copy; 2026 Field &amp; Harvest Co. {SEASON.name} pricing ends {SEASON.endsLong}. Individual results vary.
            Reviews are from verified buyers. STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER are named for
            compatibility only and are not affiliated with Field &amp; Harvest Co. This page is advertising and is not
            medical advice; talk to your doctor about persistent back pain.
          </p>
        </div>
      </footer>
    </div>
  )
}
