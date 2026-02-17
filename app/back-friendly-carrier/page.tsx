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

export default function BackFriendlyListiclePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ============================================
          PROMOTIONAL BANNER - Top announcement bar
          ============================================ */}
      <div className="bg-primary text-center py-3 px-4 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          <span className="text-[#DDA15E] font-bold uppercase tracking-wide">GET 39% OFF</span>{" "}
          <span className="text-primary-foreground uppercase tracking-wide">+ 2 FREE GARDENING GUIDES</span>
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
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-sm text-foreground whitespace-nowrap">Save 39% OFF + 2 Free Gardening Guides</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            6 Reasons Gardeners With Bad Backs <span className="text-[#C86F4C]">Swear by This Carrier</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            You didn&apos;t stop loving your garden. Your back just started voting against it. The Grange Carrier was built so your body stops being the reason you come inside early.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Get the Back-Friendly Carrier
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
        {/* Reason 1 - Harness / Relief */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              RELIEF
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">01</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Carry 20 pounds and forget you&apos;re wearing anything
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason2Image" alt="Zero-Gravity Cross-Back Harness" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Standard aprons hang the full load from your neck. An hour in, your shoulders lock up and your upper back burns. The Zero-Gravity Cross-Back Harness routes weight across both shoulders and your lower back, the same way a hiking pack does. Twenty pounds of tomatoes, distributed evenly. <span className="font-bold text-foreground">Gardeners in their 60s and 70s tell us this is what lets them stay out for hours instead of quitting by noon.</span>
          </p>
        </div>

        {/* Reason 2 - Drop-Chute / Posture */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              POSTURE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Empty your entire harvest without bending over once
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason1Image" alt="Quick-Release Drop-Chute" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Buckets mean bending. Every time you pick, you bend to drop it in. Every time you&apos;re full, you bend to carry it inside. The Quick-Release Drop-Chute uses industrial-grade buckles that unlatch with a pinch. Your entire harvest slides out in one motion while you&apos;re standing upright. <span className="font-bold text-foreground">Gardeners report saving dozens of bends per session. That&apos;s not a small thing when your lower back is already keeping score.</span>
          </p>
        </div>

        {/* Reason 3 - Hands-Free */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              HANDS-FREE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Both hands free. No baskets to grip. No buckets to lug.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason4Image" alt="20-pound kangaroo pouch" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Carrying a basket in one hand while picking with the other puts uneven load on your spine. Your body compensates, and by the end of the session, one side aches more than the other. The kangaroo-style pouch holds a full 20 pounds centered on your torso. Built-in tool sheaths and a zippered phone pocket mean everything stays on you. <span className="font-bold text-foreground">One trip. Both hands free. No lopsided carrying, no grip fatigue, no extra trips back to the house.</span>
          </p>
        </div>

        {/* Reason 4 - Canvas / Support */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              SUPPORT
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            The carrier holds its shape so your back doesn&apos;t have to compensate
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason3Image" alt="Field-Weave 600D Canvas" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap carriers sag under load. When the pouch loses shape, the weight shifts forward and pulls you into a hunch. Your lower back picks up the slack. Field-Weave 600D Canvas is semi-rigid and thorn-proof. It holds its shape whether you&apos;re carrying five pounds or twenty. <span className="font-bold text-foreground">Consistent weight distribution means your body isn&apos;t constantly adjusting. Less shifting, less strain, less soreness the next morning.</span>
          </p>
        </div>

        {/* Reason 5 - Water Resistance / Ease */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              EASE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Walk straight from the garden to the kitchen. No cleanup bending required.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason5Image" alt="Dry-Wear water-resistant barrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cotton aprons soak through with dew, juice, and wet soil. That means changing clothes, wiping down, bending over the laundry basket. The Dry-Wear barrier lines the entire pouch and blocks moisture from reaching your clothes. A quick wipe and the carrier is ready for the next session. <span className="font-bold text-foreground">Less post-garden cleanup means fewer unnecessary bends at the end of a session when your body is already tired.</span>
          </p>
        </div>

        {/* Reason 6 - Guarantee / Risk-Free */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              RISK-FREE
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">06</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Try it for 60 days. If your back doesn&apos;t notice the difference, send it back.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason6Image" alt="Lifetime warranty guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Lifetime warranty covers the fabric, stitching, and buckles against defects. But the real promise is simpler: try it for 60 days in your garden. If it doesn&apos;t change how your body feels after a session, return it for a full refund. We cover return shipping. No forms. No hoops. <span className="font-bold text-foreground">If you&apos;ve been putting up with soreness because you thought that&apos;s just how gardening works, this is the risk-free way to find out it doesn&apos;t have to be.</span>
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
            22,000+ Gardeners Stopped Choosing Between Their Garden and Their Back
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One carrier. Two free guides. A lifetime warranty. And the end of coming inside early because your body gave out before your garden did.
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
                  <Asset name="benefitIcon2" alt="Feather" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">Zero-Gravity Harness distributes 20 lbs like a hiking pack</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <Asset name="benefitIcon1" alt="Lightning" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">1-Second Drop-Chute empties your harvest without bending</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <Asset name="benefitIcon3" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-foreground font-semibold leading-snug">600D Canvas holds its shape under full load</p>
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
          REVIEWS SECTION - Back pain / comfort testimonials
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
          {/* Review 1 */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I stopped dreading the morning after a big harvest.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;m 64 and I&apos;ve been gardening for 30 years. The last few years, I&apos;d wake up the morning after a long session with my neck and upper back so stiff I could barely turn my head. My old apron hung everything from a loop around my neck. The Grange Carrier&apos;s cross-back straps changed that completely. I wore it for three hours last Saturday and felt fine Sunday morning. That hasn&apos;t happened in years.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Carol B.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My back used to quit before my garden did. Not anymore.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I have two raised beds and a 20-foot row of tomatoes. By mid-morning I&apos;d be done. Not because I ran out of things to pick, but because the bending and carrying wore me out. The drop-chute on this thing means I don&apos;t bend over to empty anymore. I just unlatch and everything slides into the bin. Sounds small, but my lower back noticed the difference the first day I used it.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Jim H.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I can garden with my grandkids again.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;d been cutting my sessions shorter and shorter because of shoulder pain from my old canvas carrier. I couldn&apos;t keep up with my grandkids in the garden anymore and it bothered me more than I let on. This carrier sits completely different on my body. The weight goes across my back, not on my neck. I wore it for two hours yesterday and my shoulders feel normal today. I&apos;m not exaggerating.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Patricia M.</span>
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
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;Wish I&apos;d found this five years ago. Would have saved a lot of ibuprofen.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              I&apos;m 71 and I was carrying a wire basket in one hand and picking with the other. Every session left my right shoulder and lower back aching. Switching to this hands-free setup evened everything out. Both hands pick. The weight sits centered on my body. I don&apos;t carry anything anymore. My wife noticed I stopped reaching for the ibuprofen after garden days. That says more than I can.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Frank D.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION - Comfort / Back-Pain Questions
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Everything you need to know before you try the back-friendly carrier.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will this actually help with my back pain?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              We can&apos;t make medical claims, but here&apos;s what gardeners tell us: the Cross-Back Harness distributes weight across both shoulders and your back instead of hanging it from your neck. The Drop-Chute eliminates bending to empty. And the hands-free design removes lopsided carrying. Gardeners consistently report less soreness after sessions. Try it for 60 days and see for yourself.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How is this different from a regular gardening apron?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Most aprons use a single neck loop. The full weight of your harvest pulls straight down on your cervical spine. The Grange Carrier uses a cross-back harness that distributes weight like a daypack. It also holds 20 pounds (most aprons max out around 5-8 before sagging), and the drop-chute lets you empty without bending over. It&apos;s a different category of tool.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              I&apos;m worried about sizing. Will it fit me?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The harness is fully adjustable and fits most body types. The cross-back straps adjust in seconds and distribute weight evenly whether you&apos;re petite or broad-shouldered. Gardeners from their 30s through their 80s wear it comfortably. And if it doesn&apos;t fit, the 60-day guarantee covers you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Can it really hold 20 pounds without sagging?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Yes. Field-Weave 600D Canvas is semi-rigid and thorn-proof. It holds its shape under a full 20-pound load without collapsing or shifting forward. That matters for your back, because a sagging carrier pulls you into a hunch and forces your lower back to compensate.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Is $49 worth it for a gardening carrier?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Most gardeners have already spent more than that replacing cheap carriers that break down every season or two. At $49 (normally $80), the Grange Carrier comes with a lifetime warranty, two gardening guides ($33 value), and a 60-day guarantee. It&apos;s built to be the last carrier you buy. And if it lets you garden longer with less pain, that alone is worth more than the price.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What if it doesn&apos;t help? Can I return it?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Try it for 60 full days. If your body doesn&apos;t feel the difference, return it for a complete refund. We cover return shipping. No restocking fee. No questions. We built this for gardeners who thought soreness was just part of the deal. If it doesn&apos;t change your mind, you lose nothing.
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
              4.8/5 (800+ Reviews) <span className="text-muted-foreground mx-1">&bull;</span> 22,000+ Gardeners
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
