import { getWtsImage, getWtsFallback } from '@/lib/wts-images'

type WtsImageKey = Parameters<typeof getWtsImage>[0]

/** Renders an <img> if a path is set in wts-images.ts, otherwise renders the emoji fallback. */
export function WtsAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: WtsImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getWtsImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getWtsFallback(name)}</span>
}
