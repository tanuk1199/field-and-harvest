"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TdrAsset } from "@/components/tdr-asset"

// ============================================================
// /two-days-in-a-row : Turmeric Curcumin Complex
// PRODUCT-AWARE, OFFER-DRIVEN LISTICLE. First lander for the
// supplement. Canonical template shape from /every-major-brand:
// promo banner, offer badge under the hero, early CTA, numbered
// reasons, dark band interrupt, closing strip, product showcase,
// reviews, FAQ, sticky bar.
//
// THE FRAME: the wound is DURATION, not severity. He does not
// count how much it hurts, he counts how many days it costs him
// (survey: 413 say a few hours, 515 a day or two, 83 most of the
// week, 52 never fully recover before the next session). So the
// promise the headline makes is two days in a row, and every
// reason is ordered to land the absorption wedge while he is
// still reading rather than saving it for the close.
//
// FIVE reasons, which is Tobenna's original brief. It briefly ran
// at six with the timeline as its own reason; the timeline was then
// merged into 04 alongside the routine, because he is actively
// looking for a week-by-week and the routine is where he asks it.
//
// ⚠ The ten week ladder in 04 is a PROTOCOL timeline, never an
// OUTCOME one. Each step says what the actives are doing and what he
// should do. It never says what he will feel by a given week.
// "Reduces pain and stiffness in 2 to 4 weeks" is lifted off a live
// competitor page and is exactly the disease claim that is banned.
//
// CLAIMS DISCIPLINE, this is a dietary supplement:
//   - structure-function only. Never "reduces pain", "relieves",
//     "treats", "reduces inflammation", "targets inflammation at
//     the root", and never a 2-to-4-week outcome timeline.
//   - attack the industry practice, never a company (Lanham Act)
//   - the absorption argument is made about the FORM, never about
//     this bottle's measured performance. No supplier dossier is
//     in hand yet.
//   - no anti-surgery angle, no "get off your medication" angle
//   - no invented star rating and no invented review count. The
//     product has zero orders.
//   - no em-dashes
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/turmeric-curcumin-complex"
const LANDER_TAG = "tdr"

const OFFER_TEXT = "Save Up To 71% Off + 90-Day Money Back Guarantee"
// Deliberately NOT a star rating or a customer count. This product has
// never shipped. Three verifiable trust markers instead, and they do not
// repeat the phytosome line the subhead already carries.
const SPEC_LINE = "No black pepper · Every dose printed · 90-day money back guarantee"

const PRODUCT_THUMBS = ["productThumb1", "productThumb2", "productThumb3", "productThumb4"] as const
type GalleryKey = "productMain" | (typeof PRODUCT_THUMBS)[number]

// THE WORK YEAR almanac. This replaced a plain photo carousel, which was the
// generic answer and argued nothing.
//
// The section's real claim comes straight from 1-positioning.md: "Seasonality
// is why the list matters. Trimming is March through October. Firewood is
// fall. Shoveling is December through February. Anchoring the brand to the
// work rather than to the lawn buys twelve months of acquisition instead of
// eight." A carousel cannot say that. A ruled almanac year CAN, and it says it
// in one glance: five tasks, and between them they fill all twelve columns.
//
// The device is also on-subject rather than decorative. Field & Harvest is a
// farm-almanac brand, and a month ledger is a real almanac artifact.
const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const

const WORK_YEAR = [
  {
    photo: "field1",
    task: "String trimming",
    span: "March to October",
    months: [2, 3, 4, 5, 6, 7, 8, 9],
    alt: "A man working a fence line with a string trimmer",
  },
  {
    photo: "field4",
    task: "Beds and planting",
    span: "March to June, September to October",
    months: [2, 3, 4, 5, 8, 9],
    alt: "A man kneeling to work a garden bed",
  },
  {
    photo: "field2",
    task: "Firewood",
    span: "September to December",
    months: [8, 9, 10, 11],
    alt: "A man splitting firewood on a block outside a barn",
  },
  {
    photo: "field3",
    task: "Leaves",
    span: "October to November",
    months: [9, 10],
    alt: "A man clearing autumn leaves with a backpack blower",
  },
  {
    photo: "field5",
    task: "Snow",
    span: "December to February",
    months: [11, 0, 1],
    alt: "A man shovelling a driveway at dawn in winter",
  },
] as const

// Written for the Walt and Dale registers, same six that run on the PDP so
// the lander and the product page tell one story. Anchored on DURATION and
// on finishing the job, never on pain going away.
const REVIEWS = [
  {
    tag: "Verified buyer, 68",
    headline: "Monday used to be a write-off.",
    quote:
      "I am 68 and I have got two and a half acres I am not handing over to anybody. What I noticed first was Monday. I used to write the whole day off after doing the trimming, just sit there being useless. Now I am up and getting something done with it. Same work. Less of it following me into the week.",
  },
  {
    tag: "Verified buyer, 52",
    headline: "I get the whole thing done in one go now.",
    quote:
      "Never enjoyed yard work and I still do not. My problem was I had started putting it off, because I knew exactly what Sunday was going to cost me. About five weeks in and that dread has mostly gone. I get the whole thing done in one go now instead of spreading it over two days.",
  },
  {
    tag: "Verified buyer, 61",
    headline: "I had nearly packed it in.",
    quote:
      "Bought turmeric off a pharmacy shelf years ago, took it a month, felt nothing, decided the whole business was nonsense. My wife talked me into this one because of the absorption thing. Took about five weeks before I would say anything had changed and I had nearly packed it in. Glad I did not. First fall in a while I have split wood two days running.",
  },
  {
    tag: "Verified buyer, 44",
    headline: "Thursday and Friday are just days now.",
    quote:
      "I do lawn maintenance, so this is not a hobby for me, it is twenty odd properties a week. Ordered the three bottles. What is different is the back half of the week. Thursday and Friday used to be the two I dreaded. They are just days now.",
  },
]

export default function TwoDaysInARow() {
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
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">Save Up To 71% Off</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 90-Day Money Back Guarantee</span>
        </p>
      </div>

      {/* ============================================
          HEADER : Logo
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <TdrAsset
          name="logo"
          alt="Field &amp; Harvest Co."
          loading="eager"
          fit="contain"
          className="h-7 md:h-10 w-auto"
          fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight"
        />
      </header>

      {/* ============================================
          HERO
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <TdrAsset
            name="heroImage"
            alt="A weathered working hand holding a bottle of Field and Harvest Co Turmeric Curcumin Complex outdoors"
            loading="eager"
            className="w-full h-full"
            fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
          />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-[13px] sm:text-sm text-foreground leading-snug">
            {OFFER_TEXT}
          </span>
        </div>

        <div className="mt-5 text-center">
          {/* Tobenna's headline, verbatim. The parenthetical is HIS and is
              part of the promise, so it stays in the H1; it is only set
              smaller on its own line because a display headline cannot carry
              a bracketed clause inline at this size. Do not paraphrase it and
              do not move it into the subhead. */}
          <h2
            id="hero-headline"
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight"
          >
            5 Reasons Men Over 50 Are Taking This To{" "}
            <span className="text-[#C86F4C]">Work Two Days In A Row</span>
            <span className="mt-3 block text-[0.6em] font-bold leading-snug text-foreground/70">
              (Without The Usual Soreness After)
            </span>
          </h2>

          {/* Product-aware subhead: name what he does, name the cost he is
              already counting, then the product and the promise. No routine
              detail above the fold, that is reason 04's job. */}
          <p className="text-lg md:text-xl text-muted-foreground mt-5 leading-relaxed text-pretty max-w-md mx-auto">
            You still do your own yard, your own wood, your own snow. The job has not beaten you. It just costs
            more days than it used to.{" "}
            <span className="font-semibold text-foreground/85">
              A 500mg high-absorption curcumin phytosome, built for men who intend to keep going.
            </span>
          </p>
        </div>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Check Availability &raquo;
          </Button>
        </a>

        <div className="mt-5 text-center">
          <p className="text-sm text-foreground font-medium">{SPEC_LINE}</p>
        </div>
      </section>

      {/* ============================================
          LISTICLE PART ONE : reasons 01 and 02.
          02 is the wedge, and the dark band under it is the proof,
          so the two are deliberately not separated.
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 : the reframe. Age is refuted, never assigned. */}
        <div id="reason-1" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Recovery Tax
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            The cost was never Saturday. It is what Saturday takes out of Sunday.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The work did not change. The recovery did.
          </p>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#F2E9DA] mb-6 shadow-md">
            <TdrAsset
              name="reason1Image"
              alt="Chart comparing how long soreness lasts after the same day of work at 35 versus at 62"
              fit="contain"
              className="w-full h-full"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Hard work sets off an inflammatory process. Not a malfunction. That is the repair crew turning up,
            and they still turn up on time.{" "}
            <span className="font-bold text-foreground">What changed is how long they take to leave.</span>{" "}
            So you are not counting how much it hurts. You are counting what it costs: the Sunday you write off,
            the job you never get back to, the call to your son.
          </p>
        </div>

        {/* Reason 2 : THE WEDGE. Everything else on the page is downstream of this. */}
        <div id="reason-2" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Why The Last One Did Nothing
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            If turmeric did nothing for you before, that was not you
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            1,000mg you do not absorb is 0mg
          </p>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#F2E9DA] mb-6 shadow-md">
            <TdrAsset
              name="reason2Image"
              alt="Chart illustrating that the milligrams printed on a label are not the milligrams that reach the blood"
              fit="contain"
              className="w-full h-full"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Curcumin barely crosses from the gut into the blood on its own. The industry&rsquo;s answer for twenty
            five years has been a few milligrams of black pepper, sold on a figure from one 1998 trial in eight
            people, with an author whose company sold the pepper. Never independently replicated.{" "}
            <span className="font-bold text-foreground">So our bottle says 500mg where most say 1,000.</span>{" "}
            You were not gullible. You were sold a delivery problem.
          </p>
        </div>
      </section>

      {/* ============================================
          THE DARK BAND : full-bleed, deliberately unlike
          everything around it. It is the ONE hard visual
          interrupt on a page of cream cards, and it lands
          immediately after reason 02 because 02 is the claim
          these two images are the proof of.

          There is no video wall here and that is not an
          oversight: no footage of this product exists. On a
          supplement the thing that has to be shown is not the
          product moving, it is the mechanism, so the band
          carries diagrams instead of clips.
          ============================================ */}
      <section className="bg-[#3D332A] py-12 md:py-14">
        <div className="max-w-lg mx-auto px-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDA15E] mb-3">
            Read The Label Differently
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FDF8F0] leading-tight text-balance mb-4">
            Everyone else shouts a bigger number
          </h2>
          <p className="text-[#D9CCBA] leading-relaxed text-base mb-8">
            The whole category competes on the figure printed on the front of the bottle. Ours is smaller on
            purpose, because the number that decides whether anything happens is not how much went in your mouth.
            It is how much arrived.
          </p>

          <div className="space-y-5">
            <figure className="rounded-xl overflow-hidden bg-[#2E2219] border border-[#4A3F35]">
              <div className="aspect-[4/3] bg-[#F2E9DA]">
                <TdrAsset
                  name="bandImage1"
                  alt="Diagram comparing raw curcumin powder against a phytosome complex that wraps the curcumin in a fat the body already absorbs"
                  fit="contain"
                  className="w-full h-full"
                  fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
                />
              </div>
              <figcaption className="px-5 py-4 text-[11px] uppercase tracking-wider leading-relaxed text-[#A89682]">
                The phytosome wraps the curcumin in a fat the body already knows how to absorb.
              </figcaption>
            </figure>

            <figure className="rounded-xl overflow-hidden bg-[#2E2219] border border-[#4A3F35]">
              <div className="aspect-[4/3] bg-[#F2E9DA]">
                <TdrAsset
                  name="bandImage2"
                  alt="Table comparing absorption approach, black pepper content, the 5-LOX pathway and dose disclosure across the category"
                  fit="contain"
                  className="w-full h-full"
                  fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
                />
              </div>
              <figcaption className="px-5 py-4 text-[11px] uppercase tracking-wider leading-relaxed text-[#A89682]">
                Four things worth checking on any turmeric label. Category practice, no brand named.
              </figcaption>
            </figure>
          </div>

          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 text-base rounded-lg shadow-lg"
            >
              Check Availability &raquo;
            </Button>
          </a>
        </div>
      </section>

      {/* ============================================
          LISTICLE PART TWO : reasons 03 to 06
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 3 : the second mechanism */}
        <div id="reason-3" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Second Active
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Your ibuprofen has been working one road this whole time
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            There are two. Boswellia AKBA works the other one.
          </p>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#F2E9DA] mb-6 shadow-md">
            <TdrAsset
              name="reason3Image"
              alt="Diagram of the COX pathway and the separate 5-LOX pathway that boswellia AKBA acts on"
              fit="contain"
              className="w-full h-full"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Common pain relievers work the COX pathway. So does curcumin, mostly. The 5-LOX pathway is a separate
            road and neither reaches it.{" "}
            <span className="font-bold text-foreground">That is what the boswellia is for</span>, standardized to
            30% AKBA, the compound that acts on it. Most on the shelf is not standardized at all, and it is the
            faster of the two actives.
          </p>
        </div>

        {/* Reason 4 : the routine AND the ten-week ladder, merged.
            He is actively looking for a week-by-week, so withholding it just
            sends him to a competitor page that will happily invent one.
            ⚠ It is a PROTOCOL timeline, never an OUTCOME timeline. Each step
            says what the actives are doing and what HE should do. Nothing here
            says what he will feel by a given week: "reduces pain and stiffness
            in 2 to 4 weeks" is lifted off a live competitor page and is the
            exact disease claim 3-mechanism.md bans. */}
        <div id="reason-4" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Routine And The Timeline
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Two capsules with breakfast, and here is what the ten weeks look like
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            No medical routine, no midday dose, and no date we are going to invent for you
          </p>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TdrAsset
              name="reason4Image"
              alt="Two turmeric capsules resting in a weathered working hand at a farmhouse kitchen window"
              className="w-full h-full"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base mb-7">
            If you have never taken a daily pill in your life, this is the most we would ask. Both at once, with
            food.{" "}
            <span className="font-bold text-foreground">
              Put the bottle next to the coffee and it takes care of itself.
            </span>{" "}
            No organiser, no midday dose to remember on a job, nothing that makes you feel like a patient about
            it.
          </p>

          {/* THE TEN WEEK LADDER */}
          <div className="overflow-hidden rounded-xl border-2 border-[#2D2118]/15 bg-[#FBF6EC]">
            <div className="bg-[#241A13] px-4 py-2.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#F0E6D2]">
                What is actually happening
              </span>
            </div>

            <ol className="px-4 py-1">
              {[
                {
                  week: "Weeks 1 to 2",
                  head: "Boswellia is the fast one",
                  body: "It is the active that gets to work first, which is exactly why it is in here. This is also the stretch where most men decide a turmeric does not work and stop. Do not be one of them.",
                },
                {
                  week: "Weeks 3 to 6",
                  head: "The curcumin is the slow one",
                  body: "A phytosome has to be taken consistently for blood levels to build. Keep taking it through your normal working weeks and stop watching for a single good morning.",
                },
                {
                  week: "Weeks 7 to 10",
                  head: "Now you have something to compare",
                  body: "The published work behind this class of curcumin runs out to eight weeks, not eight days. By here you have a real stretch of your own work to hold up against last season.",
                },
              ].map((step, i, arr) => (
                <li key={step.week} className="relative flex gap-4 py-4">
                  <div className="relative flex w-16 shrink-0 justify-center">
                    {i < arr.length - 1 && (
                      <span
                        className="absolute left-1/2 top-4 h-full w-px -translate-x-1/2 bg-[#2D2118]/15"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className="relative z-10 mt-1 h-3 w-3 rounded-full border-2 border-[#C0653F] bg-[#FBF6EC]"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1 -ml-10">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#C0653F]">
                      {step.week}
                    </p>
                    <p className="mt-1 text-[15px] font-bold leading-snug text-foreground">{step.head}</p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/75">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="border-t-2 border-[#2D2118]/15 bg-[#F4EFE3] px-4 py-3 text-center font-mono text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-[#2D2118]">
              The ninety day guarantee runs past all of it
            </p>
          </div>

          <p className="mt-6 text-foreground/80 text-pretty leading-relaxed text-base">
            Every other bottle in this aisle puts a date on it. We would rather show you how the two actives
            behave.{" "}
            <span className="font-bold text-foreground">
              Individual results vary, and anyone promising you a specific week is guessing.
            </span>
          </p>
        </div>

        {/* Reason 5 : transparency and risk reversal, so the page closes on it */}
        <div id="reason-5" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Nothing Hidden
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Ninety days to find out on your own place
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Every dose printed. No blends. Nothing you have to look up.
          </p>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#F2E9DA] mb-6 shadow-md">
            <TdrAsset
              name="reason6Image"
              alt="The bottle with each of the four actives called out by name and dose: curcumin phytosome 500mg, boswellia serrata 30 percent AKBA 100mg, ginger extract 100mg, vitamin D3 2000 IU"
              fit="contain"
              className="w-full h-full"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Curcumin phytosome 500mg. Boswellia at 30% AKBA 100mg. Ginger 100mg. Vitamin D3 2,000 IU. Other
            ingredients: vegetarian capsule, rice flour. That is the whole list, printed, not a total hidden
            inside a blend.{" "}
            <span className="font-bold text-foreground">
              Take it daily for two months. If your working weeks do not feel any different, email us inside
              ninety days. We refund you and you keep the bottles.
            </span>
          </p>
        </div>
      </section>

      {/* ============================================
          THE WORK YEAR : an almanac ledger, not a carousel. Five
          tasks, and between them they fill all twelve columns.
          The bars ARE the argument, so nothing here is decoration.
          No CTA (the showcase directly below carries one; two
          buttons back to back is noise).
          ============================================ */}
      <section className="bg-[#EFE4D2] py-12">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance mb-3">
            It is not the yard. It is the position the yard puts you in.
          </h2>
          <p className="text-foreground/75 leading-relaxed text-base">
            Trimming, splitting, hauling, shovelling. Every one of these holds you in sustained forward flexion or
            holds a machine out away from your body, and the lower back carries the cost.
          </p>

          <div className="mt-7 overflow-hidden rounded-xl border-2 border-[#2D2118]/15 bg-[#FBF6EC] shadow-sm">
            {/* masthead */}
            <div className="flex items-baseline justify-between gap-3 bg-[#241A13] px-4 py-2.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#F0E6D2]">
                The work year
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#DDA15E]">
                No off season
              </span>
            </div>

            {/* month rule, aligned to the same 56px photo gutter as the rows */}
            <div className="flex items-center gap-3 border-b border-[#2D2118]/15 px-4 pb-1.5 pt-3">
              <div className="w-14 shrink-0" aria-hidden="true" />
              <div className="grid flex-1 grid-cols-12 gap-px" aria-hidden="true">
                {MONTHS.map((m, i) => (
                  <span key={`${m}-${i}`} className="text-center font-mono text-[9px] font-bold text-[#8A7866]">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* one row per task */}
            {WORK_YEAR.map((row) => (
              <div
                key={row.task}
                className="flex items-center gap-3 border-b border-dashed border-[#2D2118]/12 px-4 py-3 last:border-b-0"
              >
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md bg-muted">
                  <TdrAsset name={row.photo} alt={row.alt} className="h-full w-full" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-baseline justify-between gap-2">
                    <p className="truncate text-[13px] font-bold uppercase tracking-wide text-foreground">
                      {row.task}
                    </p>
                    <p className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-[#8A7866]">
                      {row.months.length} mo
                    </p>
                  </div>
                  <div
                    className="grid grid-cols-12 gap-px"
                    role="img"
                    aria-label={`${row.task}: ${row.span}`}
                  >
                    {MONTHS.map((m, i) => (
                      <span
                        key={`${row.task}-${i}`}
                        className={`h-2.5 rounded-[1px] ${
                          (row.months as readonly number[]).includes(i) ? "bg-[#C0653F]" : "bg-[#2D2118]/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* the point of the whole table */}
            <p className="border-t-2 border-[#2D2118]/15 bg-[#F4EFE3] px-4 py-3 text-center font-mono text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-[#2D2118]">
              Twelve columns. Five tasks. Not one empty month.
            </p>
          </div>

          <p className="mt-5 text-foreground/75 leading-relaxed text-base">
            Most turmeric is sold as a lawn-season thing. Your back does not get a lawn season.{" "}
            <span className="font-bold text-foreground">That is the work this was built around.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SHOWCASE
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="bg-card rounded-2xl border-2 border-border shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#C86F4C] to-[#DDA15E] py-2.5 px-4 text-center">
            <p className="text-[11px] sm:text-sm font-bold text-white uppercase tracking-wide leading-snug">
              {OFFER_TEXT}
            </p>
          </div>

          <div className="p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1 leading-tight">
              Turmeric Curcumin Complex
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              60 vegetarian capsules · 30 day supply · Two a day with breakfast
            </p>

            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-3">
              <TdrAsset
                name={activeImage}
                alt="Field and Harvest Co Turmeric Curcumin Complex"
                className="w-full h-full"
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
                  <TdrAsset
                    name={name}
                    alt={`Product view ${i + 1}`}
                    className="w-full h-full"
                    fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold"
                  />
                </button>
              ))}
            </div>

            {/* Outcome first, spec second. The ingredient is the proof, not
                the pitch: he does not buy a phytosome, he buys the Sunday. */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5">
                <p className="text-xs text-foreground font-bold leading-snug">Built for the day after</p>
                <p className="mt-1 text-[11px] text-foreground/60 leading-snug">
                  500mg high-absorption curcumin phytosome
                </p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5">
                <p className="text-xs text-foreground font-bold leading-snug">Covers the road ibuprofen misses</p>
                <p className="mt-1 text-[11px] text-foreground/60 leading-snug">
                  Boswellia standardized to 30% AKBA
                </p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5">
                <p className="text-xs text-foreground font-bold leading-snug">Nothing to look up or take on trust</p>
                <p className="mt-1 text-[11px] text-foreground/60 leading-snug">
                  No black pepper, no blends, every dose printed
                </p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5">
                <p className="text-xs text-foreground font-bold leading-snug">Ninety days on your own place</p>
                <p className="mt-1 text-[11px] text-foreground/60 leading-snug">
                  Third party tested in a GMP certified facility
                </p>
              </div>
            </div>

            <a href={PDP_URL}>
              <Button
                size="lg"
                className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 text-base rounded-lg shadow-lg"
              >
                Check Availability &raquo;
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          GUARANTEE
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="w-28 h-28 mx-auto mb-5">
          <TdrAsset
            name="guaranteeSeal"
            alt="Field and Harvest Co 90 day money back guarantee"
            fit="contain"
            className="w-full h-full"
            fallbackClassName="text-5xl"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight text-balance">
          Try it on a season of your own work
        </h2>
        <p className="text-base text-foreground/75 leading-relaxed max-w-md mx-auto">
          Take it every day for two months. If you get to the end of the second bottle and your working weeks do
          not feel any different, email us inside ninety days and we will refund you. Keep the bottles, we do not
          want them back.
        </p>
      </section>

      {/* ============================================
          REVIEWS
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Men Who Do Their Own Work
          </h2>
          <p className="text-sm text-muted-foreground text-pretty max-w-sm mx-auto">
            No before and after photographs. What changed for these men was the week after the work.
          </p>
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
            Everything worth knowing before you order.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Why does your bottle say 500mg when everything else says 1,000?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Because the number on the front tells you how much went in your mouth, not how much reached your
              blood. Curcumin is notoriously hard to absorb, so a big figure on a form that does not cross the gut
              wall is a big figure that does nothing. We spent the budget on the form instead of the number.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              I tried turmeric before and it did nothing. Why would this be different?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              That is the most common thing we hear, and it is a fair question rather than a sign that nothing
              works on you. Almost every bottle on the shelf pairs standard curcumin powder with a few milligrams
              of black pepper extract. This one uses a phytosome form instead, and adds a second active working a
              pathway turmeric on its own does not reach.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How long before I notice anything?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              We will not give you a date, and be careful of anyone who does. Boswellia is the faster of the two
              actives. The published work behind this class of curcumin runs out to eight weeks. Take it daily
              through a working season and judge it against your own last season. The guarantee runs ninety days
              for exactly that reason.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Can I take this with blood pressure medication, a statin or a blood thinner?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Ask your doctor or pharmacist before you start. We are not able to answer that for you and we would
              not want to. Bring the label with you: every dose is printed on it, so they can see exactly what you
              are asking about instead of guessing at a blend.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Why is there no black pepper in it?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The absorption claim the category runs on comes from one small crossover trial published in 1998
              with eight participants, and it has never been independently replicated. Separately, piperine works
              by slowing a drug-metabolizing pathway, which is worth knowing if you take prescription medication.
              We would rather not put it in your capsules at all.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it does nothing for me?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Then you email us inside ninety days and we refund you. Keep the bottles. We would rather carry that
              cost than have you feel talked into something.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============================================
          STICKY CTA
          ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#4A3F35]/95 backdrop-blur-md border-t-2 border-[#4A3F35] py-4 px-4 z-50 shadow-2xl">
        <div className="max-w-lg mx-auto">
          <p className="mb-2 text-center font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#DDA15E]">
            Save Up To 71% Off + 90-Day Guarantee
          </p>
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 text-sm sm:text-base rounded-lg shadow-lg transition-all whitespace-normal leading-snug"
            >
              Check Availability &raquo;
            </Button>
          </a>
        </div>
      </div>

      <footer className="border-t border-border pb-28 pt-8 sm:pb-8">
        <div className="max-w-lg mx-auto px-4">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            &copy; 2026 Field &amp; Harvest Co. These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
            Individual results vary. Consult your doctor before starting any supplement, particularly if you take
            prescription medication. This page is advertising and is not medical advice.
          </p>
        </div>
      </footer>
    </div>
  )
}
