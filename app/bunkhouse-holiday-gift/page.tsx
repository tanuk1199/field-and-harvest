"use client"

import { useState } from "react"
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
  body: string
  highlight: string
  /** verbatim review from the PDP, never paraphrased */
  quote?: { text: string; who: string }
  cta?: string
}

// ============================================================
// /bunkhouse-holiday-gift : THE BUNKHOUSE DIESEL HEATER, HOLIDAY GIFT LISTICLE (product aware)
// Built 2026-11-21 on Funnels/templates/listicle-1 (owner: general gifting listicle, top reasons
// from the ads + research; owner 2026-11-22: FIVE reasons, the sale + warranty + money back folded into
// reason 5; no prices outside the product card; every image whole, none repeated).
//
// Reason order comes from what is spending (SemCom-Data/ad-daily, read 2026-11-21):
//   1 stay_till_dark (blind hunter, top authored spender)   2 work_all_winter (shop)
//   3 dry_heat + propane_escape (camper, CO alarm)          4 new model over old (the top UGC spenders:
//     be.lush / travistrujillo30 / averagelawnnick, 7 L vs 5 L, intake, exhaust, Bluetooth; owner 2026-11-10)
//   Gift frame = ANG_bf_gift_asks_nothing ("for the man who asks for nothing").
//
// OFFER, read live off /products/the-bunkhouse-diesel-heater.json on 2026-11-21:
//   variant 67983351676971  $297.00 / $458.00  save $161
// ⛔ Never claim 110V / wall plug, run time per tank, fuel per hour (CANON). No end date on the sale.
// Reviews + reason quotes are verbatim from the PDP; each review is used once on the page.
// ============================================================

const C = {
  tag: "bhg",
  pdpUrl: "https://fieldandharvestco.com/products/the-bunkhouse-diesel-heater?variant=67983351676971&lp=bhg",
  // price lives on the PDP only (template product card has no price row)
  offer: { price: 297, compareAt: 458, save: 161 },
  banner: { hi: "Early Access Black Friday", text: "$161 Off + Free 1 Year Warranty" },
  hero: {
    src: img("bunkhouse-16-inuse-carry-across-yard.png", 1000),
    alt: "A man carrying the camo Bunkhouse diesel heater across a snowy yard to his shop",
  },
  saleBadge: "Save $161 + Free 1 Year Warranty",
  h1: { a: "5 Reasons The Bunkhouse Is The", hi1: "Perfect Gift", b: "For The Man Who", hi2: "Asks For Nothing" },
  intro:
    "Ask him what he wants and he says nothing. Then he spends every cold weekend in a freezing blind, a shop he can't work in, or a camper that eats propane. Here are five reasons this is the one gift he'll use the first weekend it's out of the box.",
  heroCta: "Give Him The Bunkhouse, $161 Off",
  trustLine: "Free 1 year warranty · 30 days to decide · Ships free from the USA",
  reasons: [
    {
      badge: "STAY-TILL-DARK",
      title: "Give him the whole sit this season, not just the first cold hour",
      image: img("bunkhouse-13-inuse-hunting-blind.png"),
      alt: "A hunter glassing from a wooden blind with the Bunkhouse heater running beside him, exhaust piped outside",
      body: "He's in the blind before first light, and by mid-morning the cold is what sends him home. The Bunkhouse sits right there with him, warms the blind in about three minutes and sends its fumes out its own pipe, so the blind gets warm, dry air and the fumes stay outside.",
      highlight: "He stays out until dark, right when the deer start moving.",
      quote: {
        text: "Heat my tent when camping in the tens on low with no problem. It is good on fuel.",
        who: "Herbert Eggleston Jr",
      },
    },
    {
      badge: "WORK-ALL-WINTER",
      title: "Give him his shop back for the whole winter",
      image: img("bunkhouse-15-inuse-woodshop.png"),
      alt: "A man working at his bench in a warm woodshop with the Bunkhouse heater on the floor",
      body: "Most garages go quiet after Thanksgiving. Too cold to work, and a torpedo heater fills the room with fumes until somebody cracks the door and the heat walks out. The Bunkhouse burns in its own chamber and pipes the exhaust outside, so the door stays shut and the heat stays in.",
      highlight: "His projects stop waiting for April.",
      quote: {
        text: "It's fantastic...just what we were looking for My husband uses it in his work shed and we can transfer it to our side by side when needed",
        who: "Pam Lewis, for her husband's work shed",
      },
    },
    {
      badge: "DRY HEAT",
      title: "Keep the camper warm and dry without another propane run",
      image: img("bunkhouse-pdp-tile-rv-camper.png"),
      alt: "A man reading in a warm camper with the Bunkhouse heater running by the dinette",
      body: "Propane burns right in the room, puts water on every wall and empties a bottle fast on a cold night. The Bunkhouse runs on diesel and draws about 2 to 3 amps on 12V, and its built-in CO alarm sounds at 300 ppm and shuts the heater off at 500.",
      highlight: "Warm, dry air all night, and you sleep easier too.",
      quote: {
        text: "Best little heater I ever bought and it's my first one and will be buying another one I love this thing puts out great heat and sips fuel!!",
        who: "Mike m",
      },
    },
    {
      badge: "THE NEW MODEL",
      title: "Get him the new model, not last year's",
      image: img("bunkhouse-06-layout-unit-and-controls.png"),
      alt: "The Bunkhouse heater with its control panel, remote and the Bluetooth app on a phone",
      body: "If he's shopped diesel heaters, he's seen the old ones. This is the updated model: a seven litre tank instead of five, the fresh-air intake built in so there's no extra hose, the exhaust moved off the bottom, and a new Bluetooth controller he runs from his phone or the remote.",
      highlight: "He'll know you did your homework.",
    },
    {
      badge: "EARLY ACCESS BLACK FRIDAY",
      title: "Get it now with $161 off and a full year of cover",
      image: img("bunkhouse-pdp-guarantee-seal.png"),
      alt: "The Bunkhouse heater with its 30 day money back guarantee and free 1 year warranty seals",
      body: "The Early Access Black Friday Sale is live right now, with $161 off for a limited time. A gift should be a sure thing: the free 1 year warranty covers it for a full year from the day it arrives, and he gets 30 days to try it with a full refund either way. It ships free from the USA, so it isn't crossing an ocean in December.",
      highlight: "Wrap it early and he's warm by the first cold weekend.",
    },
  ] as Reason[],
  product: {
    badge: "Free 1 Year Warranty + 30-Day Money Back",
    headline: "The Gift He'll Use Every Cold Weekend",
    desc: "The Bunkhouse Diesel Heater, 8 kW, with everything he needs to set it up in the box. Early Access Black Friday pricing is live now.",
    offerBanner: "Early Access Black Friday: $161 Off",
    thumbs: [
      { src: img("bunkhouse-03-studio-dark-premium.png"), alt: "The Bunkhouse diesel heater" },
      { src: img("bunkhouse-26-info-vs-propane.png"), alt: "The Bunkhouse against a propane heater" },
      { src: img("bunkhouse-21-co-alarm-feature.png"), alt: "The built-in CO alarm" },
      { src: img("bunkhouse-22-info-thermostat.png"), alt: "Thermostat and remote" },
      { src: img("bunkhouse-05-flatlay-whats-in-the-box.png"), alt: "Everything in the box" },
    ],
    benefits: [
      { icon: "Flame", text: "Warm, dry air in about 3 minutes" },
      { icon: "ArrowRight", text: "Exhaust goes out its own pipe" },
      { icon: "ShieldCheck", text: "Built-in CO alarm, 300 / 500 ppm" },
      { icon: "Battery", text: "Runs off 12V or 24V power" },
    ] as { icon: IconName; text: string }[],
  },
  reviews: {
    headline: "What Buyers Are Saying",
    sub: "In their own words, from the Bunkhouse product page.",
    stars: true,
    items: [
      { title: "This little heater is HOT!", body: "Awesome little heater for the money. It was easy to set up and get running. Just fill with diesel and your set.", who: "Jason" },
      { title: "I’d buy another one", body: "Works great using to heat my small house. Nice compact unit. Works great on the app.", who: "Jordan" },
      { title: "Works perfect", body: "Works perfect easy to set up excellent product", who: "Manuel Verduzco" },
    ],
  },
  faqSub: "Everything you need to know before you wrap it.",
  faq: [
    {
      q: "Will he actually use it?",
      a: "If he hunts, camps, fishes through the ice or works in a garage or shop, yes. It goes anywhere he can run the exhaust pipe outside: the blind, the shanty, the camper, the tent, the shop, the barn or the greenhouse.",
    },
    {
      q: "What does he need to run it?",
      a: "Diesel in the built-in tank and 12V or 24V power from a vehicle, a boat or a deep-cycle battery. It draws about 2 to 3 amps on 12V. The exhaust pipe, muffler, intake pipe and remote are all in the box.",
    },
    {
      q: "Is it safe to run inside?",
      a: "It burns in its own chamber and sends the exhaust out its own pipe, so with the pipe run outside the room only gets the heat. The built-in CO alarm sounds at 300 ppm and shuts the heater off at 500 ppm.",
    },
    {
      q: "Is it hard to set up?",
      a: "Fit the exhaust pipe and muffler, run it outside, fill the tank with diesel and connect power. Then set the temperature on the panel, the remote or the Bluetooth app, and it's warm in about three minutes.",
    },
    {
      q: "What if it isn't right for him?",
      a: "He gets 30 days to try it with a full refund either way, and the free 1 year warranty covers it for a full year.",
    },
    {
      q: "How long is the sale on?",
      a: "The Early Access Black Friday Sale is live now for a limited time, with $161 off and free shipping from the USA.",
    },
  ],
  sticky: {
    cta: "Get $161 Off His Gift",
    line: "Early Access Black Friday · Free 1 Year Warranty · 30 Days To Decide",
  },
}

// ============================================================
// PAGE BODY: listicle-1 shape (banner, logo, hero + CTA, 5 reason cards, product card,
// reviews, FAQ, always-on sticky CTA). Everything above this line is copy and config;
// nothing below it is product-specific. Self-contained on purpose: no shared lib beyond
// shadcn ui and lib/tracking.
// ============================================================

const ICONS = { Flame, Clock, ShieldCheck, Battery, Truck, Snowflake, Smartphone, Wrench, Thermometer, Gift, Hand, ArrowRight }

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
              <img src={r.image} alt={r.alt} className="block w-full h-auto" loading="lazy" decoding="async" />
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
