"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect } from "react"
import { Check, Star } from "lucide-react"

// ============================================================
// /back-hurts-when-trimming — Yeoman Handle
// COLD EDITORIAL / AGE ANGLE. Destination for the Learn More age campaign.
//
// This is deliberately NOT the /the-trimmer-switch shape. There, the five
// reasons are reasons to buy. Here they are reasons the back hurts, and the
// product does not arrive until reason 4. Modelled on the Karma Items
// listicle-advertorial structure: breadcrumb, named byline, argument first,
// no CTA at all until after the case is made.
//
// Withholding rules that hold this page together:
//   - the H1 never names the handle. Reason 4 is the reveal.
//   - the trust strip says WHAT it is, never HOW it works.
//   - no offer and no button above the product section.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"

// Page tag carried through to the store on every outbound click, so an order
// that started here is distinguishable in Shopify from one that started on any
// other lander. Deliberately NOT `lt`, which means "layout test arm" on
// /the-trimmer-switch and would pollute the Test 2 read.
const LANDER_TAG = "bhwt"
const CTA_LABEL = "CHECK AVAILABILITY >>"
const OFFER_TEXT = "Save Up To 43% + 2 Free Yardwork Guides"
const SOCIAL_PROOF = "4.8 stars • 800 reviews • 40,000+ trimmers upgraded"

// Headline is split so the bracket can be swapped without touching the first
// half. Alternates, each doing a different job:
//   B failed solutions .. "(Why The Brace, The Stretches And The New Trimmer Never Worked)"
//   C hidden cause ...... "(The One Part Of Your Trimmer Nobody Ever Checks)"
//   D authority failed .. "(And Why Nobody Asked What You Were Holding)"
//   E resignation ....... "(Why It Is Not Just Your Age, And Not Something You Live With)"
const HEADLINE_MAIN = "5 Reasons Your Back Hurts When Trimming"
const HEADLINE_BRACKET = "(Why It Is Not Just Your Age, And What Actually Stops It)"

// This route ships its own palette. The host app is warm cream on dark brown;
// this page is white on terracotta to read as an article rather than a store.
// Scoped to the wrapper so host tokens are untouched, same approach as
// /the-only-trimmer-handle.
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
  brandRack: "/bhwt-brand-rack.webp",
  spineLeverage: "/bhwt-bends-loads.webp",
  uprightSenior: "/bhwt-verified-72.webp",
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
  image: string
  alt: string
  body: React.ReactNode
}

const REASONS: Reason[] = [
  {
    number: "1",
    heading: "Everything you have tried was aimed at your back",
    image: IMAGES.handOnBack,
    alt: "Older man straightening up with a hand pressed to his lower back after trimming",
    body: (
      <>
        <p>Maybe your back is genuinely worn. Nobody here is going to tell you it is in your head.</p>
        <p>
          But look at what you have already been through. Pills. Creams. The chiropractor. Physical therapy. A brace you
          bought and stopped wearing. One buyer listed his own drawer like this:{" "}
          <em>&ldquo;From pills, creams, chiro, pt, injections, brace, hwave...it sucks.&rdquo;</em>
        </p>
        <p>
          Every one of those treats the back after the fact. Not one of them changes what you actually do for twenty
          minutes on a Saturday. So the relief holds until the next time you trim. Six days of progress, twenty minutes
          to erase it, and the whole climb starts again next weekend.
        </p>
        <p>
          <strong className="font-bold text-foreground">That is not six failures.</strong> It is six answers to a
          question nobody had asked yet.
        </p>
      </>
    ),
  },
  {
    number: "2",
    heading: "Every brand puts the grip below your reach",
    image: IMAGES.brandRack,
    alt: "Three string trimmers from different brands racked on a garage wall, every factory loop grip mounted low on the shaft",
    body: (
      <>
        <p>
          It doesn&apos;t matter which one is in your shed. Every brand mounts the loop handle low on the shaft, well
          below where your hand naturally sits, so you fold forward to reach it and stay folded for the whole pass.
        </p>
        <p>
          You never chose that posture.{" "}
          <strong className="font-bold text-foreground">The tool chose it for you</strong>, the day you bought it.
        </p>
      </>
    ),
  },
  {
    number: "3",
    heading: "Twenty minutes bent at the waist would hurt a 25-year-old",
    image: IMAGES.spineLeverage,
    alt: "A chiropractor pointing to the loaded lower back of a hinged-forward skeleton. Caption reads: the bend loads your lower back. It is a leverage problem, not a strength problem.",
    body: (
      <>
        <p>
          Hinge forward at the hips and hold it, and your lower back carries your whole upper body on a long lever. That
          is hard on a spine at any age.
        </p>
        <p>
          Hand that same low trimmer to a twenty-five year old for an hour of fence line and he will be sore too, he just
          recovers by Sunday and never connects the two. You feel it longer, so you blamed the years instead of the
          angle.
        </p>
      </>
    ),
  },
  {
    number: "4",
    heading: "Change the handle, not what you expect from your body",
    image: IMAGES.manHoldingTrimmer,
    alt: "A man standing fully upright, back straight, hand out on the raised Yeoman grip while trimming a lawn edge",
    body: (
      <>
        <p>The grip does not have to sit down there.</p>
        <p>
          Move it out to where your hand already falls, and the bend has nothing left to do. You stand up. The lever
          disappears. The twenty minutes stop costing you the rest of the week.
        </p>
        <p>
          That is the whole of it. Not a brace that holds you together afterwards. Not a lighter machine. Not a younger
          back.{" "}
          <strong className="font-bold text-foreground">
            One part, in a different place, on the trimmer already in your shed.
          </strong>{" "}
          The fixed angle that does it is the <strong className="font-bold text-foreground">Plumb-Set&trade;</strong>.
        </p>
      </>
    ),
  },
  {
    number: "5",
    heading: "A 72-year-old just did an hour and his back is fine",
    image: IMAGES.uprightSenior,
    alt: "A 72-year-old verified buyer standing fully upright in his yard holding a trimmer fitted with the Yeoman Handle, beside his five-star review",
    body: (
      <>
        <p>
          That is a verified buyer, and he did not get younger, he changed the handle. Bolt it on, work a full Saturday,
          and if your back doesn&apos;t feel the difference you get a full refund, and you don&apos;t even have to send
          it back.
        </p>
        <p>
          <strong className="font-bold text-foreground">
            You are not betting on your age. You are testing a handle.
          </strong>
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

const REVIEWS = [
  {
    title: "My back is just fine!",
    quote:
      "I am 72 years old, using my big still weed eater hurt my back after about 20 minutes. I just finished about 1 hr. And my back is just fine! Wish I would have bought this years ago.",
    author: "Verified Buyer, 72",
  },
  {
    title: "Why did I wait to order this?",
    quote:
      "Why did I wait to order this? I have 3-4 hours of mowing and edging every week. Edging at 65 was a painful experience, being bent over for an hour. Not anymore!",
    author: "Verified Buyer, 65",
  },
  {
    title: "At 46 it's not going to get easier.",
    quote:
      "6 hours of string trimming this week, crippled me for days. At 46 it's not going to get easier. Solve a problem you get my money.",
    author: "Verified Buyer, 46",
  },
  {
    title: "I'm 80 and still take care of my 1.5 acre property.",
    quote: "I'm 80 years old and still take care of my 1.5 acre property. This will help me immensely.",
    author: "Verified Buyer, 80",
  },
]

const FAQS = [
  {
    question: "Will it fit my trimmer?",
    answer:
      "Almost certainly. The Yeoman fits 26mm and 28mm shafts, which covers the straight and curved-shaft trimmers sold by STIHL, Echo, Husqvarna, Ryobi, EGO and BLACK+DECKER, in both gas and battery. If you can wrap your hand around the shaft, measure it once and check it against those two sizes.",
  },
  {
    question: "How hard is it to install?",
    answer:
      "Three minutes with the allen key that comes in the box. The Hold-Fast™ bracket clamps around the shaft and slides to wherever your hand naturally falls, then tightens down. No drilling, no cutting, no permanent change to the trimmer. If someone else in the house is a different height, loosen it and slide it, and one handle serves you both.",
  },
  {
    question: "I'm in my 40s. Is this only for older guys?",
    answer:
      "No, because the bend is a leverage problem, not an age problem. Holding your upper body out on a long lever for twenty minutes strains a spine at twenty-five the same way it does at seventy-five. One of our verified buyers is 46 and bought it after six hours of trimming put him down for days. Younger backs just recover faster and never connect the soreness to the handle.",
  },
  {
    question: "What if it turns out it really was my age?",
    answer:
      "Then you keep your money. Bolt it on, work a full Saturday the way you normally would, and if your back honestly cannot tell the difference, you get a full refund within 60 days, and you don't even have to send it back. You are not betting on your age. You are testing a handle.",
  },
  {
    question: "What does the lifetime warranty cover?",
    answer:
      "The handle and the Hold-Fast™ bracket hardware, for as long as you own it. This is a machined part that lives outdoors on a vibrating tool, so if it ever cracks, strips or stops holding its position, we replace it. That runs alongside the separate 60-day back-pain trial.",
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

export default function BackHurtsWhenTrimming() {
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
      {/* Breadcrumb only. No logo: a brand mark at the top tells a Learn More
          visitor he has landed on a store before he reads a word. */}
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
              F&H editorial persona already used on /the-only-trimmer-handle. */}
          <div className="mt-6 flex items-center gap-3">
            <img src={IMAGES.author} alt="Walt Brenner" className="h-12 w-12 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">By Walt Brenner</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Field &amp; Harvest Co. &middot; 2 June 2026
              </span>
            </div>
          </div>

          {/* Says WHAT it is and what the guarantee is. Never how it works:
              that is reason 4's job and it is the only reveal on the page. */}
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
              Whatever shape your back is in, notice what keeps setting it back: the one afternoon a week you spend
              folded over a trimmer. That is not the years catching up with you. It is twenty minutes bent over a grip
              that sits too low, and the bend never lets your back settle.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              You have probably been told it is your age. That this is just what your fifties, sixties or seventies feel
              like. Maybe someone suggested you hire the yard out, or take it easier, or stretch more before you start.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nobody mentioned the handle. Nobody mentioned that every major brand mounts the loop grip low on the shaft,
              well below where your hand naturally sits. And nobody told you that the posture you blame on your spine was
              chosen for you the day you bought the tool.{" "}
              <strong className="font-bold text-foreground">Here are the five real reasons why.</strong>
            </p>
          </div>

          {/* Image, numbered heading, prose. No eyebrow, no subhead, no divider
              rule: the images do the separating, which is what makes it scan as
              an article rather than a product listicle. */}
          <div className="mt-12 flex flex-col gap-14">
            {REASONS.map((reason) => (
              <section key={reason.number}>
                <img
                  src={reason.image}
                  alt={reason.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full rounded-sm object-cover"
                />
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
              The Handle That Took The Bend Out Of The Job
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

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              They All Thought It Was Their Age Too
            </h2>
            <p className="mt-2 text-base text-muted-foreground">4.8 out of 5 from 800 reviews</p>

            <div className="mt-7 flex flex-col gap-5">
              {REVIEWS.map((review) => (
                <blockquote key={review.author} className="border-l-4 border-primary bg-muted p-5">
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

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-pretty text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Common Questions
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Everything you need to know before you blame another summer on your back.
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
                60-Day &ldquo;It Was The Handle&rdquo; Guarantee
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  We&apos;re confident you&apos;ll feel the difference on the very first pass, standing upright instead
                  of folded over, and finishing the yard without the ache that usually follows you inside.
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
