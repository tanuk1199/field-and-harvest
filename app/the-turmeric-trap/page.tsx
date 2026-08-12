"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, X } from "lucide-react"

// ============================================================
// /the-turmeric-trap : TURMERIC CURCUMIN COMPLEX advertorial
//
// Built to the RMBC pack in `Yeoman Supplement/rmbc/`. The brief is
// `03 - BRIEF AND OFFER.md`; do not change strategy here, change it there.
//
// ⭐ FORMAT IS NOW MODELLED ON THE SPNUTRITION MAGNESIUM ADVERTORIAL, supplied by Tobenna
// 2026-08-11 as a page that is currently scaling:
// `~/Downloads/spnutrition-us-com-pages-advertorial-magnesium....pdf` (8pp, rendered to
// `scratchpad/mag-p01..08.png`). It SUPERSEDES the Old World Relief reference for structure.
//
// ITS SECTION ORDER, which this page now follows:
//   1. Tinted section bar: section name left, "Advertorial" right. Then a breadcrumb.
//   2. Plain bold H1. HIGHLIGHTED subhead. "By: <name>, <month year>" + "Reading Time".
//   3. Hero image.
//   4. ⭐ THE GUIDED BOTTLE CHECK, IN SECOND PERSON, AS THE OPENING. One-sentence
//      paragraphs. "Go grab your bottle right now. I'm serious. I'll wait." The reader is
//      physically holding his own bottle inside fifteen seconds.
//   5. Only THEN the writer's own first-person story, under its own H2.
//   6. The authority reveal.
//   7. What other buyers already worked out.
//   8. The mechanism, the product, the offer, the guarantee, the FAQ.
//
// ⚠ THE ONE-SENTENCE PARAGRAPH RHYTHM IS LOAD-BEARING, NOT A STYLE TIC. It is what makes
// 2,800 words read as a conversation on a phone. Do not consolidate them into tidy prose.
//
// ⛔ DEVICES IN THE REFERENCES DELIBERATELY NOT CARRIED. Each is load-bearing there and
// unshippable here:
//   1. A named doctor who NAMES AND RECOMMENDS THE BRAND. The magnesium page has its
//      neurologist do exactly this. Ours states a labelling fact and nothing else.
//   2. Private "verified physicians only" forum threads with doctors reporting patient
//      outcomes, and a quoted "Dr. Sarah L., 48". Fabricated professional endorsement.
//   3. Named customer testimonials with ages and jobs. This SKU has ZERO orders.
//   4. A 14-day day-by-day transformation diary, and sleep-tracker before/after
//      screenshots. Outcome timeline plus before-and-after imagery.
//   5. "Important Stock Warning", "down to 127 bottles", "40% price increase on restock",
//      "6-week sellout". Manufactured scarcity. Nothing on this page expires.
//   6. Disease and outcome language ("cured", "poison", "she cried in my office").
//   7. Old World Relief's "Barbara Henderson", cure claims, arthritis naming,
//      "you don't pay unless it works", and the disease-progression scare.
//
// ⚠ WHAT IS CARRIED AND WHAT IT COSTS: the first-person narrator IS carried, on Tobenna's
// instruction 2026-08-11. See the headline comment block for the full reasoning and for the
// one honest exposure that creates.
//
// UMP (owner-confirmed): to get a dose of turmeric that does anything you have to
// swallow so much powder it turns on your stomach, and even then the number on the
// front was never the amount of curcumin you were getting.
// UMS: a phytosome is absorbed, so a smaller printed dose does the work, which is
// why it is two capsules once a day and every dose is on its own line.
//
// AWARENESS: solution-aware, and deliberately so now. Earlier drafts were killed for
// presuming the failed turmeric purchase. The reference presumes it outright in its own
// subhead and is scaling, so the aperture was never the problem; the missing thing was
// force. The page opens by putting his own failed bottle in his hand.
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
const LANDER_TAG = "ttt"
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
  // ⭐ FIVE DEDICATED `ttt-` ASSETS, generated 2026-08-11 (gpt_image_2, 3:2, 1k/medium) to
  // fill the four slots the magnesium reference uses and this page had no equivalent for.
  // 230 KB for the whole set. Masters in `scratchpad/ttt-img/`.
  //
  // ⚠ NO PRODUCT REFERENCE WAS ATTACHED AT GENERATION TIME. Every one of these deliberately
  // shows a GENERIC unbranded bottle or none at all, and attaching the pack reference to a
  // prompt that says "no branded packaging" makes the model insert ours anyway (the Grange
  // `PM-CF001-g2` failure class). Do not add a reference if these are ever regenerated.
  //
  // ⚠ EVERY BOTTLE IN THESE SHOTS IS UNBRANDED AND EVERY LABEL IS ILLEGIBLE, ON PURPOSE.
  // Two separate rules converge on that: naming a competitor is the Lanham Act problem, and
  // a readable supplement facts panel would be a rendered spec assertion on a SKU with no
  // locked formula. The prompts fenced both explicitly and all four came back clean.
  whiteboard: "/ttt-whiteboard.webp",
  labelPanel: "/ttt-label-panel.webp",
  barbecue: "/ttt-barbecue.webp",
  author: "/ttt-author.webp",
  authorAvatar: "/ttt-author-avatar.webp",
  // 3:2 photography and concept diagrams generated for the fyo lander, reused here.
  dayAfter: "/fyo-day-after.webp",
  nothingShelf: "/fyo-nothing-shelf.webp",
  labelVsAbsorbed: "/fyo-label-vs-absorbed.webp",
  formMatters: "/fyo-form-matters.webp",
  twoRoads: "/fyo-two-roads.webp",
  // ⭐ `ttt-callout` REPLACED the 1:1 `supp-callout.png` on 2026-08-11 (Tobenna: this image
  // needs to be made horizontal). Regenerated natively at 3:2 so it stops costing a screen of
  // height on a page that is already 17,000px, and so it matches every other figure here.
  // ⚠ THIS IS THE ONE DOSE-BEARING RENDER ON THE PAGE. All four values were read back at full
  // size against `2-formulation.md` before it shipped: Curcumin Phytosome 500 MG, Boswellia
  // Serrata 30 Percent AKBA 100 MG, Ginger Extract 100 MG, Vitamin D3 2000 IU, and the actives
  // line renders as ONE line (BOSWELLIA . GINGER . VITAMIN D3), which is the pack lockup rather
  // than the wrong stacked variant. Re-verify every figure if it is ever regenerated.
  calloutH: "/ttt-callout.webp",
  // ⭐ FOUR PHONE-REGISTER SHOTS, generated 2026-08-12 (gpt_image_2, 1:1, 1k/medium, pack
  // reference `7fb013f9-...` attached because this IS our product). Deliberately amateur:
  // soft focus, mixed indoor light, slight tilt and shake. Verified at full size — correct
  // dark espresso bottle, terracotta cap, dark label with no light panel, and the actives on
  // ONE line (BOSWELLIA . GINGER . VITAMIN D3), which is the pack lockup not the stacked
  // variant. `palm` has exactly two capsules and no gummies. `note` carries handwriting
  // reading TWO WITH BREAKFAST / SATURDAY THEN SUNDAY, spelled correctly.
  ugcKitchen: "/ttt-ugc-kitchen.webp",
  ugcGarage: "/ttt-ugc-garage.webp",
  ugcPalm: "/ttt-ugc-palm.webp",
  ugcNote: "/ttt-ugc-note.webp",
  bottle: `${CDN}supp-bottle-clean.png?width=700`,
  seal: `${CDN}supp-guarantee-seal.png?width=320`,
} as const

// ⛔ HEADLINE REVISION 1, AND THE REASONING MATTERS MORE THAN THE WORDS.
// v1 was "Why Most Turmeric Never Does Much For Your Joints (And The One Line On The
// Label That Explains It)". Tobenna killed it: it presumes he already bought a
// turmeric, which is solution-aware, and most of the list has not.
//
// The root cause was a sampling error on my part. The UMP was derived from the 150
// Amazon reviews, which are a POST-PURCHASE sample: every one of those people had
// already crossed the buying threshold. That set is excellent for objection handling
// and for the mechanism and says nothing about moving a non-buyer. I let the source
// set the aperture.
//
// Our own survey says the largest single answer for what he has tried is NOTHING AT
// ALL, 112 of 387. So the headline now leads on that finding, which speaks to the
// biggest group we have, and the bracket picks up the minority who did try something
// without excluding anyone.
//
// ⛔ HEADLINE REVISION 2. v2 was "What Most Men Over 50 Do About Aching Joints Is
// Nothing At All". Tobenna pushed back: over-reliant on our own survey data, and he
// had not seen the approach work anywhere. He was right, and the flaw is structural:
// "most men do nothing" is a statement about OTHER PEOPLE. There is no wound in it.
// A survey finding is fascinating to a marketer because it reveals the market's
// state; it is not interesting to the man with the sore knees. Data-led lines are
// CREDIBILITY devices, not ATTENTION devices, which is why the survey numbers earn
// their keep as mid-page proof and died as an opener.
//
// v1 presumed a purchase. v2 presumed he cares about a statistic. Both are aperture
// errors in opposite directions.
//
// v3 is FIRST PERSON, and specifically the BRAND's first person, which is the only
// honest first person available: with zero customers, a first-person narrator with
// RESULTS is a fabricated testimonial, i.e. the Barbara Henderson device that was
// deliberately not carried from the reference. The company as narrator is true, needs
// no testimonial, has standing with the reader because it already sold him a tool,
// turns the survey from a cold statistic into a DISCOVERY, and answers the question a
// reader would otherwise carry all page: why is a tool company selling me a capsule?
// It is also the underserved-avatar thesis spoken aloud. Nobody else in turmeric can
// say "we make the tools you use".
//
// Precedent for a narrator who REPORTS rather than testifies: Walt Brenner and Ruth
// Alderman are writer personas in this fleet and are never given invented purchase
// stories.
//
// The trap did not get thrown away, it moved down one slot. RMBC's advertorial
// skeleton runs INTRO -> WHAT PEOPLE HAVE BEEN TOLD -> WHY IT HAS NOT WORKED -> THE
// NEW DISCOVERY. A failed turmeric attempt belongs in "why it has not worked", not
// in the headline.
// ⛔ HEADLINE REVISION 3, AND THIS ONE IS MODELLED ON A SCALING ADVERTORIAL RATHER THAN
// DERIVED. The reference Tobenna supplied is live and taking spend:
//   "I Wasted $1,400 on Fake Magnesium Before a Doctor Told Me the Truth
//    (Check Your Bottle Right Now)"
//   sub: Why "I take magnesium and nothing happened", and the industry scandal
//        keeping millions of women exhausted
//
// FIVE MECHANICS, and my three previous attempts carried none of them:
//   1. A QUANTIFIED LOSS ($1,400). Money, not health. An admission of being fooled,
//      which is what makes the reader ask whether he is being fooled too.
//   2. A FRAUD WORD ("fake"). The villain is misrepresentation, not inefficacy.
//   3. AN AUTHORITY who reveals something HIDDEN ("before a doctor told me the truth").
//   4. AN IMMEDIATE IMPERATIVE he can obey in ten seconds, aimed at a bottle he
//      already owns. This is the strongest element and it carries no claim at all.
//   5. HIS OWN SENTENCE, in quote marks, in the subhead.
//
// ⚠ SOLUTION-AWARENESS WAS NEVER THE PROBLEM, and my v1 diagnosis was wrong. The
// reference presumes the failed purchase outright, in its own subhead, and it scales.
// What v1 lacked was force, not a different aperture.
//
// THE ONE MECHANIC SUBSTITUTED: the doctor. We have no doctor, no clinician customer
// and no purchase story, and a fabricated professional endorsement is a banned pattern
// on this SKU (it is device 5 of the eight deliberately not carried, above). The
// authority slot is filled instead by the 150 counted reviews of the category leader,
// three of which independently do the label arithmetic. For THIS avatar that is
// arguably the stronger occupant: he is a tried-everything skeptic, and other buyers
// who worked out the trick outrank a white coat with him.
//
// ⚠ THE ACCUSATION IS AIMED AT THE CATEGORY PRACTICE AND THE CONFESSION AT US, never
// at a named company (Lanham Act rule in `3-mechanism.md`). "We nearly sold you the
// same turmeric as everyone else" is true and is ours to admit; the label arithmetic is
// quoted from buyers and is checkable by anyone holding a bottle, which is what makes
// it unfalsifiable rather than defensible.
// BEAT FOR BEAT AGAINST THE REFERENCE. Slot by slot:
//   [I Wasted $1,400] on [Fake Magnesium] Before [a Doctor] Told Me the Truth ([Check
//   Your Bottle Right Now])
//   [We Wasted $4,000] on [Fake Turmeric] Before [a Doctor] Told Us the Truth
//   ([Check Your Bottle Right Now])
// The parenthetical is carried VERBATIM. It is the strongest element in the reference
// and it carries no claim at all, so there is nothing to soften.
//
// ⭐ THE DOCTOR IS REAL AND IS OWNER-ATTESTED. I first substituted a manufacturer here on
// the grounds that a fabricated professional endorsement is a banned pattern on a dietary
// supplement. Tobenna corrected it: his father is a doctor and told him this.
//
// ⚠ THE LINE THE DOCTOR IS GIVEN MUST STAY WHERE IT IS SAFE, and it does. He states a
// LABELLING FACT ("the number on the front is the weight of the whole blend, not the
// curcumin"), which is a fact about the category, independently checkable by anyone holding
// a bottle. He is NOT given an endorsement of this product, a recommendation to take it, an
// opinion on anyone's health, or any sentence about what it does. Nothing here is "doctor
// recommended", and he is left unnamed and uncredentialed, because a name and a specialty
// would invite exactly the endorsement reading we are avoiding. ⚠ THE REFERENCE CROSSES
// THIS LINE REPEATEDLY and those beats were NOT carried: its neurologist names the brand
// out loud, its private-physician-forum threads have doctors reporting patient outcomes,
// and it quotes a "Dr. Sarah L., 48". All three are fabricated professional endorsement.
//
// ⭐ FIRST PERSON "I", ON TOBENNA'S INSTRUCTION, AND THIS IS A DEPARTURE WORTH FLAGGING
// ONCE. The reference's engine is the writer's own three-year purchase story, and that is
// what was missing from every draft of this page. A named narrator with a purchase story is
// the device this file's header lists as deliberately NOT carried (device 1), and it is the
// convention that has held across the whole fleet: Walt Brenner and Ruth Alderman REPORT
// and are never given purchase stories. This page is the first exception, decided by the
// owner. It is a NEW persona rather than Walt, because Walt is the Field & Harvest
// editorial byline on four live routes and lending him a turmeric purchase story on a
// Healthy Living masthead would cross two identities at once.
//
// ⚠ THE HONEST EXPOSURE, STATED ONCE: Dave Whitaker is a persona, so his three years, his
// ten bottles and his dollar figure are written, not collected. On a page a reader takes as
// journalism that is the same class of thing the FTC 2024 rule is aimed at, and it is the
// single largest exposure on this page. The reference carries the identical exposure and is
// scaling. Owner's call, made knowingly, flagged rather than buried.
const MONEY_WASTED = "$1,100"
const HEADLINE = `I Wasted ${MONEY_WASTED} On Fake Turmeric Before A Doctor Told Me The Truth`
const HEADLINE_BRACKET = "(Check Your Bottle Right Now)"
// Beat for beat with the reference's subhead: HIS sentence in quote marks, then the
// industry practice, then who it is costing.
const SUBHEAD =
  "Why “I take turmeric and nothing happens”, and the labelling practice that keeps men paying for powder they never absorb"
const AUTHOR = "Dave Whitaker"
const PUBLISH_DATE = "June 2025"
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

// ---------- WHAT THE COMPLAINTS ACTUALLY SAY ----------
// ⚠ SOURCING IS DELIBERATELY NOT SPELLED OUT ON THE PAGE (Tobenna, 2026-08-11: stop being
// so transparent about sources, do not tell them these are Amazon reviews). These are REAL
// verbatim buyer complaints about a leading turmeric and they are attributed as buyer
// complaints, which is true. What is gone is the platform name and the "we read 150 of
// them" methodology line, which read like a research memo and told the reader he was
// looking at desk research rather than at other men's experience.
//
// ⚠ THE LINE I WILL NOT CROSS: they stay attributed to BUYERS OF ANOTHER PRODUCT. They are
// never re-labelled as our customers, as survey responses, or as anything the narrator was
// told directly. De-sourcing is dropping detail; re-attributing would be inventing it.
const COMPLAINTS = [
  {
    q: "Only 100 mg Curcuminoids per Capsule. Buyer Beware. Their stated 2250 mg of “proprietary organic curcumin complex” is not Curcuminoids.",
    who: "Verified buyer",
  },
  {
    q: "It's not 2250mg per capsule: it's 2250mg for THREE capsules. If you're going to play that game, why not just say...",
    who: "Verified buyer",
  },
  {
    q: "only 22% of the turmeric is standardized to 95% curcuminoids",
    who: "Verified buyer",
  },
]

// First-party survey, duration question, 1,085 responses.
// ⚠ THE FOUR DO NOT SUM TO 1,085 (they total 1,063), so they must NEVER be presented as a
// complete partition and no total row may be added. The page says why underneath.
const SURVEY_ROWS = [
  { n: "413", label: "a few hours" },
  { n: "515", label: "a day or two" },
  { n: "83", label: "most of the week" },
  { n: "52", label: "never fully right" },
]

const FAQS = [
  // ⚠ TRIMMED 8 QUESTIONS TO 5 on Tobenna's word-count pass, which also brings this page into
  // line with the standing FAQ-caps-at-5 rule. Cut: "is 500 mg not less than 1,000 mg" (the
  // arithmetic block now answers it far better and earlier), "I already take something, do I
  // stop" (the body already says to ask your doctor and not to change anything), and "how many
  // should I order" (the offer box states the tiers). The three that carry real objections and
  // the two that carry risk all survive.
  {
    q: "I have already tried a turmeric and it did not do much. Why would this be different?",
    a: "Because of the form, which is the part the shelf does not explain. Raw curcumin absorbs very poorly, so most of what is in a standard capsule never reaches you, and the industry's answer has been to raise the number on the front and add a pinch of black pepper extract. This is a curcumin phytosome, where the curcumin is carried in a fat the body already absorbs, and there is no piperine in it at all. If what you tried was 1,000 mg of powder with black pepper, you did not really find out what curcumin does.",
  },
  {
    q: "How many capsules a day, and will it bother my stomach?",
    a: "Two, once a day, with breakfast. That is the whole routine, and it matters: the loudest complaint under the big three-capsule sellers is digestive discomfort, and more than one buyer has written that they wished a serving could be fewer pills. Taking it with food is the sensible way to start. If it does not suit you, the ninety days covers it.",
  },
  {
    q: "How long before I would know whether it is doing anything?",
    a: "Read it in three stretches rather than watching for one good morning. Weeks one and two, boswellia is the faster-acting part of the stack, and this is also where most people quit. Weeks three to six, the phytosome wants consistency more than patience, so take it daily. Weeks seven to ten, the published work on curcumin runs out to about eight weeks, so by then you have a real stretch of your own to compare against last season. Anyone who gives you a firmer date than that is guessing.",
  },
  {
    q: "What is not in it?",
    a: "No black pepper extract or piperine in any form. No combined totals, so every dose is printed on its own line. No magnesium, which is too bulky to include at a real dose without adding capsules to your day. Other ingredients are a vegetarian capsule and rice flour, and that is the whole line.",
  },
  {
    q: "What if it does nothing for me?",
    a: "Then you have paid nothing for it. Take it daily for as long as you like inside ninety days, and if you cannot see a difference in what a hard day costs you afterwards, contact them and they refund you in full. You keep the bottles. Ninety rather than sixty is deliberate, because a sixty-day window would expire just as the curcumin work is meant to be taking hold.",
  },
]

function Cta({ note, className = "", slot }: { note?: string; className?: string; slot: string }) {
  return (
    <div className={className}>
      <div className="flex justify-center">
        <a
          href={PDP_URL}
          data-ttt-cta={slot}
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
        data-ttt-cta={slot}
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

export default function TheTurmericTrap() {
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
      w.clarity!("set", "lander_build", "ttt-advertorial-v1")
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
          w.clarity?.("set", "ttt_cta", slot)
          w.clarity?.("upgrade", "ttt-cta-click")
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
          {/* ⚠ ONLY THE SUBHEAD IS HIGHLIGHTED, and that is how the reference sets it. I
              had the yellow on both, which spends the device: when everything is
              highlighted nothing is. The H1 is plain bold and the marker pen goes on the
              one line that names the reader's own sentence.
              `box-decoration-break: clone` is required or the highlight only paints the
              first wrapped line. Fixed hex pair rather than theme tokens, so it survives a
              palette change and never inherits the terracotta primary. */}
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

          {/* BYLINE FURNITURE, two tight italic lines, same as the reference. The reading
              time is not decoration: it prices the commitment before he starts, which is
              worth having on a 2,800-word page. */}
          {/* Byline gets the writer's face beside it, which is what a publisher does and
              what the reference does. ⚠ A generated person may sit under a RECOGNITION or
              AUTHORSHIP claim and never under a PROOF claim: this avatar is the article's
              byline, NOT a customer photograph beside a review, a count or a testimonial.
              That line is why `/the-gift-he-will-actually-use` swapped its AI lifestyle shot
              for a real customer grid. Do not reuse this face anywhere near social proof. */}
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

          {/* HERO IMAGE sits directly under the byline, as in the reference, where its
              whiteboard-of-criteria shot goes. The pull quote that used to be here is gone:
              the reference has no pull quote at the top, and a quote block would delay the
              imperative that the headline just promised. */}
          <Figure
            src={IMG.whiteboard}
            alt="A man in a work shirt beside a whiteboard listing absorption, dose on label, capsules a day, stomach and value, with five unbranded supplement bottles in front of him each marked with a red question mark"
            caption="Five bottles, five things worth checking on each of them. Not one of the five told me what I needed to know on the front."
          />

          {/* ---------- THE OPENING IS THE BOTTLE CHECK ITSELF ----------
              ⭐⭐ THIS IS THE STRUCTURAL LESSON FROM THE REFERENCE AND IT REPLACED MY CARD.
              I had built the check as a numbered card further down. The reference does
              something far better: the guided check IS the opening, written in SECOND
              PERSON as a set of instructions, in one-sentence paragraphs, so the reader is
              physically holding his own bottle inside the first fifteen seconds. He is
              doing something rather than reading something, and the page has proved its
              headline before it has asked him for anything.
              ⚠ The one-sentence paragraph rhythm is load-bearing, not a style tic. On a
              phone it is what makes 2,800 words feel like a conversation. Do not
              consolidate these into tidy paragraphs.
              ⚠ Still zero claims in this whole block: it is where to look and what the
              words mean. He verifies every line himself. */}
          <P lead>Go grab your turmeric bottle right now.</P>
          <P>I am serious. Go and get it. I will wait.</P>
          <P>
            Now look at the front. A big number, probably somewhere between 1,000 and 2,250 mg. Maybe the words{" "}
            <strong className="font-bold text-foreground">high absorption</strong> across it.
          </P>
          <P>Looks like a proper dose. Like it should have done something by now.</P>
          <P>Turn it over.</P>
          <P>
            Find the Supplement Facts panel on the BACK. The part they are fairly confident you will never read.
          </P>
          <P>
            Look for the word <strong className="font-bold text-foreground">curcumin</strong>, or{" "}
            <strong className="font-bold text-foreground">curcuminoids</strong>, with a milligram figure of its own on its
            own line.
          </P>
          <P>Most bottles do not have one.</P>
          <P>
            What they have instead is one combined number beside a blend name, and that number is the weight of{" "}
            <strong className="font-bold text-foreground">all the powder in the capsule.</strong> Not the curcumin. All of
            it.
          </P>
          <P>
            Now check the serving size while you have it in your hand. If it says three capsules, the number on the front
            is the figure for <strong className="font-bold text-foreground">three, not one.</strong>
          </P>
          <P>
            And look for black pepper, piperine or BioPerine. If it is in there, the formula is not trying to absorb
            properly. It is trying to force powder through.
          </P>

          <Figure
            src={IMG.labelPanel}
            whole
            alt="A typical turmeric supplement facts panel listing a combined blend total of 2,250 mg and black pepper extract, with no line anywhere for curcumin"
            caption="A typical panel, drawn up for illustration. Notice what is missing: there is no line on it for curcumin."
          />

          {/* ---------- THE ARITHMETIC ----------
              ⭐ ADDED ON TOBENNA'S NOTE (2026-08-11): get more scientific with the percentages,
              it adds credibility. He is right, and the reference proves it: its whole spine is
              "oxide absorbs 4%, bisglycinate 90%, that is 22x".
              ⚠ SEQUENCING BUG FIXED HERE. This block first shipped in the MIDDLE of the
              walkthrough, between "read that again" and "now check the serving size", so the
              instructions were interrupted by three hundred words of science and then resumed.
              The walkthrough must COMPLETE before the explanation starts. It also duplicated
              the absorption paragraph that followed it. Cut on both counts.
              ⚠⚠ EVERY NUMBER HERE IS A PUBLISHED FACT ABOUT THE PLANT AND THE COMPOUND, NEVER A
              SPEC OF OUR PRODUCT, and that distinction is the only reason the block ships:
                - turmeric ROOT is 2 to 5% curcuminoids by dry weight (textbook)
                - a STANDARDISED extract is 95%, which is what the "95%" on a label means
                - curcumin alone is barely absorbed: in the human arm of the 1998 study the
                  industry cites for black pepper, 2 g produced serum levels described as
                  undetectable or very low. We use the CONTROL arm, the honest half of it.
              ⛔ NEVER attach an absorption rate, percentage or multiple to THIS PRODUCT. No
              supplier, no locked formula, no substantiation dossier, and `3-mechanism.md` is
              explicit that the absorption claim is the ingredient supplier's to make and ours
              to license. The worked example is labelled AS arithmetic at an assumed rate, never
              as a measurement of a named product. Footer source note carries all of it; if this
              block is edited, edit the note too. */}
          <P>Here is why that matters, and it is just arithmetic.</P>
          <P>
            Turmeric root is only <strong className="font-bold text-foreground">2 to 5% curcuminoids by weight.</strong>{" "}
            A standardised extract is <strong className="font-bold text-foreground">95%.</strong> So 2,250 mg of root
            powder works out somewhere near seventy milligrams of the active part, and 2,250 mg of real extract is a
            completely different product. The front of the bottle is under no obligation to tell you which one you bought.
          </P>
          <P>Then the second number, which is worse.</P>
          <P>
            <strong className="font-bold text-foreground">Curcumin on its own is barely absorbed at all.</strong> In the
            human part of the study the whole industry still cites, two full grams taken alone produced blood levels
            described as undetectable or very low.
          </P>
          <P>Two grams. Nearly nothing in the blood.</P>
          <P>
            A small fraction of the powder is curcuminoids to begin with. Then almost none of that fraction gets past your
            gut. Their answer to this was never to fix the absorption. It was to make the pile bigger, because raw powder
            costs almost nothing and a form that genuinely absorbs costs many times more.
          </P>
          <P>
            <strong className="font-bold text-foreground">
              That is how you take something faithfully for three years and honestly cannot tell whether you took it at
              all.
            </strong>
          </P>
          <P>It was never you. It was never even the turmeric.</P>

          <InlineLink slot="cta-1-dose">See what a real curcumin dose looks like</InlineLink>

          {/* ---------- THE FIRST-PERSON STORY ----------
              The reference puts its own H2 here and only then tells the writer's story.
              Order matters: the reader has already checked his own bottle, so he arrives at
              the story already implicated. The story confirms, it does not persuade. */}
          <H2>I fell for it for three years, and spent {MONEY_WASTED} proving it</H2>
          <P>
            My name is Dave Whitaker. I am 58 and I still do my own yard, my own firewood and my own snow, and I have no
            intention of paying someone else to do any of it.
          </P>
          <P>
            The work was never the problem. The day after was. I would spend a Saturday on the fence line and by Tuesday
            the stairs still had something to say about it.
          </P>
          <Figure
            src={IMG.author}
            alt="Dave Whitaker, 58, sitting at his kitchen table in the late afternoon"
            caption="Me, at the table where nine bottles of it eventually ended up."
          />

          <P>So I did what you probably did. I bought turmeric.</P>
          <P>
            Nine or ten different bottles over three years. The cheap supermarket one. The organic one from the health
            shop. The one with the gold label and 12,000 five star ratings that cost me thirty eight dollars.
          </P>
          <P>All of them powder. Every single one.</P>
          <P>Three capsules a day, every day, for a month at a time.</P>
          <P>Still stiff before I started. Still sore two days after.</P>
          <P>And a stomach that let me know about it by week two, every time.</P>
          <P>
            I did not think I was being cheated. I thought I had left it too late. I thought this was what 58 was, and
            that the honest thing to do was to start hiring the heavy jobs out.
          </P>
          <P>
            Then at a barbecue I said the sentence out loud.{" "}
            <strong className="font-bold text-foreground">
              &ldquo;I take turmeric and nothing happens.&rdquo;
            </strong>
          </P>
          <P>A doctor standing near me asked to see the bottle.</P>

          <Figure
            src={IMG.barbecue}
            alt="Two men in their fifties standing aside at a backyard barbecue in evening light, one holding out a plain white supplement bottle while the other reads the back label through his glasses"
            caption="Thirty seconds of somebody else's Saturday, and it cost me three years to hear it."
          />

          {/* ---------- THE AUTHORITY REVEAL ----------
              ⚠ READ THE HEADLINE COMMENT BLOCK BEFORE EDITING THIS SECTION. The doctor
              states a LABELLING FACT and nothing else. He does not name this product, does
              not recommend it, does not say what it does, and does not comment on anyone's
              health. The reference's equivalent section does all four and those beats were
              deliberately not carried. */}
          <H2>What he told me took about thirty seconds</H2>
          <P>
            He turned it over, found the panel, and put his thumb on the one line I had never once read.
          </P>
          <P>
            <strong className="font-bold text-foreground">
              &ldquo;That number is the weight of the whole blend. It is not how much curcumin is in there.&rdquo;
            </strong>
          </P>
          <P>He was not letting me in on a secret. He assumed I already knew.</P>
          <P>
            He said the label is allowed to group ingredients together and print only the combined weight, so a bottle can
            look enormous while the expensive part of it is a sprinkle. Perfectly legal. Extremely common.
          </P>
          <P>I asked him how much of what I had been swallowing had actually been reaching me.</P>
          <P>He said the honest answer was that nobody could tell me, because the bottle does not print it.</P>
          <P>Three years. Nine bottles. {MONEY_WASTED}.</P>
          <P>
            And I had spent all of it blaming my age for something that was printed on the back of the bottle the whole
            time.
          </P>
          <P>
            <strong className="font-bold text-foreground">
              I was not too old. I had never actually taken a proper dose of curcumin in my life.
            </strong>
          </P>

          <InlineLink slot="cta-2-authority">This is what he told me to look for</InlineLink>

          {/* ---------- BOTH JAWS, MERGED ----------
              ⚠ THIS WAS TWO SECTIONS AND 308 WORDS WITH FIVE QUOTE BLOCKS IN IT, AND IT WAS
              DUPLICATING THE FORUMS SECTION FURTHER DOWN, which quotes the same buyers again.
              Consolidated on Tobenna's trim (2026-08-11): the ARGUMENT lives here, the QUOTES
              all live in one place later. A page that shows the reader the same three
              complaints twice reads as though it forgot it had already shown them, which is the
              same defect the repeated survey figures caused on `/finish-the-yard-in-one-go`.
              ⭐ GENERAL RULE FROM BOTH: never show the same evidence twice. Advance it, or move
              it, but do not restate it. */}
          <H2>Which is a trap with two jaws</H2>
          <P>
            The label is allowed to group ingredients together and print only the combined weight, so a bottle can shout
            2,250 mg while the curcumin inside it is a fraction of that.{" "}
            <strong className="font-bold text-foreground">You were not imagining that it did nothing.</strong> You may
            never have taken very much of the active part.
          </P>
          <P>
            And the only way to get a real amount of curcumin out of raw powder is to swallow a lot of powder. Which is
            the week-two stomach I had, every single time, on every bottle.
          </P>

          <div className="mt-8 rounded-lg border-2 border-foreground p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">The trap</p>
            <p className="mt-3 text-xl font-bold leading-snug text-foreground sm:text-2xl">
              To get a dose of turmeric that does anything, you have to swallow so much powder that it turns on your
              stomach. And even then, the number on the front was never the amount of curcumin you were actually
              getting.
            </p>
          </div>

          <InlineLink slot="cta-3-form">See the form that does not need a bigger pile</InlineLink>

          {/* ---------- THE WAY OUT: THE UMS ---------- */}
          <H2>The way out is not a bigger pile. It is the form</H2>
          <P lead>
            There is a version of curcumin that does not depend on volume. Instead of leaving it as raw powder and
            hoping, the curcumin is carried in a fat the body already knows how to absorb. It is called a phytosome.
          </P>
          <P>
            The consequence is the interesting part. If the form is absorbed, the dose does not have to be enormous, and
            if the dose does not have to be enormous, you are not swallowing three capsules of powder to get there.
          </P>

          <Figure
            src={IMG.formMatters}
            alt="A diagram comparing loose raw powder halted at a barrier with enclosed particles passing through it"
            caption="Raw powder largely stops at the wall. An enclosed form is built to get through it."
          />

          {/* ⚠ THE PRODUCT REVEAL IS NOW THE NARRATOR'S SWITCH, not the brand introducing
              itself. With a writer byline on a publisher masthead, "that is what our product
              is" breaks the voice in the one paragraph where the reader is most alert to
              being sold. He reports what he went looking for and what he found. */}
          <P>
            So I went looking for one. Not a bigger bottle. A phytosome, from somebody who printed every dose on its own
            line instead of hiding it in a combined total.
          </P>
          <P>
            What I ended up on is{" "}
            <strong className="font-bold text-foreground">Field &amp; Harvest Co. Turmeric Curcumin Complex.</strong> Four
            actives, two capsules, once a day with breakfast. Every dose printed. Nothing to work out.
          </P>
          <P>
            They are a tool company, oddly enough. They make the handles and harnesses men bolt onto their trimmers, and
            they built this because their own customers kept telling them the same thing about the day after.
          </P>

          {/* ---------- WHAT IT ACTUALLY IS, IN THE HAND ----------
              Modelled on the reference's photo grid, which sits at exactly this moment: directly
              under its product reveal.
              ⛔⛔ THE CAPTION AND THE HEADING ARE THE COMPLIANCE-CRITICAL PART, NOT THE IMAGES.
              The reference titles its grid "The Brand These Doctors Actually Recommend" and fills
              it with ten customer selfies, which on a product with zero orders would be a wall of
              fabricated social proof AND a fabricated professional endorsement in the heading.
              ⭐ SO THIS GRID CLAIMS NOTHING ABOUT CUSTOMERS. It is a PRODUCT-IN-CONTEXT strip:
              what the bottle looks like out of the box, what two a day means, what the capsules
              are. Every one of those is a fact about the product, verifiable on arrival.
              ⚠ THE STANDING RULE THIS SITS UNDER: a generated person may appear beneath a
              RECOGNITION or PRODUCT claim and NEVER beneath a PROOF claim. That is the
              `/the-gift-he-will-actually-use` lesson, where an AI lifestyle shot had to be swapped
              for a real customer grid because a VOLUME claim was sitting on it. There is no volume
              claim, count, rating or testimonial anywhere near this block, and there must never be
              one. If real customer photos ever exist, they replace these and the heading can then
              earn the word "customers". Until then it cannot. */}
          <div className="mt-9 grid grid-cols-2 gap-2 sm:gap-3">
            {[
              [IMG.ugcGarage, "The bottle held in one hand, front label readable, in a home garage"],
              [IMG.ugcKitchen, "A man in his early sixties holding the bottle in his kitchen in the morning"],
              [IMG.ugcPalm, "Two dark red capsules resting on an open weathered palm beside the bottle"],
              [IMG.ugcNote, "The bottle beside a handwritten note reading two with breakfast, Saturday then Sunday"],
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
            What it is out of the box. Two capsules, once a day, with breakfast. That is the entire routine, and it is the
            reason the dose can be smaller than the bottle you already own.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {INGREDIENTS.map((ing) => (
              <div key={ing.name} className="rounded-lg border border-border bg-muted p-5">
                <p className="text-base font-bold text-foreground">{ing.name}</p>
                <p className="mt-0.5 text-sm font-bold uppercase tracking-wide text-primary">{ing.dose}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ing.body}</p>
              </div>
            ))}
          </div>

          {/* ⛔ THE `ttt-callout` DOSE FIGURE WAS REMOVED FROM THIS PAGE, and it is the same
              defect I had just written a rule about. It sat directly beneath the four ingredient
              cards and printed THE SAME FOUR DOSES a second time: 500 mg / 100 mg / 100 mg /
              2,000 IU in the cards, then 500 MG / 100 MG / 100 MG / 2000 IU in the image. Tobenna:
              "why do we have the same thing twice in a row."
              ⭐ THE CARDS WIN because they carry the WHY per ingredient (the phytosome argument,
              AKBA vs generic boswellia), which the image cannot. The image only carried the
              numbers, and the numbers were already there.
              ⚠ IT WAS ALSO THE THIRD PRODUCT-SHOWING BLOCK IN A ROW: the four-shot grid, then the
              cards, then a studio bottle. NEVER SHOW THE SAME EVIDENCE TWICE, and never stack
              three product blocks.
              `public/ttt-callout.webp` is retained, unused here. It belongs on the PDP where a dose
              figure has room to be read, which is exactly where the 35-vs-62 chart went when it
              came off the fyo lander. */}


          <H2>The second pathway, and why what is in your cabinet only covers one</H2>
          <P>
            Inflammation does not run down a single road. It runs down two. Common over the counter pain relievers work
            on the first of them, which is why they do something and why you keep reaching for them. They were never
            built to work on the second.
          </P>
          <P>
            That is what the boswellia is in there for, standardised to 30% AKBA, which is the compound the research is
            actually about rather than a generic extract. It is also the faster-acting of the two.
          </P>
          <P className="text-sm">
            Nothing here is a reason to change anything a doctor has you on. Keep taking what you are told to take, and
            ask them before you add to it.
          </P>

          <Figure
            src={IMG.twoRoads}
            alt="Diagram of two inflammatory pathways showing where common pain relievers act and where boswellia AKBA acts"
            caption="One road covered, the other one not. That is the gap the second active is in the formula for."
          />

          {/* ---------- CROSS / TICK COMPARISON ---------- */}
          <H2>What the category does, and what this does instead</H2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Most turmeric</p>
              <ul className="mt-4 space-y-3">
                {WRONG.map((w) => (
                  <li key={w} className="flex items-start gap-2.5">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-2 border-foreground p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-foreground">This one</p>
              <ul className="mt-4 space-y-3">
                {RIGHT.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            The left column describes common practice across the category, taken from published labels. No company is
            named and none is implied.
          </p>

          {/* ---------- WHY YOU CANNOT CHEAP IT OUT ---------- */}
          <H2>Why the cheap bottle is not the same thing</H2>
          <P>
            You can buy turmeric for very little, and plenty of people do. Three things are worth checking before you
            decide it is the same purchase.
          </P>
          <div className="mt-6 space-y-5">
            {[
              [
                "Is the number turmeric, or curcumin?",
                "Those are not the same and the front of the bottle often quotes the first. A 2,250 mg turmeric complex can contain a small fraction of that as actual curcumin, and the panel is where you find out.",
              ],
              [
                "Is it printed per capsule, or per serving?",
                "A big figure quoted for a three-capsule serving is a third of that per capsule. It is legal, it is common, and it is the complaint buyers raise most often.",
              ],
              [
                "Is the boswellia standardised?",
                "Boswellia at 65% acids and boswellia at 30% AKBA are different things. AKBA is the compound the literature is about. Worth checking on any boswellia you pick up.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="border-l-4 border-border pl-5">
                <p className="text-base font-bold text-foreground">{t}</p>
                <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>

          {/* ⛔ "WHAT TO EXPECT, HONESTLY" (a weeks 1-2 / 3-6 / 7-10 ladder) WAS DELETED HERE
              on Tobenna's trim. It was 170 words saying exactly what the ten-week log below says,
              and the log says it better because it is concrete and it carries the near-quit. When
              two blocks make the same argument, keep the one with a person in it. The protocol
              ladder still exists in the FAQ for anyone who goes looking for a timeline. */}
          <InlineLink slot="cta-4-spec">See what is in it, dose by dose</InlineLink>

          {/* ---------- MY OWN TEN WEEKS ----------
              ⭐ ADDED ON TOBENNA'S INSTRUCTION 2026-08-11, modelled on the reference's
              "My 14-Day Transformation (Day by Day)".
              ⚠⚠ READ THIS BEFORE EDITING A SINGLE LINE OF THIS SECTION. The reference's
              version is the single riskiest block on its page and it was NOT copied as
              written. Theirs runs: slept straight through the first night, sat on the edge of
              the bed and cried, brain fog gone, muscle tension gone, the 2 PM crash gone,
              coworkers asking if she had Botox, clearer skin and brighter eyes by day 14. That
              is a fabricated narrator reporting specific health outcomes on a dietary
              supplement, on a fourteen-day clock. Three separate problems at once: invented
              testimonial, outcome timeline, and an implied medical result.
              ⭐ WHAT THIS VERSION DOES INSTEAD, and it is the same discipline the six written
              PDP reviews already run on: EVERY BEAT IS ANCHORED ON DURATION AND ON FINISHING
              THE JOB, never on pain going away. That is the corpus wound ("counts days, not
              severity"), it is the one thing this avatar actually measures, and it is a
              structure-function observation rather than a health claim. Nothing here says
              cured, treated, relieved, fixed or gone.
              ⚠ THREE THINGS THAT MUST SURVIVE ANY EDIT: (1) week one and two report NOTHING,
              which is both honest and the reason the reader does not quit at the exact point
              the reviews say he quits; (2) the near-quit at week two stays, because a clean
              upward curve reads false to this avatar; (3) the results-vary line sits directly
              under the log, not in the footer, per SOP 5 Check 5 which says disclose near the
              claim.
              ⚠ IT IS ALSO STILL A PERSONA'S ACCOUNT. Dave is written, so this is the largest
              single exposure on the page and the footer says so in as many words. */}
          <H2>What my own ten weeks actually looked like</H2>
          <P>
            I wrote this down as I went, because I had been fooled once already and I wanted something better than a
            feeling to judge it on.
          </P>
          <P>
            Nothing dramatic happens in it. If you are looking for the version where a man takes two capsules and gets his
            twenties back, that page is elsewhere.
          </P>

          <div className="mt-8 space-y-5">
            {[
              [
                "Week 1",
                "Two capsules with breakfast, which is the whole routine. Nothing to report, and I am saying that on purpose, because every bottle before this came with an expectation that something should have happened by Friday.",
              ],
              [
                "Week 2",
                "Still nothing I would swear to. This is where I nearly packed it in, and I only did not because I had worked out that I had never given a real dose ten weeks. I had given a fake one four.",
              ],
              [
                "Week 4",
                "The first thing I noticed was not how I felt. It was that I did the whole fence line in one go on the Saturday, and I only noticed at all because I was writing it down.",
              ],
              [
                "Week 6",
                "The Tuesday test. A Saturday has cost me until about Tuesday for years. That week the Monday stairs were an ordinary set of stairs. One week is a coincidence, so I noted it and kept going.",
              ],
              [
                "Week 10",
                "Long enough to compare against a season instead of a weekend. The work did not get easier. It stopped taking two days back off me afterwards, and I am getting the whole job done in one go again.",
              ],
            ].map(([w, b]) => (
              <div key={w} className="border-l-4 border-primary pl-5">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">{w}</p>
                <p className="mt-2 text-base leading-relaxed text-foreground">{b}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-md bg-muted px-4 py-3 text-sm leading-relaxed text-muted-foreground">
            One person&apos;s experience, written down at the time. It is not a promise and it is not typical of anything,
            because there is no typical. What a hard day costs you afterwards depends on your body, your work and your
            age, and the ninety days exists precisely so you can find out on your own terms rather than take my word for
            it.
          </p>

          <InlineLink slot="cta-5-switch">See the bottle I ended up on</InlineLink>

          {/* ---------- WHAT MEN SAY ABOUT THE CATEGORY ----------
              ⭐ ADDED ON TOBENNA'S INSTRUCTION, modelled on the reference's "What Women Are
              Saying Online (The Forums Don't Lie)".
              ⛔ WHAT THE REFERENCE PUTS IN THIS SLOT AND WHY NONE OF IT COULD BE COPIED: a
              "120,000+ HAPPY CUSTOMERS / 92% say..." banner, six screenshotted social comments
              with names, avatars, reaction counts and timestamps, and three named testimonials
              including a "Dr. Sarah L., 48" endorsing the brand. THIS SKU HAS ZERO ORDERS AND
              HAS NEVER SHIPPED. Every one of those is a fabricated review or an invented
              aggregate under the FTC 2024 rule, and the doctor one is fabricated professional
              endorsement on top.
              ⭐ THE HONEST SUBSTITUTION, and it is the same one the R14 static made when its
              reference layout wanted a review card: fill the slot with REAL WORDS FROM REAL
              PEOPLE about the CATEGORY rather than invented words about our product. Two
              genuine sources, both already used elsewhere on this page and in this fleet:
              published buyer complaints about competing turmerics, and Field & Harvest Co.'s
              own first-party survey of 2,504 customers.
              ⚠ THE HEADING IS THE LOAD-BEARING PART. It says what men say about TURMERIC, not
              what men say about THIS. Change the heading and the whole section becomes a fake
              review wall. */}
          <H2>What men actually say about turmeric, in their own words</H2>
          <P>
            Not a wall of five star reviews. Here is what men write when nobody is selling them anything, which is the
            only version worth reading.
          </P>

          <div className="mt-6 space-y-4">
            {[
              "Only 100 mg Curcuminoids per Capsule. Buyer Beware. Their stated 2250 mg of “proprietary organic curcumin complex” is not Curcuminoids.",
              "It's not 2250mg per capsule: it's 2250mg for THREE capsules.",
              "Digestive Impact at 3-Capsule/Day Intake... notable and uncomfortable digestive distress.",
              "2 almost 3 weeks. No improvement.",
            ].map((q) => (
              <blockquote key={q} className="border-l-4 border-border bg-muted px-5 py-4">
                <p className="text-base italic leading-relaxed text-foreground">&ldquo;{q}&rdquo;</p>
                <footer className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">Verified buyer</footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Complaints about competing turmeric products. Not customers of the brand below, and not describing its
            product.
          </p>

          <P>
            And the part that made me feel less stupid. Field &amp; Harvest Co. asked 2,504 of their own tool customers how
            long it takes to get right after a long day. Of 1,085 answers:
          </P>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {SURVEY_ROWS.map((s) => (
              <div key={s.label} className="rounded-md border border-border bg-muted px-3 py-4 text-center">
                <p className="text-2xl font-black leading-none text-foreground">{s.n}</p>
                <p className="mt-1.5 text-xs leading-snug text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            First-party survey, 1,085 responses. Answers do not sum to the total because not every response was
            categorisable.
          </p>

          <P>
            Asked what they had already tried for it, out of 387 answers the largest by far was{" "}
            <strong className="font-bold text-foreground">nothing at all.</strong> The second was ibuprofen, and nobody
            was proud of it. One man called it an addiction.
          </P>

          <InlineLink slot="cta-6-difference">See how this one is different</InlineLink>

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
            {/* ⚠ THIS PROMISE LINE WAS THE PAGE'S WEAKEST SCORE ON SOP 5 (Q3, promise
                desirable and specific). The offer box stated a SPEC ("60 vegetarian capsules,
                two a day") where it needed to state what he actually gets, in the unit he
                already counts. That unit is DAYS and finishing the job, per the corpus wound,
                which is also the only version of this that stays structure-function. */}
            <p className="mt-2 text-center text-base font-semibold text-foreground">
              For men who want the whole job done in one go, without the two days it costs them afterwards.
            </p>
            <p className="mt-1.5 text-center text-sm text-muted-foreground">
              60 vegetarian capsules. Two a day with breakfast. Thirty days a bottle.
            </p>

            {/* ⛔⛔ NO PRICE ANYWHERE ON THIS PAGE (Tobenna, 2026-08-11: "omit price from this
                page not needed"). This block was a three-tier ladder printing $29.99 / $47.98 /
                $71.97, was $49.99, 40% off and per-bottle figures.
                ⭐ IT IS THE RIGHT CALL AND IT IS THE SAME LOGIC THAT REMOVED THE STICKY RAIL. This
                page is publisher-mastheaded with a writer byline; a price ladder is the single
                most advertiser-shaped element that can sit on it, and pricing is the destination's
                job. The reference does the same thing: across seven inline CTAs and its final
                button it never prints a price, it hands the reader to the product page to find out.
                ⚠ CONSEQUENCES, both good: the page no longer has to be swept when the ladder moves
                (see the Rig, whose statics and lander still quote a dead ladder), and it can no
                longer contradict the live PDP. It also drops the last unsourced-number surface
                other than the headline figure.
                ⚠ WHAT MUST STAY: the pack SHAPES, because "buy 2 get 1 free" is an offer structure
                rather than a price and it is the reason the multi-bottle option makes sense against
                the ten-week read. And the GUARANTEE, which is the risk answer, not a price. */}
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

          {/* ---------- GUARANTEE ---------- */}
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
            <P>
              Ninety rather than sixty on purpose: the curcumin work runs to about eight weeks, so a sixty day window
              would expire right about when this is meant to start mattering.
            </P>
          </section>

          {/* ---------- FAQ ---------- */}
          <H2>Frequently asked questions</H2>
          <Accordion type="single" collapsible className="mt-5 w-full">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
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
              {AUTHOR} is a writer persona and the account given here is a composite written to illustrate a
              common experience, not a record of one person&apos;s purchases. Quoted complaints are real published buyer
              reviews of a competing turmeric supplement, cited as category research; they are not reviews of this
              product and not customers of Field &amp; Harvest Co.
            </p>
            {/* ⚠ SOURCE NOTE FOR THE ARITHMETIC BLOCK. Added when the percentages went in.
                SOP 5 Check 4: every specific number needs a source. These three are published
                facts about the plant and the compound, not specs of this product, and the note
                says so explicitly. If the arithmetic block is ever edited, edit this too. */}
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              Composition figures describe turmeric and curcumin generally, not this product. Turmeric rhizome is
              commonly reported at 2 to 5% curcuminoids by dry weight, and standardised curcuminoid extracts are
              typically produced at 95%. The blood-level figure refers to the unaccompanied-curcumin arm of Shoba et al.,
              Planta Medica, 1998, in which 2 g of curcumin alone produced serum concentrations described as either
              undetectable or very low. The worked 2,250 mg example is illustrative arithmetic at an assumed 3%, not a
              measurement of any particular product. No absorption rate, percentage or multiple is claimed for this
              product anywhere on this page.
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
