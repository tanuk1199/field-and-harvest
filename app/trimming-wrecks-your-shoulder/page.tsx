"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Star } from "lucide-react"

// ============================================================
// /trimming-wrecks-your-shoulder — THE YEOMAN RIG
// Direct port of /trimming-wrecks-your-back. Same layout, same argument
// architecture, same earned-CTA discipline. Only the joint changes.
//
//   1 cause          the machine is not heavy, it is far away
//   2 refutation     it is not your age, it is a static one-sided hold
//   3 alternatives   every brace you looked at was built for the gym
//   -> hinge -> product -> IMAGE WALL -> reviews -> FIRST CTA
//
// FIRST PASS. Every image is a labelled placeholder describing the shot that
// belongs in it. The bottom wall keeps the video-wall layout exactly but the
// slides are image placeholders, because no footage of this product in this
// context exists yet.
//
// ⚠ The 4.8 / 1,100 review figures and the six pull quotes below are
// PLACEHOLDER copy in the corpus register, not real customer data. Swap before
// this page takes traffic.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/yeoman-rig"
const LANDER_TAG = "tws"
const CTA_LABEL = "CHECK AVAILABILITY >>"
const OFFER_TEXT = "Save Up To 66% + 2 Free Yardwork Guides"
const SOCIAL_PROOF = "4.8 stars • 1,100 reviews • 10,000+ shoulders supported"

const HEADLINE_MAIN = "3 Reasons Your Shoulder Hurts When Trimming"
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

// Reused from the Handle lander. Same editorial persona, same byline.
const AUTHOR_IMG = "/bhwt-author-walt.webp"

/**
 * Labelled image placeholder. Prints the brief for the shot directly on the
 * box so the slot documents itself while the real photography is commissioned.
 */
function Slot({
  label,
  note,
  ratio = "aspect-[3/2]",
  className = "",
}: {
  label: string
  note?: string
  ratio?: string
  className?: string
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`${ratio} ${className} flex w-full flex-col items-center justify-center gap-2 rounded-sm border-2 border-dashed border-foreground/25 bg-muted p-5 text-center`}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Image placeholder</span>
      <span className="text-balance text-sm font-bold leading-snug text-foreground sm:text-base">{label}</span>
      {note ? (
        <span className="max-w-md text-balance text-xs leading-relaxed text-muted-foreground">{note}</span>
      ) : null}
    </div>
  )
}

// Keeps the video wall's exact layout and dark panel, now carrying real
// customer photos instead of video posters. Same set that runs on the PDP
// review wall, so the lander and the product page tell one story.
const WALL_SLIDES = [
  { src: "/tws-ugc-02.jpg", alt: "A customer standing in his back yard holding a string trimmer, the Rig worn over his t-shirt" },
  { src: "/tws-ugc-08.jpg", alt: "A customer mid-cut along a driveway edge with the Rig on his right shoulder" },
  { src: "/tws-ugc-01.jpg", alt: "A customer in his garage looking down at the chest strap of the Rig" },
  { src: "/tws-ugc-06.jpg", alt: "A customer in an overgrown rural yard holding a full size trimmer, the Rig strap cinched down" },
  { src: "/tws-ugc-05.jpg", alt: "Close view of the Rig worn over a plaid flannel shirt, a hand pinching the chest strap" },
  { src: "/tws-ugc-04.jpg", alt: "A customer beside a fence line with a trimmer, the Rig worn over a work shirt" },
  { src: "/tws-ugc-07.jpg", alt: "A customer sitting on a pickup tailgate after finishing the yard, still wearing the Rig" },
  { src: "/tws-ugc-09.jpg", alt: "A customer on a frosty morning wearing the Rig over a canvas work jacket" },
  { src: "/tws-ugc-03.jpg", alt: "A customer photographing himself in a garage mirror wearing the Rig over a t-shirt" },
  { src: "/tws-ugc-10.jpg", alt: "A customer holding up the Rig in her kitchen the day it arrived" },
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

/** Same slot in the page as the Handle lander's VideoWall, and the same ref target. */
function ImageWall({ innerRef }: { innerRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section ref={innerRef} className="mt-14 rounded-lg bg-[#3D332A] px-5 py-8 sm:px-7">
      <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#E8DFD2]">See It In Action</h2>
      <p className="mt-2 text-center text-sm text-[#B8AA98]">Real customers, their own yards, their own machines.</p>

      <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {WALL_SLIDES.map((slide) => (
          <div
            key={slide.src}
            className="relative aspect-[9/16] w-[46%] shrink-0 snap-start overflow-hidden rounded-md bg-[#2C241D] sm:w-[31%]"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-[#8F8375]">Swipe for more.</p>
    </section>
  )
}

type Reason = {
  number: string
  heading: string
  /** Real photography once shot. Falls back to a labelled placeholder until then. */
  image?: string
  alt?: string
  slot: { label: string; note: string }
  body: React.ReactNode
}

const REASONS: Reason[] = [
  {
    number: "1",
    heading: "The machine is not heavy. It is far away.",
    image: "/tws-reason1-arm-extended.jpg",
    alt: "A man in his sixties running a string trimmer with his arm extended out in front of him, the load on his right shoulder marked with a warm glow",
    slot: {
      label: "Man trimming, arm extended, load bloom on the shoulder",
      note: "3:2. Side profile, 60s, machine held out at arm's length, warm orange glow over the right deltoid.",
    },
    body: (
      <>
        <p>
          Pick your trimmer up at your side and it is ten, maybe twelve pounds. Nothing. You have carried heavier
          across the yard without thinking about it.
        </p>
        <p>
          But you do not use it at your side. You hold it{" "}
          <strong className="font-bold text-foreground">out in front of you</strong>, arm extended, for the length of
          the job. And the moment your arm goes out, that machine stops behaving like ten pounds. It works through a
          lever. The further out you hold it, the more of that weight lands on the one joint holding it there.
        </p>
        <p>
          You never chose that either.{" "}
          <strong className="font-bold text-foreground">The machine has to reach the grass</strong>, so your arm has to
          go out, so your shoulder carries the difference.
        </p>
      </>
    ),
  },
  {
    number: "2",
    heading: "Twenty minutes of holding still would cook a 25-year-old",
    image: "/tws-reason2-reach-loads-shoulder.jpg",
    alt: "A chiropractor pointing to the loaded shoulder joint of a skeleton with its arm held straight out. Caption reads: the reach loads your shoulder. It is a leverage problem, not a strength problem.",
    slot: {
      label: "Diagram: machine held close vs held out",
      note: "3:2. Two silhouettes of the same man, arm tucked then arm extended, load marker far larger on the extended one.",
    },
    body: (
      <>
        <p>
          Your shoulder is built to lift and lower. What it is doing out there is neither. It is holding one fixed
          position under constant load, which is the thing muscle tires at fastest.
        </p>
        <p>
          Then stack what makes it worse. It is the{" "}
          <strong className="font-bold text-foreground">same shoulder every time</strong>, because nobody switches
          arms. And a two-stroke engine sends vibration up the arm into that joint for the whole session.
        </p>
        <p>
          Hand that same machine to a twenty-five year old for an hour of fence line and his shoulder will be hot too.
          He just recovers by Sunday and never connects the two. You feel it longer, so you blamed the years instead of
          the reach.
        </p>
      </>
    ),
  },
  {
    number: "3",
    heading: "Every brace you looked at was built for the gym",
    image: "/tws-reason3-built-for-the-gym.jpg",
    alt: "A grid of shoulder braces as they are actually marketed: shirtless young athletes on gym floors, a boxer working a heavy bag, and a trainer fitting a brace against bare skin",
    slot: {
      label: "Gym brace against work brace",
      note: "3:2. Split frame: young athlete in a brace on bare skin on a gym floor, beside a working man in one over a work shirt outdoors.",
    },
    body: (
      <>
        <p>
          Go and look at what is for sale. Shirtless twenty-five year olds on gym floors. Words like recovery,
          stability, post-injury. Those products were designed for a man rehabbing indoors for forty-five minutes at a
          time, and they are good at that.
        </p>
        <p>
          You are doing something else entirely. Outdoors, in the heat, holding a machine out in front of you, for as
          long as the job takes. Nobody in that aisle designed for it. Half of them will not even go over a work shirt,
          which rules them out of an August afternoon before you start.
        </p>
        <p>
          <strong className="font-bold text-foreground">
            Whether your shoulder is sound or you have a file of X-rays behind it, the reach is the same.
          </strong>{" "}
          The problem was never which body you brought to the job. It is that nothing on that shelf was built for the
          job itself.
        </p>
      </>
    ),
  },
]

const SOLUTIONS = [
  "It goes on before you start, so the shoulder is supported through the hold rather than treated afterwards",
  "Compression and warmth across the deltoid through a long static hold, which is reason 2's exact problem",
  "Built for outdoor work instead of indoor rehab, which is the one thing reason 3 never was",
  "Adjusts at the shoulder and the chest, so it cinches tight over a work shirt or wears under one",
  "Sizing runs up generously for a working frame, and it does not bind when your arm is out in front of you",
  "60-day trial and a lifetime warranty on the hardware",
]

// PLACEHOLDER pull quotes, written in the corpus register. Not real customers.
const REVIEWS = [
  {
    title: "Second season on it",
    quote:
      "I run the trimmer forty minutes at a stretch and the shoulder was always what made me quit, not the back. Wore it over a work shirt all season and it has not stretched out.",
    author: "Verified Buyer, Tennessee",
  },
  {
    title: "Goes over a work shirt, which is the whole point",
    quote:
      "Every other one I looked at wants to sit on bare skin. In August heat that is a non starter. This one cinches down over the shirt and stays where I put it.",
    author: "Verified Buyer, Ohio",
  },
  {
    title: "I am 71 and I still do my own place",
    quote:
      "Not giving that up any time soon. I have bought a lot of gear over the years that ended up in a drawer. This is one of the few things I kept reaching for.",
    author: "Verified Buyer, 71",
  },
  {
    title: "Rotator cuff years ago",
    quote:
      "Never had it repaired properly and I gave up on braces. This one is not trying to be a medical thing, it just takes the edge off while I work. That is all I wanted.",
    author: "Verified Buyer, Tennessee",
  },
  {
    title: "My back thanks me, now my shoulder does",
    quote:
      "Got the handle last year for the back. Shoulder started taking the load instead. This sorted the other half.",
    author: "Verified Buyer, Virginia",
  },
  {
    title: "Ended up wearing it for the hedges",
    quote:
      "Bought it for the string trimmer and it does that fine, but the hedge trimmer is the one that really has your arms up in front of you.",
    author: "Verified Buyer, Georgia",
  },
]

const FAQS = [
  {
    question: "Which shoulder do I need?",
    answer:
      "The one that carries the machine. For most right-handed operators that is the right shoulder, because the right hand sits on the throttle and takes the weight of the engine end. If you are not sure, go and pick your trimmer up the way you normally hold it and see which shoulder is doing the holding. You set the side for every brace in your order, so a pair does not have to be two of the same.",
  },
  {
    question: "Will it fit over a work shirt?",
    answer:
      "That is what it was cut for. It adjusts at two points, the shoulder cap and the chest strap, so you set the tension yourself rather than hoping an off-the-shelf size lands right. That is what lets it pull in tight over a work shirt or a jacket, and loosen off to sit under one if you would rather wear it against a base layer. The sizing also runs up generously, and we say so out loud.",
  },
  {
    question: "How is this different from a trimmer harness?",
    answer:
      "They solve different halves. A harness takes the machine's weight off your arms and puts it on your shoulders and core, which genuinely helps with fatigue over a long session. It is a good buy if your complaint is tired arms. The Rig does not carry the machine. It supports the joint that is holding your arm out there, through the hold and under the vibration. If you already run a harness, this sits alongside it rather than replacing it.",
  },
  {
    question: "I have had shoulder surgery. Is this for me?",
    answer:
      "It is not a medical device and it is not going to treat anything, so talk to whoever looked after your shoulder before you add anything to it. What it does do is put steady compression across the deltoid and upper arm while you hold a machine out in front of you, and that job is the same whether your shoulder is sound or it has history. Plenty of the men who buy it have a file behind them. It was designed around the work, not around a diagnosis.",
  },
  {
    question: "What if it turns out it really was my age?",
    answer:
      "Then you keep your money. Put it on, work a full Saturday the way you normally would, and if your shoulder honestly cannot tell the difference, you get a full refund within 60 days and you do not even have to send it back. The lifetime warranty on the hardware runs alongside it. You are not betting on your age. You are testing where the load goes.",
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

export default function TrimmingWrecksYourShoulder() {
  const wallRef = useRef<HTMLElement | null>(null)
  const ctaRef = useRef<HTMLElement | null>(null)
  const [pastWall, setPastWall] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    const wall = wallRef.current
    const cta = ctaRef.current
    if (typeof IntersectionObserver === "undefined") return

    const obs: IntersectionObserver[] = []
    if (wall) {
      const o = new IntersectionObserver(
        ([e]) => {
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
            <img src={AUTHOR_IMG} alt="Walt Brenner" className="h-12 w-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">By Walt Brenner</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Field &amp; Harvest Co. &middot; 5 April 2026
              </span>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-primary bg-muted p-5 sm:p-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              <strong className="font-bold text-foreground">
                10,000+ shoulders supported. 1,100+ reviews at 4.8 stars. 60-day trial and a lifetime warranty.
              </strong>{" "}
              The Yeoman Rig is a compression shoulder support built for men who work with their hands. It goes on over
              your work shirt before the job starts, adjusts at the shoulder and the chest, and is sized for a working
              frame rather than a gym floor.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              You get through the trimming fine. It is that evening, and the next morning, when the shoulder that held
              the machine tells you what it thought of the afternoon.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              You have probably been told it is your age. That this is just what your fifties, sixties or seventies feel
              like. Maybe someone suggested you take it easier, split the yard across two days, or hire it out.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nobody mentioned how far out in front of you that machine sits. There are only three things going on
              here, and once you have seen them you cannot unsee them.{" "}
              <strong className="font-bold text-foreground">Here they are.</strong>
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-14">
            {REASONS.map((reason) => (
              <section key={reason.number}>
                {reason.image ? (
                  <img
                    src={reason.image}
                    alt={reason.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full rounded-sm object-cover"
                  />
                ) : (
                  <Slot label={reason.slot.label} note={reason.slot.note} />
                )}
                <h2 className="mt-6 text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
                  {reason.number}. {reason.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {reason.body}
                </div>
              </section>
            ))}
          </div>

          {/* The hinge. */}
          <section className="mt-14 border-t-4 border-foreground pt-10">
            <h2 className="text-pretty text-3xl font-bold leading-snug tracking-tight text-foreground sm:text-4xl">
              That Is Why 10,000+ Men Put One Of These On Before They Start The Yard
            </h2>

            <img
              src="/tws-hinge-flatlay-equipment.jpg"
              alt="The Yeoman Rig laid open on a weathered workbench beside a worn leather belt, leather work gloves, a spool of trimmer line, an allen key and safety glasses"
              loading="lazy"
              decoding="async"
              className="mt-6 aspect-square w-full rounded-sm bg-muted object-cover"
            />

            <p className="mt-7 text-lg leading-relaxed text-foreground sm:text-xl">
              A powerlifter does not put a belt on because his back is broken. He puts it on because he is about to load
              it. Same idea here. It goes on before the work rather than after the damage, and it supports the joint
              that is doing the holding. The compression cap is the{" "}
              <strong className="font-bold">Hold-Up&trade;</strong>, and the{" "}
              <strong className="font-bold">Journeyman Cut&trade;</strong> is the fit standard that lets it go over a
              work shirt on a body that actually works.
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

          <ImageWall innerRef={wallRef} />

          <section className="mt-14">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              They All Thought It Was Their Age Too
            </h2>
            <p className="mt-2 text-base text-muted-foreground">4.8 out of 5 from 1,100 reviews</p>

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

          {/* FIRST BUTTON ON THE PAGE. */}
          <section ref={ctaRef} className="mt-12">
            <img
              src="/tws-cta-hero-job-finished.jpg"
              alt="A man in his sixties standing in his finished yard at golden hour, the Yeoman Rig worn over an olive work shirt on his right shoulder, one hand resting on an idle string trimmer"
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
                60-Day &ldquo;It Was The Reach&rdquo; Guarantee
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Put it on, work a full Saturday the way you normally would, and see what your shoulder says that
                  evening.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  If it cannot tell the difference within 60 days, we refund you in full. You don&apos;t even have to
                  send it back. The lifetime warranty on the hardware runs right alongside it.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <strong className="font-bold text-foreground">
                    You are not betting on your age. You are testing where the load goes.
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
              src="/tws-closing-hero.jpg"
              alt="Close view over the shoulder of a man mid-cut with a string trimmer, the Yeoman Rig worn over his work shirt, cut grass flying in the low sun"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Yeoman Rig goes on over the shirt you already wear, on the shoulder that carries the machine. It
              adjusts at two points so you set the tension yourself, it is sized for a working frame, and it is built to
              breathe in August rather than for forty-five minutes indoors.
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
          <p className="hidden flex-1 text-sm font-bold leading-snug text-foreground sm:block">{OFFER_TEXT}</p>
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
            advertising and is not medical advice; talk to your doctor about persistent shoulder pain.
          </p>
        </div>
      </footer>
    </div>
  )
}
