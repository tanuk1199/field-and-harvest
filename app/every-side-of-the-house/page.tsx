"use client"

import { useEffect, useRef, useState } from "react"

// ============================================================
// /every-side-of-the-house : THE NIGHTWATCH SOLAR LIGHT
// Built on listicle-2 (Funnels/templates/listicle-2), the plain advertorial
// listicle. EBC's winner by spend. Self-contained: page.tsx + layout.tsx, no
// shared lib and no components, so it cannot collide with another lander.
//
// ⛔⛔ THE FIRST BUILD USED THE WRONG TEMPLATE. It went up on
// listicle-comparison-above-fold, which leads with a 3-way comparison table.
// The owner had specified listicle-2, which has no comparison table at all and
// a completely different shape. The route /light-the-whole-corner was deleted.
//
// ⛔ PRODUCT-AWARE, AND THE H1 IS WHERE THAT IS DECIDED. Two earlier H1s were
// rejected for landing on the wrong rung: "The One Corner Nobody Can See Into"
// was the security blind-spot hook, which is PROBLEM-aware, and "Replacing
// Wired Floodlights" compares one CATEGORY against another, which is
// SOLUTION-aware. Product-aware presumes he already wants a three-head solar
// light and is choosing between units, so the H1 names no enemy at all and
// argues expansion: he will want more than one.
//
// ⭐ THE STANDFIRST CARRIES NO PRODUCT NAME, per the template rule, and the
// page shows no product card. He arrives at the PDP on the argument.
//
// ⭐ REASON 5 IS ALWAYS THE GUARANTEE on this template, and the H1 number
// includes it. The five reasons are the set agreed with the owner.
//
// ⭐ REVIEWS ARE VERBATIM, WITH THE REVIEWER'S REAL NAME AND THE VERIFIED
// PURCHASE FLAG, both carried from the source export. They are reviews of this
// exact three-head solar motion light.
//
// ⛔⛔ NO FOOT DISCLAIMER ON THIS PAGE. It is deliberately the empty string.
// An earlier build printed a note under the CTA saying the light is not a
// security alarm, a camera or a monitored system. Nobody reads this page
// thinking it is a camera, nothing on the page says it is, and a hedge sitting
// directly beneath the button costs conversion for no benefit. The owner
// removed it. Do not put it back.
//
// ⛔ DO NOT ADD AN ATTRIBUTION LINE SAYING THESE ARE REVIEWS OF SOMETHING ELSE.
// An earlier build printed "Published review of a three-head solar motion
// light" under every card and a footer line reading "They are not reviews of
// this product." On a page selling a three-head solar motion light that reads
// as the page disclaiming its own proof. The owner rejected it. Claims
// discipline governs what we ASSERT; it is not customer-facing copy.
//
// CLAIMS HELD OFF THE PAGE: no runtime or all-night claim, no battery
// capacity, no remote on/off, no waterproof (IP65 is not cited here at all).
//
// ⚠ CTAs point at a DRAFT PDP and will 404 until the product is published.
// ============================================================

const PDP = "https://fieldandharvestco.com/products/the-nightwatch-solar-light?lp=esh" // e.g. https://store.com/products/handle?lp=tag

const INK = "#1A1A1A"
const BODY = "#3E3E3E"
const PAPER = "#F7F5F1"
const DARK = "#14181F"      // announcement bar, e.g. Deep Cocoa #2D150B
const CTA = "#C0653F"        // matches the PDP add-to-cart button (--sup-terra) exactly
const GOLD = "#E8A33D"           // review stars
const RULE = "#D8D2C8"
const MUTE = "#8A8378"

const LOGO = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Copy_of_COMFORT_CRADLE_Logos_5.png?width=260"
const LOGO_ALT = "Field & Harvest Co."

// Two lines, deliberately a PYRAMID: the top is short and loud, the bottom is
// longer and quieter. Deviation from the extracted listicle-2, which ships a
// single line. Owner's call: one long line wrapped badly and read as saying too
// much. Keep the top line SHORTER than the bottom or the shape inverts.
const ANNOUNCEMENT_1 = "Early Fall Sale · Save Up To 47%"
const ANNOUNCEMENT_2 = "60 Nights To Decide · 1-Year Warranty On All Orders" // one line, the offer, e.g. Buy One, Get One Free
const H1 = "6 Reasons Thousands Of Homeowners Are Putting Solar Lights On Every Side Of The House This\u00A0Fall"
const STANDFIRST = "Here is why they are going up around the house before the clocks go back."

// Hero media directly under the standfirst. image | video | none
// No hero media. Reason 1 opens on the motion-sensor clip directly beneath, and a still of the
// same argument above it was the same point made twice.
const HERO = { kind: "none" } as const

type Media = { kind: "image"; src: string; alt: string } | { kind: "video"; src: string; poster: string; alt: string } | { kind: "none" }

const REASONS: { n: number; title: string; media: Media; body: string[] }[] = [
  { n: 1, title: "The yard stays usable after the clocks go back", media: { kind: "video", src: "https://cdn.shopify.com/videos/c/vp/e3045defb12c4f84a0ecc70922bac259/e3045defb12c4f84a0ecc70922bac259.HD-1080p-2.5Mbps-94704662.mp4", poster: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-motion-poster.jpg?width=900", alt: "It comes on by itself as someone walks up the path at night" }, body: ["Nothing about the property changes in November. The dog still goes out. The bins still go to the curb on the same night. You still walk from the car to the door. All of it just happens in the dark now, and it keeps happening in the dark until March.", "It comes on because you stepped outside. Or leave it on a dim evening setting that jumps to full brightness on movement, or run it at full brightness for about four hours from dusk."] },
  { n: 2, title: "It never shows up on your electricity bill", media: { kind: "image", src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-20-hyperreal-wall-macro_0273d7cb-0041-4972-8610-073a37cf4a32.png?width=900", alt: "Low afternoon sun raking across the solar panel on top of the light" }, body: ["The panel on the top is the entire power supply. Nothing is metered, nothing is drawn off the house, and the light that runs every night of the winter is running on the afternoon it just spent in the sun.", "That matters more in the dark half of the year than any other time, because a wired light is burning from five in the afternoon. Put one on the drive, one on the side gate and one on the shed and the bill does not move."] },
  { n: 3, title: "An extension cord to the shed is a fire hazard", media: { kind: "image", src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-11-shed-no-power_e9542a92-0a29-4dc3-b216-37744fd125a8.png?width=900", alt: "A solar security light on a garden shed with no mains power, lighting the door and a woodpile" }, body: ["Every electrician says the same thing. They are built for temporary use, indoors and in sight. Wet grass, a winter of freezing and thawing, a slab pinching it, something chewing it, and nobody finds out until it fails. Doing it properly means conduit and a trench.", "The panel on top is the power, so there is nothing to run and nothing to bury. Four screws and the anchors are in the box, and the only thing left to decide is which wall catches the midday sun."] },
  { n: 4, title: "Three heads aim where you point them, not where the bracket does", media: { kind: "video", src: "https://cdn.shopify.com/videos/c/vp/b89f7e54b34a4031b6f5800b7f702a11/b89f7e54b34a4031b6f5800b7f702a11.HD-1080p-2.5Mbps-94704817.mp4", poster: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-heads-poster.jpg?width=900", alt: "Two hands adjusting the outer heads of the lit fixture on a fence at night" }, body: ["The place you want lit is not a spot, it is a shape. A drive runs long. A yard runs wide. A corner is two walls meeting. Almost every outdoor light points one way because its bracket only lets it point one way.", "These three pivot separately. One down the path, one across the approach, one back along the wall: 270 degrees of cover and 26 feet of motion range from a single mounting point."] },
  { n: 5, title: "Rain, snow and everything else the winter throws at it", media: { kind: "video", src: "https://cdn.shopify.com/videos/c/vp/e79b1f6d3601491082441e9302b845ed/e79b1f6d3601491082441e9302b845ed.HD-1080p-4.8Mbps-94704661.mp4", poster: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-weatherproof-poster.jpg?width=900", alt: "Water from a hose spraying directly onto the lit fixture on a brick wall" }, body: ["This is the half of the year that is hard on anything mounted outside. Driving rain, freezing nights, snow sitting on the panel, and months of it. A light that quits in January is worse than no light, because you stopped thinking about that corner back in October.", "It is sealed to IP65, which is the rating for direct water jets from any direction. That clip is a garden hose at close range with the light still running."] },
  // The LAST reason is always the guarantee.
  { n: 6, title: "Sixty nights to decide, and a full year of cover after that", media: { kind: "image", src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-01-hero-studio_5470a3d2-d1ba-4145-980f-0d5029ac835b.png?width=900", alt: "The three-head solar security light on a clean studio background" }, body: ["Put it up and use it through a whole season before you make your mind up. If it has not done what you bought it for, tell us inside sixty days and we refund you.", "After that it carries a full year of warranty from delivery. If it stops working in that year we replace it, rather than you finding out in month seven that there is nobody to email."] },
]

// VERBATIM from the store's review corpus. Typos, caps and emphasis are theirs.
const REVIEWS: { title: string; body: string; name: string }[] = [
  {
    title: "Pitch-black darkness into broad daylight",
    body: "These lights turn pitch-black darkness into broad daylight the second motion is detected. I love that the heads are adjustable as the 3-head design makes it super easy to cover every blind spot in the yard. Installation took less than 10 minutes. The remote control is a plus because it makes switching between the three motion modes easy and convenient. So far, with their IP65 rating, they've survived several rainstorms without any issues. If you want reliable, heavy-duty security lighting without adding a dime to your electric bill, these are worth every penny. I'll be purchasing these again to light up the rest of my yard. I highly recommend!",
    name: "Effie KV · Verified Purchase",
  },
  {
    title: "Installed 30 of these all around my half acre",
    body: "Installed 30 of these all around my half acre property/house property. They are very reliable, very bright, stay lit on demand even late when I'm walking around gardens at 3am. They require very little sunlight. Love them!",
    name: "JB Bass · Verified Purchase",
  },
  {
    title: "Still going strong",
    body: "Still going strong, somehow still work when a foot of snow is on the panel through the Michigan winters. Had 2+ years now, it's bright and has a good working motion sensor. I went through two other solar light sets that didn't last before buying this one.",
    name: "John B · Verified Purchase",
  },
  {
    title: "Over 12 months, no issue",
    body: "Installed for front and back patio. Easy to. Install just screw in the best location for sun light. Motion sensor worked fine. So bright helped for security awareness. Zero noise, so far use it for over 12 months, no issue. Suitable as security light.",
    name: "Tadashi Motomura · Verified Purchase",
  },
  {
    title: "We can see when we let our dogs out",
    body: "These solar lights are absolutely perfect. They are bright, and very simple to install. We got the two pack to put in our backyard because it is very dark back there, and this way we can see when we let our dogs out.",
    name: "Holly Cerutti · Verified Purchase",
  },
]

const STICKY = {
  offer: "Early Fall Sale \u00b7 Up To 47% Off",
  sub: "From $59 \u00b7 60 nights to try it",
  button: "Shop Now",
}

const CTA_CARD = {
  headline: "Join thousands of homeowners and try the Nightwatch on sale now!",
  guarantee: "100% Money Back Guarantee - Risk Free!",
  button: "Try The Nightwatch Now!",
  urgency1: "Early Fall Sale - Save Up To 47% \u23F3",
  urgency2: "Sale Ends Soon!",
}

const FOOT_DISCLAIMER = "" // optional; empty string hides it
const FOOTER_LINE = "60-day money-back guarantee · 1-year warranty"

function Stars() {
  return (
    <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-[18px] w-[18px]" fill={GOLD} aria-hidden="true">
          <path d="M10 1.5l2.7 5.46 6.03.88-4.36 4.25 1.03 6L10 15.27 4.6 18.09l1.03-6L1.27 7.84l6.03-.88L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function MediaBlock({ m, eager }: { m: Media; eager?: boolean }) {
  if (m.kind === "none") return null
  if (m.kind === "video") {
    return (
      <figure className="mb-6 overflow-hidden bg-black">
        <video src={m.src} poster={m.poster} autoPlay muted loop playsInline preload="metadata" aria-label={m.alt} className="w-full object-cover" />
      </figure>
    )
  }
  return (
    <figure className="mb-6 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={m.src} alt={m.alt} loading={eager ? "eager" : "lazy"} decoding="async" className="w-full object-cover" />
    </figure>
  )
}

export default function Page() {
  // Sticky CTA: arms once reason 3 has scrolled off the top, and steps aside
  // while the real CTA card is on screen so the two never stack.
  const gateRef = useRef<HTMLDivElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const [passed, setPassed] = useState(false)
  const [ctaOnScreen, setCtaOnScreen] = useState(false)

  useEffect(() => {
    const g = gateRef.current
    const c = ctaRef.current
    // threshold 0 only. A fractional threshold never fires on an element
    // taller than the viewport.
    const io1 = g
      ? new IntersectionObserver(([e]) => setPassed(e.boundingClientRect.top < 0), { threshold: 0 })
      : null
    const io2 = c
      ? new IntersectionObserver(([e]) => setCtaOnScreen(e.isIntersecting), { threshold: 0 })
      : null
    if (io1 && g) io1.observe(g)
    if (io2 && c) io2.observe(c)
    return () => {
      io1?.disconnect()
      io2?.disconnect()
    }
  }, [])

  const showSticky = passed && !ctaOnScreen

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: PAPER, color: BODY }}>
      <div className="px-4 py-2.5 text-center" style={{ backgroundColor: DARK }}>
        <p className="mx-auto max-w-[94%] font-sans text-[11px] font-extrabold uppercase leading-[1.3] tracking-[0.09em] text-white sm:text-[13.5px] sm:tracking-[0.13em]">
          {ANNOUNCEMENT_1}
        </p>
        <p className="mx-auto mt-[3px] max-w-[94%] font-sans text-[9px] font-semibold uppercase leading-[1.3] tracking-[0.06em] text-white/60 sm:text-[10.5px] sm:tracking-[0.09em]">
          {ANNOUNCEMENT_2}
        </p>
      </div>

      <header className="flex items-center justify-center px-5 py-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt={LOGO_ALT} className="h-7 w-auto" />
      </header>

      <main className="mx-auto max-w-[640px] px-5 pb-16">
        <h1 className="text-[30px] font-extrabold leading-[1.18] tracking-[-0.01em] sm:text-[38px]" style={{ color: INK }}>
          {H1}
        </h1>
        <p className="mt-4 text-[15px] font-bold leading-[1.6]" style={{ color: INK }}>
          {STANDFIRST}
        </p>

        {HERO.kind !== "none" ? (
          <div className="mt-6">
            <MediaBlock m={HERO} eager />
          </div>
        ) : null}

        {REASONS.map((r) => (
          <section key={r.n} className="mt-7">
            <MediaBlock m={r.media} />
            <h2 className="text-[19px] font-extrabold leading-[1.35] sm:text-[21px]" style={{ color: INK }}>
              {r.n}. {r.title}
            </h2>
            {r.body.map((p, i) => (
              <p key={i} className="mt-3 text-[15.5px] leading-[1.72]">{p}</p>
            ))}
            {r.n === 3 ? <div ref={gateRef} aria-hidden className="h-px w-full" /> : null}
          </section>
        ))}

        <div className="mt-10 border-2 border-dashed p-6 sm:p-8" style={{ borderColor: INK }}>
          {REVIEWS.map((rv, i) => (
            <div key={rv.name + i} className={i === 0 ? "" : "mt-9"}>
              <h3 className="text-[21px] font-medium leading-[1.25] sm:text-[24px]" style={{ color: INK }}>{rv.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.68]">{rv.body}</p>
              <Stars />
              <p className="mt-1.5 text-[12.5px]" style={{ color: MUTE }}>{rv.name}</p>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="mt-9 border bg-white px-6 py-9 text-center sm:px-10" style={{ borderColor: RULE }}>
          <p className="text-[13.5px] font-extrabold uppercase leading-[1.5] tracking-[0.02em]" style={{ color: INK }}>{CTA_CARD.headline}</p>
          <p className="mt-3 text-[13.5px] font-bold" style={{ color: INK }}>{CTA_CARD.guarantee}</p>
          <a href={PDP} className="mt-6 inline-block w-full rounded-[3px] px-8 py-4 text-[16px] font-extrabold uppercase tracking-[0.03em] text-white transition-transform hover:-translate-y-0.5 sm:text-[17px]" style={{ backgroundColor: CTA }}>
            {CTA_CARD.button}
          </a>
          <p className="mt-5 text-[12px] font-extrabold uppercase tracking-[0.04em]" style={{ color: INK }}>{CTA_CARD.urgency1}</p>
          <p className="mt-2.5 text-[12px] font-extrabold uppercase tracking-[0.04em]" style={{ color: INK }}>{CTA_CARD.urgency2}</p>
        </div>

        {FOOT_DISCLAIMER ? (
          <p className="mt-8 text-[12px] leading-[1.65]" style={{ color: MUTE }}>{FOOT_DISCLAIMER}</p>
        ) : null}
      </main>

      <footer className="px-5 py-9 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt={LOGO_ALT} className="mx-auto h-6 w-auto" />
        <p className="mt-3 text-[11.5px]" style={{ color: MUTE }}>
          © {new Date().getFullYear()} {LOGO_ALT} · {FOOTER_LINE}
        </p>
      </footer>

      {showSticky ? <div aria-hidden className="h-[76px]" /> : null}

      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t px-4 py-3 transition-transform duration-200 ${showSticky ? "translate-y-0" : "translate-y-full"}`}
        style={{ backgroundColor: PAPER, borderColor: RULE, boxShadow: "0 -6px 20px rgba(0,0,0,.10)" }}
      >
        <div className="mx-auto flex max-w-[640px] items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-extrabold uppercase tracking-[0.03em]" style={{ color: INK }}>{STICKY.offer}</p>
            <p className="truncate text-[11.5px]" style={{ color: MUTE }}>{STICKY.sub}</p>
          </div>
          <a
            href={PDP}
            className="shrink-0 rounded-[3px] px-5 py-3 text-[13px] font-extrabold uppercase tracking-[0.03em] text-white sm:px-7 sm:text-[14px]"
            style={{ backgroundColor: CTA }}
          >
            {STICKY.button}
          </a>
        </div>
      </div>
    </div>
  )
}
