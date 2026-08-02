"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Play, Star } from "lucide-react"

// ============================================================
// /the-gift-he-will-actually-use — Yeoman Handle — CF010
//
// Dedicated funnel for the CF010 wife-buyer fleet, running on the Better Garden
// Living publisher page with Learn More CTAs.
//
// AWARENESS, and it is an unusual split. Every CF010 ad asserts a RESULT and
// never explains a CAUSE: "get him back to the yard he loves", "stop watching
// him wince", "sits in the shed / used every Saturday". So she lands
// PRODUCT-AWARE and MECHANISM-UNAWARE. She has seen the object and been promised
// the outcome and has no idea why a handle would do anything. That is the
// inverse of the CF003 buyer, who gets the mechanism and doubts the product.
//
// Consequences, all of which shape the copy:
//   - do NOT re-agitate the symptom, she lives it and the ad just showed it
//   - DO teach the cause once, early, in her words, not in degrees of flexion
//   - she has to be able to EXPLAIN IT TO HIM when she hands it over, or the
//     gift dies on the table and ends up in the shed
//   - the gift must not insult him. That is reason 2 and nothing else in the
//     fleet does it.
//
// Byline is an editorial persona, same construct as Walt Brenner. She is the
// WRITER and is deliberately given no personal purchase story: attributing an
// invented purchase to a named woman is a fabricated testimonial in byline
// form. Every lived experience on the page is a verbatim Voice Bank quote.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"
const LANDER_TAG = "gift"
const CTA_LABEL = "CHECK AVAILABILITY >>"
const OFFER_TEXT = "Save Up To 43% Off + 2 Free Yardwork Guides"
// Top banner. Deliberately NOT the bare discount: a gift buyer's first two
// questions are "will it fit his" and "what if it is wrong", and price is the
// third. Leading on those answers them before she starts reading, which is the
// friction a banner is actually for here.
const BANNER_TEXT = "Fits Any Trimmer · 60-Day Money-Back · Save Up To 43% Off"
const SOCIAL_PROOF = "4.8 stars • 800 reviews • 40,000+ trimmers upgraded"

// The bracket resolves the main clause rather than sitting beside it, and
// "he never mentions" is the recognition trigger specific to this avatar: he
// does not complain, she can see it anyway, and that gap is why she is the one
// buying. The anti-shelf promise moved to reason 3, where it belongs; it was
// one ad's hook, not the fleet's.
const HEADLINE_MAIN = "4 Reasons His Trimmer Is Causing The Back Pain He Never Mentions"
const HEADLINE_BRACKET = "(And The Gift That Fixes It)"

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
  author: "/gift-author-ruth.webp",
  leverage: "/bhwt-bends-loads.webp",
  brandRack: "/bhwt-brand-rack.webp",
  clampDetail: "/gift-clamp-detail.webp",
  flatlay: "/bhwt-flatlay.webp",
  // Real customer footage. Shopify negotiates the GIF to animated webp at
  // ~3.2MB for browsers; it sits at the very bottom and is lazy loaded.
  trimmingGif: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
  installGif: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_5.gif?v=1778560234",
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

function VideoWall() {
  const [playing, setPlaying] = useState<number | null>(null)
  return (
    <section className="mt-14 rounded-lg bg-[#3D332A] px-5 py-8 sm:px-7">
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
    heading: "He is not getting old. He is bending for twenty minutes straight.",
    image: IMAGES.leverage,
    alt: "A chiropractor pointing to the loaded lower back of a hinged-forward skeleton. Caption reads: the bend loads your lower back. It is a leverage problem, not a strength problem.",
    body: (
      <>
        <p>
          Hold your arms out in front of you and lean forward at the hips. Now hold it. That is the position, and the
          weight of his own upper body is what his lower back is carrying, on a long lever, the whole time he is out
          there.
        </p>
        <p>
          It is a leverage problem, not a strength problem. Hand that same trimmer to a man of twenty-five for an hour of
          fence line and his back will ache too. He just recovers by Sunday and never connects the two things.
        </p>
        <p>
          Your husband feels it longer.{" "}
          <strong className="font-bold text-foreground">That is the only difference</strong>, and it is why he blamed
          the years instead of the angle.
        </p>
      </>
    ),
  },
  {
    number: "2",
    heading: "This is a fix to his tool. Not a comment on his body.",
    image: IMAGES.brandRack,
    alt: "Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft",
    body: (
      <>
        <p>
          Look at the three machines above. Different brands, different engines, different prices.{" "}
          <strong className="font-bold text-foreground">The same handle, in the same low place, on all of them.</strong>
        </p>
        <p>
          That is not a coincidence and it is not a defect in his. It is the cheapest handle to manufacture and it has
          been the default across the whole industry for decades. Which means whatever is happening to his back is
          happening to every man holding one of these, and it has nothing to do with him.
        </p>
        <p>
          That distinction matters more than it looks, because a man who has done his own yard for forty years does not
          want a present that says he is slowing down. Braces, cushions, supports, anything that treats him as the thing
          needing repair. Most of those get thanked for politely and never opened again.
        </p>
        <p>
          This is not that. Nothing about it is aimed at him. It is a part that goes on a machine, because the machine
          was built wrong, and he is welcome to be annoyed at the manufacturer instead of at his own back.
        </p>
        <p className="border-l-4 border-primary bg-muted p-4 text-foreground">
          <strong className="font-bold">That is also the sentence to use when you hand it to him:</strong> every trimmer
          puts the handle too low, this moves it out to where your hand already is, so you are not bending. Three minutes
          with the allen key.
        </p>
        <p>
          He will understand it immediately, because he has felt it for years without having words for it. And it lands
          as an upgrade to his equipment, which is a gift a man can take.
        </p>
      </>
    ),
  },
  {
    number: "3",
    heading: "It will not end up in the shed.",
    image: IMAGES.installGif,
    alt: "A customer fitting the Yeoman Handle to his trimmer shaft with the included allen key",
    body: (
      <>
        <p>
          The reason most tool gifts fail is not that they are bad tools. It is that they ask for something first.
          Assembly. A trip to the hardware store. Instructions read on a Sunday afternoon. Later never comes, and it sits
          in the shed.
        </p>
        <p>
          This one does not ask for anything. It clamps onto the shaft of the trimmer he already owns, no drilling and no
          cutting, and the factory handle stays exactly where it is. The allen key is in the box.
        </p>
        <p>
          Three minutes, and the first pass is different.{" "}
          <strong className="font-bold text-foreground">
            He does not have to take your word for it or wait a month to notice.
          </strong>
        </p>
        <p>
          It fits 26mm and 28mm shafts, which covers straight and curved shafts across STIHL, Echo, Husqvarna, Ryobi, EGO
          and BLACK+DECKER, gas or battery. You do not need to know what he owns, and you do not need to ask him.
        </p>
      </>
    ),
  },
  {
    number: "4",
    heading: "Not the cheap kind.",
    image: IMAGES.clampDetail,
    alt: "Close view of the machined aluminum clamp on the Yeoman Handle, its bolts, the quick-release lever and the included allen key",
    body: (
      <>
        <p>
          This is the part that is hard to judge from a listing, so here is what to look at. There are twelve dollar
          versions of this online and they are not the same object.
        </p>
        <p>
          Those are thin stamped steel gripping the shaft on a single face. They hold for a few weekends, then the
          vibration finds them and they creep down the shaft mid-job, and he is bent over again with a loose bar
          rattling on his machine. That is the one that ends up in the trash by August.
        </p>
        <p>
          This is machined aluminum with a reinforced bracket that grips two opposite faces, which is why it stays where
          he sets it through a full season.{" "}
          <strong className="font-bold text-foreground">
            It carries a lifetime warranty, which is longer than the warranty on the trimmer it clamps to.
          </strong>
        </p>
        <p>He will still be moving this onto his next machine in ten years.</p>
      </>
    ),
  },
]

const SOLUTIONS = [
  "The grip moves out to his hand, so the bend in reason 1 never happens",
  "Every brand builds the same low handle, which is reason 2, and it changes the machine not the man",
  "Three minutes with the included allen key, so reason 3 does not apply",
  "Machined aluminum and a lifetime warranty, which is reason 4",
  "Fits the trimmer already in his shed, 26 and 28mm, gas or battery",
  "Two free yardwork guides included with the handle",
  "60-day trial and a lifetime warranty on the hardware",
]

const REVIEWS = [
  {
    title: "He isn't hunched over.",
    quote:
      "I bought this for my husband and he is using it for the 1st time today. Absolutely loves it! He isn't hunched over and said his shoulders don't hurt. We are buying 2 more for our kids, that is how much this product is amazing.",
    author: "Verified Buyer",
  },
  {
    title: "Nore does he complain about yardwork so much.",
    quote:
      "If I could give the bar 100 gold stars I would. My husband is 6'11 after 20mn of using the weed eater he's done, not even taking breaks help him any longer. But now with the new bar he doesn't hurt as much, nore does he complain about yardwork so much.",
    author: "Verified Buyer",
  },
  {
    title: "He commented on how his back would hurt.",
    quote:
      "We bought this to help my husband's back. When he would use the weed eater he commented on how his back would hurt. This product allows him to stand straight while using the weed eater thus relieving the stress on his back.",
    author: "Verified Buyer",
  },
  {
    title: "That bad angle.",
    quote:
      "My husband has a bad back & it's hard for him to weed eat at that bad angle. This will be great for him!!",
    author: "Verified Buyer",
  },
  {
    title: "Yeah, i'd try it.",
    quote: "I showed it to my husband and he said; “yeah, i'd try it”.",
    author: "Verified Buyer",
  },
  {
    title: "Following back surgery a few years ago.",
    quote:
      "To help with my husband's back due to weakness and pain in low back following back surgery a few years ago.",
    author: "Verified Buyer",
  },
]

const FAQS = [
  {
    question: "Will it fit his trimmer? I don't know what brand he has.",
    answer:
      "You do not need to. It fits 26mm and 28mm shafts, which covers the straight and curved-shaft trimmers sold by STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER, in both gas and battery. That is nearly every string trimmer sold to homeowners. If he owns two machines, the clamp comes off one and goes onto the other in about a minute.",
  },
  {
    question: "Will he actually use it, or will it sit in the shed?",
    answer:
      "The two things that put a tool gift in the shed are setup and delay. This has neither. It clamps on in about three minutes with the allen key that comes in the box, and the difference shows up on the first pass rather than after a month of use.",
  },
  {
    question: "Is he going to think I'm saying he's getting old?",
    answer:
      "It is a part for his trimmer, not a support for his back, and that is a real difference rather than a way of putting it. Every major brand mounts the handle too low, which is a manufacturing decision that has nothing to do with him. Most men are relieved to find out the tool was the problem.",
  },
  {
    question: "Is a handle enough of a gift?",
    answer:
      "It comes with two yardwork guides and a lifetime warranty, so it is not a stocking filler. But the honest answer is that this is not a gift he will value by its price. It is one he will notice every Saturday, which is more than most presents manage.",
  },
  {
    question: "How is it different from the cheap handles online?",
    answer:
      "Most of them are thin stamped steel gripping the shaft on a single face. They hold until the vibration finds them, then they creep down the shaft mid-job. The Hold-Fast™ is reinforced with a dual-contact pad that grips two opposite faces, on an aluminum-alloy arm, and it carries a lifetime warranty.",
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

export default function TheGiftHeWillActuallyUse() {
  const reasonsRef = useRef<HTMLDivElement | null>(null)
  const ctaRef = useRef<HTMLElement | null>(null)
  const [pastReasons, setPastReasons] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    const obs: IntersectionObserver[] = []
    if (reasonsRef.current) {
      const o = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting && e.boundingClientRect.top < 0) setPastReasons(true)
        },
        { threshold: 0 },
      )
      o.observe(reasonsRef.current)
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

  const showSticky = pastReasons && !ctaVisible

  return (
    <div style={PAGE_THEME} className="min-h-screen bg-background text-foreground">
      <div className="bg-primary py-2.5 text-center">
        <p className="px-4 text-[11px] font-bold uppercase tracking-wide text-primary-foreground sm:text-sm">
          {BANNER_TEXT}
        </p>
      </div>

      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-4">
          <nav aria-label="Breadcrumb">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
              Home &gt; Home &amp; Garden &gt; Gifts For Him
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
            <img src={IMAGES.author} alt="Ruth Alderman" width={128} height={128} className="h-12 w-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">By Ruth Alderman</span>
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
              The Yeoman Handle is a machined aluminum grip that bolts onto the trimmer he already owns. No drilling, no
              new machine. Fits 26mm and 28mm shafts across STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER, gas or
              battery.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              You have watched this happen. He comes in from the yard moving carefully, lowers himself onto the couch,
              and says nothing about it, because he never does.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Here is the part nobody explains, and it has very little to do with his age. Next time his trimmer is
              leaning against the shed, look at where his free hand has to go. The loop handle sits low on the shaft,
              down near the engine. To keep the cutting head flat on the grass he has to fold forward at the waist to
              reach it, and once he is folded, he stays folded, for as long as he is out there.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Twenty minutes of that would put a twenty-five year old on the couch. And every major brand builds it in
              the same low position. STIHL, Echo, Ryobi, EGO, Husqvarna. Different engines, different prices, the same
              handle.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              So it is not his back that is the problem, and it is not the years.{" "}
              <strong className="font-bold text-foreground">It is where his hands have to go to hold the thing.</strong>
            </p>
          </div>

          <div ref={reasonsRef} className="mt-12 flex flex-col gap-14">
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

          <section className="mt-14 border-t-4 border-foreground pt-10">
            <h2 className="text-pretty text-3xl font-bold leading-snug tracking-tight text-foreground sm:text-4xl">
              That Is Why 40,000+ Of These Have Been Bolted Onto Trimmers People Already Owned
            </h2>
            <img
              src={IMAGES.manHoldingTrimmer}
              alt="A man standing fully upright, back straight, hand out on the raised Yeoman grip while trimming a lawn edge"
              loading="lazy"
              decoding="async"
              className="mt-6 aspect-[4/3] w-full rounded-sm bg-muted object-cover"
            />
            <p className="mt-7 text-lg leading-relaxed text-foreground sm:text-xl">
              The grip does not have to sit down there. Move it out to where his hand already falls and there is nothing
              left to bend down to. He stands up, the lever disappears, and Saturday stops costing him Sunday. The fixed
              angle that does it is the <strong className="font-bold">Plumb-Set&trade;</strong>, and the{" "}
              <strong className="font-bold">Hold-Fast&trade;</strong> bracket is what keeps it there through a season of
              vibration.
            </p>
            <h3 className="mt-9 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              What that does to the four reasons above
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

          <VideoWall />

          <section className="mt-14">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              What Other Wives Said After They Bought It
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
                      "Two free yardwork guides",
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
                60-Day &ldquo;He&apos;ll Actually Use It&rdquo; Guarantee
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Give it to him, let him bolt it on, and let him work one full Saturday the way he normally would.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  If his back cannot tell the difference within 60 days, we refund you in full and you do not have to
                  send it back. The lifetime warranty on the hardware runs alongside it.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <strong className="font-bold text-foreground">
                    You are not guessing at a gift. You are giving him something he can test on his own yard.
                  </strong>
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Common Questions Before You Buy It
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
            <img
              src={IMAGES.trimmingGif}
              alt="A man trimming the edge of a mulch bed standing fully upright, hand out on the Yeoman grip"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Yeoman clamps onto the trimmer he already owns and extends the grip out to meet his hand, so there is
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
