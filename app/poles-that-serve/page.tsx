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
const FVC_URL = "https://farmvetco.org"
const PLEDGE_GREEN = "#4A5D3A"

export default function PolesThatServePage() {
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
      <div className="bg-[#4A3F35] text-white text-center py-2.5 px-4">
        <p className="text-xs font-bold tracking-wide uppercase">
          35% Off + 2 Free Plant Guides With Every Order
        </p>
      </div>

      {/* ============================================
          PLEDGE BANNER — Touchpoint #1
          ============================================ */}
      <div
        className="text-center py-2.5 px-3 border-b-2 border-[#3a4a2d]"
        style={{ backgroundColor: PLEDGE_GREEN }}
      >
        <p className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wide text-white uppercase leading-snug">
          <span className="inline-block mr-1.5">&#9733;</span>
          The Veteran Pledge &mdash; 10% of your order is donated to Farmer Veteran Coalition
          <span className="inline-block ml-1.5">&#9733;</span>
        </p>
      </div>

      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card border-b border-border/50">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION — Touchpoints #2 and #3
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <BowerAsset name="heroImage" alt="Monstera climbing a Bower Pole" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Sale badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-xs sm:text-sm text-foreground">Save 35% OFF + 2 Free Plant Guides Included</span>
        </div>

        {/* Main headline — Touchpoint #2 */}
        <div className="mt-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            The Plant Pole That <span className="text-[#C86F4C]">Serves Twice</span>
          </h1>
          {/* Subhead — Touchpoint #3 */}
          <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-md mx-auto leading-relaxed">
            One pole gives your plant a natural climbing path it actually grabs onto &mdash; and 10% of your order puts a returning veteran one step closer to a farm of their own.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL} className="block mt-8">
          <Button
            size="lg"
            className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Get Yours at 35% Off
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
            4.9 stars <span className="text-muted-foreground mx-1">&bull;</span> 2,400+ reviews
          </p>
        </div>
      </section>

      {/* ============================================
          PLEDGE CALLOUT — Touchpoint #4
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pb-4">
        <div
          className="rounded-2xl overflow-hidden shadow-lg border-2"
          style={{ borderColor: PLEDGE_GREEN }}
        >
          {/* Top stripe */}
          <div
            className="text-center py-2 px-4"
            style={{ backgroundColor: PLEDGE_GREEN }}
          >
            <p className="text-xs font-bold tracking-widest text-white uppercase">
              The Veteran Pledge
            </p>
          </div>

          <div className="bg-card p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black text-white"
                style={{ backgroundColor: PLEDGE_GREEN }}
              >
                10%
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-1 text-balance">
                  Of your order goes directly to Farmer Veteran Coalition.
                </h3>
                <p className="text-sm text-muted-foreground">
                  The largest nonprofit helping U.S. military veterans build careers in agriculture.
                </p>
              </div>
            </div>

            <p className="text-foreground/85 text-pretty leading-relaxed text-base mb-4">
              When veterans come home, many of them don&apos;t want a desk. They want land. They want their hands in soil and a horizon line that&apos;s their own. Farmer Veteran Coalition helps them get there &mdash; with training, equipment grants, and a community of farmers who&apos;ve served.
            </p>
            <p className="text-foreground/85 text-pretty leading-relaxed text-base mb-5">
              We make tools for people who grow things. They put veterans on land where they can grow things too. It just fits. <span className="font-bold text-foreground">10% of your order is donated to Farmer Veteran Coalition through farmvetco.org &mdash; no minimums, no caps, no fine print.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-2 text-xs text-muted-foreground border-t border-border pt-4">
              <div className="flex-1">
                <p className="font-bold text-foreground uppercase tracking-wider mb-1">The Cause</p>
                <p>Farmer Veteran Coalition</p>
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground uppercase tracking-wider mb-1">Donation</p>
                <p>10% of your order</p>
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground uppercase tracking-wider mb-1">Verified at</p>
                <a href={FVC_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: PLEDGE_GREEN }}>
                  farmvetco.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LISTICLE CARDS — 6 Reasons
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-12 space-y-10">
        {/* Reason 1 — MEANINGFUL (cause-led) — Touchpoint #5 */}
        <div
          className="rounded-2xl p-8 border-2 shadow-sm"
          style={{ backgroundColor: "#FAF8F2", borderColor: PLEDGE_GREEN }}
        >
          <div className="flex items-center justify-between mb-4">
            <Badge
              variant="secondary"
              className="text-xs uppercase tracking-wider font-bold text-white border-0"
              style={{ backgroundColor: PLEDGE_GREEN }}
            >
              MEANINGFUL
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            One pole. Two people it helps grow.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason1Image" alt="A pole that serves twice" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most plant poles are just a stick. This one does more. Your plant gets a bendable support that follows its natural growth curve &mdash; no forcing, no zip ties, no fighting gravity. And 10% of your order goes directly to Farmer Veteran Coalition, funding training, land access, and equipment for the men and women who served and now want to farm. <span className="font-bold text-foreground">You&apos;re not just supporting a plant. You&apos;re putting a veteran one step closer to their own field.</span>
          </p>
        </div>

        {/* Reason 2 — The Straight-Line Problem */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Straight-Line Problem
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Your plant wasn&apos;t built to grow straight
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason2Image" alt="Plant growing naturally around a bent Bower Pole" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Rigid poles push your Monstera in one direction. Your Monstera doesn&apos;t want to go in one direction. <span className="font-bold text-foreground">Bower Poles bend to follow the growth curve your plant already has.</span>
          </p>
        </div>

        {/* Reason 3 — The Grip Problem */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Grip Problem
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Roots actually grab on
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason3Image" alt="Aerial roots gripping coir surface" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
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

        {/* Reason 4 — The Maintenance Problem */}
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

        {/* Reason 5 — The Sustainability Question */}
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

        {/* Reason 6 — Risk-Free + donation reinforcement — Touchpoint #6 */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Risk-Free
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            60 days to decide. Full refund. The donation is sent regardless.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <BowerAsset name="reason6Image" alt="60-day guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Use it for two months. If the roots don&apos;t grab, if the shape doesn&apos;t hold, send it back. Full refund, no questions. You don&apos;t even need to return it. <span className="font-bold text-foreground">And the 10% donation to Farmer Veteran Coalition? That goes through either way. The veterans don&apos;t lose a dollar because the pole wasn&apos;t the right fit.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SHOWCASE — Touchpoint #7 (4th benefit chip)
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-[10px] sm:text-xs font-bold mb-5 px-3 py-1.5 whitespace-normal text-center leading-snug">
            Lifetime Warranty + 60-Day Guarantee + The Veteran Pledge
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            A Better Pole for Your Plant. A Step Forward for a Veteran.
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One pole. Two free plant guides. A lifetime warranty. And a real, traceable contribution to the men and women trading uniforms for overalls.
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
            <p className="text-[11px] sm:text-sm font-bold tracking-wide leading-snug">35% OFF + 2 FREE PLANT GUIDES + THE VETERAN PLEDGE</p>
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

            {/* Benefits grid — Touchpoint #7: 4th chip is pledge-colored */}
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
              <div
                className="rounded-lg p-3.5 flex items-start gap-2.5 border"
                style={{ backgroundColor: "#EEF1E8", borderColor: PLEDGE_GREEN }}
              >
                <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center text-base font-black" style={{ color: PLEDGE_GREEN }}>&#9733;</div>
                <p className="text-xs font-semibold leading-snug" style={{ color: PLEDGE_GREEN }}>10% of your order goes to Farmer Veteran Coalition</p>
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
          REVIEWS — 2 cause-tied + 2 product-focused
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
          {/* Review 1 — Emotional / cause-driven buyer */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;The donation sealed it for me.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I was already looking for a moss pole for my Monstera. Then I saw the Veteran Pledge. My grandfather served in Korea and came home to his garden every single day. Knowing 10% of my order goes to Farmer Veteran Coalition turned a plant purchase into something that actually means something. The pole itself is great &mdash; my roots are already grabbing on after two weeks.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Nina C.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — Product-focused */}
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

          {/* Review 3 — Skeptic-converted */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I checked. The donation is real.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;m skeptical of every &ldquo;portion of proceeds&rdquo; pitch. So I looked up Farmer Veteran Coalition. They&apos;re the real deal &mdash; biggest org in the country helping vets get into farming. The fact that Field &amp; Harvest spelled out 10% in plain English made me trust them. Bought a 4-pack. The poles are solid and my Pothos is already climbing.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Marcus T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — Product-focused */}
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
          FAQ — Product + 3 required cause FAQs
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {/* Cause FAQ 1 — How does the pledge work? */}
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How does The Veteran Pledge actually work?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Veteran Pledge is a campaign we&apos;re running through this offer. When you click through and check out, your order is tagged to this campaign on our end. Each month we add up every order tied to The Veteran Pledge and donate 10% of the total directly to Farmer Veteran Coalition through farmvetco.org. No middleman, no marketing carve-outs. The donation is tied to your order, not to which page on our site you happened to land on at checkout &mdash; so even though our regular product page doesn&apos;t mention the pledge yet, your order still counts. If you want a record, email us and we&apos;ll forward the receipt for your order&apos;s share.
            </AccordionContent>
          </AccordionItem>

          {/* Cause FAQ 2 — What is FVC? */}
          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What is Farmer Veteran Coalition?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Farmer Veteran Coalition is the largest nonprofit in the U.S. helping military veterans build careers in farming. They run the Homegrown By Heroes label, the Fellowship Fund (direct grants for equipment and infrastructure), and a national mentorship network connecting veteran farmers with experienced growers. You can read more about their work at <a href={FVC_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: PLEDGE_GREEN }}>farmvetco.org</a>.
            </AccordionContent>
          </AccordionItem>

          {/* Cause FAQ 3 — Return + donation */}
          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              If I return the poles, does the donation still happen?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Yes. The 10% pledge is paid out of our share, not yours. If the poles don&apos;t work out and you take the 60-day refund, you get every dollar back &mdash; and we still send the donation to Farmer Veteran Coalition. The veterans don&apos;t lose anything because the poles weren&apos;t the right fit.
            </AccordionContent>
          </AccordionItem>

          {/* Product FAQ — Sizes */}
          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What sizes are available?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              24&quot; and 32&quot;. Both come in 2-Packs or 4-Packs. If your plant outgrows one, stack another on top for more height.
            </AccordionContent>
          </AccordionItem>

          {/* Product FAQ — Plants */}
          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What plants does it work with?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Any climbing aroid. Monstera, Pothos, Philodendron, Syngonium, Scindapsus, Rhaphidophora. If it has aerial roots, it&apos;ll grab on.
            </AccordionContent>
          </AccordionItem>

          {/* Product FAQ — Misting */}
          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Do I need to mist the pole?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Nope. Unlike sphagnum moss poles, coir works dry. You can mist it occasionally to speed up root attachment, but it&apos;s not required.
            </AccordionContent>
          </AccordionItem>

          {/* Product FAQ — Guarantee */}
          <AccordionItem value="item-7" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it doesn&apos;t work for my plant?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Use it for 60 days. If you&apos;re not happy, we&apos;ll refund you in full. No return required. And the 10% donation to Farmer Veteran Coalition still goes through.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============================================
          STICKY CTA — Touchpoint #8
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
              Get 35% Off + Give 10% to Vet Farmers
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
