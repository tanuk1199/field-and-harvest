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

const PDP_URL = "https://fieldandharvestco.com/products/the-grange-carrier"

export default function GiftListiclePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMOTIONAL BANNER - Top announcement bar
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">GET 39% OFF</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 FREE GARDENING GUIDES — GIFT-READY IN DAYS</span>
        </p>
      </div>

      {/* ============================================
          HEADER - Logo section
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION - Main visual with product image
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <Asset name="heroImage" alt="The Grange Carrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Sale badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save 39% OFF + 2 Free Gardening Guides Included</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons This Is the Gift Your <span className="text-[#C86F4C]">Gardener Won&apos;t Stop</span> Talking About
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Seeds get forgotten. Gloves wear out by June. The Grange Carrier is the one garden gift 22,000+ people use every single harvest — and the one they actually thank you for.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Give the Gift They&apos;ll Use Every Harvest
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
            4.8 stars <span className="text-muted-foreground mx-1">&bull;</span> 800+ reviews <span className="text-muted-foreground mx-1">&bull;</span> 22,000+ gardeners
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE SECTIONS - Feature/benefit cards
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">
        {/* Reason 1 — Drop-Chute / Thoughtful */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              THOUGHTFUL
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            They&apos;ll empty a full harvest in one second — and think of you every time
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason1Image" alt="Quick-Release Drop-Chute" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most gardeners finish a session by bending over a bucket, scooping out tomatoes one handful at a time. The Quick-Release Drop-Chute changes that. One pinch of the industrial-grade buckles and the entire harvest slides out in a single motion. <span className="font-bold text-foreground">Gift-givers tell us this is the moment it clicks — the first time they use the Drop-Chute, they text you about it.</span>
          </p>
        </div>

        {/* Reason 2 — Harness / Comfort */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              COMFORT
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            The gift that lets them garden longer without the neck and shoulder pain
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason2Image" alt="Zero-Gravity Cross-Back Harness" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            If they&apos;re over 50, their current carrier probably hangs everything from their neck. By noon, they&apos;re done — not because the garden is, but because their body is. The Zero-Gravity Cross-Back Harness distributes 20 pounds across the shoulders and back like a hiking pack. <span className="font-bold text-foreground">Gardeners in their 60s and 70s say this is the reason they&apos;re still out there every morning.</span>
          </p>
        </div>

        {/* Reason 3 — Canvas / Lasting */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              LASTING
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Built from the same fabric as premium hiking packs — this gift ages like leather boots
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason3Image" alt="Field-Weave 600D Canvas" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap carriers fray, sag, and tear within a season or two. You&apos;ve probably watched it happen. Field-Weave 600D Canvas is thorn-proof, puncture-resistant, and semi-rigid enough to hold its shape under a full load. It doesn&apos;t wear out. It breaks in. <span className="font-bold text-foreground">You&apos;re not giving them a carrier. You&apos;re giving them the last one they&apos;ll ever own.</span>
          </p>
        </div>

        {/* Reason 4 — Capacity / Practical */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              PRACTICAL
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            20 pounds of produce, both hands free, and a hidden pocket for their phone
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason4Image" alt="20-pound kangaroo pouch" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The kangaroo-style pouch holds a full peck without collapsing. Built-in tool sheaths keep pruning shears and a trowel within reach. A zippered vault pocket protects their phone from dirt and moisture. <span className="font-bold text-foreground">One trip through the garden. Everything they need, nothing left behind.</span> No more juggling a basket, a bucket, and a phone in the same hand.
          </p>
        </div>

        {/* Reason 5 — Water Resistance / Clean */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              CLEAN
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            They&apos;ll go from garden to dinner table without changing their shirt
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason5Image" alt="Dry-Wear water-resistant barrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Dew, tomato juice, wet soil — cotton aprons soak through in minutes and transfer everything to the clothes underneath. The Dry-Wear barrier lines the entire pouch and blocks moisture on contact. A quick wipe-down and the carrier is ready for the next session. <span className="font-bold text-foreground">Their clothes stay clean. Your gift stays in rotation every harvest.</span>
          </p>
        </div>

        {/* Reason 6 — Guarantee / Risk-Free */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              RISK-FREE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Lifetime warranty. 60-day trial. If they don&apos;t love it, full refund — no questions.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason6Image" alt="Lifetime warranty guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Lifetime warranty covers the fabric, stitching, and buckles against defects in materials and craftsmanship. Not sure they&apos;ll use it? Give it anyway. They have 60 full days to try it. If it&apos;s not right, you get a complete refund and we cover return shipping. <span className="font-bold text-foreground">Zero risk for you. Zero pressure for them. That&apos;s the deal.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SECTION - Detailed product showcase
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            Lifetime Warranty + 60-Day Guarantee
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            The Gift 22,000+ Gardeners Wish They&apos;d Gotten Sooner
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One carrier. Two free guides. A lifetime warranty. And the knowledge that you gave them something they&apos;ll reach for every single season — not something that ends up in a drawer.
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-foreground font-medium">
              4.8 stars <span className="text-muted-foreground mx-1.5">|</span> 800+ reviews <span className="text-muted-foreground mx-1.5">|</span> 22,000+ gardeners
            </p>
          </div>
        </div>

        {/* Product card */}
        <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-lg">
          {/* Limited offer banner */}
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">TODAY: 39% OFF + 2 FREE GARDENING GUIDES</p>
          </div>

          <div className="p-5">
            {/* Product image */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <Asset name="productMain" alt="The Grange Carrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
            </div>

            {/* Product thumbnails */}
            <div className="grid grid-cols-6 gap-1.5 mb-5">
              {(["productThumb1", "productThumb2", "productThumb3", "productThumb4", "productThumb5", "productThumb6"] as const).map((name, i) => (
                <div key={i} className="relative aspect-square rounded-md border-2 border-border bg-muted hover:border-primary transition-colors cursor-pointer overflow-hidden">
                  <Asset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-muted-foreground font-bold" />
                </div>
              ))}
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <Asset name="benefitIcon1" alt="Lightning" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">1-Second Drop-Chute — they&apos;ll empty a full harvest instantly</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <Asset name="benefitIcon2" alt="Feather" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Zero-Gravity Harness — carries 20 lbs pain-free, even at 70</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <Asset name="benefitIcon3" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">600D Canvas — thorn-proof and built to last decades</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <Asset name="benefitIcon4" alt="Water drop" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Water-resistant lining — keeps their clothes clean every session</p>
              </div>
            </div>

            {/* Secondary CTA */}
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
          REVIEWS SECTION - Gift-giver testimonials
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Gift-Givers Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800+ reviews</p>
        </div>

        <div className="space-y-4">
          {/* Review 1 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I&apos;ve never gotten a thank-you text for a gift before. This one got three.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I bought this for my mom&apos;s birthday. She gardens every morning and was using a canvas tote with a broken strap. The first day she used the Grange Carrier she sent me a photo of her tomato haul in it. Then she sent another the next week. And the week after. I&apos;ve given her dozens of gifts over the years. This is the only one she uses daily.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Sarah M.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My wife said it&apos;s the best gift I&apos;ve ever given her. I&apos;m riding that for years.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              She&apos;d been complaining about her old apron hurting her neck after an hour in the garden. I ordered the Grange Carrier without telling her. She put it on, filled it with peppers, and dumped them all out in one second with that drop-chute thing. She turned around and said, &ldquo;Where did you find this?&rdquo; I&apos;m the hero of the household now.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Tom R.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Got this for my dad. He&apos;s 68. He told me to stop buying him anything else.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              My dad gardens daily and he&apos;s been using the same worn-out bucket-and-apron setup for a decade. I got him the Grange Carrier for Father&apos;s Day. He called me the next morning to say it&apos;s the most comfortable thing he&apos;s ever worn in the garden. His exact words: &ldquo;This is the last one I&apos;ll ever need.&rdquo; That&apos;s a first from him.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Daniel K.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Finally gave a garden gift that didn&apos;t end up in the shed.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Every year I buy my mother-in-law something for her garden. Gloves, kneelers, seeds, planters. Polite smile, thank you, and I never see it again. I tried the Grange Carrier this Christmas. She wore it the next morning and has worn it every day since. She actually called to thank me. That has literally never happened.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Lisa P.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION - Gift-Giver Questions
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Gift-Giver Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Here&apos;s what other gift-givers asked before ordering.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will this fit them? I don&apos;t know their size.
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Cross-Back Harness is fully adjustable and fits most body types — men, women, petite, broad-shouldered. The straps adjust in seconds and distribute weight evenly whether they&apos;re picking herbs or hauling 20 pounds of tomatoes. Gardeners from their 30s through their 80s wear it comfortably. And if it doesn&apos;t fit, the 60-day guarantee covers you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              They already have a gardening apron. Will they actually switch?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              That&apos;s exactly who this is for. Most gardeners are putting up with a carrier that sags, hurts their neck, or frays at the seams. Once they try the Drop-Chute and feel the difference of the cross-back harness, the old one goes straight to the garage. We hear this from gift recipients every week.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if they don&apos;t like it?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Full 60-day money-back guarantee. If they don&apos;t use it, you get a complete refund. We cover return shipping. No restocking fee. No forms. No hoops. Zero risk for you as the gift-giver.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is $49 the right price range for a garden gift?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              At $49 (normally $80), it hits the sweet spot — premium enough to feel like a real gift, practical enough that it won&apos;t feel wasteful. They also get two gardening guides ($33 value) and a lifetime warranty. Compare that to a $20 pair of gloves that wears out by July.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What exactly is included?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Grange Carrier with Zero-Gravity Cross-Back Harness and Quick-Release Drop-Chute, deep tool sheaths for pruning shears, a hidden waterproof phone pocket, The Endless Harvest gardening guide ($18 value), the Harvest Keeper&apos;s Handbook for produce storage ($15 value), and a lifetime warranty on all materials and craftsmanship.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How fast will it ship?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders are processed within 1 business day. Standard shipping is 3-5 business days. If you&apos;re ordering for a specific occasion, we recommend ordering at least 7 days in advance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============================================
          STICKY CTA - Bottom fixed purchase button
          ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#4A3F35]/95 backdrop-blur-md border-t-2 border-[#4A3F35] py-4 px-4 z-50 shadow-2xl">
        <div className="max-w-lg mx-auto">
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg mb-2.5 shadow-lg transition-all hover:shadow-xl"
            >
              Give 39% Off + 2 Free Guides
            </Button>
          </a>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-xs text-white/80 font-semibold">
              4.8/5 (800+ Reviews) <span className="text-muted-foreground mx-1">&bull;</span> 22,000+ Gardeners
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
