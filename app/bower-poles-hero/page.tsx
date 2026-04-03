import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots } from '@/components/ui/carousel'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { Asset } from '@/components/asset'
import { BowerAsset } from '@/components/bower-asset'
import type { Metadata } from 'next'

const PDP_URL = "https://fieldandharvestco.com/products/bower-poles"

export const metadata: Metadata = {
  title: "Bower Poles\u2122 Flexible Plant Support | Field & Harvest Co.",
  description:
    "The bendable plant support that follows your plant's natural growth. Coir wrap, metal core, stackable. 35% off + 2 free plant guides. 60-day guarantee.",
}

export default function BowerPolesHeroPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE3]">
      {/* SECTION: Announcement Bar */}
      <div className="bg-[#4A3F35] text-white text-center py-2 px-4 text-sm font-bold tracking-wider uppercase">
        35% Off + 2 Free Plant Guides With Every Order
      </div>

      {/* SECTION: Header */}
      <header className="bg-[#F4EFE3] border-b border-[#D4C4B0]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
          <Asset name="logo" alt="Field & Harvest Co." className="h-8 md:h-10 w-auto object-contain" fallbackClassName="text-2xl font-light tracking-wider text-[#4A3F35]" />
        </div>
      </header>

      {/* SECTION 1: Hero */}
      <section className="max-w-lg lg:max-w-6xl mx-auto px-4 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-4 md:space-y-6 lg:order-1">
            <div className="text-xs md:text-sm font-semibold tracking-wider text-[#C86F4C] uppercase text-center lg:text-left">
              STOP FORCING YOUR PLANTS STRAIGHT
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1814] leading-tight text-balance text-center lg:text-left">
              The Plant Support That{' '}
              <span className="text-[#C86F4C]">Bends With Your Plant</span>
            </h1>

            <p className="text-base md:text-lg text-[#666666] leading-relaxed text-center lg:text-left">
              Rigid poles force straight growth. Bower Poles follow the natural curve. Bendable metal core, premium coir wrap roots grab onto, and stackable for unlimited height.
            </p>

            {/* Star Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="flex text-[#FDB913] text-lg">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
              </div>
              <span className="text-sm font-semibold text-[#4A3F35]">4.9 Stars &bull; 2,400+ Reviews &bull; 24&quot; &amp; 32&quot;</span>
            </div>

            {/* Feature List — Desktop */}
            <div className="hidden lg:block space-y-3 md:space-y-4 pt-2 md:pt-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                  <span className="text-base md:text-lg">🌀</span>
                </div>
                <p className="text-sm md:text-base text-[#4A3F35] pt-1 md:pt-2">
                  Bendable metal core holds any shape you set. Straight, curved, arched, spiraled. Reshape it anytime as your plant grows.
                </p>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                  <span className="text-base md:text-lg">🌿</span>
                </div>
                <p className="text-sm md:text-base text-[#4A3F35] pt-1 md:pt-2">
                  Premium coir wrap mimics real tree bark. Aerial roots latch on naturally instead of sliding off plastic or bare wood.
                </p>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                  <span className="text-base md:text-lg">📏</span>
                </div>
                <p className="text-sm md:text-base text-[#4A3F35] pt-1 md:pt-2">
                  Stackable for unlimited height. When your plant outgrows one pole, tape another on top. No connectors needed.
                </p>
              </div>
            </div>

            {/* CTA — Mobile */}
            <div className="pt-4 lg:pt-6 lg:hidden">
              <a href={PDP_URL}>
                <Button
                  size="lg"
                  className="w-full bg-[#C86F4C] hover:bg-[#B5603F] text-white px-8 py-6 text-lg rounded font-semibold group"
                >
                  Get 35% Off Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Trust badge — Mobile */}
            <div className="flex items-center justify-center lg:hidden gap-2 text-xs text-[#666666]">
              <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
              <span>35% Off Today + 2 Free Plant Guides</span>
            </div>

            {/* CTA — Desktop */}
            <div className="hidden lg:block pt-4 md:pt-6">
              <a href={PDP_URL}>
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-[#C86F4C] hover:bg-[#B5603F] text-white px-8 md:px-10 py-6 md:py-7 text-lg md:text-xl rounded font-semibold group"
                >
                  Get 35% Off Today
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Trust badge — Desktop */}
            <div className="hidden lg:flex items-center gap-2 text-xs md:text-sm text-[#666666] pt-2">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-[#C86F4C]" />
              <span>35% Off Today + 2 Free Plant Guides</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-2">
            <div className="aspect-square flex items-center justify-center rounded-2xl overflow-hidden">
              <BowerAsset name="heroImage" alt="Bower Poles Flexible Plant Support" className="w-full h-full object-cover" fallbackClassName="text-6xl" />
            </div>
          </div>

          {/* Feature List — Mobile (below image) */}
          <div className="lg:hidden space-y-3 lg:order-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                <span className="text-sm">🌀</span>
              </div>
              <p className="text-sm text-[#4A3F35] pt-1">
                Bendable metal core holds any shape. Reshape it anytime as your plant grows.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                <span className="text-sm">🌿</span>
              </div>
              <p className="text-sm text-[#4A3F35] pt-1">
                Coir wrap mimics tree bark. Aerial roots latch on naturally.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[#D4C4B0] rounded-lg flex items-center justify-center">
                <span className="text-sm">📏</span>
              </div>
              <p className="text-sm text-[#4A3F35] pt-1">
                Stackable for unlimited height. Tape another pole on top when your plant is ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Testimonials Carousel */}
      <section className="bg-[#3D2E1E] py-12 md:py-20">
        <div className="max-w-lg lg:max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 text-white">
            <div className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
              FROM PLANT PARENTS WHO MADE THE SWITCH
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why They Ditched Rigid Poles
            </h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-2">
              Real reviews from plant parents who stopped forcing their plants straight
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex text-[#FDB913]">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
              </div>
              <span className="font-semibold">4.9/5 Stars</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-0 md:px-14">
            <Carousel opts={{ align: 'start', loop: true }} className="w-full">
              <CarouselContent className="-ml-4 md:-ml-6">

                <CarouselItem className="pl-4 md:pl-6 basis-[90%] md:basis-1/3">
                  <div className="bg-[#F4EFE3] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-[#D4C4B0] flex items-center justify-center overflow-hidden">
                      <BowerAsset name="reason1Image" alt="Monstera with Bower Pole" className="w-full h-full object-cover" fallbackClassName="text-5xl" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-[#FDB913] mb-2">
                        <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#1A1814] mb-2">
                        &ldquo;MY MONSTERA LOOKS INCREDIBLE NOW&rdquo;
                      </h4>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                        &ldquo;I was using a straight bamboo stick and zip ties. It looked terrible. Switched to Bower Poles and bent it to follow the curve of the stem. Night and day difference.&rdquo;
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

                <CarouselItem className="pl-4 md:pl-6 basis-[90%] md:basis-1/3">
                  <div className="bg-[#F4EFE3] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-[#D4C4B0] flex items-center justify-center overflow-hidden">
                      <BowerAsset name="reason2Image" alt="Roots grabbing coir" className="w-full h-full object-cover" fallbackClassName="text-5xl" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-[#FDB913] mb-2">
                        <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#1A1814] mb-2">
                        &ldquo;FINALLY, A POLE THAT DOESN&apos;T SHED EVERYWHERE&rdquo;
                      </h4>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                        &ldquo;I&apos;ve tried three different moss poles. They all left coir dust on my shelf. This one stays put. And it doesn&apos;t need constant misting like my old sphagnum one.&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#C86F4C] text-sm">Jamie R.</span>
                        <span className="text-[10px] bg-[#D4C4B0] text-[#4A3F35] flex items-center gap-1 px-2 py-1 rounded-full font-semibold">
                          <CheckCircle2 className="h-3 w-3 text-[#4A7C59]" />
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-4 md:pl-6 basis-[90%] md:basis-1/3">
                  <div className="bg-[#F4EFE3] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-[#D4C4B0] flex items-center justify-center overflow-hidden">
                      <BowerAsset name="reason4Image" alt="Low maintenance coir" className="w-full h-full object-cover" fallbackClassName="text-5xl" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-[#FDB913] mb-2">
                        <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#1A1814] mb-2">
                        &ldquo;BOUGHT THE 4-PACK, ALREADY NEED MORE&rdquo;
                      </h4>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                        &ldquo;Started with one for my Monstera. Then I stacked a second on top. Then I put one on my Pothos. Then my Philodendron. Send help.&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#C86F4C] text-sm">Lauren T.</span>
                        <span className="text-[10px] bg-[#D4C4B0] text-[#4A3F35] flex items-center gap-1 px-2 py-1 rounded-full font-semibold">
                          <CheckCircle2 className="h-3 w-3 text-[#4A7C59]" />
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-4 md:pl-6 basis-[90%] md:basis-1/3">
                  <div className="bg-[#F4EFE3] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-[#D4C4B0] flex items-center justify-center overflow-hidden">
                      <BowerAsset name="productReveal" alt="Bower Poles product" className="w-full h-full object-cover" fallbackClassName="text-5xl" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-2 text-[#FDB913] mb-2">
                        <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#1A1814] mb-2">
                        &ldquo;I DON&apos;T MIST IT AND IT STILL WORKS GREAT&rdquo;
                      </h4>
                      <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                        &ldquo;Was nervous about not using sphagnum but honestly the roots are grabbing on fine. And I don&apos;t have to mist it every day which is a huge win.&rdquo;
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#C86F4C] text-sm">Priya K.</span>
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

          <div className="text-center mt-10">
            <a href={PDP_URL}>
              <Button
                size="lg"
                className="bg-[#C86F4C] hover:bg-[#B5603F] text-white px-12 py-7 text-lg rounded font-semibold group"
              >
                Get 35% Off + 2 Free Guides
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <div className="flex items-center justify-center gap-2 text-sm text-white/70 mt-4">
              <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
              <span>60-Day Guarantee + Lifetime Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Benefits Grid */}
      <section className="max-w-lg lg:max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-xs md:text-sm font-semibold tracking-wider text-[#C86F4C] uppercase mb-3">
            WHY PLANT PARENTS ARE SWITCHING
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1814] mb-4">
            Everything Your Climber Needs.{' '}
            <span className="text-[#C86F4C]">Nothing It Doesn&apos;t.</span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] max-w-3xl mx-auto">
            A complete support system. Not a rigid stick your plant ignores.
          </p>
        </div>

        {/* Mobile: 2-column grid */}
        <div className="grid grid-cols-2 gap-6 md:hidden max-w-lg mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <span className="text-xl">🌀</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">Bendable Core</h3>
            <p className="text-xs text-[#666666]">Flexible metal wire holds any shape you set. Straight, curved, spiraled.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <span className="text-xl">🌿</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">Roots Grab On</h3>
            <p className="text-xs text-[#666666]">Coir mimics tree bark texture. Aerial roots latch on naturally.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <span className="text-xl">📏</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">Stackable</h3>
            <p className="text-xs text-[#666666]">Tape poles together for unlimited height. No connectors needed.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <span className="text-xl">💧</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">No Misting</h3>
            <p className="text-xs text-[#666666]">Works dry. No daily upkeep, no mold, no soggy mess.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <span className="text-xl">♻️</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">Sustainable</h3>
            <p className="text-xs text-[#666666]">Coconut coir byproduct. Not harvested from wetlands like sphagnum.</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                <span className="text-xl">🛡️</span>
              </div>
            </div>
            <h3 className="text-base font-bold text-[#1A1814] mb-1">60-Day Guarantee</h3>
            <p className="text-xs text-[#666666]">Full refund if you don&apos;t love it. Plus lifetime warranty.</p>
          </div>
        </div>

        {/* Desktop: 3-col with center image */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="text-right">
              <div className="flex justify-end mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <span className="text-xl">🌀</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">Bendable Metal Core</h3>
              <p className="text-sm text-[#666666]">Flexible wire holds any shape you set. Straight, curved, arched, spiraled. Reshape it anytime as your plant grows.</p>
            </div>

            <div className="text-right">
              <div className="flex justify-end mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <span className="text-xl">🌿</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">Roots Actually Grab On</h3>
              <p className="text-sm text-[#666666]">Premium coir wrap mimics real tree bark. Aerial roots latch on naturally instead of sliding off plastic or bare wood.</p>
            </div>

            <div className="text-right">
              <div className="flex justify-end mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <span className="text-xl">📏</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">Stackable for Any Height</h3>
              <p className="text-sm text-[#666666]">When your plant outgrows one pole, tape another on top. No connectors, no adapters, no height limit.</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-72 h-96 bg-gradient-to-br from-[#5A4A3A] to-[#3A2A1A] rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
              <BowerAsset name="productReveal" alt="Bower Poles" className="w-full h-full object-cover" fallbackClassName="text-6xl" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-left">
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <span className="text-xl">💧</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">Zero Maintenance</h3>
              <p className="text-sm text-[#666666]">Unlike sphagnum poles, coir works even when bone dry. No daily misting, no mold, no soggy mess on your shelf.</p>
            </div>

            <div className="text-left">
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <span className="text-xl">♻️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">Sustainable Material</h3>
              <p className="text-sm text-[#666666]">Coconut coir is a byproduct of the coconut industry. Waste material repurposed. Not harvested from wetlands like sphagnum moss.</p>
            </div>

            <div className="text-left">
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 bg-[#D4C4B0] rounded-full flex items-center justify-center">
                  <span className="text-xl">🛡️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1A1814] mb-2">60-Day Guarantee</h3>
              <p className="text-sm text-[#666666]">If the roots don&apos;t grab, if the shape doesn&apos;t hold, full refund. No questions. Plus lifetime warranty on materials.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="bg-[#C86F4C] hover:bg-[#B5603F] text-white px-10 py-7 text-lg rounded font-semibold group"
            >
              Get 35% Off + 2 Free Guides
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <div className="flex items-center justify-center gap-2 text-sm text-[#666666] mt-4">
            <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
            <span>Works with Monstera, Pothos, Philodendron &bull; 24&quot; &amp; 32&quot;</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: Marquee Bar */}
      <section>
        <div className="bg-[#3D2E1E] py-3 overflow-hidden">
          <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">&#10022;</span>
              <span className="uppercase tracking-wider">BENDABLE METAL CORE</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">&#10022;</span>
              <span className="uppercase tracking-wider">PREMIUM COIR WRAP</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">&#10022;</span>
              <span className="uppercase tracking-wider">STACKABLE FOR ANY HEIGHT</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">&#10022;</span>
              <span className="uppercase tracking-wider">ZERO MAINTENANCE</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">&#10022;</span>
              <span className="uppercase tracking-wider">BENDABLE METAL CORE</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">&#10022;</span>
              <span className="uppercase tracking-wider">PREMIUM COIR WRAP</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">&#10022;</span>
              <span className="uppercase tracking-wider">STACKABLE FOR ANY HEIGHT</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="text-xl">&#10022;</span>
              <span className="uppercase tracking-wider">ZERO MAINTENANCE</span>
            </div>
          </div>
        </div>

        <div className="h-48 md:h-64 bg-gradient-to-r from-[#1A1814] to-[#4A3F35] flex items-center justify-center overflow-hidden">
          <BowerAsset name="reason1Image" alt="Plant climbing Bower Pole" className="w-full h-full object-cover" fallbackClassName="text-6xl" />
        </div>
      </section>

      {/* SECTION 5: Product Showcase */}
      <section className="max-w-lg mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#F4EFE3] text-[#4A3F35] border border-[#D4C4B0] text-xs font-bold mb-5 px-4 py-1.5 rounded-full">
            Lifetime Warranty + 60-Day Guarantee
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1814] mb-4 text-balance leading-tight">
            Bower Poles&#8482; Flexible Plant Support
          </h2>
          <p className="text-lg text-[#666666] mb-6 text-pretty leading-relaxed max-w-md mx-auto">
            Bendable metal core. Premium coir wrap. 24&quot; and 32&quot; sizes. 2-Pack and 4-Pack options.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FDB913] text-[#FDB913]" />
              ))}
            </div>
            <p className="text-sm text-[#1A1814] font-medium">
              4.9 stars <span className="text-[#666666] mx-1.5">|</span> 2,400+ reviews
            </p>
          </div>
        </div>

        <div className="bg-white border-2 border-[#D4C4B0] rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-[#4A3F35] to-[#4A3F35]/90 text-white text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">TODAY: 35% OFF + 2 FREE PLANT GUIDES</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#f0ece6] mb-4">
              <BowerAsset name="productMain" alt="Bower Poles" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-4xl" />
            </div>

            <div className="grid grid-cols-6 gap-1.5 mb-5">
              {(["productThumb1", "productThumb2", "productThumb3", "productThumb4", "productThumb5", "productThumb6"] as const).map((name, i) => (
                <div key={i} className="relative aspect-square rounded-md border-2 border-[#D4C4B0] bg-[#f0ece6] overflow-hidden">
                  <BowerAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-[#666666] font-bold" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <span className="text-base mt-0.5">🌀</span>
                <p className="text-xs text-[#1A1814] font-semibold leading-snug">Bendable core holds any shape you set</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <span className="text-base mt-0.5">🌿</span>
                <p className="text-xs text-[#1A1814] font-semibold leading-snug">Coir surface roots latch onto naturally</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <span className="text-base mt-0.5">📏</span>
                <p className="text-xs text-[#1A1814] font-semibold leading-snug">Stackable for unlimited height</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <span className="text-base mt-0.5">🛡️</span>
                <p className="text-xs text-[#1A1814] font-semibold leading-snug">60-day guarantee + lifetime warranty</p>
              </div>
            </div>

            <a href={PDP_URL}>
              <Button
                size="lg"
                className="w-full bg-[#C86F4C] hover:bg-[#B5603F] text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
              >
                Get 35% Off + 2 Free Guides
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: Guarantee */}
      <section className="bg-[#3D2E1E] py-12 md:py-20 mt-12">
        <div className="max-w-lg lg:max-w-6xl mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-[#4A3F35] rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-6 pb-0 md:p-12">
                <div className="text-xs md:text-sm font-semibold tracking-wider text-[#C86F4C] uppercase mb-3">
                  OUR PROMISE
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Love It or{' '}
                  <span className="text-[#C86F4C]">Full Refund</span>
                </h3>
                <p className="text-white/70 mb-6">
                  Use Bower Poles for 60 days. If the roots don&apos;t grab, if the shape doesn&apos;t hold, if your plant doesn&apos;t look better, we&apos;ll refund you in full. You don&apos;t even need to send it back.
                </p>

                <a href={PDP_URL}>
                  <Button
                    size="lg"
                    className="w-full md:w-auto bg-[#C86F4C] hover:bg-[#B5603F] text-white px-10 py-7 text-lg rounded font-semibold group mb-4"
                  >
                    Try It Risk-Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <div className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
                  <span>35% Off Today + 2 Free Plant Guides</span>
                </div>
              </div>

              <div className="relative p-6 md:p-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <BowerAsset name="reason2Image" alt="Bower Poles in use" className="w-full h-full object-cover" fallbackClassName="text-6xl flex items-center justify-center w-full h-full bg-gradient-to-br from-[#5A4A3A] to-[#3A2A1A]" />
                </div>
                <div className="absolute top-2 right-2 md:top-4 md:right-4 w-20 h-20 md:w-24 md:h-24 bg-[#C86F4C] rounded-full flex items-center justify-center text-center shadow-lg">
                  <div className="text-white">
                    <div className="text-xl md:text-2xl font-bold">35%</div>
                    <div className="text-[10px] md:text-xs font-semibold uppercase leading-tight">Off<br />Today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="max-w-lg lg:max-w-3xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1814] mb-4">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-[#D4C4B0] rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
              What sizes are available?
            </AccordionTrigger>
            <AccordionContent className="text-[#666666] pb-5">
              24&quot; and 32&quot;. Both come in 2-Packs or 4-Packs. If your plant outgrows one, stack another on top for more height.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-[#D4C4B0] rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
              What plants does it work with?
            </AccordionTrigger>
            <AccordionContent className="text-[#666666] pb-5">
              Any climbing aroid. Monstera, Pothos, Philodendron, Syngonium, Scindapsus, Rhaphidophora. If it has aerial roots, it&apos;ll grab on.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-[#D4C4B0] rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
              How do I stack them for more height?
            </AccordionTrigger>
            <AccordionContent className="text-[#666666] pb-5">
              Place a second pole next to the first, overlap them by a few inches, and secure with tape. The coir surfaces create a continuous climbing path.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-[#D4C4B0] rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
              Do I need to mist the pole?
            </AccordionTrigger>
            <AccordionContent className="text-[#666666] pb-5">
              Nope. Unlike sphagnum moss poles, coir works dry. You can mist it occasionally to speed up root attachment, but it&apos;s not required.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-[#D4C4B0] rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
              What if it doesn&apos;t work for my plant?
            </AccordionTrigger>
            <AccordionContent className="text-[#666666] pb-5">
              Use it for 60 days. If you&apos;re not happy, we&apos;ll refund you in full. No return required.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-[#D4C4B0] rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-[#1A1814] hover:text-[#C86F4C] py-5">
              How fast does it ship?
            </AccordionTrigger>
            <AccordionContent className="text-[#666666] pb-5">
              Orders are processed within 1 business day. Standard shipping is 3-5 business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center mt-12">
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="bg-[#C86F4C] hover:bg-[#B5603F] text-white px-10 py-7 text-lg rounded font-semibold group"
            >
              Get 35% Off + 2 Free Guides
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <div className="flex items-center justify-center gap-2 text-sm text-[#666666] mt-4">
            <CheckCircle2 className="h-4 w-4 text-[#C86F4C]" />
            <span>35% Off Today + 2 Free Plant Guides</span>
          </div>
        </div>
      </section>

      {/* SECTION: Footer */}
      <footer className="bg-[#1A1814] text-white/60 py-10">
        <div className="max-w-6xl mx-auto px-4">
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
