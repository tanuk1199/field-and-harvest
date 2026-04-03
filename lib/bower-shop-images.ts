/**
 * Bower Poles SHOP page image registry
 * Dedicated to /bower-poles-shop — do NOT mix with bower-images.ts (listicle pages)
 */

const bowerShopImages: Record<string, { src: string; fallback: string }> = {
  // Hero
  heroImage: { src: "", fallback: "🌿" },

  // Testimonial card images
  review1Image: { src: "", fallback: "🪴" },
  review2Image: { src: "", fallback: "🌱" },
  review3Image: { src: "", fallback: "🌿" },
  review4Image: { src: "", fallback: "📦" },

  // Benefits grid center image
  benefitsCenterImage: { src: "", fallback: "🪴" },

  // Marquee lifestyle banner
  lifestyleImage: { src: "", fallback: "🌿" },

  // Product showcase
  productMain: { src: "", fallback: "📦" },
  productThumb1: { src: "", fallback: "1" },
  productThumb2: { src: "", fallback: "2" },
  productThumb3: { src: "", fallback: "3" },
  productThumb4: { src: "", fallback: "4" },
  productThumb5: { src: "", fallback: "5" },
  productThumb6: { src: "", fallback: "6" },

  // Guarantee section image
  guaranteeImage: { src: "", fallback: "🛡️" },
}

export type BowerShopImageKey = keyof typeof bowerShopImages

export function getBowerShopImage(name: BowerShopImageKey): string {
  return bowerShopImages[name]?.src || ""
}

export function getBowerShopFallback(name: BowerShopImageKey): string {
  return bowerShopImages[name]?.fallback || ""
}
