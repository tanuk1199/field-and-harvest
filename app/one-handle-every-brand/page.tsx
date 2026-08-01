"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Play, Star, X } from "lucide-react"

// ============================================================
// /one-handle-every-brand — Yeoman Handle — CF003
//
// Dedicated funnel for the CF003 fleet (56 statics + 11 video scripts), broken
// out of /the-trimmer-switch. CF003 is the BRAND / ANTI-UPGRADE angle, not the
// age angle: the enemy is the belief that a better trimmer fixes the back pain.
// No age content anywhere on this page, by design, matching the CF creative.
//
// AWARENESS: solution to product-aware, and deliberately product-forward. The
// CF003 ads name the Yeoman and show it clamping on, so a page that pretends he
// has never heard of it wastes the first screen. Product is revealed in the
// deck, the comparison sits above the fold, the first CTA comes early.
// That is the opposite of /back-hurts-when-trimming and it is intentional.
//
// THE COMPARISON. Columns are DECISIONS, not objects. A new trimmer is not a
// peer of a factory handle, it contains one, so comparing them as objects has a
// logical hole in it. As choices a man can make on Saturday they are peers.
// The bend row is the argument: columns 2 and 3 give the SAME answer, which is
// the whole CF003 case rendered visually. Owned out loud in the verdict rather
// than left to look like padding.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"
const LANDER_TAG = "ohe"
const CTA_LABEL = "CHECK AVAILABILITY >>"
const OFFER_TEXT = "Save Up To 43% Off + 2 Free Yardwork Guides"
const SOCIAL_PROOF = "4.8 stars • 800 reviews • 40,000+ trimmers upgraded"

const HEADLINE_MAIN = "5 Reasons One Handle Ends The Back Pain Caused By Every Trimmer Brand"
const HEADLINE_BRACKET = "(And Why Buying Another Trimmer Will Not)"

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
  author: "/bhwt-author-walt.webp",
  brandRack: "/bhwt-brand-rack.webp",
  handOnBack: "/bhwt-hand-on-back.webp",
  spineLeverage: "/bhwt-bends-loads.webp",
  flatlay: "/bhwt-flatlay.webp",
  uprightSenior: "/bhwt-verified-72.webp",
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

// ── The comparison. Columns are decisions, not objects. ──────
type Row = { label: string; yeoman: string; keep: string; buy: string; kill?: boolean }
const ROWS: Row[] = [
  { label: "What it costs you", yeoman: "$39 today", keep: "Nothing", buy: "Around $300" },
  { label: "The forward bend", yeoman: "Gone", keep: "Forces it", buy: "Forces it. Same low loop.", kill: true },
  { label: "Fits the machine in your shed", yeoman: "Yes, 26 and 28mm", keep: "It is the machine", buy: "You replace the machine" },
  { label: "Time until it is fixed", yeoman: "About 3 minutes", keep: "Never", buy: "A shopping trip and a weekend" },
  { label: "Backed by", yeoman: "Lifetime warranty", keep: "Nothing", buy: "The engine, not your back" },
]

function ComparisonTable() {
  return (
    <section className="mt-8">
      <div className="overflow-x-auto rounded-lg border-2 border-foreground">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="bg-foreground text-background">
              <th className="p-3 text-xs font-bold uppercase tracking-wide sm:text-sm">Your three options</th>
              <th className="bg-primary p-3 text-xs font-bold uppercase tracking-wide text-primary-foreground sm:text-sm">
                Bolt on the Yeoman
              </th>
              <th className="p-3 text-xs font-bold uppercase tracking-wide sm:text-sm">Keep what you have</th>
              <th className="p-3 text-xs font-bold uppercase tracking-wide sm:text-sm">Buy another trimmer</th>
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
                    <span className={r.kill ? "font-bold text-foreground" : ""}>{r.keep}</span>
                  </span>
                </td>
                <td className="p-3 text-sm text-muted-foreground">
                  <span className="flex items-start gap-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
                    <span className={r.kill ? "font-bold text-foreground" : ""}>{r.buy}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Owning the identity out loud. Two of the three columns answer the bend
          row the same way, and that IS the CF003 argument. Left unremarked it
          would read as a padded table. */}
      <p className="mt-4 border-l-4 border-primary bg-muted p-4 text-base leading-relaxed text-foreground sm:text-lg">
        <strong className="font-bold">Read the second row again.</strong> Two of those three columns end in exactly the
        same place, and only one of them costs you three hundred dollars to get there.
      </p>
    </section>
  )
}

function VideoWall({ innerRef }: { innerRef: React.RefObject<HTMLElement | null> }) {
  const [playing, setPlaying] = useState<number | null>(null)
  return (
    <section ref={innerRef} className="mt-14 rounded-lg bg-[#3D332A] px-5 py-8 sm:px-7">
      <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#E8DFD2]">See It In Action</h2>
      <p className="mt-2 text-center text-sm text-[#B8AA98]">Real customers, their own yards, their own trimmers.</p>
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

type Reason = { number: string; heading: string; image: string; alt: string; body: React.ReactNode }

const REASONS: Reason[] = [
  {
    number: "1",
    heading: "Every brand bolts on the same low loop",
    image: IMAGES.brandRack,
    alt: "Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft",
    body: (
      <>
        <p>
          STIHL. Echo. Ryobi. EGO. Husqvarna. Different engines, different prices, different colours on the shroud, and
          the same loop handle mounted low on the shaft on every one of them.
        </p>
        <p>
          That is not a coincidence and it is not a defect. It is the cheapest handle to make and it has been the
          default for decades.{" "}
          <strong className="font-bold text-foreground">Whichever one is in your shed, you were handed the same grip.</strong>
        </p>
      </>
    ),
  },
  {
    number: "2",
    heading: "The next trimmer arrives with it too",
    image: IMAGES.handOnBack,
    alt: "Older man straightening up with a hand pressed to his lower back after trimming",
    body: (
      <>
        <p>
          This is where the money goes. The back starts complaining, the machine gets blamed, and the fix looks like a
          newer and lighter one.
        </p>
        <p>
          So you buy it. It starts on the first pull, it weighs a pound and a half less, and the grip is in the same
          place, because the brand you switched to builds it there as well. Three hundred dollars later you are standing
          in the same position you were standing in before.
        </p>
        <p>
          <strong className="font-bold text-foreground">The upgrade path does not lead anywhere</strong>, and it took a
          lot of men a lot of money to find that out.
        </p>
      </>
    ),
  },
  {
    number: "3",
    heading: "It is the bend that hurts you, not the weight",
    image: IMAGES.spineLeverage,
    alt: "A chiropractor pointing to the loaded lower back of a hinged-forward skeleton. Caption reads: the bend loads your lower back. It is a leverage problem, not a strength problem.",
    body: (
      <>
        <p>
          Here is why lighter never helped. Hinge forward at the hips and hold it, and your lower back carries your
          entire upper body on a long lever. That load has almost nothing to do with what the trimmer weighs.
        </p>
        <p>
          Take a pound and a half off a machine you are still bent over and you have changed a rounding error. Take away
          the bend and the lever disappears completely.
        </p>
        <p>That is the whole difference between the two purchases.</p>
      </>
    ),
  },
  {
    number: "4",
    heading: "One clamp fits the machine you already own",
    image: IMAGES.manHoldingTrimmer,
    alt: "A man standing fully upright, back straight, hand out on the raised Yeoman grip while trimming a lawn edge",
    body: (
      <>
        <p>
          The Yeoman clamps to the shaft and extends the grip out to where your hand already falls, so there is nothing
          left to bend down to. The fixed angle that does it is the{" "}
          <strong className="font-bold text-foreground">Plumb-Set&trade;</strong>.
        </p>
        <p>
          It fits 26mm and 28mm shafts, which covers straight and curved shafts across STIHL, Echo, Husqvarna, Ryobi,
          EGO and BLACK+DECKER, gas or battery. Three minutes with the allen key in the box. No drilling, no cutting,
          and the factory handle stays exactly where it is.
        </p>
        <p>
          Because it is brand-agnostic, it also moves.{" "}
          <strong className="font-bold text-foreground">
            If you own two trimmers, it goes on whichever one you picked up today.
          </strong>
        </p>
      </>
    ),
  },
  {
    number: "5",
    heading: "You are risking a handle, not another machine",
    image: IMAGES.uprightSenior,
    alt: "A 72-year-old verified buyer standing fully upright in his yard holding a trimmer fitted with the Yeoman Handle, beside his five-star review",
    body: (
      <>
        <p>
          The last trimmer you bought did not come with a promise about your back. This does. Bolt it on, work a full
          Saturday the way you normally would, and if your back cannot tell the difference inside 60 days you get a full
          refund. You do not even have to send it back.
        </p>
        <p>
          The <strong className="font-bold text-foreground">Hold-Fast&trade;</strong> bracket carries a lifetime
          warranty on top of that, which is longer than the warranty on the machine it clamps to.
        </p>
      </>
    ),
  },
]

const REVIEWS = [
  {
    title: "My back is just fine!",
    quote:
      "I am 72 years old, using my big still weed eater hurt my back after about 20 minutes. I just finished about 1 hr. And my back is just fine! Wish I would have bought this years ago.",
    author: "Verified Buyer",
  },
  {
    title: "I was skeptical. I was wrong.",
    quote:
      "I was skeptical that anything could make weedeating easier. I was wrong. I was able to weedeat my entire yard including around my pond, (2 hrs of weedeating) and my back did not get tight or hurt. I usually do half one day then half another.",
    author: "Verified Buyer",
  },
  {
    title: "Fits a Stihl FS91 with no problems.",
    quote:
      "Holy crap! This is a back-saver! Going to send one to my buddy - he needs this in his life! Fits a Stihl FS91 with no problems.",
    author: "Verified Buyer",
  },
  {
    title: "Years of landscaping.",
    quote:
      "Game changer! Spent years killing my back doing landscaping, this would've been worth its weight in gold back then. Definitely grabbing one!",
    author: "Verified Buyer",
  },
  {
    title: "Foregoing the lumbar brace altogether.",
    quote:
      "This handle is well worth the money, it really took the strain off my lumbar area letting me stand straighter. I am foregoing the lumbar back brace all together.",
    author: "Verified Buyer",
  },
  {
    title: "Two lower back surgeries.",
    quote:
      "I am usually leery of ads like these, but it looked like a good idea. I have had two lower back surgeries, and weed eating killed me.",
    author: "Verified Buyer",
  },
]

const FAQS = [
  {
    question: "Will it fit my trimmer?",
    answer:
      "Almost certainly. It fits 26mm and 28mm shafts, which covers the straight and curved-shaft trimmers sold by STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER, in both gas and battery. Measure the shaft once and check it against those two sizes. If you own more than one machine, the clamp comes off and goes onto the other in about a minute.",
  },
  {
    question: "How is this different from a shoulder harness?",
    answer:
      "A harness moves the weight off your arms and onto your shoulders, which genuinely helps with fatigue. It does not change where the grip sits, so you are still bent over the same way for the same twenty minutes. The Yeoman changes the angle rather than the load. If your complaint is tired arms, a harness is a reasonable buy. If your complaint is your lower back, the bend is what has to go.",
  },
  {
    question: "Would a lighter or battery trimmer solve this instead?",
    answer:
      "It solves a different problem. Lighter helps your arms and your shoulders. It does nothing about the forward bend, because battery machines mount the loop handle in the same low position gas ones do. That is why men who upgrade often report the same lower-back complaint on the new machine within a few weeks.",
  },
  {
    question: "How is this different from the cheap bolt-on handles?",
    answer:
      "Most of them are thin stamped steel gripping the shaft on a single face. They hold until the vibration finds them, then they creep down the shaft mid-job and you are back to bending with a loose bar rattling on the machine. The Hold-Fast™ is reinforced with a dual-contact pad that grips two opposite faces, on an aluminum-alloy arm, and it carries a lifetime warranty.",
  },
  {
    question: "How hard is it to install?",
    answer:
      "Three minutes with the allen key that comes in the box. The bracket clamps around the shaft and slides to wherever your hand naturally falls, then tightens down. No drilling, no cutting, no permanent change to the trimmer, and the factory handle stays on. If someone else in the house is a different height, loosen it and slide it.",
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function OneHandleEveryBrand() {
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
      {/* Product-forward lane. The CF003 ads already named the product and the
          offer, so the banner is congruent rather than intrusive here. */}
      <div className="bg-primary py-2.5 text-center">
        <p className="px-4 text-xs font-bold uppercase tracking-wide text-primary-foreground sm:text-sm">{OFFER_TEXT}</p>
      </div>

      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-4">
          <nav aria-label="Breadcrumb">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
              Home &gt; Yard Care &gt; Trimmers
            </p>
          </nav>
        </div>
      </header>

      <main>
        <article className="mx-auto max-w-3xl px-5 pt-8">
          <h1 className="text-pretty text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {HEADLINE_MAIN}{" "}
            <span className="block pt-2 text-xl font-bold leading-snug text-muted-foreground sm:text-2xl md:text-3xl">
              {HEADLINE_BRACKET}
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <img src={IMAGES.author} alt="Walt Brenner" className="h-12 w-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">By Walt Brenner</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Field &amp; Harvest Co. &middot; 2 June 2026
              </span>
            </div>
          </div>

          <p className="mt-7 text-lg leading-relaxed text-foreground sm:text-xl">
            If your back locks up twenty minutes into the trimming, the machine is not the variable. Five brands, five
            price points, and every one of them mounts the grip in the same low place. Here is the comparison nobody
            selling trimmers wants to put in front of you.
          </p>

          <ComparisonTable />

          <CtaButton className="mt-8" note={`${OFFER_TEXT}. 60-day trial, lifetime warranty.`} />
          <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>

          <div className="mt-14 flex flex-col gap-14">
            {REASONS.map((r) => (
              <section key={r.number}>
                <img src={r.image} alt={r.alt} loading="lazy" decoding="async" className="aspect-[3/2] w-full rounded-sm object-cover" />
                <h2 className="mt-6 text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
                  {r.number}. {r.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {r.body}
                </div>
              </section>
            ))}
          </div>

          <VideoWall innerRef={wallRef} />

          <section className="mt-14">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              What They Said After They Stopped Buying Trimmers
            </h2>
            <p className="mt-2 text-base text-muted-foreground">4.8 out of 5 from 800 reviews</p>
            <div className="mt-7 flex flex-col gap-5">
              {REVIEWS.map((r) => (
                <blockquote key={r.title} className="border-l-4 border-primary bg-muted p-5">
                  <p className="text-base font-bold text-foreground">&ldquo;{r.title}&rdquo;</p>
                  <p className="mt-2 text-base italic leading-relaxed text-muted-foreground">{r.quote}</p>
                  <footer className="mt-4 flex flex-wrap items-center gap-3">
                    <cite className="text-sm font-bold not-italic text-foreground">{r.author}</cite>
                    <Stars />
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section ref={ctaRef} className="mt-12">
            <img
              src={IMAGES.flatlay}
              alt="The Yeoman Handle laid on a concrete path beside worn leather gloves, secateurs and a pot of basil"
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-sm bg-muted object-cover"
            />
            <p className="mt-7 text-center text-base font-bold uppercase tracking-wide text-foreground">
              Today: {OFFER_TEXT}
            </p>
            <CtaButton className="mt-6" note="Fits 26mm and 28mm shafts across every major brand, gas or battery." />
            <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>
          </section>

          <section className="mt-12">
            <div className="border-4 border-foreground p-5 sm:p-7">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                60-Day &ldquo;It Was The Handle&rdquo; Guarantee
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Bolt it on, work a full Saturday the way you normally would, and see what your back says on Sunday.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  If it cannot tell the difference within 60 days, we refund you in full and you do not have to send it
                  back. The lifetime warranty on the hardware runs alongside it.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <strong className="font-bold text-foreground">
                    You are risking a handle. The last trimmer you bought did not offer you that.
                  </strong>
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="mt-6 w-full">
              {FAQS.map((f) => (
                <AccordionItem key={f.question} value={f.question}>
                  <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </article>

        <section className="mt-12 bg-secondary py-10">
          <div className="mx-auto max-w-3xl px-5">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
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
