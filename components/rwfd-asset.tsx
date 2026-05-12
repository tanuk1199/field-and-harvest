import { getRwfdImage, getRwfdFallback } from '@/lib/rwfd-images'

type RwfdImageKey = Parameters<typeof getRwfdImage>[0]

/** Renders an <img> if a path is set in rwfd-images.ts, otherwise renders the emoji fallback. */
export function RwfdAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: RwfdImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getRwfdImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getRwfdFallback(name)}</span>
}
