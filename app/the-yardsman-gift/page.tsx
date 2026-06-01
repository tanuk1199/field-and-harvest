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
import { TygAsset } from "@/components/tyg-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-yeoman-handle"

const PRODUCT_THUMBS = ["productThumb1", "productThumb2", "productThumb3", "productThumb4"] as const
type GalleryKey = "productMain" | (typeof PRODUCT_THUMBS)[number]

export default function LandingPage() {
  const [activeImage, setActiveImage] = useState<GalleryKey>("productMain")

  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMOTIONAL BANNER (no seasonal/occasion frame — evergreen gift)
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
        <TygAsset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO — Gift framing (dual-audience: gift-giver + general)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <TygAsset name="heroImage" alt="The Yeoman Handle — the perfect gift for the man who works in his own yard" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save Up To 43% + 2 Free Yardwork Guides</span>
        </div>

        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons This Is The Perfect Gift For <span className="text-[#C86F4C]">Any Man Who Works In The Yard</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            He won&apos;t ask for it. He won&apos;t tell you his back is locked every Sunday morning. But the next time he picks up his weed wacker, this is the one tool that will change every Saturday from here on out.
          </p>
        </div>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Get The Gift He&apos;ll Actually Use &rarr;
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
          LISTICLE — 6 reasons (gift framing, dual-audience)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 — He'll actually use it (anti-generic-gift) */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              The Gift He&apos;ll Reach For
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            He&apos;ll actually use this. Not like the last tie.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Built for the Saturday-morning yardsman
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TygAsset name="reason1Image" alt="A man using his trimmer with the Yeoman Handle attached" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most gifts for men who work in the yard end up in a drawer. Another tool set he won&apos;t open. Another mug. Another tie. The Yeoman is different because the second he bolts it onto his trimmer, every Saturday gets easier. <span className="font-bold text-foreground">This is the gift he&apos;ll think of you every time he uses it. Which is every weekend.</span>
          </p>
        </div>

        {/* Reason 2 — Fits his trimmer (compatibility reassurance for nervous gift-buyers) */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Fits The Trimmer He Already Owns
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            You don&apos;t need to know what brand his trimmer is.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            STIHL, Echo, Ryobi, EGO, Husqvarna, BLACK+DECKER
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TygAsset name="reason2Image" alt="The Yeoman Handle fits any major trimmer brand" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The biggest worry with a tool gift: will it actually fit his stuff? The Yeoman bolts onto every major brand on the market, gas or battery, straight shaft or curved. No measuring, no asking him, no risk of returning the wrong thing. <span className="font-bold text-foreground">If he has a string trimmer, this fits it.</span>
          </p>
        </div>

        {/* Reason 3 — Saves his back (the real gift — the thing he won't admit he needs) */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Saves The Back He Won&apos;t Mention
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            The Sunday morning back he won&apos;t complain about. Fixed.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Plumb-Set&trade; Geometry
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TygAsset name="reason3Image" alt="Standing upright with the Yeoman Handle, no more hunching" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            He won&apos;t tell you his lower back is locked the morning after he trims. He doesn&apos;t want to admit yard work is wearing him down. The Plumb-Set&trade; lifts his off-hand 9 inches above the factory loop so he stands upright the entire pass. Spine plumb. Both hands sharing the load. <span className="font-bold text-foreground">He&apos;ll feel the difference the first Saturday and won&apos;t know how to thank you.</span>
          </p>
        </div>

        {/* Reason 4 — 3-minute install (no project, no excuse to leave it in the box) */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Three Minutes To Install
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            No project. No instructions. No reason to leave it in the box.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            The Hold-Fast&trade; Bracket clamps in 3 minutes
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TygAsset name="reason4Image" alt="Three-minute install with the included allen key" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most tool gifts come with a half-day of setup. He looks at the box, sighs, and shelves it for &ldquo;later.&rdquo; Later never comes. The Yeoman slides onto his trimmer shaft and locks tight with one bolt. The allen key is in the box. <span className="font-bold text-foreground">He&apos;ll be using it the same afternoon he opens it. Standing upright by the time his coffee&apos;s cool.</span>
          </p>
        </div>

        {/* Reason 5 — Built to last (lifetime warranty, not another cheap thing) */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Built To Outlast The Trimmer
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            Not the cheap kind. The kind he&apos;ll still be using in ten years.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            Aluminum-alloy build. Lifetime warranty.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TygAsset name="reason5Image" alt="The Hold-Fast bracket — aluminum-alloy, built to last" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The $15 versions on Amazon are stamped steel. They flex under torque, slip after a few sessions, and end up in the trash by August. The Yeoman is solid aluminum-alloy with a reinforced steel Hold-Fast&trade; bracket that grips on two opposite faces. <span className="font-bold text-foreground">He&apos;ll still be bolting this on his next trimmer too. Lifetime warranty.</span>
          </p>
        </div>

        {/* Reason 6 — Risk reversal (60-day trial — nervous gift-giver insurance) */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              Risk-Free Gift
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            60-day trial. Full refund if he doesn&apos;t use it.
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-[#C86F4C] mb-6">
            We pay the return shipping. No fine print.
          </p>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <TygAsset name="reason6Image" alt="60-day money-back guarantee and lifetime warranty" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Buying a tool you can&apos;t test feels like guessing. So we removed the risk. He bolts it on, works one full Saturday with it. If his back doesn&apos;t feel the difference, full refund. We cover return shipping. No restocking fee, no questions. <span className="font-bold text-foreground">You&apos;re giving a gift you cannot get wrong.</span>
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
            The Trimmer Handle He Won&apos;t Stop Using
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One handle. Two free yardwork guides. A lifetime warranty. The gift his back will thank you for every Saturday for the next decade.
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
              <TygAsset name={activeImage} alt="The Yeoman Handle" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
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
                  <TygAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TygAsset name="benefitIcon1" alt="Posture" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Plumb-Set&trade; lifts his off-hand to chest height</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TygAsset name="benefitIcon2" alt="Clamp" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">The Hold-Fast&trade; bracket fits any major trimmer brand</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TygAsset name="benefitIcon3" alt="Install" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Three-minute install. No drilling. No project required.</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <TygAsset name="benefitIcon4" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">60-day trial + lifetime warranty. A gift you can&apos;t get wrong.</p>
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
          REVIEWS — dual-audience (wife/partner gift + son/daughter gift + self-purchase + dual-use household)
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Buyers Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800 reviews</p>
        </div>

        <div className="space-y-4">

          {/* Review 1 — Wife gifting to husband */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Finally a gift my husband didn&apos;t politely set aside.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;ve watched him grimace every Sunday morning for years. He never asked for help and never asked for a gift like this either. I ordered it on a Tuesday, he had it bolted on by Saturday, finished the entire yard upright and walked inside without touching his back once. He has not stopped talking about it. Best $39 I&apos;ve ever spent on him.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Linda M.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — Adult child gifting to dad */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Dad called me to tell me about it. He never calls about gifts.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I sent this to my dad for his birthday. He&apos;s 67, still does his own three acres, and absolutely refuses to hire someone. He called me three days later and said it was the first gift in years that actually changed his Saturday. He had no idea his trimmer was the reason his back was wrecked. I&apos;m sending one to my father-in-law next.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">David K.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 — Self-purchase (keeps the page non-gendered) */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Bought one for myself. Now I&apos;m buying three more for my brothers.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I picked one up after my second weekend of trimming this spring left me on the couch Sunday afternoon. Installed it in about four minutes, did the back forty without stopping, and immediately knew I was going to send these to my brothers. All three of us still do our own yards. None of us mention how much it hurts until it&apos;s over.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Frank S.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — Multi-user household (compatibility + dual-use proof) */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Gave it to him. Now I use it on the same trimmer.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I bought this for my husband for our anniversary. He&apos;s 6&apos;2&quot;, I&apos;m 5&apos;6&quot;, and the factory handle had him hunched over for years. The handle slides up and down the shaft so he sets it at his chest height, I slide it to mine when I do the side yard. Same handle, same trimmer, two different people. Best multi-purpose gift I&apos;ve given.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Emily W.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ — gift-buyer focused
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions Before You Gift It
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know to give it with confidence.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it fit his trimmer?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If he has a string trimmer, weed eater, or weed wacker with a straight or curved shaft and a loop handle, it fits. The Hold-Fast&trade; bracket adjusts for 26mm and 28mm shafts, the standard range covering most STIHL, Echo, Husqvarna, Ryobi, EGO, Greenworks, and BLACK+DECKER models, gas or battery. You don&apos;t need to know his brand to buy it.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will he actually use it, or end up in the box?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Three-minute install with the included allen key. No drilling, no cutting, no instructions to read. He&apos;ll be using it the same afternoon. And because it solves an actual problem he already has (the Sunday-morning back he doesn&apos;t mention), he&apos;ll reach for it every Saturday. Most gifts get used once. This one becomes part of his routine.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it&apos;s not right for him?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              60-day trial. If he uses it once and decides it&apos;s not for him, full refund. We pay the return shipping. No restocking fee, no questions. The gift is risk-free for you, risk-free for him. You cannot pick wrong.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How is this different from the cheap handles on Amazon?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Two things: build and geometry. The Hold-Fast&trade; bracket grips the shaft on two opposite faces with reinforced steel. The $15 versions use a single contact point that slips after a few uses and ends up in the trash by August. The Plumb-Set&trade; is a fixed 9-inch lift at the exact angle where the spine stays plumb. Cheap versions bolt on wherever and let the user figure out the rest. He&apos;ll notice the difference within one Saturday.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Can other people in the household use it too?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Yes. The Hold-Fast&trade; bracket slides up or down the shaft, so anyone in the household can set it at their own chest height in seconds. Six feet tall or five-foot-six, one handle works for both. The gift becomes useful for the whole house, not just him.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What does the lifetime warranty cover?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              If the Hold-Fast&trade; bracket wears, the grip separates, or the aluminum shaft bends under normal use, we replace it. No fine print. No expiration. We built this to be the last trimmer handle he ever needs.
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
