"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PabAsset } from "@/components/pab-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"

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
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">Save Up To 43% Off</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 Free Yardwork Guides</span>
        </p>
      </div>

      {/* ============================================
          HEADER — Logo
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <PabAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO — Problem-aware framing (cause-naming)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <PabAsset name="heroImage" alt="The Yeoman Handle attached to a string trimmer" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save Up To 43% + 2 Free Yardwork Guides</span>
        </div>

        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            The Standard Handle On Your Weed Wacker <span className="text-[#C86F4C]">Is Wrecking Your Back</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Every Saturday after weed eating, your lower back locks up by Sunday morning. Most men blame the trimming. The trimming isn&apos;t the problem. The factory handle is. Here are 3 reasons it&apos;s wrecking your back and the 3-minute bolt-on that fixes all of them.
          </p>
        </div>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            See The Fix &rarr;
          </Button>
        </a>

        <div className="mt-5 text-center">
          <div className="flex justify-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-foreground font-medium">
            4.8 stars <span className="text-muted-foreground mx-1">&bull;</span> 800 reviews <span className="text-muted-foreground mx-1">&bull;</span> 20,000 trimmers upgraded
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION DIVIDER — Problem section opener
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-2 text-center">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-3">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance tracking-tight">
          3 Reasons Your Weed Wacker Is <span className="text-[#C86F4C]">Wrecking Your Back</span>
        </h2>
      </section>

      {/* ============================================
          3 PROBLEMS (cause-naming, no solution yet)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8 space-y-10">

        {/* Problem 01 — Grip too low */}
        <div className="bg-card rounded-2xl p-8 border-2 border-[#C86F4C]/20 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-[#C86F4C]/10 text-[#C86F4C]">
              The Cause
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            The grip sits too low. You bend 45 degrees forward to control it.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Sustained spinal flexion
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <PabAsset name="problem1Image" alt="The factory handle forces forward bend" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The factory handle is mounted close to the shaft, which puts the grip somewhere around belt-buckle height when the cutter head is at the ground. To keep the trimmer working, you bend 45 to 60 degrees forward for the entire pass. Your lower back muscles hold that bend for the full 30 to 45 minutes. <span className="font-bold text-foreground">That sustained flexion is what locks your lumbar by Sunday morning.</span> It is not age. It is the position the trimmer puts you in.
          </p>
        </div>

        {/* Problem 02 — Round grip wears out forearm */}
        <div className="bg-card rounded-2xl p-8 border-2 border-[#C86F4C]/20 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-[#C86F4C]/10 text-[#C86F4C]">
              The Cause
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            The round grip exhausts your hand. Your shoulders take the load.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Two regions of pain from one design flaw
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <PabAsset name="problem2Image" alt="Round grip forces your hand to do all the work" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            A round plastic grip does not hold itself. Your fingers do all the work. By minute 35 your forearm is done, and once your grip goes, the rest of your upper body compensates. Shoulders tense, traps lock, upper back stiffens. <span className="font-bold text-foreground">One design flaw, two regions of pain.</span> You blame the second yard of the day. It is the grip shape that started the chain reaction.
          </p>
        </div>

        {/* Problem 03 — Limited reach compounds the load */}
        <div className="bg-card rounded-2xl p-8 border-2 border-[#C86F4C]/20 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-[#C86F4C]/10 text-[#C86F4C]">
              The Cause
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Limited reach forces more passes. Every pass adds more bend.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Compound spinal load across the session
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <PabAsset name="problem3Image" alt="Limited reach means more passes and more steps" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Factory handles do not extend forward, so when you need to reach further, you bend deeper. And the limited swing radius means you take three times the passes through the same stretch of yard. Each pass adds another 30 to 60 seconds of spinal flexion. <span className="font-bold text-foreground">Multiply that across a full Saturday and the damage compounds.</span> It is not the trimming. It is the geometry forcing you to trim badly.
          </p>
        </div>
      </section>

      {/* ============================================
          TRANSITION — Solution section opener
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-2 text-center border-t border-border mt-8">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-3">The Fix</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance tracking-tight">
          The Yeoman Handle Fixes All <span className="text-[#C86F4C]">3 Problems In 3 Minutes</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
          Bolts onto the trimmer you already own. No drilling, no cutting. Three fixes, one bracket.
        </p>
      </section>

      {/* ============================================
          3 SOLUTIONS (Yeoman fixes — paired to the 3 problems)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8 space-y-10">

        {/* Solution 01 — Plumb-Set lifts grip 9 inches */}
        <div className="bg-card rounded-2xl p-8 border-2 border-primary/30 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-primary/10 text-primary">
              Fix For #01
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            The Plumb-Set&trade; lifts the grip 9 inches. Your spine returns to plumb.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-primary mb-6">
            Stand straight the entire pass
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <PabAsset name="solution1Image" alt="The Plumb-Set lifts the grip 9 inches" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Yeoman raises the off-hand grip exactly 9 inches above where the factory loop sits. That puts the grip at chest height for most men, which means your spine stays plumb instead of bending 45 to 60 degrees forward. <span className="font-bold text-foreground">No flexion, no sustained load, no Sunday-morning lockup.</span> Your lower back stops paying the price for the trimmer&apos;s bad geometry.
          </p>
        </div>

        {/* Solution 02 — Hold-Fast cuts grip force 40% */}
        <div className="bg-card rounded-2xl p-8 border-2 border-primary/30 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-primary/10 text-primary">
              Fix For #02
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            The Hold-Fast&trade; oval grip cuts required force by 40%
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-primary mb-6">
            Your forearm stays fresh. Your shoulders stay down.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <PabAsset name="solution2Image" alt="The Hold-Fast oval grip distributes load" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Yeoman&apos;s oval cross-section grip means your hand can relax into it instead of clenching to hold a round shape. Required grip force drops roughly 40 percent. Your forearm stays fresh through minute 35, minute 50, the whole job. <span className="font-bold text-foreground">When your grip stops failing, your shoulders stop tensing, and the upper-back lock-up never starts.</span> One fix, two regions of pain prevented.
          </p>
        </div>

        {/* Solution 03 — Forward extension covers more ground */}
        <div className="bg-card rounded-2xl p-8 border-2 border-primary/30 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-primary/10 text-primary">
              Fix For #03
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            12 to 14 inch forward extension. Stand straight AND reach further.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-primary mb-6">
            Fewer passes. No compounding load.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <PabAsset name="solution3Image" alt="Forward extension covers more ground per swing" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Yeoman extends the grip 12 to 14 inches forward of the factory loop. Each swing reaches further so you cover more ground without taking another step. Fewer passes, fewer repositions, fewer cycles of bending and straightening. <span className="font-bold text-foreground">The compounding spinal load that builds across a full Saturday never gets a chance to build.</span> You finish the yard upright, in fewer passes, in less time.
          </p>
        </div>

        {/* Guarantee — closes the loop */}
        <div className="bg-card rounded-2xl p-8 border-2 border-primary/30 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-primary/10 text-primary">
              Risk-Free
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            60-day trial. Lifetime warranty. One Saturday to know.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-primary mb-6">
            We cover return shipping if it doesn&apos;t fix it.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <PabAsset name="guaranteeImage" alt="60-day money-back and lifetime warranty" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Bolt it on. Work a full Saturday. If your back still locks up by Sunday morning, full refund and we cover return shipping. After that it is covered for life: bracket wears, grip separates, shaft bends under normal use, we replace it. <span className="font-bold text-foreground">The last trimmer handle you&apos;ll buy.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SHOWCASE
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            Lifetime Warranty + 60-Day Guarantee
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            The Handle That Ended Sunday Morning Back Pain For 20,000 Trimmer Owners
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One handle. Two free yardwork guides. A lifetime warranty. Built to fix the design flaw the trimmer industry never bothered to.
          </p>

          <div className="mb-8 text-center">
            <div className="flex justify-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-foreground font-medium">
              4.8 stars <span className="text-muted-foreground mx-1.5">|</span> 800 reviews <span className="text-muted-foreground mx-1.5">|</span> 20,000 trimmers upgraded
            </p>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">Today: Save Up To 43% + 2 Free Yardwork Guides</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <PabAsset name={activeImage} alt="The Yeoman Handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
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
                  <PabAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <PabAsset name="benefitIcon1" alt="Posture" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">9-inch grip lift keeps your spine plumb</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <PabAsset name="benefitIcon2" alt="Grip" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Oval grip cuts hand force by ~40%</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <PabAsset name="benefitIcon3" alt="Reach" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">12-14&Prime; forward extension, fewer passes</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <PabAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">60-day trial + lifetime warranty</p>
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
          REVIEWS — problem-aware → solution-reveal framing
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            From Men Who Found The Cause
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800 reviews</p>
        </div>

        <div className="space-y-4">

          {/* Review 1 — discovery moment */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I never connected my back pain to the trimmer until I read this.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;ve been blaming my age for the Sunday morning back lock-up for at least five years. Read the breakdown of why the factory handle puts you in spinal flexion and it clicked. Bolted the Yeoman on the next Saturday. Worked the whole front yard upright. Sunday morning my back didn&apos;t bring it up. First time in years.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Mark T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — chiropractor pivot */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My chiropractor kept telling me it was &apos;just yard work pain.&apos; Wrong.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Three years of monthly chiro visits because my back was always locked up by Monday. Doc just kept saying it was age and yard work. Tried the Yeoman on a whim. Three weeks in, the back pain stopped recurring. Canceled the next two chiro appointments. The cause was never my back, it was the trimmer making me bend.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Frank S.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 — spousal recognition / cross-purchase */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Bought it for my husband. He&apos;d been complaining for years.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Every Saturday he&apos;d finish the yard hunched over and ice his back on the couch. Saw the breakdown of why the trimmer was the cause and it described him exactly. Ordered it. He installed it in four minutes and finished that afternoon&apos;s yard standing upright. Hasn&apos;t complained about Saturday yard work since.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Linda P.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — older operator with doctor advice */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;67 years old. Doctor said stop trimming. I didn&apos;t. This is why.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              After my second back episode my doctor told me to hire someone for the yard. I refused. Came across the breakdown of why factory handles cause the problem and figured I had nothing to lose. Bolted the Yeoman on the Stihl. Finished the front yard standing up the whole time. Doctor checked me out last visit and said whatever I was doing was working. Best $39 I&apos;ve spent on yard equipment ever.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Robert P.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
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
            Everything you need to know before you bolt it on.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How do I know my trimmer is causing the back pain?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Three signals: the pain is worst on Sunday morning after Saturday yard work, the pain is in your lower back (lumbar), and you find yourself bent over while trimming for 30+ minutes at a stretch. If all three are true, the factory handle position is almost certainly the cause. The Yeoman has a 60-day money-back trial, so the test costs you nothing to confirm.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it fit my trimmer?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If you have a string trimmer, weed eater, or weed wacker with a straight or curved shaft and a loop handle, it fits. The Hold-Fast&trade; bracket adjusts for 26mm and 28mm shafts, the standard range covering most STIHL, Echo, Husqvarna, Ryobi, EGO, Greenworks, and BLACK+DECKER models, gas or battery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How long does it take to install?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Three minutes with the included allen key. Slide the Yeoman onto the shaft at chest height, tighten the bolt. No drilling, no cutting, no zip ties. You don&apos;t even have to remove the factory handle if you don&apos;t want to.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it doesn&apos;t fix my back?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You have 60 days to try it on your own yard. If your back still locks up by Sunday morning, full refund. We cover return shipping. About 3 percent of buyers send theirs back, usually because their back pain has a cause unrelated to trimmer posture. If you&apos;re in that 3 percent, the refund is automatic. No restocking fee.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is this just another cheap aftermarket handle?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              No. The Hold-Fast&trade; bracket is reinforced steel with a dual-contact pad that grips the shaft on two opposite faces. Cheap aftermarket handles use thin stamped steel that flexes under torque and slips after a few sessions. The Plumb-Set&trade; is a fixed 9-inch lift at the exact angle where your spine stays plumb. You&apos;re paying for engineered geometry, not a stamped tube with foam.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What does the lifetime warranty cover?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If the Hold-Fast&trade; bracket wears, the grip separates, or the aluminum shaft bends under normal use, we replace it. No fine print. No expiration. Built to be the last trimmer handle you buy.
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
              Save Up To 43% + 2 Free Yardwork Guides &rarr;
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
