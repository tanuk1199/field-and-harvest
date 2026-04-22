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

// UGC-style grid tiles — reusing existing bower-images.ts keys
const UGC_GRID = [
  "reason1Image",
  "reason2Image",
  "reason3Image",
  "productReveal",
  "heroImage",
  "reason4Image",
  "reason5Image",
  "reason6Image",
  "productMain",
] as const

export default function PlantParentsUseThisPage() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setShowSticky(scrollPercent > 0.15)
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
          HERO SECTION - Identity + curiosity
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-6">
        <p className="text-xs md:text-sm font-bold tracking-wider text-[#C86F4C] uppercase text-center mb-3">
          What Plant Parents Quietly Switched To
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight text-center">
          What Thriving Monsteras Have in <span className="text-[#C86F4C]">Common</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto text-center">
          It&apos;s not more light, more water, or more fuss. It&apos;s what they&apos;re climbing on.
        </p>

        <div className="mt-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <BowerAsset name="heroImage" alt="Monstera climbing a Bower Pole" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-6 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Get Yours at 35% Off &rarr;
          </Button>
        </a>

        <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-foreground font-medium">
            4.9 stars <span className="text-muted-foreground mx-1">&bull;</span> 2,400+ reviews
          </p>
        </div>
      </section>

      {/* ============================================
          INSIGHT BLOCK - 3-line reframe (no listicle)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-6 pb-10">
        <div className="bg-[#F4EFE3] rounded-2xl p-6 md:p-8 border border-[#D4C4B0]">
          <p className="text-base md:text-lg text-foreground/90 text-pretty leading-relaxed">
            Your Monstera isn&apos;t failing because of you. It&apos;s failing because rigid poles force straight growth, plastic is slippery, and sphagnum moss sheds all over your shelf. <span className="font-bold text-foreground">Experienced plant parents quietly switched to bendable coir poles years ago.</span> You just hadn&apos;t heard about them yet.
          </p>
        </div>
      </section>

      {/* ============================================
          UGC GRID - Visual proof
          ============================================ */}
      <section className="max-w-lg lg:max-w-3xl mx-auto px-4 pb-10">
        <div className="text-center mb-6">
          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider font-bold bg-transparent mb-2">
            IN PLANT PARENTS&apos; HOMES
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight">
            The Pole Behind 2,400+ Thriving Plants
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-1.5 md:gap-2">
          {UGC_GRID.map((name, i) => (
            <div key={i} className="relative aspect-square rounded-md overflow-hidden bg-muted shadow-sm">
              <BowerAsset name={name} alt={`Plant parent using Bower Poles ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-3xl" />
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-3 italic">
          Monstera, Pothos, Philodendron, Syngonium &mdash; if it climbs, the roots grab on.
        </p>
      </section>

      {/* ============================================
          PRODUCT CARD - Quick conversion
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pb-10">
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
                <p className="text-xs text-foreground font-semibold leading-snug">Bendable metal core holds any shape</p>
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
                <p className="text-xs text-foreground font-semibold leading-snug">Stackable for unlimited plant height</p>
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
          COMPRESSED REVIEWS
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pb-10">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight">
            What Plant Parents Are Saying
          </h2>
          <p className="text-xs text-muted-foreground mt-1">4.9 out of 5 from 2,400+ reviews</p>
        </div>

        <div className="space-y-3">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-1 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-1">&ldquo;My Monstera looks incredible now.&rdquo;</p>
            <p className="text-xs text-foreground/75 leading-relaxed mb-2">
              I was using a straight bamboo stick and zip ties. It looked terrible. Switched to Bower Poles and bent it to follow the curve of the stem. Night and day.
            </p>
            <span className="text-xs font-bold text-foreground">Sarah M.</span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded ml-2">Verified Buyer</span>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-1 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-1">&ldquo;Finally, a pole that doesn&apos;t shed everywhere.&rdquo;</p>
            <p className="text-xs text-foreground/75 leading-relaxed mb-2">
              Tried three moss poles. They all left coir dust on my shelf and needed constant misting. This one stays put, works dry, aerial roots grabbed on within weeks.
            </p>
            <span className="text-xs font-bold text-foreground">Jamie R.</span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded ml-2">Verified Buyer</span>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-1 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-1">&ldquo;Bought the 4-pack. Already need more.&rdquo;</p>
            <p className="text-xs text-foreground/75 leading-relaxed mb-2">
              Started with one for my Monstera. Then stacked another on top. Then one for my Pothos. Then the Philodendron. Send help.
            </p>
            <span className="text-xs font-bold text-foreground">Lauren T.</span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded ml-2">Verified Buyer</span>
          </div>
        </div>
      </section>

      {/* ============================================
          SHORT FAQ
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-4 pb-32">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-5 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-4 text-sm">
              What plants does it work with?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-4 text-sm">
              Any climbing aroid &mdash; Monstera, Pothos, Philodendron, Syngonium, Scindapsus, Rhaphidophora. If it has aerial roots, it&apos;ll grab on.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-5 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-4 text-sm">
              Do I need to mist the pole?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-4 text-sm">
              No. Unlike sphagnum moss, coir works bone dry. Mist occasionally to speed up root attachment if you want &mdash; not required.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-5 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-4 text-sm">
              What sizes are available?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-4 text-sm">
              24&quot; and 32&quot;, each in 2-packs or 4-packs. If your plant outgrows one, stack another on top for unlimited height.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-5 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-4 text-sm">
              What if it doesn&apos;t work for my plant?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-4 text-sm">
              60 days to try it. Full refund, no return needed.
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
