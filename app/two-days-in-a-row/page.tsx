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
// SIX reasons, not the five in the brief. The added one is 05,
// the honest timeline. Boswellia moves first and the curcumin
// work runs to eight weeks, and the whole category promises
// "2 to 4 weeks". Saying it plainly before the click is both
// the differentiator and the fix for the week-two quit, which
// is the biggest churn risk on a slow-acting SKU.
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
// never shipped. These are the three verifiable specs instead.
const SPEC_LINE = "500mg phytosome · Boswellia at 30% AKBA · Every dose printed"

const PRODUCT_THUMBS = ["productThumb1", "productThumb2", "productThumb3", "productThumb4"] as const
type GalleryKey = "productMain" | (typeof PRODUCT_THUMBS)[number]

const FIELD_TILES = [
  { name: "field1", caption: "String trimming", alt: "A man working a fence line with a string trimmer" },
  { name: "field2", caption: "Splitting and hauling", alt: "A man splitting firewood on a block outside a barn" },
  { name: "field3", caption: "Clearing leaves", alt: "A man clearing autumn leaves with a backpack blower" },
  { name: "field4", caption: "Beds and planting", alt: "A man kneeling to work a garden bed" },
  { name: "field5", caption: "Shovelling in the cold", alt: "A man shovelling a driveway at dawn in winter" },
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
          <h2
            id="hero-headline"
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight"
          >
            6 Reasons Men Over 50 Are Taking This To{" "}
            <span className="text-[#C86F4C]">Work Two Days In A Row</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Without the usual soreness after. Field &amp; Harvest Turmeric Curcumin Complex, a 500mg
            high-absorption phytosome.
          </p>
        </div>

        {/* NO LEAD BLOCK. This traffic is product-aware and does not read a
            lead, so the fold goes headline, spec line, button. The spec line
            is the only thing that earns space here: it scans as a spec rather
            than as prose, and the form is the one thing he checks before the
            price. Everything else lives in the reasons. */}
        <p className="mt-5 max-w-md mx-auto text-center text-base font-semibold leading-snug text-foreground/80">
          Two capsules with breakfast. 60 vegetarian capsules to the bottle, which is a month.
        </p>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            See The Offer &rarr;
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
            The work did not change. The recovery did.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            You are not counting how much it hurts. You are counting how many days it costs.
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
            Physical work creates micro-stress in muscle and connective tissue and your body answers with an
            inflammatory process. That is not a malfunction, that is the repair crew showing up, and the crew
            still shows up on time. What changed is how long it takes them to pack up and leave. At 35 the work
            started Saturday and finished Saturday night. At 62 it starts Saturday and is still running Tuesday.{" "}
            <span className="font-bold text-foreground">
              Your body has not stopped repairing itself. It is just taking longer to finish.
            </span>
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
            1,000mg you do not absorb is 0mg
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            A phytosome, not powder with black pepper
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
            If you have tried turmeric before and felt nothing, that was not you and it probably was not the
            turmeric either. Curcumin barely crosses from the gut into the blood on its own. The industry&rsquo;s
            answer for twenty five years has been a few milligrams of black pepper extract, sold on an absorption
            figure that traces back to one crossover trial in eight people published in 1998, with an author whose
            company sold the pepper. It has never been independently replicated.{" "}
            <span className="font-bold text-foreground">
              Our bottle says 500mg where most say 1,000. That is the fight we want.
            </span>
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
              See The Offer &rarr;
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
            Boswellia AKBA works a pathway ibuprofen never touches
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Inflammation does not run down one road. It runs down two.
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
            The COX pathway is the one common over-the-counter pain relievers act on, and it is also where
            curcumin does much of its work. The 5-LOX pathway is a separate route and neither of those reaches
            it. That is what the boswellia is doing in here, standardized to 30% AKBA, which is the compound that
            acts on 5-LOX specifically rather than whatever happened to be in the plant.{" "}
            <span className="font-bold text-foreground">
              Most boswellia on the shelf is not standardized for it at all.
            </span>
          </p>
        </div>

        {/* Reason 4 : the ease objection. He has never taken a daily pill. */}
        <div id="reason-4" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Whole Routine
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Two capsules with breakfast. That is the whole routine.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            No morning and evening split to keep track of
          </p>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TdrAsset
              name="reason4Image"
              alt="Two turmeric capsules resting in a weathered working hand at a farmhouse kitchen window"
              className="w-full h-full"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            If you have never swallowed a daily pill in your life, this is about the most we would ask of you.
            Both capsules at once, with food, and a meal with some fat in it helps it along. Sixty vegetarian
            capsules to a bottle, which is thirty days.{" "}
            <span className="font-bold text-foreground">
              Put it next to the coffee and it takes care of itself.
            </span>
          </p>
        </div>

        {/* Reason 5 : THE ADDED ONE. The honest timeline. This is the
            anti-hype reason and it is the fix for the week-two quit. */}
        <div id="reason-5" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              What To Expect
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            We will not promise you a date
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Two actives, two timelines
          </p>

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#F2E9DA] mb-6 shadow-md">
            <TdrAsset
              name="reason5Image"
              alt="Timeline diagram showing boswellia acting over the first weeks and curcumin phytosome running out to eight weeks"
              fit="contain"
              className="w-full h-full"
              fallbackClassName="w-full h-full flex items-center justify-center text-4xl"
            />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Every other bottle in this aisle puts a number on it. We would rather tell you how the two actives
            actually behave. Boswellia is the faster of the pair. The published work behind this class of
            curcumin runs out to eight weeks, not eight days.{" "}
            <span className="font-bold text-foreground">
              Take it daily through a working season and judge it against your own last season, not against next
              Tuesday.
            </span>{" "}
            That is also why the guarantee runs ninety days instead of thirty.
          </p>
        </div>

        {/* Reason 6 : transparency and risk reversal, so the page closes on it */}
        <div id="reason-6" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Nothing Hidden
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Every dose printed. No blends. Ninety days to decide.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Four ingredients and nothing you have to look up
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
            Curcumin phytosome 500mg, boswellia at 30% AKBA 100mg, ginger 100mg, vitamin D3 2,000 IU. Other
            ingredients: vegetarian capsule, rice flour. That is the whole list, printed, rather than a total
            hidden inside a proprietary blend. Third party tested, made in a GMP certified facility, and no black
            pepper extract in any form.{" "}
            <span className="font-bold text-foreground">
              Take it every day for two months. If your working weeks do not feel any different, email us inside
              ninety days and we will refund you and you keep the bottles.
            </span>
          </p>
        </div>
      </section>

      {/* ============================================
          CLOSING STRIP : the work it was built around. Context
          and headcount on the way into the buy box, no CTA (the
          showcase directly below carries one; two buttons back
          to back is noise).
          ============================================ */}
      <section className="bg-[#F4EFE3] py-12">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance mb-3">
            It is not the yard. It is the position the yard puts you in.
          </h2>
          <p className="text-foreground/75 leading-relaxed text-base mb-6">
            Trimming, splitting, hauling, shovelling. Every one of these holds you in sustained forward flexion or
            holds a machine out away from your body, and the lower back carries the cost. That is the work this
            was built around.
          </p>
          <div className="flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FIELD_TILES.map((t) => (
              <figure
                key={t.name}
                className="relative aspect-[3/4] w-[44%] shrink-0 overflow-hidden rounded-lg bg-muted sm:w-[30%]"
              >
                <TdrAsset name={t.name} alt={t.alt} className="h-full w-full" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-2.5 pb-2 pt-6 text-[10px] font-bold uppercase tracking-wider text-white">
                  {t.caption}
                </figcaption>
              </figure>
            ))}
          </div>
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

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5">
                <p className="text-xs text-foreground font-semibold leading-snug">
                  500mg high-absorption curcumin phytosome, not standard powder
                </p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5">
                <p className="text-xs text-foreground font-semibold leading-snug">
                  Boswellia standardized to 30% AKBA for the 5-LOX pathway
                </p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5">
                <p className="text-xs text-foreground font-semibold leading-snug">
                  No black pepper, no proprietary blends, every dose printed
                </p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5">
                <p className="text-xs text-foreground font-semibold leading-snug">
                  Third party tested in a GMP certified facility
                </p>
              </div>
            </div>

            <a href={PDP_URL}>
              <Button
                size="lg"
                className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 text-base rounded-lg shadow-lg"
              >
                See The Offer &rarr;
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
          Ninety days to decide
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
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 text-sm sm:text-base rounded-lg shadow-lg transition-all whitespace-normal leading-snug"
            >
              Save Up To 71% + 90-Day Guarantee &rarr;
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
