"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Flame,
  Clock,
  ShieldCheck,
  Battery,
  Truck,
  Snowflake,
  Smartphone,
  Wrench,
  Thermometer,
  Gift,
  Hand,
  ArrowRight,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { trackCtaClick } from "@/lib/tracking"

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const img = (file: string, width = 800) => `${CDN}/${file}?width=${width}`
const LOGO = `${CDN}/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=240`

type IconName = "Flame" | "Clock" | "ShieldCheck" | "Battery" | "Truck" | "Snowflake" | "Smartphone" | "Wrench" | "Thermometer" | "Gift" | "Hand" | "ArrowRight"

type Reason = {
  badge: string
  title: string
  image: string
  alt: string
  /** real UGC loop in public/gift-clips/<clip>.mp4 (+ .webp poster); replaces the still */
  clip?: string
  body: string
  highlight: string
  /** verbatim review from the PDP, never paraphrased */
  quote?: { text: string; who: string }
  cta?: string
}

// ============================================================
// /plow-holiday-gift : THE YEOMAN PLOW, HOLIDAY GIFT LISTICLE (product aware)
// Built 2026-11-21 on Funnels/templates/listicle-1 (owner: general gifting listicle, top reasons
// from the ads + research; owner 2026-11-22: FIVE reasons, the sale + warranty + money back folded into
// reason 5; no prices outside the product card; every image whole, none repeated).
//
// Reasons from what is spending (SemCom-Data/ad-daily, read 2026-11-21) + the research corpus:
//   1 push_not_lift (the top UGC spender 7588581546181889311: "literally just push the snow")
//   2 half the time (owner-supplied line) + the 36 in pass    3 7-angle blade + 5-position handle
//   4 nothing to fuel, charge or start (skip_the_snowblower)
//   Gift frame = ANG_bf_gift_asks_nothing; its F023 ad was the #2 authored Plow spender
//   ("the one thing he'd never buy himself").
//
// OFFER, read live off /products/the-yeoman-plow.json on 2026-11-21:
//   Black 68270519975979  $197.00 / $310.00  save $113 (default, 36 in carbon steel)
//   Red   68013794164779  sold out. Every link goes to the BLACK variant.
// ⛔ Paved surfaces only. No medical claims. No snow-depth number. Never name the supplier.
// Reviews are verbatim from the PDP (written about the 38 in unit, as on the PDP), each used once.
// ============================================================

const C = {
  tag: "phg",
  pdpUrl: "https://fieldandharvestco.com/products/the-yeoman-plow?variant=68270519975979&lp=phg",
  // price lives on the PDP only (template product card has no price row)
  offer: { price: 197, compareAt: 310, save: 113 },
  banner: { hi: "Early Access Black Friday", text: "$113 Off + Free 1 Year Warranty" },
  hero: {
    src: img("plow36-driveway.jpg", 1000),
    alt: "An older man pushing the black Yeoman Plow down a snowy driveway in front of his garage",
  },
  saleBadge: "Save $113 + Free 1 Year Warranty",
  h1: { a: "5 Reasons The Yeoman Plow Is The", hi1: "Perfect Gift", b: "For The Man Who Still", hi2: "Shovels His Own Driveway" },
  intro:
    "He'd never buy it for himself. He'll be out there at six in the morning with the same old shovel, lifting the whole driveway one scoop at a time. Here are five reasons this is the gift that changes every snowy morning he has left this winter.",
  heroCta: "Give Him The Plow, $113 Off",
  trustLine: "Free 1 year warranty · 30 days to decide · Free US shipping",
  reasons: [
    {
      badge: "BACK-SAVING",
      title: "Give his back a winter off from lifting snow",
      image: img("plow36-demo-pushnotlift.jpg"),
      alt: "Push, not lift: the Plow's wheels carry the load while a standard shovel makes you lift every scoop",
      body: "A shovel makes him lift and throw every scoop, the whole length of the drive, storm after storm. The Plow rolls on two wheels and pushes the snow aside, so the wheels carry the load and he walks it down the driveway instead of lifting it.",
      highlight: "Push, not lift, every storm this winter.",
      quote: {
        text: "I have 300' of paved driveway... My back was destroyed long before I finished with a regular shovel, but this pusher worked great... My back is happy I bought this.",
        who: "Charles Enfield, 300 ft paved driveway",
      },
    },
    {
      badge: "TIME-SAVING",
      title: "Get him back inside with his coffee in half the time",
      image: img("plow36-hero.jpg"),
      clip: "phg-driveway-pass",
      alt: "From above: one full-width pass up a snowy driveway, bare pavement left behind",
      body: "The 36-inch blade clears a full-width path on every pass, and he never stops to lift a load and dump it. Down the drive, back up, done. Snow that used to eat the whole morning gets cleared in half the time.",
      highlight: "He's back inside before the coffee gets cold.",
      quote: {
        text: "I was able to clear half the neighborhood's driveways, sidewalks, and stoops with this in the time it normally takes me to do only ours with a regular snow shovel.",
        who: "Mark Hawkins",
      },
    },
    {
      badge: "ANGLE-ADJUST",
      title: "Let him send the snow wherever he wants it, without turning around",
      image: img("plow36-angle-infographic.jpg"),
      alt: "The Plow's 7-angle rotatable blade, seen from behind the handle",
      body: "The blade turns to any of 7 angles, so the snow rolls off to whichever side he picks as he walks. The handle locks into 5 positions at the height that fits him. Driveway, sidewalk, the walk to the mailbox: one pass and the snow is off to the side.",
      highlight: "No more scoop, turn, throw, repeat.",
      quote: {
        text: "Living Northern Alberta, I used this thing 20+ times this year and it's awesome. I clean my driveway in 10-15 minutes and my driveway is not small.",
        who: "Ryan, Northern Alberta",
      },
    },
    {
      badge: "NOTHING TO START",
      title: "Give him a tool that's ready every storm, no gas and no charging",
      image: img("plow36-blade-concrete.jpg"),
      alt: "The Plow's black carbon-steel blade pushing a ridge of snow off a concrete driveway",
      body: "Snowblowers need gas, oil and a pull cord that won't catch on the coldest morning. Battery shovels need a charge. The Plow is a carbon-steel blade on rubber wheels with nothing to start, so it's ready the minute the snow stops, and quiet enough for six in the morning.",
      highlight: "He grabs it off the garage wall and goes.",
    },
    {
      badge: "EARLY ACCESS BLACK FRIDAY",
      title: "Get it now with $113 off and a full year of cover",
      image: img("plow36-guarantee.jpg"),
      alt: "The Yeoman Plow with its 30 day money back guarantee seal",
      body: "The Early Access Black Friday Sale is live right now, with $113 off for a limited time. A gift should be a sure thing: the free 1 year warranty covers it for a full year from the day it arrives, and he gets 30 days to try it with a full refund either way. Shipping is free from our US warehouse, so it isn't crossing an ocean in December.",
      highlight: "Wrap it early and his next storm is his last with a shovel.",
    },
  ] as Reason[],
  product: {
    badge: "Free 1 Year Warranty + 30-Day Money Back",
    headline: "The Gift That Retires His Snow Shovel",
    desc: "The Yeoman Plow: a 36-inch carbon-steel blade on wheels, 7 blade angles and a handle that locks at his height. Early Access Black Friday pricing is live now.",
    offerBanner: "Early Access Black Friday: $113 Off",
    thumbs: [
      { src: img("plow36-studio.jpg"), alt: "The Yeoman Plow, 36-inch black" },
      { src: img("plow36-hero.jpg"), alt: "The Plow on a cleared driveway" },
      { src: img("plow36-sidewalk.jpg"), alt: "Clearing a sidewalk in one pass" },
      { src: img("plow36-flatlay.jpg"), alt: "Everything in the box" },
      { src: img("plow36-assembly.jpg"), alt: "Putting the Plow together in the garage" },
    ],
    benefits: [
      { icon: "Snowflake", text: "Pushes the snow, never lifts it" },
      { icon: "ArrowRight", text: "36-inch blade, 7 angles" },
      { icon: "Wrench", text: "Carbon-steel blade, rubber wheels" },
      { icon: "Truck", text: "Free shipping from the USA" },
    ] as { icon: IconName; text: string }[],
  },
  reviews: {
    headline: "What Buyers Are Saying",
    sub: "In their own words, from the Plow product page.",
    stars: false,
    items: [
      { title: "Works great!", body: "This is so much easier than using a regular pusher shovel without wheels... I wish I had purchased one of these years ago.", who: "Larry" },
      { title: "An amazing innovation in snow removal tools", body: "No more back pains from using regular plows. Less time to clear snow from a more effective & efficient operative execution of the push plow and a wider blade provides for less passes.", who: "Gcerant1" },
      { title: "Awesome. Good value.", body: "Awesome product. So much easier than shoveling. Easy to assemble.", who: "Rhonda B" },
    ],
  },
  faqSub: "Everything you need to know before you wrap it.",
  faq: [
    {
      q: "Will it work on his driveway?",
      a: "It's built for paved surfaces: concrete and asphalt driveways, sidewalks, walkways and smooth pavers. It moves light fluff, wet heavy snow and slush.",
    },
    {
      q: "Is it hard to push?",
      a: "The wheels carry the weight, so he guides the blade instead of lifting it. Set the blade angle for the job and the snow rolls off to the side as he walks.",
    },
    {
      q: "Will it fit him?",
      a: "The handle locks into 5 positions, so it sets to the height that fits him, and the blade turns to 7 angles.",
    },
    {
      q: "Does it need assembly?",
      a: "It bolts together in about 20 to 30 minutes with the tools in the box, quicker with two people.",
    },
    {
      q: "What if it isn't right for him?",
      a: "He gets 30 days to try it with a full refund either way, and the free 1 year warranty covers it for a full year.",
    },
    {
      q: "How long is the sale on?",
      a: "The Early Access Black Friday Sale is live now for a limited time, with $113 off and free shipping from the USA.",
    },
  ],
  sticky: {
    cta: "Get $113 Off His Gift",
    line: "Early Access Black Friday · Free 1 Year Warranty · Free US Shipping",
  },
}

// ============================================================
// PAGE BODY: listicle-1 shape (banner, logo, hero + CTA, 5 reason cards, product card,
// reviews, FAQ, always-on sticky CTA). Everything above this line is copy and config;
// nothing below it is product-specific. Self-contained on purpose: no shared lib beyond
// shadcn ui and lib/tracking.
// ============================================================

const ICONS = { Flame, Clock, ShieldCheck, Battery, Truck, Snowflake, Smartphone, Wrench, Thermometer, Gift, Hand, ArrowRight }

// Muted real-footage loop (the /holiday-gift-grange pattern): webp poster in the HTML, the mp4 only
// gets a src once it nears the viewport, plays while visible, pauses off screen. VideoPlay fires once
// per clip to Pixel + Clarity. Reduced motion: poster only.
const played = new Set<string>()
function LoopClip({ id, alt }: { id: string; alt: string }) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") {
      setArmed(true)
      return
    }
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setArmed(true)
          el.play?.()
            .then(() => {
              if (played.has(id)) return
              played.add(id)
              try {
                const w = window as unknown as { fbq?: (...a: unknown[]) => void; clarity?: (...a: unknown[]) => void }
                w.fbq?.("trackCustom", "VideoPlay", { page: C.tag, clip: id })
                w.clarity?.("set", "video_play", `${C.tag}-${id}`)
              } catch {
                // Never let analytics break playback.
              }
            })
            .catch(() => {})
        } else {
          el.pause?.()
        }
      },
      { threshold: 0, rootMargin: "200px 0px" },
    )
    o.observe(el)
    return () => o.disconnect()
  }, [id])
  return (
    <video
      ref={ref}
      src={armed ? `/gift-clips/${id}.mp4` : undefined}
      poster={`/gift-clips/${id}.webp`}
      muted
      loop
      playsInline
      autoPlay={armed}
      preload="none"
      aria-label={alt}
      className="block w-full aspect-square object-cover"
    />
  )
}

// The PDP promo bar, copied from /holiday-gift-grange, which is identical to the live PDP bar
// (fhb-promo on every sale PDP): EARLY ACCESS BLACK FRIDAY SALE | <offer> + clock to local midnight.
// Text = the PDP's own line for this product (C.banner.text), upper-cased as the PDP prints it.
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
            {C.banner.text.toUpperCase()}
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

function Stars({ size = "w-4 h-4" }: { size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${size} fill-[#FDB913] text-[#FDB913]`} />
      ))}
    </div>
  )
}

export default function GiftListiclePage() {
  const [mainImg, setMainImg] = useState(0)

  const cta = (location: string, label: string) => ({
    href: C.pdpUrl,
    onClick: () => trackCtaClick(`${C.tag}-${location}`, label),
  })

  return (
    <div className="min-h-screen bg-background">
      {/* PROMO BAR: the PDP's own sale bar */}
      <PromoBar />

      {/* HEADER */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <img src={LOGO} alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" />
      </header>

      {/* HERO */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-muted">
          <img src={C.hero.src} alt={C.hero.alt} className="w-full h-full object-cover" fetchPriority="high" />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground">{C.saleBadge}</span>
        </div>

        <div className="mt-5 text-center">
          <h1 className="text-[32px] md:text-[42px] font-bold text-foreground leading-tight text-balance tracking-tight">
            {C.h1.a} <span className="text-[#C86F4C]">{C.h1.hi1}</span> {C.h1.b}{" "}
            <span className="text-[#C86F4C]">{C.h1.hi2}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            {C.intro}
          </p>
        </div>

        <a {...cta("hero", C.heroCta)}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            {C.heroCta}
          </Button>
        </a>

        <p className="mt-4 text-center text-sm text-foreground font-medium">{C.trustLine}</p>
      </section>

      {/* REASONS */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">
        {C.reasons.map((r, i) => (
          <div key={r.badge} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
                {r.badge}
              </Badge>
              <span className="text-xs font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">{r.title}</h3>

            {/* Every image renders whole at its own shape (square on these pages). Never crop. */}
            <div className="relative w-full rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
              {r.clip ? (
                <LoopClip id={r.clip} alt={r.alt} />
              ) : (
                <img src={r.image} alt={r.alt} className="block w-full h-auto" loading="lazy" decoding="async" />
              )}
            </div>

            <p className="text-foreground/80 text-pretty leading-relaxed text-base">
              {r.body} <span className="font-bold text-foreground">{r.highlight}</span>
            </p>

            {r.quote && (
              <blockquote className="mt-5 border-l-4 border-[#DDA15E] bg-[#F4EFE3] rounded-r-lg px-4 py-3">
                <p className="text-sm italic text-foreground/85 leading-relaxed">&ldquo;{r.quote.text}&rdquo;</p>
                <p className="mt-1.5 text-xs font-bold text-foreground">{r.quote.who}</p>
              </blockquote>
            )}

          </div>
        ))}
      </section>

      {/* PRODUCT SECTION */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            {C.product.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">{C.product.headline}</h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">{C.product.desc}</p>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide uppercase">{C.product.offerBanner}</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white mb-4">
              <img src={C.product.thumbs[mainImg].src} alt={C.product.thumbs[mainImg].alt} className="w-full h-full object-contain" loading="lazy" />
            </div>

            <div className="grid gap-1.5 mb-5" style={{ gridTemplateColumns: `repeat(${C.product.thumbs.length}, minmax(0, 1fr))` }}>
              {C.product.thumbs.map((t, i) => (
                <button
                  key={t.src}
                  type="button"
                  onClick={() => setMainImg(i)}
                  aria-label={`Show ${t.alt}`}
                  className={`relative aspect-square rounded-md border-2 bg-muted overflow-hidden transition-colors ${
                    i === mainImg ? "border-primary" : "border-border hover:border-primary"
                  }`}
                >
                  <img src={t.src.replace("width=800", "width=160")} alt={t.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {C.product.benefits.map(({ icon, text }) => {
                const Icon = ICONS[icon]
                return (
                  <div key={text} className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                    <Icon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#C86F4C]" />
                    <p className="text-xs text-foreground font-semibold leading-snug">{text}</p>
                  </div>
                )
              })}
            </div>

            <a {...cta("product-card", "See Full Product Details")}>
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

      {/* REVIEWS: verbatim from the PDP */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">{C.reviews.headline}</h2>
          <p className="text-sm text-muted-foreground">{C.reviews.sub}</p>
        </div>

        <div className="space-y-4">
          {C.reviews.items.map((r) => (
            <div key={r.body} className="bg-card border border-border rounded-lg p-5">
              {C.reviews.stars && (
                <div className="mb-2">
                  <Stars size="w-3.5 h-3.5" />
                </div>
              )}
              {r.title && <p className="text-sm font-bold text-foreground mb-2">&ldquo;{r.title}&rdquo;</p>}
              <p className="text-sm text-foreground/75 leading-relaxed mb-3">{r.body}</p>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">
                {r.who}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-40">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">Gift Questions</h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">{C.faqSub}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {C.faq.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i + 1}`} className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#4A3F35]/95 backdrop-blur-md border-t-2 border-[#4A3F35] py-4 px-4 z-50 shadow-2xl">
        <div className="max-w-lg mx-auto">
          <a {...cta("sticky", C.sticky.cta)}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg mb-2.5 shadow-lg transition-all hover:shadow-xl"
            >
              {C.sticky.cta}
            </Button>
          </a>
          <p className="text-center text-xs text-white/80 font-semibold">{C.sticky.line}</p>
        </div>
      </div>
    </div>
  )
}
