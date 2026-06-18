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
import { InpAsset } from "@/components/inp-asset"
import { getInpImage } from "@/lib/inp-images"

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
        <InpAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          EDITORIAL SECTION STRIP — frames the piece as a Field Note
          ============================================ */}
      <div className="border-y border-border/60 bg-card py-3 px-4">
        <div className="max-w-3xl mx-auto text-center text-[10px] md:text-xs text-muted-foreground">
          <span className="uppercase tracking-[0.2em] font-semibold">A Field Note</span>
          <span className="mx-3 text-border">·</span>
          <span className="italic font-display text-sm md:text-base">On the back pain from weed eating</span>
        </div>
      </div>

      {/* ============================================
          HERO — Left-aligned headline + dek + image placeholder
          ============================================ */}
      <article className="max-w-2xl mx-auto px-4 pt-12 pb-4 md:pt-16 md:pb-6">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-foreground text-balance mb-7 tracking-tight">
          The Back Pain From Weed Eating You Have Learned To Live With{" "}
          <em className="italic font-medium text-[#C86F4C]">Might Not Have To Be Permanent.</em>
        </h1>

        <p className="font-display text-xl md:text-2xl text-foreground/75 leading-[1.4] italic">
          You have been told it is age. You have been told it is wear. You have been told it is what 60 feels like. None of those things are the cause.
        </p>
      </article>

      {/* ============================================
          EDITORIAL HERO IMAGE — swap via inp-images.ts (editorialHero)
          ============================================ */}
      <div className="max-w-2xl mx-auto px-4 pt-6 pb-2">
        {getInpImage("editorialHero") ? (
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-muted shadow-md">
            <InpAsset name="editorialHero" alt="Editorial hero" className="w-full h-full object-cover" fallbackClassName="" />
          </div>
        ) : (
          <div className="relative w-full aspect-[16/10] rounded-lg border-2 border-dashed border-border bg-muted/40 flex items-center justify-center px-6">
            <div className="text-center">
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-2">
                Editorial Hero Image
              </p>
              <p className="text-xs md:text-sm italic text-muted-foreground font-display">
                Swap via <span className="font-mono not-italic">lib/inp-images.ts</span> &middot; <span className="font-mono not-italic">editorialHero</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ============================================
          EDITORIAL BODY — ~410 words, paced for a reader
          (Stage 2 register, brand-POV UMS intro, pull-quote, kill line)
          ============================================ */}
      <article className="max-w-2xl mx-auto px-4 pb-16">

        {/* Editorial divider */}
        <div className="flex items-center justify-center gap-3 py-12">
          <span className="h-px w-12 bg-border" aria-hidden="true" />
          <span className="text-[#C86F4C] text-xs">&#10047;</span>
          <span className="h-px w-12 bg-border" aria-hidden="true" />
        </div>

        <div className="space-y-5 text-[17px] md:text-lg leading-[1.8] text-foreground/85">

          {/* Opening recognition — broken into 3 blocks */}
          <p>
            Most homeowners over 50 who still do their own yard finish the front, walk inside, and tell their wife the back is <em>fine</em>.
          </p>

          <p>
            By Sunday morning the lower back is locked. By Monday the heating pad is back out.
          </p>

          <p>
            By the next weekend, the pain has become something you plan around instead of something you treat.
          </p>

          {/* "Not what you think" — broken into 2 blocks */}
          <p>
            That pain is not aging. It is not weakness. It is not the price of refusing to hire someone.
          </p>

          <p>
            It is the part of the trimmer nobody has ever told you to look at &mdash; <span className="font-semibold text-foreground">the factory grip.</span>
          </p>

          {/* The mechanism — broken into 3 blocks of 2 sentences */}
          <p>
            The grip on every standard string trimmer in America is sized for an average man to hold at his hip while leaning forward to see the cut line. That lean is what happens to your spine for 20, 30, 40 minutes a week.
          </p>

          <p>
            A 30 degree forward bend at the lumbar your body was never built to repeat. After enough years your back stops absorbing it cleanly.
          </p>

          <p>
            The pain that follows is not your spine breaking down. It is your spine telling you it has been asked to do something it was never built to do, every Saturday, for as long as you have owned the trimmer.
          </p>

          {/* Pull-quote moment — the reframe */}
          <blockquote className="my-14 text-center">
            <p className="font-display text-3xl md:text-4xl font-semibold italic text-foreground leading-[1.15] text-balance">
              It is not your back. It is the bend.
            </p>
          </blockquote>

          {/* Failed solutions — now survey-anchored (ibuprofen / lumbar belt /
              heating pad / chiropractor — from the 2026-05-31 "drawer of
              palliatives" survey signal). Broken into 4 blocks. */}
          <p>
            Every solution sold for it treats the back, not the bend.
          </p>

          <p>
            The ibuprofen dulls the signal. The lumbar belt supports your spine while it bends the wrong way.
          </p>

          <p>
            The heating pad loosens what the bend will tighten right back up on Saturday. The chiropractor adjusts it after it has bent the wrong way.
          </p>

          <p>
            None of them stop the bending. So the pain comes back. And after enough of that, you stop expecting a fix.
          </p>

          {/* Brand POV — "we built it" — broken into 3 blocks */}
          <p>
            <span className="font-semibold text-foreground">That is why we built the Yeoman Handle.</span>
          </p>

          <p>
            We had spent years watching homeowners cycle through every belt, every heating pad, every chiropractor visit, every bottle of ibuprofen, and none of them stopped the bending.
          </p>

          <p>
            They were all built to help the body survive it. So we built one that does not let it happen in the first place.
          </p>

          {/* Mechanism — broken into 3 blocks */}
          <p>
            The Yeoman clamps onto the shaft of the trimmer you already own and raises the grip to chest height.
          </p>

          <p>
            Both hands meet where they want to meet. Your spine stays vertical. The trimmer still trims.
          </p>

          <p>
            <span className="font-semibold text-foreground">The bend does not happen.</span>
          </p>

          {/* Kill line */}
          <p className="font-display text-xl md:text-2xl italic text-foreground leading-snug pt-6 text-balance">
            Every other solution made you better at bending. This one stops you from bending in the first place.
          </p>

        </div>

        {/* Transition to the listicle — larger, serif, presence */}
        <div className="flex items-center justify-center gap-3 pt-16 pb-2">
          <span className="h-px w-12 bg-border" aria-hidden="true" />
          <span className="text-[#C86F4C] text-xs">&#10047;</span>
          <span className="h-px w-12 bg-border" aria-hidden="true" />
        </div>
        <p className="text-lg md:text-xl text-foreground/85 italic text-center font-display leading-snug pt-6">
          Below &mdash; five things homeowners who have made the switch are reporting after their first month.
        </p>
      </article>

      {/* ============================================
          LISTICLE — 5 reasons (shared body from /the-trimmer-switch)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8 space-y-10">

        {/* Reason 1 — Back-saving / The Plumb-Set */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Back-Saving
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Stop hunching over your trimmer for the rest of summer
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Plumb-Set&trade; Geometry
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <InpAsset name="reason1Image" alt="Standing upright with the Yeoman Handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Standard trimmer handles force you forward over the head. Twenty minutes in, your lower back is locked. The Plumb-Set&trade;, our fixed grip angle, lifts your off-hand 9 inches above the factory loop so your spine stays plumb and both hands share the load. <span className="font-bold text-foreground">You stand upright the whole pass. No hunch, no ache.</span>
          </p>
        </div>

        {/* Reason 2 — Durability / Hold-Fast */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Built To Last
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Built to outlast the trimmer it bolts to
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Hold-Fast&trade; Bracket
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <InpAsset name="reason2Image" alt="The Hold-Fast bracket and aluminum-alloy shaft" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap aftermarket clamps are thin stamped steel. They flex under torque and slip after a few sessions. The Hold-Fast&trade; is reinforced steel with a dual-contact pad that grips the shaft on two opposite faces. Aluminum-alloy build. Soft-touch grip. <span className="font-bold text-foreground">Built once, used for years.</span>
          </p>
        </div>

        {/* Reason 3 — Easy install */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Three-Minute Install
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Three minutes with an allen key and you&apos;re done
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            No drilling. No cutting. No zip ties.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <InpAsset name="reason3Image" alt="Installing the Yeoman in three minutes" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Hold-Fast&trade; slides onto your existing trimmer shaft and locks tight with one bolt. The included allen key does the work. You don&apos;t even have to remove the factory handle. <span className="font-bold text-foreground">Standing upright by the time the coffee&apos;s cool.</span>
          </p>
        </div>

        {/* Reason 4 — Adjustable */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Dials In To You
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Six feet tall or five-foot-six. It dials in to you.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Slide-and-set position, universal shaft fit
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <InpAsset name="reason4Image" alt="Adjustable handle position for any height" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Hold-Fast&trade; bracket slides up or down the shaft so you set the grip exactly where your off-hand falls at chest height. Fits 26mm and 28mm shafts, which covers STIHL, Echo, Husqvarna, Ryobi, EGO, BLACK+DECKER, gas or battery. <span className="font-bold text-foreground">One handle. Two people in the house can both use it.</span>
          </p>
        </div>

        {/* Reason 5 — Guarantee */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Risk-Free
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            60-day trial. Lifetime warranty. We cover return shipping.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Switch with complete confidence
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <InpAsset name="reason5Image" alt="60-day money-back and lifetime warranty" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Bolt it onto your trimmer. Work a full Saturday. If your back doesn&apos;t feel the difference, full refund. We cover return shipping. After that it&apos;s covered for life: bracket wears, grip separates, shaft bends under normal use, we replace it. <span className="font-bold text-foreground">The last trimmer handle you&apos;ll buy.</span>
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
            The Handle Homeowners Are Bolting Onto Their Trimmers
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One handle. Two free yardwork guides. A lifetime warranty. Make the switch your back will thank you for.
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
              <InpAsset name={activeImage} alt="The Yeoman Handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
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
                  <InpAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <InpAsset name="benefitIcon1" alt="Posture" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Plumb-Set&trade; lifts your off-hand to chest height</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <InpAsset name="benefitIcon2" alt="Clamp" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Hold-Fast&trade; bracket grips and holds, every pass</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <InpAsset name="benefitIcon3" alt="Install" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Three-minute install on the trimmer you already own</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <InpAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">60-day trial + lifetime warranty, switch with confidence</p>
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
          REVIEWS — self-purchase / utility framing
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Homeowners Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800 reviews</p>
        </div>

        <div className="space-y-4">

          {/* Review 1 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Best $39 I&apos;ve spent on yard equipment in years.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;ve been trimming the same yard for 18 years and never thought my back was the problem until this thing showed up. Bolted on my old Echo in under five minutes. First Saturday I finished the whole yard upright and walked away without wincing. I keep wondering why nobody made this years ago.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Mark T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Tried two of these from other brands. This one actually stayed put.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              The other two slipped or backed off the shaft within a week. The Hold-Fast bracket on this one has stayed exactly where I set it through three months of regular use. The aluminum is light enough I don&apos;t notice it&apos;s on the shaft. Quality is obvious the second you pick it up.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Frank S.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Husband used it once. Now I use it too.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              He&apos;s six-foot-two and the factory handle had him bent over every weekend. He slid this up the shaft until it sat at his chest, locked it down, and used it that afternoon. Then I tried it. I&apos;m 5&apos;6&quot;, slid it down to my chest height, fits perfectly. Same handle, same trimmer, two different people.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Emily W.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My doctor said stop trimming. This handle let me keep going.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              After my second back episode my doctor told me to give up the trimmer. I&apos;m 67 and I refuse to hire someone to do my own yard. Came across this online, bolted it on the Stihl, and finished the front yard last Saturday standing up the whole time. Best $39 I&apos;ve spent on the yard since the trimmer itself.
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
            Everything you need to know before you make the switch.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it fit my trimmer?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If you have a string trimmer, weed eater, or weed wacker with a straight or curved shaft and a loop handle, it fits. The Hold-Fast&trade; bracket adjusts for 26mm and 28mm shafts, the standard range covering most STIHL, Echo, Husqvarna, Ryobi, EGO, Greenworks, and BLACK+DECKER models, gas or battery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How hard is it to install?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Three minutes with the included allen key. Slide the Yeoman onto the shaft at chest height, tighten the bolt. No drilling, no cutting, no zip ties. You don&apos;t even have to remove the factory handle if you don&apos;t want to. If you can change a battery, you can install this.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How is this different from the cheap handles on Amazon?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Two things: build and geometry. The Hold-Fast&trade; bracket grips the shaft on two opposite faces with reinforced steel. The $15 versions use a single contact point that slips after a few uses. The Plumb-Set&trade; is a fixed 9-inch lift at the exact angle where your spine stays plumb. Cheap versions bolt on wherever and let you figure out the rest. You&apos;re paying for the engineering, not a stamped tube with foam.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it doesn&apos;t save my back?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You have 60 days to try it on your own yard. If your back doesn&apos;t feel the difference, full refund. We cover return shipping. No restocking fee, no questions. You&apos;re not risking a thing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What does the lifetime warranty cover?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If the Hold-Fast&trade; bracket wears, the grip separates, or the aluminum shaft bends under normal use, we replace it. No fine print. No expiration. We built this to be the last trimmer handle you buy.
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
