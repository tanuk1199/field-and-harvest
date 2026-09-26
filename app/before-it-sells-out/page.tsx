"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Leaf, Truck, Package, Wind } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { trackCtaClick } from "@/lib/tracking"

// ============================================================
// /before-it-sells-out : THE YEOMAN SWEEP, FALL PREP (product aware)
// Built on listicle-1, the same shape as /in-season (Grange Carrier spring prep):
// banner, logo, hero + CTA above the fold, 6 reason cards, product card, reviews,
// FAQ, always-on sticky CTA. Reasons reuse the /ditch-the-rake arguments, reframed
// onto fall preparation, plus the two the owner asked for: SELL-OUT (reason 1) and
// FAST SHIPPING (reason 5).
//
// ⛔ /ditch-the-rake is owner-locked. Nothing here is imported from it.
// Self-contained on purpose: no shared lib, no shared components beyond shadcn ui.
//
// OFFER, read live off /products/the-yeoman-sweep.js on 2026-09-26:
//   21 in $199.99 vs $249.99 = 20%   26 in $299.99 vs $379.99 = 21%
//   30 in $349.99 vs $449.99 = 22%  SOLD OUT (available: false)
// MAX_OFF is computed on IN-STOCK sizes only, so the banner is true on a unit he can buy.
// Free gear values are the PDP's own: bags $50, One-Pass Yard $15, Tool Audit $12,
// spare V-brush set $55 (26 and 30 only). 26 in total = $132.
// If the 30 in comes back, MAX_OFF can go to 22% and reason 1 / FAQ 2 need a rewrite.
//
// ETA mirrors the PDP section setting (eta_days = 5 in product.the-yeoman-sweep.json),
// computed on the client so it never goes stale in a static build.
//
// Rating 4.7 / 3,783+ is owner-locked on the Sweep PDP. Do not re-flag.
// Reviews are verbatim from Push Lawn Sweeper/research/voc/reviews.json (same
// white-label unit). The corpus carries no reviewer names, so the badge shows the
// size that reviewer bought rather than an invented name.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-sweep"
const MAX_OFF = "21%"
const FREE_GEAR = "$132"
const ETA_DAYS = 5
const RATING = "4.7"
const REVIEW_COUNT = "3,783+"

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const IMG = {
  logo: `${CDN}/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=240`,
  // ⭐ REASON + HERO MEDIA IS THE /ditch-the-rake SET, EXACTLY. Owner, 2026-09-26: "not using
  // the same GIFs and images I have on the very winning page." Each clip carries the same
  // argument here that it carries there. Never use a *-poster.png as a still: it is a frame of
  // a video and reads as a video that will not play (that was the bug on the first build).
  hero: `${CDN}/ysp-autumn-full-season.png?v=1789416096&width=900`,
  sweetgum: `${CDN}/ysp-sweetgum-real-lawn.png?v=1789416734&width=800`,
  guarantee: `${CDN}/ysp-guarantee.png?v=1789377996&width=800`,
  lineup: `${CDN}/hf_20260913_101034_9213e557-24f3-41c3-91db-12e8aa266632.png?v=1789294280&width=800`,
  tipHopper: `${CDN}/hf_20260913_083634_da088230-c66f-464c-8f68-ca03117a3a8d.png?v=1789288880&width=800`,
  studioOrange: `${CDN}/hf_20260913_102755_d44b5095-5280-481f-83f8-3c36ab1e921a.png?v=1789295464&width=800`,
  leaning: `${CDN}/hf_20260913_083010_76904481-e3e4-4022-afad-cd7455fc471b.png?v=1789288659&width=800`,
  studioCream: `${CDN}/hf_20260913_102755_b739b898-2a79-427a-beb1-a85a19e1dc69.png?v=1789295464&width=800`,
  bags: `${CDN}/hf_20260913_101452_c8d88ebd-34cb-4c04-af56-e5728e21c54c.png?v=1789294546&width=800`,
  studioAngle: `${CDN}/hf_20260913_102022_03eb4095-9fa0-49f3-9694-fad1622a0020.png?v=1789295464&width=800`,
}

// The four autoplay loops from /ditch-the-rake, same files and same posters.
const VID = "https://cdn.shopify.com/videos/c/vp"
const CLIP = {
  sweeping: {
    src: `${VID}/c9bd6065364f43f6b82be7185e42f2bb/c9bd6065364f43f6b82be7185e42f2bb.HD-1080p-3.3Mbps-94336178.mp4`,
    poster: `${CDN}/preview_images/c9bd6065364f43f6b82be7185e42f2bb.thumbnail.0000000000.jpg?v=1789378677`,
  },
  blower: {
    src: `${VID}/63817aa5985948238541d9baa0548dcb/63817aa5985948238541d9baa0548dcb.HD-1080p-7.2Mbps-94335551.mp4`,
    poster: `${CDN}/preview_images/63817aa5985948238541d9baa0548dcb.thumbnail.0000000000.jpg?v=1789378221`,
  },
  bending: {
    src: `${VID}/dc92eeff97654bedb1a78b932149c493/dc92eeff97654bedb1a78b932149c493.HD-1080p-4.8Mbps-94336431.mp4`,
    poster: `${CDN}/preview_images/dc92eeff97654bedb1a78b932149c493.thumbnail.0000000000.jpg?v=1789378867`,
  },
  deckHeight: {
    src: `${VID}/c6004505a087401ca2c3b1c22c01c106/c6004505a087401ca2c3b1c22c01c106.HD-1080p-2.5Mbps-94399442.mp4`,
    poster: `${CDN}/ysp-deck-height-poster.png?v=1789427760`,
  },
}

type Reason = {
  badge: string
  title: string
  image?: string
  video?: { src: string; poster: string }
  alt: string
  body: string
  highlight: string
  eta?: boolean
}

const REASONS: Reason[] = [
  {
    badge: "IN STOCK NOW",
    title: "Get yours in the garage before it sells out again this fall",
    video: CLIP.sweeping,
    alt: "The Yeoman Sweep lifting a lawn full of leaves into the hopper at walking pace",
    body: "A leaf tool sells in one window: the few weeks when the leaves actually come down. That window is opening now, and the 30 inch has already sold out. The 21 and 26 inch are in stock today and shipping from our US warehouse.",
    highlight: "Order now and it is ready for the first big drop, not on your wish list while the leaves pile up.",
  },
  {
    badge: "ONE-WALK CLEANUP",
    title: "Clear the whole lawn in one walk instead of losing every fall weekend",
    video: CLIP.blower,
    alt: "A leaf blower scattering a pile of leaves across the lawn",
    body: "Blow it into a pile, rake what the blower missed, bend down, bag it. Four motions for every pile, every Saturday until the trees are bare. The Sweep has no motor: the wheels drive three V-brushes, and one turn of the wheels spins them five times, so they flick leaves up into a 7 cu ft hopper at your normal walking pace.",
    highlight: "You walk, it lifts, and the hopper fills behind you.",
  },
  {
    badge: "BACK-SAVING",
    title: "Stop bending down forty times a Saturday for the rest of the fall",
    video: CLIP.bending,
    alt: "A man bent double scooping armfuls of leaves into a bag",
    body: "It is not the raking people mind. It is the forty or fifty times you bend down after it, scooping armfuls into a bag that will not stay open. The Sweep never makes a pile, so there is nothing to kneel next to. The hopper lifts off on four buckles and you tip it out standing up.",
    highlight: "If your back hurts from bending and raking leaves, this is the part it takes away.",
  },
  {
    badge: "CLEARS WHAT MULCHING MISSES",
    title: "Get the acorns, pine needles and gum balls off the lawn before winter",
    image: IMG.sweetgum,
    alt: "A real lawn carpeted end to end with sweetgum balls under a bare gum tree",
    body: "Mulching works on grass. Acorns, sweetgum balls, magnolia pods and walnut hulls are hard and round, so a blade just moves them and they roll away from a rake. Pine needles slide straight through the tines. The Sweep lifts all of it into the hopper, with ten brush heights to meet whatever is on the ground.",
    highlight: "A clean lawn going into winter, not last fall's mess waiting for you in spring.",
  },
  {
    badge: "FAST FREE SHIPPING",
    title: "Have it at your door and set up before the first big leaf drop",
    video: CLIP.deckHeight,
    alt: "A hand moving the orange height lever on the side of the sweeper deck through its notched positions",
    body: "It ships free from our US warehouse, so it is on its way to you, not crossing an ocean while your leaves come down. The core arrives assembled. Attach the push frame and the hopper, set the brush height on the lever at the side by hand, and most people are done in about fifteen minutes.",
    highlight: "Order this week and it can be clearing your lawn the same weekend it lands.",
    eta: true,
  },
  {
    badge: "RISK-FREE",
    title: "Use it through the whole fall with sixty days to decide",
    image: IMG.guarantee,
    alt: "A man standing with the Yeoman Sweep on a cleared lawn at golden hour",
    body: "A leaf tool proves itself over a season, not an afternoon, so you get sixty days. Take it through the heaviest weeks of leaf drop with a full refund either way and free shipping both ways.",
    highlight: "The yard bags and both guides are yours to keep regardless.",
  },
]

const THUMBS = [
  { src: IMG.studioOrange, alt: "The Yeoman Sweep, three-quarter studio view" },
  { src: IMG.leaning, alt: "A homeowner with the Yeoman Sweep on a finished autumn lawn" },
  { src: IMG.bags, alt: "Three free 300 liter yard bags filled with leaves" },
  { src: IMG.lineup, alt: "The Yeoman Sweep in all three sizes on an autumn lawn" },
  { src: IMG.tipHopper, alt: "Tipping a full hopper of leaves into a yard bag, standing up" },
  { src: IMG.studioAngle, alt: "The Yeoman Sweep, front angle studio view" },
]

const GIFTS = [
  { name: "3 x 300L yard bags", value: "$50" },
  { name: "One-Pass Yard guide", value: "$15" },
  { name: "Tool Audit checklist", value: "$12" },
  { name: "Spare V-brush set (26 in)", value: "$55" },
]

const REVIEWS = [
  {
    title: "This works great!!",
    body: "I’ve had other brands of this type of product and this is by far the best! It’s sturdy I like the metal, great sweeping brushes that really work. Easy to use very adjustable. I never write reviews like this, but for this one, anybody considering it you will love it. I bought the 30 inch one wondering if it would be awkward and it isn’t. Very happy with my leaf sweeper. I am ready for the fall.",
    size: "Bought the 30 in",
  },
  {
    title: "Beats Raking",
    body: "Go this to clean up my yard in the fall when the leaves fall and the magnolia tree in my front yard is dropping cones. It has significantly shortened the time to clean my yard. One of the best yard care items I've bought.",
    size: "Bought the 21 in",
  },
  {
    title: "Time saver!",
    body: "Best purchase of my life lol. I have a big yard and pine needles and dead grass clippings took days to rake and clean but this thing rocks. Easy assembly and picks pine needles, cones, sticks, leaves, and grass clippings up no problem. I set it on the lowest setting and cruise. Wish i bought sooner.",
    size: "Bought the 26 in",
  },
  {
    title: "Fantastic lawn sweeper, much better than a rake or blower!",
    body: "I am very impressed with this lawn sweeper! It works way better than a rake or leaf blower. The collection basket comes off easily and pops back into place with ease. The adjustable deck height is extremely handy whether working with tall grass, short grass, or no grass at all. Highly recommended!",
    size: "Bought the 21 in",
  },
]

function Stars({ size = "w-5 h-5" }: { size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${size} fill-[#FDB913] text-[#FDB913]`} />
      ))}
    </div>
  )
}

function useEta() {
  const [eta, setEta] = useState<string | null>(null)
  useEffect(() => {
    const d = new Date(Date.now() + ETA_DAYS * 86400000)
    setEta(d.toLocaleDateString("en-US", { month: "long", day: "numeric" }))
  }, [])
  return eta
}

export default function BeforeItSellsOutPage() {
  const eta = useEta()
  const [mainImg, setMainImg] = useState(0)

  const cta = (location: string, label: string) => ({
    href: PDP_URL,
    onClick: () => trackCtaClick(`bso-${location}`, label),
  })

  return (
    <div className="min-h-screen bg-background">
      {/* PROMOTIONAL BANNER */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">Save Up To {MAX_OFF}</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ Free Yard Bags &amp; Guides</span>
        </p>
      </div>

      {/* HEADER */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <img src={IMG.logo} alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" />
      </header>

      {/* HERO */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <img
            src={IMG.hero}
            alt="A man pushing the Yeoman Sweep across a leaf covered lawn in full autumn color, hopper loaded with maple leaves"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground">
            Fall Prep: Up To {MAX_OFF} Off + Up To {FREE_GEAR} Of Free Gear
          </span>
        </div>

        <div className="mt-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons Smart Homeowners Are Grabbing <span className="text-[#C86F4C]">The Yeoman Sweep</span> Before It{" "}
            <span className="text-[#C86F4C]">Sells Out Again This Fall</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            The leaves are about to come down, and the 30 inch is already gone. The homeowners getting ahead of it are
            putting a Sweep in the garage now, so this fall is one walk across the lawn instead of every Saturday on
            their knees with a bag.
          </p>
        </div>

        <a {...cta("hero", "Grab Yours Before It Sells Out")}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Grab Yours Before It Sells Out
          </Button>
        </a>

        {eta && (
          <p className="mt-3 text-center text-sm font-semibold text-foreground">
            <Truck className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#C86F4C]" />
            Order now and receive it by {eta}
          </p>
        )}

        <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
          <Stars />
          <p className="text-sm text-foreground font-medium">
            {RATING} stars <span className="text-muted-foreground mx-1">&bull;</span> {REVIEW_COUNT} reviews{" "}
            <span className="text-muted-foreground mx-1">&bull;</span> Ships free from the USA
          </p>
        </div>
      </section>

      {/* REASONS */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">
        {REASONS.map((r, i) => (
          <div key={r.badge} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
                {r.badge}
              </Badge>
              <span className="text-xs font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">{r.title}</h3>

            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
              {r.video ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={r.video.poster}
                  aria-label={r.alt}
                  className="w-full h-full object-cover"
                >
                  <source src={r.video.src} type="video/mp4" />
                </video>
              ) : (
                <img src={r.image} alt={r.alt} className="w-full h-full object-cover" loading="lazy" />
              )}
            </div>

            <p className="text-foreground/80 text-pretty leading-relaxed text-base">
              {r.body} <span className="font-bold text-foreground">{r.highlight}</span>
            </p>

            {r.eta && eta && (
              <p className="mt-4 rounded-lg bg-[#F4EFE3] px-4 py-3 text-sm font-semibold text-foreground">
                <Truck className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#C86F4C]" />
                Order now and receive it by {eta}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* PRODUCT SECTION */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            60-Day Guarantee + Free US Shipping
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            The Leaves Are Coming. Get Yours While It Is Still In Stock.
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            Up to {MAX_OFF} off, up to {FREE_GEAR} of free gear, and free shipping from our US warehouse. The 30 inch is
            gone. Get set up before the 21 and 26 inch go the same way.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <Stars size="w-4 h-4" />
            <p className="text-sm text-foreground font-medium">
              {RATING} stars <span className="text-muted-foreground mx-1.5">|</span> {REVIEW_COUNT} reviews
            </p>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide uppercase">
              Fall Prep: Save Up To {MAX_OFF} + Up To {FREE_GEAR} Of Free Gear
            </p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <img src={THUMBS[mainImg].src} alt={THUMBS[mainImg].alt} className="w-full h-full object-cover" loading="lazy" />
            </div>

            <div className="grid grid-cols-6 gap-1.5 mb-5">
              {THUMBS.map((t, i) => (
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
              {[
                { Icon: Wind, text: "One walk replaces blow, rake, bend and bag" },
                { Icon: Leaf, text: "Lifts leaves, needles, acorns and gum balls" },
                { Icon: Package, text: "7 cu ft hopper lifts off on four buckles" },
                { Icon: Truck, text: "Ships free and fast from our US warehouse" },
              ].map(({ Icon, text }) => (
                <div key={text} className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                  <Icon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#C86F4C]" />
                  <p className="text-xs text-foreground font-semibold leading-snug">{text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-[#D4C4B0] mb-5 overflow-hidden">
              <p className="bg-[#F4EFE3] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#4A3F35]">
                Included free with your Sweep
              </p>
              <ul className="divide-y divide-border">
                {GIFTS.map((g) => (
                  <li key={g.name} className="flex items-center justify-between px-4 py-2.5 text-sm">
                    <span className="font-semibold text-foreground">{g.name}</span>
                    <span>
                      <span className="text-muted-foreground line-through mr-2">{g.value}</span>
                      <span className="font-bold text-[#C86F4C]">FREE</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a {...cta("product-card", "See Sizes And Fall Pricing")}>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-foreground text-foreground font-bold hover:bg-muted bg-transparent py-6 rounded-lg"
              >
                See Sizes And Fall Pricing
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <Stars />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Homeowners Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">
            {RATING} out of 5 from {REVIEW_COUNT} reviews
          </p>
        </div>

        <div className="space-y-4">
          {REVIEWS.map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-lg p-5">
              <div className="mb-2">
                <Stars size="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-bold text-foreground mb-2">&ldquo;{r.title}&rdquo;</p>
              <p className="text-sm text-foreground/75 leading-relaxed mb-3">{r.body}</p>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">
                {r.size}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-40">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know before the leaves come down.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "Will it get here before the leaves come down?",
              a: `${eta ? `Order now and it arrives by ${eta}. ` : ""}It ships free from our US warehouse, and the core comes assembled, so it can be clearing your lawn the same weekend it lands.`,
            },
            {
              q: "Which size should I get?",
              a: "The 26 inch suits an average suburban yard, and it is the one that comes with the free spare V-brush set. The 21 inch is built for small yards and quick touch-ups. The 30 inch has already sold out this fall.",
            },
            {
              q: "Is it hard to push?",
              a: "It pushes like a walk-behind mower, and the brush height sets the feel. Ten heights on a handle at the side let you dial it in for your grass mid-lawn: one notch up and it rolls. Nothing to start, fuel or charge.",
            },
            {
              q: "Do I still have to bag?",
              a: "Not the way you do now. You never kneel and scoop. The hopper lifts off on four buckles and you empty it standing, into a bin or a bag. The three 300 liter yard bags that come free stand up on their own.",
            },
            {
              q: "What will it pick up?",
              a: "Leaves, grass clippings, pine needles and pine straw, small sticks and twigs, acorns, sweetgum balls, magnolia pods, walnut hulls, and light thatch after dethatching. It works on lawns, driveways, patios and artificial turf.",
            },
            {
              q: "How does the guarantee work?",
              a: "Sixty days to use it through the fall, with a full refund either way. Free shipping both ways, and the yard bags and guides stay with you.",
            },
          ].map((f, i) => (
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
          <a {...cta("sticky", `Get Up To ${MAX_OFF} Off Before It Sells Out`)}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg mb-2.5 shadow-lg transition-all hover:shadow-xl"
            >
              Get Up To {MAX_OFF} Off Before It Sells Out
            </Button>
          </a>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Stars size="w-3.5 h-3.5" />
            <p className="text-xs text-white/80 font-semibold">
              {RATING}/5 ({REVIEW_COUNT} Reviews) <span className="text-white/50 mx-1">&bull;</span> Ships Free From The USA
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
