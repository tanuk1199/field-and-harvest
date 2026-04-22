"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Asset } from "@/components/asset"
import { BowerAsset } from "@/components/bower-asset"

const PDP_URL = "https://fieldandharvestco.com/products/bower-poles"

export default function GiftForPlantParentsPage() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setShowSticky(scrollPercent > 0.25)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ============================================
          PROMO BANNER
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">GET 35% OFF</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 FREE PLANT GUIDES</span>
        </p>
      </div>

      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card border-b border-border/50">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION - Gift angle for plant parents
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <BowerAsset name="heroImage" alt="Monstera climbing a Bower Pole" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Sale badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground">Save 35% OFF + 2 Free Plant Guides</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons This Is the Gift Every <span className="text-[#C86F4C]">Plant Parent</span> Secretly Wants
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            For the mom, the dad, or the friend with a Monstera taking over the living room. Every climbing plant they own has been waiting for this.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Gift It at 35% Off &rarr;
          </Button>
        </a>

        {/* Social proof */}
        <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-foreground font-medium">
            4.9 stars <span className="text-muted-foreground mx-1">&bull;</span> 2,400+ reviews <span className="text-muted-foreground mx-1">&bull;</span> Plant parents love it
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE SECTIONS - 6 reasons (gift-tilted)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">
        {/* Reason 1 — Natural Growth */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              NATURAL GROWTH
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Their Monstera will finally climb the way they picture it
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Bendable core follows the plant&apos;s real growth curve
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason1Image" alt="Plant growing naturally around a bent Bower Pole" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most plant supports are stiff bamboo sticks that force a plant into a direction it never wanted. Bower Poles bend by hand and hold whatever shape you set. <span className="font-bold text-foreground">Their plant finally gets to grow the way they&apos;ve been imagining in their head.</span> No more leaning, no more zip ties, no more apologizing to guests.
          </p>
        </div>

        {/* Reason 2 — Roots actually grab on */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              AERIAL ROOT GRIP
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Their plant will attach itself &mdash; no tying, no taping
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Coir wrap mimics real tree bark
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason2Image" alt="Aerial roots gripping coir surface" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Plastic poles are slippery. Bare wood has nothing to grab. Aerial roots slide off both. The coir wrap has the texture of real tree bark, and roots latch onto it naturally. <span className="font-bold text-foreground">Within a few weeks their plant is climbing on its own, the way it would in the wild.</span> They&apos;ll send you a photo.
          </p>
        </div>

        {/* Reason 3 — Stackable / lasting gift */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              GROWS WITH THEM
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            A gift that still works five years from now
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Stackable &mdash; no height limit, no replacement
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason3Image" alt="Stacked Bower Poles for extra height" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most plant poles hit a ceiling &mdash; the plant outgrows it and the whole thing has to be ripped out and replaced. Bower Poles stack on top of each other and keep climbing. <span className="font-bold text-foreground">The same gift still works when their Monstera is brushing the ceiling.</span> Every time they look at it, they&apos;ll remember who gave it to them.
          </p>
        </div>

        {/* Reason 4 — No maintenance */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              ZERO FUSS
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            They won&apos;t have to mist it every day to keep it alive
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Works bone dry &mdash; no misting, no mold, no mess
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason4Image" alt="Coir pole that works dry" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Sphagnum moss poles need daily misting or they crumble, shed mess on the shelf, and start to mildew. It&apos;s a chore, not a gift. Coir works dry. <span className="font-bold text-foreground">No spray bottle routine. No dust on the floor. No mold.</span> They can forget it&apos;s there and the plant still climbs.
          </p>
        </div>

        {/* Reason 5 — Sustainable */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              SUSTAINABLE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            A gift they can feel good about keeping on their shelf
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Coconut byproduct, not harvested wetlands
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason5Image" alt="Coconut coir, a sustainable byproduct" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Sphagnum moss is pulled from threatened peat bogs. Plastic never breaks down. The coir on a Bower Pole is a byproduct of the coconut industry &mdash; material that would otherwise head to a landfill. <span className="font-bold text-foreground">A gift that doesn&apos;t cost the planet to give.</span> The kind of detail a real plant parent notices.
          </p>
        </div>

        {/* Reason 6 — Risk-free gift */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              RISK-FREE GIFT
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            60-day trial. Full refund if their plant doesn&apos;t take to it.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Gift with complete confidence
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason6Image" alt="60-day guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            If the roots don&apos;t grab, if the shape doesn&apos;t hold, if it doesn&apos;t fit their plant &mdash; they send us a note and we refund you in full. <span className="font-bold text-foreground">They don&apos;t even need to return it.</span> You&apos;re not risking anything. You&apos;re giving them the pole every climbing plant they own has been waiting for.
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SECTION - Detailed showcase
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            Lifetime Warranty + 60-Day Guarantee
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            The Plant Gift They Don&apos;t Know They Need
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One bendable pole. Two free plant guides. A lifetime warranty. The gift every climbing plant they own will actually use.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-foreground font-medium">
              4.9 stars <span className="text-muted-foreground mx-1.5">|</span> 2,400+ reviews
            </p>
          </div>
        </div>

        {/* Product card */}
        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-[11px] sm:text-sm font-bold tracking-wide">TODAY: 35% OFF + 2 FREE PLANT GUIDES</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <BowerAsset name="productMain" alt="Bower Poles Flexible Plant Support" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
            </div>

            <div className="grid grid-cols-6 gap-1.5 mb-5">
              {(["productThumb1", "productThumb2", "productThumb3", "productThumb4", "productThumb5", "productThumb6"] as const).map((name, i) => (
                <div key={i} className="relative aspect-square rounded-md border-2 border-border bg-muted hover:border-primary transition-colors cursor-pointer overflow-hidden">
                  <BowerAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <BowerAsset name="benefitIcon1" alt="Bendable" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Bendable metal core holds any shape they set</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <BowerAsset name="benefitIcon2" alt="Roots" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Coir surface aerial roots grab onto naturally</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <BowerAsset name="benefitIcon3" alt="Stackable" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Stackable for unlimited height as their plants grow</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <BowerAsset name="benefitIcon4" alt="Guarantee" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">60-day guarantee + lifetime warranty</p>
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
          REVIEWS SECTION - Gift-tilted, evergreen
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Plant Parents Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">4.9 out of 5 from 2,400+ reviews</p>
        </div>

        <div className="space-y-4">
          {/* Review 1 — Partner gift */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Got these for my partner. They text me photos of their Monstera every couple weeks now.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              They&apos;ve been obsessed with that Monstera for two years. Kept trying to prop it up with bamboo sticks and tape. I sent them a 2-pack for their birthday and the difference is wild. It&apos;s climbing. Like, actually climbing. Easy gift, huge reaction.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Hannah G.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — Dad gift */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My dad has converted the sunroom into a jungle. This was the gift he didn&apos;t know he needed.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              He&apos;s a retired engineer and he&apos;s gotten really into climbing plants. I sent him the 4-pack and he called me the next weekend to tell me he&apos;d bent one into a spiral around his Philodendron. I don&apos;t know what that means but he sounded excited. Best gift I&apos;ve given him in years.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Marcus D.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 — Self-buyer / skeptic converted */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Finally, a pole that doesn&apos;t shed all over my shelf.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;ve tried three different moss poles. They all left coir dust on my shelf and I had to mist them constantly. This one stays put. Aerial roots grabbed on within about four weeks. My Monstera is doing things I didn&apos;t know were possible.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Jamie R.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — Friend gift */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Gave one to my best friend at her housewarming. She cried.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              She&apos;s the plant mom of our friend group. Every time I visit her apartment there&apos;s a new plant in a different corner. I wrapped a 2-pack with a plant care guide and she genuinely got emotional. Said it was the first gift she&apos;d gotten that actually paid attention to her thing.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Priya K.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION - Evergreen gift FAQs
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know before you gift the pole their plants have been missing.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if they already have a plant pole?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Most plant parents have tried a plastic pole or a sphagnum moss pole. Both have problems &mdash; plastic is slippery, moss needs constant misting and sheds mess. Bower Poles are the first ones that bend to their plant&apos;s shape and work bone dry. Even plant people with five poles already end up switching.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What plants does it work with?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Any climbing aroid. Monstera, Pothos, Philodendron, Syngonium, Scindapsus, Rhaphidophora. If the plant has aerial roots, it&apos;ll grab on. If you&apos;re not sure what they have, go with a 2-pack &mdash; they&apos;ll find a use for both.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Which size should I pick for them?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Both sizes (24&quot; and 32&quot;) are bendable and stackable. If their plant lives on a shelf or tabletop, go with 24&quot;. If it&apos;s floor-standing or already tall, go with 32&quot;. Either way, they can stack another on top later &mdash; there&apos;s no height limit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will they actually have to take care of it?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              No. Unlike sphagnum moss poles, coir works dry. They can mist it occasionally to speed up root attachment, but it&apos;s not required. No mold, no shedding, no daily routine. Perfect for a busy person with ten plants already competing for attention.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it doesn&apos;t work for their plant?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              They have 60 days to try it. Full refund, no return needed. No restocking fee, no questions. You&apos;re not risking a thing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How long does shipping take?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders are processed within 1 business day. Standard shipping is 3-5 business days. If you need it for a specific date, order at least a week out to be safe.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============================================
          STICKY CTA - Scroll-triggered
          ============================================ */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[#4A3F35]/95 backdrop-blur-md border-t-2 border-[#4A3F35] py-4 px-4 z-50 shadow-2xl transition-all duration-500 ${
          showSticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-lg mx-auto">
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg mb-2.5 shadow-lg transition-all hover:shadow-xl"
            >
              Gift It at 35% Off + 2 Free Guides
            </Button>
          </a>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-xs text-white/80 font-semibold">
              4.9/5 (2,400+ Reviews) <span className="text-white/40 mx-1">&bull;</span> 60-Day Risk-Free Trial
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
