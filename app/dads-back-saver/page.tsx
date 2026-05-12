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
import { YfdAsset } from "@/components/yfd-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"

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
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">Save Up To 43% Off</span>{" "}
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
        <YfdAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION — Father's Day gift angle
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <YfdAsset name="heroImage" alt="The Yeoman Handle on a trimmer" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Sale badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save Up To 43% + 2 Free Yardwork Guides</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            5 Reasons This Is the <span className="text-[#C86F4C]">Father&apos;s Day Gift</span> That&apos;s Saving Dad&apos;s Back All Summer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Skip the tie and the grilling tools. If the man in your life spends his Saturdays trimming his own yard, this is the back-saver he&apos;ll reach for every time he picks up the weed eater.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Get the Back-Saver for Him &rarr;
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
            4.8 stars <span className="text-muted-foreground mx-1">&bull;</span> 800 reviews <span className="text-muted-foreground mx-1">&bull;</span> 20,000 trimmers upgraded
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE — 5 reasons
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 — Back saving / The Plumb-Set™ */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Back-Saving
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            His back won&apos;t quit before the yard does
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Plumb-Set&trade; Geometry
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <YfdAsset name="reason1Image" alt="Standing upright with the Yeoman Handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Standard trimmer handles force him forward over the head. Twenty minutes in, his lower back is locked and Saturday is a write-off. The Plumb-Set&trade;, our fixed grip angle, lifts his off-hand 9 inches above the factory loop so his spine stays plumb and both hands share the load. <span className="font-bold text-foreground">He stands upright the whole pass. No hunch, no ache.</span>
          </p>
        </div>

        {/* Reason 2 — Durability / Hold-Fast™ + Aluminum */}
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
            <YfdAsset name="reason2Image" alt="The Hold-Fast bracket and aluminum-alloy shaft" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap aftermarket clamps are thin stamped steel. They flex under torque and slip after a few sessions. The Hold-Fast&trade; is reinforced steel with a dual-contact pad that grips the shaft on two opposite faces. Aluminum-alloy build. Soft-touch grip. <span className="font-bold text-foreground">The kind of gift that gets handed down, not thrown out.</span>
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
            Three minutes with an allen key and he&apos;s done
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            No drilling. No cutting. No zip ties.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <YfdAsset name="reason3Image" alt="Installing the Yeoman in three minutes" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Hold-Fast&trade; slides onto his existing trimmer shaft and locks tight with one bolt. The included allen key does the work. No drilling, no cutting, no improvising. <span className="font-bold text-foreground">He&apos;s standing upright by the time the coffee&apos;s cool.</span>
          </p>
        </div>

        {/* Reason 4 — Adjustable for height */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Dials In To Him
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Six feet tall or five-foot-six. It dials in to him.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Slide-and-set position, universal shaft fit
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <YfdAsset name="reason4Image" alt="Adjustable handle position for any height" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The Hold-Fast&trade; bracket slides up or down the shaft so he sets the grip exactly where his off-hand falls at chest height. Fits 26mm and 28mm shafts, which covers STIHL, Echo, Husqvarna, Ryobi, EGO, BLACK+DECKER, gas or battery. <span className="font-bold text-foreground">One handle, dialed in to him.</span>
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
            <YfdAsset name="reason5Image" alt="60-day money-back and lifetime warranty" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Try it for sixty days. If it doesn&apos;t save his back, full refund. We cover return shipping. After that it&apos;s covered for life: if the bracket wears, the grip separates, or the shaft bends under normal use, we replace it. <span className="font-bold text-foreground">You&apos;re giving him the last trimmer handle he&apos;ll ever buy.</span>
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
            The Gift That Saves His Back Every Saturday
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One handle. Two free yardwork guides. A lifetime warranty. This Father&apos;s Day, give him something he&apos;ll thank you for every time he walks the yard.
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
            <p className="text-sm font-bold tracking-wide">Today: Up To 43% Off + 2 Free Yardwork Guides</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <YfdAsset name={activeImage} alt="The Yeoman Handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
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
                  <YfdAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <YfdAsset name="benefitIcon1" alt="Posture" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Plumb-Set&trade; lifts his off-hand to chest height</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <YfdAsset name="benefitIcon2" alt="Clamp" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Hold-Fast&trade; bracket grips and holds, every pass</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <YfdAsset name="benefitIcon3" alt="Install" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Three-minute install on the trimmer he already owns</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <YfdAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My wife got me this for Father&apos;s Day. Best yard tool gift in years.&rdquo;</p>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Bought it for my dad. He called me the next morning to say thank you.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              He&apos;s 68 and still does his own yard. His back has been giving him trouble for two summers. Installed this on his trimmer when I went home for the weekend, and he texted me Sunday saying it was the first time in years he finished trimming without taking three breaks. Worth every dollar.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Sarah K.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Solid build. Drops right onto my STIHL with no fuss.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;ve tried two of these from other brands and they slipped or backed off within a week. The Hold-Fast bracket on this one has stayed put through three months of regular use. The aluminum is light enough I don&apos;t notice it&apos;s on the shaft. Quality is obvious the second you pick it up.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Frank S.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Husband used it once, then ordered one for his father.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              He&apos;s six-foot-two and the factory handle had him bent over every weekend. He slid this up the shaft until it sat at his chest, locked it down, and used it that afternoon. Came inside saying his shoulder finally stopped aching. He ordered a second one for his dad before dinner.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Emily W.</span>
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
            Everything you need to know before you gift the last trimmer handle he&apos;ll ever own.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it fit his trimmer?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If he&apos;s using a string trimmer, weed eater, or weed wacker with a straight or curved shaft and a loop handle, it fits. The Hold-Fast&trade; bracket adjusts for 26mm and 28mm shafts, the standard range covering most STIHL, Echo, Husqvarna, Ryobi, EGO, Greenworks, and BLACK+DECKER models, gas or battery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it arrive before Father&apos;s Day?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders are processed within 1 business day. Standard shipping is 3-5 business days. Order by June 15th to be safe. Most orders placed by Monday of that week land in time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How hard is it to install?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Three minutes with the included allen key. Loosen the factory loop handle, slide the Yeoman onto the shaft at chest height, tighten the bolt. No drilling, no cutting, no zip ties. If he can change a battery, he can install this.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it doesn&apos;t save his back?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              He has 60 days to try it on his own yard. If his back doesn&apos;t feel the difference, full refund. We cover return shipping. No restocking fee, no questions. You&apos;re not risking a thing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What does the lifetime warranty cover?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If the Hold-Fast&trade; bracket wears, the grip separates, or the aluminum shaft bends under normal use, we replace it. No fine print. No expiration. We built this to be the last trimmer handle he buys.
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
