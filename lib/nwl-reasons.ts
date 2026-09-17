import { type ReasonData } from '@/components/listicle/reason'

// 5 listicle reason cards. Each: number, title + colored titleAccent, image, alt,
// one paragraph (problem + mechanism + result), 3 bullets, optional cta.
// imageAspect defaults to square; set e.g. 'aspect-[4/3]' for a landscape chart.
export const reasons: ReasonData[] = [
  {
    number: 1,
    title: 'Three heads aim where you point them,',
    titleAccent: 'not where the bracket does',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-06-coverage-diagram_cef0a8d8-38b7-4670-a7c7-659037449c9f.png',
    imageAlt: 'Overhead view of a house at night showing 270 degrees of light coverage from one fixture',
    paragraphs: ['The place you actually want lit is not a spot, it is a shape. A drive runs long. A yard runs wide. A corner is two walls meeting. Almost every outdoor light points one way because its bracket only lets it point one way, so you buy a second one for the other direction. These three heads pivot independently: one down the path, one across the approach, one back along the wall.'],
    bullets: ['270 degrees of coverage from a single mounting point', 'Motion picked up out to 26 feet', '2,500 lumens across 210 LED beads'],
  },
  {
    number: 2,
    title: 'The panel powers it, so it goes',
    titleAccent: 'where no cable reaches',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-11-shed-no-power_e9542a92-0a29-4dc3-b216-37744fd125a8.png',
    imageAlt: 'A solar security light mounted on a garden shed with no mains power, lighting the door and a woodpile',
    paragraphs: ['The shed at the bottom of the yard. The fence line. The back gate. The kennel, the coop, the detached garage. These are the places people give up on, not because they do not need light but because getting power there means a trench, an electrician, or a lead across the grass all winter. The panel is built into the top of the housing, so the supply is already solved.'],
    bullets: ['No cable, no plug, no spare circuit needed', 'Mount it anywhere the sun lands at midday', 'IP65 sealed against rain and snow'],
  },
  {
    number: 3,
    title: 'The yard stays usable',
    titleAccent: 'after the clocks go back',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-10-night-backyard-dog_37855872-c2d2-4779-836e-698119fe49fa.png',
    imageAlt: 'A woman at a back door at night with the yard lit and her dog visible on the grass',
    paragraphs: ['Nothing about the property changes in November. The dog still has to go out. The bins still go to the curb on the same night. You still walk from the car to the door. The only thing that changed is that all of it now happens in the dark, and it keeps happening in the dark until March. A light that comes on because you stepped outside gives that stretch of the year back.'],
    bullets: ['Comes on when something moves, not on a timer you have to set', 'A dim evening mode that jumps to full brightness on movement', 'Or four hours of continuous light from dusk, switched by remote'],
    cta: 'Check Availability',
  },
  {
    number: 4,
    title: 'One bracket, no wiring,',
    titleAccent: 'no electrician',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-13-install-height_24335ee8-a5e9-4817-91da-d8cd9068904f.png',
    imageAspect: 'aspect-[4/3]',
    imageAlt: 'A man mounting the solar security light to a house wall with a cordless screwdriver',
    paragraphs: ['There is nothing to switch off at the breaker before you start, because there is nothing to connect. Four screws and four wall anchors are in the box with the bracket. Hold it up, mark it, drive the screws, angle the heads where you want them. Mount it between about six and a half and eight feet, which is the height the sensor was tuned for, and that is the installation finished.'],
    bullets: ['Screws, anchors, bracket and remote all included', 'Mounts to siding, brick, fence posts and gable ends', 'No permit, no circuit, no trench across the lawn'],
    cta: 'Check Availability',
  },
  {
    number: 5,
    title: 'Sixty nights to decide,',
    titleAccent: 'long after a return window would have shut',
    image: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/nwl-20-hyperreal-wall-macro_0273d7cb-0041-4972-8610-073a37cf4a32.png',
    imageAlt: 'Close up of the solar security light mounted on weathered cedar siding in low afternoon sun',
    paragraphs: ['Put it up and use it through a whole season before you make your mind up. If it has not closed the corner you bought it for, tell us inside sixty days and we refund you. After that it carries a full year of warranty from delivery, so if it stops working in that year we replace it rather than leaving you to find out there is nobody to email.'],
    bullets: ['60 nights to try it, refunded if it is not right', 'A full year of warranty cover after that', 'Flat $9.95 shipping, free on orders over $85'],
  },
]
