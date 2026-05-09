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

export default function TwoTripsOrOnePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMOTIONAL BANNER — offer-led
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">SAVE 39%</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 FREE GARDENING GUIDES — LIMITED TIME</span>
        </p>
      </div>

      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO — utility-coded headline
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <Asset name="heroImage" alt="The Grange Carrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Offer badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground">Save 39% + 2 Free Gardening Guides ($33 Value)</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons This Becomes the <span className="text-[#C86F4C]">Apron You&apos;ll Never Take Off</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            Five trips to the kitchen become one. Tomatoes, weeds, twigs, eggs, the deadheading you forgot to finish — both hands stay free for the work. The Grange Carrier is the apron 22,000+ gardeners stopped putting away after they bought it.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Save 39% + Get 2 Free Guides
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
          LISTICLE — 6 utility-coded reasons
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">
        {/* Reason 1 — ONE TRIP */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              ONE TRIP
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Five trips a Saturday becomes one
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason1Image" alt="Quick-Release Drop-Chute" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            You go out for tomatoes. You come back with tomatoes, basil you forgot you had, three eggs, the trowel from yesterday, a handful of weeds you pulled on the way, and a few twigs from the path. Right now you&apos;re trying to do that with a Whole Foods tote that&apos;s already torn open. The Grange Carrier holds a full peck without collapsing — and a 1-second Drop-Chute empties it onto the kitchen counter or the compost pile in one motion. <span className="font-bold text-foreground">One trip. Hands free. Done by 7 AM.</span>
          </p>
        </div>

        {/* Reason 2 — HANDS FREE */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              HANDS FREE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Tomatoes, weeds, twigs, eggs. Both hands stay free.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason4Image" alt="20-pound kangaroo pouch" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The kangaroo-style pouch holds a full peck without collapsing. Built-in tool sheaths keep pruning shears and the weeder within reach. A zippered vault pocket protects your phone from dirt and moisture. Both hands stay free for the gate, the dog, the kid, the rocks you pull out of the bed, the deadheaded blooms on the way back. <span className="font-bold text-foreground">No more juggling a basket, a bucket, and a phone in the same hand.</span>
          </p>
        </div>

        {/* Reason 3 — BREAKS IN, NEVER WEARS OUT */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              LASTING
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Three weeks in, you&apos;ll forget you owned anything else
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason3Image" alt="Field-Weave 600D Canvas" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap aprons fray, sag, and tear within a season. You&apos;ve probably watched it happen. Field-Weave 600D Canvas is the same fabric premium hiking packs are built from — thorn-proof, puncture-resistant, semi-rigid enough to hold its shape under a full load. Sharp twigs, wet leaves, jagged rocks, sticky weeds. None of it wears it down. <span className="font-bold text-foreground">By July, gardeners stop putting it away. By August, they forget they owned anything else.</span>
          </p>
        </div>

        {/* Reason 4 — ALL-DAY COMFORT */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              ALL-DAY COMFORT
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            20 pounds across your shoulders, not your neck
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason2Image" alt="Zero-Gravity Cross-Back Harness" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most aprons hang everything from your neck. By noon, you&apos;re done — not because the garden is, but because your body is. The Zero-Gravity Cross-Back Harness distributes 20 pounds across the shoulders and back like a hiking pack. <span className="font-bold text-foreground">The garden runs longer than your back used to.</span> Gardeners from their 30s through their 80s wear it without fatigue.
          </p>
        </div>

        {/* Reason 5 — STAYS CLEAN */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              STAYS CLEAN
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Garden, yard, kitchen. Same shirt.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason5Image" alt="Dry-Wear water-resistant barrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Mud, sap, wet leaves, tomato juice, sticky weed roots. Cotton aprons soak through in minutes and transfer everything to the clothes underneath. The Dry-Wear barrier lines the entire pouch and blocks moisture on contact. A quick wipe-down and the apron is ready for the next session — yard cleanup in the morning, harvest at noon, dinner at six. <span className="font-bold text-foreground">Your favorite shirts stop dying in the garden.</span>
          </p>
        </div>

        {/* Reason 6 — RISK-FREE */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              RISK-FREE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Lifetime warranty. 60-day trial. If it&apos;s not the one, full refund.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason6Image" alt="Lifetime warranty guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Lifetime warranty covers the canvas, stitching, hardware, and harness against defects in materials and craftsmanship. 60-day trial means you can wear it through a full month of harvests. If it&apos;s not the apron you want hanging by the door every Saturday, send it back. We cover return shipping. No restocking fee. No fine print. <span className="font-bold text-foreground">Zero risk. Just the apron.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SECTION
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5">
            39% OFF + 2 Free Gardening Guides — Limited Time
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            The Apron You&apos;ll Find Ten Years From Now Still Hanging Where You Left It
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            22,000+ gardeners stopped putting theirs away after they bought it. Used for harvest, weeding, yard cleanup, leaf hauls, pet runs. Built once. Backed for life.
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
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">39% OFF + 2 FREE GARDENING GUIDES — WHILE SUPPLIES LAST</p>
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
                <p className="text-xs text-foreground font-semibold leading-snug">1-Second Drop-Chute empties a full harvest instantly</p>
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
          REVIEWS — utility-framed
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
          {/* Review 1 — the integration moment */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I haven&apos;t taken it off since April. My husband makes fun of me.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I bought this in early April thinking I&apos;d use it for spring planting and put it away. It&apos;s now mid-May and it&apos;s been on a hook by the back door every single day. I wear it for tomato runs, herb cuts, even just walking the dog while I check on things. The pockets hold everything. I forgot I owned three other aprons. They&apos;re still in the closet. I don&apos;t care.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Sarah M.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 — five trips became one */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Five trips to the kitchen Saturday morning became one. That&apos;s the whole sales pitch.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;d never thought about how many trips I made between the garden and the kitchen until I stopped making them. Tomatoes, basil, the snips I&apos;d left on the bench, two eggs from the run, the chapstick I dropped Tuesday — all in the apron, all in one trip. The drop-chute thing onto the counter is the part I show people first.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Tom R.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 3 — comfort */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I&apos;m 68. The harness is the difference between gardening for an hour and gardening all morning.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              My old apron hung everything from my neck. My shoulders would be done by 10. I almost stopped gardening because I thought I was getting too old for it. The Cross-Back Harness puts the weight on my upper back, the way a hiking pack does. I don&apos;t feel the load. I&apos;ve been out there until lunchtime three Saturdays in a row.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Daniel K.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 4 — daily-driver */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;The only garden tool that didn&apos;t end up in the back of the shed.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Every spring I buy something for the garden and every August it&apos;s in a pile of stuff I forgot I owned. This thing is on a peg by the kitchen door. I see it every time I walk past. I put it on. I use it. It&apos;s been four months and the canvas is just starting to look broken in. I get the feeling I&apos;ll be using it in ten years.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Lisa P.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ — utility-framed
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know before it shows up at your door.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-0" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is this just for harvest, or can I use it year-round?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Year-round. Most owners use it for far more than tomato runs — spring weeding, fall leaf and twig cleanup, hauling rocks out of new beds, deadheading, mulching, pet/chicken runs, even toolbelt duty for general yard work. The 600D canvas handles thorns, sap, mud, and wet leaves without flinching, and the Drop-Chute empties everything onto the compost pile in one motion. Gardeners who buy it in spring are still wearing it through fall cleanup.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-offer" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How does the 39% off + 2 free guides offer work?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              You get 39% off the Grange Carrier plus two free gardening guides — The Endless Harvest ($18 value) and the Harvest Keeper&apos;s Handbook for produce storage ($15 value). Total $33 in free guides, automatically applied at checkout. The offer runs while supplies last on this season&apos;s inventory. Once it ends, pricing returns to standard. If you&apos;re considering, this is the window.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How long does this actually last?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Field-Weave 600D Canvas is the same fabric used in premium hiking packs — thorn-proof, puncture-resistant, semi-rigid. It doesn&apos;t fray or sag the way cotton aprons do. Most gardeners report theirs looking better-broken-in (not worn out) at the 3–5 year mark. The lifetime warranty covers material and craftsmanship defects, so if something goes wrong, we replace it.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will the harness fit me?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Cross-Back Harness is fully adjustable and fits most body types. Men, women, petite, broad-shouldered. The straps adjust in seconds and distribute weight evenly whether you&apos;re picking herbs or hauling 20 pounds of tomatoes. Gardeners from their 30s through their 80s wear it comfortably. If it doesn&apos;t fit, the 60-day guarantee covers you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How much does it actually hold?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The kangaroo pouch is rated to 20 pounds. That&apos;s a full peck of tomatoes, plus tools, plus your phone, plus a bunch of basil. It holds its shape under load — no collapsing, no sagging. The harness handles the weight on your shoulders and back, not your neck.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if I don&apos;t like it?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Full 60-day money-back guarantee. Wear it for a full month of harvests. If it&apos;s not the apron you want hanging by the door every Saturday, return it for a complete refund. We cover return shipping. No restocking fee. No forms. No hoops.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What&apos;s included?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Grange Carrier comes with the Zero-Gravity Cross-Back Harness, Quick-Release Drop-Chute, deep tool sheaths for pruning shears, a hidden waterproof phone pocket, The Endless Harvest gardening guide ($18 value), and the Harvest Keeper&apos;s Handbook for produce storage ($15 value). Plus the lifetime warranty on materials and craftsmanship.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How fast does it ship?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Orders are processed within 1 business day. Standard shipping is 3–5 business days. Free shipping on orders over $85.
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
              Save 39% + Get 2 Free Guides
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
