"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Asset } from "@/components/asset"
import { GardenAsset } from "@/components/garden-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-grange-carrier"

export default function HerGardenPage() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setShowSticky(scrollPercent > 0.35)
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
          HERO
          ============================================ */}
      <section className="max-w-lg mx-auto px-4 py-8">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#e8e0d4]">
          <GardenAsset name="heroImage" alt="Margaret in her garden at sunrise" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2118] leading-tight text-balance tracking-tight">
            I&apos;m 72 and I Harvest My <span className="text-[#C86F4C]">Entire Garden in 20 Minutes</span>. Here&apos;s Exactly What I Do.
          </h1>
        </div>

        {/* Byline */}
        <div className="mt-6 flex items-center gap-3 px-1">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-[#F4EFE3] flex-shrink-0 border-2 border-[#e8e0d4]">
            <GardenAsset name="authorAvatar" alt="Margaret" className="w-full h-full object-cover" fallbackClassName="w-full h-full flex items-center justify-center text-lg" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#2D2118]">Margaret T.</p>
            <p className="text-xs text-[#6B5D4F]">Home gardener of 40+ years &middot; Zone 6b</p>
          </div>
        </div>
      </section>

      {/* ============================================
          THE STORY — First person, Margaret's morning
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 pb-8">
        <div className="space-y-5 text-[#2D2118]" style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}>
          <p>People ask me this all the time. My neighbor asked me last spring. My daughter&apos;s friend asked me at Thanksgiving. A woman at the garden center stopped me in the parking lot.</p>

          <p><em>&ldquo;How do you still garden so much at your age?&rdquo;</em></p>

          <p>I don&apos;t take it personally. I know what they&apos;re really asking. They want to know why I&apos;m not slowing down the way they are. Why I don&apos;t come inside sore. Why I&apos;m still out there for two, three hours on a Saturday and feel fine the next morning.</p>

          <p>The answer isn&apos;t that I&apos;m in better shape than anyone else. It&apos;s that I changed one thing two years ago, and everything got easier.</p>

          <p className="font-semibold text-[#2D2118]">Here&apos;s exactly what my morning looks like:</p>
        </div>
      </section>

      {/* ============================================
          STEP 1 — Putting it on
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-4">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#e8e0d4] shadow-md mb-5">
          <GardenAsset name="storyPutOn" alt="Putting on the carrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>
        <div className="space-y-4 text-[#2D2118]" style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}>
          <p>I head out around 7. Coffee&apos;s done. Sun&apos;s just hitting the rows.</p>

          <p>First thing I do is put on my carrier. It takes about five seconds — I slip my arms through the straps, click the front buckle, and that&apos;s it. It sits on my shoulders and hips the way a good hiking pack does. I barely notice it&apos;s there.</p>

          <p>My pruning shears go in the side sheaths. My phone goes in the zippered pocket. Both hands are free before I&apos;ve even left the porch.</p>
        </div>
      </section>

      {/* ============================================
          STEP 2 — Walking and picking
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-4">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#e8e0d4] shadow-md mb-5">
          <GardenAsset name="storyPicking" alt="Walking through garden rows, picking with both hands" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>
        <div className="space-y-4 text-[#2D2118]" style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}>
          <p>Then I just walk. Down the tomato row, through the peppers, past the herbs. Both hands picking. Everything goes straight into the front pouch.</p>

          <p>This is the part that surprises people. I&apos;m not going back and forth. I&apos;m not setting anything down. I&apos;m not carrying a bucket in one hand and picking with the other. I&apos;m just walking and picking. That&apos;s it.</p>

          <p>The pouch holds 20 pounds. I&apos;ve never filled it all the way because I finish before I need to.</p>
        </div>
      </section>

      {/* ============================================
          STEP 3 — Full pouch
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-4">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#e8e0d4] shadow-md mb-5">
          <GardenAsset name="storyFullPouch" alt="Full pouch of produce" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>
        <div className="space-y-4 text-[#2D2118]" style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}>
          <p>By the time I&apos;m through the last row, I&apos;ve got maybe 12, 15 pounds of produce on me. Tomatoes, zucchini, a handful of basil, whatever&apos;s ready. I don&apos;t feel it. The straps put the weight across my back and hips — not hanging from my neck, not pulling from one arm.</p>

          <p>I used to use a bucket. I&apos;d fill it halfway and already feel it in my lower back. By the fourth trip I was done for the day. Not because the garden was finished — because I was.</p>
        </div>
      </section>

      {/* ============================================
          STEP 4 — The dump
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-4">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#e8e0d4] shadow-md mb-5">
          <GardenAsset name="storyDump" alt="Dumping harvest via drop-chute" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>
        <div className="space-y-4 text-[#2D2118]" style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}>
          <p>I walk inside once. One trip. I stand over the sink, pinch two buckles on the sides, and the bottom opens up. Everything slides out. One second.</p>

          <p>No bending. No scooping. No reaching in with both hands. I&apos;m standing upright the entire time.</p>

          <p>And then I&apos;m done. Twenty minutes, give or take. The whole garden.</p>
        </div>
      </section>

      {/* ============================================
          THE REFLECTION — Why it matters
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-6">
        <div className="bg-[#F4EFE3] border border-[#d4c9ba] rounded-xl px-6 py-6">
          <div className="space-y-4 text-[#2D2118]" style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}>
            <p>I&apos;m 72. I&apos;ve been gardening since my 30s. The last few years before I switched, I was starting to think my time in the garden was winding down. My back hurt. My shoulders were always tight. I&apos;d come inside and need to lie down.</p>

            <p>Now I garden more than I did ten years ago. Not because I got stronger. Because I stopped doing the thing that was wearing me out.</p>

            <p className="font-semibold">The bucket was the problem. I just didn&apos;t know it yet.</p>
          </div>
        </div>
      </section>

      {/* ============================================
          SOFT CTA — Mid-page
          ============================================ */}
      <div className="max-w-lg mx-auto px-6 py-4 text-center">
        <a href={PDP_URL} className="inline-flex items-center gap-2 text-[#C86F4C] font-bold text-lg hover:underline underline-offset-4 transition-colors">
          See what Margaret uses &rarr;
        </a>
        <p className="text-sm text-[#6B5D4F] mt-2">39% off today + 2 free gardening guides</p>
      </div>

      {/* ============================================
          PRODUCT INTRO — Natural from Margaret's voice
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-8">
        <div className="space-y-4 text-[#2D2118]" style={{ fontSize: "1.0625rem", lineHeight: 1.85 }}>
          <p>It&apos;s called <strong>The Grange Carrier</strong>. I didn&apos;t find it from an ad or a store. My friend Kathy had one and I asked her what it was. That was two years ago. I&apos;ve used it every single harvest since.</p>

          <p>From what I can tell, a lot of gardeners my age have found it the same way — someone else was using it and they asked. Turns out there are a lot of us.</p>
        </div>

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
          PRODUCT — Simple, stays in Margaret's world
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 pb-4">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#e8e0d4] shadow-md mb-5">
          <GardenAsset name="productMain" alt="The Grange Carrier" className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>

        <div className="bg-[#F4EFE3] border border-[#d4c9ba] rounded-xl p-6 mb-5">
          <h3 className="text-lg font-bold text-[#2D2118] mb-3">The Grange Carrier</h3>
          <ul className="space-y-2 text-sm text-[#6B5D4F]">
            <li className="flex items-start gap-2">
              <span className="text-[#C86F4C] font-bold mt-0.5">•</span>
              Cross-back harness — carries 20 lbs across shoulders and hips
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C86F4C] font-bold mt-0.5">•</span>
              Drop-chute — empties your entire harvest in one second
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C86F4C] font-bold mt-0.5">•</span>
              600D canvas — thorn-proof, water-resistant, built for decades
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C86F4C] font-bold mt-0.5">•</span>
              Tool sheaths + zippered phone pocket — everything stays on you
            </li>
          </ul>
        </div>

        <div className="bg-[#4A3F35] rounded-xl p-5 text-center mb-5">
          <p className="text-sm font-bold text-white tracking-wide mb-1">TODAY: 39% OFF + 2 FREE GARDENING GUIDES</p>
          <p className="text-xs text-white/60">Lifetime warranty &bull; 60-day trial &bull; Free return shipping</p>
        </div>

        <a href={PDP_URL}>
          <Button
            size="lg"
            className="w-full bg-[#C86F4C] hover:bg-[#C86F4C]/90 text-white font-bold py-7 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            Get 39% Off + 2 Free Guides
          </Button>
        </a>
      </section>

      {/* ============================================
          REVIEWS — Other gardeners confirming Margaret's story
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-[#2D2118] mb-6 text-center">Other Gardeners Who Made the Switch</h2>

        <div className="space-y-4">
          <div className="bg-white border border-[#e8e0d4] rounded-lg p-5">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
              ))}
            </div>
            <p className="text-sm font-bold text-[#2D2118] mb-2">&ldquo;My neighbor saw mine and ordered one the same day.&rdquo;</p>
            <p className="text-sm text-[#6B5D4F] leading-relaxed mb-3">
              She saw me using mine and asked where I got it. We garden together most mornings and now we both just walk through the rows hands-free, fill up, and dump everything at the potting bench in seconds.
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
            <p className="text-sm font-bold text-[#2D2118] mb-2">&ldquo;I wish I&apos;d bought this 10 years ago.&rdquo;</p>
            <p className="text-sm text-[#6B5D4F] leading-relaxed mb-3">
              I&apos;m 74. My back isn&apos;t what it used to be. But this carrier — it&apos;s the only reason I&apos;m still out there. I can harvest for two, three hours and not feel destroyed the next day.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#2D2118]">Keith W.</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C86F4C] bg-[#C86F4C]/10 px-2 py-0.5 rounded">Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CLOSING — Margaret's voice
          ============================================ */}
      <section className="max-w-lg mx-auto px-6 pt-4 pb-32">
        <div className="bg-[#F4EFE3] border-2 border-[#C86F4C] rounded-2xl p-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C86F4C] mb-3">
            Lifetime Warranty + 60-Day Trial
          </p>
          <h3 className="text-2xl font-bold text-[#2D2118] leading-tight text-balance mb-3">
            &ldquo;If you&apos;re still using a bucket, just try it once.&rdquo;
          </h3>
          <p className="text-[#6B5D4F] text-sm leading-relaxed mb-2 max-w-sm mx-auto">
            That&apos;s what Kathy told me. Two years later, I say the same thing to everyone who asks.
          </p>
          <p className="text-[#6B5D4F] text-sm leading-relaxed mb-6 max-w-sm mx-auto">
            60 days to try it. Full refund if it doesn&apos;t change how you harvest. They pay return shipping.
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
          STICKY CTA — appears after 35% scroll
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
