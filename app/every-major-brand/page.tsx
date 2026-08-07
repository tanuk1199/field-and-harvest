"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { EmbAsset } from "@/components/emb-asset"

// ============================================================
// /every-major-brand : The Yeoman Handle
// PRODUCT-AWARE, OFFER-DRIVEN LISTICLE. Canonical template
// shape: promo banner, offer badge under the hero, early CTA,
// numbered reasons, product showcase, reviews, FAQ, sticky bar.
//
// THE FRAME, and the thing to protect in every future edit:
// this page is "one handle fixes what every major brand got
// wrong", NOT "here is a problem every major brand has". The
// difference is where the reader lands. Problem-framing makes
// him diagnose; fix-framing makes him shop, and he is already
// product-aware so diagnosis is wasted motion. Every reason
// heading below therefore states the FIX and lets the problem
// appear only as the half-sentence that makes the fix legible.
//
// Built because the matching angle is taking heavy BOF spend
// with no offer markers on the creative, so the angle converts
// on its own merits. This is the offer-carrying version of it.
//
// Copy discipline enforced here:
//   - mechanism is "extends the grip OUT to your hand", never
//     "chest height" and never "lifts 9 inches" (both are live
//     defects on /the-trimmer-switch, deliberately not carried)
//   - social proof is 40,000+, not the stale 20,000
//   - every review is verbatim Customer Voice Bank, tagged by
//     identity, no invented names
//   - no em-dashes
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"
const LANDER_TAG = "emb"

const OFFER_TEXT = "Save Up To 43% Off + 2 Free Yardwork Guides"
const SOCIAL_PROOF = "4.8 stars • 800 reviews • 40,000+ trimmers upgraded"

const BRANDS = ["STIHL", "Echo", "Husqvarna", "Ryobi", "EGO", "Greenworks", "BLACK+DECKER"]

const PRODUCT_THUMBS = ["productThumb1", "productThumb2", "productThumb3", "productThumb4"] as const
type GalleryKey = "productMain" | (typeof PRODUCT_THUMBS)[number]

// Click-to-play wall, ported from /see-who-else-switched. The <video>
// only mounts on click, so zero mp4 bytes ship in the initial HTML and
// the block costs five webp posters.
//
// It renders in the DARK band after reason 02, not at the bottom. A
// collage proves VOLUME and is scanned in half a second; this traffic
// arrives off a STATIC and has never seen the thing move, so what it
// is missing is FUNCTION. The collage still runs, at the bottom, doing
// headcount only. They are not substitutes. This one also proves the
// angle: five clips is five different machines, so "fits every major
// brand" gets shown instead of asserted.
const CLIPS = [
  { poster: "/twb-poster1.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/1966caf46d5a417885bf9fc6106ba477/1966caf46d5a417885bf9fc6106ba477.HD-1080p-4.8Mbps-83902302.mp4?v=0", alt: "A customer using a string trimmer fitted with the Yeoman Handle" },
  { poster: "/twb-poster2.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/70fb239499c4492dba1212ba56855684/70fb239499c4492dba1212ba56855684.HD-1080p-2.5Mbps-83902306.mp4?v=0", alt: "A customer standing upright while trimming with the Yeoman Handle fitted" },
  { poster: "/twb-poster3.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/dbdac73c19ad4877bf61135ac7dd70fe/dbdac73c19ad4877bf61135ac7dd70fe.HD-1080p-4.8Mbps-83902300.mp4?v=0", alt: "Close view of the Yeoman Handle clamped to a trimmer shaft in use" },
  { poster: "/twb-poster4.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/e5d5501b962642339683e5d3f68853cd/e5d5501b962642339683e5d3f68853cd.HD-1080p-3.3Mbps-83902297.mp4?v=0", alt: "An older customer working a fence line with the Yeoman Handle fitted" },
  { poster: "/twb-poster5.webp", src: "https://fieldandharvestco.com/cdn/shop/videos/c/vp/f0f18bb534b4427dad4f3a2f4419a301/f0f18bb534b4427dad4f3a2f4419a301.HD-1080p-4.8Mbps-83902299.mp4?v=0", alt: "A customer demonstrating the extended grip position on his own trimmer" },
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

function VideoWall() {
  const [playing, setPlaying] = useState<number | null>(null)
  return (
    <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {CLIPS.map((clip, i) => (
        <div
          key={clip.poster}
          className="relative aspect-[9/16] w-[46%] shrink-0 snap-start overflow-hidden rounded-lg bg-black sm:w-[31%]"
        >
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
              <img
                src={clip.poster}
                alt={clip.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/30">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-lg">
                  <Play className="ml-0.5 h-6 w-6 fill-[#4A3F35] text-[#4A3F35]" aria-hidden="true" />
                </span>
              </span>
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

// Verbatim Customer Voice Bank. Tagged by identity rather than a
// name, because the names on the sibling template are invented and
// a brand-claim page is the wrong place to be inventing anything.
const REVIEWS = [
  {
    tag: "Age 72",
    headline: "Wish I would have bought this years ago.",
    quote:
      "I am 72 years old, using my big still weed eater hurt my back after about 20 minutes. I just finished about 1 hr. And my back is just fine! Wish I would have bought this years ago.",
  },
  {
    tag: "6'4, back surgery in 2005",
    headline: "First time I could weed eat with no pain.",
    quote:
      "This thing is a lifesaver. 6'4 and this thing kept me from bending over. Major back surgery in 2005 and first time I could weed eat with no pain. Easy to install. Took 3 minutes.",
  },
  {
    tag: "Started out skeptical",
    headline: "I was skeptical. I was wrong.",
    quote:
      "I was skeptical that anything could make weedeating easier. I was wrong. I was able to weedeat my entire yard including around my pond, (2 hrs of weedeating) and my back did not get tight or hurt. I usually do half one day then half another.",
  },
  {
    tag: "Grounds crew, large property",
    headline: "No more slouching and hurting my back.",
    quote:
      "Should have bought this a long time ago. Definitely makes weed eating a breeze. No more slouching and hurting my back. I use this all the time on a grounds crew on a large scale property.",
  },
]

export default function EveryMajorBrand() {
  const [activeImage, setActiveImage] = useState<GalleryKey>("productMain")

  // Tag store-bound links so PDP traffic reads back to this route.
  // No Intelligems bundle on this page: it carries no split test, so
  // loading it would only risk colliding with a live experiment.
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ============================================
          PROMOTIONAL BANNER
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">Save Up To 43% Off</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 Free Yardwork Guides</span>
        </p>
      </div>

      {/* ============================================
          HEADER : Logo
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <EmbAsset
          name="logo"
          alt="Field &amp; Harvest Co."
          loading="eager"
          className="h-7 md:h-10 w-auto object-contain"
          fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight"
        />
      </header>

      {/* ============================================
          HERO
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <EmbAsset
            name="heroImage"
            alt="A man walking a mulch bed edge fully upright, hand out on the Yeoman grip fitted to his trimmer"
            loading="eager"
            className="w-full h-full object-cover"
            fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
          />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-[13px] sm:text-sm text-foreground leading-snug">
            {OFFER_TEXT}
          </span>
        </div>

        <div className="mt-5 text-center">
          <h2
            id="hero-headline"
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight"
          >
            6 Reasons One Handle Fixes What{" "}
            <span className="text-[#C86F4C]">Every Major Brand Got Wrong</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            They all mount the grip below your reach. The Yeoman Handle&trade; puts it back out where your hand
            already is, and the back pain goes with it.
          </p>
        </div>

        {/* NO LEAD BLOCK. This traffic is product-aware and does not read a
            lead, so the fold goes headline, compatibility line, button. The
            brand list is the only thing that earns space here: it scans as a
            spec rather than as prose, and fit is the one thing he checks
            before the price. Everything else lives in the reasons. */}
        <p className="mt-5 max-w-md mx-auto text-center text-base font-semibold leading-snug text-foreground/80">
          STIHL, Echo, Husqvarna, Ryobi, EGO, BLACK+DECKER. Same part, same three minutes, same result.
        </p>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Get Mine At 43% Off &rarr;
          </Button>
        </a>

        <div className="mt-5 text-center">
          <div className="flex justify-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-foreground font-medium">{SOCIAL_PROOF}</p>
        </div>
      </section>

      {/* ============================================
          LISTICLE : 6 reasons, every heading states the FIX
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 : the angle's own reason, so it leads */}
        <div id="reason-1" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Fits Every Major Brand
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            One handle fits every trimmer on the rack
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            26mm and 28mm shafts, gas or battery
          </p>

          <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <EmbAsset
              name="reason1Image"
              alt="Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {BRANDS.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-bold text-foreground"
              >
                {b}
              </span>
            ))}
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Almost every trimmer sold runs a 26mm or 28mm shaft. Straight or curved, gas or battery, one part
            covers the lot, and the factory handle stays where it is.{" "}
            <span className="font-bold text-foreground">
              You are not replacing your trimmer. You are finishing it.
            </span>
          </p>
        </div>

        {/* Reason 2 : the outcome */}
        <div id="reason-2" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Back Pain
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            The grip comes out to your hand. Nothing left to bend down to.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Plumb-Set&trade; Geometry
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <EmbAsset
              name="reason2Image"
              alt="Side by side comparison: bent over the factory handle with the lower back highlighted in red, and standing fully upright with the Yeoman fitted, marked with a green check"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Every brand sets the loop low on the shaft, so you fold at the waist and stay folded for the whole
            pass. The Plumb-Set&trade; extends the grip out to where your off hand already falls, so your spine
            stays plumb.{" "}
            <span className="font-bold text-foreground">Upright the whole time. No bend, no back pain.</span>
          </p>
        </div>

      </section>

      {/* ============================================
          THE DEMO BAND : full-bleed, dark, deliberately unlike
          anything else on the page.

          It sits HERE, immediately after reason 02, because reason 02
          is the sentence he has to believe ("the grip comes out to your
          hand") and this is the proof of it. Reasons 03 to 06 are all
          closing material and they read better once the core claim has
          been demonstrated rather than asserted.

          The dark surface is doing real work: on a page of cream cards
          it is the only hard visual interrupt, so the eye stops. The
          collage stays at the bottom doing headcount, which is a
          different job (see the closing band).
          ============================================ */}
      <section className="bg-[#3D332A] py-12 md:py-14">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center">
            <span className="inline-block h-px w-12 bg-[#DDA15E]/60 align-middle" aria-hidden="true" />
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#DDA15E]">
              See It On A Real Trimmer
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#F4EFE3] text-balance leading-tight">
              Five Different Machines. Five Different Yards.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#B8AA98]">
              Their own trimmers, their own yards, nothing staged. Watch where the hand sits.
            </p>
          </div>

          <VideoWall />

          <p className="mt-1 text-center text-xs text-[#8F8375]">Tap any clip to play. Swipe for more.</p>

          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full mt-7 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              Fit Mine At 43% Off &rarr;
            </Button>
          </a>

          <p className="mt-4 text-center text-sm text-[#B8AA98]">{SOCIAL_PROOF}</p>
        </div>
      </section>

      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 3 : install */}
        <div id="reason-3" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Three-Minute Install
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Three minutes, one allen key, no drilling
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            No cutting. No zip ties. Nothing permanent.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <EmbAsset
              name="reason3Image"
              alt="A man tightening the Yeoman bracket onto his trimmer shaft with the included allen key"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The bracket opens around the shaft, slides to where your hand falls, and tightens with the allen key
            in the box. Nothing drilled, nothing cut. It moves to a second trimmer in about a minute.{" "}
            <span className="font-bold text-foreground">Fitted before the coffee goes cold.</span>
          </p>
        </div>

        {/* Reason 4 : the knock-off answer, pre-loaded */}
        <div id="reason-4" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Not The Cheap Kind
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Machined aluminum that stays where you set it
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Hold-Fast&trade; Bracket
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <EmbAsset
              name="reason4Image"
              alt="Labelled close view of the Hold-Fast bracket on a trimmer shaft: machined aluminum, reinforced bracket gripping two opposite faces, stays put, lifetime warranty"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The difference between this and a fifteen dollar bolt-on is the clamp, not the bar. The
            Hold-Fast&trade; is machined aluminum and grips the shaft on two opposite faces. A stamped steel clamp
            grips one, holds a few weekends, then the vibration finds it and it creeps down the shaft mid job.{" "}
            <span className="font-bold text-foreground">That is the part you are paying for.</span>
          </p>
        </div>

        {/* Reason 5 : adjustability */}
        <div id="reason-5" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Sets To You
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            It slides to your height, not the factory&apos;s
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Five foot six to six foot seven, same part
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <EmbAsset
              name="reason5Image"
              alt="The Yeoman grip being slid along the trimmer shaft and locked in position"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The factory loop is bolted where the factory decided, which suits almost nobody. Loosen one bolt and
            the Yeoman slides anywhere along the shaft and locks there. Buyers run it from five foot six to six
            foot seven on the same part.{" "}
            <span className="font-bold text-foreground">
              Two people in the house, one handle, ten seconds between them.
            </span>
          </p>
        </div>

        {/* Reason 6 : risk reversal closes the stack */}
        <div id="reason-6" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Risk-Free
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            60 days on your own yard. Lifetime warranty on the hardware.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            We cover return shipping
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <EmbAsset
              name="reason6Image"
              alt="The Yeoman Handle laid beside worn gloves and secateurs with a lifetime warranty seal"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Bolt it on, work a full Saturday, find out on your own back. If it cannot tell the difference within
            60 days we refund you in full and cover return shipping. After that the hardware is covered for as
            long as you own it.{" "}
            <span className="font-bold text-foreground">The last trimmer handle you buy.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          CLOSING COLLAGE : headcount on the way into the buy box.
          No CTA here, the product showcase directly below carries
          one and two buttons back to back is noise.
          ============================================ */}
      <section className="bg-[#F4EFE3] py-12">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C86F4C] mb-2">
              40,000+ Trimmers Upgraded
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
              Every Brand On The Rack, In Somebody&apos;s Yard
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md bg-muted">
            <EmbAsset
              name="proofGrid"
              alt="Six real customers using the Yeoman Handle on six different string trimmers in their own yards and garages"
              className="w-full h-auto object-cover"
              fallbackClassName="w-full aspect-[4/3] flex items-center justify-center text-4xl"
            />
          </div>

          <p className="mt-6 text-center text-base leading-relaxed text-foreground/80">
            Different makes, different shafts, different heights. One part fitted to all of them.
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SHOWCASE
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-[10px] sm:text-xs font-bold mb-5 px-4 py-1.5 whitespace-normal text-center leading-snug">
            Lifetime Warranty + 60-Day Guarantee
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            The Handle That Goes On The One You Already Own
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One handle. Two free yardwork guides. Lifetime warranty. Fits whatever brand is already in your shed.
          </p>

          <div className="mb-8 text-center">
            <div className="flex justify-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-foreground font-medium">{SOCIAL_PROOF}</p>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-[11px] sm:text-sm font-bold tracking-wide leading-snug">Today: {OFFER_TEXT}</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <EmbAsset
                name={activeImage}
                alt="The Yeoman Handle"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
              />
            </div>

            <div className="grid grid-cols-4 gap-1.5 mb-5">
              {PRODUCT_THUMBS.map((name, i) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveImage(name)}
                  aria-label={`Show product view ${i + 1}`}
                  aria-pressed={activeImage === name}
                  className={`relative aspect-square rounded-md border-2 bg-muted transition-colors cursor-pointer overflow-hidden p-0 ${activeImage === name ? "border-primary" : "border-border hover:border-primary/60"}`}
                >
                  <EmbAsset
                    name={name}
                    alt={`Product view ${i + 1}`}
                    className="w-full h-full object-cover"
                    fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold"
                  />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <EmbAsset name="benefitIcon1" alt="Fit" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">
                  Fits 26 and 28mm shafts across every major brand
                </p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <EmbAsset name="benefitIcon2" alt="Posture" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">
                  The Plumb-Set&trade; extends the grip out to your hand
                </p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <EmbAsset name="benefitIcon3" alt="Install" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">
                  Three minutes with the included allen key, no drilling
                </p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <EmbAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">
                  60-day trial + lifetime warranty on the hardware
                </p>
              </div>
            </div>

            <a href={PDP_URL}>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-foreground text-foreground font-bold hover:bg-muted bg-transparent py-6 rounded-lg"
              >
                See Full Product Details
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          REVIEWS : verbatim Voice Bank, tagged by identity
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Owners Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800 reviews</p>
        </div>

        <div className="space-y-4">
          {REVIEWS.map((r) => (
            <div key={r.tag} className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
                ))}
              </div>
              <p className="text-sm font-bold text-foreground mb-2">&ldquo;{r.headline}&rdquo;</p>
              <p className="text-sm text-foreground/75 leading-relaxed mb-3">{r.quote}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-foreground">{r.tag}</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything worth knowing before you fit one.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it fit my trimmer?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Almost certainly. It fits 26mm and 28mm shafts, which is what STIHL, Echo, Husqvarna, Ryobi, EGO,
              Greenworks and BLACK+DECKER put on their straight and curved shaft machines, gas and battery alike.
              Measure your shaft once if you want to be sure. If you own two trimmers, the clamp comes off one and
              goes onto the other in about a minute.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How hard is it to install?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Three minutes with the allen key that comes in the box. The bracket clamps around the shaft, slides
              to wherever your hand naturally falls, then tightens down. No drilling, no cutting, no permanent
              change to the trimmer, and the factory handle stays where it is.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              I have seen cheaper ones. Are they the same thing?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              No, and the difference is in the clamp rather than the bar. The Hold-Fast&trade; is machined and
              grips the shaft on two opposite faces. A stamped steel clamp grips one, holds for a few weekends,
              then the vibration finds it and it creeps down the shaft mid job. That is the part you are paying
              for, along with the lifetime warranty behind it.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if my back is worse than most?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The bend is a leverage problem, so removing it helps regardless of what shape your back is in to
              begin with. Several of the buyers above have had spinal surgery. That said, this is a handle and not
              a treatment, so if you have a diagnosed condition it is worth a word with your doctor. The 60-day
              trial exists so you can find out on your own yard.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What does the lifetime warranty cover?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The handle and the bracket hardware, for as long as you own it. It is a machined part living
              outdoors on a vibrating tool, so if it ever cracks, strips or stops holding its position we replace
              it. That runs alongside the separate 60-day trial.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============================================
          STICKY CTA
          ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#4A3F35]/95 backdrop-blur-md border-t-2 border-[#4A3F35] py-4 px-4 z-50 shadow-2xl">
        <div className="max-w-lg mx-auto">
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 text-sm sm:text-base rounded-lg shadow-lg transition-all whitespace-normal leading-snug"
            >
              Save Up To 43% + 2 Free Yardwork Guides &rarr;
            </Button>
          </a>
        </div>
      </div>

      <footer className="border-t border-border pb-28 pt-8 sm:pb-8">
        <div className="max-w-lg mx-auto px-4">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            &copy; 2026 Field &amp; Harvest Co. Individual results vary. Reviews are from verified buyers. Brand
            names are used to indicate shaft compatibility only and imply no affiliation or endorsement. This page
            is advertising and is not medical advice; talk to your doctor about persistent back pain.
          </p>
        </div>
      </footer>
    </div>
  )
}
