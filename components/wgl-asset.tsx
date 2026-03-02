import { getWglImage, getWglFallback } from '@/lib/wgl-images'

type WglImageKey = Parameters<typeof getWglImage>[0]

/** Renders an <img> if a path is set in wgl-images.ts, otherwise renders the emoji fallback. */
export function WglAsset({
  name,
  alt,
  className,
  fallbackClassName,
}: {
  name: WglImageKey
  alt: string
  className?: string
  fallbackClassName?: string
}) {
  const src = getWglImage(name)

  if (src) {
    return <img src={src} alt={alt} className={className} />
  }

  return <span className={fallbackClassName}>{getWglFallback(name)}</span>
}
