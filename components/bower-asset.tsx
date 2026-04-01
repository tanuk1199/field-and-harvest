import { getBowerImage, getBowerFallback, type BowerImageKey } from '@/lib/bower-images'

/** Renders an <img> if a path is set in bower-images.ts, otherwise renders the emoji fallback. */
export function BowerAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: BowerImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getBowerImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getBowerFallback(name)}</span>
}
