import { type ReasonData } from '@/components/listicle-dtr/reason'

// 5 reasons for /ditch-the-rake. SOLUTION-AWARE page for The Yeoman Sweep.
//
// ⭐ ORDER IS SET BY AWARENESS. This page takes solution-aware traffic off
// statics that already show the machine, so the product cannot wait until
// reason 4 the way it did in the first build. Reason 2 is now the machine
// actually working. Reasons 3 and 4 then say why the tools he already owns
// cannot do it, which lands better once he has seen the thing that can.
//
// ⭐ EACH REASON PROVES A DIFFERENT THING. The failure mode on the last two
// listicles in this repo was proving ONE thing five times. Here: 1 is the debris
// a mower cannot handle, 2 kills the blower, 3 is the bending, 4 is the machine,
// 5 is the risk. Nothing repeats.
//
// ⚠ PAIN IS SCOPED TO THE MOTION, NEVER CLAIMED FLAT, per rule 1 in
// `Push Lawn Sweeper/README.md`. It is written against bending and raking, never
// as "solves back pain", because this product REMOVES bending and ADDS pushing.
// ⚠ The scoped claim and the DISQUALIFIER are a pair. Reason 4 carries it in the
// open: it has no motor and you supply the power.
// ⛔ "Easy" never appears in a promise, and dog waste is never claimed.
export const reasons: ReasonData[] = [
  {
    number: 1,
    title: 'Half of what is on your lawn cannot be mulched at all',
    titleAccent: 'Needles, acorns, gum balls',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-sweetgum-real-lawn.png?v=1789416734',
    imageAlt: 'A real lawn carpeted end to end with sweetgum balls under a bare gum tree, spilling onto the driveway',
    paragraphs: ['Setting the mower to mulch works on grass. It does very little to **pine needles and pine straw**, and **nothing at all** to acorns, sweetgum balls, magnolia pods or walnut hulls. They are hard, they are round, and a blade just moves them. **They roll away from a rake instead of gathering**, which is why they are still in the lawn in spring. The Sweep does not cut anything. Three V-shaped brushes lift it off the grass and throw it back into the hopper.'],
    bullets: ['Leaves, clippings, needles and pine straw', 'Acorns, sweetgum balls, magnolia pods, walnut hulls', 'Small sticks, twigs and light thatch after dethatching'],
  },
  {
    number: 2,
    title: 'It lifts the debris off the grass while you are still walking',
    titleAccent: 'No motor. The wheels drive the brushes',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-build.png?v=1789378302',
    imageAlt: 'Everything in the box laid out: core unit, push frame, hopper, hardware and guide',
    paragraphs: ['Nothing on it is powered. **The wheels turn the brushes, and they turn them fast: one turn of the wheels spins the brushes five times.** So you walk at a normal pace and the brushes are moving quick enough to flick debris up off the grass. **Ten brush heights** adjust from a handle at the side, so you can change it between the flat part of the lawn and the rough part without going to find a tool. **It weighs 29.77 lb and you supply the power. If pushing a mower is already too much, this will be too.**'],
    video: 'https://cdn.shopify.com/videos/c/vp/c9bd6065364f43f6b82be7185e42f2bb/c9bd6065364f43f6b82be7185e42f2bb.HD-1080p-3.3Mbps-94336178.mp4',
    poster: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/preview_images/c9bd6065364f43f6b82be7185e42f2bb.thumbnail.0000000000.jpg?v=1789378677',
    bullets: ['No gas, no cords, no battery, nothing to service', 'Ten V-brush heights, set from the side by hand', 'Metal frame, and the core arrives assembled'],
  },
  {
    number: 3,
    title: 'A blower moves the pile. It has never picked anything up',
    titleAccent: 'The job starts after the pile exists',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-tile-driveway.png?v=1789356608',
    imageAlt: 'Dry leaves ahead of a sweeper on a concrete driveway with clean concrete behind it',
    paragraphs: ['Gas, cord or battery, a blower does one thing: **it relocates the problem to a spot you then have to kneel next to.** You are not buying horsepower. You are buying the half of the job that happens **after** the pile exists, and that half has always been done by hand. The Sweep skips the pile entirely. There is nothing to come back to, because the debris went into a **7 cubic foot hopper** while you were still walking.'],
    video: 'https://cdn.shopify.com/videos/c/vp/63817aa5985948238541d9baa0548dcb/63817aa5985948238541d9baa0548dcb.HD-1080p-7.2Mbps-94335551.mp4',
    poster: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/preview_images/63817aa5985948238541d9baa0548dcb.thumbnail.0000000000.jpg?v=1789378221',
    bullets: ['No pile to bag afterwards', 'Nothing to start, refuel or charge', 'Quiet enough that the neighbours do not know'],
  },
  {
    number: 4,
    title: 'It is not the raking people mind. It is the forty times you bend down after it',
    titleAccent: 'Four motions become one walk',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-demo-leaves-poster.png?v=1789377426',
    imageAlt: 'A push lawn sweeper clearing leaves off a lawn at walking pace',
    paragraphs: ['Blow the leaves into a pile. Rake what the blower missed. Then **bend down, forty or fifty times, scooping armfuls into a bag that will not stay open.** Then do it again next Saturday because more came down overnight. That is **four separate motions to move leaves about twenty feet**. If your back hurts from bending and raking leaves, that is the part this removes. Not the walking. **The bending.**'],
    video: 'https://cdn.shopify.com/videos/c/vp/dc92eeff97654bedb1a78b932149c493/dc92eeff97654bedb1a78b932149c493.HD-1080p-4.8Mbps-94336431.mp4',
    poster: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/preview_images/dc92eeff97654bedb1a78b932149c493.thumbnail.0000000000.jpg?v=1789378867',
    bullets: ['You walk, it lifts, the hopper fills behind you', 'The hopper comes off on four buckles at waist height', 'Three 300 liter bags come in the box, so bagging is solved before you start'],
  },
  {
    number: 5,
    title: 'Use it for a full fall before you decide anything',
    titleAccent: 'Sixty days, shipping both ways',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ysp-autumn-full-season.png?v=1789416096',
    imageAlt: 'A man pushing the Yeoman Sweep across a leaf covered lawn in full autumn colour, hopper loaded with maple leaves',
    paragraphs: ['This is a fall tool, so a two week window would be worth nothing. **Take it through the whole season.** If it has not taken the bending out of your yard cleanup, tell us inside sixty days. We refund you in full, **with free shipping both ways**. Three 300 liter yard bags, the One-Pass Yard guide, the Tool Audit checklist: all of it comes free in the box, and **you keep it either way.**'],
    bullets: ['60 days, not 14, because this is a seasonal tool', 'Free shipping out and free shipping back', '$77 of gear included, yours to keep regardless'],
  },
]
