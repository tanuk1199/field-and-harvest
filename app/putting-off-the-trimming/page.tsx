"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect } from "react"
import { Check, Star } from "lucide-react"

// ============================================================
// /putting-off-the-trimming .. Yeoman Handle
// DREAD / AVOIDANCE ANGLE. Cold editorial, Walt Brenner template
// (same shape as /back-hurts-when-trimming).
//
// WHO THIS IS FOR, and why the reasons are shaped this way.
//
// This man is PROBLEM-AWARE and usually already CAUSE-AWARE. The Voice Bank
// is unambiguous about it: almost every dread quote names the cause in the
// same breath as the dread ("I absolutely hate weed eating BECAUSE OF having
// to bend over" / "This looks like it would solve THE REASON I do").
//
// So the page's job is NOT to teach him why it hurts. It is to break the
// belief that his only two options are suffer or quit:
//   "Have a bad back, thought I'd have to quit weedeating."
//   "I have to weedeat in increments because it hurts my back."
//   "My yard is suffering"
//
// The reframe the whole page turns on comes from one buyer who still mows:
// he has not lost interest in his property, he avoids ONE task on it. That
// is task-specific avoidance, and he has almost certainly never noticed the
// pattern about himself. Reason 1 is that reframe and everything follows it.
//
// Withholding rules inherited from the template:
//   - the H1 never names the handle. Reason 5 is the reveal.
//   - the trust strip says WHAT it is, never HOW it works.
//   - no offer and no button above the product section.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"

// Page tag carried to the store on every outbound click so an order that
// started here is separable in Shopify. Distinct from `bhwt` (age angle) and
// from `lt`/`t2`, which mean test arm on /the-trimmer-switch.
const LANDER_TAG = "poff"
const CTA_LABEL = "CHECK AVAILABILITY >>"
const OFFER_TEXT = "Save Up To 43% + 2 Free Yardwork Guides"
const SOCIAL_PROOF = "4.8 stars • 800 reviews • 40,000+ trimmers upgraded"

// Split so the bracket can be A/B'd on its own. Alternates:
//   B behaviour named ... "(And Why It Is Not The Job You Think You Are Avoiding)"
//   C quit belief ....... "(And Why You Do Not Have To Give It Up)"
//   D yard consequence .. "(And Why The Edges Got Away From You)"
const HEADLINE_MAIN = "5 Reasons You Keep Putting Off The Trimming"
const HEADLINE_BRACKET = "(And Why Your Back Was Never The Problem)"

// This route ships its own palette so it reads as an article, not a store.
// Scoped to the wrapper, host tokens untouched.
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
  handOnBack: "/bhwt-hand-on-back.webp",
  // Carries baked-in text "you blamed the years instead of the angle". That is
  // age copy on a dread page. It is the only leverage visual we have and the
  // headline half of it is exactly reason 2, so it stays for now. SWAP
  // CANDIDATE: same diagram without the age line.
  bendLoads: "/bhwt-bends-loads.webp",
  brandRack: "/bhwt-brand-rack.webp",
  flatlay: "/bhwt-flatlay.webp",
  // &width= is honoured on Shopify stills. It does nothing on animated GIFs,
  // which is why the demo is left bare and sits at the very bottom.
  manHoldingTrimmer:
    "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/manholdingtrimmer.png?v=1778560333&width=900",
  swapDemo: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/0512_4.gif?v=1778560127",
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

type Reason = {
  number: string
  heading: string
  // Reason 4 has no photograph. Its visual is the Voice Bank pull quote, which
  // is better than a stock image and is the actual evidence for the claim.
  image?: string
  alt?: string
  pullQuote?: { text: string; attribution: string }
  body: React.ReactNode
}

const REASONS: Reason[] = [
  {
    number: "1",
    heading: "You have not lost interest in your yard. You avoid one job on it",
    image: IMAGES.handOnBack,
    alt: "A man standing up out of a bent position in his yard, one hand pressed into his lower back, trimmer still running at his side",
    body: (
      <>
        <p>
          Start with the thing that does not fit the story you have been telling yourself.{" "}
          <strong className="font-bold text-foreground">You still mow.</strong>
        </p>
        <p>
          A man who has lost interest in his property does not mow it. A man who is too worn down to work outside does
          not get three other jobs done first and stall on the fourth. But that is the pattern, and buyers describe it
          without ever noticing what they are describing:
        </p>
        <p>
          <em>&ldquo;I still mow in my zero turn or tractor.&rdquo;</em> <em>&ldquo;I mowed.&rdquo;</em> One wife
          explains what she was actually shopping for:{" "}
          <em>
            &ldquo;I was trying to make it easier to do so my boyfriend would be more willing to do the trimming, not
            just mowing.&rdquo;
          </em>
        </p>
        <p>
          Not the yard. <strong className="font-bold text-foreground">The trimming.</strong> Every time.
        </p>
        <p>
          So this is not a motivation problem and it is not a character problem. It is one specific twenty-minute task
          that you have quietly stopped volunteering for, and you have been doing it long enough that it stopped feeling
          like a decision. There is a reason it is that one job and not any of the others.
        </p>
      </>
    ),
  },
  {
    number: "2",
    heading: "It is not stamina. It is one position you have to hold",
    image: IMAGES.bendLoads,
    alt: "A chiropractor pointing to the loaded lower back of a hinged-forward skeleton. Caption reads: the bend loads your lower back. It is a leverage problem, not a strength problem.",
    body: (
      <>
        <p>
          Mowing, you walk upright behind the machine. Trimming, you fold forward at the waist to keep the head flat on
          the grass, and then you stay folded for the whole pass.
        </p>
        <p>
          Hold your arms out in front of you and hinge forward at the hips. Your lower back is now carrying your entire
          upper body out on a long lever, and it does not get to put it down until you are finished. That is a leverage
          problem, not a fitness one, which is why getting fitter never fixed it.
        </p>
        <p>Look at how people cope with it. They do not work through it. They ration it:</p>
        <p>
          <em>&ldquo;I have to weedeat in increments because it hurts my back.&rdquo;</em>{" "}
          <em>&ldquo;I usually do half one day then half another.&rdquo;</em>{" "}
          <em>
            &ldquo;Realizing I had 3 days of weed eating coming up and didn&rsquo;t want to be down afterwards with sore
            muscles.&rdquo;
          </em>
        </p>
        <p>
          And rest stops working eventually. One wife watched it stop working on her husband:{" "}
          <em>&ldquo;after 20mn of using the weed eater he&rsquo;s done, not even taking breaks help him any longer.&rdquo;</em>{" "}
          <strong className="font-bold text-foreground">
            A break rests the muscle. It does not change the position you go back into.
          </strong>
        </p>
      </>
    ),
  },
  {
    number: "3",
    heading: "Every trimmer sold builds that position into the tool",
    image: IMAGES.brandRack,
    alt: "Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft",
    body: (
      <>
        <p>
          Go and look at the one in your shed. The loop handle is mounted low on the shaft, down toward the engine, well
          below where your free hand would naturally sit. To reach it you have to come down to it. That is the fold, and
          the tool asks for it every single time.
        </p>
        <p>
          It does not matter which badge is on it. STIHL, Echo, Ryobi, EGO, Husqvarna, BLACK+DECKER. Different engines,
          different prices, same low loop in the same place. One buyer remembers when that was not true:{" "}
          <em>
            &ldquo;Ever since they quit making extended shaft weed eaters. I&rsquo;ve suffered from intense back pain.&rdquo;
          </em>
        </p>
        <p>
          Which also means the upgrade you have been half considering does not help. A newer machine, a lighter machine,
          a battery instead of gas. All of them put your hand back in the same place.
        </p>
        <p>
          <strong className="font-bold text-foreground">You never chose that posture.</strong> It came with the tool, and
          another tool will come with it too.
        </p>
      </>
    ),
  },
  {
    number: "4",
    heading: "Everything you tried was aimed at your back. None of it touched the twenty minutes",
    pullQuote: {
      text: "From pills, creams, chiro, pt, injections, brace, hwave...it sucks.",
      attribution: "One buyer, listing his own drawer",
    },
    body: (
      <>
        <p>
          Nobody is going to tell you the back pain is in your head. It is real and you have taken it seriously. Look at
          what you have already been through: the chiropractor, the physical therapy, the exercises, the brace you bought
          and stopped wearing. Another buyer&rsquo;s list runs to three words:{" "}
          <em>&ldquo;Chiropractor, exercises, dr.&rdquo;</em>
        </p>
        <p>
          Every one of those treats the back after the fact. Not one of them changes what you spend twenty minutes doing
          on a Saturday. So the relief holds right up until the next time you trim, and then a week of progress goes in
          one afternoon.
        </p>
        <p>
          That is why you eventually stopped looking, and it was not laziness. You had worked through the whole aisle and
          nothing held.{" "}
          <strong className="font-bold text-foreground">
            None of it failed you. All of it was answering a question about your back, when the question was about your
            hands.
          </strong>
        </p>
      </>
    ),
  },
  {
    number: "5",
    heading: "The grip does not have to sit down there",
    image: IMAGES.manHoldingTrimmer,
    alt: "A man standing fully upright, back straight, hand out on the Yeoman grip while trimming a lawn edge",
    body: (
      <>
        <p>That is the whole thing. The handle is in the wrong place, and the handle can be moved.</p>
        <p>
          Extend the grip out to where your hand already falls and there is nothing left to bend down to. You stand up.
          The lever disappears. The twenty minutes stop costing you the back half of the week, and the job goes back to
          being twenty minutes instead of two sessions and a recovery day.
        </p>
        <p>
          Not a brace that holds you together afterwards. Not a lighter machine. Not a younger back.{" "}
          <strong className="font-bold text-foreground">
            One part, in a different place, on the trimmer already in your shed.
          </strong>{" "}
          The fixed angle that does it is the <strong className="font-bold text-foreground">Plumb-Set&trade;</strong>,
          and it goes on with the allen key in the box.
        </p>
        <p>
          One buyer had already written the job off before he found it:{" "}
          <em>&ldquo;Have a bad back, thought I&rsquo;d have to quit weedeating.&rdquo;</em> He did not have to quit. He
          had to move the handle.
        </p>
      </>
    ),
  },
]

const FEATURES = [
  "The Plumb-Set™ extends the grip out to your hand",
  "The Hold-Fast™ bracket grips and holds, every pass",
  "Three-minute install on the trimmer you already own",
  "60-day trial + lifetime warranty, switch with confidence",
]

// Every review here is VERBATIM from the Customer Voice Bank, and each one is
// chosen to close a specific reason above. Do not rewrite them and do not
// tidy the spelling. The typo in "nore" is worth more than any sentence.
const REVIEWS = [
  {
    closes: "Closes reason 2",
    title: "I usually do half one day then half another.",
    quote:
      "I was skeptical that anything could make weedeating easier. I was wrong. I was able to weedeat my entire yard including around my pond, (2 hrs of weedeating) and my back did not get tight or hurt. I usually do half one day then half another.",
    author: "Verified Buyer",
  },
  {
    closes: "Closes reason 1",
    title: "Don't dread doing the weed eating now.",
    quote: "I've had multiple back surgeries this part. such a backsaver. Don't dread doing the weed eating now.",
    author: "Verified Buyer",
  },
  {
    closes: "Closes reason 4",
    title: "I am foregoing the lumbar back brace all together.",
    quote:
      "This handle is well worth the money, it really took the strain off my lumbar area letting me stand straighter. I am foregoing the lumbar back brace all together.",
    author: "Verified Buyer",
  },
  {
    closes: "Closes reason 3",
    title: "Why did I wait to order this?",
    quote:
      "Why did I wait to order this? I have 3-4 hours of mowing and edging every week. Edging at 65 was a painful experience, being bent over for an hour. Not anymore!",
    author: "Verified Buyer, 65",
  },
]

const FAQS = [
  {
    question: "I have not touched the trimmer in weeks. Is one handle really going to change that?",
    answer:
      "It changes the one thing that made you stop. You are not avoiding the yard, you are avoiding the fold, and the fold is caused by where the grip sits. Move the grip out to your hand and the fold has nothing left to do. What you do with that is up to you, but the reason you have been putting it off stops being there. One buyer who used to split his yard across two days did the whole thing, two hours, in one go.",
  },
  {
    question: "I already take breaks. Is that not the same thing?",
    answer:
      "No, and this is the part most people get wrong. A break rests the muscle, then you stand back up and go straight into the identical position. Nothing about the load has changed, so the clock just restarts. That is why breaks work for a while and then stop working. One wife put it plainly about her husband: after twenty minutes he is done, and not even taking breaks helps him any longer. The handle changes the position itself, so there is nothing to recover from.",
  },
  {
    question: "Will it fit my trimmer?",
    answer:
      "Almost certainly. It fits 26mm and 28mm shafts, which covers the straight and curved-shaft trimmers sold by STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER, in both gas and battery. Measure the shaft once and check it against those two sizes. The factory handle stays exactly where it is, so nothing is removed.",
  },
  {
    question: "How hard is it to install?",
    answer:
      "Three minutes with the allen key that comes in the box. The Hold-Fast™ bracket clamps around the shaft and slides to wherever your hand naturally falls, then tightens down. No drilling, no cutting, no permanent change to the trimmer. If someone else in the house is a different height, loosen it and slide it, and one handle serves you both.",
  },
  {
    question: "What if I bolt it on and I still do not want to do it?",
    answer:
      "Then you keep your money. Fit it, work one Saturday the way you normally would, and if your back cannot tell the difference you get a full refund within 60 days, and you do not have to send it back. You are not committing to liking yard work again. You are testing whether the handle was the thing.",
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

export default function PuttingOffTheTrimming() {
  // Capture phase runs before the browser reads href for navigation, so the
  // param is on the URL by the time the click navigates. Wrapped so a failure
  // can never break the page.
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
      {/* Breadcrumb only. A brand mark up here tells a Learn More visitor he has
          landed on a store before he reads a word. */}
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

          {/* An article has an author, a store has a logo. Walt Brenner is the
              F&H editorial persona already used on /the-only-trimmer-handle
              and /back-hurts-when-trimming. */}
          <div className="mt-6 flex items-center gap-3">
            <img src={IMAGES.author} alt="Walt Brenner" className="h-12 w-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">By Walt Brenner</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Field &amp; Harvest Co. &middot; 2 August 2026
              </span>
            </div>
          </div>

          {/* Says WHAT it is and what the guarantee is. Never how it works:
              that is reason 5's job and it is the only reveal on the page. */}
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
              There is a job on your list that keeps sliding to next weekend. It moved from Saturday to Sunday, then to
              the weekend after, and now the edges have got away from you and you can see it from the kitchen window.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              One buyer described the habit exactly:{" "}
              <em>
                &ldquo;Usually put off weed eating until I have to because it is so inconvenient.&rdquo;
              </em>{" "}
              Another had already watched it show:{" "}
              <em>&ldquo;My yard is suffering.&rdquo;</em>
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              You have probably filed that under getting older, or being busy, or not being bothered any more. And the
              back pain that follows a session is real, so it is a reasonable thing to file it under.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              But look at the pattern again, because it does not fit any of those explanations.{" "}
              <strong className="font-bold text-foreground">Here are the five reasons why.</strong>
            </p>
          </div>

          {/* Image, numbered heading, prose. No eyebrow, no subhead, no divider
              rule: the images do the separating, which is what makes it scan as
              an article rather than a product listicle. Reason 4 runs a pull
              quote in the image slot instead. */}
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
                ) : null}
                {reason.pullQuote ? (
                  <figure className="border-l-4 border-primary bg-muted px-6 py-8 sm:px-8 sm:py-10">
                    <blockquote className="text-pretty text-xl font-bold italic leading-snug text-foreground sm:text-2xl">
                      &ldquo;{reason.pullQuote.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">
                      {reason.pullQuote.attribution}
                    </figcaption>
                  </figure>
                ) : null}
                <h2 className="mt-6 text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
                  {reason.number}. {reason.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {reason.body}
                </div>
              </section>
            ))}
          </div>

          {/* First CTA on the page, and the first time the offer is named.
              Everything above this point is argument. */}
          <section className="mt-14 border-t-4 border-foreground pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">The Fix, In Full</p>

            <h2 className="mt-4 text-pretty text-3xl font-bold leading-snug tracking-tight text-foreground sm:text-4xl">
              The Part That Makes It A Twenty Minute Job Again
            </h2>

            <img
              src={IMAGES.flatlay}
              alt="The Yeoman Handle laid on a concrete path beside worn leather gloves, secateurs and a pot of basil"
              loading="lazy"
              decoding="async"
              className="mt-6 aspect-square w-full rounded-sm bg-muted object-cover"
            />

            <p className="mt-7 text-lg leading-relaxed text-foreground sm:text-xl">
              It bolts onto the trimmer you already own and extends the grip out to your hand.{" "}
              <strong className="font-bold">Nothing about your body has to change.</strong>
            </p>

            <ul className="mt-7 flex flex-col gap-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-base leading-relaxed text-muted-foreground sm:text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-center text-base font-bold uppercase tracking-wide text-foreground">
              Today: {OFFER_TEXT}
            </p>

            <CtaButton
              className="mt-6"
              note="Click the button above to check current availability and whether today's discount is still running."
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>
          </section>

          {/* Each review closes one of the five reasons, labelled so the reader
              does not have to make the connection himself. */}
          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              They Had All Been Putting It Off Too
            </h2>
            <p className="mt-2 text-base text-muted-foreground">4.8 out of 5 from 800 reviews</p>

            <div className="mt-7 flex flex-col gap-5">
              {REVIEWS.map((review) => (
                <blockquote key={review.title} className="border-l-4 border-primary bg-muted p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{review.closes}</p>
                  <p className="mt-2 text-base font-bold text-foreground">&ldquo;{review.title}&rdquo;</p>
                  <p className="mt-2 text-base italic leading-relaxed text-muted-foreground">{review.quote}</p>
                  <footer className="mt-4 flex flex-wrap items-center gap-3">
                    <cite className="text-sm font-bold not-italic text-foreground">{review.author}</cite>
                    <Stars />
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Common Questions
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Everything worth knowing before the trimming slides another weekend.
            </p>

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

          {/* Guarantee is named after the outcome, not the term. */}
          <section className="mt-12">
            <div className="border-4 border-foreground p-5 sm:p-7">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                60-Day &ldquo;You&rsquo;ll Actually Do It&rdquo; Guarantee
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  We&apos;re confident you&apos;ll feel the difference on the very first pass, standing upright instead
                  of folded over, and finishing the whole yard in one go instead of splitting it across two days.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  But if for any reason your back can&apos;t tell the difference within 60 days, we refund you in full.
                  You don&apos;t even have to send it back. The lifetime warranty on the hardware runs right alongside
                  it.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  If you want to check if today&apos;s discount is still active and inventory is still in stock{" "}
                  <a href={PDP_URL} className="font-semibold text-primary underline underline-offset-2">
                    click here or the button below
                  </a>{" "}
                  &gt;&gt;
                </p>
              </div>
            </div>

            <CtaButton className="mt-9" note="Availability and today's pricing are shown on the product page." />
          </section>
        </article>

        <section className="mt-12 bg-secondary py-10">
          <div className="mx-auto max-w-3xl px-5">
            <img
              src={IMAGES.swapDemo}
              alt="A man trimming the edge of a mulch bed standing fully upright, hand out on the Yeoman grip"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />

            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Yeoman clamps onto the trimmer you already own and extends the grip out to meet your hand, so there is
              nothing left to bend down to. It fits 26mm and 28mm shafts across STIHL, Echo, Husqvarna, Ryobi, EGO and
              BLACK+DECKER, gas or battery, and installs in three minutes with no drilling.
            </p>

            <CtaButton className="mt-7" />
            <p className="mt-4 text-center text-sm text-muted-foreground">{SOCIAL_PROOF}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
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
