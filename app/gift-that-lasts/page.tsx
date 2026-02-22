import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots } from '@/components/ui/carousel'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Asset } from '@/components/asset'

const PDP_URL = "https://fieldandharvestco.com/products/the-grange-carrier"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE3]">
      {/* SECTION: Announcement Bar - Top promotional banner */}
      <div className="bg-[#4A3F35] text-white text-center py-2 px-4 text-sm font-bold tracking-wider uppercase">
        Get 39% Off + 2 Free Guides
      </div>

      {/* SECTION: Header/Navigation - Main site navigation */}
      <header className="bg-[#F4EFE3] border-b border-[#D4C4B0]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <Asset name="logo" alt="Field & Harvest Co." className="h-8 md:h-10 w-auto object-contain" fallbackClassName="text-2xl font-light tracking-wider text-[#4A3F35]" />
        </div>
      </header>

      {/* SECTION 1: Hero - Main product showcase with split layout (text + image) */}
      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero Content - Left Side on Desktop, Center-stacked on Mobile */}
          <div className="space-y-4 md:space-y-6 lg:order-1">
            {/* Eyebrow Text */}
            <div className="text-xs md:text-sm font-semibold tracking-wider text-[#C86F4C] uppercase text-center lg:text-left">
              THE GIFT 22,000+ GARDENERS WISH THEY&apos;D GOTTEN SOONER
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1814] leading-tight text-balance text-center lg:text-left">
              Give Them Something{' '}
              <span className="text-[#C86F4C]">That Won&apos;t Need Replacing</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-[#666666] leading-relaxed text-center lg:text-left">
              Skip the seeds and gloves this year. Give them the harvest carrier 22,000+ gardeners call &ldquo;the last one I&apos;ll ever need.&rdquo;
            </p>

            {/* Star Rating + Review Count */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="flex text-[#FDB913] text-lg">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-sm font-semibold text-[#4A3F35]">800+ Reviews</span>
            </div>

            {/* Feature List - 3 key benefits - Hidden on mobile in this position */}
            <div className="hidden lg:block space-y-3 md:space-y-4 pt-2 md:pt-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                  <Asset name="iconLightning" alt="Lightning bolt" className="w-5 h-5 md:w-6 md:h-6 object-contain" fallbackClassName="text-[#C86F4C] text-sm md:text-base" />
                </div>
                <p className="text-sm md:text-base text-[#4A3F35] pt-1 md:pt-2">
                  Quick-Release Drop-Chute empties a full harvest in one second. They&apos;ll stop bending, scooping, and making extra trips to the kitchen.
                </p>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                  <Asset name="iconFeather" alt="Feather" className="w-5 h-5 md:w-6 md:h-6 object-contain" fallbackClassName="text-[#C86F4C] text-sm md:text-base" />
                </div>
                <p className="text-sm md:text-base text-[#4A3F35] pt-1 md:pt-2">
                  Zero-Gravity Cross-Back Harness distributes 20 pounds like a hiking pack. Even gardeners in their 60s and 70s wear it for hours pain-free.
                </p>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                  <Asset name="iconShield" alt="Shield" className="w-5 h-5 md:w-6 md:h-6 object-contain" fallbackClassName="text-[#C86F4C] text-sm md:text-base" />
                </div>
                <p className="text-sm md:text-base text-[#4A3F35] pt-1 md:pt-2">
                  Lifetime warranty on materials and craftsmanship. If they don&apos;t love it, full refund within 60 days. No questions asked.
                </p>
              </div>
            </div>

            {/* Primary CTA - Shows on mobile above image */}
            <div className="pt-4 lg:pt-6 lg:hidden">
              <a href={PDP_URL}>
                <Button
                  size="lg"
                  className="w-full bg-[#C86F4C] hover:bg-[#B5603F] text-white px-8 py-6 text-lg rounded font-semibold group"
                >
                  Give the Gift That Lasts
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Trust Badge - Shows on mobile below CTA */}
            <div className="flex items-center justify-center lg:hidden gap-2 text-xs text-[#666666]">
              <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
              <span>60-Day Money-Back Guarantee + Lifetime Warranty</span>
            </div>

            {/* Primary CTA - Desktop version */}
            <div className="hidden lg:block pt-4 md:pt-6">
              <a href={PDP_URL}>
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-[#C86F4C] hover:bg-[#B5603F] text-white px-8 md:px-10 py-6 md:py-7 text-lg md:text-xl rounded font-semibold group"
                >
                  Give the Gift That Lasts
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Trust Badge - Desktop version */}
            <div className="hidden lg:flex items-center gap-2 text-xs md:text-sm text-[#666666] pt-2">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-[#C86F4C]" />
              <span>60-Day Money-Back Guarantee + Lifetime Warranty</span>
            </div>
          </div>

          {/* Hero Image - Right Side on Desktop, Middle on Mobile */}
          <div className="relative lg:order-2">
            <div className="aspect-square flex items-center justify-center">
              <Asset name="heroProduct" alt="The Grange Carrier" className="w-full h-full object-contain" fallbackClassName="text-6xl" />
            </div>
          </div>

          {/* Feature List - Mobile version at bottom */}
          <div className="lg:hidden space-y-3 lg:order-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                <Asset name="iconLightning" alt="Lightning bolt" className="w-4 h-4 object-contain" fallbackClassName="text-[#C86F4C] text-sm" />
              </div>
              <p className="text-sm text-[#4A3F35] pt-1">
                Quick-Release Drop-Chute empties a full harvest in one second. They&apos;ll stop bending, scooping, and making extra trips to the kitchen.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                <Asset name="iconFeather" alt="Feather" className="w-4 h-4 object-contain" fallbackClassName="text-[#C86F4C] text-sm" />
              </div>
              <p className="text-sm text-[#4A3F35] pt-1">
                Zero-Gravity Cross-Back Harness distributes 20 pounds like a hiking pack. Even gardeners in their 60s and 70s wear it for hours pain-free.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                <Asset name="iconShield" alt="Shield" className="w-4 h-4 object-contain" fallbackClassName="text-[#C86F4C] text-sm" />
              </div>
              <p className="text-sm text-[#4A3F35] pt-1">
                Lifetime warranty on materials and craftsmanship. If they don&apos;t love it, full refund within 60 days. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Testimonials - Gift-giver reviews carousel */}
      <section className="bg-[#3D2E1E] py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 text-white">
            <div className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
              REAL GIFTS. REAL REACTIONS.
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The Gift That Stuck
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-2">
              See why gift-givers keep coming back
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex text-[#FDB913]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="font-semibold">4.8/5 from 800+ reviews</span>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="max-w-7xl mx-auto px-0 md:px-14">
            <Carousel opts={{ align: 'start', loop: true }} className="w-full">
              <CarouselContent className="-ml-4 md:-ml-6">

                {/* Testimonial 1 */}
                <CarouselItem className="pl-4 md:pl-6 basis-[90%] md:basis-1/3">
                  <div className="bg-[#F4EFE3] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-[#D4C4B0] flex items-center justify-center">
                      <Asset name="testimonial1" alt="Customer photo - Sarah M." className="w-full h-full object-cover" fallbackClassName="text-5xl" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-[#FDB913] mb-2">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#1A1814] mb-2">
                        &ldquo;BEST GIFT I&apos;VE EVER GIVEN&rdquo;
                      </h4>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                        &ldquo;I gave this to my mom for Mother&apos;s Day. She texts me photos of her garden haul in it every single week. She&apos;s never done that with any other gift I&apos;ve given her.&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#C86F4C] text-sm">Sarah M.</span>
                        <span className="text-[10px] bg-[#D4C4B0] text-[#4A3F35] flex items-center gap-1 px-2 py-1 rounded-full font-semibold">
                          <CheckCircle2 className="h-3 w-3 text-[#4A7C59]" />
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Testimonial 2 */}
                <CarouselItem className="pl-4 md:pl-6 basis-[90%] md:basis-1/3">
                  <div className="bg-[#F4EFE3] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-[#D4C4B0] flex items-center justify-center">
                      <Asset name="testimonial2" alt="Customer photo - Tom R." className="w-full h-full object-cover" fallbackClassName="text-5xl" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-[#FDB913] mb-2">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#1A1814] mb-2">
                        &ldquo;MY WIFE USES THIS EVERY DAY&rdquo;
                      </h4>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                        &ldquo;My wife said it&apos;s the best gift I&apos;ve ever given her. She wears it every time she&apos;s in the garden. I&apos;m riding that high all year.&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#C86F4C] text-sm">Tom R.</span>
                        <span className="text-[10px] bg-[#D4C4B0] text-[#4A3F35] flex items-center gap-1 px-2 py-1 rounded-full font-semibold">
                          <CheckCircle2 className="h-3 w-3 text-[#4A7C59]" />
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Testimonial 3 */}
                <CarouselItem className="pl-4 md:pl-6 basis-[90%] md:basis-1/3">
                  <div className="bg-[#F4EFE3] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-[#D4C4B0] flex items-center justify-center">
                      <Asset name="testimonial3" alt="Customer photo - Daniel K." className="w-full h-full object-cover" fallbackClassName="text-5xl" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-[#FDB913] mb-2">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#1A1814] mb-2">
                        &ldquo;DAD SAID HE&apos;LL NEVER NEED ANOTHER&rdquo;
                      </h4>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                        &ldquo;I got one for my dad. He&apos;s 68 and still gardens daily. He said &lsquo;this is the last one I&apos;ll ever need.&rsquo; Mission accomplished.&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#C86F4C] text-sm">Daniel K.</span>
                        <span className="text-[10px] bg-[#D4C4B0] text-[#4A3F35] flex items-center gap-1 px-2 py-1 rounded-full font-semibold">
                          <CheckCircle2 className="h-3 w-3 text-[#4A7C59]" />
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Testimonial 4 */}
                <CarouselItem className="pl-4 md:pl-6 basis-[90%] md:basis-1/3">
                  <div className="bg-[#F4EFE3] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-[#D4C4B0] flex items-center justify-center">
                      <Asset name="testimonial4" alt="Customer photo - Rachel D." className="w-full h-full object-cover" fallbackClassName="text-5xl" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-[#FDB913] mb-2">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#1A1814] mb-2">
                        &ldquo;SHE TEXTS ME HARVEST PHOTOS IN IT&rdquo;
                      </h4>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                        &ldquo;Bought this for my best friend&apos;s birthday. She sends me pictures of her loaded-up carrier almost every week now. That never happened with the gardening gloves.&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#C86F4C] text-sm">Rachel D.</span>
                        <span className="text-[10px] bg-[#D4C4B0] text-[#4A3F35] flex items-center gap-1 px-2 py-1 rounded-full font-semibold">
                          <CheckCircle2 className="h-3 w-3 text-[#4A7C59]" />
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Testimonial 5 */}
                <CarouselItem className="pl-4 md:pl-6 basis-[90%] md:basis-1/3">
                  <div className="bg-[#F4EFE3] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-[#D4C4B0] flex items-center justify-center">
                      <Asset name="testimonial5" alt="Customer photo - Mark P." className="w-full h-full object-cover" fallbackClassName="text-5xl" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-[#FDB913] mb-2">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#1A1814] mb-2">
                        &ldquo;FINALLY A GIFT THAT WASN&apos;T FORGOTTEN&rdquo;
                      </h4>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                        &ldquo;I&apos;ve given my mother-in-law garden stuff for years. Polite smiles, shelf duty. This one she actually uses. Every single day. First time I&apos;ve nailed it.&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#C86F4C] text-sm">Mark P.</span>
                        <span className="text-[10px] bg-[#D4C4B0] text-[#4A3F35] flex items-center gap-1 px-2 py-1 rounded-full font-semibold">
                          <CheckCircle2 className="h-3 w-3 text-[#4A7C59]" />
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-6 bg-white/90 hover:bg-white border-0 shadow-lg text-[#1A1814] size-10" />
              <CarouselNext className="hidden md:flex -right-6 bg-white/90 hover:bg-white border-0 shadow-lg text-[#1A1814] size-10" />
              <CarouselDots className="text-white" />
            </Carousel>
          </div>

          {/* CTA Below Testimonials */}
          <div className="text-center mt-10">
            <a href={PDP_URL}>
              <Button
                size="lg"
                className="bg-[#C86F4C] hover:bg-[#B5603F] text-white px-12 py-7 text-lg rounded font-semibold group"
              >
                Give the Gift That Lasts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex items-center justify-center gap-2 text-sm text-white/70 mt-4">
              <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
              <span>60-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Benefits - Why they'll love receiving this */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-xs md:text-sm font-semibold tracking-wider text-[#C86F4C] uppercase mb-3">
            WHY GARDENERS LOVE RECEIVING THIS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1814] mb-4">
            A Gift They&apos;ll Use{' '}
            <span className="text-[#C86F4C]">Every Single Harvest</span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] max-w-3xl mx-auto">
            Not another pair of gloves for the drawer. Every feature is designed so they think of you each harvest.
          </p>
        </div>

        {/* Benefits Grid — 2-col on mobile, 3-col with center image on desktop */}

        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-6 md:hidden max-w-lg mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <Asset name="iconLightning" alt="Lightning bolt" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">1-Second Drop-Chute</h3>
            <p className="text-xs text-[#666666]">They&apos;ll empty a full harvest instantly. No bending, no scooping, no bruised tomatoes.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <Asset name="iconFeather" alt="Feather" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">Zero-Gravity Harness</h3>
            <p className="text-xs text-[#666666]">Distributes 20 lbs like a hiking pack. Comfortable enough for hours, even for parents and grandparents.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <Asset name="iconWaterDrop" alt="Water droplet" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">Dry-Wear Barrier</h3>
            <p className="text-xs text-[#666666]">Water-resistant lining keeps juice, soil, and dew off their clothes. Garden to dinner, no outfit change.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <Asset name="iconWeave" alt="Thorn-proof weave" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">Thorn-Proof Canvas</h3>
            <p className="text-xs text-[#666666]">Puncture-resistant weave that breaks in like leather boots. Gets better with every season.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <Asset name="iconPouch" alt="Backpack pouch" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">20-Pound Capacity</h3>
            <p className="text-xs text-[#666666]">Kangaroo-style pouch holds a full peck. Deep tool sheaths and hidden vault pocket for their phone.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <Asset name="iconShield" alt="Shield" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">Lifetime Warranty</h3>
            <p className="text-xs text-[#666666]">Fabric, stitching, and buckles guaranteed for life. You&apos;re giving them something permanent.</p>
          </div>
        </div>

        {/* Desktop: 3-col with center product image */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="text-right">
              <div className="flex justify-end mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <Asset name="iconLightning" alt="Lightning bolt" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">1-Second Drop-Chute</h3>
              <p className="text-sm text-[#666666]">Industrial-grade buckles release instantly. Their full harvest slides into the bin. No bending, no scooping, no extra trips.</p>
            </div>

            <div className="text-right">
              <div className="flex justify-end mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <Asset name="iconFeather" alt="Feather" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">Zero-Gravity Harness</h3>
              <p className="text-sm text-[#666666]">Cross-back design distributes 20 pounds like a hiking pack. Comfortable for parents, grandparents, and all-day gardeners.</p>
            </div>

            <div className="text-right">
              <div className="flex justify-end mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <Asset name="iconWaterDrop" alt="Water droplet" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">Dry-Wear Barrier</h3>
              <p className="text-sm text-[#666666]">Water-resistant lining blocks juice, soil, and dew from reaching their clothes. Garden to dinner, no outfit change.</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-72 h-96 bg-gradient-to-br from-[#5A4A3A] to-[#3A2A1A] rounded-3xl flex items-center justify-center shadow-2xl">
              <Asset name="benefitsCenterProduct" alt="The Grange Carrier" className="w-full h-full object-contain p-4" fallbackClassName="text-6xl" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-left">
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <Asset name="iconWeave" alt="Thorn-proof weave" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">Field-Weave™ 600D Canvas</h3>
              <p className="text-sm text-[#666666]">Thorn-proof, puncture-resistant, semi-rigid. Breaks in like leather boots and gets better with age. The last harvest carrier they&apos;ll ever own.</p>
            </div>

            <div className="text-left">
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <Asset name="iconPouch" alt="Backpack pouch" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">20-Pound Capacity</h3>
              <p className="text-sm text-[#666666]">Kangaroo-style pouch holds a full peck without collapsing. Deep utility sheaths for tools. Hidden vault pocket for their phone.</p>
            </div>

            <div className="text-left">
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <Asset name="iconShield" alt="Shield" className="w-6 h-6 object-contain" fallbackClassName="text-[#C86F4C] text-xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">Lifetime Warranty</h3>
              <p className="text-sm text-[#666666]">Fabric, stitching, and buckles guaranteed for life. You&apos;re not just giving a gift. You&apos;re ending their replacement cycle.</p>
            </div>
          </div>
        </div>

        {/* CTA at Bottom */}
        <div className="text-center mt-12">
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="bg-[#C86F4C] hover:bg-[#B5603F] text-white px-10 py-7 text-lg rounded font-semibold group"
            >
              Give the Gift That Lasts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <div className="flex items-center justify-center gap-2 text-sm text-[#666666] mt-4">
            <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
            <span>Lifetime warranty + 60-day risk-free guarantee</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: Marquee Bar with Banner - Scrolling benefits with lifestyle image */}
      <section>
        {/* Scrolling Marquee Bar */}
        <div className="bg-[#3D2E1E] py-3 overflow-hidden">
          <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">✦</span>
              <span className="uppercase tracking-wider">THE GIFT THAT LASTS FOREVER</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">✦</span>
              <span className="uppercase tracking-wider">22,000+ HAPPY GARDENERS</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">✦</span>
              <span className="uppercase tracking-wider">LIFETIME WARRANTY</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">✦</span>
              <span className="uppercase tracking-wider">60-DAY MONEY BACK</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">✦</span>
              <span className="uppercase tracking-wider">THE GIFT THAT LASTS FOREVER</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">✦</span>
              <span className="uppercase tracking-wider">22,000+ HAPPY GARDENERS</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">✦</span>
              <span className="uppercase tracking-wider">LIFETIME WARRANTY</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">✦</span>
              <span className="uppercase tracking-wider">60-DAY MONEY BACK</span>
            </div>
          </div>
        </div>

        {/* Lifestyle Banner Image */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-[#1A1814] to-[#4A3F35] flex items-center justify-center">
          <Asset name="lifestyleBanner" alt="Gardener harvesting in golden hour" className="w-full h-full object-cover" fallbackClassName="text-6xl" />
        </div>
      </section>

      {/* SECTION 5: Product Showcase - Detailed product information with gallery and pricing */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1814] mb-4">
            Here&apos;s What{' '}
            <span className="text-[#C86F4C]">They&apos;ll Unwrap</span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] max-w-3xl mx-auto">
            The complete harvest system trusted by 22,000+ gardeners. Plus two bonus guides, included free.
          </p>

          {/* Value Badges */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-[#C86F4C] text-sm font-semibold">
              <span>⭐</span>
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-[#C86F4C] text-sm font-semibold">
              <Asset name="iconShield" alt="Shield" className="w-4 h-4 object-contain" fallbackClassName="" />
              <span>Lifetime Warranty</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Product Gallery - Left Side */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="aspect-square bg-[#E8E4DC] rounded-2xl flex items-center justify-center overflow-hidden">
              <Asset name="productMain" alt="The Grange Carrier product shot" className="w-full h-full object-contain" fallbackClassName="text-6xl" />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              <button className="aspect-square bg-[#E8E4DC] rounded-lg flex items-center justify-center hover:ring-2 hover:ring-[#C86F4C] transition-all">
                <Asset name="productThumb1" alt="Front view" className="w-full h-full object-cover rounded-lg" fallbackClassName="text-2xl text-[#4A3F35]" />
              </button>
              <button className="aspect-square bg-[#E8E4DC] rounded-lg flex items-center justify-center hover:ring-2 hover:ring-[#C86F4C] transition-all">
                <Asset name="productThumb2" alt="Harness detail" className="w-full h-full object-cover rounded-lg" fallbackClassName="text-2xl text-[#4A3F35]" />
              </button>
              <button className="aspect-square bg-[#E8E4DC] rounded-lg flex items-center justify-center hover:ring-2 hover:ring-[#C86F4C] transition-all">
                <Asset name="productThumb3" alt="Drop-Chute close-up" className="w-full h-full object-cover rounded-lg" fallbackClassName="text-2xl text-[#4A3F35]" />
              </button>
              <button className="aspect-square bg-[#E8E4DC] rounded-lg flex items-center justify-center hover:ring-2 hover:ring-[#C86F4C] transition-all">
                <Asset name="productThumb4" alt="Carrier loaded with produce" className="w-full h-full object-cover rounded-lg" fallbackClassName="text-2xl text-[#4A3F35]" />
              </button>
            </div>
          </div>

          {/* Product Details - Right Side */}
          <div className="space-y-6">
            {/* Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#FDB913]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="text-sm text-[#666666]">800+ reviews</span>
            </div>

            {/* Product Name */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A1814]">
              The Grange Carrier™ – The One Second Harvest System
            </h3>

            {/* Capacity Info */}
            <p className="text-[#C86F4C] font-semibold">
              Holds a full peck of produce (20 lbs). Fits every gardener.
            </p>

            {/* Product Features */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#4A3F35]">
                <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
                <span>Thorn-proof canvas backed by a lifetime warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4A3F35]">
                <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
                <span>Adjustable fit. Works for every body type.</span>
              </div>
            </div>

            {/* What's Included Badge */}
            <div className="bg-[#C86F4C] text-white text-xs font-bold uppercase px-3 py-1 rounded inline-block">
              WHAT THEY&apos;LL RECEIVE
            </div>

            {/* Included Items List */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-[#4A3F35]">
                <span className="text-[#C86F4C] font-bold">+</span>
                <span>The Grange Carrier™ with Zero-Gravity Cross-Back Harness</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#4A3F35]">
                <span className="text-[#C86F4C] font-bold">+</span>
                <span>Quick-Release Drop-Chute toggle system</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#4A3F35]">
                <span className="text-[#C86F4C] font-bold">+</span>
                <span>Deep utility sheaths for pruning tools</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#4A3F35]">
                <span className="text-[#C86F4C] font-bold">+</span>
                <span>Hidden waterproof Vault pocket</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#4A3F35]">
                <span className="text-[#C86F4C] font-bold">+</span>
                <span>The Endless Harvest: Digital Gardening Guide ($18 value)</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#4A3F35]">
                <span className="text-[#C86F4C] font-bold">+</span>
                <span>Harvest Keeper&apos;s Handbook: Produce Storage E-Book ($15 value)</span>
              </div>
            </div>

            {/* Thumbnail Preview of Included Items */}
            <div className="flex gap-3">
              <div className="w-16 h-16 bg-[#E8E4DC] rounded-lg flex items-center justify-center">
                <Asset name="guideEndlessHarvest" alt="The Endless Harvest guide" className="w-full h-full object-contain" fallbackClassName="text-xl" />
              </div>
              <div className="w-16 h-16 bg-[#E8E4DC] rounded-lg flex items-center justify-center">
                <Asset name="guideHarvestKeeper" alt="Harvest Keeper's Handbook" className="w-full h-full object-contain" fallbackClassName="text-xl" />
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-bold text-[#1A1814]">$49</span>
                <span className="text-xl text-[#999] line-through">$80</span>
                <span className="bg-[#4A3F35] text-white text-xs font-bold px-2 py-1 rounded">
                  SAVE 39%
                </span>
              </div>
              <p className="text-sm text-[#666666]">Less than most gifts that end up in a closet. This one they&apos;ll use for decades.</p>
            </div>

            {/* Discount Auto-Applied Badge */}
            <div className="bg-yellow-100 text-[#666666] text-xs font-medium px-3 py-2 rounded text-center">
              ✓ Discount automatically applied at checkout
            </div>

            {/* CTA Button */}
            <a href={PDP_URL}>
              <Button
                size="lg"
                className="w-full bg-[#C86F4C] hover:bg-[#B5603F] text-white px-8 py-7 text-lg rounded font-semibold group"
              >
                Give the Gift That Lasts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            {/* Trust Badges Below CTA */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#666666]">
                <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
                <span>60-day money-back guarantee if they don&apos;t love it</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#666666]">
                <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
                <span>Lifetime warranty on materials and craftsmanship</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#666666]">
                <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
                <span>1-day processing. Arrives gift-ready.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: What's Included + Guarantee - Gift package contents */}
      <section className="bg-[#3D2E1E] py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="text-xs md:text-sm font-semibold tracking-wider text-[#C86F4C] uppercase mb-3">
              EVERYTHING THEY&apos;LL RECEIVE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              The Complete{' '}
              <span className="text-[#C86F4C]">Gift Package</span>
            </h2>
          </div>

          {/* Product Contents Carousel (mobile) / Grid (desktop) */}
          <div className="max-w-6xl mx-auto mb-16">
            {/* Mobile Carousel */}
            <div className="md:hidden">
              <Carousel opts={{ align: 'start', loop: true }} className="w-full">
                <CarouselContent className="-ml-4">

                  <CarouselItem className="pl-4 basis-[85%]">
                    <div className="bg-[#4A3F35] rounded-2xl p-6 text-center h-full">
                      <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center">
                        <Asset name="includedCarrier" alt="The Grange Carrier" className="w-full h-full object-contain p-2" fallbackClassName="text-5xl" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">The Grange Carrier™</h3>
                      <p className="text-sm text-white/70">Thorn-proof canvas with Zero-Gravity harness, Drop-Chute system, and 20-pound capacity pouch.</p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="pl-4 basis-[85%]">
                    <div className="bg-[#4A3F35] rounded-2xl p-6 text-center h-full">
                      <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center">
                        <Asset name="includedGuide1" alt="The Endless Harvest guide" className="w-full h-full object-contain p-2" fallbackClassName="text-5xl" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">The Endless Harvest Guide</h3>
                      <p className="text-sm text-white/70">Digital gardening guide covering season extension, succession planting, and maximizing yield. $18 value. Included free.</p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="pl-4 basis-[85%]">
                    <div className="bg-[#4A3F35] rounded-2xl p-6 text-center h-full">
                      <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center">
                        <Asset name="includedGuide2" alt="Harvest Keeper's Handbook" className="w-full h-full object-contain p-2" fallbackClassName="text-5xl" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">Harvest Keeper&apos;s Handbook</h3>
                      <p className="text-sm text-white/70">Complete produce storage reference with proven preservation methods. $15 value. Included free.</p>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="pl-4 basis-[85%]">
                    <div className="bg-[#4A3F35] rounded-2xl p-6 text-center h-full">
                      <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center">
                        <Asset name="iconShield" alt="Lifetime warranty shield" className="w-16 h-16 object-contain" fallbackClassName="text-5xl" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">Lifetime Warranty</h3>
                      <p className="text-sm text-white/70">Canvas, stitching, and buckles guaranteed against defects. You&apos;re giving a gift that&apos;s covered for life.</p>
                    </div>
                  </CarouselItem>

                </CarouselContent>
                <CarouselDots className="text-white" />
              </Carousel>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#4A3F35] rounded-2xl p-6 text-center">
                <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center">
                  <Asset name="includedCarrier" alt="The Grange Carrier" className="w-full h-full object-contain p-2" fallbackClassName="text-5xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">The Grange Carrier™</h3>
                <p className="text-sm text-white/70">Thorn-proof canvas with Zero-Gravity harness, Drop-Chute system, and 20-pound capacity pouch.</p>
              </div>

              <div className="bg-[#4A3F35] rounded-2xl p-6 text-center">
                <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center">
                  <Asset name="includedGuide1" alt="The Endless Harvest guide" className="w-full h-full object-contain p-2" fallbackClassName="text-5xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">The Endless Harvest Guide</h3>
                <p className="text-sm text-white/70">Digital gardening guide covering season extension, succession planting, and maximizing yield. $18 value. Included free.</p>
              </div>

              <div className="bg-[#4A3F35] rounded-2xl p-6 text-center">
                <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center">
                  <Asset name="includedGuide2" alt="Harvest Keeper's Handbook" className="w-full h-full object-contain p-2" fallbackClassName="text-5xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Harvest Keeper&apos;s Handbook</h3>
                <p className="text-sm text-white/70">Complete produce storage reference with proven preservation methods. $15 value. Included free.</p>
              </div>

              <div className="bg-[#4A3F35] rounded-2xl p-6 text-center">
                <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center">
                  <Asset name="iconShield" alt="Lifetime warranty shield" className="w-16 h-16 object-contain" fallbackClassName="text-5xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Lifetime Warranty</h3>
                <p className="text-sm text-white/70">Canvas, stitching, and buckles guaranteed against defects. You&apos;re giving a gift that&apos;s covered for life.</p>
              </div>
            </div>
          </div>

          {/* Guarantee Card */}
          <div className="max-w-5xl mx-auto bg-[#4A3F35] rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              {/* Left Side - Text Content */}
              <div className="p-6 pb-0 md:p-12">
                <div className="text-xs md:text-sm font-semibold tracking-wider text-[#C86F4C] uppercase mb-3">
                  ZERO-RISK GIFTING
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  They&apos;ll Love It.{' '}
                  <span className="text-[#C86F4C]">Guaranteed.</span>
                </h3>
                <p className="text-white/70 mb-6">
                  If they don&apos;t use it every harvest, full refund within 60 days. No questions asked. They don&apos;t even need to send it back.
                </p>

                <a href={PDP_URL}>
                  <Button
                    size="lg"
                    className="w-full md:w-auto bg-[#C86F4C] hover:bg-[#B5603F] text-white px-10 py-7 text-lg rounded font-semibold group mb-4"
                  >
                    Give It Risk-Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <div className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
                  <span>No questions asked. No return shipping. No hassle.</span>
                </div>
              </div>

              {/* Right Side - Product Image with Badge */}
              <div className="relative p-6 md:p-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <Asset name="guaranteeProduct" alt="The Grange Carrier" className="w-full h-full object-cover" fallbackClassName="text-6xl flex items-center justify-center w-full h-full bg-gradient-to-br from-[#5A4A3A] to-[#3A2A1A]" />
                </div>
                {/* Guarantee Badge Overlay */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 w-20 h-20 md:w-24 md:h-24 bg-[#C86F4C] rounded-full flex items-center justify-center text-center shadow-lg">
                  <div className="text-white">
                    <div className="text-xl md:text-2xl font-bold">60</div>
                    <div className="text-[10px] md:text-xs font-semibold uppercase leading-tight">Day<br />Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ - Gift-giver questions with accordion */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1814] mb-4">
              Gift-Giver Questions
            </h2>
            <p className="text-base md:text-lg text-[#666666]">
              Here&apos;s what other gift-givers asked before ordering
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-[#D4C4B0] rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
                Will this fit them? I&apos;m not sure of their size.
              </AccordionTrigger>
              <AccordionContent className="text-[#666666] pb-5">
                The harness is fully adjustable and one-size-fits-most. Male or female, petite or broad-shouldered. Straps adjust in seconds. If it doesn&apos;t fit, the 60-day guarantee has you covered.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#D4C4B0] rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
                What if they already have a gardening apron or carrier?
              </AccordionTrigger>
              <AccordionContent className="text-[#666666] pb-5">
                That&apos;s exactly who this is for. Most gardeners are tolerating a cheap carrier with frayed handles and no support. Once they try the Drop-Chute and the harness, the old one goes straight to the garage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#D4C4B0] rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
                What if they don&apos;t like it? Can they return it?
              </AccordionTrigger>
              <AccordionContent className="text-[#666666] pb-5">
                Full 60-day money-back guarantee, no questions asked. If they don&apos;t love it, you get a complete refund. We&apos;ll even let them keep it. Zero risk for you as the gift-giver.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#D4C4B0] rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
                Is $49 the right amount for a garden gift?
              </AccordionTrigger>
              <AccordionContent className="text-[#666666] pb-5">
                At $49 (normally $80), it hits the sweet spot. Premium enough to feel special, practical enough to not feel wasteful. Plus two free guides ($33 value), a lifetime warranty, and a 60-day guarantee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-[#D4C4B0] rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
                Will it arrive quickly?
              </AccordionTrigger>
              <AccordionContent className="text-[#666666] pb-5">
                We process all orders within 2 business days. Standard shipping is 7-9 business days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-[#D4C4B0] rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
                What&apos;s included so I know what to tell them?
              </AccordionTrigger>
              <AccordionContent className="text-[#666666] pb-5">
                The Grange Carrier with Zero-Gravity harness and Drop-Chute system, The Endless Harvest gardening guide ($18 value), and the Harvest Keeper&apos;s Handbook ($15 value). All backed by a lifetime warranty.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Final CTA Below FAQs */}
          <div className="text-center mt-12">
            <p className="text-[#666666] mb-4">Ready to give a gift they&apos;ll never forget?</p>
            <a href={PDP_URL}>
              <Button
                size="lg"
                className="bg-[#C86F4C] hover:bg-[#B5603F] text-white px-10 py-7 text-lg rounded font-semibold group"
              >
                Give the Gift That Lasts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex items-center justify-center gap-2 text-sm text-[#666666] mt-4">
              <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
              <span>60-Day Money-Back Guarantee + Lifetime Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Footer */}
      <footer className="bg-[#1A1814] text-white/60 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Field &amp; Harvest Co. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href={PDP_URL} className="hover:text-white transition-colors">Shop</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
