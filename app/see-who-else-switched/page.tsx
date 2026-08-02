"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Play, Star, X } from "lucide-react"

// ============================================================
// /see-who-else-switched — Yeoman Handle
// DESTINATION FOR DEMO / UGC VIDEO TRAFFIC.
//
// This is NOT a listicle and that is deliberate. A demo video is 30 to 60
// seconds of exposure: they have seen the object in a real hand, on a real
// trimmer, watched it go on, and heard the mechanism explained. They arrive
// product-aware, mechanism-aware AND benefit-aware. Re-teaching the bend to
// them is redundant and slightly patronising.
//
// So what actually stopped them buying?
//   - ONE PERSON IS AN ANECDOTE. They may believe him. They do not yet believe
//     it generalises to their back, their height, their machine.
//   - HE SHOWED IT ON HIS TRIMMER. Not theirs.
//   - IT NOW LOOKS FINDABLE. This is the cost of a good demo: the product reads
//     as a commodity part and the next thought is "I bet it is cheaper
//     elsewhere". That thought goes to a marketplace, not to checkout.
//   - VIDEO FLATTENS MATERIAL QUALITY. Aluminium and stamped steel look the
//     same on a phone.
//
// Hence: proof first, objections second, and the numbered section is framed as
// "questions people ask after watching that video" rather than "reasons",
// because they do not need reasons. The video wall sits ABOVE everything, since
// five more people in their own yards is the fastest possible answer to "that
// worked for that guy".
//
// CTA comes EARLY. On the cold pages delay is a filter. Here it is a tax:
// this is the closest-to-buying traffic in the fleet.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"
const LANDER_TAG = "swc"
const CTA_LABEL = "MAKE THE SWITCH >>"
const OFFER_TEXT = "Save Up To 43% Off + 2 Free Yardwork Guides"
const SOCIAL_PROOF = "4.8 stars • 800 reviews • 40,000+ trimmers upgraded"
const HERO_PROOF = "4.8 · 800 reviews"
const HERO_CTA_NOTE = "60-day trial · Lifetime warranty"

// A hero with a CTA in it has to make a CLAIM, not open a loop. The earlier
// version ("...and this is what it did to the back pain") promised to tell him
// something and then asked for the sale in the same breath, which is why the
// button read as premature. Both halves are now complete statements, so the
// button is something to act on rather than an interruption.
//
// Eyebrow names the product. This traffic watched a demo; being coy about what
// the thing is serves nobody, and referencing the ad ("you just watched him")
// depends on recall that may not survive a scroll or a day.
const HEADLINE_EYEBROW = "The Yeoman Handle™ · Fits every major brand"
const HEADLINE_MAIN = "40,000 Trimmer Owners Swapped The Handle."
const HEADLINE_ACCENT = "The Back Pain Went With It."

// Sits BELOW the hero as its own band, so the fold stays short. Restated from
// the video rather than introduced: he already has these, and seeing them again
// is confirmation, which is what a hero does for warm traffic.
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
  leverage: "/bhwt-bends-loads.webp",
  brandRack: "/bhwt-brand-rack.webp",
  clampDetail: "/gift-clamp-detail.webp",
  flatlay: "/bhwt-flatlay.webp",
  manHoldingTrimmer:
    "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333&width=900",
}

const CLIPS = [
  { poster: "/twb-poster1.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/1966caf46d5a417885bf9fc6106ba477/1966caf46d5a417885bf9fc6106ba477.HD-1080p-4.8Mbps-83902302.mp4?v=0", alt: "A customer using a string trimmer fitted with the Yeoman Handle" },
  { poster: "/twb-poster2.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/70fb239499c4492dba1212ba56855684/70fb239499c4492dba1212ba56855684.HD-1080p-2.5Mbps-83902306.mp4?v=0", alt: "A customer standing upright while trimming with the Yeoman Handle fitted" },
  { poster: "/twb-poster3.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/dbdac73c19ad4877bf61135ac7dd70fe/dbdac73c19ad4877bf61135ac7dd70fe.HD-1080p-4.8Mbps-83902300.mp4?v=0", alt: "Close view of the Yeoman Handle clamped to a trimmer shaft in use" },
  { poster: "/twb-poster4.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/e5d5501b962642339683e5d3f68853cd/e5d5501b962642339683e5d3f68853cd.HD-1080p-3.3Mbps-83902297.mp4?v=0", alt: "An older customer working a fence line with the Yeoman Handle fitted" },
  { poster: "/twb-poster5.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/f0f18bb534b4427dad4f3a2f4419a301/f0f18bb534b4427dad4f3a2f4419a301.HD-1080p-4.8Mbps-83902299.mp4?v=0", alt: "A customer demonstrating the raised grip position on his own trimmer" },
]

// Chosen for RANGE, not volume. The job is turning one anecdote into a pattern,
// so every one of these is deliberately unlike the creator and unlike each
// other: ages 46 to 80, heights to 6'7, spinal surgeries, a grounds crew, a
// declared skeptic. All verbatim from the Customer Voice Bank.
const REVIEWS = [
  {
    tag: "Age 72",
    quote:
      "I am 72 years old, using my big still weed eater hurt my back after about 20 minutes. I just finished about 1 hr. And my back is just fine! Wish I would have bought this years ago.",
  },
  {
    tag: "6'4, back surgery in 2005",
    quote:
      "This thing is a lifesaver. 6'4 and this thing kept me from bending over. Major back surgery in 2005 and first time I could weed eat with no pain. Easy to install. Took 3 minutes.",
  },
  {
    tag: "Age 46",
    quote:
      "6 hours of string trimming this week, crippled me for days. At 46 it's not going to get easier. Solve a problem you get my money.",
  },
  {
    tag: "Grounds crew, large property",
    quote:
      "Should have bought this a long time ago. Definitely makes weed eating a breeze. No more slouching and hurting my back. I use this all the time on a grounds crew on a large scale property.",
  },
  {
    tag: "Started out skeptical",
    quote:
      "I was skeptical that anything could make weedeating easier. I was wrong. I was able to weedeat my entire yard including around my pond, (2 hrs of weedeating) and my back did not get tight or hurt. I usually do half one day then half another.",
  },
  {
    tag: "6'7",
    quote:
      "I am 6'7 and this has saved my back. Ever since they quit making extended shaft weed eaters. I've suffered from intense back pain. But this simple device is awesome.",
  },
  {
    tag: "Multiple back surgeries",
    quote:
      "I've had multiple back surgeries this part. such a backsaver. Don't dread doing the weed eating now.",
  },
  {
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

const QUESTIONS = [
  {
    q: "Will it fit mine? He was using a different trimmer.",
    a: "Almost certainly. It fits 26mm and 28mm shafts, which is what STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER put on their straight and curved-shaft machines, gas and battery alike. Measure your shaft once if you want to be sure. If you own two trimmers, the clamp comes off one and goes onto the other in about a minute, so it is not tied to whichever one you fit it to first.",
  },
  {
    q: "I have seen cheaper ones. Are they the same thing?",
    a: "No, and the difference is in the clamp rather than the bar. See the comparison above. If you do find one cheaper, look at how it grips the shaft: a single stamped face holds for a few weekends and then the vibration finds it, and it creeps down mid-job. That is the part you are actually paying for, along with the lifetime warranty behind it.",
  },
  {
    q: "My back is worse than his. Will this still do anything?",
    a: "The bend is a leverage problem, so removing it helps regardless of what shape your back is in to begin with. Several of the buyers above have had spinal surgery, one of them multiple. That said, this is a handle and not a treatment, so if you have a diagnosed condition it is worth a word with your doctor. The 60-day trial exists so you can find out on your own yard rather than take our word for it.",
  },
]

function reportVideoPlay(index: number) {
  try {
    const w = window as unknown as { fbq?: (...a: unknown[]) => void; clarity?: (...a: unknown[]) => void }
    w.fbq?.("trackCustom", "VideoPlay", { page: LANDER_TAG, clip: index + 1 })
    w.clarity?.("set", "video_play", `${LANDER_TAG}-clip-${index + 1}`)
  } catch {
    // Never let analytics break playback.
  }
}

function CtaButton({ note, className = "" }: { note?: string; className?: string }) {
  return (
    <div className={className}>
      <div className="flex justify-center">
        <a
          href={PDP_URL}
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
        Five More, Same Handle
      </h2>
      <p className="mt-2 text-center text-sm text-[#B8AA98]">Their own yards. Their own trimmers. Nothing staged.</p>
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

export default function SeeWhoElseSwitched() {
  const wallRef = useRef<HTMLElement | null>(null)
  const ctaRef = useRef<HTMLElement | null>(null)
  const [pastWall, setPastWall] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

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
    if (ctaRef.current) {
      const o = new IntersectionObserver(([e]) => setCtaVisible(e.isIntersecting), { threshold: 0.2 })
      o.observe(ctaRef.current)
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

  const showSticky = pastWall && !ctaVisible

  return (
    <div style={PAGE_THEME} className="min-h-screen bg-background text-foreground">
      <div className="bg-foreground py-2.5 text-center">
        <p className="px-4 text-[11px] font-bold uppercase tracking-[0.12em] text-background sm:text-sm">
          {OFFER_TEXT}
        </p>
      </div>

      {/* Hero shape borrowed from the /grow-for-less template: centred logo,
          two-column hero, offer and CTA above the fold. The editorial furniture
          (breadcrumb, byline, text-first open) came off, because this traffic
          just watched a 40-second demo and is not arriving to read an article. */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-4">
          <img src={IMAGES.logo} alt="Field &amp; Harvest Co." className="h-7 w-auto object-contain md:h-9" />
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-6 md:py-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-4 lg:order-1">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary lg:text-left">
              {HEADLINE_EYEBROW}
            </p>

            <h1 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-left lg:text-5xl">
              {HEADLINE_MAIN} <span className="text-primary">{HEADLINE_ACCENT}</span>
            </h1>

            <p className="text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-left">
              The factory loop sits too low on every brand. Forty-six or eighty, fused spine or a good one. It makes
              no difference to the bend.
            </p>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Stars />
              <span className="text-sm font-semibold text-foreground">{HERO_PROOF}</span>
            </div>

            <CtaButton className="pt-1" note={HERO_CTA_NOTE} />
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

          {/* CTA early. This is the closest-to-buying traffic in the fleet and
              delaying it is a tax rather than a filter. */}
          <CtaButton className="mt-8" note={`${OFFER_TEXT}. 60-day trial, lifetime warranty.`} />
          <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>

          <section className="mt-14">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Nothing Like Him, Same Result
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Deliberately picked because they have nothing in common. Different ages, different heights, different
              backs, different machines.
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {REVIEWS.map((r) => (
                <blockquote key={r.tag} className="border-l-4 border-primary bg-muted p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{r.tag}</p>
                  <p className="mt-2 text-base italic leading-relaxed text-muted-foreground">{r.quote}</p>
                  <footer className="mt-3 flex flex-wrap items-center gap-3">
                    <cite className="text-sm font-bold not-italic text-foreground">Verified Buyer</cite>
                    <Stars />
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* One block, as generalisation. They already have the mechanism. */}
          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Why It Lands The Same Way On Every One Of Those Backs
            </h2>
            <img
              src={IMAGES.leverage}
              alt="A chiropractor pointing to the loaded lower back of a hinged-forward skeleton. Caption reads: the bend loads your lower back. It is a leverage problem, not a strength problem."
              loading="lazy"
              decoding="async"
              className="mt-6 aspect-[3/2] w-full rounded-sm object-cover"
            />
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                The reason it works for a man of 46 and a man of 80, and for someone with a fused spine and someone with
                nothing wrong at all, is that it is not treating any of them.
              </p>
              <p>
                Bent forward at the hips, your lower back carries your whole upper body on a long lever. That load is
                geometry. It does not care how strong you are or what shape your spine is in, it only cares about the
                angle.
              </p>
              <p>
                <strong className="font-bold text-foreground">
                  Move the grip out to where your hand already is and the angle goes away.
                </strong>{" "}
                Which is why the result keeps repeating across people who have nothing else in common.
              </p>
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Three Questions People Ask After Watching That
            </h2>

            <div className="mt-8 flex flex-col gap-10">
              {QUESTIONS.map((item, i) => (
                <div key={item.q}>
                  <h3 className="text-pretty text-xl font-bold leading-snug text-foreground sm:text-2xl">
                    {i + 1}. {item.q}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{item.a}</p>

                  {/* The comparison lives inside question 2, where it is asked. */}
                  {i === 1 ? (
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
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              It Goes On The One You Already Own
            </h2>
            <img
              src={IMAGES.brandRack}
              alt="Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft"
              loading="lazy"
              decoding="async"
              className="mt-6 aspect-[3/2] w-full rounded-sm object-cover"
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whatever is leaning against your shed wall, it almost certainly has a 26mm or 28mm shaft, because that is
              what STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER all build, gas and battery, straight and curved.
              Three minutes with the allen key in the box. No drilling, no cutting, and the factory handle stays on.
            </p>
          </section>

          <section ref={ctaRef} className="mt-14">
            <div className="overflow-hidden rounded-lg border-2 border-foreground">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-muted sm:w-2/5 sm:shrink-0">
                  <img
                    src={IMAGES.flatlay}
                    alt="The Yeoman Handle laid on a concrete path beside worn leather gloves, secateurs and a pot of basil"
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:w-3/5 sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Field &amp; Harvest Co.</p>
                  <h2 className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                    The Yeoman Handle&trade;
                  </h2>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <Stars />
                    <span className="text-sm text-muted-foreground">4.8 from 800 reviews</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2.5">
                    <span className="text-3xl font-bold text-foreground">$39</span>
                    <span className="text-base text-muted-foreground line-through">$60</span>
                  </div>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {[
                      "Fits 26 and 28mm shafts, gas or battery",
                      "Three minutes, allen key included",
                      "60-day trial, lifetime warranty",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={PDP_URL}
                    className="mt-5 inline-block rounded-md bg-primary px-6 py-4 text-center text-base font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:text-lg"
                  >
                    {CTA_LABEL}
                  </a>
                </div>
              </div>
              <p className="border-t-2 border-foreground bg-foreground px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-background">
                {OFFER_TEXT}
              </p>
            </div>
          </section>

          <section className="mt-12">
            <div className="border-4 border-foreground p-5 sm:p-7">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                60 Days On Your Own Yard
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  You have watched six people tell you it worked. That is still six other people. Bolt it on, work a full
                  Saturday the way you normally would, and find out on your own back.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  If it cannot tell the difference within 60 days we refund you in full, and you do not have to send it
                  back. The lifetime warranty on the hardware runs alongside it.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Everything Else
            </h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
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
              <AccordionItem value="warranty">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  What does the lifetime warranty actually cover?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  The handle and the bracket hardware, for as long as you own it. It is a machined part living outdoors
                  on a vibrating tool, so if it ever cracks, strips or stops holding its position we replace it. That
                  runs alongside the separate 60-day trial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="twomachines">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  I have two trimmers. Do I need two?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Not unless you want to save the swap. It comes off one shaft and onto another in about a minute, so one
                  handle covers both machines. Plenty of buyers do run a second so they are not moving it, which is what
                  the two-pack is for.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>

        <section className="mt-12 bg-secondary py-10">
          <div className="mx-auto max-w-3xl px-5">
            <img
              src={IMAGES.manHoldingTrimmer}
              alt="A man standing fully upright, back straight, hand out on the raised Yeoman grip while trimming a lawn edge"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Yeoman clamps onto the trimmer you already own and extends the grip out to meet your hand, so there is
              nothing left to bend down to. Three minutes with the included allen key, no drilling, and it fits 26mm and
              28mm shafts across every major brand, gas or battery.
            </p>
            <CtaButton className="mt-7" />
            <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>
          </div>
        </section>
      </main>

      <div
        aria-hidden={!showSticky}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] backdrop-blur transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <p className="hidden flex-1 text-sm font-bold leading-snug text-foreground sm:block">{OFFER_TEXT}</p>
          <a
            href={PDP_URL}
            tabIndex={showSticky ? 0 : -1}
            className="w-full rounded-md bg-primary px-6 py-3.5 text-center text-base font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:w-auto"
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>

      <footer className="border-t border-border pb-28 pt-8 sm:pb-8">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            &copy; 2026 Field &amp; Harvest Co. Individual results vary. Reviews are from verified buyers. This page is
            advertising and is not medical advice; talk to your doctor about persistent back pain.
          </p>
        </div>
      </footer>
    </div>
  )
}
