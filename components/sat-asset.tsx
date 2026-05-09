import { getSatImage, getSatFallback, type SatImageKey } from '@/lib/sat-images'

/** Renders an <img> if a path is set in sat-images.ts, otherwise renders the emoji fallback. */
export function SatAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: SatImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getSatImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getSatFallback(name)}</span>
}
