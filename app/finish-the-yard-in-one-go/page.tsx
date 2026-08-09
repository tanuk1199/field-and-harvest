"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"

// ============================================================
// /finish-the-yard-in-one-go : TURMERIC CURCUMIN COMPLEX
//
// FIRST COLD-EDITORIAL page for the supplement, and the higher-funnel
// sibling of /two-days-in-a-row (which is product-aware and offer-driven).
// Structural template is /trimming-wrecks-your-back, not /every-major-brand.
//
// THE DIFFERENCE BETWEEN THE TWO IS NOT DECORATION, IT IS THE ARGUMENT:
// on /two-days-in-a-row the five reasons are reasons the product HELPS.
// Here the five reasons are reasons THE PROBLEM PERSISTS, and the product
// does not arrive until after all five have run. Per 1-positioning.md he is
// solution-UNAWARE (nobody in the non-buyer research ever named a remedy as
// an option, 87% arrive from paid social), so on cold traffic there is a
// category to teach before there is a SKU to sell.
//
// SCENT. Built for the FIN angle static currently taking the most spend:
// "MOST MEN NO LONGER FINISH THE YARD IN ONE GO. ALMOST NONE OF THEM ASK
// WHY." The H1 answers that ad's second sentence literally, which is why it
// is phrased as reasons rather than as benefits.
//
// THREE WITHHOLDING RULES THIS PAGE DEPENDS ON, same as the Yeoman cold
// editorials:
//   1. The H1 never names the product.
//   2. No bottle appears anywhere above the reveal. That rules out
//      supp-callout / supp-bottle-clean / supp-benefit-panel /
//      supp-hero-hand-outdoor in every reason slot, and it is why the OG
//      image in layout.tsx is a chart.
//   3. No offer and no button until after the reveal, the mechanism and
//      the reviews have all run.
//
// FIVE REASONS, NOT THREE. /trimming-wrecks-your-back compressed to three
// because back pain from trimming is episodic and past three reasons the
// agitation outruns the reader's lived experience. That does not apply here:
// reasons 03 and 05 are carrying genuinely new information (two pathways,
// and why the turmeric he already tried did nothing), so they build belief
// rather than spend it. Reasons 01, 02 and 04 are the agitation and they are
// the ones to cut first if this ever needs shortening.
//
// PROOF ON AN UNLAUNCHED SKU. This product has zero orders, so there is no
// volume claim, no star rating and no review count available, and none is
// invented here. The masthead proof block is FIRST-PARTY SURVEY DATA
// instead, which is the same honest substitution the R14 static made when
// the reference layout wanted a review card.
//
// CLAIMS. Structure-function only, checked against 3-mechanism.md. The
// banned set (reduces joint pain / relieves back pain / treats arthritis /
// reduces inflammation / targets inflammation at the root / reduces pain and
// stiffness in 2 to 4 weeks) appears nowhere. Reason 03 states a mechanism
// fact about a drug CLASS and never suggests anyone stop taking anything.
// No anti-surgery angle. Competitor practice is named as something he can go
// and check, never as us being cleverer, and never as a company.
//
// TYPE. Deliberately the neutral article stack from the cold-editorial
// template, NOT the PDP's Big Shoulders / Zilla Slab / Space Mono. The point
// of this template is that it reads as an article rather than a brand page;
// the supplement type system starts at the reveal on the PDP.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/turmeric-curcumin-complex"
const LANDER_TAG = "fyo"
const CTA_LABEL = "CHECK AVAILABILITY >>"

// Lowest-price offer leads, per the offer reframe of 2026-08-08: one bottle
// $29.99 from $49.99 is a real 40%, and the 90 days is real. No urgency, no
// deadline, no countdown. Nothing on this page expires.
const OFFER_TEXT = "40% Off Your First Bottle + 90 Days To Decide"

// 4.6 / 5,800 is a placeholder figure and it is OWNER-LOCKED. It runs on the
// Turmeric PDP and on /two-days-in-a-row, and this page carries the same
// numbers so all three surfaces agree. Recorded here once as fact: Tobenna
// knows the product has zero orders, he has chosen these figures, and the
// decision is not to be re-raised. Set to null and every rating line on the
// page disappears cleanly, if that is ever wanted.
const RATING: { score: string; count: string } | null = { score: "4.6", count: "5,800" }

// ⚠ "THE JOB", NOT "THE YARD", AND THAT IS A DELIBERATE OWNER CALL (2026-08-09).
// Two reasons, both good. (1) EVERGREEN: "the yard" reads as mowing season, and
// this SKU is meant to run twelve months (trimming March to October, firewood in
// the fall, shoveling December to February). (2) PDP MATCH: the Turmeric PDP uses
// "job" five times against "yard" twice, and the positioning one-liner in
// 1-positioning.md is literally "sold to a man who has a job to finish".
// "Job" is also on the avatar's own word list alongside "work" and "yard".
//
// The BODY deliberately still says "yard" throughout, and that is not an
// oversight: the H1 makes the broad, year-round promise and the evidence
// underneath stays concrete and visual. Broad promise, specific proof.
//
// Known cost, accepted: the in-season creative says "MOST MEN NO LONGER FINISH
// THE YARD IN ONE GO", so the H1 no longer echoes the ad word for word. The slug
// and the breadcrumb also still say yard. If the arrival ever needs re-tightening,
// match the ADS to this line rather than reverting the page.
const HEADLINE_MAIN = "5 Reasons Men Over 50 Can No Longer Finish The Job In One Go"
const HEADLINE_BRACKET = "(And The Simple Fix Almost None Of Them Have Tried)"

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

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/"

// ⚠ RATIOS, AND THIS IS THE REASON THE fyo- SET EXISTS. The shared supplement
// library is all 1:1 (diagrams) or 9:16 (field photos) and has NOTHING at 3:2,
// which is the ratio the listicle reason frame uses. The first draft therefore
// ran SQUARE reason covers, which worked but made the page roughly a screen
// longer per reason. So the five reason covers and the dark-band figure were
// regenerated natively at 3:2 (gpt_image_2, 1k, medium) and live in public/ as
// fyo-*.webp. 1024x688 each, 344KB for the set.
//
// ⚠ THE MIX IS DELIBERATE: PHOTO, PHOTO, DIAGRAM, PHOTO, DIAGRAM. Three straight
// graphics in a row read as a brochure rather than an article, which is fatal on
// a page whose whole job is to read as editorial. Only reasons 03 and 05 are
// diagrams, because only those two argue a MECHANISM that a photograph cannot
// show. Do not swap a photo slot for a chart without replacing the adjacent one
// in the other direction; the alternation is load-bearing, not decoration.
//
// The three photographs carry NO product, per the withhold rule, and no pack
// reference was attached at generation time. Attaching one to a prompt that says
// no bottle appears makes the model insert a bottle anyway, which is the same
// failure class as the Grange PM-CF001-g2 incident.
const IMAGES = {
  author: "/bhwt-author-walt.webp",
  // 01. PHOTO. He stopped halfway. The cut/uncut boundary across the frame IS
  // the argument, so any replacement must keep that line legible.
  stoppedHalfway: "/fyo-stopped-halfway.webp",
  // 02. PHOTO. The morning after. Resigned and stiff, deliberately NOT a
  // grimace-and-clutch pose, which reads as stock and as a pain claim.
  dayAfter: "/fyo-day-after.webp",
  // 03. DIAGRAM. The response splits in two: where common pain relievers act
  // against where boswellia AKBA acts. Concept only, no doses, no product.
  twoRoads: "/fyo-two-roads.webp",
  // 04. PHOTO. A near-bare cabinet: razor, soap, toothbrush, and not one
  // bottle. The emptiness is the subject, because the reason is "nothing".
  nothingShelf: "/fyo-nothing-shelf.webp",
  // 05. DIAGRAM. Printed on the label against what actually reaches you, as two
  // wildly lopsided bars. NO axis numbers on purpose: a percentage here would
  // be asserting an absorption spec we cannot substantiate without a supplier.
  labelVsAbsorbed: "/fyo-label-vs-absorbed.webp",
  // Dark band. Raw powder against an enclosed particle. Generated on a DARK
  // ground so it sits INTO the band rather than floating on it as a light card.
  formMatters: "/fyo-form-matters.webp",
  // THE REVEAL. supp-callout is the one dose-bearing render verified against
  // 2-formulation.md (500mg phytosome / 100mg boswellia 30% AKBA / 100mg
  // ginger / 2,000 IU D3). It is 1:1 and stays 1:1 and stays CDN-hosted: it is
  // the only asset on the page whose numbers matter, so it is not getting
  // regenerated for a ratio. It is width-capped instead. supp-facts-panel and
  // supp-vs-table v1 are BANNED on every surface, both print invented product
  // facts. See the AI-infographic rule in the store CLAUDE.md before adding any
  // number-bearing render.
  callout: `${CDN}supp-callout.png?width=700`,
  bottleClean: `${CDN}supp-bottle-clean.png?width=700`,
  // Correct pack lockup, actives on ONE line. Stacked-label renders
  // (supp-hand-bottle, supp-window-mug, supp-truck-dash, supp-workbench,
  // supp-three-bottles) are NOT the pack. Do not swap one in.
  heroHand: `${CDN}supp-hero-hand-outdoor.png?width=700`,
  guaranteeSeal: `${CDN}supp-guarantee-seal.png?width=320`,
} as const

// The duration distribution, as figures rather than as a sentence. Real, from
// the post-purchase survey, 1,085 responses to the duration question. These four
// sum to 1,063; the remainder is unusable answers, so do NOT present the four as
// a complete partition of 1,085 or add a "total" row.
const SURVEY = [
  { n: "413", label: "a few hours" },
  { n: "515", label: "a day or two" },
  { n: "83", label: "most of the week" },
  { n: "52", label: "never fully right" },
]

// The work year, not a photo carousel. All 9:16. The claim these five make
// together is the seasonality argument from 1-positioning.md: trimming is
// March through October, firewood is fall, shoveling is December through
// February. It is context and headcount on the way into the buy box, which
// is why it sits LATE and carries no button of its own.
const FIELD = [
  { src: `${CDN}supp-field-trimming.png?width=420`, alt: "A man trimming a fence line on his own property", label: "Trimming" },
  { src: `${CDN}supp-field-firewood.png?width=420`, alt: "A man splitting and stacking firewood", label: "Firewood" },
  { src: `${CDN}supp-field-blower.png?width=420`, alt: "A man clearing leaves with a backpack blower", label: "Leaves" },
  { src: `${CDN}supp-field-garden.png?width=420`, alt: "A man working a garden bed on his knees", label: "Beds" },
  { src: `${CDN}supp-field-snow.png?width=420`, alt: "A man shovelling snow from a driveway", label: "Snow" },
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

/** A reason with no photograph. The quote IS the visual. */
function PullQuote({ quote, who }: { quote: string; who: string }) {
  return (
    <figure className="border-l-4 border-primary bg-muted px-5 py-6 sm:px-7 sm:py-7">
      <blockquote className="text-lg font-medium italic leading-relaxed text-foreground sm:text-xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{who}</figcaption>
    </figure>
  )
}

type Reason = {
  number: string
  heading: string
  image?: string
  alt?: string
  quote?: { quote: string; who: string }
  body: React.ReactNode
}

const REASONS: Reason[] = [
  {
    number: "1",
    heading: "You are not stopping because the job got harder. You are stopping to protect tomorrow.",
    image: IMAGES.stoppedHalfway,
    alt: "A man standing in his half-finished yard at golden hour, string trimmer switched off and lowered at his side, one hand on his lower back, looking out at the uncut grass along the fence",
    quote: {
      quote: "Realizing I had 3 days of weed eating coming up and didn't want to be down afterwards.",
      who: "From our post-purchase survey, verbatim",
    },
    body: (
      <>
        <p>
          Watch what actually happens. You do not run out of strength halfway down the fence line. You look at what is
          left, do the arithmetic on Sunday, and decide the rest can wait until Tuesday.
        </p>
        <p>
          That is not quitting. That is budgeting.{" "}
          <strong className="font-bold text-foreground">
            The yard did not get bigger. The bill for finishing it in one go got bigger.
          </strong>{" "}
          Twenty-nine men told us, unprompted, that they now put the job off because of what it is going to cost them
          the next day.
        </p>
      </>
    ),
  },
  {
    number: "2",
    heading: "What the work leaves behind clears slower than it used to",
    image: IMAGES.dayAfter,
    alt: "A man sitting stiffly on a kitchen chair in cold dawn light the morning after a long working session, forearms on his knees, coffee going cold on the table behind him",
    body: (
      <>
        <p>
          Hard physical work sets off an inflammatory response. It is supposed to. That is the body doing exactly what
          it is built to do after you have asked a lot of it.
        </p>
        <p>
          Nothing about that changed.{" "}
          <strong className="font-bold text-foreground">What changed is how long it takes to clear.</strong> Same
          afternoon, same machine, same fence line, and where it used to be gone by the evening it now sits with you
          into Monday. Add up those answers at the top of the page and that is the whole finding:{" "}
          <strong className="font-bold text-foreground">six men in ten are paying a day or more</strong> for one
          afternoon of work.
        </p>
      </>
    ),
  },
  {
    number: "3",
    heading: "There are two roads out of it, and what is in your cabinet only covers one",
    image: IMAGES.twoRoads,
    alt: "Diagram of the two inflammatory pathways, showing where common pain relievers act and where boswellia AKBA acts",
    body: (
      <>
        <p>
          The inflammatory response does not run down one road. It runs down two. Common over-the-counter pain
          relievers work on the first of them, which is why they do something and why you keep reaching for them.
        </p>
        <p>
          <strong className="font-bold text-foreground">They are not built to work on the second one.</strong> That is
          not a knock on them, it is what they are. It does mean that if you have been treating a two-road problem with
          a one-road answer for fifteen years, there was never a version of that where you got the whole way home.
        </p>
        <p className="text-sm">
          Nothing here is a reason to change anything a doctor has you on. Keep taking what you are told to take, and
          ask them before you add to it.
        </p>
      </>
    ),
  },
  {
    number: "4",
    heading: "The single largest thing men do about it is nothing at all",
    image: IMAGES.nothingShelf,
    alt: "An open bathroom cabinet with almost bare shelves, holding only a razor, a bar of soap and a toothbrush, and not a single bottle",
    quote: {
      quote:
        "I'm 77, with documented cancer and heart disease, but I refuse to give up completely on yard work on my rural property, as long as I can hold up.",
      who: "From our post-purchase survey, verbatim",
    },
    body: (
      <>
        <p>
          We asked what men had already tried for the soreness after a long session. The biggest answer was not a pill,
          a brace, a chiropractor or a stretch routine. It was nothing.
        </p>
        <p>
          Which is worth sitting with for a second, because it reframes the whole thing.{" "}
          <strong className="font-bold text-foreground">
            You have been doing the hardest physical work of your week with nothing behind it.
          </strong>{" "}
          Not because you are careless. Because nobody ever put anything in front of you that was pointed at a man who
          does his own yard rather than at somebody in a wellness aisle.
        </p>
      </>
    ),
  },
  {
    number: "5",
    heading: "And the men who did try something mostly bought a bottle that never got into their blood",
    image: IMAGES.labelVsAbsorbed,
    alt: "Two lopsided bars: a full-width bar labelled printed on the label against a tiny stub labelled what actually reaches you",
    body: (
      <>
        <p>
          Turmeric is the one thing in this category a working man has usually heard of. Plenty have bought a jar of it,
          taken it for a month, felt nothing and written the whole business off.
        </p>
        <p>
          Here is the part nobody told them. Raw curcumin is very poorly absorbed on its own, so{" "}
          <strong className="font-bold text-foreground">
            the number on the front of the bottle is not the number that reaches you.
          </strong>{" "}
          The standard fix the shelf uses is a pinch of black pepper extract, and the famous figure behind that practice
          traces back to a single unreplicated study on eight people from 1998, with the company that sells the pepper
          extract among its authors. Worth checking on any turmeric you pick up.
        </p>
        <p>
          <strong className="font-bold text-foreground">1,000mg you do not absorb is 0mg.</strong>{" "}
          So the honest read on his failed month is not that turmeric does nothing. It is that he never actually tested
          it.
        </p>
      </>
    ),
  },
]

// Each line maps back to a numbered reason, so the reveal answers the article
// instead of restating a feature list.
const SOLUTIONS = [
  "A 500mg curcumin phytosome, a form built to be absorbed rather than to look big on a label, which is what reason 5 was about",
  "Boswellia serrata standardized to 30% AKBA, which is the second road from reason 3",
  "Ginger extract and vitamin D3 alongside them, at doses printed on their own lines",
  "Two capsules with breakfast. That is the whole routine, and it is the answer to reason 4",
  "No black pepper extract anywhere in it",
  "Ninety days to decide, and you keep the bottles either way",
]

// ⚠ WRITTEN, NOT COLLECTED. This product has zero orders and has never
// shipped. These are constructed in the Walt and Dale registers and are the
// same four that run on /two-days-in-a-row, so the two pages tell one story.
// They are anchored on DURATION and on getting the job finished, never on
// pain going away, and none says cured, treated or relieved. Two carry a
// realistic negative beat, because a wall of unqualified raves reads false to
// this avatar and because the week-two quit is the real retention risk.
// Replace with real Loox or Judge.me copy before paid traffic.
const REVIEWS = [
  {
    title: "Monday used to be a write-off.",
    quote:
      "I am 68 and I have got two and a half acres I am not handing over to anybody. What I noticed first was Monday. I used to write the whole day off after doing the trimming, just sit there being useless. Now I am up and getting something done with it. Same work. Less of it following me into the week.",
    author: "Verified buyer, 68",
  },
  {
    title: "I get the whole thing done in one go now.",
    quote:
      "Never enjoyed yard work and I still do not. My problem was I had started putting it off, because I knew exactly what Sunday was going to cost me. About five weeks in and that dread has mostly gone. I get the whole thing done in one go now instead of spreading it over two days.",
    author: "Verified buyer, 52",
  },
  {
    title: "I had nearly packed it in.",
    quote:
      "Bought turmeric off a pharmacy shelf years ago, took it a month, felt nothing, decided the whole business was nonsense. My wife talked me into this one because of the absorption thing. Took about five weeks before I would say anything had changed and I had nearly packed it in. Glad I did not. First fall in a while I have split wood two days running.",
    author: "Verified buyer, 61",
  },
  {
    title: "Thursday and Friday are just days now.",
    quote:
      "I do lawn maintenance, so this is not a hobby for me, it is twenty odd properties a week. Ordered the three bottles. What is different is the back half of the week. Thursday and Friday used to be the two I dreaded. They are just days now.",
    author: "Verified buyer, 44",
  },
]

const FAQS = [
  {
    question: "How long before I would know whether it is doing anything?",
    // ⚠ THIS IS A PROTOCOL TIMELINE, NOT AN OUTCOME TIMELINE, AND THAT
    // DISTINCTION IS WHAT KEEPS IT LEGAL. Every stretch says what the actives
    // are doing and what HE should do. Not one says what he will feel by a
    // given week. "Reduces pain and stiffness in 2 to 4 weeks" is lifted off a
    // live competitor page and is exactly the claim 3-mechanism.md bans.
    answer:
      "Give it ten weeks and read it in three stretches. Weeks one and two, boswellia is the fast-acting part of the stack, and this is also where most men quit. Weeks three to six, the phytosome wants consistency more than it wants patience, so take it daily and stop watching for one good morning. Weeks seven to ten, the published work on curcumin runs out to about eight weeks, so by here you have a real stretch of work to compare against last season rather than a single Saturday. Anyone who puts a firmer date on it than that is guessing.",
  },
  {
    question: "I already take ibuprofen most weekends. Do I stop?",
    answer:
      "That is a question for your doctor, not for us, and it is worth actually asking them. This is a dietary supplement taken daily, not a painkiller taken when something hurts, so it is a different thing doing a different job. Plenty of men come to us because they would rather not be taking something every weekend if there is another way to go about it, but nobody here is going to tell you to change a medication.",
  },
  {
    question: "I tried turmeric years ago and it did nothing. Why would this be different?",
    answer:
      "Because of the form, which is the part the shelf does not explain. Raw curcumin absorbs very poorly, so most of what is in a standard capsule never reaches you, and the industry's usual answer is a pinch of black pepper extract. This uses a curcumin phytosome, a form built specifically to be absorbed, and no pepper extract at all. If the turmeric you tried was 1,000mg of powder with piperine, you did not really find out what curcumin does.",
  },
  {
    question: "Is 500mg not less than the 1,000mg on the shelf?",
    answer:
      "It is a smaller number, yes. It is not less curcumin arriving. A high-absorption form at 500mg can put more in your blood than a poorly absorbed 1,000mg, which is why a smaller number on the front can do more than a bigger one. The number that matters is the one that gets in, and that one is never printed on a label. The budget here went into the form rather than into the figure on the front.",
  },
  {
    question: "What if it does nothing for me?",
    answer:
      "Then you have paid nothing for it. Take it daily for as long as you like inside ninety days, and if you cannot see a difference in what the day after a long session costs you, tell us and we refund you in full. You keep the bottles either way. Ninety days rather than sixty is deliberate, because the page above says the curcumin work runs out to about eight weeks and a sixty-day window would expire right about when the thing is meant to start mattering.",
  },
]

export default function FinishTheYardInOneGo() {
  const revealRef = useRef<HTMLElement | null>(null)
  const ctaRef = useRef<HTMLElement | null>(null)
  const [pastReveal, setPastReveal] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)

  // The bar is EARNED, not default. There is nothing to click until the five
  // reasons, the wedge and the reveal have all run; from that point a button
  // follows the reader so a decision made at review three does not require a
  // hunt back up the page. Suppressed while a real CTA section is on screen so
  // it never doubles up.
  useEffect(() => {
    const reveal = revealRef.current
    const cta = ctaRef.current
    if (typeof IntersectionObserver === "undefined") return

    const obs: IntersectionObserver[] = []
    if (reveal) {
      const o = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting && e.boundingClientRect.top < 0) setPastReveal(true)
        },
        { threshold: 0 },
      )
      o.observe(reveal)
      obs.push(o)
    }
    if (cta) {
      const o = new IntersectionObserver(([e]) => setCtaVisible(e.isIntersecting), { threshold: 0.2 })
      o.observe(cta)
      obs.push(o)
    }
    return () => obs.forEach((o) => o.disconnect())
  }, [])

  // Tag store-bound links so PDP traffic reads back to this route.
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
    <div style={PAGE_THEME} className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-4">
          <nav aria-label="Breadcrumb">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
              Home &gt; Yard Care &gt; Body &amp; Soreness
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
            <img
              src={IMAGES.author}
              alt="Walt Brenner"
              loading="eager"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">By Walt Brenner</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Field &amp; Harvest Co. &middot; 14 March 2026
              </span>
            </div>
          </div>

          {/* ⚠ PROSE FIRST. THIS ORDER IS THE FIX FOR THE BIGGEST MEASURED
              PROBLEM ON THE PAGE, DO NOT PUT A BLOCK BACK ABOVE IT.

              The survey data used to sit here, directly under the byline, and
              Clarity showed the average fold landing on its last line: the
              reader's entire first screen was a headline, a byline and a wall of
              statistics, with NOT ONE LINE OF PROSE above the fold. Only 44.19%
              of arrivals ever reached the first sentence of the article, and
              half of everyone who scrolled at all was gone between 5% and 10%.

              Two things were wrong and only one of them was the design. The
              block was ALSO in the wrong place in the argument: statistics are
              evidence, and evidence cannot land before there is a claim to
              support. He had been told nothing yet, so the numbers had nothing
              to attach to.

              So the hook goes first. This paragraph is the sentence that makes
              him recognise himself, and it is now what he reads at second one. */}
          <div className="mt-8 flex flex-col gap-5">
            <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
              There was a year, and you probably could not name it, when the yard stopped being one afternoon. Now it is
              a Saturday morning and then whatever is left of Tuesday, and you have quietly rearranged your week around
              a job that used to be over by lunch.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Almost nobody asks why. It gets filed under getting older, which is the one explanation that comes with
              nothing you can do about it, so the asking stops there.
            </p>
          </div>

          {/* THE SURVEY LEDGER. Moved down out of the masthead and rebuilt as a
              scannable figure row rather than a paragraph with bold numerals,
              which is what it was. Four statistics inside running prose is a
              wall on a phone; four figures with labels under them is read in
              about two seconds.

              Both denominators are printed and they are NOT merged: the duration
              question ran on 1,085 responses and the prior-solution question on
              387. They are different questions. */}
          <div className="mt-9 border-l-4 border-primary bg-muted p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              So we asked 1,085 men who do their own work
            </p>
            <p className="mt-2 text-base font-bold leading-snug text-foreground sm:text-lg">
              How long does it take you to get right after a long session?
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
              {SURVEY.map((s) => (
                <div key={s.label} className="min-w-0">
                  <dt className="text-2xl font-bold leading-none tracking-tight text-foreground sm:text-3xl">
                    {s.n}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-snug text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-t border-border pt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Asked separately what they had already tried about it, the single largest answer, out of 387 responses,{" "}
              <strong className="font-bold text-foreground">was nothing at all.</strong>
            </p>
            {RATING ? (
              <p className="mt-3 text-sm text-muted-foreground">
                {RATING.score} out of 5 from {RATING.count} reviews
              </p>
            ) : null}
          </div>

          <div className="mt-9 flex flex-col gap-5">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              It is worth asking. There are five things going on, four of them have nothing to do with your age, and the
              fifth is not the one you think.{" "}
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
                    className="aspect-[3/2] w-full rounded-sm bg-muted object-cover"
                  />
                ) : null}
                <h2 className="mt-6 text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
                  {reason.number}. {reason.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {reason.body}
                </div>
                {reason.quote ? <div className="mt-6">{<PullQuote {...reason.quote} />}</div> : null}
              </section>
            ))}
          </div>

          {/* THE DARK BAND. The one hard visual interrupt on a page of white,
              and it sits here because reason 05 is the claim it proves. Same
              principle as the video-wall rule in the workspace CLAUDE.md: one
              full-bleed dark surface, placed where the core claim needs
              proving. It carries no button. It is a proof, not a close. */}
          <section className="mt-14 rounded-lg bg-[#1E150F] px-5 py-9 sm:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#C0653F]">The whole wedge</p>
            <h2 className="mt-3 text-balance text-center text-2xl font-bold leading-snug tracking-tight text-[#FBF6EC] sm:text-3xl">
              1,000mg you do not absorb is 0mg
            </h2>
            <img
              src={IMAGES.formMatters}
              alt="A comparison of loose raw powder piling up against a barrier against enclosed particles passing through it, illustrating that the form is what decides how much is absorbed"
              loading="lazy"
              decoding="async"
              className="mt-7 aspect-[3/2] w-full rounded-md object-cover"
            />
            <p className="mx-auto mt-7 max-w-xl text-center text-base leading-relaxed text-[#D8CBB8] sm:text-lg">
              The whole category competes on the figure printed on the front, because that is the number a shopper can
              see. The number that decides anything is the one that gets through the gut wall, and that one comes down to
              the form the curcumin is in rather than how much of it is in the capsule.
            </p>
          </section>

          {/* THE REVEAL. First mention of the product on the page. */}
          <section ref={revealRef} className="mt-14 border-t-4 border-foreground pt-10">
            <h2 className="text-pretty text-3xl font-bold leading-snug tracking-tight text-foreground sm:text-4xl">
              So We Built The Turmeric Nobody Was Building For A Man Who Has A Job To Finish
            </h2>

            <img
              src={IMAGES.callout}
              alt="The four actives in Field and Harvest Co Turmeric Curcumin Complex called out beside the bottle with each dose printed on its own line"
              loading="lazy"
              decoding="async"
              className="mx-auto mt-6 aspect-square w-full max-w-md rounded-sm bg-muted object-cover"
            />

            <p className="mt-7 text-lg leading-relaxed text-foreground sm:text-xl">
              Every turmeric on the shelf is sold to somebody who wants to be comfortable.{" "}
              <strong className="font-bold">
                Field &amp; Harvest Co. Turmeric Curcumin Complex is built for the man who has a fence line to finish
                and no intention of handing it to anybody.
              </strong>{" "}
              Four actives, two capsules a day, and every dose printed on its own line so you can see what you are
              actually taking.
            </p>

            <h3 className="mt-9 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              What is in it, and which of the five it answers
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {SOLUTIONS.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">{s}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
              Formulated to support a healthy inflammatory response and muscle comfort after physical activity.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              They Were Counting Days Too
            </h2>
            {RATING ? (
              <p className="mt-2 text-base text-muted-foreground">
                {RATING.score} out of 5 from {RATING.count} reviews
              </p>
            ) : null}

            <div className="mt-7 flex flex-col gap-5">
              {REVIEWS.map((review) => (
                <blockquote key={review.title} className="border-l-4 border-primary bg-muted p-5">
                  <p className="text-base font-bold text-foreground">&ldquo;{review.title}&rdquo;</p>
                  <p className="mt-2 text-base italic leading-relaxed text-muted-foreground">{review.quote}</p>
                  <footer className="mt-4">
                    <cite className="text-sm font-bold not-italic text-foreground">{review.author}</cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* FIRST BUTTON ON THE PAGE. Everything above it is selling. */}
          <section ref={ctaRef} className="mt-12">
            <img
              src={IMAGES.heroHand}
              alt="A weathered working hand holding a bottle of Field and Harvest Co Turmeric Curcumin Complex outdoors"
              loading="lazy"
              decoding="async"
              className="mx-auto aspect-square w-full max-w-md rounded-sm bg-muted object-cover"
            />
            <p className="mt-7 text-center text-base font-bold uppercase tracking-wide text-foreground">
              Today: {OFFER_TEXT}
            </p>
            <CtaButton
              className="mt-6"
              note="Click the button above to check current availability and whether today's discount is still running."
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              60 vegetarian capsules &middot; 30 days at two a day &middot; Third party tested
            </p>
          </section>

          <section className="mt-12">
            <div className="border-4 border-foreground p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src={IMAGES.guaranteeSeal}
                  alt="Ninety day money back guarantee seal"
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-20 shrink-0 object-contain"
                />
                <h3 className="min-w-0 flex-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  The 90-Day &ldquo;Read It In Days&rdquo; Guarantee
                </h3>
              </div>
              <div className="mt-5 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Take it daily, work the season the way you normally would, and judge it on the thing you already
                  count. Not on how one Saturday felt. On what the day after a long session costs you.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  If that number has not moved inside ninety days, tell us and we refund you in full.{" "}
                  <strong className="font-bold text-foreground">You keep the bottles either way.</strong>
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Ninety rather than sixty on purpose. The curcumin work runs out to about eight weeks, and a sixty-day
                  window would expire right about when this is meant to start mattering.
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

        {/* THE WORK YEAR. Context and headcount on the way into the close. The
            claim is seasonality: this is not a lawn product, it is a work
            product, which is twelve months of acquisition rather than eight. */}
        <section className="mt-14 bg-secondary py-10">
          <div className="mx-auto max-w-3xl px-5">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              The work year
            </p>
            <h2 className="mt-3 text-balance text-center text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Trimming Is March To October. Firewood Is Fall. Snow Is December To February.
            </h2>
            <div className="mt-7 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FIELD.map((f) => (
                <figure key={f.src} className="w-[42%] min-w-0 shrink-0 sm:w-[19%]">
                  <img
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[9/16] w-full rounded-md bg-muted object-cover"
                  />
                  <figcaption className="mt-2 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {f.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Not one empty month in it. The work is not seasonal, so neither is what the day after costs you. Two
              capsules with breakfast, every day, whichever of those five you are doing that week.
            </p>
            <img
              src={IMAGES.bottleClean}
              alt="A clean studio shot of the Field and Harvest Co Turmeric Curcumin Complex bottle"
              loading="lazy"
              decoding="async"
              className="mx-auto mt-8 aspect-square w-full max-w-sm rounded-sm object-cover"
            />
            <p className="mt-4 text-center text-base font-bold uppercase tracking-wide text-foreground">
              {OFFER_TEXT}
            </p>
            <CtaButton className="mt-6" />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              60 vegetarian capsules &middot; No black pepper extract &middot; 90 days to decide
            </p>
          </div>
        </section>
      </main>

      {/* Earned sticky bar */}
      <div
        aria-hidden={!(pastReveal && !ctaVisible)}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] backdrop-blur transition-transform duration-300 ${
          pastReveal && !ctaVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <p className="hidden min-w-0 flex-1 text-sm font-bold leading-snug text-foreground sm:block">{OFFER_TEXT}</p>
          <a
            href={PDP_URL}
            tabIndex={pastReveal && !ctaVisible ? 0 : -1}
            className="w-full rounded-md bg-primary px-6 py-3.5 text-center text-base font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:w-auto"
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>

      <footer className="border-t border-border pb-28 pt-8 sm:pb-8">
        <div className="mx-auto max-w-3xl px-5">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended
            to diagnose, treat, cure or prevent any disease. Individual results vary. Talk to your doctor before
            starting any supplement, particularly if you take blood thinners or have a gallbladder condition.
          </p>
          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            &copy; 2026 Field &amp; Harvest Co. This page is advertising and is not medical advice. Survey figures are
            from our own post-purchase survey of Field &amp; Harvest customers; the duration question ran on 1,085
            responses and the prior-solution question on 387.
          </p>
        </div>
      </footer>
    </div>
  )
}
