"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Play, Star } from "lucide-react"

// ============================================================
// /trimming-wrecks-your-back — Yeoman Handle
// COMPRESSED-ARGUMENT sibling of /back-hurts-when-trimming.
//
// Same angle, same cold Learn More traffic, THREE reasons instead of five.
// Rationale: back pain from trimming is EPISODIC (roughly fortnightly) and
// does not compound the way sleep or weight does. Past three reasons the
// agitation outruns the reader's lived experience of the problem and starts
// costing belief instead of building it. So the argument is compressed to the
// three loadbearing moves and the reclaimed length goes into the back half.
//
//   1 cause          the tool chose your posture
//   2 refutation     it is not your age
//   3 alternatives   everything you tried aimed at the back
//   -> hinge -> product -> mechanism -> VIDEO WALL -> reviews -> FIRST CTA
//
// The first button still does not appear until every one of those has run.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"
const LANDER_TAG = "twb"
const CTA_LABEL = "CHECK AVAILABILITY >>"
const OFFER_TEXT = "Save Up To 43% + 2 Free Yardwork Guides"
const SOCIAL_PROOF = "4.8 stars • 800 reviews • 40,000+ trimmers upgraded"

// Identical to /back-hurts-when-trimming apart from the numeral. This route is
// a STRUCTURE test (3 reasons vs 5), so the headline is held constant, or a
// result could not be attributed to the structure.
const HEADLINE_MAIN = "3 Reasons Your Back Hurts When Trimming"
const HEADLINE_BRACKET = "(Why It Is Not Just Your Age, And What Actually Stops It)"

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
  spineLeverage: "/bhwt-bends-loads.webp",
  handOnBack: "/bhwt-hand-on-back.webp",
  flatlay: "/bhwt-flatlay.webp",
  uprightSenior: "/bhwt-verified-72.webp",
  manHoldingTrimmer:
    "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333&width=900",
}

// The same five clips that run in the PDP's fhp-videos carousel. Shopify serves
// them as full-fat 1080p desktop encodes, 10 to 27MB each, ~99MB for the set.
// That is unusable on a cold lander as an autoplaying wall, so each slide is a
// poster image and the <video> element is only mounted on click. Nothing is
// fetched until the reader asks for it.
const CLIPS = [
  {
    poster: "/twb-poster1.webp",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/1966caf46d5a417885bf9fc6106ba477/1966caf46d5a417885bf9fc6106ba477.HD-1080p-4.8Mbps-83902302.mp4?v=0",
    alt: "A customer using a string trimmer fitted with the Yeoman Handle",
  },
  {
    poster: "/twb-poster2.webp",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/70fb239499c4492dba1212ba56855684/70fb239499c4492dba1212ba56855684.HD-1080p-2.5Mbps-83902306.mp4?v=0",
    alt: "A customer standing upright while trimming with the Yeoman Handle fitted",
  },
  {
    poster: "/twb-poster3.webp",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/dbdac73c19ad4877bf61135ac7dd70fe/dbdac73c19ad4877bf61135ac7dd70fe.HD-1080p-4.8Mbps-83902300.mp4?v=0",
    alt: "Close view of the Yeoman Handle clamped to a trimmer shaft in use",
  },
  {
    poster: "/twb-poster4.webp",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/e5d5501b962642339683e5d3f68853cd/e5d5501b962642339683e5d3f68853cd.HD-1080p-3.3Mbps-83902297.mp4?v=0",
    alt: "An older customer working a fence line with the Yeoman Handle fitted",
  },
  {
    poster: "/twb-poster5.webp",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/f0f18bb534b4427dad4f3a2f4419a301/f0f18bb534b4427dad4f3a2f4419a301.HD-1080p-4.8Mbps-83902299.mp4?v=0",
    alt: "A customer demonstrating the raised grip position on his own trimmer",
  },
]

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

/**
 * Tapping a clip is the strongest intent signal on this page. It beats scroll
 * depth, because scrolling is passive and this is a deliberate act. Reported to
 * both Meta (custom event, so it can be optimised toward once there is volume)
 * and Clarity (tag, so recordings can be filtered by it).
 */
function reportVideoPlay(index: number) {
  try {
    const w = window as unknown as {
      fbq?: (...a: unknown[]) => void
      clarity?: (...a: unknown[]) => void
    }
    w.fbq?.("trackCustom", "VideoPlay", { page: LANDER_TAG, clip: index + 1 })
    w.clarity?.("set", "video_play", `${LANDER_TAG}-clip-${index + 1}`)
  } catch {
    // Never let analytics break playback.
  }
}

/** Click to load. Until then it is a poster and a play button, costing ~100KB. */
function VideoWall({ innerRef }: { innerRef: React.RefObject<HTMLElement | null> }) {
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <section ref={innerRef} className="mt-14 rounded-lg bg-[#3D332A] px-5 py-8 sm:px-7">
      <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#E8DFD2]">See It In Action</h2>
      <p className="mt-2 text-center text-sm text-[#B8AA98]">Real customers, their own yards, their own trimmers.</p>

      <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CLIPS.map((clip, i) => (
          <div
            key={clip.poster}
            className="relative aspect-[9/16] w-[46%] shrink-0 snap-start overflow-hidden rounded-md bg-black sm:w-[31%]"
          >
            {playing === i ? (
              <video
                src={clip.src}
                controls
                autoPlay
                playsInline
                preload="none"
                className="h-full w-full object-cover"
              />
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
    heading: "Every brand puts the grip below your reach",
    image: IMAGES.brandRack,
    alt: "Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft",
    body: (
      <>
        <p>
          It doesn&apos;t matter which one is in your shed. STIHL, Echo, Ryobi, EGO, Husqvarna. Every brand mounts the
          loop handle low on the shaft, well below where your hand naturally sits, so you fold forward to reach it and
          stay folded for the whole pass.
        </p>
        <p>
          You never chose that posture.{" "}
          <strong className="font-bold text-foreground">The tool chose it for you</strong>, the day you bought it.
        </p>
      </>
    ),
  },
  {
    number: "2",
    heading: "Twenty minutes bent at the waist would hurt a 25-year-old",
    image: IMAGES.spineLeverage,
    alt: "A chiropractor pointing to the loaded lower back of a hinged-forward skeleton. Caption reads: bends loads your lower back. It is a leverage problem, not a strength problem.",
    body: (
      <>
        <p>
          Hinge forward at the hips and hold it, and your lower back carries your whole upper body on a long lever. That
          is hard on a spine at any age.
        </p>
        <p>
          Hand that same low trimmer to a twenty-five year old for an hour of fence line and he will be sore too. He just
          recovers by Sunday and never connects the two. You feel it longer, so you blamed the years instead of the
          angle.
        </p>
      </>
    ),
  },
  {
    number: "3",
    heading: "Everything you have tried was aimed at your back",
    image: IMAGES.handOnBack,
    alt: "Older man straightening up with a hand pressed to his lower back after trimming",
    body: (
      <>
        <p>Maybe your back is genuinely worn. Nobody here is going to tell you it is in your head.</p>
        <p>
          But look at what you have already been through. The chiropractor. Physical therapy. A brace you bought and
          stopped wearing. A shoulder harness that moved the weight but left you bent over exactly the same. A newer,
          lighter trimmer that arrived with the grip in the same low place. One buyer listed his own drawer like this:{" "}
          <em>&ldquo;From pills, creams, chiro, pt, injections, brace, hwave...it sucks.&rdquo;</em>
        </p>
        <p>
          Every one of those treats the back after the fact, or moves the load somewhere else. Not one of them changes
          the thing you actually do for twenty minutes on a Saturday, which is bend.
        </p>
        <p>
          <strong className="font-bold text-foreground">That is not a drawer of failures.</strong> It is a drawer of
          answers to a question nobody had asked yet.
        </p>
      </>
    ),
  },
]

const SOLUTIONS = [
  "The grip moves out to your hand, so reason 1 stops applying to your trimmer",
  "No bend means no lever, so reason 2 stops applying to your back",
  "It changes the tool instead of treating you, which is what reason 3 never did",
  "Three-minute install with the included allen key. No drilling, no cutting",
  "Fits 26mm and 28mm shafts, gas or battery, on the machine you already own",
  "60-day trial and a lifetime warranty on the hardware",
]

const REVIEWS = [
  {
    title: "My back is just fine!",
    quote:
      "I am 72 years old, using my big still weed eater hurt my back after about 20 minutes. I just finished about 1 hr. And my back is just fine! Wish I would have bought this years ago.",
    author: "Verified Buyer, 72",
  },
  {
    title: "I was skeptical. I was wrong.",
    quote:
      "I was skeptical that anything could make weedeating easier. I was wrong. I was able to weedeat my entire yard including around my pond, (2 hrs of weedeating) and my back did not get tight or hurt. I usually do half one day then half another.",
    author: "Verified Buyer",
  },
  {
    title: "Why did I wait to order this?",
    quote:
      "Why did I wait to order this? I have 3-4 hours of mowing and edging every week. Edging at 65 was a painful experience, being bent over for an hour. Not anymore!",
    author: "Verified Buyer, 65",
  },
  {
    title: "At 46 it's not going to get easier.",
    quote:
      "6 hours of string trimming this week, crippled me for days. At 46 it's not going to get easier. Solve a problem you get my money.",
    author: "Verified Buyer, 46",
  },
  {
    title: "Two back surgeries.",
    quote:
      "I am usually leery of ads like these, but it looked like a good idea. I have had two lower back surgeries, and weed eating killed me.",
    author: "Verified Buyer",
  },
  {
    title: "I'm 80 and still take care of my 1.5 acre property.",
    quote: "I'm 80 years old and still take care of my 1.5 acre property. This will help me immensely.",
    author: "Verified Buyer, 80",
  },
]

const FAQS = [
  {
    question: "Will it fit my trimmer?",
    answer:
      "Almost certainly. The Yeoman fits 26mm and 28mm shafts, which covers the straight and curved-shaft trimmers sold by STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER, in both gas and battery. If you can wrap your hand around the shaft, measure it once and check it against those two sizes.",
  },
  {
    question: "How hard is it to install?",
    answer:
      "Three minutes with the allen key that comes in the box. The Hold-Fast™ bracket clamps around the shaft and slides to wherever your hand naturally falls, then tightens down. No drilling, no cutting, no permanent change to the trimmer. If someone else in the house is a different height, loosen it and slide it, and one handle serves you both.",
  },
  {
    question: "How is this different from a shoulder harness?",
    answer:
      "A harness moves the weight off your arms and onto your shoulders, which helps with fatigue. It does not change where the grip sits, so you are still bent over the same way for the same twenty minutes. The Yeoman changes the angle rather than the load. If your complaint is tired arms, a harness is a reasonable buy. If your complaint is your lower back, it is the bend you need to remove.",
  },
  {
    question: "I'm in my 40s. Is this only for older guys?",
    answer:
      "No, because the bend is a leverage problem, not an age problem. Holding your upper body out on a long lever for twenty minutes strains a spine at twenty-five the same way it does at seventy-five. One of our verified buyers is 46 and bought it after six hours of trimming put him down for days. Younger backs just recover faster and never connect the soreness to the handle.",
  },
  {
    question: "What if it turns out it really was my age?",
    answer:
      "Then you keep your money. Bolt it on, work a full Saturday the way you normally would, and if your back honestly cannot tell the difference, you get a full refund within 60 days, and you don't even have to send it back. You are not betting on your age. You are testing a handle.",
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

export default function TrimmingWrecksYourBack() {
  const videoWallRef = useRef<HTMLElement | null>(null)
  const ctaRef = useRef<HTMLElement | null>(null)
  const [pastWall, setPastWall] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  // The bar is EARNED, not default. Nothing to click until the argument, the
  // product and the videos have run; from that point a button follows the
  // reader so a decision made at review three does not require a hunt.
  // Suppressed while a real CTA section is on screen, so it never doubles up.
  useEffect(() => {
    const wall = videoWallRef.current
    const cta = ctaRef.current
    if (typeof IntersectionObserver === "undefined") return

    const obs: IntersectionObserver[] = []
    if (wall) {
      const o = new IntersectionObserver(
        ([e]) => {
          // Showing once the wall's bottom passes the top of the viewport.
          if (!e.isIntersecting && e.boundingClientRect.top < 0) setPastWall(true)
        },
        { threshold: 0 },
      )
      o.observe(wall)
      obs.push(o)
    }
    if (cta) {
      const o = new IntersectionObserver(([e]) => setCtaVisible(e.isIntersecting), { threshold: 0.2 })
      o.observe(cta)
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

  return (
    <div style={PAGE_THEME} className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-4">
          <nav aria-label="Breadcrumb">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
              Home &gt; Yard Care &gt; Back &amp; Body
            </p>
          </nav>
        </div>
      </header>

      <main>
        <article className="mx-auto max-w-3xl px-5 pt-10">
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

          <div className="mt-8 border-l-4 border-primary bg-muted p-5 sm:p-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              <strong className="font-bold text-foreground">
                40,000+ trimmers upgraded. 800+ reviews at 4.8 stars. 60-day trial and a lifetime warranty.
              </strong>{" "}
              The Yeoman Handle is a machined aluminum grip that bolts onto the trimmer you already own. No drilling, no
              new machine. Fits 26mm and 28mm shafts across STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER, gas or
              battery.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              You feel fine most of the week. Then one afternoon folded over a trimmer puts you right back to the start,
              and by Sunday evening you are moving like a man ten years older than you were on Friday.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              You have probably been told it is your age. That this is just what your fifties, sixties or seventies feel
              like. Maybe someone suggested you hire the yard out, or take it easier, or stretch more before you start.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nobody mentioned the handle. There are only three things going on here, and once you have seen them you
              cannot unsee them.{" "}
              <strong className="font-bold text-foreground">Here they are.</strong>
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-14">
            {REASONS.map((reason) => (
              <section key={reason.number}>
                <img
                  src={reason.image}
                  alt={reason.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full rounded-sm object-cover"
                />
                <h2 className="mt-6 text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
                  {reason.number}. {reason.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {reason.body}
                </div>
              </section>
            ))}
          </div>

          {/* The hinge. Converts the problem half into the product half and
              carries the social proof across the seam. */}
          <section className="mt-14 border-t-4 border-foreground pt-10">
            <h2 className="text-pretty text-3xl font-bold leading-snug tracking-tight text-foreground sm:text-4xl">
              That Is Why 40,000+ Trimmer Owners Bolted One Of These Onto A Machine They Already Owned
            </h2>

            <img
              src={IMAGES.flatlay}
              alt="The Yeoman Handle laid on a concrete path beside worn leather gloves, secateurs and a pot of basil"
              loading="lazy"
              decoding="async"
              className="mt-6 aspect-square w-full rounded-sm bg-muted object-cover"
            />

            <p className="mt-7 text-lg leading-relaxed text-foreground sm:text-xl">
              The grip does not have to sit down there. Move it out to where your hand already falls and the bend has
              nothing left to do. You stand up, the lever disappears, and the twenty minutes stop costing you the rest of
              the week. The fixed angle that does it is the{" "}
              <strong className="font-bold">Plumb-Set&trade;</strong>, and the{" "}
              <strong className="font-bold">Hold-Fast&trade;</strong> bracket is what keeps it there through a full
              season of vibration.
            </p>

            <h3 className="mt-9 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              What that actually does to the three reasons above
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {SOLUTIONS.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">{s}</span>
                </li>
              ))}
            </ul>
          </section>

          <VideoWall innerRef={videoWallRef} />

          <section className="mt-14">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              They All Thought It Was Their Age Too
            </h2>
            <p className="mt-2 text-base text-muted-foreground">4.8 out of 5 from 800 reviews</p>

            <div className="mt-7 flex flex-col gap-5">
              {REVIEWS.map((review) => (
                <blockquote key={review.title} className="border-l-4 border-primary bg-muted p-5">
                  <p className="text-base font-bold text-foreground">&ldquo;{review.title}&rdquo;</p>
                  <p className="mt-2 text-base italic leading-relaxed text-muted-foreground">{review.quote}</p>
                  <footer className="mt-4 flex flex-wrap items-center gap-3">
                    <cite className="text-sm font-bold not-italic text-foreground">{review.author}</cite>
                    <Stars />
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* FIRST BUTTON ON THE PAGE. Everything above it is selling. */}
          <section ref={ctaRef} className="mt-12">
            <img
              src={IMAGES.uprightSenior}
              alt="A 72-year-old verified buyer standing fully upright in his yard holding a trimmer fitted with the Yeoman Handle"
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full rounded-sm object-cover"
            />
            <p className="mt-7 text-center text-base font-bold uppercase tracking-wide text-foreground">
              Today: {OFFER_TEXT}
            </p>
            <CtaButton
              className="mt-6"
              note="Click the button above to check current availability and whether today's discount is still running."
            />
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
                  If it cannot tell the difference within 60 days, we refund you in full. You don&apos;t even have to
                  send it back. The lifetime warranty on the hardware runs right alongside it.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <strong className="font-bold text-foreground">
                    You are not betting on your age. You are testing a handle.
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
              {FAQS.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
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
              28mm shafts across every major brand.
            </p>
            <CtaButton className="mt-7" />
            <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>
          </div>
        </section>
      </main>

      {/* Earned sticky bar */}
      <div
        aria-hidden={!(pastWall && !ctaVisible)}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] backdrop-blur transition-transform duration-300 ${
          pastWall && !ctaVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <p className="hidden flex-1 text-sm font-bold leading-snug text-foreground sm:block">
            {OFFER_TEXT}
          </p>
          <a
            href={PDP_URL}
            tabIndex={pastWall && !ctaVisible ? 0 : -1}
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
