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
  title: "Start Your Seeds Before Spring Hits | The Grove Starter Set — Field & Harvest Co.",
  description:
    "Smart gardeners start seeds 6-8 weeks before last frost. The Grove Starter Set: 2 trays, 80 cells, built-in LED grow lights, humidity domes. Order before the spring rush — 21% OFF + 2 free guides.",
}

export default function SpringStartPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMOTIONAL BANNER
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">SPRING RUSH: 21% OFF</span>{" "}
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
          <GroveAsset name="heroImage" alt="The Grove Starter Set — start seeds before spring" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Sale badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Spring Rush: 21% OFF + 2 Free Guides</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons Smart Gardeners Start Their Seeds <span className="text-[#C86F4C]">Before</span> Spring Hits
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Every year it&apos;s the same story. Orders spike. Stock runs low. Shipping stretches into April. The gardeners with seedlings ready on transplant day aren&apos;t lucky — they started weeks ago.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Start Your Seeds Before the Rush
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
        {/* Reason 1 — Timing / Head Start */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              TIMING
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            February is when your spring garden actually begins
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason4Image" alt="Seedlings growing indoors weeks before spring" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            By the time the ground thaws, it&apos;s already too late to start from seed outdoors. Smart gardeners start indoors 6-8 weeks before last frost. That means February and early March — not April. The Grove Starter Set gives you 80 cells across 2 trays to get everything going at once. Tomatoes, peppers, herbs, flowers. <span className="font-bold text-foreground">When your neighbors are browsing the garden center in April, yours are already hardened off and ready for soil.</span>
          </p>
        </div>

        {/* Reason 2 — Demand / Urgency */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              DEMAND
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Every spring we see the same surge. Every spring, someone orders too late.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason1Image" alt="Spring demand surge — order before stock runs low" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Seed starting gear follows a predictable pattern. January is quiet. February picks up. By mid-March, orders spike and shipping windows stretch. Last spring, demand outpaced restocks before April. Right now, inventory is full and shipping is fast. In six weeks, that changes. <span className="font-bold text-foreground">The window to get set up before the rush is open now. It won&apos;t stay open long.</span>
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
            Built-in LED grow lights. No clamp lamps. No timer setup. No extra cost.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason3Image" alt="Built-in LED grow lights on the Grove Starter Set" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most seed starting setups need a separate grow light, a power strip, and a timer. That&apos;s another $30-60 and a tangle of cords on your counter. The Grove Starter has full-spectrum LED lights built right into the dome. Your seedlings get consistent light from day one without a single extra purchase. <span className="font-bold text-foreground">Plug in. Turn on. That&apos;s the whole setup.</span>
          </p>
        </div>

        {/* Reason 4 — Capacity */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              CAPACITY
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            80 cells. Your entire spring garden, started in one weekend.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason6Image" alt="80 cells across 2 trays — complete seed starting system" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most gardeners plant 40-80 seedlings per season. One Grove Starter Set covers that in a single round. Two trays, 40 cells each. Start your tomatoes, peppers, basil, zinnias, and greens all at once — no staggering, no waiting for tray space. Succession plant later if you want a second wave. <span className="font-bold text-foreground">One setup. One weekend. Your whole season, locked in.</span>
          </p>
        </div>

        {/* Reason 5 — Humidity Control */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              CONTROL
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Humidity domes with adjustable vents. Germination you actually control.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason2Image" alt="Humidity domes with adjustable vents for controlled germination" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Seeds need consistent moisture and warmth to germinate. Open-air trays dry out. Sealed domes trap too much moisture and invite mold. The Grove Starter&apos;s humidity domes have adjustable vents so you dial in airflow as your seedlings develop. Close them for germination. Crack them open as sprouts emerge. <span className="font-bold text-foreground">The difference between &ldquo;some seeds sprouted&rdquo; and &ldquo;almost everything came up&rdquo; is usually just humidity.</span>
          </p>
        </div>

        {/* Reason 6 — Reusable */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              REUSABLE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            One purchase. Every spring after this one is already covered.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <GroveAsset name="reason5Image" alt="Reusable silicone seed starting trays, season after season" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap plastic trays crack after a season. Then you&apos;re back at the store in February buying the same thing again — if it&apos;s even in stock. The Grove Starter Set is silicone. It flexes, it cleans up, and it comes back every year. The longer you use it, the less each season costs. <span className="font-bold text-foreground">Year one is the investment. Year two and beyond? Just seeds and soil.</span>
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
          <p className="text-sm text-muted-foreground">From gardeners who started early and never looked back</p>
        </div>

        <div className="space-y-4">
          {/* Review 1 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Started in February. Had transplants ready before anyone on my street.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I used to wait until the garden center opened and grab whatever seedlings they had left. This year I started seeds in the Grove trays mid-February. By mid-April I had 60+ seedlings hardened off and ready to go in the ground. My neighbor was still browsing the nursery when my tomatoes were already flowering.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Michelle K.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I waited until March last year. Stock was gone. Not making that mistake twice.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Saw these last spring, told myself I&apos;d order later. By mid-March they were sold out. I used cheap plastic trays instead and half my cells cracked when I tried to pop the seedlings out. Ordered the Grove set in January this year. Already have sprouts coming up. Lesson learned.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">James W.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;The lights are why I bought this. No regrets.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I live in a north-facing apartment. No south window, no good natural light. The built-in LEDs solved that completely. I set the trays on my kitchen counter, plugged them in, and had strong, compact seedlings in three weeks. No leggy stretching. No separate grow light purchase. This is the simplest setup I&apos;ve ever used.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Angela T.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Second spring using mine. Works exactly like it did the first time.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Pulled my Grove trays out of the closet, washed them, filled the cells, and I&apos;m going again. The silicone hasn&apos;t warped, the vents still click, the lights still work. Last year I started tomatoes, peppers, and herbs. This year I&apos;m adding flowers. 80 cells is more than enough for both.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Robert D.</span>
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
            Everything you need to know before spring arrives.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              When should I start seeds for a spring garden?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Most vegetables and flowers need 6-8 weeks of indoor growing before they&apos;re ready to transplant. For most zones, that means starting in February or early March. The Grove Starter Set lets you start 80 seedlings at once, so you can get your whole garden going in a single weekend.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Why should I order now instead of waiting?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Every spring, orders surge between late February and March. Shipping times stretch and inventory thins out. Right now, stock is full and orders ship within 1 business day. If you wait until everyone else is ordering, you&apos;re competing for the same supply at the worst possible time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Do I need to buy a separate grow light?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              No. The Grove Starter Set has LED grow lights built into the dome. They provide the light spectrum seedlings need to grow strong and compact. No clamp lights, no timers, no extra purchases.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What can I start in 80 cells?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Anything you&apos;d grow from seed. Tomatoes, peppers, herbs, lettuce, zinnias, marigolds, squash starts — 80 cells covers a full garden for most growers. If you succession plant, clean and refill the trays for a second round in late spring.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will the trays last more than one season?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Yes. The Grove Starter Set is silicone — it flexes for easy seedling removal and holds up season after season. Unlike plastic trays that crack and warp, these come back every spring ready to go.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How fast will it ship?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders are processed within 1 business day. Standard shipping is 3-5 business days. Order now and you&apos;ll have it in hand with weeks to spare before your start date.
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
