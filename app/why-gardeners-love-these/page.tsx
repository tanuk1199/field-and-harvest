import { Button } from "@/components/ui/button"
import { Star, ShieldCheck } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Asset } from "@/components/asset"
import { WglAsset } from "@/components/wgl-asset"
import { GroveProductCard } from "@/components/grove-product-card"
import type { Metadata } from "next"

const PDP_URL = "https://fieldandharvestco.com/products/the-grove-starter-set"

export const metadata: Metadata = {
  title: "6 Reasons Gardeners Love These Seedling Trays | The Grove Starter Set",
  description:
    "80 cells, built-in LED grow lights, humidity domes, reusable silicone. Discover why gardeners love the Grove Starter Set by Field & Harvest Co. 21% OFF + 2 free gardening guides + lifetime warranty.",
}

export default function WhyGardenersLoveThesePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* ============================================
          PROMOTIONAL BANNER
          ============================================ */}
      <div className="bg-[#4A3F35] text-center py-3 px-4">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">21% OFF</span>{" "}
          <span className="text-white/90 uppercase tracking-wide">+ 2 FREE GARDENING GUIDES + LIFETIME WARRANTY</span>
        </p>
      </div>

      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-white/60 backdrop-blur-sm">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-10">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-muted">
          <WglAsset name="heroImage" alt="The Grove Starter Set" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Sale badge */}
        <div className="mt-6 text-center">
          <span className="inline-block bg-[#C86F4C]/10 border border-[#C86F4C]/20 rounded-full py-2 px-5 font-bold text-sm text-[#C86F4C]">21% OFF + 2 Free Guides + Lifetime Warranty</span>
        </div>

        {/* Main headline */}
        <div className="mt-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2118] leading-tight text-balance tracking-tight">
            6 Reasons Gardeners <span className="text-[#C86F4C]">Love</span> These Seedling Trays
          </h2>
          <p className="text-lg md:text-xl text-[#6B5D4F] mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            80 cells. Built-in grow lights. Humidity domes. Silicone that lasts season after season. Here&apos;s why gardeners keep coming back to the Grove Starter Set — and why they tell everyone about it.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-xl shadow-lg transition-all hover:shadow-xl"
          >
            See Why Gardeners Love These
          </Button>
        </a>

        {/* Social proof */}
        <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <p className="text-sm text-[#2D2118] font-medium">
            4.9 stars <span className="text-[#6B5D4F] mx-1">&bull;</span> 2-Pack Set <span className="text-[#6B5D4F] mx-1">&bull;</span> 80 Cells Total
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE SECTIONS — 6 Reasons
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">

        {/* Reason 1 — LIGHT */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Light</span>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Built-in LED grow lights. Nothing else to buy.
          </h3>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WglAsset name="reason1Image" alt="Built-in LED grow lights on the Grove Starter Set" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most seed starting setups need a separate grow light, a timer, and a power strip before you&apos;ve planted a single seed. The Grove Starter has full-spectrum LED lights built right into the dome. Set your trays on the counter, plug in, and your seedlings get the light they need from day one. <span className="font-bold text-foreground">No clamp lamps. No cord tangles. No extra trip to the store.</span>
          </p>
        </div>

        {/* Reason 2 — CAPACITY */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Capacity</span>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            80 cells. Your whole garden, started in one round.
          </h3>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WglAsset name="reason2Image" alt="80 cells across 2 trays — complete seed starting system" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Two trays, 40 cells each. Tomatoes, peppers, herbs, greens, flowers — start everything at once instead of staggering batches and waiting for tray space. Most home gardeners plant 40-80 seedlings per season. One Grove Starter Set covers that in a single weekend. <span className="font-bold text-foreground">One setup. One round. Your entire season, handled.</span>
          </p>
        </div>

        {/* Reason 3 — CONTROL */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Control</span>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Humidity domes you actually adjust. Not just a plastic lid.
          </h3>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WglAsset name="reason3Image" alt="Humidity domes with adjustable vents for controlled germination" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Seeds need consistent moisture to germinate. Open-air trays dry out too fast. Sealed domes trap too much moisture and invite mold. The Grove Starter&apos;s humidity domes have adjustable vents so you control airflow as your seedlings develop. Close them for germination. Open them as sprouts emerge. <span className="font-bold text-foreground">The difference between &ldquo;a few came up&rdquo; and &ldquo;almost everything germinated&rdquo; is usually just humidity.</span>
          </p>
        </div>

        {/* Reason 4 — REUSABLE */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Reusable</span>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Silicone trays that come back every season. No cracks. No replacements.
          </h3>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WglAsset name="reason4Image" alt="Reusable silicone seed starting trays, season after season" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap plastic trays crack after a season or two. The cells get brittle, the edges split, and you&apos;re back at the store buying the same thing again. The Grove Starter Set is silicone. It flexes for easy seedling removal, cleans up in minutes, and holds its shape year after year. <span className="font-bold text-foreground">The longer you use it, the less each season costs.</span>
          </p>
        </div>

        {/* Reason 5 — TIMING */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Timing</span>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Start 6 weeks early. Be transplant-ready when spring arrives.
          </h3>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <WglAsset name="reason5Image" alt="Seedlings growing indoors weeks before spring" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Indoor seed starting gives you a 4-8 week head start on the growing season. By the time the ground thaws, your seedlings are already established and ready to go in the soil. More growing time from the same beds, the same space. <span className="font-bold text-foreground">While everyone else is buying nursery seedlings, yours are already in the ground and growing.</span>
          </p>
        </div>

        {/* Reason 6 — OFFER */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C86F4C]" />
              <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Risk-Free Offer</span>
            </div>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            21% off. 2 free guides. 60-day guarantee. Lifetime warranty.
          </h3>
          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Right now the Grove Starter Set comes with 21% off and 2 free gardening guides. Try it for a full 60 days. Use it through an entire seed starting round. If it doesn&apos;t change the way you start your garden, send it back for a full refund. And if anything fails — ever — the lifetime warranty covers it. <span className="font-bold text-foreground">No risk. No rush. Just a better way to start your seeds.</span>
          </p>
        </div>

      </section>

      {/* ============================================
          PRODUCT SECTION
          ============================================ */}
      <GroveProductCard />

      {/* ============================================
          REVIEWS SECTION
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2118] mb-2 text-balance leading-tight">
            What Gardeners Are Saying
          </h2>
          <p className="text-sm text-[#6B5D4F]">From the people who use it every season</p>
        </div>

        <div className="space-y-4">
          {/* Review 1 */}
          <div className="bg-white border border-[#E8E0D4] rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-[#2D2118] mb-2">&ldquo;The built-in lights sold me. Everything else kept me.&rdquo;</p>
            <p className="text-sm text-[#6B5D4F] leading-relaxed mb-3">
              I was about to buy a separate grow light setup for $50 when I found the Grove Starter. The LEDs are built right in. I set two trays on my kitchen counter, plugged them in, and had sprouts within a week. No clamp lights, no extension cords, no timer to figure out. This is the simplest seed starting setup I&apos;ve used in 15 years of gardening.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2D2118]">Linda S.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded-full">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white border border-[#E8E0D4] rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-[#2D2118] mb-2">&ldquo;80 cells sounded like a lot. Then I filled them all in one afternoon.&rdquo;</p>
            <p className="text-sm text-[#6B5D4F] leading-relaxed mb-3">
              I thought 80 cells was overkill for my backyard garden. Then I sat down and counted: 12 tomato varieties, 6 pepper types, basil, cilantro, parsley, zinnias, marigolds, and lettuce. I used 74 cells and wished I had a few more. Two trays is the right amount for anyone who actually gardens. Not too many, not too few.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2D2118]">Mark T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded-full">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white border border-[#E8E0D4] rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-[#2D2118] mb-2">&ldquo;Third season with mine. Still looks and works like new.&rdquo;</p>
            <p className="text-sm text-[#6B5D4F] leading-relaxed mb-3">
              I pulled my Grove trays out for the third year in a row. Washed them, filled the cells, closed the domes, plugged in the lights. Everything works exactly like it did the first time. The silicone hasn&apos;t warped. The vents still click. My old plastic trays never made it past one season without cracking. These just keep going.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2D2118]">Susan H.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded-full">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-white border border-[#E8E0D4] rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-[#2D2118] mb-2">&ldquo;I&apos;ve never had this many seeds actually germinate.&rdquo;</p>
            <p className="text-sm text-[#6B5D4F] leading-relaxed mb-3">
              The humidity domes made the difference. I used to lose half my seeds to dry-out or mold because I couldn&apos;t get the moisture right. The adjustable vents on these let me close them tight for the first few days, then crack them open once the sprouts appeared. I started 72 cells this round and 68 germinated. That&apos;s the best rate I&apos;ve ever had.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2D2118]">Paul M.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded-full">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2118] mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-[#6B5D4F] text-pretty max-w-md mx-auto">
            Everything you need to know before you start growing.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="item-1" className="bg-white border border-[#E8E0D4] rounded-xl px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-[#2D2118] hover:no-underline py-5">
              How many plants can I start with 80 cells?
            </AccordionTrigger>
            <AccordionContent className="text-[#6B5D4F] leading-relaxed pb-5">
              80 cells means 80 individual seedlings. Most home gardeners plant 40-80 seedlings per season, so one set covers your entire garden. Start tomatoes, peppers, herbs, flowers, and greens all at once. If you succession plant, clean and refill the trays for a second round.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white border border-[#E8E0D4] rounded-xl px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-[#2D2118] hover:no-underline py-5">
              Do I need to buy a separate grow light?
            </AccordionTrigger>
            <AccordionContent className="text-[#6B5D4F] leading-relaxed pb-5">
              No. The Grove Starter Set has LED grow lights built into the dome. They provide the light spectrum seedlings need to grow strong and compact. No clamp lights, no timers to configure, no extra purchases.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white border border-[#E8E0D4] rounded-xl px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-[#2D2118] hover:no-underline py-5">
              Is starting from seed actually hard?
            </AccordionTrigger>
            <AccordionContent className="text-[#6B5D4F] leading-relaxed pb-5">
              No. Fill the cells with seed starting mix, drop in seeds, close the humidity dome, and turn on the lights. The dome and adjustable vents maintain moisture so you water less. Most seeds germinate in 5-14 days. If you can follow the back of a seed packet, you can do this.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white border border-[#E8E0D4] rounded-xl px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-[#2D2118] hover:no-underline py-5">
              Will the trays last more than one season?
            </AccordionTrigger>
            <AccordionContent className="text-[#6B5D4F] leading-relaxed pb-5">
              Yes. The Grove Starter Set is silicone — it flexes for easy seedling removal and holds up season after season. Unlike plastic trays that crack and warp, these come back every spring ready to use. Backed by a lifetime warranty.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white border border-[#E8E0D4] rounded-xl px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-[#2D2118] hover:no-underline py-5">
              What&apos;s included in the set?
            </AccordionTrigger>
            <AccordionContent className="text-[#6B5D4F] leading-relaxed pb-5">
              2 seed starting trays (40 cells each, 80 total), 2 humidity domes with built-in LED grow lights and adjustable vents. Plus 2 free gardening guides with your order. Everything you need to start growing — just add soil and seeds.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-white border border-[#E8E0D4] rounded-xl px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-[#2D2118] hover:no-underline py-5">
              What if it doesn&apos;t work for me?
            </AccordionTrigger>
            <AccordionContent className="text-[#6B5D4F] leading-relaxed pb-5">
              Try it for 60 days. Use it through an entire seed starting round. If it doesn&apos;t change the way you start your garden, send it back for a full refund. The lifetime warranty covers materials and craftsmanship for as long as you own it. No risk.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============================================
          STICKY CTA
          ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#4A3F35]/95 backdrop-blur-md border-t border-[#5A4F45] py-4 px-4 z-50 shadow-2xl">
        <div className="max-w-lg mx-auto">
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-xl mb-2.5 shadow-lg transition-all hover:shadow-xl"
            >
              Get 21% Off + 2 Free Guides
            </Button>
          </a>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-xs text-white/80 font-semibold">
              4.9/5 Stars <span className="text-white/40 mx-1">&bull;</span> Lifetime Warranty <span className="text-white/40 mx-1">&bull;</span> 60-Day Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
