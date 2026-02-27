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
import { GroveAsset } from "@/components/grove-asset"
import { GroveProductCard } from "@/components/grove-product-card"
import type { Metadata } from "next"

const PDP_URL = "https://fieldandharvestco.com/products/the-grove-starter-set"

export const metadata: Metadata = {
  title: "Skip the Nursery — Start 80 Plants From Seed | The Grove Starter Set",
  description:
    "Nursery seedlings cost $4-5 each. Start 80 plants from seed for the price of a few packets. The Grove Starter Set: 2 trays, 80 cells, built-in LED grow lights, humidity domes. Field & Harvest Co.",
}

export default function SkipTheNurseryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMOTIONAL BANNER
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">GET 21% OFF</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 FREE GARDENING GUIDES</span>
        </p>
      </div>

      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <GroveAsset name="heroImage" alt="The Grove Starter Set" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Sale badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save 21% OFF + 2 Free Gardening Guides</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons to <span className="text-[#C86F4C]">Skip the Nursery</span> and Start From Seed
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Nursery seedlings run $4-5 each. A few seed packets fill all 80 cells. The Grove Starter Set has everything you need to grow more, spend less, and never depend on the garden center again.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Skip the Nursery — Start From Seed
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
            4.9 stars <span className="text-muted-foreground mx-1">&bull;</span> 2-Pack Set <span className="text-muted-foreground mx-1">&bull;</span> 80 Cells Total
          </p>
        </div>
      </section>

      {/* ============================================
          LISTICLE SECTIONS — 6 Reasons
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">
        {/* Reason 1 — The Math */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              SAVINGS
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            80 plants from seed. Not $400 at the nursery.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason1Image" alt="Cost comparison — seeds vs nursery seedlings" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            A single nursery seedling costs $4-5. Multiply that by 80 and you&apos;re looking at $320-$400 before you&apos;ve planted a single thing. A few seed packets? Under $20. The Grove Starter Set gives you 80 cells across 2 trays to start everything at once. <span className="font-bold text-foreground">It pays for itself before your first transplant hits soil.</span>
          </p>
        </div>

        {/* Reason 2 — Variety */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              VARIETY
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Grow what your garden center will never carry
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason2Image" alt="Heirloom seeds and rare herb varieties" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Nurseries stock the same 15 tomato varieties because that&apos;s what ships well on a truck. From seed, you choose from thousands. Heirloom Brandywines. Purple Cherokee. Lemon basil. Thai chilies. Flowers your neighbors will ask about by name. <span className="font-bold text-foreground">Your garden, your catalog. Not theirs.</span>
          </p>
        </div>

        {/* Reason 3 — Built-in LED */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              LIGHT
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Built-in LED grow lights. No extra equipment.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason3Image" alt="Built-in LED grow lights on the Grove Starter Set" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most seed starting setups need a separate grow light, a timer, and a power strip. That&apos;s another $30-60 before you&apos;ve planted a single seed. The Grove Starter has full-spectrum LED lights built right into the dome. <span className="font-bold text-foreground">Plug in and grow. One less thing to buy. One less thing to set up.</span>
          </p>
        </div>

        {/* Reason 4 — Head Start */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              TIMING
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Start 6 weeks early. Harvest 6 weeks longer.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason4Image" alt="Seedlings growing indoors while it's still winter" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Indoor seed starting gives you a 4-8 week head start on your growing season. By the time your neighbors are browsing the garden center, yours are already in the ground and growing. More time growing means more food from the same garden. <span className="font-bold text-foreground">Same beds. Same space. Weeks of extra harvest.</span>
          </p>
        </div>

        {/* Reason 5 — Reusable */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              REUSABLE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            One purchase. Years of growing seasons.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason5Image" alt="Reusable seed starting trays, season after season" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap plastic trays crack after a season or two. Then you&apos;re back at the store buying the same thing again. The Grove Starter Set is built to come back every spring. The longer you use it, the less each season costs. <span className="font-bold text-foreground">Year one saves you money. Year three? It&apos;s practically free.</span>
          </p>
        </div>

        {/* Reason 6 — Complete System */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              COMPLETE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Everything in the box. Nothing else to buy.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason6Image" alt="Complete seed starting system — everything included" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            2 trays. 80 cells. Built-in LED grow lights. Humidity domes with adjustable vents. This is a complete seed starting system, not a tray that needs $50 in accessories to function. Open the box, add soil and seeds, and you&apos;re growing. <span className="font-bold text-foreground">No extra trips. No extra purchases. Just plants.</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance leading-tight">
            What Gardeners Are Saying
          </h2>
          <p className="text-sm text-muted-foreground">From gardeners who stopped buying nursery seedlings</p>
        </div>

        <div className="space-y-4">
          {/* Review 1 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I did the math. I saved over $300 this spring.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I used to buy 60-70 seedlings from the garden center every year. At $4-5 each that&apos;s $280 minimum. This year I started everything from seed with the Grove Starter. A dozen seed packets cost me $30. The trays paid for themselves on the first use and I still have cells left over.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Patricia M.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;The built-in lights are the reason I bought this over everything else.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I was about to spend $45 on a separate grow light when I found this. The LED lights are right in the dome. I set the trays on my kitchen counter, plugged them in, and had sprouts within a week. No clamp lights, no timer setup, no tangled cords. Just seeds and light.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">David R.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Finally growing heirlooms my nursery never carries.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              My local garden center has the same Early Girl and Better Boy tomatoes every year. I wanted Brandywine, Cherokee Purple, and San Marzano. From seed it&apos;s easy. I started all three plus basil, peppers, and zinnias. 80 cells is a lot more than I expected and the vents on the dome keep humidity just right.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Karen L.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Second season using mine. Still works like the first day.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Bought this last year and just pulled it out again for round two. Cleaned it up, filled the cells, and it&apos;s going again. My old plastic trays would have cracked by now. The savings stack up when you don&apos;t have to replace your equipment or your seedlings every spring.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Tom H.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know before you skip the nursery for good.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How many plants can I actually start with 80 cells?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              80 cells means 80 individual seedlings. Most home gardeners plant 40-80 seedlings per season, so one set covers your entire garden. You can start tomatoes, peppers, herbs, flowers, and greens all at once. If you succession plant, clean and refill the trays for a second round.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Do I need to buy a separate grow light?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              No. The Grove Starter Set has LED grow lights built into the dome. They provide the light spectrum seedlings need to grow strong and compact. No clamp lights, no timers to configure, no extra purchases.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is starting from seed actually hard?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              No. Fill the cells with seed starting mix, drop in seeds, close the humidity dome, and turn on the lights. The dome and vents maintain moisture so you water less. Most seeds germinate in 5-14 days. If you can follow the back of a seed packet, you can do this.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How much money will I actually save?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Nursery seedlings cost $4-5 each. Starting 80 plants from seed packets costs $15-30 total. That&apos;s a $300+ difference in one season. Since the trays are reusable, the savings compound every year. By season two, your only cost is seed packets.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What&apos;s included in the set?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              2 seed starting trays (40 cells each, 80 total), 2 humidity domes with built-in LED grow lights and adjustable vents. Plus 2 free gardening guides. Everything you need to start growing. Just add soil and seeds.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How fast will it ship?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders are processed within 1 business day. Standard shipping is 3-5 business days. Start your seeds this week.
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
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg mb-2.5 shadow-lg transition-all hover:shadow-xl"
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
              4.9/5 Stars <span className="text-muted-foreground mx-1">&bull;</span> 2-Pack <span className="text-muted-foreground mx-1">&bull;</span> 80 Cells <span className="text-muted-foreground mx-1">&bull;</span> Built-in LED Lights
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
