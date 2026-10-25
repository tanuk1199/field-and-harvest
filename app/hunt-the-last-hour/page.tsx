"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Flame, Wind, Battery, Package, ShieldCheck } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { trackCtaClick } from "@/lib/tracking"

// ============================================================
// /hunt-the-last-hour : THE BUNKHOUSE DIESEL HEATER, BLIND HUNTER (product aware)
// Clone of /before-it-sells-out (listicle-1, the /in-season shape): banner, logo,
// hero + CTA above the fold, 7 reason cards, product card, verbatim reviews, FAQ,
// always-on sticky CTA. Self-contained: no shared lib beyond shadcn ui + tracking.
//
// Built off the account's top-spending ad, the "STAY IN THE BLIND TILL DARK" static
// (FH-V01-AV_cold_sit_hunter-S036-ANG_dry_heat-LP07-9x16). Avatar = the deer hunter
// in a blind. Angle = staying out the full sit. Headline is the owner's.
// The hero is that ad's own scene, cropped above its text, so the click lands on
// the picture it came from.
//
// OFFER, read live off /products/the-bunkhouse-diesel-heater.json on 2026-10-25:
//   $289.00 vs compare $450.00 = save $161 (36%). Free 1 year warranty (display
//   only, $30 value, same as the PDP strip). 30 day money back. Free US shipping.
// OWNER REVISION 2026-10-25: NO PRICE anywhere on the page except the banner's $ off figure.
// The banner is a port of the PDP's theme snippet snippets/fh-bunkhouse-promo-bar.liquid (read
// live off Horizon MAIN 136737161259): same text, gradient, type and the rolling countdown to the
// visitor's local midnight. SALE_NAME says Halloween: rename after Oct 31, same as the PDP bar.
// The big warranty block is now a thin strip. Reason 3, 5 and 6 images were regenerated in
// Higgsfield with no text (Diesel Heater/product-images/2026-10-25-htlh/).
//
// No rating row: the Bunkhouse has no owner-supplied rating. No ETA line: the
// shipping time is unconfirmed (Diesel Heater/brain/OPEN.md item 1).
// Specs only from Diesel Heater/SPECS.md and owner figures (2-3 A, CO 300/500).
// Never claim a wall plug, tank size, run time or fuel per hour.
// Reviews are verbatim from research/voc/heater-1-amazon-reviews-raw.txt, real
// names, all 5 star Verified Purchase. Dallas's review title names the white-label
// brand, so his card runs without its title.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-bunkhouse-diesel-heater"
// SAVE is the banner's dollar saving (PDP banner verbatim) and the sticky button's offer. Never a price.
const SAVE = "$161"
const SALE_NAME = "Halloween Sale"

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const IMG = {
  logo: `${CDN}/Copy_of_COMFORT_CRADLE_Logos_5.png?v=1765838330&width=240`,
  hero: "/htlh-hero-blind.webp",
  blind: `${CDN}/bunkhouse-13-inuse-hunting-blind.png?width=800`,
  thermostat: `${CDN}/bunkhouse-22-info-thermostat.png?width=800`,
  vsPropane: "/htlh-r3-dry-vs-propane.webp",
  exhaust: `${CDN}/bunkhouse-20-detail-exhaust-outside.png?width=800`,
  battery: "/htlh-r5-12v-battery.webp",
  carry: "/htlh-r6-carry-handle.webp",
  guarantee: `${CDN}/bunkhouse-pdp-guarantee-seal.png?width=800`,
  studio: `${CDN}/bunkhouse-03-studio-dark-premium.png?width=800`,
  carryYard: `${CDN}/bunkhouse-16-inuse-carry-across-yard.png?width=800`,
  coAlarm: `${CDN}/bunkhouse-21-co-alarm-feature.png?width=800`,
  fuelWindow: `${CDN}/bunkhouse-11-detail-fuel-window.png?width=800`,
  handle: `${CDN}/bunkhouse-18-detail-handle-and-cap.png?width=800`,
}

type Reason = {
  badge: string
  title: string
  image: string
  alt: string
  body: string
  highlight: string
}

const REASONS: Reason[] = [
  {
    badge: "THE LAST HOUR",
    title: "You are still in the blind when the deer start moving",
    image: IMG.blind,
    alt: "A hunter glassing a frosted field at dusk from a wooden blind, the Bunkhouse heater on the floor beside him with its exhaust pipe running out through the wall",
    body: "Deer move at last light. That is the hour most hunters spend walking back to the truck, because their toes gave out first. The Bunkhouse blows warm air into the blind for the whole sit, so your hands stay steady and your feet stay warm.",
    highlight: "You sit till dark because you are comfortable, not because you are tough.",
  },
  {
    badge: "WARM IN MINUTES",
    title: "The blind is warm about three minutes after you start it",
    image: IMG.thermostat,
    alt: "The Bunkhouse heater with its remote in hand, built-in thermostat holding the temperature you set",
    body: "Start it with the remote, the phone app or the panel. It puts out up to 8 kW and turns down to 2 kW, and the built-in thermostat holds the temperature you set, so a small pop-up stays comfortable instead of turning into an oven.",
    highlight: "Set it once, then keep your eyes on the field.",
  },
  {
    badge: "DRY HEAT",
    title: "No water running down the walls like a Buddy heater",
    image: IMG.vsPropane,
    alt: "The same hunting blind twice: dry and warm with the Bunkhouse and its exhaust pipe running out through the wall, and dripping wet with a propane heater",
    body: "A propane heater burns inside the blind with you, and burning propane makes water. Hunters who run one every season say the same thing: wet walls, wet gear, wet gloves. The Bunkhouse burns diesel and sends its exhaust outside, so the only thing that comes into the blind is hot, dry air.",
    highlight: "Dry gloves and dry walls, all the way to dark.",
  },
  {
    badge: "EXHAUST OUTSIDE",
    title: "The fumes go out the pipe. The blind only gets the heat.",
    image: IMG.exhaust,
    alt: "The Bunkhouse exhaust pipe and muffler running out through a wooden wall into the snow",
    body: "The exhaust pipe and muffler come in the box and run out through the wall. Or set the heater outside the blind on the ground and run just the warm air hose in. A built-in CO alarm sounds at 300 ppm and shuts the heater off at 500 ppm.",
    highlight: "Nothing burns in the space you are sitting in.",
  },
  {
    badge: "RUNS OFF 12V",
    title: "It runs off a 12V battery, not a generator in the woods",
    image: IMG.battery,
    alt: "The Bunkhouse on a pickup tailgate in snowy timber, plugged into a 12V battery box, a hunting blind behind",
    body: "Diesel makes the heat. The battery only runs the fan, the fuel pump and the controls, and once it is lit that is about 2 to 3 amps on 12V. Hook it to your truck, a deep cycle battery or a power station. Low-voltage protection is built in.",
    highlight: "No generator noise in the timber and no cord run out to the stand.",
  },
  {
    badge: "ONE TRIP IN",
    title: "One box, one handle, fuel tank built in",
    image: IMG.carry,
    alt: "A hunter using both hands, one on the top handle and one steadying the side, to set the Bunkhouse down on a stump beside his blind",
    body: "There is no propane bottle to haul and nothing to plumb together in the dark. The tank, the heater and the controls are one unit, 18 by 12 by 16 inches and 21.8 pounds, with a carry handle on top. Fill it with diesel at home and carry it in.",
    highlight: "It goes from the truck to the blind in one trip.",
  },
  {
    badge: "RISK-FREE",
    title: "Thirty days to hunt with it and a free year of warranty behind it",
    image: IMG.guarantee,
    alt: "The Bunkhouse Diesel Heater with a 30 day money back guarantee seal and a free 1 year warranty plaque",
    body: "Cheap diesel heaters are sold by people you can never reach again. The Bunkhouse comes with a free 1 year warranty and a real team at Field & Harvest that answers. Take it out for your next cold sit, with 30 days to decide and a full refund either way.",
    highlight: "Free US shipping, and the warranty is included at no charge.",
  },
]

const THUMBS = [
  { src: IMG.studio, alt: "The Bunkhouse Diesel Heater, studio view" },
  { src: IMG.blind, alt: "The Bunkhouse in a hunting blind at dusk, exhaust out through the wall" },
  { src: IMG.carryYard, alt: "Carrying the Bunkhouse across a snowy yard by its handle" },
  { src: IMG.coAlarm, alt: "The Bunkhouse built-in CO alarm" },
  { src: IMG.fuelWindow, alt: "The fuel window on the side of the built-in tank" },
  { src: IMG.handle, alt: "The carry handle and fuel cap on top of the Bunkhouse" },
]

const REVIEWS = [
  {
    name: "Herbert Eggleston Jr",
    title: "Good heater",
    body: "Great heater. Heat my tent when camping in the tens on low with no problem. It is good on fuel.",
  },
  {
    name: "Dallas",
    title: "",
    body: "This heater is awesome! Filled with diesel and it fired right up. Heats up my smaller shop with no effort. Super efficient and way quieter than I expected. Wish I would have purchased this a long time ago. Highly recommend. You won’t be disappointed.",
  },
  {
    name: "Bruce Belles",
    title: "reliable, easy to use and set up.",
    body: "Fairly easy install, and works flawlessly. On low it can run over a day.. Great option and low cost to operate. quieter when on high temp setting. Remote works well.",
  },
  {
    name: "Pam Lewis",
    title: "Great product",
    body: "It's fantastic...just what we were looking for My husband uses it in his work shed and we can transfer it to our side by side when needed",
  },
  {
    name: "Mike m",
    title: "Sips fuel and great heat",
    body: "Best little heater I ever bought and it's my first one and will be buying another one I love this thing puts out great heat and sips fuel!!",
  },
  {
    name: "Jason",
    title: "This little heater is HOT!",
    body: "Awesome little heater for the money. It was easy to set up and get running. Just fill with diesel and your set.",
  },
]

const FAQS = [
  {
    q: "Can I run it inside my blind?",
    a: "Yes. The exhaust pipe runs outside through the wall or a window, so the fumes leave and only the warm air stays. You can also set the heater outside the blind and run the warm air hose in. Either way, the built-in CO alarm sounds at 300 ppm and shuts it off at 500 ppm.",
  },
  {
    q: "What do I power it with?",
    a: "Any 12V or 24V source: your truck, a deep cycle battery or a power station. Diesel makes the heat, so once it is lit it draws about 2 to 3 amps on 12V for the fan, the fuel pump and the controls. Low-voltage protection is built in.",
  },
  {
    q: "Will it be too much heat for a small blind?",
    a: "It turns down from 8 kW to 2 kW, and the thermostat holds the temperature you set. Start it high to take the chill off, then let it settle where you want it.",
  },
  {
    q: "How big is it and what does it burn?",
    a: "18 by 12 by 16 inches and 21.8 pounds, with a carry handle and the fuel tank built in. It burns diesel. Fill it at home and carry it in.",
  },
  {
    q: "What if something goes wrong with it?",
    a: "You have a free 1 year warranty and a real team at Field & Harvest behind it, plus 30 days to decide with a full refund either way. Shipping is free in the US.",
  },
]

// Port of snippets/fh-bunkhouse-promo-bar.liquid. Same markup, CSS and clock as the PDP.
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
    <div className="fhb-promo" role="region" aria-label="Sale">
      <div className="fhb-promo-in">
        <span className="fhb-promo-txt">
          <b>{SALE_NAME.toUpperCase()}</b>
          <i>|</i>
          <span className="fhb-promo-sub">{SAVE} OFF + FREE 1 YEAR WARRANTY 🎃</span>
        </span>
        <span className="fhb-promo-clock">
          <span className="fhb-u"><b>00</b><small>DAYS</small></span><em>:</em>
          <span className="fhb-u"><b>{t.h}</b><small>HRS</small></span><em>:</em>
          <span className="fhb-u"><b>{t.m}</b><small>MIN</small></span><em>:</em>
          <span className="fhb-u"><b>{t.s}</b><small>SEC</small></span>
        </span>
      </div>
      <style>{`
  .fhb-promo { background: linear-gradient(90deg, #241A13 0%, #4A2A16 45%, #C0653F 100%); color: #FBF6EC; }
  .fhb-promo-in { max-width: 1200px; margin: 0 auto; padding: 8px 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .fhb-promo-txt { font: 600 13px/1.3 var(--font-body--family, Inter, sans-serif); letter-spacing: .04em; text-align: left; min-width: 0; }
  .fhb-promo-clock { flex: none; }
  .fhb-promo-txt b { font-weight: 800; letter-spacing: .06em; }
  .fhb-promo-txt i { font-style: normal; opacity: .6; margin: 0 10px; }
  .fhb-promo-clock { display: inline-flex; align-items: flex-start; gap: 4px; }
  .fhb-promo-clock em { font-style: normal; font-weight: 700; line-height: 26px; opacity: .8; }
  .fhb-u { display: inline-flex; flex-direction: column; align-items: center; }
  .fhb-u b { background: rgba(251,246,236,.14); border: 1px solid rgba(251,246,236,.25); border-radius: 4px; min-width: 32px; padding: 3px 4px; text-align: center; font: 700 15px/1.2 var(--font-body--family, Inter, sans-serif); font-variant-numeric: tabular-nums; }
  .fhb-u small { font-size: 8px; letter-spacing: .1em; opacity: .75; margin-top: 2px; }
  @media (max-width: 749px) { .fhb-promo-in { gap: 8px; padding: 8px 10px; } .fhb-promo-txt { flex: 1 1 auto; text-align: center; font-size: 10px; letter-spacing: 0; white-space: nowrap; } .fhb-promo-txt b { display: block; font-size: 14px; margin-bottom: 2px; } .fhb-promo-txt i { display: none; } .fhb-promo-sub { display: block; } .fhb-promo-clock { gap: 3px; } .fhb-u b { min-width: 23px; font-size: 11px; padding: 3px 2px; } .fhb-promo-clock em { line-height: 22px; } .fhb-u small { font-size: 7px; } }
      `}</style>
    </div>
  )
}

function Stars({ size = "w-5 h-5" }: { size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`${size} fill-[#FDB913] text-[#FDB913]`} />
      ))}
    </div>
  )
}

export default function HuntTheLastHourPage() {
  const [mainImg, setMainImg] = useState(0)

  const cta = (location: string, label: string) => ({
    href: PDP_URL,
    onClick: () => trackCtaClick(`htlh-${location}`, label),
  })

  return (
    <div className="min-h-screen bg-background">
      {/* PROMOTIONAL BANNER: the PDP promo bar, ported */}
      <PromoBar />

      {/* HEADER */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <img src={IMG.logo} alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" />
      </header>

      {/* HERO */}
      <section className="max-w-lg mx-auto px-4 pt-5 pb-8">
        {/* Fold at 390x700: hero kept 16:9 and the save chip moved under the subhead so the whole H1 sits above the sticky bar. */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <img
            src={IMG.hero}
            alt="The Bunkhouse Diesel Heater on a snowy rock outside a camo hunting blind, warm air hose running into the blind"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>

        <div className="mt-4 text-center">
          <h1 className="text-[32px] md:text-[42px] font-bold text-foreground leading-tight text-balance tracking-tight">
            7 Reasons <span className="text-[#C86F4C]">The Bunkhouse</span> Lets You{" "}
            <span className="text-[#C86F4C]">Hunt The Last Hour</span> Instead Of Driving Home Cold
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            The cold ends most sits right before the deer start moving. Put warm, dry air in the blind and you are
            still in your chair when the light goes.
          </p>
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground">
            Free 1 Year Warranty + 30 Days To Decide
          </span>
        </div>

        <a {...cta("hero", "Stay Out Till Dark")}>
          <Button
            size="lg"
            className="w-full mt-5 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Stay Out Till Dark
          </Button>
        </a>

        <p className="mt-4 text-center text-sm text-foreground font-medium">
          30 days to decide
          <span className="text-muted-foreground mx-2">&bull;</span> Free US shipping
        </p>
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
              <img src={r.image} alt={r.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>

            <p className="text-foreground/80 text-pretty leading-relaxed text-base">
              {r.body} <span className="font-bold text-foreground">{r.highlight}</span>
            </p>
          </div>
        ))}
      </section>

      {/* PRODUCT SECTION */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            30 Days To Decide + Free US Shipping
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Sit Till Dark This Season
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            A free 1 year warranty, 30 days to decide and free shipping. Get it in the truck before your next cold
            sit.
          </p>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide uppercase">
              Free 1 Year Warranty + 30 Days To Decide
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
                { Icon: Flame, text: "Warm in about 3 minutes, 2 to 8 kW" },
                { Icon: Wind, text: "Exhaust goes outside, dry heat stays in" },
                { Icon: Battery, text: "Runs off 12V or 24V, about 2 to 3 amps" },
                { Icon: Package, text: "Fuel tank built in, carry handle on top" },
              ].map(({ Icon, text }) => (
                <div key={text} className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                  <Icon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#C86F4C]" />
                  <p className="text-xs text-foreground font-semibold leading-snug">{text}</p>
                </div>
              ))}
            </div>

            <div className="mb-5 flex items-center justify-center gap-2 rounded-md border border-[#D4C4B0] bg-[#F4EFE3] px-3 py-2">
              <ShieldCheck className="w-4 h-4 text-[#C86F4C]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#4A3F35]">Free 1 year warranty included</p>
            </div>

            <a {...cta("product-card", "Get The Bunkhouse")}>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-foreground text-foreground font-bold hover:bg-muted bg-transparent py-6 rounded-lg"
              >
                Get The Bunkhouse
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
            What Owners Are Saying
          </h2>
        </div>

        <div className="space-y-4">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-lg p-5">
              <div className="mb-2">
                <Stars size="w-3.5 h-3.5" />
              </div>
              {r.title && <p className="text-sm font-bold text-foreground mb-2">&ldquo;{r.title}&rdquo;</p>}
              <p className="text-sm text-foreground/75 leading-relaxed mb-3">{r.body}</p>
              <p className="text-xs font-bold text-foreground">
                {r.name}{" "}
                <span className="ml-1 text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">
                  Verified Purchase
                </span>
              </p>
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
            Everything you need to know before your next cold sit.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((f, i) => (
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
          <a {...cta("sticky", `Hunt Till Dark: ${SAVE} Off`)}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg mb-2.5 shadow-lg transition-all hover:shadow-xl"
            >
              <span className="whitespace-nowrap">Hunt Till Dark: {SAVE} Off</span>
            </Button>
          </a>
          <p className="text-center text-xs text-white/80 font-semibold">
            Free 1 Year Warranty <span className="text-white/50 mx-1">&bull;</span> 30 Days To Decide{" "}
            <span className="text-white/50 mx-1">&bull;</span> Free US Shipping
          </p>
        </div>
      </div>
    </div>
  )
}
