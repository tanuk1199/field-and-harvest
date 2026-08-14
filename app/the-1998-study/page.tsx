"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// ============================================================
// /the-1998-study : TURMERIC CURCUMIN COMPLEX advertorial, THE EVIDENCE ANGLE
//
// SIBLING TO `/the-turmeric-trap`, NOT A REWRITE OF IT. Same template, same components, same
// publisher masthead. Different accusation, different proof, so they do not cannibalise:
//
//   /the-turmeric-trap  -> the LABEL hides the curcumin.   Proof: buyer complaints + panel maths.
//   /the-1998-study     -> the EVIDENCE was never there.   Proof: a citable paper and its record.
//
// ⭐ BUILT BECAUSE THIS ANGLE IS ALREADY WINNING DIRECT TO PDP. The static carrying "the absorption
// claim on most turmeric traces back to one eight-person study from 1998" is the top performer in
// the campaign going straight to the product page. That is evidence the angle needs no teaching,
// which is exactly why this page is a SECOND destination to test against direct-to-PDP rather than
// a replacement for it. A long page for an angle that already converts is a transition you pay for.
//
// ⭐⭐ THE NARRATOR READS A PAPER. HE DOES NOT OWN A PURCHASE HISTORY, AND THAT IS THE POINT.
// On `/the-turmeric-trap` the narrator has three years, nine bottles and a ten week result log, all
// written rather than collected, which is the single largest exposure on that page and one of the
// two things failing its SOP 5 compliance pass. Here the narrator does the one thing a writer can
// genuinely do and be believed doing: he pulls a citation and reads it. Every factual load he
// carries is checkable by the reader in a browser. There is no invented purchase, no invented
// result, no health outcome and no testimonial anywhere on this page.
//
// ⚠⚠ EVERY FACT ABOUT THE STUDY WAS VERIFIED BEFORE THIS PAGE WAS WRITTEN, not recalled:
//   - Shoba G, Joy D, Joseph T, Majeed M, Rajendran R, Srinivas PSSR. Planta Medica 1998;64(4):353-6
//   - human arm: EIGHT healthy volunteers, 2.0 g curcumin alone vs with 20 mg piperine
//   - curcumin alone: serum levels "either undetectable or very low"
//   - with piperine: reported increase in bioavailability of 2000%
//   - the piperine used is the BRANDED extract named in the paper's own abstract
//   - an author shares a surname and affiliation with the company that markets that extract, and
//     that company's own studies page leads with this paper and prints the 2000% figure
//   - independent groups have not confirmed an increase in FREE (unconjugated) curcumin; the early
//     assays did not separate free curcumin from conjugated metabolites the kidneys clear
//
// ⛔⛔ THE COMPANY AND THE BRANDED INGREDIENT ARE NEVER NAMED ON THIS PAGE. `3-mechanism.md`:
// attack the industry PRACTICE, never a company. The conflict of interest is stated factually
// ("an author of the paper worked for the company that sells the branded pepper extract the study
// tested") which is public, checkable and devastating, without putting a named ingredient supplier
// in a position where suing is cheaper than ignoring. Do not add the name back in. It buys nothing
// and it converts a strong argument into a legal problem.
//
// ⚠ OUR PRODUCT CONTAINS NO PIPERINE, which is what makes this attack safe to make. If piperine
// is ever added to the formula this entire page has to come down.
//
// ⛔ NO HEALTH CLAIMS, NO OUTCOME TIMELINE, NO TESTIMONIAL, NO RATING, NO REVIEW COUNT, NO PRICE,
// NO SCARCITY. Same as the sibling page and for the same reasons.
// ============================================================

// ⭐ REPOINTED 2026-08-12 TO THE BROADENED DUPLICATE, product `8042585063467`.
// WHY THERE ARE NOW TWO: direct-to-PDP took 2 sales on 2026-08-11, so that funnel is left
// completely undisturbed on the ORIGINAL product as the control, and the broadened duplicate is
// what this advertorial feeds. Same offer, same prices, same 90 day guarantee, same rating.
// ⭐ IT ALSO CLOSES THE MESSAGE-MATCH GAP SOP 5 FLAGGED (Q2). This page argues the label and the
// absorption for 2,600 words and used to land on an H1 reading "Finish The Job In One Go Again",
// which is the FIN angle and a different promise. The broad page's H1 is "Built To Be Absorbed,
// Not To Look Big", so the arrival now confirms the argument instead of changing the subject.
// ⚠ DO NOT point this back at `turmeric-curcumin-complex`. That product IS the control.
const PDP_URL = "https://fieldandharvestco.com/products/high-absorption-turmeric-curcumin"
const LANDER_TAG = "t98"
// ⭐ THE FINAL CTA IS "CHECK AVAILABILITY", per Tobenna 2026-08-11 and matching the reference's
// own last button. It is also the standing label across the Walt Brenner cold-editorial pages
// (`/back-hurts-when-trimming`, `/putting-off-the-trimming`, `/finish-the-yard-in-one-go`), so
// the fleet stays consistent.
// ⚠ NOTED ONCE, NOT RE-LITIGATED: I had moved this to "SEE THE FULL FORMULA" on the SOP 5 pass
// because "availability" implies scarcity the page refuses to claim. Owner's call, and it is
// defensible: with no price anywhere on the page now, "check availability" is literally what
// the click does, and nothing here states or implies a stock figure or a deadline.
const CTA_LABEL = "CHECK AVAILABILITY >>"
// ⭐ MASTHEAD IS BACK TO THE PUBLISHER IDENTITY, and the incoherence that forced it to
// the brand is now gone. It read "HEALTHY LIVING" while the body said "we make things you
// bolt onto a trimmer", i.e. a publisher claiming to sell trimmer handles. The narrator is
// no longer the brand, it is a Healthy Living writer, so publisher masthead + writer
// byline + Advertorial label is coherent again. Tobenna's call, and he is right that the
// whole category hosts publisher-styled advertorials on the advertiser's own domain.
//
// ⚠ CONSEQUENCE FOR MEDIA: this page is fed from the HEALTHY LIVING Facebook Page (the
// formulation-and-body publisher identity already established for this SKU), NOT from the
// brand Page. CTA stays Learn More, because the page carries no offer above the fold.
//
// Layout is the reference's: a tinted section bar with the section name left and the
// Advertorial disclosure right, then a breadcrumb, then the headline.
const PUBLISHER = "Healthy Living"
// ⚠ THE BAR CARRIES THE PUBLICATION NAME, NOT A SECTION NAME (Tobenna, 2026-08-11). It read
// "Wellness", which is what the reference's own bar does, but the reference has its logo
// elsewhere on the page and we do not: the bar is the only place this page identifies itself,
// so a section name left it unsigned.
const SECTION_LABEL = PUBLISHER
const BREADCRUMB = ["Home", "Men", "Health & Wellness"]
// ⚠ TERRACOTTA, NOT THE REFERENCE'S PALE BLUE (Tobenna: make it more manly). The reference
// sells magnesium to women and its powder-blue bar is correctly cast for that; this page
// sells to men over 50 who do their own physical work, and pale blue reads pharmacy-wellness
// at them. Deep terracotta is also already the F&H accent, so the one piece of publisher
// chrome quietly rhymes with the destination without naming the brand.
const MASTHEAD_BG = "#A9482A"
const MASTHEAD_FG = "#FFF4EC"

const PAGE_THEME = {
  "--background": "oklch(1 0 0)",
  "--foreground": "oklch(0.21 0.008 60)",
  "--muted": "oklch(0.968 0.004 70)",
  "--muted-foreground": "oklch(0.487 0.012 62)",
  "--border": "oklch(0.9 0.005 70)",
  "--primary": "oklch(0.58 0.196 42)",
  "--primary-foreground": "oklch(1 0 0)",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
} as React.CSSProperties

const CDN = "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/"
const IMG = {
  // ⭐ THREE NEW `t98-` ASSETS for this page, the rest reused. No new product photography needed:
  // the argument here is a document, not a bottle.
  author: "/t98-author.webp",
  authorAvatar: "/t98-author-avatar.webp",
  paper: "/t98-paper.webp",
  // Reused from the sibling page and the fyo lander.
  formMatters: "/fyo-form-matters.webp",
  labelVsAbsorbed: "/fyo-label-vs-absorbed.webp",
  twoRoads: "/fyo-two-roads.webp",
  calloutH: "/ttt-callout.webp",
  ugcGarage: "/ttt-ugc-garage.webp",
  ugcKitchen: "/ttt-ugc-kitchen.webp",
  ugcPalm: "/ttt-ugc-palm.webp",
  ugcNote: "/ttt-ugc-note.webp",
  seal: `${CDN}supp-guarantee-seal.png?width=320`,
  bottle: `${CDN}supp-bottle-clean.png?width=700`,
} as const

// ⭐ HEADLINE, MODELLED ON THE SAME SCALING REFERENCE AS THE SIBLING PAGE:
//   [I did a specific thing] [and found a specific thing] ([imperative he can obey now])
// The number is the engine, exactly as "$1,400" is on the reference, with one crucial difference:
// THIS NUMBER IS REAL AND CHECKABLE. The sibling page's dollar figure is invented and is one of the
// two things failing its compliance pass. Eight is in the paper's own abstract.
const HEADLINE = "I Read The Study Behind Every Black Pepper Turmeric. It Had Eight People In It."
const HEADLINE_BRACKET = "(Check Your Own Label Right Now)"
// His sentence in quote marks, then the practice, same as the reference's subhead.
const SUBHEAD =
  "Why “2000% more absorption” ended up on so many bottles, and what the paper it all traces back to actually says"
const AUTHOR = "Martin Vance"
const PUBLISH_DATE = "March 2026"
const BYLINE = `By: ${AUTHOR}, ${PUBLISH_DATE}`
const READING_TIME = "Reading Time: 6 min read"

const INGREDIENTS = [
  {
    name: "Curcumin Phytosome",
    dose: "500 mg",
    body: "Curcumin on its own is very poorly absorbed, which is the whole reason the category keeps raising the number on the front. A phytosome carries the curcumin in a fat the body already knows how to take up, so the amount that arrives stops depending on the size of the pile.",
  },
  {
    name: "Boswellia Serrata, 30% AKBA",
    dose: "100 mg",
    body: "Standardised to AKBA, the compound the research is actually about. Inflammation does not run down one road, and this is the one common over-the-counter pain relievers were never built to work on. It is also the faster of the two actives.",
  },
  {
    name: "Ginger Extract",
    dose: "100 mg",
    body: "Same family as turmeric, real supporting literature, and a word you already know from your own kitchen rather than off a supplement shelf.",
  },
  {
    name: "Vitamin D3",
    dose: "2,000 IU",
    body: "Supports normal muscle and bone function. Unremarkable, cheap, and worth having on the panel at your age.",
  },
]

const WRONG = [
  "1,000 to 2,250 mg of raw turmeric powder, counted as turmeric rather than as curcumin",
  "A combined total on the label, so the actual curcumin figure is never printed",
  "Black pepper extract to force absorption, on the back of one small 1998 study",
  "Three capsules a day, which is where the stomach complaints start",
  "Nothing aimed at a man who is still doing his own physical work",
]

const RIGHT = [
  "500 mg of a curcumin phytosome, a form built to be absorbed rather than to look big",
  "Every dose printed on its own line. No combined total, nothing to work out",
  "No piperine in any form, so there is no black pepper question to ask",
  "Two capsules, once a day, with breakfast",
  "Built for joints, back and muscle comfort in a man who stays active",
]



const FAQS = [
  {
    q: "Is the 1998 study fake?",
    a: "No, and nothing on this page says it is. It is a real paper, published in a real journal, and it has been cited well over a thousand times. The problem is not that it was fabricated. The problem is that eight people is a very small number to build an entire category on, that the branded pepper extract it tested is named in its own abstract, that an author of it worked for the company selling that extract, and that in the years since, independent groups looking specifically at free curcumin have not confirmed the effect. Any of that you can go and check yourself.",
  },
  {
    q: "So does black pepper do nothing at all?",
    a: "That is not the claim either. Piperine slows down the process that clears curcumin, and that is real chemistry. What is unproven is the size of the number the category prints, and whether it raises the FREE curcumin that can actually get into a cell rather than the conjugated version your kidneys are already on their way to removing. The honest position is that nobody has shown it does the second thing.",
  },
  {
    q: "What does this one use instead?",
    a: "A curcumin phytosome. Rather than adding something to slow down clearance, the curcumin is carried in a fat the body already knows how to take up. There is no piperine in it in any form, which also means there is no black pepper question to ask about it. Every dose is printed on its own line on the panel.",
  },
  {
    q: "How many capsules a day, and will it bother my stomach?",
    a: "Two, once a day, with breakfast. That is the whole routine, and it matters here: the loudest complaint under the big three-capsule sellers is digestive discomfort. Taking it with food is the sensible way to start. If it does not suit you, the ninety days covers it.",
  },
  {
    q: "What if it does nothing for me?",
    a: "Then you have paid nothing for it. Take it daily for as long as you like inside ninety days, and if you cannot see a difference in what a hard day costs you afterwards, contact them and they refund you in full. You keep the bottles. Ninety rather than sixty is deliberate, because the published curcumin work runs to about eight weeks and a sixty day window would expire right about when it is meant to start mattering.",
  },
]

function Cta({ note, className = "", slot }: { note?: string; className?: string; slot: string }) {
  return (
    <div className={className}>
      <div className="flex justify-center">
        <a
          href={PDP_URL}
          data-t98-cta={slot}
          className="inline-block w-full max-w-lg rounded-md bg-primary px-8 py-5 text-center text-base font-bold uppercase tracking-wide text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:text-lg"
        >
          {CTA_LABEL}
        </a>
      </div>
      {note ? (
        <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">{note}</p>
      ) : null}
    </div>
  )
}

// ---------- INLINE TEXT-LINK CTA ----------
// The reference closes almost every section with one of these ("→ See what real magnesium
// looks like here"). We had none, and it is the cheapest thing on the page to add: it reads
// as an editorial jump link rather than a button, so it can sit inside the article without
// contradicting the masthead, which is exactly what the removed sticky rail could not do.
// ⭐⭐ THE LADDER IS MODELLED ON THE REFERENCE'S, WHICH RUNS SEVEN OF THEM IN A DELIBERATE ARC:
//   1 "See what real magnesium looks like here"          -> discovery
//   2 "This is what doctors are actually recommending"    -> authority
//   3 "See if bottles are still in stock (112 left...)"   -> availability
//   4 "Join 106,472+ women finally sleeping..."           -> social volume
//   5 "See if it's still in stock before 6-week sellout"  -> availability, escalated
//   6 "Check if SPNutrition is still in stock (selling fast)"
//   7 "See if bottles are still in stock (112 left...)"
//   final button: check availability
// The SHAPE that matters is that it starts as a curiosity jump and ends as an action, every rung
// is different, and the final button is the only hard CTA.
// ⛔ FOUR OF THEIR SEVEN RUNGS COULD NOT BE CARRIED. Rungs 3, 5, 6 and 7 are all manufactured
// scarcity ("112 left as of right now", "before 6-week sellout", "selling fast") and rung 4 is a
// fabricated customer count on a product with ZERO orders. Ours therefore climbs through the
// ARGUMENT instead of through invented urgency: dose -> what he told me to look for -> the form
// -> the spec -> the switch -> the difference. Six rungs, all unique, no price, no stock figure,
// no count, no deadline. Nothing on this page expires and no stock count is real.
function InlineLink({ children, slot }: { children: React.ReactNode; slot: string }) {
  return (
    // ⭐ POINTER EMOJI, not the bare arrow it shipped with (Tobenna, 2026-08-12: make it clearly
    // clickable). A `→` set in the same weight and colour as the text beside it reads as
    // punctuation, so on a page of six one-sentence paragraphs the links were disappearing into
    // the prose. 👉 is a glyph nothing else on the page uses, it is the DR convention already
    // running in this store's primary text, and it survives at any type size.
    //
    // ⚠ IT IS NOT A BUTTON, ON PURPOSE. This is a publisher-mastheaded advertorial and a row of
    // six buttons through the body is the same defect as the price rail that was removed: it
    // stops reading as editorial. The pointer plus a thick underline is the most clickable an
    // element can be while still reading as a jump link inside an article.
    //
    // `aria-hidden` on the emoji so a screen reader announces the sentence, not "backhand index
    // pointing right". `no-underline` on the span so the rule does not run under the glyph.
    <p className="mt-6">
      <a
        href={PDP_URL}
        data-t98-cta={slot}
        className="group inline-flex items-baseline gap-2 text-base font-bold text-primary hover:opacity-80 sm:text-lg"
      >
        <span aria-hidden="true" className="shrink-0 no-underline">
          👉
        </span>
        <span className="underline decoration-2 underline-offset-4 group-hover:decoration-[3px]">{children}</span>
      </a>
    </p>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
      {children}
    </h2>
  )
}

function P({
  children,
  lead = false,
  className = "",
}: {
  children: React.ReactNode
  lead?: boolean
  className?: string
}) {
  const base = lead
    ? "mt-5 text-lg leading-relaxed text-foreground sm:text-xl"
    : "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
  return <p className={`${base} ${className}`.trim()}>{children}</p>
}

// ⚠⚠ `whole` EXISTS BECAUSE THIS FRAME SILENTLY ATE A GRAPHIC AND THE BUG CLASS IS WORTH
// REMEMBERING. The default is `aspect-[3/2] object-cover`, which is right for photography and
// WRONG for anything carrying type: the label panel is 1.91:1, so object-cover cropped both
// sides off and took the ends of every line with it. Tobenna spotted it as "cut off on the
// sides, the frame is not wide enough."
// ⭐ THE RULE: any figure carrying TYPE, NUMBERS OR A TABLE must render whole. Pass `whole`
// and it drops the fixed aspect for `h-auto`, so the image sets its own height and nothing is
// cropped. Photographs keep the fixed 3:2 crop, because a consistent frame is what makes the
// column read as an article. Same failure family as the `aspect-ratio: 3/4` field tiles that
// destroyed a 1:1 source on the PDP: check the source ratio against the frame before adding
// anything to either.
function Figure({
  src,
  alt,
  caption,
  whole = false,
}: {
  src: string
  alt: string
  caption: string
  whole?: boolean
}) {
  return (
    <figure className="mt-8">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full rounded-sm bg-muted ${whole ? "h-auto" : "aspect-[3/2] object-cover"}`}
      />
      <figcaption className="mt-2 text-sm leading-snug text-muted-foreground">{caption}</figcaption>
    </figure>
  )
}

export default function The1998Study() {
  const ctaRef = useRef<HTMLElement | null>(null)
  const [ctaVisible, setCtaVisible] = useState(false)

  // Sticky bar is visible from load. It is NOT earned: on /finish-the-yard-in-one-go
  // the earned version gated the only button at 65.8% scroll and 1 session in 26 ever
  // saw it. Suppressed only while a real CTA block is on screen.
  useEffect(() => {
    const cta = ctaRef.current
    if (!cta || typeof IntersectionObserver === "undefined") return
    const o = new IntersectionObserver(([e]) => setCtaVisible(e.isIntersecting), { threshold: 0.2 })
    o.observe(cta)
    return () => o.disconnect()
  }, [])

  useEffect(() => {
    try {
      const w = window as unknown as { clarity?: { (...a: unknown[]): void; q?: unknown[] } }
      if (!w.clarity) {
        const stub = function (...a: unknown[]) {
          ;(stub.q = stub.q || []).push(a)
        } as { (...a: unknown[]): void; q?: unknown[] }
        w.clarity = stub
      }
      w.clarity!("set", "lander", LANDER_TAG)
      w.clarity!("set", "lander_build", "t98-study-read-v1")
    } catch {
      /* tagging must never break the page */
    }
  }, [])

  useEffect(() => {
    const decorate = (event: Event) => {
      try {
        const a = (event.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null
        if (!a?.href) return
        const slot = a.dataset.tttCta
        if (slot) {
          const w = window as unknown as { clarity?: (...x: unknown[]) => void }
          w.clarity?.("set", "t98_cta", slot)
          w.clarity?.("upgrade", "t98-cta-click")
        }
        const url = new URL(a.href, window.location.href)
        if (url.hostname === window.location.hostname) return
        if (!url.hostname.endsWith("fieldandharvestco.com")) return
        if (!url.searchParams.has("lp")) url.searchParams.set("lp", LANDER_TAG)
        a.href = url.href
      } catch {
        /* tagging must never break navigation */
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
      {/* MASTHEAD. The reference runs an "Advertorial" label above the publisher name.
          Keeping it is both the format and the honest disclosure. */}
      <header>
        {/* The reference's masthead is a single tinted bar: section name left, the
            Advertorial disclosure right. The disclosure is kept exactly where the
            reference puts it, which is also where the FTC wants it: visible before the
            headline, not buried in the footer. */}
        <div style={{ backgroundColor: MASTHEAD_BG }}>
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-3">
            <p className="text-base font-bold tracking-tight" style={{ color: MASTHEAD_FG }}>
              {SECTION_LABEL}
            </p>
            <p className="text-[13px] tracking-wide" style={{ color: MASTHEAD_FG, opacity: 0.85 }}>
              Advertorial
            </p>
          </div>
        </div>
        {/* Breadcrumb, same as the reference. It is doing editorial-credibility work
            rather than navigation, so the trailing crumb is the only linked-looking one
            and none of them go anywhere. */}
        <div className="mx-auto max-w-3xl px-5 pt-6">
          <p className="text-[13px] italic text-muted-foreground">
            {BREADCRUMB.map((c, i) => (
              <span key={c}>
                {i > 0 ? <span className="not-italic"> &gt; </span> : null}
                <span className={i === BREADCRUMB.length - 1 ? "underline" : undefined}>{c}</span>
              </span>
            ))}
          </p>
        </div>
      </header>

      <main>
        <article className="mx-auto max-w-3xl px-5 pt-9">
          <h1 className="text-pretty text-[1.75rem] font-bold leading-[1.2] tracking-tight text-foreground sm:text-[2.15rem]">
            {HEADLINE} {HEADLINE_BRACKET}
          </h1>

          <p className="mt-4 text-[17px] font-bold leading-[1.5] sm:text-lg">
            <span
              className="[box-decoration-break:clone] [-webkit-box-decoration-break:clone] px-1 py-0.5"
              style={{ backgroundColor: "#FBEB4A", color: "#141210" }}
            >
              {SUBHEAD}
            </span>
          </p>

          <div className="mt-5 flex items-center gap-3 border-b border-border pb-5">
            <img
              src={IMG.authorAvatar}
              alt={AUTHOR}
              width={44}
              height={44}
              loading="eager"
              className="h-11 w-11 shrink-0 rounded-full object-cover"
            />
            <p className="text-[15px] italic leading-relaxed text-muted-foreground">
              {BYLINE}
              <br />
              {READING_TIME}
            </p>
          </div>

          <Figure
            src={IMG.paper}
            alt="A printed copy of a 1998 pharmacology paper on a desk, one line highlighted"
            caption="Eight volunteers. Two grams. One number that ended up on half the shelf."
          />

          {/* ---------- THE OPENING: THE IMPERATIVE, SAME DEVICE AS THE SIBLING PAGE ----------
              Second person, one instruction per paragraph, aimed at a bottle he already owns.
              ⚠ Zero claims in this block. He verifies every line himself. */}
          <P lead>Go and get your turmeric bottle.</P>
          <P>Turn it over and read the ingredients, not the front.</P>
          <P>
            You are looking for one of three words:{" "}
            <strong className="font-bold text-foreground">black pepper</strong>,{" "}
            <strong className="font-bold text-foreground">piperine</strong>, or a branded name ending in{" "}
            <strong className="font-bold text-foreground">-perine</strong>.
          </P>
          <P>Most of them have one.</P>
          <P>
            If yours does, then the reason it is in there, the entire reason the industry puts black pepper in turmeric
            at all, traces back to a single paper published in 1998.
          </P>
          <P>I went and read it.</P>

          {/* ---------- WHY HE WENT LOOKING ---------- */}
          <H2>The same number, on every bottle, with nothing behind it</H2>
          <P>
            You have probably seen it. <strong className="font-bold text-foreground">2000% more absorption.</strong>{" "}
            Sometimes twenty times, sometimes twentyfold. Same figure, different dress.
          </P>
          <P>
            It is on packaging, on product pages, in the little paragraph underneath the buy button. And what struck me
            reading through them was not that they all said it. It was that they all said it{" "}
            <strong className="font-bold text-foreground">and none of them said where it came from.</strong>
          </P>
          <P>So I went and found out.</P>
          <P>
            Every trail ends at the same place: <em>Influence of piperine on the pharmacokinetics of curcumin in
            animals and human volunteers</em>, published in Planta Medica in 1998. It has been cited well over a
            thousand times. You can look it up in about twenty seconds.
          </P>

          <InlineLink slot="cta-1-form">👉 See the turmeric that does not need black pepper</InlineLink>

          {/* ---------- WHAT THE PAPER ACTUALLY SAYS ----------
              ⚠ EVERY FIGURE IN THIS SECTION IS FROM THE PAPER'S OWN ABSTRACT. Verified before
              writing, not recalled. Do not adjust a number here without re-checking the source. */}
          <H2>What is actually in it</H2>
          <P lead>The human part of that study had eight people in it.</P>
          <P>Eight.</P>
          <P>
            They were given two grams of curcumin on its own, and then two grams again with twenty milligrams of
            piperine alongside it.
          </P>

          <div className="mt-8 rounded-lg border-2 border-foreground p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">The human arm, in full</p>
            <div className="mt-4 space-y-3">
              {[
                ["Volunteers", "8, healthy"],
                ["Curcumin dose", "2 grams"],
                ["Piperine dose", "20 mg"],
                ["Curcumin alone", "serum levels undetectable or very low"],
                ["Reported with piperine", "an increase in bioavailability of 2000%"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-3">
                  <span className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{k}</span>
                  <span className="text-base font-bold text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <P>
            Read the fourth line again, because it is the one nobody quotes.{" "}
            <strong className="font-bold text-foreground">
              Two grams of curcumin taken on its own produced serum levels that were undetectable or very low.
            </strong>
          </P>
          <P>
            Two grams is an enormous amount of curcumin. Far more than is in the capsule you are holding. And on its
            own it barely turned up in the blood at all.
          </P>
          <P>That half of the finding has never been in dispute, and it is the half worth knowing.</P>

          {/* ---------- WHO WROTE IT ----------
              ⛔⛔ THE COMPANY AND THE BRANDED INGREDIENT ARE DELIBERATELY NOT NAMED. Read the file
              header. The facts stated here are public and checkable from the paper's own abstract
              and from the manufacturer's own published materials. Naming buys nothing and converts
              a strong argument into a legal problem. Do not add the name. */}
          <H2>Then I looked at who wrote it</H2>
          <P>
            The piperine used in the study was not generic black pepper. It was a{" "}
            <strong className="font-bold text-foreground">specific branded extract</strong>, named in the paper&apos;s
            own abstract.
          </P>
          <P>
            And one of the authors listed on the paper worked for{" "}
            <strong className="font-bold text-foreground">the company that sells it.</strong>
          </P>
          <P>
            That company still cites this paper first in its own published materials, and still prints the 2000%
            figure. None of which is hidden. All of it is on the record and has been for twenty-seven years.
          </P>
          <P>
            I want to be careful here, because this is the part that gets overstated.{" "}
            <strong className="font-bold text-foreground">
              A study is not wrong because the people who benefit from it ran it.
            </strong>{" "}
            Plenty of good science is funded by people with something at stake, and it is disclosed precisely so you
            can weigh it.
          </P>
          <P>
            But you are supposed to actually weigh it. And the category built a twenty-seven year standard on this one
            without ever asking anyone to.
          </P>

          <Figure
            src={IMG.labelVsAbsorbed}
            alt="A chart comparing the milligrams printed on a turmeric label with the amount that reaches the bloodstream"
            caption="The number on the front, and the number that reaches you. Only one of the two ever gets printed."
          />

          {/* ---------- THE REPLICATION RECORD ---------- */}
          <H2>What happened in the twenty-seven years since</H2>
          <P lead>This is the part I did not expect.</P>
          <P>
            For a finding that important, sitting under that much of a category, you would assume it had been
            confirmed over and over.
          </P>
          <P>
            Independent groups have gone looking. Several of them, in more than one country. And what they have not
            been able to confirm is that piperine raises the{" "}
            <strong className="font-bold text-foreground">free</strong> curcumin, which is the form that can actually
            get into a cell.
          </P>
          <P>
            The distinction turns out to be the whole thing. Curcumin in your blood comes in two states. There is the
            free kind, and there is the kind your body has already tagged for disposal and is busy removing. The older
            measurements did not separate them.
          </P>
          <P>
            <strong className="font-bold text-foreground">
              So a bigger number in the blood does not automatically mean more of the part that does anything.
            </strong>
          </P>
          <P>It might. Nobody has shown it.</P>

          <InlineLink slot="cta-2-instead">👉 See what is in this one instead</InlineLink>

          {/* ---------- THE HONEST MIDDLE. This is the section that makes the page credible.
              A page that says "black pepper is a scam" is arguing past what the evidence supports
              and is easy to dismantle. Conceding the real chemistry costs nothing and buys the
              reader's trust for the part that matters. Do not cut it to make the page angrier. */}
          <H2>To be fair to black pepper</H2>
          <P>Piperine is not snake oil, and I am not going to pretend it is.</P>
          <P>
            It genuinely does slow down the process that clears curcumin out of you. That is real, and it is why the
            idea caught on in the first place.
          </P>
          <P>
            The question was never whether piperine does something. It is{" "}
            <strong className="font-bold text-foreground">how much, to which kind of curcumin, and on what evidence.</strong>
          </P>
          <P>
            And the honest answer, twenty-seven years on, is that the number everybody prints rests on eight people
            and has never been independently confirmed for the form that counts.
          </P>
          <P>
            Which raises the obvious question. If the only reason for the pepper is to slow down the clearing of
            something that barely got absorbed in the first place,{" "}
            <strong className="font-bold text-foreground">why not fix the absorption instead?</strong>
          </P>

          {/* ---------- THE UMS ---------- */}
          <H2>There is a version that does not need the workaround</H2>
          <P lead>
            Curcumin is fat soluble and your gut is not. That is the actual problem, and it is a physical one rather
            than a metabolic one.
          </P>
          <P>
            So rather than swallowing raw powder and then adding something to slow down its removal, the curcumin can
            be carried in a fat the body already knows how to take up. That form is called a phytosome.
          </P>
          <P>
            The consequence is the interesting part. If the form is absorbed, the dose does not have to be enormous.
            And if the dose does not have to be enormous, you are not swallowing three large capsules of powder a day
            to get there.
          </P>

          <Figure
            src={IMG.formMatters}
            alt="A diagram comparing loose raw powder halted at a barrier with enclosed particles passing through it"
            caption="Raw powder largely stops at the wall. An enclosed form is built to get through it."
          />

          <P>
            The one I ended up looking at is{" "}
            <strong className="font-bold text-foreground">Field &amp; Harvest Co. Turmeric Curcumin Complex.</strong>{" "}
            Four actives, two capsules, once a day with breakfast. Every dose printed on its own line.
          </P>
          <P>
            <strong className="font-bold text-foreground">And no piperine in it, in any form.</strong> Which means
            there is no black pepper question to ask about it, and nothing on this page to take on trust.
          </P>

          <div className="mt-9 grid grid-cols-2 gap-2 sm:gap-3">
            {[
              [IMG.ugcGarage, "The bottle held in one hand, front label readable, in a home garage"],
              [IMG.ugcKitchen, "A man in his early sixties holding the bottle in his kitchen in the morning"],
              [IMG.ugcPalm, "Two tan capsules resting on an open weathered palm beside the bottle"],
              [IMG.ugcNote, "The bottle beside a handwritten note reading two with breakfast"],
            ].map(([src, alt]) => (
              <img
                key={src}
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-sm bg-muted object-cover"
              />
            ))}
          </div>
          <p className="mt-2.5 text-sm leading-snug text-muted-foreground">
            What it is out of the box. Two capsules, once a day, with breakfast.
          </p>

          <Figure
            src={IMG.calloutH}
            alt="The four actives called out beside the bottle with each dose printed on its own line"
            caption="Four actives, four printed doses, one line each. Nothing hidden in a combined total."
          />

          {/* ---------- THE SECOND PATHWAY ---------- */}
          <H2>The second thing in it, and why</H2>
          <P>
            Inflammation does not run down a single road. Common over the counter pain relievers work on the first of
            them, which is why they do something and why you keep reaching for them. They were never built to work on
            the second.
          </P>
          <P>
            That is what the boswellia is in there for, standardised to 30% AKBA, which is the compound the research
            is actually about rather than a generic extract. It is also the faster-acting of the two.
          </P>
          <P className="text-sm">
            Nothing here is a reason to change anything a doctor has you on. Keep taking what you are told to take,
            and ask them before you add to it.
          </P>

          <Figure
            src={IMG.twoRoads}
            alt="Diagram of two inflammatory pathways showing where common pain relievers act and where boswellia AKBA acts"
            caption="One road covered, the other one not. That is the gap the second active is in the formula for."
          />

          <InlineLink slot="cta-3-panel">👉 See the full panel, dose by dose</InlineLink>

          {/* ---------- WHAT TO EXPECT: PROTOCOL, NOT OUTCOME ----------
              ⚠ Every line says what the actives are doing and what HE should do. Not one says what
              he will feel by a given week. That distinction is the only thing keeping it legal. */}
          <H2>What to expect, honestly</H2>
          <P>
            This is the part most pages skip, and skipping it is why people quit at week three. So, plainly, and with
            no date attached to a feeling:
          </P>
          <div className="mt-6 space-y-4">
            {[
              ["Weeks 1 to 2", "Boswellia is the faster-acting part of the stack. This is also where most people give up."],
              [
                "Weeks 3 to 6",
                "The phytosome wants consistency more than patience. Take it daily and stop watching for one good morning.",
              ],
              [
                "Weeks 7 to 10",
                "The published work on curcumin runs out to about eight weeks. By here you have a real stretch of your own to compare against, rather than a single Saturday.",
              ],
            ].map(([w, b]) => (
              <div key={w} className="flex flex-col gap-1 border-b border-border pb-4 sm:flex-row sm:gap-6">
                <p className="shrink-0 text-sm font-bold uppercase tracking-wide text-primary sm:w-32">{w}</p>
                <p className="text-base leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
          <P>
            Notice that none of those say what you will feel by a given week. Anyone who puts a firmer date on it than
            that is guessing, and the ninety days exists so you do not have to take their word for it.
          </P>

          {/* ---------- CLOSE ---------- */}
          <H2>What I would do with the bottle you are holding</H2>
          <P>Nothing dramatic. Just read the back of it once, properly.</P>
          <P>
            If it has black pepper or piperine in it, you now know exactly what that ingredient is doing there and
            exactly how much evidence is underneath it. That is more than most people who sold it to you know.
          </P>
          <P>
            <strong className="font-bold text-foreground">
              And if you have been taking turmeric for a year and quietly wondering whether it was doing anything, the
              honest answer is that you may never have found out.
            </strong>
          </P>

          {/* ---------- OFFER ---------- */}
          <section ref={ctaRef} className="mt-14 rounded-lg border-2 border-foreground p-5 sm:p-7">
            <img
              src={IMG.bottle}
              alt="A bottle of Field and Harvest Co Turmeric Curcumin Complex"
              loading="lazy"
              decoding="async"
              className="mx-auto aspect-square w-full max-w-xs rounded-sm object-cover"
            />
            <h2 className="mt-6 text-pretty text-center text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Turmeric Curcumin Complex
            </h2>
            <p className="mt-2 text-center text-base font-semibold text-foreground">
              A curcumin phytosome, with no piperine in it in any form.
            </p>
            <p className="mt-1.5 text-center text-sm text-muted-foreground">
              60 vegetarian capsules. Two a day with breakfast. Thirty days a bottle.
            </p>

            {/* ⛔ NO PRICE ANYWHERE ON THIS PAGE, same as the sibling. Pack SHAPES only, because
                "buy 2 get 1 free" is an offer structure rather than a price, and the guarantee,
                because that is the risk answer. Pricing is the destination's job. */}
            <div className="mt-6 space-y-3">
              {[
                ["1 bottle", "thirty days, the sensible way to start"],
                ["Buy 2, get 1 free", "three bottles, covers the ten-week read"],
                ["Buy 3, get 2 free", "five bottles, the full stretch and then some"],
              ].map(([label, note]) => (
                <div
                  key={label}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-3"
                >
                  <span className="text-base font-bold text-foreground">{label}</span>
                  <span className="text-sm text-muted-foreground">{note}</span>
                </div>
              ))}
            </div>

            <Cta className="mt-7" slot="offer" note="Two capsules with breakfast. Ninety days to decide either way." />
          </section>

          <section className="mt-10 border-4 border-foreground p-5 sm:p-7">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src={IMG.seal}
                alt="Ninety day money back guarantee seal"
                loading="lazy"
                decoding="async"
                className="h-20 w-20 shrink-0 object-contain"
              />
              <h2 className="min-w-0 flex-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Ninety days. Keep the bottles either way.
              </h2>
            </div>
            <P>
              Take it every day and judge it on the thing you already count, which is what a hard day costs you
              afterwards. Not on how one morning felt.
            </P>
            <P>
              If that has not moved inside ninety days, tell them and they refund you in full. You do not have to send
              anything back.
            </P>
          </section>

          <H2>Frequently asked questions</H2>
          <Accordion type="single" collapsible className="mt-4">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-bold text-foreground sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Cta className="mt-12" slot="closing" note="Ninety days to decide. Keep the bottles either way." />
        </article>

        <footer className="mt-14 border-t border-border pb-28 pt-8 sm:pb-8">
          <div className="mx-auto max-w-3xl px-5">
            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              These statements have not been evaluated by the Food and Drug Administration. This product is not
              intended to diagnose, treat, cure or prevent any disease. Individual results vary. Talk to your doctor
              before starting any supplement, particularly if you take blood thinners or have a gallbladder condition.
            </p>
            {/* ⚠ THE FOOTER IS WHERE THE FULL DISCLOSURE LIVES NOW. Tobenna's instruction was
                to stop printing the sourcing in the BODY, where it read like a research memo
                and told the reader he was looking at desk research rather than at another
                man's experience. It did not mean removing it from the page. Moving detail to
                the footer is standard advertorial practice and it is what keeps the
                de-sourcing honest: the body reads as story, the footer still says exactly
                what everything is. Two things it must always carry: that this is advertising,
                and that the narrator is a persona. Do not cut either. */}
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              This page is an advertorial and is advertising, not medical advice or independent journalism.{" "}
              {AUTHOR} is a writer persona. ⭐ Unlike a first-person purchase account, nothing on this page depends on
              that: every factual claim made here is about a published paper and its citation record, and every one of
              them is verifiable by the reader.
            </p>
            {/* ⚠ SOURCE NOTE FOR THE ARITHMETIC BLOCK. Added when the percentages went in.
                SOP 5 Check 4: every specific number needs a source. These three are published
                facts about the plant and the compound, not specs of this product, and the note
                says so explicitly. If the arithmetic block is ever edited, edit this too. */}
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              The study discussed throughout is Shoba G, Joy D, Joseph T, Majeed M, Rajendran R and Srinivas PSSR,
              &ldquo;Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers&rdquo;,
              Planta Medica 1998;64(4):353-356. Its human arm comprised eight healthy volunteers given 2.0 g of curcumin
              alone and with 20 mg of piperine; curcumin alone produced serum levels described as either undetectable or
              very low, and the reported increase in bioavailability with piperine was 2000%. The branded piperine
              preparation used is named in that abstract. Statements about the subsequent literature refer to the
              absence of independent confirmation of an increase in free, unconjugated curcumin. No absorption rate,
              percentage or multiple is claimed for this product anywhere on this page, and this product contains no
              piperine in any form.
            </p>
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              &copy; 2026 Field &amp; Harvest Co.
            </p>
          </div>
        </footer>
      </main>

      {/* ⛔ STICKY OFFER BAR REMOVED 2026-08-11, on Tobenna's instruction, and the reasoning
          is worth keeping because it points the OPPOSITE way to the biggest lesson on
          `/finish-the-yard-in-one-go`.
          There, an earned sticky was the single worst defect on the page: it unlocked at
          65.8% scroll on a 12,866px page, so at most 1 session in 26 ever saw a button. The
          fix was to make it always-on with a price, and that fix is still correct THERE.
          It does not transfer here, because this page is a different object. That one is a
          brand-mastheaded listicle where a price bar reads as native furniture. This is a
          PUBLISHER-mastheaded advertorial with a writer byline, and a permanent price rail
          pinned to the bottom of the viewport is the one element that cannot be read as
          editorial. It contradicts the masthead on every screen of a 17,000px page, which is
          a scent break paid for continuously rather than once.
          ⚠ THE CONVERSION PATH IS NOT WEAKENED BY THIS: the inline and closing CTAs both
          remain, both carry the offer, and neither is gated. The always-on principle is
          preserved where it matters. What is gone is the permanent rail.
          ⚠ Consequence for measurement: `ttt_cta` can no longer return "sticky", so
          historical comparisons against the fyo click split are not like for like. */}
    </div>
  )
}
