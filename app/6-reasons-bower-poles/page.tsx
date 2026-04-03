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

export default function BowerPolesListiclePage() {
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
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMO BANNER
          ============================================ */}
      <div className="bg-[#4A3F35] text-white text-center py-2.5 px-4">
        <p className="text-xs font-bold tracking-wide uppercase">
          35% Off + 2 Free Plant Guides With Every Order
        </p>
      </div>

      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card border-b border-border/50">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <BowerAsset name="heroImage" alt="Monstera climbing a Bower Pole" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons Plant Parents Are <span className="text-[#C86F4C]">Switching</span> to Bower Poles
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-md mx-auto">
            The bendable plant support that follows your plant&apos;s natural growth curve.
          </p>
          <a href={PDP_URL} className="inline-block mt-6">
            <Button
              size="lg"
              className="bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 px-8 text-base rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              Get Yours at 35% Off
            </Button>
          </a>
        </div>
      </section>

      {/* ============================================
          LISTICLE CARDS
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-12 space-y-10">
        {/* Reason 1 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Straight-Line Problem
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Your plant wasn&apos;t built to grow straight
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason1Image" alt="Plant growing naturally around a bent Bower Pole" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Rigid poles push your Monstera in one direction. Your Monstera doesn&apos;t want to go in one direction. <span className="font-bold text-foreground">Bower Poles bend to follow the growth curve your plant already has.</span>
          </p>
        </div>

        {/* Reason 2 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Grip Problem
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Roots actually grab on
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason2Image" alt="Aerial roots gripping coir surface" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The coir wrap mimics the texture of real tree bark. <span className="font-bold text-foreground">Aerial roots latch on naturally</span> instead of sliding off plastic or bare wood. No zip ties needed.
          </p>
        </div>

        {/* Product Reveal */}
        <div className="bg-[#F4EFE3] rounded-2xl p-8 text-center">
          <p className="text-sm font-bold text-[#6B5D4F] uppercase tracking-wider mb-4">What they switched to</p>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-muted mb-5 shadow-md max-w-sm mx-auto">
            <BowerAsset name="productReveal" alt="Bower Poles Flexible Plant Support" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Bower Poles&trade;</h3>
          <p className="text-base text-foreground/70 leading-relaxed max-w-sm mx-auto">
            Bendable metal core. Premium coir wrap. Shape it by hand, stack for more height, and watch your plant climb the way it was meant to.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-foreground/60 font-medium">
              4.9 stars from 2,400+ reviews
            </p>
          </div>
        </div>

        {/* Reason 3 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Height Problem
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            One pole is never enough
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason3Image" alt="Stacked Bower Poles for extra height" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Your plant will outgrow it. That&apos;s the point. <span className="font-bold text-foreground">Stack another Bower Pole on top</span>, secure it with tape, and keep climbing. No connectors, no height limit.
          </p>
        </div>

        {/* Soft CTA */}
        <div className="text-center py-2">
          <a href={PDP_URL} className="inline-flex items-center gap-2 text-[#C86F4C] font-bold text-lg hover:underline underline-offset-4 transition-colors">
            See Bower Poles &rarr;
          </a>
          <p className="text-sm text-muted-foreground mt-2">35% off today + 2 free plant guides</p>
        </div>

        {/* Reason 4 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Maintenance Problem
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Zero maintenance
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason4Image" alt="Coir pole that works dry" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Sphagnum moss poles need daily misting or they dry out and fall apart. <span className="font-bold text-foreground">Coir works even when bone dry.</span> No mold, no mess, no upkeep.
          </p>
        </div>

        {/* Reason 5 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Sustainability Question
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Made from what others throw away
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason5Image" alt="Coconut coir, a sustainable byproduct" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The coir wrap is a byproduct of the coconut industry. <span className="font-bold text-foreground">Waste material that would otherwise end up in a landfill.</span> Not harvested from wetlands like sphagnum moss.
          </p>
        </div>

        {/* Reason 6 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Risk Question
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            60 days to decide. Full refund if you don&apos;t love it.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason6Image" alt="60-day guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Use it for two months. If the roots don&apos;t grab, if the shape doesn&apos;t hold, send it back. <span className="font-bold text-foreground">Full refund, no questions.</span> You don&apos;t even need to return it.
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SHOWCASE
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            Lifetime Warranty + 60-Day Guarantee
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Ready to Ditch the Rigid Pole?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            Join 2,400+ plant parents who stopped forcing their plants straight.
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

        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">TODAY: 35% OFF + 2 FREE PLANT GUIDES</p>
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
                <p className="text-xs text-foreground font-semibold leading-snug">Bendable metal core holds any shape you set</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <BowerAsset name="benefitIcon2" alt="Roots" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Coir surface roots latch onto naturally</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <BowerAsset name="benefitIcon3" alt="Stackable" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Stackable for unlimited height as your plant grows</p>
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
                size="lg"
                className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
              >
                Get 35% Off + 2 Free Guides
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          REVIEWS
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-12">
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
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My Monstera looks incredible now&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I was using a straight bamboo stick and zip ties. It looked terrible. Switched to Bower Poles and bent it to follow the curve of the stem. Night and day difference.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Sarah M.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Finally, a pole that doesn&apos;t shed everywhere&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;ve tried three different moss poles. They all left coir dust on my shelf. This one stays put. And it doesn&apos;t need constant misting like my old sphagnum one.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Jamie R.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Bought the 4-pack, already need more&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Started with one for my Monstera. Then I stacked a second on top. Then I put one on my Pothos. Then my Philodendron. Send help.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Lauren T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I don&apos;t mist it and it still works great&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Was nervous about not using sphagnum but honestly the roots are grabbing on fine. And I don&apos;t have to mist it every day which is a huge win.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Priya K.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What sizes are available?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              24&quot; and 32&quot;. Both come in 2-Packs or 4-Packs. If your plant outgrows one, stack another on top for more height.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What plants does it work with?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Any climbing aroid. Monstera, Pothos, Philodendron, Syngonium, Scindapsus, Rhaphidophora. If it has aerial roots, it&apos;ll grab on.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How do I stack them for more height?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Place a second pole next to the first, overlap them by a few inches, and secure with tape. The coir surfaces create a continuous climbing path.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Do I need to mist the pole?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Nope. Unlike sphagnum moss poles, coir works dry. You can mist it occasionally to speed up root attachment, but it&apos;s not required.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it doesn&apos;t work for my plant?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Use it for 60 days. If you&apos;re not happy, we&apos;ll refund you in full. No return required.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============================================
          STICKY CTA
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
              Get 35% Off + 2 Free Guides
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
