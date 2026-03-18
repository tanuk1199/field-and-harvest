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

export default function DitchingBucketsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          HEADER - Logo only, no promo banner
          Cold traffic: editorial feel, not a sale
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card border-b border-border/50">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION - Editorial, story-driven
          No CTA above the fold. Continue the ad's story.
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        {/* Lifestyle image — matches ad aesthetic */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <Asset name="heroImage" alt="Gardener harvesting with ease" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Editorial headline */}
        <div className="mt-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons Gardeners Are <span className="text-[#C86F4C]">Throwing Out</span> Their Buckets, Baskets, and Crates
          </h1>

          {/* Narrative bridge — pays off ad curiosity */}
          <div className="mt-5 text-left space-y-4">
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              If you&apos;ve been gardening for any length of time, you know the routine: grab a bucket, fill it up, lug it inside, come back out, repeat. Your back knows it too.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              But something&apos;s been shifting. Thousands of home gardeners — many in their 60s and 70s — have quietly switched to a completely different method. No buckets. No baskets. No crates. And they&apos;re saying they&apos;ll never go back.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              Here&apos;s what they figured out:
            </p>
          </div>
        </div>

        {/* Social proof — subtle, no CTA */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by 22,000+ gardeners
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE SECTIONS - Problem-first cards
          Lead with pain they recognize, then reveal solution
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">
        {/* Reason 1 — The bending problem */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              THE BENDING PROBLEM
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Still bending over 30 times a harvest to empty your bucket?
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason1Image" alt="Quick-Release Drop-Chute" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Every bucket, basket, and crate requires the same thing: bend down to set it, bend down to pick it up, bend over to empty it out. By the time you&apos;re done, your lower back has done more work than your garden shears.
          </p>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base mt-3">
            The gardeners who switched use something with a <span className="font-bold text-foreground">Quick-Release Drop-Chute</span> — industrial-grade buckles that unlatch with a pinch. The entire harvest slides out in one motion while they&apos;re standing upright. <span className="font-bold text-foreground">Zero bending. Fifteen to twenty minutes saved per session.</span>
          </p>
        </div>

        {/* Reason 2 — The weight problem */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              THE WEIGHT PROBLEM
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Your neck and shoulders shouldn&apos;t be the price of a good harvest
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason2Image" alt="Zero-Gravity Cross-Back Harness" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Carry a bucket in one hand and your entire body compensates — lopsided load, shoulder strain, grip fatigue. Aprons are worse: they hang everything from your neck. An hour in, your body quits before your garden does.
          </p>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base mt-3">
            The alternative is a <span className="font-bold text-foreground">Cross-Back Harness</span> that distributes weight across both shoulders and your lower back, like a hiking pack. Twenty pounds of tomatoes, evenly spread. <span className="font-bold text-foreground">Gardeners in their 60s and 70s say this is what lets them stay out for hours instead of quitting by noon.</span>
          </p>
        </div>

        {/* ============================================
            PRODUCT REVEAL — "What is this thing?"
            Bridges from editorial to product awareness
            ============================================ */}
        <div className="bg-[#F4EFE3] rounded-2xl p-8 text-center">
          <p className="text-sm font-bold text-[#6B5D4F] uppercase tracking-wider mb-4">What they switched to</p>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-muted mb-5 shadow-md max-w-sm mx-auto">
            <Asset name="productMain" alt="The Grange Carrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">The Grange Carrier</h3>
          <p className="text-base text-foreground/70 leading-relaxed max-w-sm mx-auto">
            A wearable harvest carrier with a cross-back harness, 20-lb kangaroo pouch, and a drop-chute that empties your entire harvest in one second. Built to replace every bucket, basket, and crate you own.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-foreground/60 font-medium">
              4.8 stars from 800+ reviews
            </p>
          </div>
        </div>

        {/* Reason 3 — The trips problem */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              THE TRIPS PROBLEM
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            How many trips back to the house does one harvest really need?
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason4Image" alt="20-pound hands-free pouch" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Small bucket? Three trips. Large bucket? Too heavy to carry comfortably. You&apos;re constantly choosing between more trips or more strain.
          </p>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base mt-3">
            The Grange Carrier&apos;s kangaroo-style pouch holds a full <span className="font-bold text-foreground">20 pounds centered on your torso</span>. Both hands stay free for picking. Built-in tool sheaths and a zippered phone pocket mean everything you need stays on you. <span className="font-bold text-foreground">One trip. Both hands free. Nothing left behind.</span>
          </p>
        </div>

        {/* First soft CTA — after 3 reasons, they know the product */}
        <div className="text-center py-2">
          <a href={PDP_URL} className="inline-flex items-center gap-2 text-[#C86F4C] font-bold text-lg hover:underline underline-offset-4 transition-colors">
            See the Grange Carrier &rarr;
          </a>
          <p className="text-sm text-muted-foreground mt-2">39% off today + 2 free gardening guides</p>
        </div>

        {/* Reason 4 — The replacement cycle */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              THE REPLACEMENT CYCLE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            How much have you already spent replacing things that break?
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason3Image" alt="Field-Weave 600D Canvas" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Handles fray. Bottoms sag. Seams tear under load. A $15 basket replaced every season or two adds up to $75-$100 over a decade — and you&apos;re still looking for the next one.
          </p>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base mt-3">
            The Grange Carrier uses <span className="font-bold text-foreground">Field-Weave 600D Canvas</span> — the same material found in premium ultralight hiking packs. Thorn-proof, puncture-resistant, and light enough to forget it&apos;s there. Metal hardware, reinforced stitching at every stress point. <span className="font-bold text-foreground">This is the last one you buy.</span>
          </p>
        </div>

        {/* Reason 5 — The mess problem */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              THE MESS PROBLEM
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Tired of changing clothes every time you come inside?
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason5Image" alt="Dry-Wear water-resistant barrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cotton aprons soak through in minutes. Dew, tomato juice, wet soil — all of it transfers straight to your shirt. You either change clothes or live with it.
          </p>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base mt-3">
            The Grange Carrier&apos;s <span className="font-bold text-foreground">Dry-Wear barrier</span> lines the entire pouch and stops moisture from reaching your clothes. A quick wipe-down and it&apos;s ready again. <span className="font-bold text-foreground">Garden to dinner table without changing.</span>
          </p>
        </div>

        {/* Reason 6 — The risk */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              THE RISK QUESTION
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            What if it doesn&apos;t work for you? They thought of that too.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason6Image" alt="Lifetime warranty guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            <span className="font-bold text-foreground">Lifetime warranty</span> against defects in materials and craftsmanship. If the fabric, stitching, or buckles fail, they replace it. Not sure yet? <span className="font-bold text-foreground">Try it for 60 days. Full refund, they pay return shipping.</span> No hoops, no restocking fee.
          </p>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base mt-3">
            That&apos;s why 22,000 gardeners stopped looking. The risk isn&apos;t trying it. The risk is another season with the same sore back and the same worn-out bucket.
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SECTION - Full showcase with offer
          Now they know the product — show the deal
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            Lifetime Warranty + 60-Day Guarantee
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Ready to Ditch the Bucket?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            Join 22,000+ gardeners who stopped replacing and started enjoying their harvest again.
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
                <p className="text-xs text-foreground font-semibold leading-snug">1-Second Drop-Chute empties your harvest instantly</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <Asset name="benefitIcon2" alt="Feather" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Zero-Gravity Harness carries 20 lbs pain-free</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <Asset name="benefitIcon3" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">600D Canvas, thorn-proof and built for decades</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <Asset name="benefitIcon4" alt="Water drop" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Water-resistant lining keeps your clothes clean</p>
              </div>
            </div>

            {/* Primary CTA — first full button */}
            <a href={PDP_URL}>
              <Button
                size="lg"
                className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
              >
                Get 39% Off + 2 Free Guides
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          REVIEWS SECTION - Customer testimonials
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Gardeners Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">4.8 out of 5 from 800+ reviews</p>
        </div>

        <div className="space-y-4">
          {/* Review 1 — back pain relief */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My neck and shoulders don&apos;t hurt anymore.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;m 68 and garden every morning. My old apron hung everything from my neck and I&apos;d be sore by noon. The cross-back straps on this distribute the weight completely differently. I can carry a full load of tomatoes and peppers without thinking about it. That alone was worth the price.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Robert K.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — replacement cycle */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Third carrier in five years. This one ends it.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I went through a canvas tote, then a wire basket with a shoulder strap, then a cheap apron. All broke or wore out within two seasons. The Grange Carrier is on its second summer and looks the same as the day it arrived. I&apos;m done shopping for these.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Margaret T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 — drop chute */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;The drop chute changed how I feel about harvest day.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Emptying a full pouch used to mean standing over the sink scooping everything out one handful at a time. Now I just unlatch the bottom and everything slides into the colander. It sounds small but it changed how I feel about the end of a harvest session.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Linda S.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — neighbor conversion */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My neighbor saw mine and ordered one the same day.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              She saw me using mine and asked where I got it. We garden together most mornings and now we both just walk through the rows hands-free, fill up, and dump everything at the potting bench in seconds. Ordered the two-pack for my daughter and son-in-law as well.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">James W.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION - Frequently Asked Questions
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know before making the switch.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What exactly is the Grange Carrier?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              It&apos;s a wearable harvest carrier — think of it as a hands-free alternative to buckets, baskets, and aprons. It has a 20-pound kangaroo-style pouch that sits on your torso, a cross-back harness that distributes weight like a hiking pack, and a quick-release drop-chute that empties your entire harvest in one second. Built-in tool sheaths and a zippered phone pocket so everything stays on you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it help with my back pain?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              That&apos;s the most common reason people switch. The cross-back harness routes weight across both shoulders and your lower back instead of hanging it from your neck. The drop-chute means no bending to empty. Gardeners in their 60s and 70s consistently report being able to stay out longer without the soreness they&apos;d get from buckets or aprons.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is $49 a lot for a harvest carrier?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              It&apos;s less than you&apos;ve already spent replacing cheaper ones. A $15 carrier replaced every 1-2 years costs $75-$100 over a decade, and you&apos;re still looking. The Grange Carrier is $49 once, backed by a lifetime warranty. You also get two gardening guides ($33 value) free.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it doesn&apos;t work for me?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Try it for 60 days. If it doesn&apos;t work for you, return it for a full refund. We cover return shipping. No restocking fee, no questions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will it fit me? I&apos;m worried about sizing.
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Cross-Back Harness adjusts to fit most body types. The straps are designed to distribute weight evenly whether you&apos;re picking herbs or hauling a full 20-pound tomato harvest. Gardeners from their 30s through their 80s use it comfortably.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How fast will it ship?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders are processed within 1 business day. Standard shipping is 3-5 business days.
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
              Get 39% Off + 2 Free Guides
            </Button>
          </a>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-xs text-white/80 font-semibold">
              4.8/5 (800+ Reviews) <span className="text-white/40 mx-1">&bull;</span> 60-Day Risk-Free Trial
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
