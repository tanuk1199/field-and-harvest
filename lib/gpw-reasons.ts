import { type ReasonData } from '@/components/listicle-gpw/reason'

// /no-ladder-no-crew : THE GABLE PRESSURE WASHER WAND. 6 reason cards, the last is the guarantee.
// Images are the Gable's own Shopify files (all show the real unit: screw-together stainless
// sections, brass couplers, black foam grip with the 6-tip clip). Nothing new was generated.
// Sources for reason 1 live in Funnels/builds/2026-10-26-fh-gable-no-ladder-no-crew/argument.md.
const CDN = 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files'

export const reasons: ReasonData[] = [
  {
    number: 1,
    title: 'Both feet stay on the grass.',
    titleAccent: 'The ladder stays in the garage.',
    image: `${CDN}/gable-16-info-ladder-vs-ground.png?width=1000`,
    imageAlt: 'The same two-story gutter cleaned from a ladder and from the lawn with the Gable wand',
    paragraphs: [
      'Wet rungs, a pressure washer kicking in your hands, an arm stretched past the rail. In one year about 511,000 Americans were treated for ladder injuries, and adults 65 and older are 80% more likely than other adults to land in the ER from one. The Gable sends the spray up and keeps you on the lawn.',
    ],
    bullets: ['Up to 24 ft of reach from the ground', 'Nobody holding the ladder, nobody moving it', 'Both hands on the foam grip, feet planted'],
  },
  {
    number: 2,
    title: 'The gutters get flushed out from the lawn.',
    titleAccent: 'The gutter hook is in the box.',
    image: `${CDN}/gable-18-info-gutter-hook.png?width=1000`,
    imageAlt: 'A man flushing leaves out of a second-story gutter from the lawn with the Gable gutter hook',
    paragraphs: [
      'Screw the curved gutter hook onto the end of the wand and it bends back down into the trough. Walk the gutter line from the lawn and the water pushes the leaves and packed muck out over the edge as you go. Fall fills them, and this is the job the Gable is built for.',
    ],
    bullets: ['Curved gutter hook included', 'Walk the line once, end to end', 'Flushes the leaves out over the edge'],
  },
  {
    number: 3,
    title: 'You pay for it once.',
    titleAccent: 'A crew bills you every time.',
    image: `${CDN}/gable-13-collapsed-garage-wall.png?width=1000`,
    imageAlt: 'The Gable wand hanging on a garage pegboard beside the pressure washer',
    paragraphs: [
      'A crew takes the ladder off your hands and hands you a bill instead. The gutters fill again every fall and the north side greens up every spring, so you wait for a date, write the check and do it again next year. The Gable hangs on your garage wall and comes down the day you decide.',
    ],
    bullets: ['$101 off during the Halloween Sale', 'Yours for every fall after this one', 'No booking, no waiting on a date'],
    cta: 'See The Gable',
  },
  {
    number: 4,
    title: 'Twenty four feet covers the whole second story.',
    titleAccent: 'Not just the gutters.',
    image: `${CDN}/gable-17-info-every-high-spot.png?width=1000`,
    imageAlt: 'The Gable wand reaching gutters, soffits, siding and the peak of a two-story house',
    paragraphs: [
      'Once the gutters are clear, swap the hook for a straight run and work the rest of the house from the same patch of grass: soffits, fascia, siding, the peak and the upper windows. Six color-coded tips ride on a clip at the grip, from a wide rinse for siding to a narrow blast for packed growth.',
    ],
    bullets: ['Gutters, soffits, siding, peaks and upper windows', '6 spray tips clipped to the grip', 'Rated up to 4,000 PSI'],
    cta: 'Check Availability',
  },
  {
    number: 5,
    title: 'It hooks to the pressure washer you already own.',
    titleAccent: 'Screw it together and wash.',
    image: `${CDN}/gable-20-info-fits-your-washer.png?width=1000`,
    imageAlt: 'The Gable wand connected to a homeowner pressure washer by its quick-connect inlet',
    paragraphs: [
      'The stainless sections screw together at solid brass couplers, the trigger gun and hose come in the box, and the quick-connect inlet clicks onto your washer. No new machine to buy, nothing to rent and nothing to wait on. Unbox it and wash the same afternoon.',
    ],
    bullets: ['Stainless sections, brass couplers', 'Trigger gun and hose included', 'Quick-connect inlet onto your washer'],
  },
  {
    number: 6,
    title: 'Take it up to your own gutters for 30 days.',
    titleAccent: 'Plus a free 1 year warranty.',
    image: `${CDN}/gable-pdp-guarantee-seal.png?width=1000`,
    imageAlt: '30 day money back guarantee seal and free 1 year warranty plaque',
    paragraphs: [
      'Wash the gutters, the siding and the peak with it. You have 30 days to decide, with your money back either way, and the wand is covered by a free 1 year warranty on top of that. The first fall without the ladder is the whole test.',
    ],
    bullets: ['30 day money back guarantee', 'Free 1 year warranty, a $30 value', 'Free shipping'],
  },
]
