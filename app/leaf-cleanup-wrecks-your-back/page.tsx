"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Play, Star } from "lucide-react"

// ============================================================
// /leaf-cleanup-wrecks-your-back : The Yeoman Sweep, AGE ANGLE, problem aware.
// A port of /trimming-wrecks-your-back (the Yeoman Handle's winning problem-aware
// age page) onto the Sweep. OWNER 2026-09-28: placement, length and arguments are
// proven, so the structure is held and only the product, the task and the media
// move. Ads ask "is your back wrecked?", so the page PRESUMES the pain and then
// refutes age.
//
//   1 cause          your tools leave the pile on the ground (the tools chose your posture)
//   2 refutation     forty trips to the ground would hurt a 25-year-old (it is not your age)
//   3 alternatives   everything you tried moved the leaves or treated your back
//   -> hinge -> product -> mechanism -> VIDEO WALL -> reviews -> FIRST CTA
//
// The first button still does not appear until every one of those has run.
//
// VIDEO WALL = the Sweep PDP's own "See It In Action" carousel, same three clips
// (ysp-demo-1/2/3), click-to-load exactly like the source.
// NO HEDGING (workspace rule 2026-09-17): the source footer's results-vary /
// not-medical-advice line is dropped, and the guarantee is written as a refund
// either way rather than a conditional one.
// Reviews: verbatim from Push Lawn Sweeper/research/voc/reviews.json. Every review
// in that corpus carries Amazon's Verified Purchase flag (400 of 400 in the raw
// file), and the reviews are of the same white-label unit. Ages only where the
// buyer stated one.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-sweep"
const LANDER_TAG = "lcw"
const CTA_LABEL = "CHECK AVAILABILITY >>"
// Live 2026-09-28: 21 in $199.99/$249.99 (20%), 26 in $299.99/$379.99 (21%), 30 in sold out.
// $77 = free gear on every size (bags $50, One-Pass Yard $15, Tool Audit $12). The $55 V-brush set was cut 2026-09-29, out of stock.
const OFFER_TEXT = "Save Up To 21% + $77 Of Free Gear"
const SOCIAL_PROOF = "4.7 stars • 3,783+ reviews • 60 days to decide"

const HEADLINE_MAIN = "3 Reasons Your Back Hurts After Fall Leaf Cleanup"
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

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files"
const VID = "https://cdn.shopify.com/videos/c/vp"

const IMAGES = {
  author: "/bhwt-author-walt.webp",
  // Product-agnostic leverage figure carried over from the source page. Its caption
  // ("you blamed the years instead of the angle") is the age refutation itself.
  spineLeverage: "/bhwt-bends-loads.webp",
  handOnBack: "/lcw-hand-on-back.webp",
  uprightWithSweep: `${CDN}/hf_20260913_083010_76904481-e3e4-4022-afad-cd7455fc471b.png?v=1789288659&width=1000`,
  // Distinct from the CTA photo above it: never show the same scene twice.
  closing: `${CDN}/ysp-autumn-full-season.png?v=1789416096&width=1000`,
}

// Silent autoplay loops from the /ditch-the-rake media set. Product-free on reason 1,
// the machine itself at the hinge.
const LOOPS = {
  bending: {
    src: `${VID}/dc92eeff97654bedb1a78b932149c493/dc92eeff97654bedb1a78b932149c493.HD-1080p-4.8Mbps-94336431.mp4`,
    poster: `${CDN}/preview_images/dc92eeff97654bedb1a78b932149c493.thumbnail.0000000000.jpg?v=1789378867`,
  },
  sweeping: {
    src: `${VID}/c9bd6065364f43f6b82be7185e42f2bb/c9bd6065364f43f6b82be7185e42f2bb.HD-1080p-3.3Mbps-94336178.mp4`,
    poster: `${CDN}/preview_images/c9bd6065364f43f6b82be7185e42f2bb.thumbnail.0000000000.jpg?v=1789378677`,
  },
}

// The Sweep PDP's "See It In Action" carousel, same three clips in the same order.
// Poster until tapped; the <video> only mounts on click, so no mp4 bytes load up front.
const CLIPS = [
  {
    poster: "https://fieldandharvestco.com/cdn/shop/files/ysp-demo-1-poster.png?v=1789360142&width=600",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/694788af887245f98d6c8d1a65691279/694788af887245f98d6c8d1a65691279.HD-1080p-4.8Mbps-94313908.mp4?v=0",
    alt: "A customer pushing the Yeoman Sweep down his driveway with a hopper full of clippings",
  },
  {
    poster: "https://fieldandharvestco.com/cdn/shop/files/ysp-demo-2-poster.png?v=1789360147&width=600",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/7765ff1154124270bfebc1cd2e3fe423/7765ff1154124270bfebc1cd2e3fe423.HD-720p-2.1Mbps-94313911.mp4?v=0",
    alt: "The hopper filling with leaves and debris as a customer sweeps along a path",
  },
  {
    poster: "https://fieldandharvestco.com/cdn/shop/files/ysp-demo-3-poster.png?v=1789360152&width=600",
    src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/aae359d037e54f179299f0a4b25e1dd1/aae359d037e54f179299f0a4b25e1dd1.HD-720p-4.5Mbps-94313912.mp4?v=0",
    alt: "A full hopper of fall leaves lifted off the lawn in a single pass",
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

/** Tapping a clip is the strongest intent signal on the page. Reported to Meta and Clarity. */
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

/** Click to load. Until then it is a poster and a play button. */
function VideoWall({ innerRef }: { innerRef: React.RefObject<HTMLElement | null> }) {
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <section ref={innerRef} className="mt-14 rounded-lg bg-[#3D332A] px-5 py-8 sm:px-7">
      <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#E8DFD2]">See It In Action</h2>
      <p className="mt-2 text-center text-sm text-[#B8AA98]">Real customers, their own yards, their own leaves.</p>

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

function Loop({ src, poster, label, className }: { src: string; poster: string; label: string; className: string }) {
  return (
    <video autoPlay muted loop playsInline preload="metadata" poster={poster} aria-label={label} className={className}>
      <source src={src} type="video/mp4" />
    </video>
  )
}

type Reason = {
  number: string
  heading: string
  image?: string
  loop?: { src: string; poster: string }
  alt: string
  body: React.ReactNode
}

const REASONS: Reason[] = [
  {
    number: "1",
    heading: "Every tool in your shed leaves the pile on the ground",
    loop: LOOPS.bending,
    alt: "A man bent double over a pile of leaves on his lawn, scooping armfuls into a yard bag",
    body: (
      <>
        <p>
          It doesn&apos;t matter which one you reach for. A rake gathers. A blower moves. Gas, cord or battery, not one
          of them picks a single leaf up, so every one of them ends the same way: a pile on the grass and you folded
          over it, scooping armfuls into a bag that will not stay open. Forty or fifty times a Saturday, every Saturday
          until the trees are bare.
        </p>
        <p>
          You never chose that posture.{" "}
          <strong className="font-bold text-foreground">Your tools chose it for you</strong>, the day you bought them.
        </p>
      </>
    ),
  },
  {
    number: "2",
    heading: "Forty trips down to the pile would hurt a 25-year-old",
    image: IMAGES.spineLeverage,
    alt: "A chiropractor pointing to the loaded lower back of a hinged-forward skeleton. Caption reads: the bend loads your lower back. It is a leverage problem, not a strength problem.",
    body: (
      <>
        <p>
          Every time you go down to the pile, you hinge forward at the hips and your lower back carries your whole upper
          body on a long lever. Then it lifts an armful of damp leaves on the end of that lever. Once is nothing. Forty
          times in an afternoon is hard on a spine at any age.
        </p>
        <p>
          Hand the same rake and the same bags to a twenty-five year old for a fall Saturday and he will be sore too. He
          just recovers by Monday and never connects the two. You feel it longer, so you blamed the years instead of the
          bending.
        </p>
      </>
    ),
  },
  {
    number: "3",
    heading: "Everything you have tried moved the leaves or treated your back",
    image: IMAGES.handOnBack,
    alt: "A man in his sixties straightening up in his fall yard with a hand pressed to his lower back, rake in hand, beside a pile of leaves and a half-filled yard bag",
    body: (
      <>
        <p>Maybe your back is genuinely worn. Nobody here is going to tell you it is in your head.</p>
        <p>
          But look at what you have already tried. A bigger rake. A leaf blower. Those plastic grabber claws. A tarp to
          drag the pile to the curb. A brace you wore twice. Stretching before you start. Paying somebody for one
          weekend and doing it yourself the next. One buyer described his old routine like this:{" "}
          <em>&ldquo;It used to take me hours of blowing then raking and bending to pick up the piles.&rdquo;</em>
        </p>
        <p>
          Every one of those either treats the back after the fact or moves the leaves somewhere else. Not one of them
          changes the thing you actually do forty times a Saturday, which is bend.
        </p>
        <p>
          <strong className="font-bold text-foreground">That is not a shed full of failures.</strong> It is a shed full of
          answers to a question nobody had asked yet.
        </p>
      </>
    ),
  },
]

const SOLUTIONS = [
  "It lifts the leaves off the grass and into its own hopper, so reason 1 stops applying to your yard",
  "No pile means no trips down to it, so reason 2 stops applying to your back",
  "It changes the job instead of treating you, which is what reason 3 never did",
  "The hopper lifts off on four buckles and you tip it into the bag standing up",
  "Picks up leaves, pine needles, acorns, sweetgum balls, twigs and clippings",
  "60 days to decide, free shipping both ways, and $77 of free gear with every size",
]

const REVIEWS = [
  {
    title: "This is awesome!",
    quote:
      "If you hate raking leaves or like me can’t because it’s too painful. This Lawn Sweeper is amazing. 5 min for a chunk of the back yard and that’s me going slow! Worth every penny!!",
    author: "Verified Buyer",
  },
  {
    title: "I was skeptical",
    quote:
      "I had this on my wishlist for over a year, after an aching back from from raking and then picking up leaves. I decided to try it, works well. ... It cut my yardwork time down my over half.",
    author: "Verified Buyer",
  },
  {
    title: "True Lifesaver",
    quote:
      "I absolutely love this product. It saves me so much time and the pain of raking the leaves. ... It only takes me 15 minutes to clean my front yard on 1/4 acre lot. It used to take me hours of blowing then raking and bending to pick up the piles.",
    author: "Verified Buyer",
  },
  {
    title: "Was well worth it. Beats raking!!!",
    quote:
      "Saw ad for this. Thought will it really work? Well it does and so much easier than raking. Easy assembly. Easy to take off the bag. ... I’m 65 and no problem.",
    author: "Verified Buyer, 65",
  },
  {
    title: "It will literally save your back.",
    quote:
      "It also is great at getting lawn clippings it will literally SAVE YOUR BACK and I can’t recommend it enough. I legit would just mow the leaves in prior because raking is way too much on the back lol but this thing changed the game now raking is as easy as one more “mower” style pass.",
    author: "Verified Buyer",
  },
  {
    title: "I’m 39 with sciatica.",
    quote: "I’m 39 with sciatica and a huge yard with a mess of pinecones - this thing is a lifesaver!",
    author: "Verified Buyer, 39",
  },
]

const FAQS = [
  {
    question: "Is it hard to push?",
    answer:
      "It pushes like a walk-behind mower, and the brush height sets the feel. Ten heights on a handle at the side let you dial it in for your grass: one notch up and it rolls. There is nothing to start, fuel or charge. One of our verified buyers is 65 and put it in four words: no problem.",
  },
  {
    question: "How much setup is there?",
    answer:
      "The core arrives assembled. You attach the push frame and the hopper, and most people are done in about fifteen minutes with a screwdriver. It ships free from our US warehouse, so it is in your yard while the leaves are still coming down.",
  },
  {
    question: "How is this different from a leaf blower?",
    answer:
      "A blower moves the leaves into a pile, which saves time on the moving. It does not pick anything up, so you still bend over that pile forty times to bag it. The Yeoman Sweep lifts the leaves into its hopper as you walk, so the pile never exists. If your complaint is the time, a blower helps. If your complaint is your lower back, it is the bending you need to remove.",
  },
  {
    question: "I'm in my 40s. Is this only for older guys?",
    answer:
      "No, because the bend is a leverage problem, not an age problem. Folding over a pile forty times strains a spine at twenty-five the same way it does at seventy-five. One of our verified buyers is 39, has sciatica and a huge yard, and calls it a lifesaver. Younger backs just recover faster and never connect the soreness to the pile.",
  },
  {
    question: "What if it turns out it really was my age?",
    answer:
      "Then you keep your money. Take it through the heaviest weeks of leaf drop the way you normally would, and you have 60 days to decide, with a full refund either way and free shipping both ways. The yard bags and both guides stay with you. You are not betting on your age. You are testing a sweeper.",
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

export default function LeafCleanupWrecksYourBack() {
  const videoWallRef = useRef<HTMLElement | null>(null)
  const ctaRef = useRef<HTMLElement | null>(null)
  const [pastWall, setPastWall] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  // The bar is EARNED, not default: it appears once the video wall has scrolled
  // past, and hides while a real CTA section is on screen. Same as the source.
  useEffect(() => {
    const wall = videoWallRef.current
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
            <img src={IMAGES.author} alt="Walt Brenner" className="h-12 w-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">By Walt Brenner</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Field &amp; Harvest Co. &middot; 12 September 2026
              </span>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-primary bg-muted p-5 sm:p-6">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              <strong className="font-bold text-foreground">
                3,783+ reviews at 4.7 stars. 60 days to decide, free shipping both ways.
              </strong>{" "}
              The Yeoman Sweep is a push lawn sweeper that lifts leaves, pine needles, acorns and clippings off the grass
              and into its own hopper while you walk. Nothing to plug in, fuel or charge, and the core arrives assembled.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              You feel fine most of the week. Then one Saturday of leaves puts you right back to the start, and by
              Sunday evening you are moving like a man ten years older than you were on Friday. And the trees are not
              done. More came down overnight.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              You have probably been told it is your age. That this is just what your fifties, sixties or seventies feel
              like. Maybe someone suggested you hire the yard out, or take it easier, or stretch more before you start.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nobody mentioned the pile. There are only three things going on here, and once you have seen them you
              cannot unsee them. <strong className="font-bold text-foreground">Here they are.</strong>
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-14">
            {REASONS.map((reason) => (
              <section key={reason.number}>
                {reason.loop ? (
                  <Loop
                    src={reason.loop.src}
                    poster={reason.loop.poster}
                    label={reason.alt}
                    className="aspect-[3/2] w-full rounded-sm bg-muted object-cover"
                  />
                ) : (
                  <img
                    src={reason.image}
                    alt={reason.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full rounded-sm object-cover"
                  />
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

          {/* The hinge. Converts the problem half into the product half. */}
          <section className="mt-14 border-t-4 border-foreground pt-10">
            <h2 className="text-pretty text-3xl font-bold leading-snug tracking-tight text-foreground sm:text-4xl">
              That Is Why Homeowners Are Hanging Up The Rake And Walking Their Leaves Up Instead
            </h2>

            <Loop
              src={LOOPS.sweeping.src}
              poster={LOOPS.sweeping.poster}
              label="The Yeoman Sweep lifting a lawn full of leaves into its hopper at walking pace"
              className="mt-6 aspect-square w-full rounded-sm bg-muted object-cover"
            />

            <p className="mt-7 text-lg leading-relaxed text-foreground sm:text-xl">
              The leaves do not have to end up in a pile. Lift them off the grass while you walk and the bending has
              nothing left to do. You stay upright, the forty trips down to the bag disappear, and a fall Saturday stops
              costing you the rest of the week. The Yeoman Sweep does it with{" "}
              <strong className="font-bold">three V-brushes driven by its own wheels</strong>: one turn of the wheels
              spins the brushes five times, fast enough to flick the leaves up into a{" "}
              <strong className="font-bold">7 cubic foot hopper</strong> behind you at a normal walking pace.
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
              They Were Done With The Bending Too
            </h2>
            <p className="mt-2 text-base text-muted-foreground">4.7 out of 5 from 3,783+ reviews</p>

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
              src={IMAGES.uprightWithSweep}
              alt="A homeowner standing fully upright with his hands resting on the Yeoman Sweep on a cleared fall lawn"
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-sm object-cover"
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
                60-Day &ldquo;It Was The Bending&rdquo; Guarantee
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Take it through the heaviest weeks of leaf drop the way you normally would, and see what your back
                  says on Sunday.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  You get sixty days to decide, with a full refund either way and free shipping both ways. The three yard
                  bags and both guides are yours to keep regardless.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <strong className="font-bold text-foreground">
                    You are not betting on your age. You are testing a sweeper.
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
              src={IMAGES.closing}
              alt="A man pushing the Yeoman Sweep across a leaf covered lawn in full autumn color, hopper loaded with maple leaves"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Yeoman Sweep lifts leaves, pine needles, acorns and clippings into its hopper as you walk, so there is
              nothing left to bend down to. The core arrives assembled, you attach the frame and hopper in about fifteen
              minutes, and it ships free from our US warehouse.
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
          <p className="text-center text-xs leading-relaxed text-muted-foreground">&copy; 2026 Field &amp; Harvest Co.</p>
        </div>
      </footer>
    </div>
  )
}
