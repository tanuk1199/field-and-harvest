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
// /ember-grip-holiday-gift : THE EMBER GRIP HEATED GLOVES, HOLIDAY GIFT LISTICLE (product aware)
// Built 2026-11-21 on Funnels/templates/listicle-1 (owner: same as the Bunkhouse and Plow gift pages).
//
// Gloves have little spend yet (~$238 total, read 2026-11-21), so the reasons come from the
// CANON + research: 1 fingertip heat (ANG_wrong_zone_gloves, the batch angle, belief to beat
// "they don't heat to the finger tips")  2 5 levels + display  3 hands that still work
// (grip_and_feel, outdoor_trade_worker)  4 battery + flip-open tips (stay_out_longer, phone_gloves_on).
// Owner 2026-11-22: FIVE reasons; reason 5 folds the sale, sizing (the gift buyer's own worry) and the
// guarantee into one; no prices outside the product card; every image whole, none repeated.
//
// OFFER, read live off /products/the-ember-grip-heated-gloves.json on 2026-11-21:
//   variant 68101745737771  1 Pair  $79.00 / $125.00  save $46
// ⛔ NO warranty on the gloves (CANON). Guarantee = 60 days (owner 2026-11-08). No shipping claim
// ($79 is under the $85 free-shipping threshold). No medical claims. No "wireless" claim.
// Reviews + reason quotes are verbatim from the PDP; each used once.
// ============================================================

const C = {
  tag: "ehg",
  pdpUrl: "https://fieldandharvestco.com/products/the-ember-grip-heated-gloves?variant=68101745737771&lp=ehg",
  // price lives on the PDP only (template product card has no price row)
  offer: { price: 79, compareAt: 125, save: 46 },
  banner: { hi: "Early Access Black Friday", text: "$46 Off + 60-Day Guarantee" },
  hero: {
    src: img("ember-grip-demo-relief.png", 1000),
    alt: "A man in a winter coat flexing his warm hands in the black Ember Grip heated gloves",
  },
  saleBadge: "Save $46 + 60-Day Money-Back Guarantee",
  h1: { a: "5 Reasons The Ember Grip Gloves Are The", hi1: "Perfect Gift", b: "For Anyone Whose Hands Are", hi2: "Always Cold" },
  intro:
    "Everybody has one. The rider who comes home with numb fingers, the guy who works outside all winter, the one who's freezing at every game. Regular gloves only hold in the warmth that's already there. Here are five reasons these are the gift they'll wear every cold day.",
  heroCta: "Give Warm Hands, $46 Off",
  trustLine: "60 days to decide · 5 heat levels · Rechargeable",
  reasons: [
    {
      badge: "FINGERTIP HEAT",
      title: "Put real heat in every fingertip this winter, not just the back of the hand",
      image: img("ember-grip-comparison-infographic.png"),
      alt: "Most heated gloves heat the back of the hand only; the Ember Grip heats all five fingers, the palm and the back of the hand",
      body: "Fingertips go numb first, and that's exactly where most heated gloves leave them cold, with one pad on the back of the hand. The Ember Grip heats all five fingers, the palm and the back of the hand, so the warmth reaches the part that actually hurts.",
      highlight: "Warm fingers, not just a warm wrist.",
      quote: {
        text: "Their heating speed is fast, and they don't heat only locally but the entire palm and fingers can be evenly heated.",
        who: "Rider · Verified Purchase",
      },
    },
    {
      badge: "ONE-BUTTON HEAT",
      title: "Let them dial in the heat with one button, all day long",
      image: img("ember-grip-heat-levels-infographic.png"),
      clip: "ehg-button-levels",
      alt: "A gloved hand pressing the button on the cuff as the display steps through the heat levels",
      body: "One button cycles 5 heat levels, from 113°F to 149°F, and a small display on the cuff shows the level and the battery. Turn it up on the first cold walk out, turn it down once their hands warm up.",
      highlight: "They're in charge of the warmth, not the weather.",
      quote: {
        text: "They have 5 levels of heat from 45 degrees to 65 degrees Celsius. When you power them on it shows battery percent remaining then the heat setting number.",
        who: "Verified Purchase",
      },
    },
    {
      badge: "HANDS THAT WORK",
      title: "Keep their hands warm enough to actually work outside",
      image: img("ember-grip-lifestyle-jobsite.png"),
      alt: "Gloved hands driving a nail into a board on a snowy jobsite in the Ember Grip gloves",
      body: "Thick winter gloves keep hands warm by making them clumsy. These are soft, fitted and textured across the palm, so they can still swing a hammer, turn a wrench or work a brake lever, and the heat keeps fingers loose through the coldest job of the week.",
      highlight: "Warm hands that still get the job done.",
      quote: {
        text: "Bought these for my SIL, who is a mechanic, as he works in colder temps during the winter. He said they not only keep his hands warm but he can still feel every nook and cranny he needs to get in to.",
        who: "Bought as a gift · Verified Purchase",
      },
    },
    {
      badge: "ALL-MORNING BATTERY",
      title: "Charge them like a phone and wear them all morning",
      image: img("ember-grip-lifestyle-skilift.png"),
      clip: "ehg-phone-fliptips",
      alt: "Swiping a phone with the gloves on, then flipping open the thumb and index fingertips",
      body: "They run on rechargeable 3000mAh batteries, so there are no hand warmers to keep buying. Up to 5 hours of heat depending on the setting, and they charge on Type-C like a phone. The thumb and index tips flip open, so they can answer a text without taking a glove off.",
      highlight: "Plug them in at night, warm hands in the morning.",
      quote: {
        text: "The 3000mAh batteries last me close to five hours on mid setting. I like the flip-top thumb and index design, handy for quick phone use.",
        who: "Cyclist · Verified Purchase",
      },
    },
    {
      badge: "EARLY ACCESS BLACK FRIDAY",
      title: "Get them now with $46 off, no size to guess and 60 days to decide",
      image: img("ember-grip-guarantee-seal.png"),
      alt: "The Ember Grip heated gloves with their 60-day guarantee seal",
      body: "The Early Access Black Friday Sale is live right now, with $46 off a pair for a limited time. There's no size to guess: one size fits most men and women, about 9 inches long and 4.3 inches across the palm. And they get 60 days to try them, with a full refund either way.",
      highlight: "Grab a pair for them, and maybe one for yourself.",
    },
  ] as Reason[],
  product: {
    badge: "60-Day Money Back Guarantee",
    headline: "The Gift They'll Wear Every Cold Day",
    desc: "The Ember Grip Heated Gloves: heat in all five fingers, the palm and the back of the hand, 5 heat levels and rechargeable batteries. Early Access Black Friday pricing is live now.",
    offerBanner: "Early Access Black Friday: $46 Off",
    thumbs: [
      { src: img("ember-grip-flatlay-box.png"), alt: "The Ember Grip gloves and charging cable" },
      { src: img("ember-grip-product-detail.png"), alt: "The heat display and button" },
      { src: img("ember-grip-sizing-infographic.png"), alt: "One size fits most men and women" },
      { src: img("ember-grip-heat-levels-infographic.png"), alt: "5 heat levels, 113°F to 149°F" },
      { src: img("ember-grip-lifestyle-shoveling.png"), alt: "Shoveling the driveway in the Ember Grip gloves" },
      { src: img("ember-grip-lifestyle-ride.png"), alt: "Riding in the Ember Grip gloves" },
    ],
    benefits: [
      { icon: "Hand", text: "Heat in all 5 fingers and the palm" },
      { icon: "Thermometer", text: "5 levels, 113°F to 149°F" },
      { icon: "Battery", text: "3000mAh, up to 5 hours" },
      { icon: "Smartphone", text: "Flip-open thumb and index tips" },
    ] as { icon: IconName; text: string }[],
  },
  reviews: {
    headline: "What Buyers Are Saying",
    sub: "In their own words, from the Ember Grip product page.",
    stars: false,
    items: [
      { title: "Practical", body: "As a daily commuter who rides a bike to work, the cold wind in winter can really freeze my fingers. This heated glove has saved me through the winter. Its heating speed is super fast. There are 5 temperature settings to meet different needs. The battery level display function is particularly practical, as it can remind me to charge them in time.", who: "Commuter · Verified Purchase" },
      { title: "This worked as desired", body: "Very comfortable gloves. There is a small box on the gloves that controls the on/off and heating that seemed like a bad spot for it but it's not. I work outdoors and these were perfect. I covered them with nitrile gloves and they still worked very well. Good product.", who: "Outdoor Worker · Verified Purchase" },
      { title: "Great purchase", body: "I work on a loading dock and the gloves really help me deal with the low temps. I really like the option of flipping open the index finger. Great gloves.", who: "Verified Purchase" },
    ],
  },
  faqSub: "Everything you need to know before you wrap them.",
  faq: [
    {
      q: "Who are they for?",
      a: "Anyone who spends cold hours outside: riders and cyclists, skiers, people who work outdoors, dog walkers, anyone on the sidelines all season. Anyone whose fingers go numb first.",
    },
    {
      q: "Will they fit?",
      a: "One size fits most men and women: about 9 inches long and 4.3 inches across the palm.",
    },
    {
      q: "How long does the heat last?",
      a: "Up to 5 hours depending on the setting, on rechargeable 3000mAh batteries. They charge with a Type-C cable.",
    },
    {
      q: "Can they use their phone with them on?",
      a: "Yes. The thumb and index fingertips flip open for the touchscreen.",
    },
    {
      q: "What if they're not the right pair?",
      a: "They get 60 days to try them, with a full refund either way.",
    },
    {
      q: "How long is the sale on?",
      a: "The Early Access Black Friday Sale is live now for a limited time, with $46 off a pair.",
    },
  ],
  sticky: {
    cta: "Get $46 Off Warm Hands",
    line: "Early Access Black Friday · 60-Day Guarantee · 5 Heat Levels",
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
      {/* PROMOTIONAL BANNER */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">{C.banner.hi}</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">{C.banner.text}</span>
        </p>
      </div>

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
