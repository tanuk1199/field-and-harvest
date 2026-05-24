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
import { TmhAsset } from "@/components/tmh-asset"

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
        <TmhAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO — Identity / Tall Men framing
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <TmhAsset name="heroImage" alt="The Yeoman Handle attached to a string trimmer" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save Up To 43% + 2 Free Yardwork Guides</span>
        </div>

        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons This Weed Wacker Handle Was <span className="text-[#C86F4C]">Built For Tall Men</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Factory weed wacker handles are calibrated for the 5&apos;9 average male. Every inch above that, you bend further and you hurt more. The Yeoman bolts onto the trimmer you already own and lifts the grip 9 inches so a 6&apos;2 operator stands as straight as the design was built for.
          </p>
        </div>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Stand Upright On Saturday &rarr;
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
          LISTICLE — 6 reasons (tall-men identity framing)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 — Identity / cause */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Built For Someone Else
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Your weed wacker wasn&apos;t built for your height
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The 5&apos;9 average problem
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TmhAsset name="reason1Image" alt="A tall operator using a factory weed wacker handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Every factory weed wacker handle, STIHL, Echo, Husqvarna, EGO, is calibrated for the average male height of 5&apos;9. If you&apos;re 6&apos;1 or 6&apos;4, the grip sits below where your off-hand naturally falls. You compensate by bending further forward. <span className="font-bold text-foreground">The trimmer industry has been building handles for someone else.</span>
          </p>
        </div>

        {/* Reason 2 — Stop bending */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Stop Bending Six Extra Inches
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Stand as straight as a 5&apos;9 guy does
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Plumb-Set&trade; Geometry
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TmhAsset name="reason2Image" alt="The Yeoman Handle lifting the grip nine inches" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Plumb-Set&trade; raises the off-hand grip 9 inches above the factory loop. That extra 9 inches is the difference between a 5&apos;9 operator standing plumb and a 6&apos;2 operator bending 6 extra inches forward. <span className="font-bold text-foreground">Taller men get the most relief because their bend was the deepest to begin with.</span>
          </p>
        </div>

        {/* Reason 3 — Reach extension */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Built For Your Reach
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Reach extension built for longer arms
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            12 to 14 inch forward extension
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TmhAsset name="reason3Image" alt="The Yeoman extends the grip forward 12 to 14 inches" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Tall guys have a wingspan to match. Factory handles bunch your arms into a small triangle close to the body. The Yeoman extends the grip 12 to 14 inches forward, opening up the stance so your arms swing through their natural range. <span className="font-bold text-foreground">Less crouching, more cutting.</span>
          </p>
        </div>

        {/* Reason 4 — Adjustability */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Dials In To You
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Dials in from 5&apos;8 to 6&apos;5 with one bolt
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Slide-and-set position, universal shaft fit
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TmhAsset name="reason4Image" alt="The Yeoman bracket slides along the shaft for any height" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Hold-Fast&trade; bracket slides up or down the shaft, locks with one bolt. Set it at YOUR chest height, not the factory&apos;s assumed average. Fits 26mm and 28mm shafts, which covers STIHL, Echo, Husqvarna, Ryobi, EGO, BLACK+DECKER. <span className="font-bold text-foreground">One handle. Tall guys at 6&apos;4 and average-height guys at 5&apos;9 both dial it in.</span>
          </p>
        </div>

        {/* Reason 5 — Build / durability */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Built To Last
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Built to outlast the trimmer it bolts to
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Hold-Fast&trade; Bracket
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TmhAsset name="reason5Image" alt="The Hold-Fast bracket and aluminum-alloy shaft" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap aftermarket clamps are thin stamped steel. They flex under torque and slip after a few sessions. The Hold-Fast&trade; is reinforced steel with a dual-contact pad that grips the shaft on two opposite faces. Aluminum-alloy build, soft-touch grip. <span className="font-bold text-foreground">Built once, used for years.</span>
          </p>
        </div>

        {/* Reason 6 — Guarantee */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Risk-Free
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            60-day trial. Lifetime warranty. We cover return shipping.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            One Saturday to know
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TmhAsset name="reason6Image" alt="60-day money-back and lifetime warranty" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Bolt it on. Work a full Saturday. If you don&apos;t stand straighter and finish without the lower-back lock, full refund. We cover return shipping. After that it&apos;s covered for life: bracket wears, grip separates, shaft bends under normal use, we replace it. <span className="font-bold text-foreground">The last trimmer handle you&apos;ll buy.</span>
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
            The Trimmer Handle Tall Men Are Bolting On
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One handle. Two free yardwork guides. A lifetime warranty. Built for the height the factory forgot.
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
              <TmhAsset name={activeImage} alt="The Yeoman Handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
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
                  <TmhAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TmhAsset name="benefitIcon1" alt="Height" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">9-inch grip lift for taller operators</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TmhAsset name="benefitIcon2" alt="Posture" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Plumb-Set&trade; keeps your spine plumb</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TmhAsset name="benefitIcon3" alt="Adjust" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Dials in from 5&apos;8 to 6&apos;5 with one bolt</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TmhAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
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
          REVIEWS — tall-men identity framing
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Tall Operators Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800 reviews</p>
        </div>

        <div className="space-y-4">

          {/* Review 1 — 6'4 tall guy */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;6&apos;4 and I finally don&apos;t feel like the trimmer is fighting me.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Every weed wacker I&apos;ve owned felt three inches too short. I&apos;d finish a 45-minute trim with my lower back locked. Slid the Yeoman up the shaft to where my hand actually rests at chest height. First Saturday I stayed upright the whole pass. Should have bought one ten years ago.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Mark T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — 6'2 durability + fit */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Tried two cheap tall-guy handles. This one actually stayed where I set it.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;m 6&apos;2 and have been buying aftermarket trimmer handles for years. The cheap ones slip down the shaft within a few sessions, which is the whole point of the bracket if you ask me. The Hold-Fast bracket has stayed exactly where I locked it for three months. Aluminum is light too.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Frank S.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 — mixed-height household */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Husband used it once. Now I use it too.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              He&apos;s six-foot-two and the factory handle had him bent over every weekend. He slid this up the shaft until it sat at his chest, locked it down. Then I tried it. I&apos;m 5&apos;6, slid it down to my chest height, fits perfectly. Same handle, same trimmer, two different heights.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Emily W.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — older tall guy */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;6&apos;3 and 67 years old. My doctor said stop trimming. This handle let me keep going.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              At my height the factory handle is brutal. I&apos;d finish a yard hunched over and pay for it on Monday. Bolted this on, set it where it should be for someone my size, and went front-to-back without a single break. Best $39 I&apos;ve spent on the yard since the trimmer itself.
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
              How tall do I have to be for this to help?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The benefit scales with your height. Anyone above the 5&apos;9 average male height bends further at the factory grip and gets more relief from the Plumb-Set lift. Men 6&apos;0 and up notice the biggest difference. That said, the bracket dials in from 5&apos;8 to 6&apos;5, so shorter operators can use it too at a different setting.
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
              How hard is it to install?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Three minutes with the included allen key. Slide the Yeoman onto the shaft at your chest height, tighten the bolt. No drilling, no cutting, no zip ties. You don&apos;t even have to remove the factory handle if you don&apos;t want to.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How is this different from a longer-shaft trimmer?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              A longer-shaft trimmer moves the cutter head further away but the GRIP stays in the same compromised position. The Yeoman doesn&apos;t touch the shaft length, it fixes the grip geometry. You keep the trimmer you already own and gain 9 inches of vertical grip lift where your off-hand actually sits.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if I&apos;m 6&apos;3 and it still doesn&apos;t help?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You have 60 days to try it on your own yard. If it doesn&apos;t stand you up straighter than the factory handle did, full refund. We cover return shipping. No restocking fee, no questions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
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
