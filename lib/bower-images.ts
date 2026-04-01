/**
 * Bower Poles image registry
 * Per-product isolation: do NOT add keys here to shared images.ts or db-images.ts
 */

const bowerImages: Record<string, { src: string; fallback: string }> = {
  // Hero / lifestyle
  heroImage: { src: "", fallback: "🌿" },

  // Reason card images
  reason1Image: { src: "", fallback: "🪴" },
  reason2Image: { src: "", fallback: "🌱" },
  reason3Image: { src: "", fallback: "📏" },
  reason4Image: { src: "", fallback: "💧" },
  reason5Image: { src: "", fallback: "♻️" },
  reason6Image: { src: "", fallback: "✅" },

  // Product reveal
  productReveal: { src: "", fallback: "📦" },

  // Product showcase
  productMain: { src: "", fallback: "🪴" },
  productThumb1: { src: "", fallback: "1" },
  productThumb2: { src: "", fallback: "2" },
  productThumb3: { src: "", fallback: "3" },
  productThumb4: { src: "", fallback: "4" },
  productThumb5: { src: "", fallback: "5" },
  productThumb6: { src: "", fallback: "6" },

  // Benefit icons
  benefitIcon1: { src: "", fallback: "🌀" },
  benefitIcon2: { src: "", fallback: "🌿" },
  benefitIcon3: { src: "", fallback: "📏" },
  benefitIcon4: { src: "", fallback: "🛡️" },
}

export type BowerImageKey = keyof typeof bowerImages

export function getBowerImage(name: BowerImageKey): string {
  return bowerImages[name]?.src || ""
}

export function getBowerFallback(name: BowerImageKey): string {
  return bowerImages[name]?.fallback || ""
}
