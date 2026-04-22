import { getMtcImage, getMtcFallback, type MtcImageKey } from '@/lib/mtc-images'

/** Renders an <img> if a path is set in mtc-images.ts, otherwise renders the emoji fallback. */
export function MtcAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: MtcImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getMtcImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getMtcFallback(name)}</span>
}
