/**
 * Bower Poles image registry
 * Per-product isolation: do NOT add keys here to shared images.ts or db-images.ts
 */

const bowerImages: Record<string, { src: string; fallback: string }> = {
  // Hero / lifestyle
  heroImage: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Apr_2_2026_04_53_08_AM.png?v=1775120001", fallback: "🌿" },

  // Reason card images
  reason1Image: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_26_12PM.png?v=1774738367", fallback: "🪴" },
  reason2Image: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Apr_2_2026_04_58_08_AM.png?v=1775120309", fallback: "🌱" },
  reason3Image: { src: "", fallback: "📏" },
  reason4Image: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Apr_2_2026_04_58_37_AM.png?v=1775120442", fallback: "💧" },
  reason5Image: { src: "", fallback: "♻️" },
  reason6Image: { src: "", fallback: "✅" },

  // Product reveal
  productReveal: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_52_31PM.png?v=1774738367", fallback: "📦" },

  // Product showcase
  productMain: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_52_31PM.png?v=1774738367", fallback: "🪴" },
  productThumb1: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_28_2026_06_35_39_PM.png?v=1774738367", fallback: "1" },
  productThumb2: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_28_2026_06_35_16_PM.png?v=1774738367", fallback: "2" },
  productThumb3: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_26_04PM.png?v=1774738367", fallback: "3" },
  productThumb4: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPTImageMar28_2026_06_26_12PM.png?v=1774738367", fallback: "4" },
  productThumb5: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_28_2026_08_08_03_PM.png?v=1774742955", fallback: "5" },
  productThumb6: { src: "https://cdn.shopify.com/s/files/1/0651/8299/0379/files/ChatGPT_Image_Mar_28_2026_08_16_44_PM.png?v=1774743426", fallback: "6" },

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
