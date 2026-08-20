import { type ReasonData } from '@/components/listicle-bpp/reason'

// 6 reasons for /the-black-pepper-problem. SOLUTION-AWARE education page.
//
// ⭐ THE STRUCTURAL RULE, after the first pass: the page was proving ONE thing
// five times. Reasons 1, 2 and 3 were all "the pepper claim is hollow" from
// three angles. Each reason now proves a DIFFERENT thing, and the near-zero
// arithmetic became one supporting sentence inside reason 1 rather than its own
// argument.
//
// ⭐ REASON 5 IS THE DIFFERENTIATION AND IT WAS MISSING ENTIRELY.
// 5-competitive-teardown.md §2: BioRoot 20x, TurmericXL 45x, Thorne 29x, Qunol
// owns anti-black-pepper nationally. ABSORPTION ALONE IS TABLE STAKES, so a page
// that only argues absorption cannot demonstrate superiority. Boswellia at 30%
// AKBA working 5-LOX is Pillar 2 of 3-mechanism.md: a genuine formulation
// differentiator rather than a louder number, and the only reason on this page
// that argues we are BETTER rather than merely NOT FRAUDULENT.
//
// ⚠ Reason 3 states a MECHANISM and refers him to his doctor. It never says a
// product is dangerous and never tells him to stop taking anything.
// ⚠ Reason 5 describes what the ingredients act on. It is not a claim that this
// product treats any condition, and it does not tell him to drop his medication.
export const reasons: ReasonData[] = [
  {
    number: 1,
    title: 'The number on the front came from one study of eight people',
    titleAccent: 'Planta Medica, 1998',
    image: '/bpp-r1-reading-the-label-1x1.png',
    imageAlt: 'A man in his sixties at his kitchen table turning a supplement bottle over to read the back',
    paragraphs: ['Almost every turmeric on the shelf adds black pepper and prints a very large absorption figure. That figure traces back to a single small crossover trial from 1998. **Eight participants.** **One of the authors founded the company that sells the branded pepper extract.** And curcumin alone barely registered in that trial at all, so the ratio was calculated against a number sitting at the edge of detection. It has **never been independently reproduced** since.'],
    bullets: ['Eight people, one small trial, 1998', 'An author whose company sold the pepper', 'Never independently replicated in 28 years'],
  },
  {
    number: 2,
    title: 'The amount in your bottle is the amount that barely registered',
    titleAccent: 'One percent, not ten',
    image: '/bpp-r2-five-milligrams-1x1.png',
    imageAlt: 'A weathered palm holding a pinch of ground spice beside a much larger mound of turmeric',
    paragraphs: ['A 2025 three-arm human study compared curcuminoids with one percent piperine against ten percent. The one percent arm reached a blood level of **about 11 ng/mL**. The ten percent arm reached **664**. Typical supplements use around 5 mg of pepper per 500 mg of curcumin, which is one percent. So even taking the pepper argument at face value, **the dose the whole category actually uses is the dose that did almost nothing**.'],
    bullets: ['One percent reached about 11 ng/mL', 'Ten percent reached 664 ng/mL', 'Your bottle almost certainly uses one percent'],
  },
  {
    number: 3,
    title: 'If you are sixty and still working, black pepper is doing something nobody mentioned',
    titleAccent: 'It slows your clearance, not just curcumin',
    image: '/bpp-r4-the-pill-organiser-1x1.png',
    imageAlt: 'A weekly pill organiser and prescription bottles on a kitchen counter beside work gloves',
    paragraphs: ['Piperine works by **inhibiting glucuronidation**, one of the pathways your liver and gut wall use to clear compounds out of your system. That is the entire mechanism behind the absorption claim, not a side effect of it. **It does not distinguish between curcumin and anything else passing through, including prescription medication.** If you take blood pressure medication, a statin or a blood thinner, that is **worth raising at your next appointment**.'],
    bullets: ['It acts on a drug-metabolizing pathway', 'That is the mechanism, not a footnote', 'Bring the bottle to your doctor and ask'],
  },
  {
    number: 4,
    title: 'The fix is the form of the curcumin, not an enzyme in your liver',
    titleAccent: 'A phytosome crosses on its own terms',
    image: '/bpp-r3-almost-nothing-1x1.png',
    imageAlt: 'Two glasses on a kitchen table, one holding a film at the bottom and one nearly full',
    paragraphs: ['There is another way to solve the absorption problem, and it does not involve slowing anything down. **A phytosome wraps the curcumin in a fat your body already knows how to take in, so it crosses without help.** Nothing in your system gets held back, and nothing else you take is affected. It is also why our bottle says 500 where most say 1,000: the figure on the front is **what went into your mouth, not what arrived**.'],
    bullets: ['Wrapped in a fat you already absorb', 'Nothing in your system is slowed down', 'A smaller printed dose that actually arrives'],
    cta: 'See What Is In Ours',
  },
  {
    number: 5,
    title: 'Absorption is only half of it. There is a second pathway nothing in your cabinet reaches.',
    titleAccent: 'Boswellia standardised to 30 percent AKBA',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/supp-two-roads-v2.png',
    imageAlt: 'Diagram of the COX pathway and the separate 5-LOX pathway that boswellia AKBA acts on',
    paragraphs: ['**Your body makes inflammation two different ways.** Ibuprofen and the rest of the over-the-counter shelf work on the first one, and so does curcumin, mostly. The second runs on its own and **neither of them reaches it**. That is what the boswellia is in here for, standardised to 30 percent AKBA, the compound that acts on it. **Most boswellia on the shelf is not standardised for it at all**, which is worth checking on any bottle you pick up.'],
    bullets: ['Two pathways, not one', 'Boswellia acts on the one the others miss', 'Standardised to 30 percent AKBA, not whatever was in the plant'],
  },
  {
    number: 6,
    title: 'Four actives, every dose printed, and you can check ours the same way',
    titleAccent: 'Nothing behind a combined total',
    image: '/bpp-r5-the-one-that-gets-in-1x1.png',
    imageAlt: 'A man at his tailgate at golden hour holding the Field and Harvest turmeric bottle',
    paragraphs: ['Curcumin phytosome 500 mg. Boswellia serrata at 30 percent AKBA, 100 mg. Ginger extract 100 mg. Vitamin D3 2,000 IU. Other ingredients: vegetarian capsule and rice flour. That is the entire list, **each one on its own line**, because a label is allowed to group ingredients together and print only the combined weight. **Take the four checks above to our bottle and run them on us too.**'],
    bullets: ['Four actives, each with its own dose', 'No black pepper and no piperine', 'Ninety days to decide, and you keep the bottles'],
  },
]
