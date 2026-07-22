import { type ReasonData } from '@/components/listicle/reason'

// 5 listicle reason cards. Each: number, title + colored titleAccent, image, alt,
// one paragraph (problem + mechanism + result), 3 bullets, optional cta.
// imageAspect defaults to square; set e.g. 'aspect-[4/3]' for a landscape chart.
export const reasons: ReasonData[] = [
  {
    number: 1,
    title: 'Stop hunching over your trimmer for the rest of the summer',
    titleAccent: 'The Plumb-Set™ Geometry',
    image: '/reason-1-plumbset.png',
    imageAlt: 'How the Plumb-Set geometry keeps your spine vertical',
    paragraphs: ['The factory handle forces you forward over the head, and twenty minutes in your lower back is locked. The Plumb-Set™ is our fixed grip angle: it extends your grip out to the point where your spine stays vertical and both hands share the load. You stand straight the whole pass, with no hunch and no next-day ache.'],
    bullets: ['Extends your reach so you stop bending down', 'Both hands share the weight evenly', 'Finish the whole yard in one pass'],
  },
  {
    number: 2,
    title: 'Built to outlast the trimmer it bolts to',
    titleAccent: 'The Hold-Fast™ Bracket',
    image: '/reason-2-holdfast.png',
    imageAlt: 'Inside the Hold-Fast bracket: reinforced dual-contact steel clamp',
    paragraphs: ['Cheap aftermarket clamps are thin stamped steel that flex under torque and slip after a few sessions. The Hold-Fast™ is reinforced steel with a dual-contact pad that grips the shaft on two opposite faces. Aluminum-alloy build, soft-touch grip. Tighten it once with the allen key and it holds all season.'],
    bullets: ['Reinforced dual-contact steel bracket', 'Aluminum-alloy, light, no flex', 'Tighten once, no re-adjusting mid-yard'],
  },
  {
    number: 3,
    title: 'Three minutes with an allen key and you’re done',
    titleAccent: 'No drilling. No cutting. No zip ties.',
    image: '/reason-3-install.gif',
    imageAlt: 'A man installing the Yeoman Handle on his trimmer in three minutes',
    paragraphs: ['The Hold-Fast™ slides onto your existing shaft and locks with one bolt. The included allen key does the work, and you do not even have to remove the factory handle. No drilling, no cutting, no zip ties. You are standing straight by the time the coffee is cool.'],
    bullets: ['Three-minute install with the included allen key', 'No drilling, cutting, or zip ties', 'Keep or remove the factory handle, your call'],
    cta: 'Make The Switch',
  },
  {
    number: 4,
    title: 'Six-foot-four or five-foot-six, it dials in to you',
    titleAccent: 'Slide-and-set position, universal shaft fit',
    image: '/reason-4-adjustable.png',
    imageAspect: 'aspect-[4/3]',
    imageAlt: 'One handle dialed in to different heights, from 5 foot 6 to 6 foot 4',
    paragraphs: ['The bracket slides up or down the shaft so you set the grip exactly where your off-hand falls. It fits 26 to 28mm shafts, which covers STIHL, Echo, Husqvarna, Ryobi, EGO, and BLACK and DECKER, gas or battery. One handle, and everyone in the house can set it to their own reach.'],
    bullets: ['Slides to fit five foot eight through six foot five', 'Fits 26 to 28mm shafts, most major brands', 'One handle the whole household can share'],
    cta: 'Fit It To My Trimmer',
  },
  {
    number: 5,
    title: '60-day trial. Lifetime warranty. Keep it either way.',
    titleAccent: 'Switch with complete confidence',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/hf_20260512_054912_54f8385d-d7ae-4ba4-8844-aef29e50a3dc.png?v=1778565243',
    imageAlt: '60-day money-back guarantee and lifetime warranty',
    paragraphs: ['Bolt it on and work a full Saturday. If your back does not feel the difference, you get a full refund, and you do not even have to ship it back. After that it is covered for life: if the bracket wears, the grip separates, or the shaft bends under normal use, we replace it. The last trimmer handle you will buy.'],
    bullets: ['60-day money-back trial on your own yard', 'Lifetime warranty on the handle', 'Full refund, no return to ship back'],
  },
]
