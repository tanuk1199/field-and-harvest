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
import { RwfdAsset } from "@/components/rwfd-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-rootwork-step-weeder"

const PRODUCT_THUMBS = ["productThumb1", "productThumb2", "productThumb3", "productThumb4"] as const
type GalleryKey = "productMain" | (typeof PRODUCT_THUMBS)[number]

export default function LandingPage() {
  const [activeImage, setActiveImage] = useState<GalleryKey>("productMain")

  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMOTIONAL BANNER — Top announcement bar
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">Save Up To 36% Off</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 Free Yardwork Guides</span>
        </p>
      </div>

      {/* ============================================
          FATHER'S DAY BANNER — Holiday callout
          ============================================ */}
      <div
        className="text-center py-2.5 px-3 border-b border-[#15294A]"
        style={{ backgroundColor: "#1E3A5F" }}
      >
        <p className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wide text-white uppercase leading-snug">
          <span className="inline-block mr-1.5">&#10047;</span>
          Father&apos;s Day Special: Order by June 15th for Guaranteed Delivery
          <span className="inline-block ml-1.5">&#10047;</span>
        </p>
      </div>

      {/* ============================================
          HEADER — Logo
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <RwfdAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION — Father's Day gift angle
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <RwfdAsset name="heroImage" alt="The Rootwork Step Weeder — stand-up 3-claw weed puller" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Sale badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save Up To 36% + 2 Free Yardwork Guides</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            5 Reasons This Is the <span className="text-[#C86F4C]">Father&apos;s Day Gift</span> That Saves Dad&apos;s Back AND His Saturday
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            If the man in your life still pulls his own weeds, this is the stand-up tool that gets him out of the dirt — and back inside before lunch.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Get the Back-Saver for Dad &rarr;
          </Button>
        </a>

        {/* Social proof */}
        <div className="mt-5 text-center">
          <div className="flex justify-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-foreground font-medium">
            4.8 stars <span className="text-muted-foreground mx-1">&bull;</span> 1,200 reviews <span className="text-muted-foreground mx-1">&bull;</span> 10,000+ weed-free yards
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE — 5 reasons
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 — Back-saving / StandTall™ Release */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Back-Saving
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            His back won&apos;t be locked at sundown
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The StandTall&trade; Release
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <RwfdAsset name="reason1Image" alt="Standing upright while weeding with the Rootwork" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Three hours bent over the flower bed is what wrecks a Saturday. The Rootwork ends the bending. He places it over the weed, steps down, pulls back. The StandTall&trade; Release drops the weed without him kneeling, leaning, or reaching. <span className="font-bold text-foreground">His spine never leaves vertical.</span>
          </p>
        </div>

        {/* Reason 2 — Durable / TriClaw™ + Reinforced Steel */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Built To Last
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Built where every other weeder cracks
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The TriClaw&trade; Grip
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <RwfdAsset name="reason2Image" alt="Reinforced steel construction of the TriClaw grip" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most stand-up weeders use plastic at every stress point — foot platform, eject housing, pivot. They split inside a season and end up in the garage with the other broken tools. The TriClaw&trade; is serrated stainless steel. The platform is reinforced metal. <span className="font-bold text-foreground">This is the weeder he stops replacing.</span>
          </p>
        </div>

        {/* Reason 3 — Time-saving / efficiency */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Time-Saving
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Three hours of weeding becomes thirty minutes
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Step. Pull. Drop. Move on.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <RwfdAsset name="reason3Image" alt="Pulling a weed in seconds" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Position, step, tilt, release. Four seconds per weed and the whole root comes with it. Gardeners who switch from hand-weeding report cutting their time by 80%. <span className="font-bold text-foreground">The Saturday chore turns into a coffee break.</span>
          </p>
        </div>

        {/* Reason 4 — No kneeling (knee-saving) */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              No More Kneeling
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            His knees stay out of the dirt
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            39-inch handle, under 2.5 lbs
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <RwfdAsset name="reason4Image" alt="Weeding standing up with the Rootwork" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            No more foam pads. No more slow getting-up. The 39-inch handle keeps his hands at chest height; the StandTall&trade; Release keeps his back straight. No kneeling between rows, no aching joints come Sunday. <span className="font-bold text-foreground">Standing only.</span>
          </p>
        </div>

        {/* Reason 5 — Guarantee + warranty */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Risk-Free Gift
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            60-day trial. Lifetime warranty. We pay return shipping.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Gift with complete confidence
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <RwfdAsset name="reason5Image" alt="60-day money-back and lifetime warranty" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Try it for 60 days. If it doesn&apos;t save his back, full refund — we pay return shipping. After that, the lifetime warranty covers both the TriClaw&trade; and the StandTall&trade; Release against defects in materials and workmanship. <span className="font-bold text-foreground">You&apos;re giving him the last weeder he&apos;ll ever buy.</span>
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
            The Gift That Saves His Back AND Saturday
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One stand-up weeder. Two free gardening guides. A lifetime warranty. Give him something he&apos;ll thank you for every Saturday in May.
          </p>

          <div className="mb-8 text-center">
            <div className="flex justify-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-foreground font-medium">
              4.8 stars <span className="text-muted-foreground mx-1.5">|</span> 1,200 reviews <span className="text-muted-foreground mx-1.5">|</span> 10,000+ weed-free yards
            </p>
          </div>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">Today: Up To 36% Off + 2 Free Yardwork Guides</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <RwfdAsset name={activeImage} alt="The Rootwork Step Weeder" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
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
                  <RwfdAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <RwfdAsset name="benefitIcon1" alt="Grip" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">TriClaw&trade; pulls the whole root from three angles</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <RwfdAsset name="benefitIcon2" alt="Posture" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">StandTall&trade; Release drops weeds without bending</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <RwfdAsset name="benefitIcon3" alt="Construction" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Reinforced steel platform, under 2.5 lbs</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <RwfdAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">60-day trial + lifetime warranty, gift with confidence</p>
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
          REVIEWS
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Dads Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 1,200 reviews</p>
        </div>

        <div className="space-y-4">
          {/* Review 1 — gifted by adult child */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Bought it for my dad. He called me the next morning to say thank you.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              He&apos;s 71 and still does his own beds. His back has been giving him grief for two summers and he just gritted through it. Sent him this for Father&apos;s Day and he texted me Sunday morning saying he did the whole front yard without stopping once. I haven&apos;t heard him sound that pleased about a tool in years.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Lauren M.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — wife/spouse */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Best yard tool gift in years — he keeps showing it to neighbors.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              My husband&apos;s 64 and the bending was getting to him. Got him this last Father&apos;s Day. He used it Saturday morning, then walked across the street to show it to the neighbor. I think he&apos;s sold three of these for us at this point.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Diane T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 — dad himself, durability angle */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Steel where the others use plastic. You can tell the second you pick it up.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;ve gone through two of these stand-up weeders from box stores. Both cracked at the foot platform inside a season. This one is reinforced steel under the boot and the claws are stainless — pulled a thick dandelion root last week without it flexing. Heavier than the plastic ones but you want it that way. Built like the old garden tools.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Frank H.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — knee/back focus */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Two knee surgeries. I haven&apos;t weeded standing up in fifteen years until this.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              My wife handed me this on Father&apos;s Day and said try it before you say no. Did the whole side bed standing the entire time. Roots came out clean, my knees didn&apos;t see the ground once, and I was back inside before the coffee was cold. I think she finally gave me a tool I&apos;ll actually keep.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Bill R.</span>
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
            Everything you need to know before you gift the last weeder he&apos;ll ever own.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it work on his weeds?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Yes. The TriClaw&trade; pulls dandelion, thistle, clover, crabgrass, plantain, and most taproot weeds — every common lawn and bed weed in North America. Three serrated stainless claws grip the root from three angles, so it pulls out clean. Works best in moist soil; tip is to water 20 minutes before weeding for the cleanest pull.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it arrive before Father&apos;s Day?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders ship within 1 business day. Standard shipping is 3-5 business days. Order by June 15th to be safe. Orders placed by Monday of that week land in time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is it light enough for an older dad to use?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Under 2.5 lbs total. The aluminum shaft handles the lift; the StandTall&trade; Release does the eject. He never has to bend over to clear a weed or scrape soil out of the claws. If he can sweep a porch, he can use this.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if he doesn&apos;t love it?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              60-day trial. If his back doesn&apos;t feel the difference, full refund — we cover return shipping. No restocking, no questions. The free e-guides are his to keep either way.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What does the lifetime warranty cover?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If the TriClaw&trade; claws dull, the foot platform cracks, or the StandTall&trade; Release stops ejecting cleanly under normal use, we replace it. No fine print. No expiration. We built this to be the last weeder he buys.
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
              Save Up To 36% + 2 Free Yardwork Guides &rarr;
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
