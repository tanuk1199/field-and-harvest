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
import { WtsAsset } from "@/components/wts-asset"

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
        <WtsAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO — Task-aversion framing
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <WtsAsset name="heroImage" alt="If you hate weed eating, this is why" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save Up To 43% + 2 Free Yardwork Guides</span>
        </div>

        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            If You Hate Weed Eating, <span className="text-[#C86F4C]">This Is Why.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            It is not the heat. It is not the noise. It is not because you are out of shape. The reason every Saturday with the weed eater feels miserable comes down to one part of the tool that nobody has fixed in fifty years. Here are 3 reasons trimming sucks, and the 3-minute bolt-on that ends all of them.
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
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-3">The Reasons It Sucks</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance tracking-tight">
          3 Reasons The Weed Eater <span className="text-[#C86F4C]">Wrecks Your Saturday</span>
        </h2>
      </section>

      {/* ============================================
          3 PROBLEMS — Task aversion (broader than just back pain)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8 space-y-10">

        {/* Problem 01 — The bend that breaks Saturday */}
        <div className="bg-card rounded-2xl p-8 border-2 border-[#C86F4C]/20 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-[#C86F4C]/10 text-[#C86F4C]">
              The Bend
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            You are bent forward at the waist the entire pass.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            45 minutes hunched. By the end, you hate the yard.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WtsAsset name="problem1Image" alt="Bent forward at the waist the entire pass" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The factory grip sits at belt-buckle height when the cutter head is on the ground. To control the trimmer you bend 45 to 60 degrees forward for the entire 30 to 45 minute pass. <span className="font-bold text-foreground">By minute 20 your lower back is talking. By minute 35 you stop and stretch. By the time you walk inside you are dreading next Saturday already.</span> It is not the work. It is the position the tool puts you in.
          </p>
        </div>

        {/* Problem 02 — The hand-killer grip */}
        <div className="bg-card rounded-2xl p-8 border-2 border-[#C86F4C]/20 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-[#C86F4C]/10 text-[#C86F4C]">
              The Grip
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Your forearm is done before the yard is.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            One hand cramps. The other takes over. Then it cramps too.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WtsAsset name="problem2Image" alt="The round grip kills your forearm" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            A round plastic loop does not hold itself. Your fingers do all the work. By minute 35 your forearm is shot, so you switch hands. The other one fails ten minutes later. Now your shoulders are doing what your hands cannot, and they lock up too. <span className="font-bold text-foreground">This is why Saturday morning starts fine and ends with you sitting on the porch wishing the yard would just be done.</span> One bad grip shape, your entire upper body paying for it.
          </p>
        </div>

        {/* Problem 03 — The endless passes */}
        <div className="bg-card rounded-2xl p-8 border-2 border-[#C86F4C]/20 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-[#C86F4C]/10 text-[#C86F4C]">
              The Time
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            It takes three times longer than it should. Every single Saturday.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Limited reach. More passes. More steps. More misery.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WtsAsset name="problem3Image" alt="Endless passes through the same stretch of yard" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Factory handles do not extend forward. Your swing arc is short, your reach is short, and you take three times the passes through the same stretch of yard. Every pass is another 30 seconds of bending, gripping, and stepping. <span className="font-bold text-foreground">The 30-minute yard becomes a 90-minute one. Your Saturday becomes the yard. Your Sunday becomes recovering from the yard.</span> It is not the size of the property. It is the geometry of the tool making you do triple the work.
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
          Bolts onto the trimmer you already own. No drilling, no cutting. Three fixes, one bracket. Saturday becomes tolerable.
        </p>
      </section>

      {/* ============================================
          3 SOLUTIONS
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8 space-y-10">

        {/* Solution 01 — Plumb-Set ends the bend */}
        <div className="bg-card rounded-2xl p-8 border-2 border-primary/30 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-primary/10 text-primary">
              Fix For #01
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            The Plumb-Set&trade; lifts the grip 9 inches. The bend is gone.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-primary mb-6">
            Stand upright the entire pass.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WtsAsset name="solution1Image" alt="The Plumb-Set lifts the grip 9 inches" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Yeoman raises the off-hand grip exactly 9 inches above where the factory loop sits. That puts the grip at chest height for most men, which means you stand fully upright instead of bending 45 to 60 degrees forward. <span className="font-bold text-foreground">No hunch. No stretch breaks. No dread building over the next pass.</span> The single biggest reason trimming sucks just got eliminated.
          </p>
        </div>

        {/* Solution 02 — Hold-Fast saves the forearm */}
        <div className="bg-card rounded-2xl p-8 border-2 border-primary/30 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-primary/10 text-primary">
              Fix For #02
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            The Hold-Fast&trade; oval grip drops required force by 40%.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-primary mb-6">
            Your hands stay fresh. Your shoulders stay down.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WtsAsset name="solution2Image" alt="The Hold-Fast oval grip cuts required force" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Yeoman&apos;s oval cross-section grip means your hand relaxes into it instead of clenching to hold a round shape. Required grip force drops roughly 40 percent. Your forearm stays fresh through minute 35, minute 50, the whole job. <span className="font-bold text-foreground">No more hand-switching. No more shoulder lock-up. No more sitting on the porch halfway through.</span> One fix kills the chain reaction that ruined your last hundred Saturdays.
          </p>
        </div>

        {/* Solution 03 — Forward extension cuts the time */}
        <div className="bg-card rounded-2xl p-8 border-2 border-primary/30 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-primary/10 text-primary">
              Fix For #03
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            12 to 14 inch forward extension. Yard done in one pass.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-primary mb-6">
            More reach per swing. Less time on the job.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WtsAsset name="solution3Image" alt="Forward extension covers more ground per swing" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Yeoman extends the grip 12 to 14 inches forward of the factory loop. Each swing reaches further so you cover more ground without taking another step. Fewer passes, fewer repositions, fewer stretches of misery. <span className="font-bold text-foreground">The 90-minute yard becomes 35. Saturday morning ends with a coffee on the porch instead of ibuprofen and a heating pad.</span> The yard is the same. The trimmer is the same. The handle is what changed.
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
            We cover return shipping if it does not fix it.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WtsAsset name="guaranteeImage" alt="60-day money-back and lifetime warranty" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Bolt it on. Work a full Saturday. If you still hate weed eating by Sunday morning, full refund and we cover return shipping. After that it is covered for life: bracket wears, grip separates, shaft bends under normal use, we replace it. <span className="font-bold text-foreground">The last trimmer handle you&apos;ll buy.</span>
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
            The Handle That Made 20,000 Trimmer Owners Stop Dreading Saturday
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
              <WtsAsset name={activeImage} alt="The Yeoman Handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
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
                  <WtsAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <WtsAsset name="benefitIcon1" alt="Posture" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">9-inch grip lift ends the bend</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <WtsAsset name="benefitIcon2" alt="Grip" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Oval grip cuts hand force by ~40%</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <WtsAsset name="benefitIcon3" alt="Reach" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">12-14&Prime; forward extension, fewer passes</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <WtsAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
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
          REVIEWS — dread → relief framing (TA-CF specific)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            From Men Who Stopped Dreading Saturday
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800 reviews</p>
        </div>

        <div className="space-y-4">

          {/* Review 1 — hate confession turned around */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I used to dread Saturday morning. Last weekend I forgot to hate it.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Honest truth: I have hated weed eating my whole adult life. The bending, the hand cramps, the never-ending passes. Bolted on the Yeoman three weeks ago and Saturday morning I knocked the whole yard out in 40 minutes and walked inside actually fine. First time I can remember not being annoyed by my own lawn.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Mark T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — younger demo (46 in survey) */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;46 years old. Six hours of trimming crippled me. Not anymore.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Three acres, mostly fenced. I was spending six hours every other Saturday on the trimmer and it was wrecking me for days. At 46 I know it is not going to get easier. Bought this and ran the whole property in about two-thirds the time, standing upright the whole job. Saturday is mine again.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Daniel R.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 — wife who trims */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I help my husband by trimming while he mows. I hated it. Not anymore.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              We split the yard work. He mows, I weed eat. My arms and back were always shot by the time we finished. Saw the explanation of why and ordered it the same day. He installed it for me and I did the side yard standing straight up with both hands relaxed. Whole job done in 25 minutes and I was not exhausted. I will never go back.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Sarah J.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — older operator, still active */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;67 and I do my own yard. The trimmer was the part I dreaded most.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Mowing I do not mind. Edging I do not mind. The trimmer was the part of Saturday I would put off until the last possible hour because I knew how it would end. Bolted on the Yeoman, did the whole yard upright, and walked inside without touching my back. I am 67 and I have not felt this good after the yard in a decade.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Robert P.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ — task-aversion specific
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
              I just hate yard work. Is this really going to change that?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You probably do not hate yard work. You hate the specific 30 to 45 minutes of bending, gripping, and stepping that the factory trimmer handle puts you through. The Yeoman fixes the three biggest reasons that part of yard work feels miserable. It does not turn yard work into a hobby, but it does make trimming the part of Saturday you stop dreading. There is a 60-day money-back trial so the test costs you nothing.
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
              Three minutes with the included allen key. Slide the Yeoman onto the shaft at chest height, tighten the bolt. No drilling, no cutting, no zip ties. You do not even have to remove the factory handle if you do not want to.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              I am not even that sore. Is this still for me?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Yes. Most buyers are not chronically injured. They just hate the experience of weed eating and feel beat-up after every Saturday. The Yeoman fixes the experience before the wear-and-tear adds up. If you are doing your own yard at 35, 45, 55, this is the difference between Saturday wrecking you and Saturday being just another day on the calendar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it does not actually change how I feel about trimming?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You have 60 days to try it on your own yard. If you still hate weed eating by Sunday morning, full refund. We cover return shipping. About 3 percent of buyers send theirs back. If you are in that 3 percent, the refund is automatic. No restocking fee.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is this just another cheap aftermarket handle?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              No. The Hold-Fast&trade; bracket is reinforced steel with a dual-contact pad that grips the shaft on two opposite faces. Cheap aftermarket handles use thin stamped steel that flexes under torque and slips after a few sessions. The Plumb-Set&trade; is a fixed 9-inch lift at the exact angle where your spine stays plumb. You are paying for engineered geometry, not a stamped tube with foam.
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
