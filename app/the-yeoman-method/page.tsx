"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Star, Check, X, ArrowRight, Shield, Clock, Package } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { YmAsset } from "@/components/ym-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"

export default function YeomanMethodPage() {
  const buySectionRef = useRef<HTMLDivElement | null>(null)
  const faqSectionRef = useRef<HTMLDivElement | null>(null)
  const [stickyVisible, setStickyVisible] = useState(false)

  // Sticky CTA appears after hero is scrolled past, hides while buy section is in view, reappears at FAQ
  useEffect(() => {
    let pastHero = false
    let buyInView = false

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.6
      setStickyVisible(pastHero && !buyInView)
    }

    const buyObserver = new IntersectionObserver(
      ([entry]) => {
        buyInView = entry.isIntersecting
        onScroll()
      },
      { threshold: 0.3 },
    )

    if (buySectionRef.current) buyObserver.observe(buySectionRef.current)

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      buyObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* ============================================
          PROMO BANNER — subtle, no fake urgency
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4">
        <p className="text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-wide text-primary-foreground leading-snug">
          <span className="text-[#DDA15E] font-bold">+ 2 Free Yardwork Guides</span>
          <span className="mx-2 opacity-50">·</span>
          <span>Lifetime Warranty</span>
          <span className="mx-2 opacity-50">·</span>
          <span>60-Day Money-Back</span>
        </p>
      </div>

      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-4 px-4 flex items-center justify-center bg-card border-b border-border/40">
        <YmAsset
          name="logo"
          alt="Field & Harvest Co."
          className="h-7 md:h-9 w-auto object-contain"
          fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight"
        />
      </header>

      {/* ============================================
          HERO — long-form opener
          ============================================ */}
      <section className="max-w-3xl mx-auto px-4 pt-10 pb-12 md:pt-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: copy */}
          <div className="order-2 md:order-1">
            <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-4">
              For Men Over 50 Who Do Their Own Yards
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight text-balance mb-6">
              The 3-Minute Fix For Trimmer Back That{" "}
              <span className="italic text-[#C86F4C]">30 Years Of Yard Work</span>{" "}
              Never Taught You
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty mb-6">
              The auxiliary handle that bolts onto your existing string trimmer in three minutes &mdash; engineered with the <strong className="text-foreground">Plumb-Set&trade; Geometry</strong> to keep your spine upright instead of folded over. No tools. No new equipment. No &ldquo;just getting older.&rdquo;
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-7">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C86F4C]" /> Lifetime Warranty</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C86F4C]" /> 60-Day Money-Back</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C86F4C]" /> + 2 Free Guides</span>
            </div>

            <a href={PDP_URL}>
              <Button
                size="lg"
                className="w-full md:w-auto bg-[#C86F4C] hover:bg-[#B85F3C] text-white font-bold py-6 px-8 text-base md:text-lg rounded-lg shadow-md transition-all hover:shadow-lg"
              >
                Get The Yeoman Handle &mdash; From $39 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>

            <div className="mt-5">
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="font-bold text-foreground">4.8 stars</span> from 1,200+ verified buyers
              </p>
            </div>
          </div>

          {/* Right: hero image — square */}
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl bg-muted">
              <YmAsset
                name="heroImage"
                alt="The Yeoman Handle bolted onto a string trimmer, used in upright posture"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full flex items-center justify-center text-6xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SOCIAL PROOF QUICK HIT
          ============================================ */}
      <section className="border-y border-border bg-[#F3EBDD]/50">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <p className="text-xs md:text-sm font-medium text-muted-foreground tracking-wide leading-relaxed">
            <span className="font-bold text-foreground">4,000+</span> men over 50 who do their own yards
            <span className="mx-2 md:mx-3 opacity-40">·</span>
            <span className="font-bold text-foreground">4.8&#9733;</span> across 1,200+ verified reviews
            <span className="mx-2 md:mx-3 opacity-40">·</span>
            Built with a 30-year landscape veteran
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 3 — THE HIDDEN CAUSE
          ============================================ */}
      <section className="max-w-2xl mx-auto px-4 py-14 md:py-20">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-8 text-balance">
          You&rsquo;re not getting old.{" "}
          <span className="italic text-[#C86F4C]">Your trimmer is too short.</span>
        </h2>

        <div className="space-y-5 text-base md:text-lg text-foreground/85 leading-[1.7]">
          <p>
            Most men over 50 with Saturday back pain blame the wrong thing. They blame the trimmer&rsquo;s weight. They blame their age. They blame being out of shape. After thirty years in yard work, I&rsquo;ll tell you straight: it&rsquo;s none of those.
          </p>
          <p className="text-xl md:text-2xl font-serif italic text-[#C86F4C] my-8">
            It&rsquo;s the angle.
          </p>
          <p>
            A standard string trimmer forces your spine into a 45 to 60-degree forward bend for two to four hours straight. By the time you&rsquo;ve finished the front yard, your lower-back muscles have been under sustained load longer than most gym workouts. By Sunday morning, they&rsquo;re inflamed. By Monday, you&rsquo;re moving like you&rsquo;re seventy.
          </p>
          <p>
            Your back doesn&rsquo;t hurt because you&rsquo;re old. It hurts because you&rsquo;ve been folding it in half on Saturdays for thirty years.
          </p>
          <p className="text-foreground font-semibold">
            The good news: the fix isn&rsquo;t your back. The fix is the handle.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 4 — THE BIOMECHANICS (science)
          ============================================ */}
      <section className="bg-[#F3EBDD]/40 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3 text-center">
            The Mechanics
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-8 text-balance text-center">
            What 60&deg; of forward bend{" "}
            <span className="italic">actually does</span>{" "}
            to your spine
          </h2>

          {/* Spine load illustration */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-card border border-border shadow-sm">
              <YmAsset
                name="spineDiagram"
                alt="Spinal load comparison: standing 100 lbs, 30 degrees 200 lbs, 60 degrees 300+ lbs"
                className="w-full h-full object-contain p-6"
                fallbackClassName="w-full h-full flex items-center justify-center text-7xl opacity-40"
              />
            </div>

            {/* Annotated data callouts under image */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6">
              <div className="text-center p-3 md:p-4 bg-card border border-border rounded-lg">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">Standing</p>
                <p className="font-mono text-base md:text-2xl font-bold text-foreground">100 lbs</p>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-1">spinal load</p>
              </div>
              <div className="text-center p-3 md:p-4 bg-card border border-border rounded-lg">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">30&deg; Forward</p>
                <p className="font-mono text-base md:text-2xl font-bold text-foreground">200 lbs</p>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-1">spinal load</p>
              </div>
              <div className="text-center p-3 md:p-4 bg-[#C86F4C]/10 border-2 border-[#C86F4C] rounded-lg">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-[#C86F4C] mb-1">60&deg; (Trimmer)</p>
                <p className="font-mono text-base md:text-2xl font-bold text-[#C86F4C]">300+ lbs</p>
                <p className="text-[10px] md:text-xs text-[#C86F4C]/80 mt-1">spinal load</p>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-base md:text-lg text-foreground/85 leading-[1.7]">
            <p>
              Standing upright, your lumbar spine carries about <strong className="text-foreground">100 pounds</strong> of load &mdash; your upper body weight, evenly distributed.
            </p>
            <p>
              Bend forward 30 degrees? That load doubles to roughly <strong className="text-foreground">200 pounds</strong>.
            </p>
            <p>
              Bend forward 60 degrees &mdash; the angle a stock string trimmer puts you in &mdash; and your L4/L5 vertebrae are now carrying over <strong className="text-[#C86F4C]">300 pounds</strong> of compressive force. Sustained.
            </p>
            <p className="font-serif italic text-lg md:text-xl text-foreground">
              For two to four hours. Every Saturday. For thirty years.
            </p>
            <p>
              This is why your back doesn&rsquo;t hurt during the yard work &mdash; it hurts the next morning. The microtears in your erector spinae muscles don&rsquo;t register pain in real time. They show up 12 to 36 hours later as the inflammation peaks. By Sunday afternoon you&rsquo;re moving like you slept wrong. By Monday you&rsquo;ve forgotten about it. By next Saturday, you&rsquo;re back at it.
            </p>
            <p className="text-foreground font-semibold">
              The Yeoman Handle was designed to break this cycle. Not by changing your back. By changing the angle.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5 — THE SOLUTION INTRODUCED
          ============================================ */}
      <section className="max-w-3xl mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 relative w-full aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg">
            <YmAsset
              name="productMain"
              alt="The Yeoman Handle — machined aluminum auxiliary trimmer arm"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full flex items-center justify-center text-6xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3">
              Meet The Yeoman Handle
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5 text-balance">
              Designed for the body you have <span className="italic">at 58</span>, not 28.
            </h2>
            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-[1.7]">
              <p>
                The Yeoman Handle is an auxiliary trimmer arm that bolts onto any standard string trimmer in under three minutes. It extends your grip point 12 to 14 inches forward &mdash; exactly the distance that returns your spine to neutral standing posture during operation.
              </p>
              <p>
                Machined aluminum construction. Contoured rubber grip. Universal mount bracket. Three clamp sizes included to fit any standard trimmer shaft from three-quarters to one and a quarter inches.
              </p>
              <p className="font-semibold text-foreground">
                Two engineered mechanisms do the actual work:{" "}
                <span className="text-[#C86F4C]">Plumb-Set&trade; Geometry</span>{" "}
                and{" "}
                <span className="text-[#C86F4C]">Hold-Fast&trade; Grip</span>.
              </p>
            </div>
            <a href={PDP_URL} className="inline-block mt-7">
              <Button className="bg-[#C86F4C] hover:bg-[#B85F3C] text-white font-bold py-5 px-7 text-base rounded-lg shadow-md transition-all hover:shadow-lg">
                Get The Yeoman Handle &rarr;
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6 — PLUMB-SET™ GEOMETRY
          ============================================ */}
      <section className="bg-[#F3EBDD]/40 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3">
            Mechanism No. 1
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-3 text-balance">
            Plumb-Set&trade; Geometry
          </h2>
          <p className="text-base md:text-lg italic text-muted-foreground mb-8">
            Why the angle is everything.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-card border border-border shadow-sm">
              <YmAsset
                name="plumbSetDiagram"
                alt="Plumb-Set Geometry — extension, vertical, and lateral angles annotated"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full flex items-center justify-center text-6xl opacity-40"
              />
            </div>
            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-[1.7]">
              <p>
                Every dimension of the Yeoman Handle was engineered for one purpose: returning the operator to standing neutral posture during trimmer use.
              </p>
              <p>
                The <strong className="text-foreground">horizontal extension</strong> positions your grip 12 to 14 inches forward of the stock handle position. Spinal load drops from over 300 pounds to under 130. Your lumbar spine returns to its evolved load-bearing position.
              </p>
              <p>
                The <strong className="text-foreground">vertical angle</strong> &mdash; set at 22&deg; &mdash; keeps your wrist and forearm in a relaxed mid-prone position rather than forcing a tight downward grip.
              </p>
              <p>
                The <strong className="text-foreground">lateral offset</strong> of 8&deg; accounts for the natural arc your dominant arm follows during a side-to-side trimming motion. Your shoulder rotates naturally instead of forcing through the trimmer&rsquo;s resistance.
              </p>
              <p className="font-serif italic text-foreground">
                <em>Plumb</em>, in old carpenter&rsquo;s English, means dead-vertical. The Plumb-Set keeps yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7 — HOLD-FAST™ GRIP
          ============================================ */}
      <section className="max-w-3xl mx-auto px-4 py-14 md:py-20">
        <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3">
          Mechanism No. 2
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-3 text-balance">
          Hold-Fast&trade; Grip
        </h2>
        <p className="text-base md:text-lg italic text-muted-foreground mb-8">
          Because control matters as much as angle.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-4 text-base md:text-lg text-foreground/85 leading-[1.7]">
            <p>
              When you&rsquo;re holding a nine-pound trimmer at arm&rsquo;s length, grip fatigue sets in faster than spinal fatigue. A tired grip is a quiet killer &mdash; because the second your hand starts giving up, you compensate. With your shoulders. With your forearms. With your lower back.
            </p>
            <p>
              The Hold-Fast&trade; Grip uses contoured high-density rubber over machined aluminum to reduce required grip force by <strong className="text-foreground">approximately 40%</strong>. The cross-section is oval, not round &mdash; matching the natural relaxed shape of a closed hand rather than forcing your fingers into a tight circle.
            </p>
            <p>
              Result: your hand stays relaxed. Your shoulders stay down. Your back stays neutral. You can run the full back yard without your forearms locking up.
            </p>
            <p className="font-semibold text-foreground">
              This is what extends the practical working time from 90 minutes before pain sets in to a full afternoon without consequence.
            </p>
          </div>
          <div className="order-1 md:order-2 relative w-full aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg">
            <YmAsset
              name="holdFastImage"
              alt="Hold-Fast Grip — contoured rubber over machined aluminum"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full flex items-center justify-center text-6xl"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="bg-[#C86F4C] hover:bg-[#B85F3C] text-white font-bold py-6 px-8 text-base md:text-lg rounded-lg shadow-md transition-all hover:shadow-lg"
            >
              Get The Yeoman Handle &mdash; From $39 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* ============================================
          SECTION 8 — REAL CUSTOMER STORIES
          ============================================ */}
      <section className="bg-[#F3EBDD]/40 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3 text-center">
            Verified Buyers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-12 text-balance text-center">
            What 4,000+ men over 50 <span className="italic">are saying</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                quote: "I bolted this on my Echo last spring. My back used to take Monday off. It hasn't taken Monday off since. Worth every dollar.",
                name: "Robert P.",
                age: 58,
                initial: "R",
              },
              {
                quote: "My wife stopped asking when I was going to call the lawn service. That alone made it worth it. The fact that I can actually finish the back yard now is the bonus.",
                name: "Jim K.",
                age: 62,
                initial: "J",
              },
              {
                quote: "I bought one for me and one for my dad's 70th. He called me three weeks later from his yard and said 'I don't know what this is, but my back hasn't hurt since I put it on.'",
                name: "Mark S.",
                age: 51,
                initial: "M",
              },
            ].map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
                  ))}
                </div>
                <p className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C86F4C]/15 text-[#C86F4C] font-bold flex items-center justify-center">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}, {t.age}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 9 — WHAT'S INCLUDED
          ============================================ */}
      <section className="max-w-3xl mx-auto px-4 py-14 md:py-20">
        <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3">
          What Ships
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-10 text-balance">
          Everything in the box
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg">
            <YmAsset
              name="flatLay"
              alt="The Yeoman Handle — everything in the box, flat lay"
              className="w-full h-full object-cover"
              fallbackClassName="w-full h-full flex items-center justify-center text-6xl"
            />
          </div>
          <ul className="space-y-4">
            {[
              "The Yeoman Handle (machined aluminum arm + Hold-Fast™ Grip)",
              "Universal mount bracket (three clamp sizes for shaft diameters 0.75\"–1.25\")",
              "Stainless Allen wrench",
              "Quick-start installation card",
              "Lifetime warranty registration",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#C86F4C] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-base md:text-lg text-foreground/85 leading-relaxed">{item}</p>
              </li>
            ))}

            {/* Bonus ebooks block */}
            <li className="pt-4 mt-2 border-t border-border">
              <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3">
                Plus &mdash; Free With Every Order
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded bg-[#DDA15E] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-foreground">PDF</span>
                  </div>
                  <div>
                    <p className="text-base text-foreground font-semibold leading-snug">The Saturday Yard Routine</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-snug">A 12-page guide to cutting Saturday yard time in half without cutting corners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded bg-[#DDA15E] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-foreground">PDF</span>
                  </div>
                  <div>
                    <p className="text-base text-foreground font-semibold leading-snug">The Back-Saver Field Manual</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-snug">15 small mechanical fixes that add up to a Sunday morning without back pain.</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================
          SECTION 10 — 3-MINUTE INSTALL
          ============================================ */}
      <section className="bg-[#F3EBDD]/40 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" /> Three Minutes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-3 text-balance">
            No tools beyond <span className="italic">the one in the box</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10">
            Most men finish the install in under three minutes. Some take five. Nobody takes more.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Loosen the factory clamp",
                desc: "Using the included Allen wrench. The factory handle slides off in seconds.",
                img: "installStep1" as const,
              },
              {
                num: "02",
                title: "Slip on the Yeoman bracket",
                desc: "Position it where you'd naturally grip a broom — between the engine and the cutter head.",
                img: "installStep2" as const,
              },
              {
                num: "03",
                title: "Adjust and tighten. Done.",
                desc: "Set your Plumb-Set extension to your preferred reach. Tighten the clamp. Go cut your grass.",
                img: "installStep3" as const,
              },
            ].map((step, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-5">
                  <YmAsset
                    name={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    fallbackClassName="w-full h-full flex items-center justify-center text-5xl"
                  />
                </div>
                <p className="font-mono text-xs font-bold text-[#C86F4C] mb-2">{step.num}</p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-card border border-border rounded-xl p-5 md:p-6">
            <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
              <strong className="text-foreground">Universal fit.</strong> Works on any standard string trimmer with a 0.75&Prime; to 1.25&Prime; shaft. Tested on Stihl FS56 / FS70 / FS91; Echo SRM-225 / SRM-2620; Husqvarna 525L / 525LST; DeWalt DCST970 / DCST972; and most major brands. If your trimmer accepts a standard auxiliary handle, the Yeoman fits.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 11 — VS. ALTERNATIVES
          ============================================ */}
      <section className="max-w-3xl mx-auto px-4 py-14 md:py-20">
        <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3">
          Vs. The Alternatives
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-10 text-balance">
          How men used to solve this
        </h2>

        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-card">
              <tr className="border-b border-border">
                <th className="px-4 py-4 md:py-5 font-bold text-foreground text-xs md:text-sm uppercase tracking-wider">Approach</th>
                <th className="px-4 py-4 md:py-5 font-bold text-foreground text-xs md:text-sm uppercase tracking-wider">Cost</th>
                <th className="px-4 py-4 md:py-5 font-bold text-foreground text-xs md:text-sm uppercase tracking-wider hidden md:table-cell">What It Does</th>
              </tr>
            </thead>
            <tbody className="bg-card">
              {[
                { name: "Cortisone shots", cost: "~$120 × 3-4/yr", does: "Masks symptom, doesn't fix the cause" },
                { name: "Lumbar back brace", cost: "$40–80", does: "Restricts motion, doesn't change load" },
                { name: "Stretching routine", cost: "Free + 30 min/day", does: "Helps recovery, doesn't prevent damage" },
                { name: "Hire a lawn service", cost: "$80–200/wk", does: "Solves the back, costs $4–10K/yr" },
                { name: "Stop doing your own yard", cost: "Hard to price", does: "Most men over 50 aren't ready for that" },
              ].map((row, i) => (
                <tr key={i} className="border-t border-border/50">
                  <td className="px-4 py-3 md:py-4 text-foreground font-medium">{row.name}</td>
                  <td className="px-4 py-3 md:py-4 text-muted-foreground">{row.cost}</td>
                  <td className="px-4 py-3 md:py-4 text-muted-foreground hidden md:table-cell">{row.does}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-[#C86F4C] bg-[#C86F4C]/5">
                <td className="px-4 py-4 md:py-5 text-[#C86F4C] font-bold">The Yeoman Handle</td>
                <td className="px-4 py-4 md:py-5 text-[#C86F4C] font-bold">$39 once</td>
                <td className="px-4 py-4 md:py-5 text-foreground font-medium hidden md:table-cell">Fixes the mechanical cause. Permanent.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================
          SECTION 12 — BUILT TO LAST
          ============================================ */}
      <section className="bg-[#F3EBDD]/40 border-y border-border">
        <div className="max-w-2xl mx-auto px-4 py-14 md:py-20">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3">
            Made to outlast your trimmer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-8 text-balance">
            Built once. <span className="italic">Backed for life.</span>
          </h2>

          <div className="space-y-5 text-base md:text-lg text-foreground/85 leading-[1.7]">
            <p>
              The Yeoman Handle is machined from <strong className="text-foreground">6061-T6 aluminum</strong> &mdash; the same alloy used in aerospace structural components and high-end bicycle frames. The grip is high-density EPDM rubber, the same material used on professional landscaping equipment to resist sun, rain, gasoline, and a Saturday-afternoon swing into the fence.
            </p>
            <p>
              There is no part of this handle designed to wear out under normal use. Field &amp; Harvest Co backs every Yeoman with a <strong className="text-foreground">lifetime warranty</strong> &mdash; if any component fails for any reason, we replace it. No questions, no proof of purchase required beyond the original order email.
            </p>
            <p className="font-serif italic text-foreground">
              We&rsquo;re confident in the build because we built it for the men who would have built it themselves if they could.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 13 — PRICING / OFFER
          ============================================ */}
      <section ref={buySectionRef} className="max-w-4xl mx-auto px-4 py-14 md:py-20">
        <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3 text-center">
          Choose Your Setup
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-10 text-balance text-center">
          Get The Yeoman Handle
        </h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Single */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm flex flex-col">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">Single</p>
            <p className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-1">$39</p>
            <p className="text-sm text-muted-foreground mb-5">1 Handle</p>
            <ul className="space-y-2 text-sm text-foreground/80 mb-7 flex-1">
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> + 2 Free Yardwork Guides</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> Lifetime warranty</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> 60-day money-back</li>
            </ul>
            <a href={PDP_URL}>
              <Button variant="outline" className="w-full border-2 border-foreground text-foreground font-bold py-5 rounded-lg hover:bg-foreground hover:text-background transition-all">
                Get Single
              </Button>
            </a>
          </div>

          {/* 2-Pack — recommended */}
          <div className="bg-card border-2 border-[#C86F4C] rounded-2xl p-6 md:p-8 shadow-lg flex flex-col relative md:-mt-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C86F4C] text-white text-[10px] font-bold tracking-[0.15em] uppercase py-1 px-3 rounded-full whitespace-nowrap">
              &#9733; Most Chosen
            </div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-2">2-Pack</p>
            <div className="flex items-baseline gap-2 mb-1">
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">$69</p>
              <p className="text-sm text-muted-foreground line-through">$78</p>
            </div>
            <p className="text-sm text-muted-foreground mb-5">2 Handles &mdash; Save $9</p>
            <ul className="space-y-2 text-sm text-foreground/80 mb-7 flex-1">
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> + 2 Free Yardwork Guides</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> Lifetime warranty on both</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> 60-day money-back</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> One for your shed</li>
            </ul>
            <a href={PDP_URL}>
              <Button className="w-full bg-[#C86F4C] hover:bg-[#B85F3C] text-white font-bold py-5 rounded-lg shadow-md transition-all">
                Get The Pair &rarr;
              </Button>
            </a>
          </div>

          {/* 4-Pack */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm flex flex-col">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">Pair + Gift</p>
            <div className="flex items-baseline gap-2 mb-1">
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">$129</p>
              <p className="text-sm text-muted-foreground line-through">$156</p>
            </div>
            <p className="text-sm text-muted-foreground mb-5">4 Handles &mdash; Save $27</p>
            <ul className="space-y-2 text-sm text-foreground/80 mb-7 flex-1">
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> + 2 Free Yardwork Guides</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> Lifetime warranty on all</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> 60-day money-back</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#C86F4C] flex-shrink-0 mt-0.5" /> Gifts for the men in your life</li>
            </ul>
            <a href={PDP_URL}>
              <Button variant="outline" className="w-full border-2 border-foreground text-foreground font-bold py-5 rounded-lg hover:bg-foreground hover:text-background transition-all">
                Get The Set
              </Button>
            </a>
          </div>
        </div>

        <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
          Why most buyers choose the pair: one for your trimmer, one for the shed when the next one needs it. Or one for you, one for your brother / father / son who&rsquo;s about to learn the hard way.
        </p>
      </section>

      {/* ============================================
          SECTION 14 — THE PROMISE (guarantee)
          ============================================ */}
      <section className="bg-[#F3EBDD]/40 border-y border-border">
        <div className="max-w-2xl mx-auto px-4 py-14 md:py-20 text-center">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3">
            The Promise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-3 text-balance">
            Try it for 60 days.
          </h2>
          <h3 className="font-serif text-2xl md:text-3xl italic text-[#C86F4C] mb-8 text-balance">
            If your Saturday back isn&rsquo;t fixed, send it back.
          </h3>

          <div className="space-y-5 text-base md:text-lg text-foreground/85 leading-[1.7] text-left">
            <p>
              We don&rsquo;t expect you to take our word for any of this. We expect you to take <em>your back&rsquo;s</em> word for it.
            </p>
            <p>
              Install the Yeoman Handle. Do your next two Saturdays of yard work. If by week three your back hasn&rsquo;t told you the difference, send it back for a full refund. No questions. No restocking fee. No &ldquo;well actually&rdquo; &mdash; just your money back.
            </p>
            <p>
              After 60 days, the lifetime warranty kicks in. If any component fails &mdash; ever &mdash; we replace it.
            </p>
            <p className="text-foreground font-semibold">
              We&rsquo;ve watched four thousand men over fifty stop complaining about Sunday back pain after one Saturday with the Yeoman. The math is on our side. We&rsquo;re happy to take the risk.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 mb-10">
            <div className="flex items-center gap-3 bg-card border-2 border-border rounded-xl px-5 py-3">
              <Shield className="w-6 h-6 text-[#C86F4C]" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground leading-tight">60-Day</p>
                <p className="text-sm font-bold text-foreground leading-tight">Money-Back</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card border-2 border-border rounded-xl px-5 py-3">
              <Shield className="w-6 h-6 text-[#C86F4C]" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground leading-tight">Lifetime</p>
                <p className="text-sm font-bold text-foreground leading-tight">Warranty</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card border-2 border-border rounded-xl px-5 py-3">
              <Package className="w-6 h-6 text-[#C86F4C]" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground leading-tight">+ 2 Free</p>
                <p className="text-sm font-bold text-foreground leading-tight">Yardwork Guides</p>
              </div>
            </div>
          </div>

          <a href={PDP_URL}>
            <Button
              size="lg"
              className="bg-[#C86F4C] hover:bg-[#B85F3C] text-white font-bold py-7 px-10 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              Get The Yeoman Handle &mdash; From $39 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* ============================================
          SECTION 15 — FAQ
          ============================================ */}
      <section ref={faqSectionRef} className="max-w-2xl mx-auto px-4 py-14 md:py-20">
        <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C86F4C] mb-3">
          Common Questions
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-10 text-balance">
          Questions buyers ask <span className="italic">before they order</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {[
            {
              q: "Does it fit my Stihl / Echo / Husqvarna / DeWalt?",
              a: "Yes. The Yeoman ships with three clamp sizes that fit any standard trimmer shaft between 0.75″ and 1.25″ — which covers every major brand and model sold in the US in the last twenty years. If your trimmer accepts a standard auxiliary handle, the Yeoman fits.",
            },
            {
              q: "Will installing it void my trimmer's warranty?",
              a: "No. The Yeoman clamps onto the shaft without modifying anything. You can remove it in 60 seconds and your trimmer is exactly as it was when you bought it.",
            },
            {
              q: "Do I need to drill or modify anything?",
              a: "No drilling. No modification. The mount uses your trimmer's existing shaft. The only tool you'll touch is the Allen wrench in the box, and you'll use it for thirty seconds.",
            },
            {
              q: "What if my back pain doesn't improve?",
              a: "Then you get your money back. Our 60-day return policy exists for exactly this. About 3% of buyers report no meaningful change — usually because their back pain has another underlying cause unrelated to yard posture. If you're in that 3%, the refund is automatic.",
            },
            {
              q: "Can I take it off when I'm not using it?",
              a: "Yes. It loosens in under a minute. Some men leave it on permanently. Others remove it for storage. Both are fine.",
            },
            {
              q: "Why isn't this just standard equipment from the trimmer manufacturers?",
              a: "Honestly? Because the standard handle is cheap to make and good enough for most operators. It's only when you're 50+ and trimming for hours at a time that the standard handle becomes the problem. The major brands haven't optimized for our demographic.",
            },
            {
              q: "How is this different from an Amazon auxiliary handle?",
              a: "Most Amazon handles are flat extensions — they extend your reach but don't address the spine angle. The Plumb-Set™ Geometry is the part that matters, and it requires the specific extension length, vertical angle, and lateral offset that are calibrated for sustained operator posture. Looks similar at a glance. Works fundamentally differently.",
            },
            {
              q: "How long does shipping take?",
              a: "Standard US shipping is $9.95 and typically arrives in 5–9 business days. Orders over $85 ship free. Tracking sent within 24 hours of order.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-5 md:px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-serif text-lg md:text-xl font-bold text-foreground hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ============================================
          SECTION 16 — FINAL CTA
          ============================================ */}
      <section className="bg-foreground text-background">
        <div className="max-w-2xl mx-auto px-4 py-16 md:py-24 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-balance">
            Your back has earned <span className="italic text-[#DDA15E]">a better Saturday.</span>
          </h2>
          <p className="text-base md:text-lg text-background/80 leading-relaxed mb-10 text-pretty">
            You&rsquo;ve done your own yard for thirty years. You&rsquo;ve earned the right to do it for another thirty without paying for it on Sunday morning. The Yeoman Handle takes three minutes to install and is backed for life. If it doesn&rsquo;t work, you get your money back. That&rsquo;s the deal.
          </p>
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="bg-[#C86F4C] hover:bg-[#B85F3C] text-white font-bold py-7 px-10 text-lg rounded-lg shadow-xl transition-all hover:scale-[1.02]"
            >
              Get The Yeoman Handle &mdash; From $39 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <p className="text-xs md:text-sm text-background/60 mt-5 uppercase tracking-wider">
            60-Day Money-Back &middot; Lifetime Warranty &middot; + 2 Free Yardwork Guides
          </p>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            &copy; {new Date().getFullYear()} Field &amp; Harvest Co. All rights reserved.
          </p>
          <p className="text-[11px] text-muted-foreground mt-2">
            The Yeoman Handle&trade; &middot; Plumb-Set&trade; Geometry &middot; Hold-Fast&trade; Grip
          </p>
        </div>
      </footer>

      {/* ============================================
          STICKY CTA (mobile + desktop, hides over buy section)
          ============================================ */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg transition-transform duration-300 ${
          stickyVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground leading-tight truncate">
              The Yeoman Handle
            </p>
            <p className="text-xs text-muted-foreground leading-tight">
              From $39 &middot; + 2 Free Yardwork Guides
            </p>
          </div>
          <a href={PDP_URL} className="flex-shrink-0">
            <Button className="bg-[#C86F4C] hover:bg-[#B85F3C] text-white font-bold py-4 px-5 text-sm rounded-lg shadow-md">
              Get Yours &rarr;
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
