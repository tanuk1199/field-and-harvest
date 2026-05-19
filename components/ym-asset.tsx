import { getYmImage, getYmFallback } from '@/lib/ym-images'

type YmImageKey = Parameters<typeof getYmImage>[0]

/** Renders an <img> if a path is set in ym-images.ts, otherwise renders the emoji fallback. */
export function YmAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: YmImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getYmImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getYmFallback(name)}</span>
}
