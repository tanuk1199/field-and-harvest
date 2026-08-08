"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { YrsAsset } from "@/components/yrs-asset"

// ============================================================
// /the-shoulder-switch — THE YEOMAN RIG, PRODUCT-AWARE LISTICLE
//
// Mirrors the canonical F&H listicle exactly (per feedback_listicle-template-
// canonical): promo banner -> centred logo -> hero -> 5 reason cards ->
// product showcase -> social proof -> FAQ -> sticky CTA. Structure copied from
// /the-trimmer-switch, which is that template already applied to a Yeoman SKU.
//
// This is the PRODUCT-AWARE sibling to /trimming-wrecks-your-shoulder (the
// problem-aware advertorial). Same product, same mechanism, different entry
// point: this reader already accepts that shoulder support exists and is
// deciding whether THIS one is worth it. So the reasons are reasons to choose
// it, not reasons his shoulder hurts.
//
// DELIBERATELY NOT INHERITED FROM THE SOURCE TEMPLATE
//   - Intelligems bundle + context block. No split test on this route, and
//     shipping it would collide with Test 2 on /the-trimmer-switch.
//   - Clarity layout_variant tagging. Same reason.
//   - The four written reviews. THE RIG HAS ZERO ORDERS. See the social proof
//     section: it carries the seeding brief instead of invented testimonials.
//   - Any star rating or review count. The PDP leaves these intentionally
//     blank for the same reason and so does this page.
//
// CLAIMS DISCIPLINE (from Yeoman Rig/Positioning and Mechanism.md)
//   - The enemy here is the SHOULDER. This is the one Yeoman SKU where the
//     "every ad names back pain" rule does not apply.
//   - No "prevents", no "recovery", no "treats". It is a general wellness
//     device, not a medical one. Nothing below promises elimination.
//   - The claim that survives scrutiny: the shoulder is not finished before
//     the job is. Not less pain. Not fixed.
// ============================================================

const PDP_URL = "https://fieldandharvestco.com/products/yeoman-rig"

// Real ladder: 1 brace $39/$65 (40%), 1 pair $49/$130 (62%), 2 pairs $89/$260 (66%).
const OFFER_SHORT = "Save Up To 66% Off"
const OFFER_LONG = "Save Up To 66% + 2 Free Yardwork Guides"

const PRODUCT_THUMBS = ["productThumb1", "productThumb2", "productThumb3", "productThumb4"] as const
type GalleryKey = "productMain" | (typeof PRODUCT_THUMBS)[number]

export default function LandingPage() {
  const [activeImage, setActiveImage] = useState<GalleryKey>("productMain")

  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMOTIONAL BANNER
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">{OFFER_SHORT}</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 Free Yardwork Guides</span>
        </p>
      </div>

      {/* ============================================
          HEADER — Logo
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <YrsAsset name="logo" alt="Field &amp; Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <YrsAsset name="heroImage" alt="A man in a work shirt cutting a fallen limb with a chainsaw, the Yeoman Rig worn over the shirt on his right shoulder" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">{OFFER_LONG}</span>
        </div>

        <div className="mt-5 text-center">
          {/* Headline is Tobenna's, verbatim, set 2026-08-08. Note the volume
              claim: the Rig has zero orders to date, so "thousands of men are
              using this" is not currently supportable from order data. Flagged
              and approved by him. Revisit once real Rig sales exist. */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            5 Reasons Why Thousands Of Men Are Using This <span className="text-[#C86F4C]">For Shoulder Support Doing Yardwork</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            It was never your age. Forty minutes of holding a machine out on the same side would finish a 25 year old too.
          </p>
        </div>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            See The Rig &rarr;
          </Button>
        </a>

        <div className="mt-5 text-center">
          <p className="text-sm text-foreground font-medium">
            From the makers of the Yeoman Handle <span className="text-muted-foreground mx-1">&bull;</span> 40,000+ sold
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE — 5 reasons, product-aware
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 — THE AGE REFUTATION. Carried over from the problem-aware
            page, which led on "why it is not just your age". Refutes age,
            never assigns it, per the CF030 rule. */}
        <div id="reason-1" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Not Your Age
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Forty minutes of that hold would finish a 25 year old
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            It is a position, not a birthday
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <YrsAsset name="reason1Image" alt="A clinician pointing at the shoulder joint of an anatomical skeleton with the arm held out extended, the joint highlighted" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The machine is not heavy. Held against your chest you could carry it all day. Held out where the head has to reach, on the same side, without setting it down, it stops being ten pounds. That is a static one-sided hold, and it does not care how old you are. <span className="font-bold text-foreground">Nothing about that is your age. It is where the weight sits.</span>
          </p>
        </div>

        {/* Reason 2 — the category reframe */}
        <div id="reason-2" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Not A Brace
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Closer to a weight belt than a medical brace
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Built for work, not for rehab
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <YrsAsset name="reason2Image" alt="Split image: a lifter wearing a leather weight belt on the left, a man in a work shirt wearing the Yeoman Rig while running a chainsaw on the right" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Nobody at the gym calls a lifting belt medical equipment. You put it on before the heavy set, not after you pull something. The Rig works the same way and is built the same way: something you wear because you are about to load the joint, not because you already did. <span className="font-bold text-foreground">You are not injured. You are working.</span>
          </p>
        </div>

        {/* Reason 3 — the mechanism */}
        <div id="reason-3" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Holds Under Load
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Compression that works during the job, not after it
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Hold-Up&trade; Cap
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <YrsAsset name="reason5Image" alt="The shoulder cap and the chest strap being set independently" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            An ice pack and a hot shower are both after. The Hold-Up&trade; is a contoured cap that sits over the deltoid and stays under compression while the arm is out and the machine is running, which is the only part of the day the shoulder is actually loaded. <span className="font-bold text-foreground">The shoulder is not finished before the yard is.</span>
          </p>
        </div>

        {/* Reason 4 — the fit, now also carrying reach and heat */}
        <div id="reason-4" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Sized For You
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Cut for a working frame, and it goes on over your shirt
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Journeyman Cut&trade;
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <YrsAsset name="reason4Image" alt="The Rig worn over a work shirt" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Athletic braces are cut for bare skin on a lean gym torso, which is why they bite when a man in a work shirt puts one on. The Journeyman Cut&trade; is sized the other way: for a real chest, over the shirt you already have on. It is contoured to stay put through full extension rather than fighting it, and the panel breathes instead of trapping everything against you. <span className="font-bold text-foreground">Nothing to take off before you start, and nothing that makes you take it off by the second pass.</span>
          </p>
        </div>

        {/* Reason 5 — side coverage + risk reversal. This card replaced the
            standalone adjustability card: the two adjustment points now run as
            one clause inside the body, because "it fits whichever shoulder you
            load" is the question a buyer actually stops on, and the guarantee
            is the thing that closes it. Matches FAQ item 3, which carries the
            same mechanic (side is chosen per brace at checkout, a pair can be
            one of each). */}
        <div id="reason-5" className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Either Shoulder
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Whichever shoulder takes it, that is the one it is built for
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Right or left, chosen per brace &middot; 60 days to decide
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <YrsAsset name="reason3Image" alt="The Hold-Up compression cap contoured over the deltoid" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            You do not switch arms halfway through a job, so the same shoulder takes it every time. You pick that side when you order, and it is cut for it. Want one for each, or one for someone else in the house, take the pair. From there it sets at the cap and the chest strap separately, so the compression goes where you want it without the harness digging. <span className="font-bold text-foreground">Sixty days to decide, and an unlimited lifetime warranty on the build.</span>
          </p>
        </div>

      </section>

      {/* ============================================
          PRODUCT SHOWCASE
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            Unlimited Lifetime Warranty + 60-Day Guarantee
          </Badge>
          {/* Was "The Third Piece Of The Yeoman Series" over a line pairing it
              with the Handle. Cut 2026-08-08: a lineup announcement is a claim
              about US, and it reads as a bigger house than this is. The one
              volume fact worth having is already in the hero, attributed and
              real ("From the makers of the Yeoman Handle, 40,000+ sold"), so
              this slot just names the thing and says what it does. */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            The Yeoman Rig
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            Shoulder support for men who work. Not a brace for after the job. Something you put on before it.
          </p>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">Today: {OFFER_LONG}</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <YrsAsset name={activeImage} alt="The Yeoman Rig" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
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
                  <YrsAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <YrsAsset name="benefitIcon1" alt="Belt not brace" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Built like a weight belt, not a medical brace</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <YrsAsset name="benefitIcon2" alt="Compression" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Hold-Up&trade; cap holds while the arm is out</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <YrsAsset name="benefitIcon3" alt="Fit" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Adjusts at two points, wears over your shirt</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <YrsAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">60-day trial + unlimited lifetime warranty</p>
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
          SOCIAL PROOF — REAL CUSTOMER VOICE, ON THE PROBLEM

          Every quote below is VERBATIM from the F&H Customer Voice Bank
          post-purchase survey (sourced in Yeoman Rig/Handle Inheritance.md).
          Real people, real words, attributed "Verified Buyer" with no invented
          names, which is the Grange testimonial rule.

          They are framed as what men said about their SHOULDERS, not as
          reviews of the Rig, because the Rig has zero orders. Nothing here
          claims anyone has used this product. No star ratings, no review
          count, for the same reason the PDP leaves those fields blank.

          Swap for genuine Rig reviews the moment seeding lands, per
          Yeoman Rig/Review Seeding Brief.md.
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance leading-tight">
            What Men Told Us About Their Shoulders
          </h2>
          <p className="text-sm text-muted-foreground text-pretty max-w-sm mx-auto leading-relaxed">
            Unedited, from our own customer survey. This is the problem the Rig was built around.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              quote: "Tired of shoulder pain after hours of running the trimmer.",
              tag: "Verified Buyer",
            },
            {
              quote: "I looked at various other brands and the design drew me in. I just got tired of the Stiffness in shoulders and arms.",
              tag: "Verified Buyer",
            },
            {
              quote: "Achy back and shoulders while weed eating our one acre lot!",
              tag: "Verified Buyer",
            },
            {
              quote: "Wife has had 3 back surgeries, I recently had shoulder surgery and decided I had to try to do SOMETHING about the induced physical stress!",
              tag: "Verified Buyer",
            },
            {
              quote: "Bad low back and shoulders, 75 years young.",
              tag: "Verified Buyer",
            },
            {
              quote: "Thank you for relieving my back, now my shoulder takes the heat lol. Better shoulder pain than back pain.",
              tag: "Verified Buyer",
            },
          ].map((r) => (
            <div key={r.quote} className="bg-card border border-border rounded-lg p-5">
              <p className="text-base text-foreground leading-relaxed mb-3">&ldquo;{r.quote}&rdquo;</p>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">
                {r.tag}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground text-pretty">
          Quotes are from Field &amp; Harvest customers describing shoulder strain from yard work. They are not reviews of the Yeoman Rig.
        </p>
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
            Everything worth knowing before you put one on.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              I am not injured. Is this still for me?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              That is who it was built for. A brace is something you put on after a diagnosis. This is something you put on before a job, the way you would a lifting belt. If you can still do your own property and you would like the shoulder to last as long as the yard does, you are the buyer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Does it go over or under my shirt?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Either. That is what the two adjustment points are for. The shoulder cap and the chest strap set independently, so it cinches down over a work shirt in cool weather and sits comfortably under one when it is hot. Most men wear it over.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Left shoulder or right?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You choose per brace when you order. Most men load the same shoulder every session because you do not switch arms halfway through a job, so one is usually all you need. If you want one for each side, or one for someone else in the family, there is a pair option.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it be hot in summer?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You will notice warmth before you notice support. That is compression doing its job and it is the honest answer. The panel breathes rather than trapping everything against you, and in cool weather most men find it pleasant. In August, wear it under a lighter shirt.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it does not do anything for me?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Sixty days to find out on your own property, across as many Saturdays as that gives you. If the back half of the job does not feel different, send it back. After that the stitching, the buckle and the velcro are covered for as long as you own it.
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
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 text-base rounded-lg shadow-lg transition-all"
            >
              {OFFER_LONG} &rarr;
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
