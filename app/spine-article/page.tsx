"use client"

import { SpineAsset } from "@/components/spine-asset"

const PDP_URL = "https://fieldandharvestco.com/products/the-grange-carrier"

/* ── Inline star SVG to avoid lucide dependency mismatch ── */
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
        <Star key={i} className="w-4 h-4 text-[#D36728]" />
      ))}
    </div>
  )
}

function CtaButton({ size = "default" }: { size?: "default" | "large" }) {
  return (
    <a
      href={PDP_URL}
      className={`
        inline-block rounded-md font-semibold text-white bg-[#D36728]
        hover:bg-[#b85820] transition-colors duration-200
        text-center cursor-pointer
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
    <svg className="w-3.5 h-3.5 text-[#D36728] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

/* ── Color tokens (scoped via inline styles + Tailwind arbitrary values) ──
   --ink:              #2a2218
   --ink-muted:        #6b5d4f
   --brand-orange:     #D36728
   --surface-warm:     #f0ebe3
   --surface-highlight: #ede4d6
   --rule:             #d4c9ba
   --card:             #f5f0e8
   --background:       #faf8f4
*/

export default function SpineArticlePage() {
  const features = [
    {
      number: "#1",
      title: "Zero-Gravity Cross-Back Harness",
      imageKey: "featureCrossBack" as const,
      body: "The cross-back strap system distributes harvest weight across your shoulders, core, and hips — the three load-bearing zones your body was built to use. Your spine stays vertical. No curving. No tilting. No compensation. The 20 pounds you're carrying feels like 5 because the load is shared across your entire upper body instead of pulling from one hand.",
    },
    {
      number: "#2",
      title: "20-Pound Wearable Capacity",
      imageKey: "featureCapacity" as const,
      body: "The front kangaroo pouch holds your entire harvest session — up to 20 pounds of produce — on your body. You're not making 5, 6, 7 trips back to the shed with a bucket. You harvest once, unload once. Fewer repetitions means fewer opportunities for spinal compression. Every trip you eliminate is dozens of one-handed bucket lifts you're not doing. Your spine isn't paying that price anymore.",
    },
    {
      number: "#3",
      title: "Drop-Chute Gravity Release",
      imageKey: "featureDropChute" as const,
      body: "Two quick-release buckles on each side of the pouch. Unbuckle them and the bottom opens — your entire harvest slides out in one second via gravity. No reaching in to scoop. No bending over while holding 20 pounds. No flexing your spine under load. You stand upright, release, and empty. The bending and scooping motion is where most gardeners feel the strain. This eliminates it completely.",
    },
  ]

  const testimonials = [
    {
      quote: "I've been gardening for 30 years. The last five years, I'd feel it in my lower back every time I came in from the garden — that deep ache that wouldn't go away until the next morning. I thought it was just getting older. My daughter got me The Grange Carrier last spring. I've used it all season. The back pain after harvesting? Gone. I didn't realize how much strain those buckets were putting on me until I stopped using them.",
      name: "Catherine Nelson",
      headline: "\"My back doesn't hurt after harvesting anymore.\"",
    },
    {
      quote: "I was making six, seven trips back and forth from the garden to my kitchen with a 5-gallon bucket. My tomatoes alone would take three trips during peak season. With this, I load everything into the pouch, walk back once, and dump it all out. It holds so much more than I expected. And I'm not exhausted by the time I'm done. My shoulders feel fine. My back feels fine. I don't understand how I did it the old way for so long.",
      name: "Liz Heather",
      headline: "\"I can actually harvest my whole garden in one trip now.\"",
    },
    {
      quote: "I'm 74. I've been gardening since I was in my 40s. If someone had told me back then that the way I was carrying my harvest was going to catch up with me, I would've listened. My back isn't what it used to be. But this carrier — it's the only reason I'm still out there. I can harvest for two, three hours and not feel destroyed the next day. If you're reading this and you're still using buckets, don't wait as long as I did.",
      name: "Keith Wheeler",
      headline: "\"I wish I'd bought this 10 years ago.\"",
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf8f4]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Top announcement bar */}
      <div className="w-full text-center py-2 px-4 text-xs font-medium text-white bg-[#D36728]">
        Free Returns on The Grange Carrier &mdash; 22,000+ Gardeners Already Protecting Their Spines
      </div>

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
                <span className="text-xs font-semibold tracking-widest uppercase text-[#6b5d4f]">
                  Field &amp; Harvest Co
                </span>
                <span className="text-xs text-[#6b5d4f] tracking-wide uppercase">Article</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-tight text-[#2a2218] text-balance mb-5 max-w-3xl" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                What Carrying a Harvest Bucket Is Actually Doing to Your Spine,{" "}
                <span className="italic">Doctors Wish Gardeners Knew About Harvest Season</span>
              </h1>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-[#D36728] pl-4 mb-6 text-base italic text-[#6b5d4f]">
                &ldquo;I gardened for 30 years before I learned what I was doing to my back. I wish I&apos;d known sooner.&rdquo;
                <footer className="not-italic text-sm mt-1 font-medium text-[#6b5d4f]">— Kathy</footer>
              </blockquote>

              {/* Byline */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#6b5d4f]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-[#ede4d6] flex items-center justify-center text-xs font-semibold text-[#D36728]">
                    <SpineAsset name="authorAvatar" alt="Maria Noman" className="w-full h-full object-cover" fallbackClassName="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2a2218] text-xs">Maria Noman</p>
                    <p className="text-xs text-[#6b5d4f]">Garden Health Writer</p>
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
              <figcaption className="text-xs text-center text-[#6b5d4f] mt-2">
                The Grange Carrier distributes harvest weight across your shoulders, core, and hips.
              </figcaption>
            </figure>

            {/* ============================================
                ARTICLE BODY
                ============================================ */}
            <div className="space-y-5 text-[#2a2218] leading-relaxed" style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}>
              <p>You&apos;re out in the garden on a Saturday morning.</p>
              <p>The tomatoes are coming in heavy. You grab your bucket and start moving down the row — left hand holding the handle, right hand picking. Fill it up, carry it to the next section.</p>
              <p>Set it down, pick it up, move again.</p>
              <p>You&apos;ve done this a hundred times this season. A thousand times over the years.</p>
              <p className="font-medium">And you don&apos;t feel anything wrong.</p>
              <p>Not yet.</p>
              <p className="font-semibold text-[#2a2218]">But here&apos;s what&apos;s actually happening inside your body every single time you pick up that bucket:</p>

              {/* Callout */}
              <div className="bg-[#f0ebe3] border border-[#d4c9ba] rounded-lg px-6 py-5 my-6">
                <p className="text-xl sm:text-2xl text-[#2a2218] leading-snug text-balance" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  Your spine is being compressed.{" "}
                  <span className="italic">Unevenly.</span>
                </p>
                <p className="mt-2 text-sm text-[#6b5d4f]">Repeatedly. In ways that add up.</p>
              </div>

              <p>Every time you carry 10, 15, 20 pounds in one hand, your body compensates.</p>
              <p>Your spine curves slightly to the opposite side. Your shoulder drops. Your neck tilts to keep you balanced.</p>
              <p>You do this 30, 40, 50 times a harvest. Twice a week during peak season. For years.</p>
              <p>And the damage doesn&apos;t announce itself with a sudden snap.</p>
              <p className="font-medium">It accumulates. Slowly. Silently.</p>
              <p>This is what orthopedic specialists call <strong>&ldquo;micro-trauma.&rdquo;</strong></p>
              <p>Small, repeated stresses that individually seem harmless — but over months and years, they compress discs, inflame joints, and lock your spine into positions it was never meant to hold.</p>

              {/* Bold callout block */}
              <div className="border-l-4 border-[#D36728] bg-[#ede4d6] pl-5 py-4 rounded-r-lg my-6 space-y-2">
                <p className="font-semibold text-[#2a2218]">
                  The bucket you&apos;re carrying isn&apos;t just heavy. It&apos;s aging your back faster than it should be aging.
                </p>
                <p className="text-[#6b5d4f] text-sm">
                  Every time you lift that bucket with one hand, you&apos;re asking your spine to do something it wasn&apos;t designed to do: carry uneven load while staying upright.
                </p>
              </div>

              <p>And every time, your spine pays a small price.</p>
              <p>A price you can&apos;t see. Can&apos;t feel. Not yet. But it&apos;s being paid.</p>
              <p>And most gardeners don&apos;t realize this is happening until they&apos;re 60, 65, 70 — and suddenly bending over to tie their shoes sends a lightning bolt of pain up their spine.</p>
              <p>They think it&apos;s just age.</p>
              <p className="font-semibold">It&apos;s not.</p>
              <p>It&apos;s the accumulated cost of carrying weight the wrong way for decades.</p>
              <p>You see, your body is remarkably good at hiding damage while it&apos;s happening. The compensation feels normal. The slight curve in your spine becomes your new baseline. The inflammation stays low-grade enough that you don&apos;t notice it.</p>
              <p>Until one day, you do.</p>
              <p>And by then, you&apos;re not preventing damage anymore. You&apos;re managing pain.</p>

              {/* Key insight */}
              <div className="bg-[#f0ebe3] border border-[#d4c9ba] rounded-lg px-6 py-5 my-6 text-center">
                <p className="text-lg sm:text-xl italic text-[#2a2218] leading-snug text-balance" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  &ldquo;The truth is, what you call &lsquo;getting older&rsquo; might actually be &lsquo;getting compressed&rsquo; — one harvest bucket at a time, one season at a time, one year at a time.&rdquo;
                </p>
              </div>

              <p className="font-semibold text-[#2a2218]">But here&apos;s what thousands of gardeners have figured out.</p>
              <p>You don&apos;t have to carry the weight at all.</p>
              <p>What if instead of holding 20 pounds in one hand, forcing your body to twist and compensate — that weight was distributed evenly across your shoulders, your core, your hips?</p>
              <p className="font-medium">The way your body was designed to carry load.</p>
              <p>Your spine stays straight. Your hands stay free.</p>
              <p>And instead of accumulating damage with every harvest, you&apos;re protecting the one body you have — so you can keep gardening for decades, not just a few more years.</p>
              <p>This isn&apos;t about making gardening easier.</p>
              <p className="font-semibold text-[#2a2218]">It&apos;s about making sure you still can.</p>
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
              <div className="bg-[#f0ebe3] border border-[#d4c9ba] rounded-xl px-6 py-8 mb-10 text-center">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#D36728] mb-3">
                  The Solution
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-[2rem] text-[#2a2218] leading-snug text-balance mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  The Wearable Harvest System That Puts This Into Practice
                </h2>
                <p className="text-[#6b5d4f] text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
                  There&apos;s a reason over <strong className="text-[#2a2218]">22,000 gardeners</strong> have made the switch from buckets to{" "}
                  <strong className="text-[#2a2218]">The Grange Carrier</strong>.
                </p>
                {/* Product hero image */}
                <div className="rounded-lg overflow-hidden mb-5 max-w-lg mx-auto">
                  <SpineAsset name="productHero" alt="The Grange Carrier wearable harvest system" className="w-full h-auto object-cover" fallbackClassName="w-full h-[280px]" />
                </div>
                <p className="text-[#6b5d4f] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  It&apos;s not an apron. It&apos;s a weight distribution system you wear. Cross-back straps distribute up to{" "}
                  <strong className="text-[#2a2218]">20 pounds</strong> of harvest across your shoulders and core — not hanging from your neck like traditional aprons, and not concentrated in one hand like a bucket.
                </p>
                <p className="text-[#6b5d4f] text-sm sm:text-base mt-3 leading-relaxed max-w-xl mx-auto">
                  The weight sits on your body the way it&apos;s supposed to. Evenly. Balanced. Your spine stays neutral.
                </p>
              </div>

              {/* How it works header */}
              <h2 className="text-xl sm:text-2xl md:text-3xl text-[#2a2218] mb-2 text-balance" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                How It Protects Your Spine: 3 Systems Working Together
              </h2>
              <div className="w-12 h-1 bg-[#D36728] rounded mb-8" />

              {/* Feature cards */}
              <div className="space-y-10">
                {features.map((feature) => (
                  <div
                    key={feature.number}
                    className="flex flex-col md:flex-row gap-0 border border-[#d4c9ba] rounded-xl overflow-hidden bg-[#f5f0e8]"
                  >
                    {/* Image */}
                    <div className="md:w-72 lg:w-80 shrink-0">
                      <SpineAsset name={feature.imageKey} alt={feature.title} className="w-full h-52 md:h-full object-cover" fallbackClassName="w-full h-52 md:h-full" />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col justify-center px-6 py-6 gap-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#D36728] text-white font-bold text-sm shrink-0">
                          {feature.number}
                        </span>
                        <h3 className="text-lg sm:text-xl text-[#2a2218] leading-snug" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-[#6b5d4f] text-sm sm:text-base leading-relaxed">
                        {feature.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mid-page CTA */}
              <div className="mt-10 flex flex-col items-center gap-3 text-center">
                <CtaButton />
                <p className="text-xs text-[#6b5d4f]">Free returns &bull; 22,000+ customers &bull; Ships in 2–3 business days</p>
              </div>
            </section>

            {/* ============================================
                TESTIMONIALS
                ============================================ */}
            <section className="my-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-[#2a2218] mb-2 text-balance" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                What Gardeners Are Saying
              </h2>
              <div className="w-12 h-1 bg-[#D36728] rounded mb-8" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {testimonials.map((t) => (
                  <figure
                    key={t.name}
                    className="flex flex-col bg-[#f5f0e8] border border-[#d4c9ba] rounded-xl p-6 gap-4"
                  >
                    <Stars5 />
                    <blockquote className="text-base italic text-[#2a2218] leading-relaxed flex-1" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                      {t.headline}
                    </blockquote>
                    <p className="text-sm text-[#6b5d4f] leading-relaxed">
                      {t.quote}
                    </p>
                    <figcaption className="text-sm font-semibold text-[#2a2218] border-t border-[#d4c9ba] pt-3 mt-auto">
                      {t.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* ============================================
                ARTICLE CLOSING
                ============================================ */}
            <section className="mt-10 mb-16">
              <div className="space-y-4 text-[#2a2218] leading-relaxed mb-10" style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}>
                <p className="font-semibold text-lg text-[#2a2218]">
                  You can&apos;t undo decades of micro-trauma.
                </p>
                <p>But you can stop adding to it today.</p>
                <p>Every harvest season you spend carrying buckets is another season of spinal compression. Another season of accumulated damage. Another season closer to the point where your back decides it&apos;s had enough.</p>
                <p>Or you can distribute the weight. Protect your spine. And keep gardening for decades — not just a few more years.</p>
                <p>Over <strong>22,000 gardeners</strong> have already made this shift.</p>
                <p>They&apos;re not hauling buckets anymore. They&apos;re not making multiple trips anymore. And they&apos;re not waking up the next morning wondering why their back hurts.</p>
              </div>

              {/* Final CTA box */}
              <div className="bg-[#f0ebe3] border-2 border-[#D36728] rounded-xl px-6 py-8 sm:px-10 sm:py-10 text-center">
                <p className="text-xs font-bold tracking-widest uppercase text-[#D36728] mb-3">
                  Free Returns Included
                </p>
                <h3 className="text-2xl sm:text-3xl text-[#2a2218] leading-tight text-balance mb-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  This is your spine. The only one you get.
                </h3>
                <p className="text-[#6b5d4f] text-sm sm:text-base leading-relaxed mb-2 max-w-md mx-auto">
                  The Grange Carrier comes with free returns. If it doesn&apos;t eliminate the strain, send it back. But it will.
                </p>
                <p className="text-[#6b5d4f] text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
                  Because you&apos;re not fighting against your body&apos;s design anymore. You&apos;re working with it.
                </p>
                <div className="flex flex-col items-center gap-3">
                  <CtaButton size="large" />
                  <p className="text-xs text-[#6b5d4f]">
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
              <div className="border border-[#d4c9ba] rounded-xl overflow-hidden bg-[#f5f0e8]">
                <SpineAsset name="sidebarProduct" alt="The Grange Carrier" className="w-full h-48 object-cover object-top" fallbackClassName="w-full h-48" />
                <div className="p-5 space-y-3">
                  <Stars5 />
                  <p className="text-xs text-[#6b5d4f]">22,000+ happy gardeners</p>
                  <h3 className="text-base font-semibold text-[#2a2218]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                    The Grange Carrier
                  </h3>
                  <p className="text-xs text-[#6b5d4f] leading-relaxed">
                    Wearable harvest system. Cross-back straps. 20 lb capacity. Drop-chute release.
                  </p>
                  <CtaButton />
                  <ul className="text-xs text-[#6b5d4f] space-y-1 pt-1">
                    <li className="flex items-center gap-2"><Check />Free returns</li>
                    <li className="flex items-center gap-2"><Check />Ships in 2–3 business days</li>
                    <li className="flex items-center gap-2"><Check />Protects your spine</li>
                  </ul>
                </div>
              </div>

              {/* Pull quote */}
              <div className="bg-[#ede4d6] border border-[#d4c9ba] rounded-xl p-5">
                <blockquote className="text-sm italic text-[#2a2218] leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  &ldquo;My back doesn&apos;t hurt after harvesting anymore. I didn&apos;t realize how much strain those buckets were putting on me.&rdquo;
                </blockquote>
                <p className="text-xs font-semibold text-[#6b5d4f] mt-3">— Catherine Nelson</p>
              </div>

              {/* Key stats */}
              <div className="border border-[#d4c9ba] rounded-xl p-5 space-y-4">
                <p className="text-xs font-bold tracking-widest uppercase text-[#D36728]">By the numbers</p>
                {[
                  { stat: "22,000+", label: "gardeners who switched" },
                  { stat: "20 lbs", label: "wearable harvest capacity" },
                  { stat: "0", label: "one-handed bucket lifts" },
                ].map(({ stat, label }) => (
                  <div key={stat} className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-[#D36728]" style={{ fontFamily: "'Lora', Georgia, serif" }}>{stat}</span>
                    <span className="text-xs text-[#6b5d4f]">{label}</span>
                  </div>
                ))}
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#d4c9ba] mt-8 py-8 text-center text-xs text-[#6b5d4f]">
        <p>
          &copy; {new Date().getFullYear()} Field &amp; Harvest Co. &nbsp;&bull;&nbsp;{" "}
          <a href="https://fieldandharvestco.com" className="underline hover:text-[#D36728] transition-colors">
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
