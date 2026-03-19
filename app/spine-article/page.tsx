"use client"

import { SpineAsset } from "@/components/spine-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-grange-carrier"

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function Stars5() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[#DDA15E]" />
      ))}
    </div>
  )
}

function CtaButton({ size = "default" }: { size?: "default" | "large" }) {
  return (
    <a
      href={PDP_URL}
      className={`
        inline-block rounded-lg font-bold text-white bg-[#C86F4C]
        hover:bg-[#C86F4C]/90 transition-colors duration-200
        text-center cursor-pointer shadow-lg hover:shadow-xl
        ${size === "large"
          ? "px-10 py-4 text-base sm:text-lg w-full sm:w-auto"
          : "px-8 py-3 text-sm sm:text-base w-full sm:w-auto"}
      `}
    >
      Protect My Spine →
    </a>
  )
}

function Check() {
  return (
    <svg className="w-3.5 h-3.5 text-[#C86F4C] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function SpineArticlePage() {
  const features = [
    {
      number: "#1",
      title: "Zero-Gravity Cross-Back Harness",
      imageKey: "featureCrossBack" as const,
      body: "The cross-back strap system distributes harvest weight across your shoulders, core, and hips — the three load-bearing zones your body was built to use. Your spine stays vertical. The 20 pounds you're carrying feels like 5 because the load is shared across your entire upper body instead of pulling from one hand.",
    },
    {
      number: "#2",
      title: "20-Pound Wearable Capacity",
      imageKey: "featureCapacity" as const,
      body: "The front kangaroo pouch holds up to 20 pounds of produce on your body. You harvest once, unload once. Every trip you eliminate is dozens of one-handed bucket lifts you're not doing. Your spine isn't paying that price anymore.",
    },
    {
      number: "#3",
      title: "Drop-Chute Gravity Release",
      imageKey: "featureDropChute" as const,
      body: "Two quick-release buckles on each side. Unbuckle them and the bottom opens — your entire harvest slides out in one second via gravity. No bending over while holding 20 pounds. No flexing your spine under load. The bending and scooping motion is where most gardeners feel the strain. This eliminates it completely.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF7F2]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Page layout */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10 xl:gap-14">

          {/* ── Main content column ── */}
          <main className="flex-1 min-w-0 max-w-2xl xl:max-w-3xl py-8">

            {/* ============================================
                ARTICLE HEADER
                ============================================ */}
            <header className="border-b border-[#d4c9ba] pb-6 mb-8">
              {/* Site bar */}
              <div className="flex items-center justify-between mb-8 pt-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#6B5D4F]">
                  Field &amp; Harvest Co
                </span>
                <span className="text-xs text-[#6B5D4F] tracking-wide uppercase">Article</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-tight text-[#2D2118] text-balance mb-5 max-w-3xl" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                What Carrying a Harvest Bucket Is Actually Doing to Your Spine,{" "}
                <span className="italic">Doctors Wish Gardeners Knew About Harvest Season</span>
              </h1>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-[#C86F4C] pl-4 mb-6 text-base italic text-[#6B5D4F]">
                &ldquo;I gardened for 30 years before I learned what I was doing to my back. I wish I&apos;d known sooner.&rdquo;
                <footer className="not-italic text-sm mt-1 font-medium text-[#6B5D4F]">— Kathy</footer>
              </blockquote>

              {/* Byline */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#6B5D4F]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-[#F4EFE3] flex items-center justify-center text-xs font-semibold text-[#C86F4C]">
                    <SpineAsset name="authorAvatar" alt="Maria Noman" className="w-full h-full object-cover" fallbackClassName="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2D2118] text-xs">Maria Noman</p>
                    <p className="text-xs text-[#6B5D4F]">Garden Health Writer</p>
                  </div>
                </div>
                <span className="text-[#d4c9ba]">|</span>
                <time dateTime="2026-01-02" className="text-xs">Jan 2, 2026</time>
              </div>
            </header>

            {/* ============================================
                HERO IMAGE
                ============================================ */}
            <figure className="my-8 rounded-xl overflow-hidden">
              <SpineAsset name="heroImage" alt="Gardener harvesting vegetables while wearing The Grange Carrier" className="w-full h-auto object-cover max-h-[480px]" fallbackClassName="w-full h-[320px]" />
              <figcaption className="text-xs text-center text-[#6B5D4F] mt-2">
                The Grange Carrier distributes harvest weight across your shoulders, core, and hips.
              </figcaption>
            </figure>

            {/* ============================================
                ARTICLE BODY — TRIMMED
                ============================================ */}
            <div className="space-y-5 text-[#2D2118] leading-relaxed" style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}>
              <p>You&apos;re out in the garden on a Saturday morning. The tomatoes are coming in heavy. You grab your bucket and start moving down the row — left hand holding the handle, right hand picking. Fill it up, carry it to the next section.</p>
              <p>Set it down, pick it up, move again. You&apos;ve done this a thousand times over the years.</p>
              <p className="font-semibold text-[#2D2118]">But here&apos;s what&apos;s actually happening inside your body every single time you pick up that bucket:</p>

              {/* Callout */}
              <div className="bg-[#F4EFE3] border border-[#d4c9ba] rounded-lg px-6 py-5 my-6">
                <p className="text-xl sm:text-2xl text-[#2D2118] leading-snug text-balance" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  Your spine is being compressed.{" "}
                  <span className="italic">Unevenly.</span>
                </p>
                <p className="mt-2 text-sm text-[#6B5D4F]">Repeatedly. In ways that add up.</p>
              </div>

              <p>Every time you carry 10, 15, 20 pounds in one hand, your spine curves slightly to the opposite side. Your shoulder drops. Your neck tilts to keep you balanced.</p>
              <p>You do this 30, 40, 50 times a harvest. Twice a week during peak season. For years.</p>
              <p className="font-medium">It accumulates. Slowly. Silently.</p>
              <p>This is what orthopedic specialists call <strong>&ldquo;micro-trauma.&rdquo;</strong> Small, repeated stresses that individually seem harmless — but over months and years, they compress discs, inflame joints, and lock your spine into positions it was never meant to hold.</p>

              {/* Bold callout block */}
              <div className="border-l-4 border-[#C86F4C] bg-[#F4EFE3] pl-5 py-4 rounded-r-lg my-6 space-y-2">
                <p className="font-semibold text-[#2D2118]">
                  The bucket you&apos;re carrying isn&apos;t just heavy. It&apos;s aging your back faster than it should be aging.
                </p>
              </div>

              <p>Most gardeners don&apos;t realize this is happening until they&apos;re 60, 65, 70 — and suddenly bending over to tie their shoes sends a lightning bolt of pain up their spine. They think it&apos;s just age.</p>
              <p className="font-semibold">It&apos;s not. It&apos;s the accumulated cost of carrying weight the wrong way for decades.</p>

              {/* Soft text CTA — mid-article */}
              <div className="text-center py-3">
                <a href={PDP_URL} className="inline-flex items-center gap-2 text-[#C86F4C] font-bold text-base hover:underline underline-offset-4 transition-colors">
                  See what 22,000 gardeners switched to &rarr;
                </a>
              </div>

              <p className="font-semibold text-[#2D2118]">But here&apos;s what thousands of gardeners have figured out.</p>
              <p>You don&apos;t have to carry the weight at all. What if instead of holding 20 pounds in one hand, forcing your body to twist and compensate — that weight was distributed evenly across your shoulders, your core, your hips?</p>
              <p className="font-medium">The way your body was designed to carry load.</p>
              <p>This isn&apos;t about making gardening easier. <span className="font-semibold">It&apos;s about making sure you still can.</span></p>
            </div>

            {/* ============================================
                SPINE COMPARISON IMAGE
                ============================================ */}
            <figure className="my-8 rounded-xl overflow-hidden">
              <SpineAsset name="spineComparison" alt="Diagram comparing spinal load when carrying a bucket vs wearing The Grange Carrier" className="w-full h-auto object-cover max-h-[420px]" fallbackClassName="w-full h-[300px]" />
            </figure>

            {/* ============================================
                PRODUCT SECTION
                ============================================ */}
            <section className="mt-12 mb-8">
              {/* Section intro */}
              <div className="bg-[#F4EFE3] border border-[#d4c9ba] rounded-xl px-6 py-8 mb-10 text-center">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#C86F4C] mb-3">
                  The Solution
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-[2rem] text-[#2D2118] leading-snug text-balance mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  The Wearable Harvest System That Puts This Into Practice
                </h2>
                <p className="text-[#6B5D4F] text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
                  There&apos;s a reason over <strong className="text-[#2D2118]">22,000 gardeners</strong> have made the switch from buckets to{" "}
                  <strong className="text-[#2D2118]">The Grange Carrier</strong>. It&apos;s not an apron. It&apos;s a weight distribution system you wear.
                </p>
                {/* Product hero image */}
                <div className="rounded-lg overflow-hidden mb-5 max-w-lg mx-auto">
                  <SpineAsset name="productHero" alt="The Grange Carrier wearable harvest system" className="w-full h-auto object-cover" fallbackClassName="w-full h-[280px]" />
                </div>
                <p className="text-[#6B5D4F] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  Cross-back straps distribute up to <strong className="text-[#2D2118]">20 pounds</strong> across your shoulders and core. The weight sits on your body the way it&apos;s supposed to. Evenly. Balanced. Your spine stays neutral.
                </p>
              </div>

              {/* How it works header */}
              <h2 className="text-xl sm:text-2xl md:text-3xl text-[#2D2118] mb-2 text-balance" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                How It Protects Your Spine: 3 Systems Working Together
              </h2>
              <div className="w-12 h-1 bg-[#C86F4C] rounded mb-8" />

              {/* Feature cards */}
              <div className="space-y-10">
                {features.map((feature) => (
                  <div
                    key={feature.number}
                    className="flex flex-col md:flex-row gap-0 border border-[#d4c9ba] rounded-xl overflow-hidden bg-[#F4EFE3]"
                  >
                    <div className="md:w-72 lg:w-80 shrink-0">
                      <SpineAsset name={feature.imageKey} alt={feature.title} className="w-full h-52 md:h-full object-cover" fallbackClassName="w-full h-52 md:h-full" />
                    </div>
                    <div className="flex flex-col justify-center px-6 py-6 gap-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#C86F4C] text-white font-bold text-sm shrink-0">
                          {feature.number}
                        </span>
                        <h3 className="text-lg sm:text-xl text-[#2D2118] leading-snug" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-[#6B5D4F] text-sm sm:text-base leading-relaxed">
                        {feature.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mid-page CTA */}
              <div className="mt-10 flex flex-col items-center gap-3 text-center">
                <CtaButton />
                <p className="text-xs text-[#6B5D4F]">Free returns &bull; 22,000+ customers &bull; Ships in 2–3 business days</p>
              </div>
            </section>

            {/* ============================================
                TESTIMONIALS — Stacked vertically, 2 reviews
                ============================================ */}
            <section className="my-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-[#2D2118] mb-2 text-balance" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                What Gardeners Are Saying
              </h2>
              <div className="w-12 h-1 bg-[#C86F4C] rounded mb-8" />

              <div className="space-y-5">
                {/* Catherine — back pain relief */}
                <figure className="bg-[#F4EFE3] border border-[#d4c9ba] rounded-xl p-6 space-y-3">
                  <Stars5 />
                  <blockquote className="text-base italic text-[#2D2118] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    &ldquo;My back doesn&apos;t hurt after harvesting anymore.&rdquo;
                  </blockquote>
                  <p className="text-sm text-[#6B5D4F] leading-relaxed">
                    I&apos;ve been gardening for 30 years. The last five years, I&apos;d feel it in my lower back every time I came in from the garden — that deep ache that wouldn&apos;t go away until the next morning. I thought it was just getting older. My daughter got me The Grange Carrier last spring. The back pain after harvesting? Gone.
                  </p>
                  <figcaption className="text-sm font-semibold text-[#2D2118] border-t border-[#d4c9ba] pt-3">
                    Catherine Nelson
                  </figcaption>
                </figure>

                {/* Keith — wish I'd known sooner */}
                <figure className="bg-[#F4EFE3] border border-[#d4c9ba] rounded-xl p-6 space-y-3">
                  <Stars5 />
                  <blockquote className="text-base italic text-[#2D2118] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    &ldquo;I wish I&apos;d bought this 10 years ago.&rdquo;
                  </blockquote>
                  <p className="text-sm text-[#6B5D4F] leading-relaxed">
                    I&apos;m 74. I&apos;ve been gardening since I was in my 40s. My back isn&apos;t what it used to be. But this carrier — it&apos;s the only reason I&apos;m still out there. I can harvest for two, three hours and not feel destroyed the next day. If you&apos;re reading this and you&apos;re still using buckets, don&apos;t wait as long as I did.
                  </p>
                  <figcaption className="text-sm font-semibold text-[#2D2118] border-t border-[#d4c9ba] pt-3">
                    Keith Wheeler
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ============================================
                ARTICLE CLOSING — Trimmed
                ============================================ */}
            <section className="mt-10 mb-16">
              <div className="space-y-4 text-[#2D2118] leading-relaxed mb-10" style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}>
                <p className="font-semibold text-lg text-[#2D2118]">
                  You can&apos;t undo decades of micro-trauma. But you can stop adding to it today.
                </p>
                <p>Or you can distribute the weight. Protect your spine. And keep gardening for decades — not just a few more years.</p>
              </div>

              {/* Final CTA box */}
              <div className="bg-[#F4EFE3] border-2 border-[#C86F4C] rounded-xl px-6 py-8 sm:px-10 sm:py-10 text-center">
                <p className="text-xs font-bold tracking-widest uppercase text-[#C86F4C] mb-3">
                  Free Returns Included
                </p>
                <h3 className="text-2xl sm:text-3xl text-[#2D2118] leading-tight text-balance mb-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  This is your spine. The only one you get.
                </h3>
                <p className="text-[#6B5D4F] text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
                  The Grange Carrier comes with free returns. If it doesn&apos;t eliminate the strain, send it back. But it will.
                </p>
                <div className="flex flex-col items-center gap-3">
                  <CtaButton size="large" />
                  <p className="text-xs text-[#6B5D4F]">
                    Free returns &bull; 22,000+ customers &bull; Ships in 2–3 business days
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* ── Sticky sidebar — desktop only ── */}
          <aside className="hidden lg:block w-72 xl:w-80 shrink-0 py-8">
            <div className="sticky top-6 space-y-6">

              {/* Product card */}
              <div className="border border-[#d4c9ba] rounded-xl overflow-hidden bg-[#F4EFE3]">
                <SpineAsset name="sidebarProduct" alt="The Grange Carrier" className="w-full h-48 object-cover object-top" fallbackClassName="w-full h-48" />
                <div className="p-5 space-y-3">
                  <Stars5 />
                  <p className="text-xs text-[#6B5D4F]">22,000+ happy gardeners</p>
                  <h3 className="text-base font-semibold text-[#2D2118]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    The Grange Carrier
                  </h3>
                  <p className="text-xs text-[#6B5D4F] leading-relaxed">
                    Wearable harvest system. Cross-back straps. 20 lb capacity. Drop-chute release.
                  </p>
                  <CtaButton />
                  <ul className="text-xs text-[#6B5D4F] space-y-1 pt-1">
                    <li className="flex items-center gap-2"><Check />Free returns</li>
                    <li className="flex items-center gap-2"><Check />Ships in 2–3 business days</li>
                    <li className="flex items-center gap-2"><Check />Protects your spine</li>
                  </ul>
                </div>
              </div>

              {/* Pull quote */}
              <div className="bg-[#F4EFE3] border border-[#d4c9ba] rounded-xl p-5">
                <blockquote className="text-sm italic text-[#2D2118] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  &ldquo;My back doesn&apos;t hurt after harvesting anymore. I didn&apos;t realize how much strain those buckets were putting on me.&rdquo;
                </blockquote>
                <p className="text-xs font-semibold text-[#6B5D4F] mt-3">— Catherine Nelson</p>
              </div>

              {/* Key stats */}
              <div className="border border-[#d4c9ba] rounded-xl p-5 space-y-4 bg-white">
                <p className="text-xs font-bold tracking-widest uppercase text-[#C86F4C]">By the numbers</p>
                {[
                  { stat: "22,000+", label: "gardeners who switched" },
                  { stat: "20 lbs", label: "wearable harvest capacity" },
                  { stat: "0", label: "one-handed bucket lifts" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-[#C86F4C]" style={{ fontFamily: "'Lora', Georgia, serif" }}>{stat}</span>
                    <span className="text-xs text-[#6B5D4F]">{label}</span>
                  </div>
                ))}
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#d4c9ba] mt-8 py-8 text-center text-xs text-[#6B5D4F]">
        <p>
          &copy; {new Date().getFullYear()} Field &amp; Harvest Co. &nbsp;&bull;&nbsp;{" "}
          <a href="https://fieldandharvestco.com" className="underline hover:text-[#C86F4C] transition-colors">
            fieldandharvestco.com
          </a>
        </p>
        <p className="mt-2 text-[10px] max-w-lg mx-auto leading-relaxed">
          This article is for informational purposes only and is not a substitute for professional medical advice.
        </p>
      </footer>
    </div>
  )
}
