import { type ReasonData } from '@/components/listicle-stph/reason'

// /swapping-the-propane-heater : 7 reasons, the last is the guarantee/warranty.
// Copy only from Diesel Heater/brain/CANON.md, SPECS.md, the owner's approved lines and the
// Reddit/review VoC. Sources per sentence in Funnels/builds/2026-10-27-fh-bunkhouse-propane-swap/README.md.
// Never a brand, never a price, never a tank size, run time or fuel-per-hour figure.
const CDN = 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files'

export const reasons: ReasonData[] = [
  {
    number: 1,
    title: 'The heater sits outside the blind.',
    titleAccent: 'Only the warm air comes in.',
    image: '/htlh-hero-blind.webp',
    imageAspect: 'aspect-[4/3]',
    imageAlt: 'The Bunkhouse Diesel Heater on a snowy rock outside a camo hunting blind, a warm-air hose running into the blind',
    paragraphs: [
      'A propane blind heater burns its fuel right beside your chair, so everything it makes stays in the blind with you. The Bunkhouse stands outside on the ground and runs a warm-air hose in, or sits inside with its exhaust pipe run out through the wall. The fumes leave through the pipe. You keep the heat.',
    ],
    bullets: [
      'Exhaust pipe and muffler come in the box',
      'Set it outside and run only the warm-air hose in',
      'Built-in CO alarm sounds at 300 ppm and shuts it off at 500 ppm',
    ],
  },
  {
    number: 2,
    title: 'No water running down the walls.',
    titleAccent: 'Dry gloves, dry glass, dry gear.',
    image: '/htlh-r3-dry-vs-propane.webp',
    imageAlt: 'The same hunting blind twice: warm and dry with the Bunkhouse and its exhaust pipe out through the wall, and dripping wet with a propane heater',
    paragraphs: [
      'Burning propane makes water, and in a closed blind it has nowhere to go. Hunters who run one every season describe the same morning: wet walls, a fogged window, damp gloves. The Bunkhouse vents its exhaust outside, so the moisture leaves with it and the air coming in is hot and dry.',
    ],
    bullets: [
      'A clear window to glass the field',
      'Gloves, calls and jackets stay dry',
      'Nothing to wipe down at the end of the sit',
    ],
  },
  {
    number: 3,
    title: 'Warm air moves through the whole blind.',
    titleAccent: 'Your feet sit in it too.',
    image: `${CDN}/bunkhouse-13-inuse-hunting-blind.png?width=1000`,
    imageAlt: 'A hunter glassing a frosted field at dusk from a wooden blind, the Bunkhouse on the floor beside him with its exhaust pipe running out through the wall',
    paragraphs: [
      'A propane blind heater warms what sits in front of its face. The Bunkhouse blows heated air into the blind, so the air itself turns warm, corner to corner, and your boots are in it as much as your hands. It puts out up to 8 kW and turns down to 2 kW, so a small blind stays comfortable.',
    ],
    bullets: [
      'Up to 8 kW, turns down to 2 kW',
      'Swivel outlet head aims the warm air where you sit',
      'Warm feet and steady hands at the same time',
    ],
    cta: 'See The Bunkhouse',
  },
  {
    number: 4,
    title: 'No little bottles to swap in the dark.',
    titleAccent: 'The fuel tank is built in.',
    image: '/htlh-r6-carry-handle.webp',
    imageAlt: 'A hunter setting the Bunkhouse down on a stump beside his blind, one hand on the top handle',
    paragraphs: [
      'Propane rides in small bottles that run low mid-sit, and a cold bottle loses pressure right when the temperature drops. The Bunkhouse carries its own diesel tank. Fill it at home, carry the whole unit in by its handle in one trip, and keep your hands on the bow or the rifle instead of a valve.',
    ],
    bullets: [
      'Fuel tank built into the unit',
      'Fill it with diesel at home',
      '18 x 12 x 16 inches, 21.8 lb, carry handle on top',
    ],
  },
  {
    number: 5,
    title: 'Warm about three minutes after you start it.',
    titleAccent: 'Then it holds the temperature you set.',
    image: '/stph-r5-remote-thermostat.webp',
    imageAlt: 'A hand holding the Bunkhouse remote in a cabin, the heater on the floor with its exhaust pipe running out through the wall',
    paragraphs: [
      'Start it from the remote, the phone app or the panel and the blind is warm in about 3 minutes. The built-in thermostat holds the temperature you pick, so nobody is reaching down to turn a knob up and down all morning. Set it once and keep your eyes on the field.',
    ],
    bullets: [
      'Remote, phone app or 6-button panel',
      'Thermostat holds your set temperature',
      'Low-voltage, overheat and short-circuit protection',
    ],
  },
  {
    number: 6,
    title: 'It runs off a 12V battery.',
    titleAccent: 'No generator in the timber.',
    image: '/htlh-r5-12v-battery.webp',
    imageAlt: 'The Bunkhouse on a pickup tailgate in snowy timber, plugged into a 12V battery box, a hunting blind behind',
    paragraphs: [
      'Diesel makes the heat. The battery only runs the fan, the fuel pump and the controls, about 2 to 3 amps on 12V once it is lit. Hook it to your truck, a deep cycle battery or a power station, and the woods stay quiet.',
    ],
    bullets: ['Runs on 12V or 24V', 'About 2 to 3 amps once it is lit', 'Low-voltage protection built in'],
    cta: 'Stay Out Till Dark',
  },
  {
    number: 7,
    title: 'Thirty days to hunt with it.',
    titleAccent: 'And a free year of warranty behind it.',
    image: `${CDN}/bunkhouse-pdp-guarantee-seal.png?width=1000`,
    imageAlt: 'The Bunkhouse Diesel Heater with a 30 day money back guarantee seal and a free 1 year warranty plaque',
    paragraphs: [
      'Take it out for your next cold sit. You have 30 days to decide with a full refund either way, and a free 1 year warranty with a real team at Field & Harvest that answers. It Ships Free From USA.',
    ],
    bullets: ['30 days to decide, full refund either way', 'Free 1 year warranty included', 'Ships Free From USA'],
    cta: 'Check Availability',
  },
]
