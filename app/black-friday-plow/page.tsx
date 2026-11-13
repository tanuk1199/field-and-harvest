"use client"

import { useEffect, useRef, useState } from "react"
import { Archivo } from "next/font/google"
import { Award, BadgeDollarSign, Check, ChevronLeft, ChevronRight, Minus, Plus, Star, Truck, X } from "lucide-react"

// ============================================================
// /black-friday-plow : The Yeoman Plow (36 in black wheeled snow pusher; 38 in red sold out)
// EARLY ACCESS BLACK FRIDAY SALE. Second build on the template
// Funnels/templates/sale-buybox-dark-1, cloned from /black-friday-gable.
// Only the CONFIG block differs from that page.
//
// Every CTA scrolls to #buy except the CHECK AVAILABILITY button, which
// links to the product page with the chosen variant (?variant=<id>&lp=<tag>).
// The PDP's own add to cart fires Meta AddToCart, so this page does not.
// ============================================================

const display = Archivo({ subsets: ["latin"], weight: ["800", "900"] })

// ===== CONFIG =====
// Live price read off /products/the-yeoman-plow.json 2026-11-13 (owner: 36 in black
// folded into the Plow, red sold out, $197 / $310 = the old 36% off):
//   68270519975979  FH-SNOW-36-BLK  $197.00 / $310.00  save $113
//   68013794164779  FH-SNOW-38      $197.00 / $310.00  SOLD OUT (DENY)
// Facts: the 36 in kit (frank-kit product/vevor-36in-snow-pusher-black): 36 in powder-coated
// carbon-steel blade, 7-angle blade, 5-position handle, 3 height levels, 22.04 lb.
// "Half the time" is owner-supplied (PDP H1 2026-10-26).
// No rating row: the Plow has no owner-supplied rating or count.

const LANDER_TAG = "bfp"
const STORE = "https://fieldandharvestco.com"
const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const SHOP = "https://fieldandharvestco.com/cdn/shop/files"
const img = (f: string, v: string, w = 900) => `${CDN}/${f}?v=${v}&width=${w}`

const THEME = {
  // Black Friday: black ground, gold accent, black text on gold buttons.
  accent: "#F2B53A",
  accentInk: "#0A0A0A",
  bg: "#000000",
  panel: "#111111",
  line: "#2A2A2A",
  heroGlow: "#2E2208",
}

const SALE = {
  bannerName: "EARLY ACCESS BLACK FRIDAY SALE",
  bannerTail: "FREE 1 YEAR WARRANTY",
  name: "Early Access Black Friday Sale",
  saveChip: "SAVE $113",
  stickyLine: "$113 off · Black Friday",
}

// null = no rating row anywhere. Never fill with an invented number.
const RATING: { score: string; count: string } | null = null
const HERO_TRUST = "FREE 1 YEAR WARRANTY · 30 DAYS TO DECIDE"

const HERO = {
  headline: "Clear the driveway with less back pain and less effort",
  sub: "A 36-inch blade on wheels. Push the snow, never lift it.",
  image: img("plow36-studio.jpg", "1794550753", 1000),
  imageAlt: "The Yeoman Plow: a 36-inch black carbon-steel blade on two wheels with a black push handle",
  cta: "Claim Black Friday Discount",
  note: "Now $197 · Free US shipping · 30-day money-back guarantee",
}

type Review = { name: string; title: string; body: string; photo?: string }
const REVIEWS_EYEBROW = "Verified buyers"
const REVIEWS_TITLE = "Pushing instead of lifting"
// Verbatim from the live Yeoman Plow PDP review wall (real names, Verified
// Purchase), same set as /early-black-friday-plow. Not edited.
const REVIEWS: Review[] = [
  {
    name: "Charles Enfield",
    title: "",
    body: "I have 300' of paved driveway... My back was destroyed long before I finished with a regular shovel, but this pusher worked great... My back is happy I bought this.",
  },
  {
    name: "Mark Hawkins",
    title: "Saves time & your back",
    body: "The plow is twice the width of the average snow shovel bucket and angled enough to clear sidewalks in a single pass... I was able to clear half the neighborhood's driveways, sidewalks, and stoops with this in the time it normally takes me to do only ours with a regular snow shovel.",
  },
  {
    name: "Larry",
    title: "Works great!",
    body: "This is so much easier than using a regular pusher shovel without wheels... I wish I had purchased one of these years ago.",
  },
  {
    name: "Gcerant1",
    title: "An amazing innovation in snow removal tools",
    body: "No more back pains from using regular plows. Less time to clear snow from a more effective & efficient operative execution of the push plow and a wider blade provides for less passes.",
  },
  {
    name: "Ryan",
    title: "Love it",
    body: "Living Northern Alberta, I used this thing 20+ times this year and it's awesome. I clean my driveway in 10-15 minutes and my driveway is not small.",
  },
  {
    name: "Rhonda B",
    title: "Awesome. Good value.",
    body: "Awesome product. So much easier than shoveling. Easy to assemble.",
  },
]

const HANDLES = {
  eyebrow: "If it's paved, it's pushed",
  title: "Driveways, walks, the whole run? Pushed clear.",
  body: "Concrete and asphalt driveways, sidewalks and walkways, smooth pavers, the shop apron and the long run out to the road. Light fluff, wet heavy snow and slush.",
  tiles: [
    { label: "The driveway", image: img("plow36-driveway.jpg", "1794550754", 600) },
    { label: "Sidewalks and walkways", image: img("plow36-sidewalk.jpg", "1794550755", 600) },
    { label: "Wet, heavy snow and slush", image: img("plow36-blade-concrete.jpg", "1794550756", 600) },
    { label: "The long run to the road", image: img("plow36-hero.jpg", "1794550753", 600) },
  ],
}

type Cell = "yes" | "no" | string
const COMPARE = {
  titleWhite: "Why the Plow beats",
  titleAccent: "the shovel and the snowblower",
  sub: "The Plow pushes the snow a shovel makes you lift, with nothing to fuel, charge or pull-start.",
  columns: ["THE PLOW", "A SHOVEL", "A SNOWBLOWER"] as const,
  rows: [
    { label: "No lifting or throwing snow", cells: ["yes", "no", "yes"] as Cell[] },
    { label: "Wheels carry the weight", cells: ["yes", "no", "yes"] as Cell[] },
    { label: "Wide path every pass", cells: ["yes", "no", "yes"] as Cell[] },
    { label: "Nothing to fuel, charge or start", cells: ["yes", "yes", "no"] as Cell[] },
    { label: "Quiet at 6 a.m.", cells: ["yes", "yes", "no"] as Cell[] },
    { label: "Paid once, under $200", cells: ["yes", "yes", "no"] as Cell[] },
  ],
  verdictPlain: "A shovel makes you lift it. A snowblower makes you fuel it.",
  verdictBold: "The Plow just pushes it, in half the time.",
}

const HOW = {
  eyebrow: "36-inch blade · 7-angle adjust",
  title: "How it works",
  image: img("plow36-flatlay.jpg", "1794550754", 1000),
  imageAlt: "Everything in the box: the blade, two wheels, the push handle, the bracket and the hardware",
  steps: [
    { title: "Bolt it together", body: "About 20 to 30 minutes with the tools in the box, quicker with two people." },
    { title: "Set your angle and height", body: "Turn the blade to one of 7 angles and lock the handle into 1 of 5 positions, at the height that fits you." },
    { title: "Push the whole run", body: "The wheels carry the load, so you guide the blade instead of lifting it." },
    { title: "Clear it to the side you want", body: "The angled 36-inch blade sends the snow off to one side as you push, on concrete, asphalt or smooth pavers." },
  ],
}

type Tier = {
  key: string
  name: string
  blurb: string
  meta: string
  price: number
  compareAt: number
  variantId: string
  badge?: string
  soldOut?: boolean
}
const BUY = {
  gallery: [
    { src: img("plow36-hero.jpg", "1794550753", 1000), alt: "The Yeoman Plow, 36-inch black blade, on a cleared driveway" },
    { src: img("plow36-demo-pushnotlift.jpg", "1794550757", 1000), alt: "Push, not lift: the Plow beside a standard shovel" },
    { src: img("plow36-driveway.jpg", "1794550754", 1000), alt: "Pushing a driveway clear in front of the garage" },
    { src: img("plow36-sidewalk.jpg", "1794550755", 1000), alt: "Clearing a sidewalk in one pass" },
    { src: img("plow36-angle-infographic.jpg", "1794550755", 1000), alt: "The 7-angle rotatable blade" },
    { src: img("plow36-studio.jpg", "1794550753", 1000), alt: "The Yeoman Plow, 36-inch black" },
    { src: img("plow36-flatlay.jpg", "1794550754", 1000), alt: "Everything in the box" },
  ],
  productName: "The Yeoman Plow",
  checks: [
    "36-inch carbon-steel blade on wheels: push it, never lift it",
    "7-angle blade, 5-position handle, 3 height levels",
    "Nothing to charge, fuel or plug in",
    "Assembles with the tools in the box",
  ],
  chooseLabel: "Your plow",
  appliedLabel: "Black Friday price applied",
  tiers: [
    {
      key: "36in-black",
      name: "36 IN BLACK PLOW",
      blurb: "Carbon-steel blade, wheels, handle and hardware, ready for the first storm.",
      meta: "36-INCH PATH · BLACK",
      price: 197,
      compareAt: 310,
      variantId: "68270519975979",
    },
    {
      key: "38in-red",
      name: "38 IN RED PLOW",
      blurb: "The original red Plow.",
      meta: "38-INCH PATH · RED",
      price: 197,
      compareAt: 310,
      variantId: "68013794164779",
      soldOut: true,
    },
  ] as Tier[],
  trust: [
    { icon: "truck", title: "Free US shipping", sub: "On this order" },
    { icon: "money", title: "30-day guarantee", sub: "Full money back" },
    { icon: "award", title: "1-year warranty", sub: "Included free" },
  ],
  pdpHandle: "the-yeoman-plow",
  ctaPrefix: "CHECK AVAILABILITY",
  ctaNote: "Early Access Black Friday Sale · Free US shipping",
}

const GUARANTEE = {
  image: img("plow36-guarantee.jpg", "1794550758", 500),
  imageAlt: "30 day money back guarantee seal",
  title: "Try it for 30 days",
  body: "Push it through a real storm. Thirty days to decide, with a full refund either way, and a free 1 year warranty on top.",
}

const FAQ: { q: string; a: string }[] = [
  {
    q: "Will it work on my driveway?",
    a: "Yes, if it's concrete, asphalt or smooth pavers, which covers most driveways, sidewalks and walkways. Set the blade down on the pavement and push the whole run, angled to clear a sidewalk in a single pass.",
  },
  {
    q: "Is it hard to push?",
    a: "Nothing like shoveling. The wheels carry the weight the whole time, so you guide the blade instead of lifting it. The blade pushes even wet, heavy snow and slush aside as you go.",
  },
  {
    q: "Why not just keep the shovel?",
    a: "Each scoop isn't heavy on its own. Repeat it down one driveway and it's the repetition your back stops forgiving. Push the same driveway instead: one long push per pass, with the wheels doing the carrying.",
  },
  {
    q: "How much assembly is there?",
    a: "About 20 to 30 minutes with the tools in the box, quicker with two people. Lay the parts out first, then bolt it up.",
  },
  {
    q: "How do I get the Black Friday price?",
    a: "It's the price on this page and on the product page, so there's no code to type. The $113 off is already applied.",
  },
  {
    q: "What if it doesn't suit my driveway?",
    a: "You have 30 days to decide with a full refund either way, and a free 1 year warranty on top.",
  },
]

const CLOSE = {
  eyebrow: "Early Access Black Friday Sale",
  title: "$113 off the Yeoman Plow",
  note: "Now $197 · 30-day money-back guarantee · Free US shipping",
  cta: "Claim Black Friday Discount",
}

const STICKY = { priceLine: "NOW $197", cta: "CLAIM DISCOUNT" }

const FOOTER = {
  brand: "Field & Harvest Co",
  links: [
    { label: "Refund policy", href: `${STORE}/policies/refund-policy` },
    { label: "Shipping", href: `${STORE}/policies/shipping-policy` },
  ],
}
// ===== END CONFIG =====

function money(n: number) {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`
}

function track(...args: unknown[]) {
  const w = window as unknown as { fbq?: (...a: unknown[]) => void }
  w.fbq?.(...args)
}

function clarity(...args: unknown[]) {
  const w = window as unknown as { clarity?: (...a: unknown[]) => void }
  w.clarity?.(...args)
}

function productUrl(t: Tier) {
  return `${STORE}/products/${BUY.pdpHandle}?variant=${t.variantId}&lp=${LANDER_TAG}`
}

// The PDP promo bar (snippets/fh-bunkhouse-promo-bar.liquid), same layout and
// function: SALE NAME | $X OFF + tail, and a DAYS/HRS/MIN/SEC clock that runs to
// the visitor's local midnight. Colours follow THEME.
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
  const saves = BUY.tiers.filter((x) => !x.soldOut && x.compareAt > x.price).map((x) => x.compareAt - x.price)
  const max = saves.length ? Math.max(...saves) : 0
  const off = max > 0 ? `${Math.min(...saves) < max ? "UP TO " : ""}${money(max)} OFF + ` : ""
  const units: [string, string][] = [["00", "DAYS"], [t.h, "HRS"], [t.m, "MIN"], [t.s, "SEC"]]
  return (
    <div className="sbd-promo" role="region" aria-label="Sale">
      <div className="sbd-promo-in">
        <span className="sbd-promo-txt">
          <b>{SALE.bannerName}</b>
          <i>|</i>
          <span className="sbd-promo-sub">
            {off}
            {SALE.bannerTail}
          </span>
        </span>
        <span className="sbd-promo-clock">
          {units.map(([v, l], i) => (
            <span key={l} className="contents">
              {i > 0 && <em>:</em>}
              <span className="sbd-u">
                <b>{v}</b>
                <small>{l}</small>
              </span>
            </span>
          ))}
        </span>
      </div>
      <style>{`
  .sbd-promo { background: linear-gradient(90deg, #000 0%, ${THEME.panel} 45%, ${THEME.heroGlow} 100%); color: #FBF6EC; border-bottom: 1px solid ${THEME.accent}59; }
  .sbd-promo-in { max-width: 1200px; margin: 0 auto; padding: 8px 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .sbd-promo-txt { font: 600 13px/1.3 ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; letter-spacing: .04em; text-align: left; min-width: 0; }
  .sbd-promo-txt b { font-weight: 800; letter-spacing: .06em; color: ${THEME.accent}; }
  .sbd-promo-txt i { font-style: normal; opacity: .6; margin: 0 10px; }
  .sbd-promo-clock { flex: none; display: inline-flex; align-items: flex-start; gap: 4px; }
  .sbd-promo-clock em { font-style: normal; font-weight: 700; line-height: 26px; opacity: .8; }
  .sbd-u { display: inline-flex; flex-direction: column; align-items: center; }
  .sbd-u b { background: ${THEME.accent}24; border: 1px solid ${THEME.accent}73; border-radius: 4px; min-width: 32px; padding: 3px 4px; text-align: center; font: 700 15px/1.2 ui-sans-serif, system-ui, -apple-system, Arial, sans-serif; font-variant-numeric: tabular-nums; color: #FBF6EC; }
  .sbd-u small { font-size: 8px; letter-spacing: .1em; opacity: .75; margin-top: 2px; }
  @media (max-width: 749px) { .sbd-promo-in { gap: 8px; padding: 8px 10px; } .sbd-promo-txt { flex: 1 1 auto; text-align: center; font-size: 10px; letter-spacing: 0; white-space: nowrap; } .sbd-promo-txt b { display: block; font-size: 12px; margin-bottom: 2px; } .sbd-promo-txt i { display: none; } .sbd-promo-sub { display: block; } .sbd-promo-clock { gap: 3px; } .sbd-u b { min-width: 23px; font-size: 11px; padding: 3px 2px; } .sbd-promo-clock em { line-height: 22px; } .sbd-u small { font-size: 7px; } }
      `}</style>
    </div>
  )
}

function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={size} height={size} className="fill-[#F5B301] text-[#F5B301]" />
      ))}
    </span>
  )
}

function JumpCta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href="#buy"
      onClick={() => clarity("set", `${LANDER_TAG}_cta`, "jump")}
      className={`block w-full rounded-2xl py-5 text-center text-lg font-extrabold uppercase tracking-wide shadow-lg transition active:scale-[0.99] ${className}`}
      style={{ background: THEME.accent, color: THEME.accentInk }}
    >
      {label}
    </a>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] sm:text-sm" style={{ color: THEME.accent }}>
      {children}
    </p>
  )
}

function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`${display.className} text-[28px] font-black uppercase leading-[1.02] tracking-[-0.02em] sm:text-4xl ${className}`}>
      {children}
    </h2>
  )
}

function Mark({ v, strong }: { v: Cell; strong?: boolean }) {
  if (v === "yes")
    return (
      <span
        className="mx-auto flex h-8 w-8 items-center justify-center rounded-full"
        style={{ background: strong ? "#fff" : "#3A3C42" }}
      >
        <Check className="h-5 w-5" strokeWidth={3} style={{ color: strong ? THEME.accent : "#C9CBD1" }} />
      </span>
    )
  if (v === "no")
    return (
      <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#2E3036]">
        <X className="h-5 w-5 text-[#9A9DA5]" strokeWidth={3} />
      </span>
    )
  return <span className="text-sm text-[#9A9DA5]">{v}</span>
}

function TrustIcon({ name }: { name: string }) {
  const cls = "mx-auto h-7 w-7"
  const style = { color: THEME.accent }
  if (name === "truck") return <Truck className={cls} style={style} />
  if (name === "money") return <BadgeDollarSign className={cls} style={style} />
  return <Award className={cls} style={style} />
}

export default function SaleBuyboxPage() {
  const [tierIdx, setTierIdx] = useState(() => Math.max(0, BUY.tiers.findIndex((t) => !t.soldOut)))
  const [slide, setSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [buyVisible, setBuyVisible] = useState(false)
  const buyRef = useRef<HTMLElement | null>(null)

  const tier = BUY.tiers[tierIdx]
  const lowest = BUY.tiers.filter((t) => !t.soldOut).reduce((m, t) => Math.min(m, t.price), Infinity)

  useEffect(() => {
    clarity("set", "lander", LANDER_TAG)
    const el = buyRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setBuyVisible(e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  function go(delta: number) {
    setSlide((s) => (s + delta + BUY.gallery.length) % BUY.gallery.length)
  }

  function fireBuyClick() {
    try {
      track("trackCustom", "BuyBoxClick", { page: LANDER_TAG, tier: tier.key })
      clarity("set", `${LANDER_TAG}_pdp`, tier.key)
      clarity("upgrade", `${LANDER_TAG}-pdp-click`)
    } catch {}
  }

  const vars = {
    "--accent": THEME.accent,
    background: THEME.bg,
  } as React.CSSProperties

  return (
    <div className="min-h-screen text-white antialiased" style={vars}>
      {/* 1. Sale bar: the PDP promo bar */}
      <PromoBar />

      {/* 2. Hero */}
      <section
        className="px-5 pb-12 pt-8 text-center"
        style={{ background: `radial-gradient(120% 80% at 50% 100%, ${THEME.heroGlow} 0%, ${THEME.bg} 70%)` }}
      >
        <div className="mx-auto max-w-xl">
          {RATING ? (
            <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#D5D7DC] sm:text-sm">
              <Stars /> {RATING.score} · {RATING.count}
            </p>
          ) : (
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D5D7DC] sm:text-sm">{HERO_TRUST}</p>
          )}
          <h1 className={`${display.className} mt-4 text-[34px] font-black uppercase leading-[0.98] tracking-[-0.025em] sm:text-5xl`}>
            {HERO.headline}
          </h1>
          <p className="mt-4 text-lg font-bold sm:text-xl">{HERO.sub}</p>
          <img src={HERO.image} alt={HERO.imageAlt} fetchPriority="high" className="mx-auto mt-6 aspect-square w-full max-w-sm object-contain" />
          <span
            className="mt-6 inline-block rounded-full border-2 px-5 py-1.5 text-base font-semibold uppercase tracking-[0.08em]"
            style={{ borderColor: THEME.accent, color: THEME.accent }}
          >
            {SALE.saveChip}
          </span>
          <JumpCta label={HERO.cta} className="mt-5" />
          <p className="mt-4 text-sm text-[#A9ACB4]">{HERO.note}</p>
        </div>
      </section>

      {/* 3. Review carousel */}
      <section className="py-12" style={{ background: THEME.bg }}>
        <div className="mx-auto max-w-5xl px-5">
          <Eyebrow>{REVIEWS_EYEBROW}</Eyebrow>
          <H2 className="mt-2">{REVIEWS_TITLE}</H2>
          <p className="mt-2 text-sm text-[#9A9DA5]">Swipe for more →</p>
        </div>
        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none]">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="w-[82%] max-w-sm shrink-0 snap-start rounded-2xl border p-5"
              style={{ background: THEME.panel, borderColor: THEME.line }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold"
                  style={{ background: THEME.accent, color: THEME.accentInk }}
                >
                  {r.name.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{r.name}</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A9DA5]">Verified buyer</p>
                </div>
                <Stars size={14} />
              </div>
              {r.title && <h3 className={`${display.className} mt-4 text-lg font-extrabold uppercase leading-tight`}>{r.title}</h3>}
              <p className="mt-2 text-[15px] leading-relaxed text-[#C9CBD1]">{r.body}</p>
              {r.photo && <img src={r.photo} alt="" loading="lazy" className="mt-4 aspect-[4/3] w-full rounded-xl object-cover" />}
            </article>
          ))}
        </div>
      </section>

      {/* 4. What it handles */}
      <section className="px-5 py-14" style={{ background: THEME.panel }}>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{HANDLES.eyebrow}</Eyebrow>
          <H2 className="mt-2">{HANDLES.title}</H2>
          <p className="mt-4 text-base leading-relaxed text-[#C9CBD1]">{HANDLES.body}</p>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6">
            {HANDLES.tiles.map((t) => (
              <figure key={t.label} className="min-w-0 text-center">
                <img src={t.image} alt={t.label} loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
                <figcaption className={`${display.className} mt-3 text-base font-extrabold leading-tight`}>{t.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5 + 6. Comparison + verdict */}
      <section className="px-5 py-14" style={{ background: THEME.bg }}>
        <div className="mx-auto max-w-3xl text-center">
          <H2>
            {COMPARE.titleWhite} <span style={{ color: THEME.accent }}>{COMPARE.titleAccent}</span>
          </H2>
          <p className="mx-auto mt-3 max-w-xl text-base text-[#C9CBD1]">{COMPARE.sub}</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border" style={{ borderColor: THEME.line }}>
          <div className="grid grid-cols-[1.35fr_1fr_1fr_1fr]">
            <div className="border-b" style={{ borderColor: THEME.line, background: THEME.panel }} />
            {COMPARE.columns.map((c, i) => (
              <div
                key={c}
                className="flex min-w-0 items-center justify-center border-b border-l px-1 py-4 text-center text-[11px] font-bold uppercase leading-tight tracking-[0.08em] sm:text-sm"
                style={{
                  borderColor: THEME.line,
                  background: i === 0 ? THEME.accent : THEME.panel,
                  color: i === 0 ? THEME.accentInk : "#9A9DA5",
                }}
              >
                {c}
              </div>
            ))}
            {COMPARE.rows.map((row, ri) => (
              <div key={row.label} className="contents">
                <div
                  className={`flex min-w-0 items-center px-3 py-4 text-left text-sm leading-snug sm:text-base ${ri < COMPARE.rows.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: THEME.line, background: THEME.panel }}
                >
                  {row.label}
                </div>
                {row.cells.map((v, ci) => (
                  <div
                    key={ci}
                    className={`flex min-w-0 items-center justify-center border-l px-1 py-4 text-center ${ri < COMPARE.rows.length - 1 ? "border-b" : ""}`}
                    style={{ borderColor: ci === 0 ? "rgba(0,0,0,0.15)" : THEME.line, background: ci === 0 ? THEME.accent : THEME.panel }}
                  >
                    <Mark v={v} strong={ci === 0} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-lg leading-snug text-[#A9ACB4]">
          {COMPARE.verdictPlain} <strong className="text-white">{COMPARE.verdictBold}</strong>
        </p>
      </section>

      {/* 7. How it works */}
      <section className="px-5 py-14" style={{ background: THEME.panel }}>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{HOW.eyebrow}</Eyebrow>
          <H2 className="mt-2">{HOW.title}</H2>
          <img src={HOW.image} alt={HOW.imageAlt} loading="lazy" className="mt-6 aspect-square w-full rounded-2xl object-cover" />
          <ol className="mt-8 space-y-6">
            {HOW.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-2">
                <span className={`${display.className} text-2xl font-black`} style={{ color: THEME.accent }}>
                  {i + 1}.
                </span>
                <div className="min-w-0">
                  <p className="text-lg font-bold leading-snug">{s.title}</p>
                  <p className="mt-1 text-base leading-relaxed text-[#C9CBD1]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Buy box */}
      <section id="buy" ref={buyRef} className="scroll-mt-4 px-5 py-12" style={{ background: THEME.bg }}>
        <div className="mx-auto max-w-xl">
          <div className="relative overflow-hidden rounded-2xl bg-white">
            <img src={BUY.gallery[slide].src} alt={BUY.gallery[slide].alt} className="aspect-square w-full object-cover" />
            <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold">
              {slide + 1} / {BUY.gallery.length}
            </span>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-black/45"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
            {BUY.gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={() => setSlide(i)}
                className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2"
                style={{ borderColor: i === slide ? THEME.accent : "transparent" }}
              >
                <img src={g.src.replace(/width=\d+/, "width=160")} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          {RATING && (
            <p className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#D5D7DC]">
              <Stars size={14} /> {RATING.score} · {RATING.count}
            </p>
          )}
          <h2 className={`${display.className} mt-5 text-[28px] font-black uppercase leading-[1.02] tracking-[-0.02em]`}>{BUY.productName}</h2>
          <ul className="mt-4 space-y-2.5">
            {BUY.checks.map((c) => (
              <li key={c} className="flex items-start gap-3 text-base">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: THEME.accent, color: THEME.accentInk }}>
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </ul>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.14em]">{BUY.chooseLabel}</p>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em]" style={{ color: THEME.accent }}>
            {BUY.appliedLabel}
          </p>
          <div className="mt-4 space-y-4" role="radiogroup" aria-label={BUY.chooseLabel}>
            {BUY.tiers.map((t, i) => {
              const active = i === tierIdx
              return (
                <button
                  key={t.key}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  disabled={t.soldOut}
                  onClick={() => setTierIdx(i)}
                  className="relative block w-full rounded-2xl border-2 p-5 text-left disabled:opacity-45"
                  style={{
                    borderColor: active ? THEME.accent : THEME.line,
                    background: active ? THEME.heroGlow : THEME.panel,
                  }}
                >
                  {(t.badge || t.soldOut) && (
                    <span
                      className="absolute -top-3 right-5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em]"
                      style={{ background: t.soldOut ? "#5A5C62" : THEME.accent, color: t.soldOut ? "#fff" : THEME.accentInk }}
                    >
                      {t.soldOut ? "Sold out" : t.badge}
                    </span>
                  )}
                  <div className="grid grid-cols-[2rem_1fr_auto] items-start gap-3">
                    <span
                      className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2"
                      style={{ borderColor: active ? THEME.accent : "#5A5C62", background: active ? THEME.accent : "transparent", color: THEME.accentInk }}
                    >
                      {active && <Check className="h-4 w-4" strokeWidth={3} />}
                    </span>
                    <div className="min-w-0">
                      <p className={`${display.className} text-xl font-black uppercase leading-tight`}>{t.name}</p>
                      <p className="mt-1 text-[15px] leading-snug text-[#C9CBD1]">{t.blurb}</p>
                    </div>
                    <div className="text-right">
                      <p className={`${display.className} text-xl font-black`}>{money(t.price)}</p>
                      <p className="text-sm text-[#9A9DA5] line-through">{money(t.compareAt)}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3 pl-11">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#9A9DA5]">{t.meta}</span>
                    <span className="rounded-full px-3 py-1 text-sm font-bold uppercase tracking-[0.08em]" style={{ background: THEME.accent, color: THEME.accentInk }}>
                      Save {money(t.compareAt - t.price)}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-2xl border" style={{ borderColor: THEME.line, background: THEME.panel }}>
            {BUY.trust.map((b, i) => (
              <div key={b.title} className={`px-2 py-4 text-center ${i ? "border-l" : ""}`} style={{ borderColor: THEME.line }}>
                <TrustIcon name={b.icon} />
                <p className="mt-2 text-sm font-bold leading-tight">{b.title}</p>
                <p className="mt-1 text-xs leading-tight text-[#9A9DA5]">{b.sub}</p>
              </div>
            ))}
          </div>

          <a
            href={productUrl(tier)}
            onClick={fireBuyClick}
            className="mt-5 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-3 py-5 text-center text-[15px] font-extrabold uppercase tracking-normal shadow-lg sm:gap-3 sm:text-lg sm:tracking-wide"
            style={{ background: THEME.accent, color: THEME.accentInk }}
          >
            <span>
              {BUY.ctaPrefix}
              {BUY.tiers.length > 1 ? ` · ${tier.name}` : ""}
            </span>
          </a>
          <p className="mt-3 text-center text-sm text-[#9A9DA5]">{BUY.ctaNote}</p>
        </div>
      </section>

      {/* 9. Guarantee */}
      <section className="px-5 py-12" style={{ background: THEME.panel }}>
        <div className="mx-auto max-w-xl rounded-2xl border p-8 text-center" style={{ borderColor: THEME.line, background: THEME.bg }}>
          <img src={GUARANTEE.image} alt={GUARANTEE.imageAlt} loading="lazy" className="mx-auto h-32 w-32 rounded-xl object-cover" />
          <h2 className={`${display.className} mt-5 text-2xl font-black uppercase leading-tight`}>{GUARANTEE.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-[#C9CBD1]">{GUARANTEE.body}</p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="px-5 py-14" style={{ background: THEME.bg }}>
        <div className="mx-auto max-w-xl">
          <H2>Frequently asked questions</H2>
          <div className="mt-6 space-y-3">
            {FAQ.map((f, i) => {
              const open = openFaq === i
              return (
                <div key={f.q} className="rounded-2xl border" style={{ borderColor: THEME.line, background: THEME.panel }}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold"
                  >
                    <span>{f.q}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: THEME.accent, color: THEME.accentInk }}>
                      {open ? <Minus className="h-5 w-5" strokeWidth={3} /> : <Plus className="h-5 w-5" strokeWidth={3} />}
                    </span>
                  </button>
                  {open && <p className="px-5 pb-5 text-base leading-relaxed text-[#C9CBD1]">{f.a}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 11. Close + footer */}
      <section
        className="px-5 pb-28 pt-14 text-center"
        style={{ background: `radial-gradient(120% 90% at 50% 100%, ${THEME.heroGlow} 0%, ${THEME.bg} 65%)` }}
      >
        <div className="mx-auto max-w-xl">
          <Eyebrow>{CLOSE.eyebrow}</Eyebrow>
          <H2 className="mt-3">{CLOSE.title}</H2>
          <p className="mt-3 text-base text-[#C9CBD1]">{CLOSE.note}</p>
          <JumpCta label={CLOSE.cta} className="mt-6" />
          <p className="mt-8 text-sm text-[#9A9DA5]">
            © {FOOTER.brand}
            {FOOTER.links.map((l) => (
              <span key={l.label}>
                {" · "}
                <a href={l.href} className="underline">
                  {l.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* 12. Sticky bar: hidden while the buy box is on screen */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t px-5 py-3 transition-transform duration-300 ${buyVisible ? "translate-y-full" : "translate-y-0"}`}
        style={{ borderColor: THEME.line, background: "rgba(0,0,0,0.96)" }}
      >
        <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
          <div className="min-w-0">
            <p className={`${display.className} text-xl font-black uppercase leading-tight`}>
              {BUY.tiers.length > 1 ? `FROM ${money(lowest)}` : STICKY.priceLine}
            </p>
            <p className="text-sm font-bold" style={{ color: THEME.accent }}>
              {SALE.stickyLine}
            </p>
          </div>
          <a
            href="#buy"
            onClick={() => clarity("set", `${LANDER_TAG}_cta`, "sticky")}
            className="shrink-0 rounded-2xl px-6 py-4 text-base font-extrabold uppercase tracking-wide"
            style={{ background: THEME.accent, color: THEME.accentInk }}
          >
            {STICKY.cta}
          </a>
        </div>
      </div>
    </div>
  )
}
