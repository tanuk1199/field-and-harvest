"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Play, Star, X } from "lucide-react"

// ============================================================
// /men-your-height — Yeoman Handle — TALL MAN (Dale) identity angle.
//
// Cloned from /see-who-else-switched, which is the proof-led destination shell:
// video wall high, CTA early, objections as questions, no listicle reasons.
// The shell is kept intact. Every line of MESSAGING is recoloured for the man
// who is 6'1 and over.
//
// WHY THE SAME SHELL WORKS FOR A DIFFERENT AVATAR:
// /see-who-else-switched turns ONE anecdote into a PATTERN by showing range —
// ages 46 to 80, fused spines, a grounds crew, nothing in common but the part.
// Dale needs the same machine pointed the other way. His objection is not
// "would it work for someone like me", it is "nothing is ever built with enough
// range for MY frame". So the proof is not variety, it is a LADDER: 6'1, 6'2,
// 6'3, 6'4, 6'7, 6'8, 6'11, all on one part that has no presets to run out of.
// The ladder answers the identity hook and the fit objection in one look.
//
// WHAT HE IS ACTUALLY STOPPED BY (and where each is answered):
//   - "It will not go far enough up for me."      -> the ladder + question 1
//   - "The real fix is an extended-shaft trimmer" -> question 2. He has looked.
//   - "It is my height, this is just how it is."  -> the mechanism block.
//   - "I have seen cheaper ones."                 -> question 3 + the table.
//
// TWO PROOF BLOCKS, TWO DIFFERENT JOBS, and they are not substitutes:
//   (1) WHY THEY ORDERED  — verbatim PRE-purchase lines from checkout survey and
//       ad comments. This is the mirror. He reads himself and stops scrolling.
//       Labelled explicitly as reasons for ordering, NOT results, because
//       several of them say "hoping this will help" and presenting those as
//       outcomes would be a lie.
//   (2) THE LADDER — verbatim POST-purchase reviews, tagged by height. This is
//       the proof. Mirror first, then proof.
//
// CLAIM DISCIPLINE (this angle has burned us before):
//   - The grip EXTENDS OUT and SETS where his hand falls. Never "raises the
//     grip", never "chest height", never an inch figure. /built-for-tall-men
//     carries "lifts the grip 9 inches" and "chest height" and those are NOT
//     inherited here, same call /every-major-brand made.
//   - No intent claims about manufacturers. We state the observable (the grip is
//     bolted at one fixed point) and let a BUYER make the accusation in his own
//     words ("weedwackers must be designed for short people"). Cheaper, truer,
//     and it lands harder from him than from us.
//   - Every quote on this page is verbatim from the Customer Voice Bank, tagged
//     by height, no invented names.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"
const LANDER_TAG = "myh"
const CTA_LABEL = "STAND UPRIGHT ON SATURDAY >>"
const OFFER_TEXT = "Save Up To 43% Off + 2 Free Yardwork Guides"
const SOCIAL_PROOF = "4.8 stars • 800 reviews • 40,000+ trimmers upgraded"
const HERO_PROOF = "4.8 · 800 reviews"
const HERO_CTA_NOTE = "60-day trial · Lifetime warranty"

// The range IS the argument. It states the identity claim, and at the same time
// pre-empts the only objection a tall man actually has about an adjustable part,
// which is whether it has enough in it for him. Both halves are complete
// statements, so the button under it is something to act on.
const HEADLINE_EYEBROW = "The Yeoman Handle™ · Sets to your height, not the factory's"
const HEADLINE_MAIN = "Men From 6'1 To 6'11 Swapped The Handle."
const HEADLINE_ACCENT = "The Back Pain Went With It."
const HEADLINE_SUB =
  "The grip is bolted at one fixed point on the shaft, and it is the same point on the machine a much shorter man buys. Every inch over that, you make up the difference with your back."

const HERO_POINTS = [
  { icon: "🧍", text: "Sets where your hand already falls and extends the grip out. No presets to run out of" },
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
  flatlay: "/bhwt-flatlay.webp",
  manHoldingTrimmer:
    "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333&width=900",
}

const CLIPS = [
  { poster: "/twb-poster1.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/1966caf46d5a417885bf9fc6106ba477/1966caf46d5a417885bf9fc6106ba477.HD-1080p-4.8Mbps-83902302.mp4?v=0", alt: "A customer using a string trimmer fitted with the Yeoman Handle" },
  { poster: "/twb-poster2.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/70fb239499c4492dba1212ba56855684/70fb239499c4492dba1212ba56855684.HD-1080p-2.5Mbps-83902306.mp4?v=0", alt: "A customer standing upright while trimming with the Yeoman Handle fitted" },
  { poster: "/twb-poster3.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/dbdac73c19ad4877bf61135ac7dd70fe/dbdac73c19ad4877bf61135ac7dd70fe.HD-1080p-4.8Mbps-83902300.mp4?v=0", alt: "Close view of the Yeoman Handle clamped to a trimmer shaft in use" },
  { poster: "/twb-poster4.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/e5d5501b962642339683e5d3f68853cd/e5d5501b962642339683e5d3f68853cd.HD-1080p-3.3Mbps-83902297.mp4?v=0", alt: "A customer working a fence line standing fully upright with the Yeoman Handle fitted" },
  { poster: "/twb-poster5.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/f0f18bb534b4427dad4f3a2f4419a301/f0f18bb534b4427dad4f3a2f4419a301.HD-1080p-4.8Mbps-83902299.mp4?v=0", alt: "A customer demonstrating where he set the grip on his own trimmer" },
]

// PRE-purchase. Verbatim, from the checkout survey and the ad comments. Nobody
// here had used it yet, which is exactly why the block works: this is the
// reason, not the result. Do NOT relabel these as reviews.
const WHY_THEY_ORDERED = [
  { line: "Too tall for standard trimmer handle", src: "Checkout survey" },
  { line: "I'm 6'5\" tall so I get back pain every time I use my trimmer. Hopefully this will help!", src: "Checkout survey" },
  { line: "too tall to get the head level to the ground without bending over with my STIHL Kombi trimmer", src: "Checkout survey" },
  { line: "At 6'4 I absolutely hate weed eating because of having to bend over. I might have to give this a try", src: "Ad comments" },
  { line: "I'm 6'6\". I love answers to the problem of the world trying to break my back.", src: "Checkout survey" },
  { line: "I'm 6'8 and hoping this will save my back.", src: "Checkout survey" },
]

// POST-purchase, and ordered as a LADDER on purpose. A tall man's real question
// about an adjustable part is whether it has enough in it for him, and nine
// heights climbing to 6'11 on one part answers that faster than a spec would.
// Chips are DERIVED from this array, so a chip can never describe a man who is
// not quoted below.
const REVIEWS = [
  {
    chip: "6 ft 1",
    tag: "6'1",
    cite: "Verified Buyer",
    quote:
      "At 6'1, this completely saved my back. Easy to install and infinitely adjustable to however it needs to be positioned. Very light weight yet durable.",
  },
  {
    chip: "6 ft 2",
    tag: "6'2",
    cite: "Verified Buyer",
    quote:
      "I think weedwackers must be designed for short people. At 6'2 being hunched over for 30 minutes weed whacking takes its toll. This allows me to be in an upright position. Much more comfortable.",
  },
  {
    chip: "6 ft 3, lower back",
    tag: "6'3, lower back issues",
    cite: "Verified Buyer",
    quote:
      "Best accessory ever! I thank you and my back thanks you. I'm 6'3 and I have lower back issues, this product allows me to stand up straight while I trim.",
  },
  {
    chip: "6 ft 4, back surgery",
    tag: "6'4, back surgery in 2005",
    cite: "Verified Buyer",
    quote:
      "This thing is a lifesaver. 6'4 and this thing kept me from bending over. Major back surgery in 2005 and first time I could weed eat with no pain. Easy to install. Took 3 minutes.",
  },
  {
    chip: "6 ft 4, a year in",
    tag: "6'4, a year of using it",
    cite: "From the ad comments",
    quote: "Got mine last year, love it, im 6'4 tall and this was the answer to my hunched over sore back.",
  },
  {
    chip: "6 ft 2, age 73",
    tag: "6'2, age 73",
    cite: "Post-purchase survey",
    quote: "I was going to make something like this. I am 6ft 2 in. and 73 years old and needed a handle like this.",
  },
  {
    chip: "6 ft 7",
    tag: "6'7",
    cite: "Verified Buyer",
    quote:
      "I am 6'7 and this has saved my back. Ever since they quit making extended shaft weed eaters. I've suffered from intense back pain. But this simple device is awesome.",
  },
  {
    chip: "6 ft 8",
    tag: "6'8, bought by his mother",
    cite: "From the ad comments",
    quote: "My son bought one & he says it the best thing ever. He's 6'8",
  },
  {
    chip: "6 ft 11",
    tag: "6'11, bought by his wife",
    cite: "Verified Buyer",
    quote:
      "If I could give the bar 100 gold stars I would. My husband is 6'11 after 20mn of using the weed eater he's done, not even taking breaks help him any longer. But now with the new bar he doesn't hurt as much, nore does he complain about yardwork so much.",
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
    q: "I'm well over six foot. Is there actually enough in it for me?",
    a: "There is nothing to run out of. The bracket clamps around the bare shaft and locks wherever you tighten it, so it is not stepped, notched or preset to somebody else's sizes. That is why the men quoted above run from six foot one to six foot eleven on the same part, and why one of them shares a trimmer with a shorter household. Loosen the bolt, stand up straight, put your off hand where it wants to be, and tighten it there.",
  },
  {
    q: "Isn't the real answer an extended-shaft trimmer?",
    a: "A longer shaft carries the cutting head further out, but the grip stays bolted where it was bolted, so you are still reaching down to the same place, and you have bought a whole new machine to do it. One of the buyers above went looking for exactly that and could not find one: \"Ever since they quit making extended shaft weed eaters. I've suffered from intense back pain.\" This leaves the trimmer you already own alone and moves the one part that was in the wrong place.",
  },
  {
    q: "I have seen cheaper ones. Are they the same thing?",
    a: "No, and the difference is in the clamp rather than the bar. See the comparison above. If you do find one cheaper, look at how it grips the shaft: a single stamped face holds for a few weekends and then the vibration finds it, and it creeps down mid-job. That is the part you are actually paying for, along with the lifetime warranty behind it.",
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
        Five Of Them, Filming Their Own Yards
      </h2>
      <p className="mt-2 text-center text-sm text-[#B8AA98]">
        Their own trimmers, nothing staged, and every one of them set the grip where his own hand falls.
      </p>
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

export default function MenYourHeight() {
  const wallRef = useRef<HTMLElement | null>(null)
  const ctaRef = useRef<HTMLElement | null>(null)
  const [pastWall, setPastWall] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)

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
              {HEADLINE_SUB}
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
              alt="A man trimming the edge of a mulch bed standing fully upright, off hand out on the Yeoman grip"
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

          {/* CTA early. Dale is solution-aware and converts the moment a tool
              acknowledges his frame, so delay here is a tax, not a filter. */}
          <CtaButton className="mt-8" note={`${OFFER_TEXT}. 60-day trial, lifetime warranty.`} />
          <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>

          {/* THE MIRROR. Pre-purchase, and labelled as such. */}
          <section className="mt-14">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              What They Put Down As The Reason
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Asked at checkout and in the ad comments. None of these men had used it yet. These are reasons for
              ordering, not results, and the results are further down the page.
            </p>

            <ul className="mt-6 flex flex-col divide-y divide-border rounded-lg border border-border bg-muted">
              {WHY_THEY_ORDERED.map((r) => (
                <li key={r.line} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:gap-4">
                  <p className="text-base italic leading-relaxed text-foreground sm:flex-1">&ldquo;{r.line}&rdquo;</p>
                  <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {r.src}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              One of them, writing afterwards, put the whole thing in a single line:{" "}
              <strong className="font-bold text-foreground">
                &ldquo;If you&apos;re tall you know a trimmer is tough on your back.&rdquo;
              </strong>
            </p>
          </section>

          {/* THE PROOF. Post-purchase, laddered by height. */}
          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Nine Of Them, 6&apos;1 Up To 6&apos;11
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Written after they had used it. Ordered by height, because that is the part you are probably wondering
              about.
            </p>

            {/* The ladder in one glance. Nine stacked cards bury it. Derived from
                REVIEWS so a chip can never describe a man not quoted below. */}
            <div className="mt-6 rounded-lg border border-border bg-muted p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">The nine men quoted below</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {REVIEWS.map((r) => (
                  <span
                    key={r.tag}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground"
                  >
                    {r.chip}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nine different frames, ten inches apart end to end, all on the same part. Nobody had to be a particular
                height for it to work.
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {(showAllReviews ? REVIEWS : REVIEWS.slice(0, 4)).map((r) => (
                <blockquote key={r.tag} className="flex flex-col border-l-4 border-primary bg-muted p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{r.tag}</p>
                  <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground sm:text-base">{r.quote}</p>
                  <footer className="mt-3 flex flex-wrap items-center gap-2">
                    <cite className="text-xs font-bold not-italic text-foreground">{r.cite}</cite>
                    <Stars />
                  </footer>
                </blockquote>
              ))}
            </div>

            {!showAllReviews ? (
              <button
                type="button"
                onClick={() => setShowAllReviews(true)}
                className="mt-5 w-full rounded-md border-2 border-foreground bg-card px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-muted"
              >
                Read {REVIEWS.length - 4} More &darr;
              </button>
            ) : null}
          </section>

          {/* The reframe. His height is not the defect, and this is the only
              section on the page allowed to say why. */}
          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              It Was Never Your Height
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
                Every trimmer on the rack has its grip bolted at one fixed point on the shaft. That point does not move
                when you pick the machine up, and it is the same point on the machine a man half a foot shorter takes
                home.
              </p>
              <p>
                The head still has to reach the ground. The grip still sits where it sits. So the difference between
                those two things gets made up somewhere, and it gets made up in your lower back, bent forward at the
                hips carrying your whole upper body on a long lever. The taller you are, the more of that difference
                there is to make up. One buyer put it more bluntly than we would:{" "}
                <em>&ldquo;I think weedwackers must be designed for short people.&rdquo;</em>
              </p>
              <p>
                <strong className="font-bold text-foreground">
                  Set the grip where your hand already is and extend it out to your reach, and there is no difference
                  left to make up.
                </strong>{" "}
                Which is why the same part works at six foot one and at six foot eleven. It is not sized for a height.
                It is set to yours.
              </p>
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Three Questions Tall Guys Ask First
            </h2>

            <div className="mt-8 flex flex-col gap-10">
              {QUESTIONS.map((item, i) => (
                <div key={item.q}>
                  <h3 className="text-pretty text-xl font-bold leading-snug text-foreground sm:text-2xl">
                    {i + 1}. {item.q}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{item.a}</p>

                  {/* The comparison lives inside question 3, where it is asked. */}
                  {i === 2 ? (
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
              alt="Three string trimmers from different brands racked on a garage wall, every factory loop grip bolted low on the shaft"
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
                    <span className="text-3xl font-bold text-foreground">$39.99</span>
                    <span className="text-base text-muted-foreground line-through">$60</span>
                  </div>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {[
                      "Locks anywhere on the shaft, no presets",
                      "Fits 26 and 28mm shafts, gas or battery",
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
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">60 Days On Your Own Yard</h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  You have just read nine men taller than average telling you it worked. That is still nine other men.
                  Bolt it on, set it where you stand up straight, work a full Saturday the way you normally would, and
                  find out on your own back.
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
                  Where does it end up sitting on a tall frame?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  Wherever you put it, which is the whole point. There is no fixed position and no set of sizes to pick
                  from. Stand with the machine the way you would work it, let your off hand fall where it wants to,
                  clamp it there. The buyers quoted above set the same part anywhere from six foot one to six foot
                  eleven.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shared">
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  Someone shorter uses the same trimmer. Does that ruin it?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  No. It is one bolt. Loosen it, slide the bracket down the shaft to suit them, tighten it, and slide it
                  back up when it is your turn. It takes about as long as putting fuel in.
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
              alt="A man standing fully upright, back straight, off hand out on the Yeoman grip while trimming a lawn edge"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Yeoman clamps onto the trimmer you already own and extends the grip out to meet your hand, wherever
              on the shaft your hand happens to be, so there is nothing left to bend down to. Three minutes with the
              included allen key, no drilling, and it fits 26mm and 28mm shafts across every major brand, gas or
              battery.
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
            &copy; 2026 Field &amp; Harvest Co. Individual results vary. Quotes are verbatim from verified buyers, the
            post-purchase survey and public ad comments, each labelled with its source. This page is advertising and is
            not medical advice; talk to your doctor about persistent back pain.
          </p>
        </div>
      </footer>
    </div>
  )
}
