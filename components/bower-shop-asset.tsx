import { getBowerShopImage, getBowerShopFallback, type BowerShopImageKey } from '@/lib/bower-shop-images'

export function BowerShopAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: BowerShopImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getBowerShopImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getBowerShopFallback(name)}</span>
}
