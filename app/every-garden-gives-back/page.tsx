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
const ACGA_URL = "https://communitygarden.org"
const PLEDGE_GREEN = "#4A5D3A"

export default function EveryGardenGivesBackPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
          PLEDGE BANNER - The cause hook, immediately visible
          ============================================ */}
      <div
        className="text-center py-2.5 px-3 border-b-2 border-[#3a4a2d]"
        style={{ backgroundColor: PLEDGE_GREEN }}
      >
        <p className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wide text-white uppercase leading-snug">
          <span className="inline-block mr-1.5">★</span>
          The Community Garden Pledge — 10% of your order builds community gardens
          <span className="inline-block ml-1.5">★</span>
        </p>
      </div>

      {/* ============================================
          HEADER - Logo section
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-card">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-primary tracking-tight" />
      </header>

      {/* ============================================
          HERO SECTION - Main visual with cause framing
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted">
          <Asset name="heroImage" alt="The Grange Carrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
        </div>

        {/* Sale badge */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#DDA15E]/20 rounded-md py-2 px-4 font-bold text-xs sm:text-sm text-foreground">Save 39% OFF + 2 Free Gardening Guides Included</span>
        </div>

        {/* Main headline */}
        <div className="mt-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance tracking-tight">
            The Garden Gift That <span className="text-[#C86F4C]">Grows Two Gardens</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed text-pretty max-w-md mx-auto">
            A heritage-grade carrier for the gardener you love. 10% of your order helps a neighborhood grow theirs.
          </p>
        </div>

        {/* Primary CTA */}
        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full mt-8 bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Give a Gift That Grows Two Gardens
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
          PLEDGE CALLOUT - Dedicated cause section
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
              The Community Garden Pledge
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
                  Of your order goes directly to the American Community Gardening Association.
                </h3>
                <p className="text-sm text-muted-foreground">
                  Building community gardens in underserved neighborhoods since 1979.
                </p>
              </div>
            </div>

            <p className="text-foreground/85 text-pretty leading-relaxed text-base mb-5">
              Not every neighborhood has a patch of dirt to grow food on. We make heritage tools for gardeners lucky enough to have their own plot — and help ACGA build gardens for the families that don&apos;t. <span className="font-bold text-foreground">10% of your order. No minimums, no caps, no fine print.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-2 text-xs text-muted-foreground border-t border-border pt-4">
              <div className="flex-1">
                <p className="font-bold text-foreground uppercase tracking-wider mb-1">The Cause</p>
                <p>American Community Gardening Assoc.</p>
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground uppercase tracking-wider mb-1">Donation</p>
                <p>10% of your order</p>
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground uppercase tracking-wider mb-1">Verified at</p>
                <a href={ACGA_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: PLEDGE_GREEN }}>
                  communitygarden.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LISTICLE SECTIONS - 6 reasons
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-12 space-y-10">
        {/* Reason 1 - Meaning / Cause-led */}
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
            One gift. Two gardens whose season it changes.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason1Image" alt="A gift that grows two gardens" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most garden gifts grow one garden. This one grows two. Your gardener gets a heritage-grade carrier they&apos;ll reach for every morning. And 10% of your order funds raised beds, seedlings, and tools for neighborhoods where the nearest fresh tomato is two bus rides away. <span className="font-bold text-foreground">A gift for them. A plot of soil for a family that doesn&apos;t have one.</span>
          </p>
        </div>

        {/* Reason 2 - Drop-Chute / Thoughtful */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              THOUGHTFUL
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">02</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            They&apos;ll empty a full harvest in one second, and think of you every time
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason2Image" alt="Quick-Release Drop-Chute" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Most gardeners finish a session by bending over a bucket, scooping out tomatoes one handful at a time. The Quick-Release Drop-Chute changes that. One pinch of the industrial-grade buckles and the entire harvest slides out in a single motion. <span className="font-bold text-foreground">Gift-givers tell us this is the moment it clicks. The first time they use the Drop-Chute, they text you about it.</span>
          </p>
        </div>

        {/* Reason 3 - Harness / Comfort */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              COMFORT
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">03</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Lets them garden longer without the neck and shoulder pain
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason3Image" alt="Zero-Gravity Cross-Back Harness" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            If they&apos;re over 50, their current carrier probably hangs everything from their neck. By noon, they&apos;re done. Not because the garden is, but because their body is. The Zero-Gravity Cross-Back Harness distributes 20 pounds across the shoulders and back like a hiking pack. <span className="font-bold text-foreground">Gardeners in their 60s and 70s say this is the reason they&apos;re still out there every morning.</span>
          </p>
        </div>

        {/* Reason 4 - Canvas / Built to last */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              RUGGED
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">04</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            Built from 600D canvas. Ages like a pair of leather work boots
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason4Image" alt="Field-Weave 600D Canvas" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Cheap carriers fray, sag, and tear within a season or two. Field-Weave 600D Canvas is the same weight class used in expedition gear and heritage work bags — thorn-proof, puncture-resistant, semi-rigid enough to hold its shape under a full load. It doesn&apos;t wear out. It breaks in. <span className="font-bold text-foreground">Ten years from now it&apos;ll look better than the day it arrived. That&apos;s the point of a heritage tool.</span>
          </p>
        </div>

        {/* Reason 5 - Capacity / Practical */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider font-bold bg-transparent">
              PRACTICAL
            </Badge>
            <span className="text-xs font-bold text-muted-foreground">05</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance leading-tight">
            20 pounds of produce, both hands free, and a hidden pocket for their phone
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason5Image" alt="20-pound kangaroo pouch" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            The kangaroo-style pouch holds a full peck without collapsing. Built-in tool sheaths keep pruning shears and a trowel within reach. A zippered vault pocket protects their phone from dirt and moisture. <span className="font-bold text-foreground">One trip through the garden. Everything they need, nothing left behind.</span> No more juggling a basket, a bucket, and a phone in the same hand.
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
            Lifetime warranty. 60-day trial. The donation is sent regardless.
          </h3>

          <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted mb-6 shadow-md">
            <Asset name="reason6Image" alt="Lifetime warranty guarantee" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
          </div>

          <p className="text-foreground/80 text-pretty leading-relaxed text-base">
            Lifetime warranty on fabric, stitching, and buckles. 60-day trial — if it&apos;s not right, full refund and we cover return shipping. <span className="font-bold text-foreground">And the 10% donation to ACGA? Goes through either way. The gardens don&apos;t lose a dollar if the gift wasn&apos;t a fit.</span>
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SECTION - Detailed product showcase
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <Badge className="bg-[#F4EFE3] text-[#4A3F35] hover:bg-[#F4EFE3] border border-[#D4C4B0] text-[10px] sm:text-xs font-bold mb-5 px-3 py-1.5 whitespace-normal text-center leading-snug">
            Lifetime Warranty + 60-Day Guarantee + The Community Garden Pledge
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            A Heritage Tool for Them. A Growing Plot for a Neighborhood.
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            One carrier. Two free guides. A lifetime warranty. And a real contribution to the gardens feeding families who need them.
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
            <p className="text-[11px] sm:text-sm font-bold tracking-wide leading-snug">39% OFF + 2 FREE GUIDES + THE COMMUNITY GARDEN PLEDGE</p>
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
              <div
                className="rounded-lg p-3.5 flex items-start gap-2.5 border"
                style={{ backgroundColor: "#EEF1E8", borderColor: PLEDGE_GREEN }}
              >
                <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center text-base font-black" style={{ color: PLEDGE_GREEN }}>★</div>
                <p className="text-xs font-semibold leading-snug" style={{ color: PLEDGE_GREEN }}>10% of your order builds community gardens</p>
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
          {/* Review 1 - Cause-led emotional */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;My mom volunteers at a community garden. Knowing 10% went to ACGA made this the obvious gift.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              My mother retired last year and started volunteering at a community plot that feeds about forty families in her neighborhood. I wanted her birthday gift to mean something. This carrier is gorgeous — the leather-like canvas, the drop-chute — but the donation is what made me click buy. I told her where 10% went and she teared up. She said, &ldquo;Those are my people.&rdquo; Easy win.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Lauren K.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          {/* Review 2 - Product focused */}
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

          {/* Review 3 - Product focused */}
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

          {/* Review 4 - Skeptic-converted */}
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground mb-2">&ldquo;I&apos;m cynical about &lsquo;portion of proceeds&rsquo; claims. So I looked up ACGA. It&apos;s real.&rdquo;</p>
            <p className="text-sm text-foreground/75 leading-relaxed mb-3">
              Every brand and their dog is donating to something now. I checked. The American Community Gardening Association has been building community plots in low-income neighborhoods since the 1970s. Real 501(c)(3), real work. The fact that Field &amp; Harvest spelled out 10% in plain English made me trust them. Bought one for my sister and one for myself. No regrets.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-foreground">Marcus T.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION - Gift + Donation questions
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 pt-8 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
            Gift &amp; Donation Questions
          </h2>
          <p className="text-base text-muted-foreground text-pretty max-w-md mx-auto">
            Here&apos;s what other gift-givers asked before ordering.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              How does the Community Garden Pledge actually work?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              When you check out through this page, your order is tagged to The Community Garden Pledge. Each month we donate 10% of every tagged order directly to ACGA through communitygarden.org. The pledge follows your order through checkout — even though the regular product page doesn&apos;t mention it yet, your order still counts. Email us if you want a copy of the receipt.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What is the American Community Gardening Association?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              A 501(c)(3) nonprofit building community gardens across the U.S. and Canada since 1979. They fund raised beds, seedlings, and tools for plots serving lower-income neighborhoods, seniors, and food-insecure families. More at <a href={ACGA_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: PLEDGE_GREEN }}>communitygarden.org</a>.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              If I return the carrier, does the donation still happen?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              Yes. The 10% comes out of our share, not yours. Take the 60-day refund, get every dollar back — we still send the donation. The gardens don&apos;t lose anything because the gift wasn&apos;t a fit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              Will this fit them? I don&apos;t know their size.
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Cross-Back Harness is fully adjustable and fits most body types. Men, women, petite, broad-shouldered. The straps adjust in seconds and distribute weight evenly whether they&apos;re picking herbs or hauling 20 pounds of tomatoes. Gardeners from their 30s through their 80s wear it comfortably. And if it doesn&apos;t fit, the 60-day guarantee covers you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              They already have a gardening apron. Will they actually switch?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              That&apos;s exactly who this is for. Most gardeners are putting up with a carrier that sags, hurts their neck, or frays at the seams. Once they try the Drop-Chute and feel the difference of the cross-back harness, the old one goes straight to the garage. We hear this from gift recipients every week.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
            <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
              What exactly is included?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
              The Grange Carrier with Zero-Gravity Cross-Back Harness, Quick-Release Drop-Chute, tool sheaths, and a hidden waterproof phone pocket. Plus The Endless Harvest guide ($18), the Harvest Keeper&apos;s Handbook ($15), a lifetime warranty, and 10% of your order to ACGA.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-card border-2 border-border rounded-lg px-6 shadow-sm">
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
              Get 39% Off + Give Back
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
