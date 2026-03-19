"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Asset } from "@/components/asset"
import { MethodAsset } from "@/components/method-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-grange-carrier"

export default function TheMethodPage() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setShowSticky(scrollPercent > 0.3)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* ============================================
          HEADER
          ============================================ */}
      <header className="py-3 px-4 flex items-center justify-center bg-white/80 border-b border-[#e8e0d4]">
        <Asset name="logo" alt="Field & Harvest Co." className="h-7 md:h-10 w-auto object-contain" fallbackClassName="text-2xl md:text-3xl font-bold text-[#4A3F35] tracking-tight" />
      </header>

      {/* ============================================
          HERO — First-person hook mirrors the ad
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#e8e0d4]">
          <MethodAsset name="heroImage" alt="Gardener in her garden" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2118] leading-tight text-balance tracking-tight">
            The <span className="text-[#C86F4C]">&ldquo;Wrong Method&rdquo;</span> Most Gardeners Use to Harvest — and the One That Takes <span className="text-[#C86F4C]">20 Minutes</span>
          </h1>
        </div>

        <div className="mt-5 px-1 space-y-4">
          <p className="text-lg text-[#2D2118]/80 leading-relaxed">
            My neighbor is 72 and finishes her entire garden in 20 minutes. When I asked her secret, she showed me something I&apos;d never seen before — and I&apos;ve been gardening for over 20 years.
          </p>
          <p className="text-lg text-[#2D2118]/80 leading-relaxed">
            Turns out, the difference isn&apos;t skill or speed. It&apos;s the method. Here&apos;s what she changed:
          </p>
        </div>
      </section>

      {/* ============================================
          THE OLD METHOD — Trimmed to 3 core steps
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2D2118] text-white text-xs font-bold">✕</span>
          <h2 className="text-2xl font-bold text-[#2D2118]">The Old Method</h2>
        </div>

        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#e8e0d4] mb-6 shadow-md">
          <MethodAsset name="wrongBucket" alt="Gardener carrying bucket one-handed" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="text-[#C86F4C] font-bold text-lg mt-0.5">1.</span>
            <div>
              <p className="font-bold text-[#2D2118]">Carry a bucket one-handed, fill it up</p>
              <p className="text-sm text-[#6B5D4F]">10-20 pounds pulling from one side. Your spine compensates every step.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-[#C86F4C] font-bold text-lg mt-0.5">2.</span>
            <div>
              <p className="font-bold text-[#2D2118]">Carry it inside, walk back out, repeat</p>
              <p className="text-sm text-[#6B5D4F]">5-7 trips per session. 30-45 minutes just hauling.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-[#C86F4C] font-bold text-lg mt-0.5">3.</span>
            <div>
              <p className="font-bold text-[#2D2118]">Bend over to empty, come inside sore</p>
              <p className="text-sm text-[#6B5D4F]">30+ bends per harvest. Back aches. Shoulders tight. Done early.</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-6 bg-[#2D2118] rounded-xl p-5 text-center">
          <div className="flex justify-center gap-8">
            <div>
              <p className="text-2xl font-bold text-white">45 min</p>
              <p className="text-xs text-white/60">average harvest</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">5-7</p>
              <p className="text-xs text-white/60">trips back & forth</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">30+</p>
              <p className="text-xs text-white/60">bends per session</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          DIVIDER
          ============================================ */}
      <div className="max-w-lg mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#d4c9ba]" />
          <span className="text-sm font-bold text-[#6B5D4F] uppercase tracking-widest">vs.</span>
          <div className="flex-1 h-px bg-[#d4c9ba]" />
        </div>
      </div>

      {/* ============================================
          THE NEW METHOD
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#C86F4C] text-white text-xs font-bold">✓</span>
          <h2 className="text-2xl font-bold text-[#2D2118]">The New Method</h2>
        </div>

        {/* Square product reveal */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#e8e0d4] mb-6 shadow-md">
          <MethodAsset name="rightWearing" alt="Gardener wearing The Grange Carrier hands-free" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="text-[#C86F4C] font-bold text-lg mt-0.5">1.</span>
            <div>
              <p className="font-bold text-[#2D2118]">Put on the carrier</p>
              <p className="text-sm text-[#6B5D4F]">Cross-back straps distribute weight across shoulders, core, and hips. Both hands free.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-[#C86F4C] font-bold text-lg mt-0.5">2.</span>
            <div>
              <p className="font-bold text-[#2D2118]">Walk the rows and pick</p>
              <p className="text-sm text-[#6B5D4F]">Everything goes into the 20-lb kangaroo pouch. Tools in the sheaths. Phone in the zippered pocket.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-[#C86F4C] font-bold text-lg mt-0.5">3.</span>
            <div>
              <p className="font-bold text-[#2D2118]">Walk inside once, unlatch, done</p>
              <p className="text-sm text-[#6B5D4F]">One trip. Pinch the buckles — everything slides out in one second. Standing upright. 20 minutes.</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-6 bg-[#C86F4C] rounded-xl p-5 text-center">
          <div className="flex justify-center gap-8">
            <div>
              <p className="text-2xl font-bold text-white">20 min</p>
              <p className="text-xs text-white/70">average harvest</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">1</p>
              <p className="text-xs text-white/70">trip back & forth</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">0</p>
              <p className="text-xs text-white/70">bends to empty</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          DROP-CHUTE IMAGE
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-4">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#e8e0d4] shadow-md">
          <MethodAsset name="rightDumping" alt="Drop-chute releasing harvest" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>
        <p className="text-xs text-center text-[#6B5D4F] mt-2">The Quick-Release Drop-Chute — pinch, dump, done.</p>
      </section>

      {/* ============================================
          PRODUCT INTRO — Natural transition
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-10">
        <p className="text-lg text-[#2D2118]/80 leading-relaxed">
          It&apos;s called <strong className="text-[#2D2118]">The Grange Carrier</strong>. A wearable harvest system that replaces every bucket, basket, and crate you own. 22,000+ gardeners have made the switch — most of them in their 60s and 70s.
        </p>

        <div className="mt-4 flex items-center gap-3 flex-wrap">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#DDA15E] text-[#DDA15E]" />
            ))}
          </div>
          <p className="text-sm text-[#6B5D4F] font-medium">
            4.8 stars from 800+ reviews
          </p>
        </div>
      </section>

      {/* ============================================
          PRODUCT SHOWCASE
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 pb-4">
        <div className="bg-white border-2 border-[#e8e0d4] rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-[#4A3F35] text-white text-center py-3 px-4">
            <p className="text-sm font-bold tracking-wide">TODAY: 39% OFF + 2 FREE GARDENING GUIDES</p>
          </div>

          <div className="p-5">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#e8e0d4] mb-4">
              <MethodAsset name="productMain" alt="The Grange Carrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
            </div>

            <div className="grid grid-cols-6 gap-1.5 mb-5">
              {(["productThumb1", "productThumb2", "productThumb3", "productThumb4", "productThumb5", "productThumb6"] as const).map((name, i) => (
                <div key={i} className="relative aspect-square rounded-md border-2 border-[#e8e0d4] bg-[#F4EFE3] hover:border-[#C86F4C] transition-colors cursor-pointer overflow-hidden">
                  <MethodAsset name={name} alt={`Product view ${i + 1}`} className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-[10px] text-[#6B5D4F] font-bold" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <MethodAsset name="benefitIcon1" alt="Lightning" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-[#2D2118] font-semibold leading-snug">1-Second Drop-Chute empties instantly</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <MethodAsset name="benefitIcon2" alt="Feather" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-[#2D2118] font-semibold leading-snug">Zero-Gravity Harness carries 20 lbs pain-free</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <MethodAsset name="benefitIcon3" alt="Shield" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-[#2D2118] font-semibold leading-snug">600D Canvas, thorn-proof, built for decades</p>
              </div>
              <div className="bg-[#F4EFE3] rounded-lg p-3.5 flex items-start gap-2.5">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <MethodAsset name="benefitIcon4" alt="Water drop" className="w-5 h-5 object-contain" fallbackClassName="text-base" />
                </div>
                <p className="text-xs text-[#2D2118] font-semibold leading-snug">Water-resistant lining keeps clothes clean</p>
              </div>
            </div>

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
          REVIEWS — James first (neighbor = ad story),
          then Linda (drop chute = method payoff)
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-[#2D2118] mb-6 text-center">What Gardeners Are Saying</h2>

        <div className="space-y-4">
          <div className="bg-white border border-[#e8e0d4] rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
              ))}
            </div>
            <p className="text-sm font-bold text-[#2D2118] mb-2">&ldquo;My neighbor saw mine and ordered one the same day.&rdquo;</p>
            <p className="text-sm text-[#6B5D4F] leading-relaxed mb-3">
              She saw me using mine and asked where I got it. We garden together most mornings and now we both just walk through the rows hands-free, fill up, and dump everything at the potting bench in seconds. Ordered the two-pack for my daughter and son-in-law as well.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2D2118]">James W.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-white border border-[#e8e0d4] rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
              ))}
            </div>
            <p className="text-sm font-bold text-[#2D2118] mb-2">&ldquo;The drop chute changed how I feel about harvest day.&rdquo;</p>
            <p className="text-sm text-[#6B5D4F] leading-relaxed mb-3">
              Emptying a full pouch used to mean standing over the sink scooping everything out one handful at a time. Now I just unlatch the bottom and everything slides into the colander. It sounds small but it changed everything.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2D2118]">Linda S.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>

          <div className="bg-white border border-[#e8e0d4] rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
              ))}
            </div>
            <p className="text-sm font-bold text-[#2D2118] mb-2">&ldquo;My neck and shoulders don&apos;t hurt anymore.&rdquo;</p>
            <p className="text-sm text-[#6B5D4F] leading-relaxed mb-3">
              I&apos;m 68 and garden every morning. My old apron hung everything from my neck and I&apos;d be sore by noon. The cross-back straps distribute the weight completely differently. That alone was worth the price.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2D2118]">Robert K.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          GUARANTEE + FINAL CTA
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 pt-4 pb-32">
        <div className="bg-[#F4EFE3] border-2 border-[#C86F4C] rounded-2xl p-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C86F4C] mb-3">
            Lifetime Warranty + 60-Day Trial
          </p>
          <h3 className="text-2xl font-bold text-[#2D2118] leading-tight text-balance mb-3">
            Try the new method risk-free
          </h3>
          <p className="text-[#6B5D4F] text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            60 days to try it. Full refund if it doesn&apos;t change how you harvest. We pay return shipping.
          </p>
          <a href={PDP_URL}>
            <Button
              size="lg"
              className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              Get 39% Off + 2 Free Guides
            </Button>
          </a>
          <p className="text-xs text-[#6B5D4F] mt-3">
            Free returns &bull; 22,000+ customers &bull; Ships in 2–3 business days
          </p>
        </div>
      </section>

      {/* ============================================
          STICKY CTA — appears after 30% scroll
          ============================================ */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[#4A3F35]/95 backdrop-blur-md border-t-2 border-[#4A3F35] py-4 px-4 z-50 shadow-2xl transition-all duration-500 ${
          showSticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
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
                <Star key={i} className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
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
