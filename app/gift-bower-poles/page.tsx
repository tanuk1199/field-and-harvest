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

export default function GiftBowerPolesPage() {
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
          35% Off + 2 Free Plant Guides Included With Every Order
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
          <BowerAsset name="heroImage" alt="Bower Poles gift for plant lovers" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            The Gift Every <span className="text-[#C86F4C]">Plant Person</span> Actually Wants
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-md mx-auto">
            Not another pot. Not another watering can. The one thing their climbing plants have been missing.
          </p>
          <a href={PDP_URL} className="inline-block mt-6">
            <Button
              size="lg"
              className="bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-6 px-8 text-base rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              Get It at 35% Off
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
              The Gap Nobody Thinks Of
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            They have 10 plants and zero proper support
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason1Image" alt="Climbing plant without support" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Every plant person you know has a Monstera leaning against a wall or a Pothos trailing off a shelf. What they don&apos;t have is something that actually helps those plants climb. <span className="font-bold text-foreground">That&apos;s the gap this fills.</span>
          </p>
        </div>

        {/* Reason 2 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Thoughtful Gift
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Way more thoughtful than another pot
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason2Image" alt="Bower Poles as a gift" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Anyone can grab a planter from the store. Bower Poles shows you actually know what their plants need. It&apos;s the kind of gift that makes them say <span className="font-bold text-foreground">&ldquo;how did you know?&rdquo;</span>
          </p>
        </div>

        {/* Product Reveal */}
        <div className="bg-[#F4EFE3] rounded-2xl p-8 text-center">
          <p className="text-sm font-bold text-[#6B5D4F] uppercase tracking-wider mb-4">The plant gift they&apos;ll actually use</p>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-muted mb-5 shadow-md max-w-sm mx-auto">
            <BowerAsset name="productReveal" alt="Bower Poles Flexible Plant Support" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Bower Poles&trade;</h3>
          <p className="text-base text-foreground/70 leading-relaxed max-w-sm mx-auto">
            A bendable plant support wrapped in natural coir. It bends to follow a plant&apos;s growth curve, and the textured surface gives roots something to grab onto. Works with any climbing houseplant.
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
              No Guessing Required
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            You don&apos;t need to know their plants
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason3Image" alt="Works with any climbing houseplant" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Bower Poles works with Monstera, Pothos, Philodendron, Syngonium, and basically any houseplant that climbs. <span className="font-bold text-foreground">If they own plants, it fits.</span> No guessing required.
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
              Not a One-Time Gift
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            They&apos;ll use it for years, not weeks
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason4Image" alt="Durable plant support that lasts" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            This isn&apos;t a candle that burns out or a novelty mug that collects dust. The bendable metal core and coir wrap last season after season. <span className="font-bold text-foreground">And when their plant outgrows one, they stack another on top.</span> Which means they&apos;ll want more.
          </p>
        </div>

        {/* Reason 5 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Not a Chore
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            You&apos;re not giving them more work
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason5Image" alt="Low maintenance coir pole" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Some plant gifts come with a care routine. This one doesn&apos;t. Unlike moss poles that need daily misting, <span className="font-bold text-foreground">coir works even when dry.</span> Push it in the soil and forget about it.
          </p>
        </div>

        {/* Reason 6 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Zero Risk For You
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Don&apos;t love it? Full refund. No questions.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason6Image" alt="60-day money back guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            If it&apos;s not the right fit, they have 60 days to return it for a full refund. <span className="font-bold text-foreground">Zero risk for you as the gift buyer.</span> You don&apos;t even need to send it back.
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
            The Plant Gift They&apos;ll Actually Use
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            Join 2,400+ plant parents who upgraded from sticks and zip ties.
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
                <p className="text-xs text-foreground font-semibold leading-snug">Bendable metal core holds any shape they set</p>
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
                <p className="text-xs text-foreground font-semibold leading-snug">Stackable for unlimited height as their plant grows</p>
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
          REVIEWS (gift-framed)
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Gift Buyers Are Saying
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My daughter texted me a photo within an hour&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Got this for her birthday. She has a huge Monstera that was leaning sideways off her shelf. She bent the pole, attached it, and sent me a before-and-after. Best reaction I&apos;ve gotten from a gift in years.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Carol M.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Perfect housewarming gift&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              My friend just moved into a new apartment and brought all her plants with her. I gave her the 4-pack. She used every single one the first weekend. Way better than another candle.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Danielle K.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Got it for my wife, now she wants more&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              She kept complaining about her Pothos not climbing properly. I had no idea what a moss pole was but this seemed right. She set it up in ten minutes and already asked me to order two more.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Mark J.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;The only plant gift that wasn&apos;t already on her shelf&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              My sister is impossible to shop for because she already owns every plant tool. She didn&apos;t have these. Her exact words were &ldquo;where did you even find this?&rdquo; That&apos;s how you know it&apos;s a good gift.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Rachel S.</span>
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
              I don&apos;t know what size plants they have. Which should I get?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Go with the 32&quot; if you&apos;re not sure. It works for most climbing houseplants and gives them more room to grow. If the plant is small, they can always bend it shorter.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if they already have a moss pole?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Most plant people have more than one climbing plant. And most moss poles are rigid, which is the whole problem Bower Poles solves. Even if they have one, this is an upgrade.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will this work as a birthday or housewarming gift?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              It&apos;s one of the best options for either. Plant people rarely buy proper support for their climbers, so it fills a gap they didn&apos;t know they had. It also looks great in the packaging.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if they don&apos;t like it?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Full refund within 60 days. No return required. No restocking fee. Zero risk for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How fast does it ship?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders are processed within 1 business day. Standard shipping is 3-5 business days.
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
