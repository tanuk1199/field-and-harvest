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
// /gable-holiday-gift : THE GABLE PRESSURE WASHER WAND, HOLIDAY GIFT LISTICLE (product aware, LP37)
// Built 2026-11-22 on Funnels/templates/listicle-1, same parts as the Bunkhouse / Plow / Ember Grip gift
// pages (owner 2026-11-22: FIVE reasons, sale + warranty + money back folded into reason 5; no price
// outside the product card; every image whole, none repeated; real UGC loops where they beat a still).
//
// Reasons from what is spending (SemCom-Data/ad-daily, read 2026-11-22: "Gable wand ad 4" UGC $61.6k,
// gutters_from_ground, ladder_quitter, keep_him_grounded) + brain/CANON.md:
//   1 off the ladder (keep_him_grounded, the buyer is often his wife)   2 gutters from the lawn
//   3 the whole house: siding, soffits, peaks   4 hooks to the washer he owns, screws together
//   5 Early Access Black Friday: $101 off + free 1 year warranty + 30 day money back
//
// OFFER, read live off /products/the-gable-pressure-washer-wand.json on 2026-11-22:
//   67994210271275  $149.00 / $250.00  save $101
// ⛔ REAL UNIT: screw-together stainless sections, brass couplers, foam grip with a 6-tip clip, 24 ft,
//    up to 4,000 PSI. Never: telescoping, harness, brush, trigger gun, "US shipping", a delivery date.
// Reviews verbatim from the live Gable PDP (real names), each used once.
// Clips: public/gift-clips/gbg-*.mp4, cut from reference/ugc-full-livo789-*.mp4 (clips.csv rows).
// ============================================================

const C = {
  tag: "gbg",
  pdpUrl: "https://fieldandharvestco.com/products/the-gable-pressure-washer-wand?variant=67994210271275&lp=gbg",
  // price lives on the PDP only (template product card has no price row)
  offer: { price: 149, compareAt: 250, save: 101 },
  banner: { hi: "Early Access Black Friday", text: "$101 Off + Free 1 Year Warranty" },
  hero: {
    src: img("gable-14-couple-on-the-lawn.png", 1000),
    // 3:2 loop, owner 2026-11-22: "use a clip of gutter being clean". livo789-7661946535512395022 21.8-23.7, crop y=240
    clip: "gbg-hero-gutter-flush",
    alt: "The curved gutter hook on The Gable wand blasts a dirty gutter clean along the trough",
  },
  saleBadge: "Save $101 + Free 1 Year Warranty",
  h1: { a: "5 Reasons The Gable Wand Is The", hi1: "Perfect Gift", b: "For The Man Who Still", hi2: "Climbs The Ladder" },
  intro:
    "Every fall he drags the ladder out, climbs two stories with a pressure washer in his hands and does the gutters himself, and you hold your breath until he's back down. Here are five reasons this is the gift that keeps both his feet on the grass for good.",
  heroCta: "Give Him The Gable, $101 Off",
  trustLine: "Free 1 year warranty · 30 days to decide · Free shipping",
  reasons: [
    {
      badge: "OFF THE LADDER",
      title: "Keep him on the grass and off the ladder for good",
      image: img("gable-07-inuse-gutter-from-ground.png"),
      clip: "gbg-lawn-two-story",
      alt: "From the patio, a man holds the wand up a two-story wall and leaves fly out of the gutter",
      body: "A pressure washer on a ladder means a kicking wand in both hands, two stories up, on wet rungs. The Gable moves the whole job down to the lawn. He stands on flat ground, both hands on the foam grip, and the spray does the climbing.",
      highlight: "The ladder stays on the garage wall.",
      quote: {
        text: "I use it to clean the gutters and it was very high cause I’m in a townhouse and my room is on top of the garage and it did a great job. A lot of dirt came down. My husband was not on a ladder and it was very safe to do.",
        who: "Taz",
      },
    },
    {
      badge: "GUTTERS",
      title: "Let him flush the second-story gutters out from the lawn",
      image: img("gable-18-info-gutter-hook.png"),
      clip: "gbg-gutter-hook-blast",
      alt: "Close up in the gutter: the curved hook blasts packed wet leaves out along the trough",
      body: "The curved gutter hook drops over the lip of the gutter and blasts the packed leaves and muck out along the trough. He walks the run from the grass and flushes it clean end to end, no ladder moves and no scooping by hand.",
      highlight: "The whole run, flushed out from the ground.",
      quote: {
        text: "it can extend to 24 feet and the pressure coming out the end is amazing, clean gutters from the ground without using a ladder. Would recommend it for anyone.",
        who: "john morris",
      },
    },
    {
      badge: "THE WHOLE HOUSE",
      title: "Let him wash the siding, soffits and peaks he hasn't reached in years",
      image: img("gable-09-siding-clean-line.png"),
      clip: "gbg-algae-off-siding",
      alt: "A man walks along white siding with the wand, washing the green algae off in a clean band",
      body: "The same wand reaches 24 feet, so the green on the north side, the soffits and the gable peaks are all in reach from the lawn. Six spray tips clip onto the grip: wide ones to rinse the siding, narrow ones for the stubborn spots.",
      highlight: "The whole house looks new again, top to bottom.",
      quote: {
        text: "Just finished washing the house using this extended wand. All I can say is why didn't I get this 20 years ago. So much safer than a ladder to reach the gables, and does a better job than just pointing the short wand at it and hoping for the best.",
        who: "Christopher J.",
      },
    },
    {
      badge: "FITS HIS WASHER",
      title: "Give him something that works with the pressure washer he already owns",
      image: img("gable-19-info-unlock-extend-lock.png"),
      alt: "Screw, tighten, wash: gloved hands join the stainless sections at a brass coupler",
      body: "The Gable hooks to the pressure washer already in his garage and is rated for washers up to 4,000 PSI. The stainless sections screw together at brass couplers until the tip reaches the spot. Screw, tighten, wash.",
      highlight: "Nothing new to learn. He's washing in minutes.",
      quote: {
        text: "This worked fantastic for my needs. Quick and easy to use, no leaks, easy to store. I'd buy again!",
        who: "A. Santa",
      },
    },
    {
      badge: "EARLY ACCESS BLACK FRIDAY",
      title: "Get it now with $101 off and a full year of cover",
      image: img("gable-01-hero-gable-badges.png"),
      alt: "The Gable wand at work on a gutter, with the No Ladder Needed seal and the Free 1 Year Warranty plaque",
      body: "The Early Access Black Friday Sale is live right now, with $101 off for a limited time. A gift should be a sure thing: the free 1 year warranty covers it for a full year, and he gets 30 days to wash the whole house with it and a full refund either way. Shipping is free.",
      highlight: "Wrap it now and his next gutter job happens from the lawn.",
    },
  ] as Reason[],
  product: {
    badge: "Free 1 Year Warranty + 30-Day Money Back",
    headline: "The Gift That Keeps Him Off The Ladder",
    desc: "The Gable Pressure Washer Wand: 24 feet of screw-together stainless with a curved gutter hook and 6 spray tips, for washers up to 4,000 PSI. Early Access Black Friday pricing is live now.",
    offerBanner: "Early Access Black Friday: $101 Off",
    thumbs: [
      { src: img("gable-15-inuse-dormer-peak.png"), alt: "Washing a dormer peak from the lawn" },
      { src: img("gable-17-info-every-high-spot.png"), alt: "Gutters, soffits, siding and peaks, all from the ground" },
      { src: img("gable-16-info-ladder-vs-ground.png"), alt: "The old way on a ladder against the Gable from the lawn" },
      { src: img("gable-24-studio-spray-tips-fan.png"), alt: "The 6 spray tips in the box" },
      { src: img("gable-31-studio-extension-wands.png"), alt: "The 3 bent extension wands, gutter hook included" },
    ],
    benefits: [
      { icon: "ShieldCheck", text: "Both feet on the ground" },
      { icon: "ArrowRight", text: "Reaches up to 24 feet" },
      { icon: "Wrench", text: "Fits washers up to 4,000 PSI" },
      { icon: "Truck", text: "Free shipping" },
    ] as { icon: IconName; text: string }[],
  },
  reviews: {
    headline: "What Buyers Are Saying",
    sub: "In their own words, from the Gable product page.",
    stars: false,
    items: [
      { title: "So Happy it Kept Me Off a Ladder", body: "Good high pressure at full extension. Kept my feet on the ground and off a ladder. I have no negatives to report back. Great product at a very good value.", who: "Theo" },
      { title: "Great product", body: "Purchased this product to power wash high peaks on my home and it worked great . Water pressure was perfect even when fully extended.", who: "Frank Garofalo" },
      { title: "It works!!", body: "Cleaned siding, soffit &fascia & gutters. It worked. No ladder involved.", who: "paula eperesi" },
    ],
  },
  faqSub: "Everything you need to know before you wrap it.",
  faq: [
    {
      q: "Will it fit his pressure washer?",
      a: "Most of them. The Gable is rated for pressure washers up to 4,000 PSI, and his hose screws into the quick-connect at the bottom of the wand.",
    },
    {
      q: "Can he control it at full length?",
      a: "Yes. Both hands on the foam grip, feet planted on flat ground and a wide tip to start. He extends it only as far as the spot needs and guides it in long, steady passes.",
    },
    {
      q: "Will it be too strong for the siding?",
      a: "He sets the strength with the tip. The wide tips rinse siding gently, and the narrow tips are for packed gutters and stubborn growth.",
    },
    {
      q: "What comes in the box?",
      a: "The 24 ft screw-together wand and hose, three bent extension wands including the curved gutter hook, and 6 spray tips carried in the clip on the grip.",
    },
    {
      q: "What if it isn't right for him?",
      a: "He gets 30 days to try it with a full refund either way, and the free 1 year warranty covers it for a full year.",
    },
    {
      q: "How long is the sale on?",
      a: "The Early Access Black Friday Sale is live now for a limited time, with $101 off and free shipping.",
    },
  ],
  sticky: {
    cta: "Get $101 Off His Gift",
    line: "Early Access Black Friday · Free 1 Year Warranty · Free Shipping",
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

// Optional hero loop (C.hero.clip): 3:2 real UGC, above the fold, so it loads straight away
// (poster = first frame, then autoplay muted). Reduced motion: poster only. Pages without it keep the still.
const HERO_CLIP = (C.hero as { clip?: string }).clip
function HeroClip({ id, alt }: { id: string; alt: string }) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [still, setStill] = useState(false)
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setStill(true)
      return
    }
    ref.current?.play?.().catch(() => {})
  }, [])
  if (still) return <img src={`/gift-clips/${id}.webp`} alt={alt} className="w-full h-full object-cover" />
  return (
    <video
      ref={ref}
      src={`/gift-clips/${id}.mp4`}
      poster={`/gift-clips/${id}.webp`}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      aria-label={alt}
      className="block w-full h-full object-cover"
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
        {HERO_CLIP ? (
          <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-lg bg-muted">
            <HeroClip id={HERO_CLIP} alt={C.hero.alt} />
          </div>
        ) : (
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg bg-muted">
            <img src={C.hero.src} alt={C.hero.alt} className="w-full h-full object-cover" fetchPriority="high" />
          </div>
        )}

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
